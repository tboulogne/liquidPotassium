import { Type } from "typebox";
import type { AnyAgentTool } from "openclaw/plugin-sdk/plugin-entry";
import { jsonResult } from "openclaw/plugin-sdk/agent-runtime";

import {
  createInfomaniakClient,
  describeOperation,
  getOperation,
  listDomains,
  listOperations,
  searchOperations,
  type InfomaniakClientConfig,
  type OperationRequest,
  type OperationSearchOptions,
  type OperationDescription,
  type OperationMetadata,
} from "../index.js";

export interface InfomaniakOpenClawPluginConfig {
  token?: string;
  baseUrl?: string;
  allowedDomains: readonly string[];
  allowedOperations: readonly string[];
  deniedOperations: readonly string[];
  blockMutating: boolean;
}

export interface InfomaniakOpenClawToolsOptions {
  config?: Record<string, unknown> | InfomaniakOpenClawPluginConfig;
  fetch?: typeof fetch;
}

export interface OperationSummary {
  operationId: string;
  functionName: string;
  domain: string;
  method: string;
  path: string;
  summary: string;
  mutating: boolean;
  deprecated: boolean;
  docs: {
    url: string;
    categoryPath: readonly string[];
    beta: boolean;
  } | null;
}

const emptyParamsSchema = Type.Object({}, { additionalProperties: false });

export const InfomaniakPluginConfigJsonSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    token: { type: "string", description: "Infomaniak API bearer token." },
    baseUrl: { type: "string", description: "Infomaniak API base URL. Defaults to https://api.infomaniak.com." },
    allowedDomains: {
      type: "array",
      items: { type: "string" },
      description: "Optional domain allowlist such as kdrive, mail, or kchat.",
    },
    allowedOperations: {
      type: "array",
      items: { type: "string" },
      description: "Optional normalized operation ID allowlist.",
    },
    deniedOperations: {
      type: "array",
      items: { type: "string" },
      description: "Optional normalized operation ID denylist.",
    },
    blockMutating: {
      type: "boolean",
      default: true,
      description: "When true, mutating operations are blocked even if requested explicitly.",
    },
  },
} as const;

export const infomaniakDomainsToolSchema = emptyParamsSchema;

export const infomaniakSearchToolSchema = Type.Object(
  {
    query: Type.Optional(Type.String({ description: "Search text for operation IDs, paths, summaries, descriptions, tags, domains, or methods." })),
    domain: Type.Optional(Type.String({ description: "Restrict results to one Infomaniak domain." })),
    method: Type.Optional(Type.String({ description: "Restrict results to one HTTP method." })),
    mutating: Type.Optional(Type.Boolean({ description: "Restrict results by mutating status." })),
    limit: Type.Optional(Type.Integer({ description: "Maximum number of operations to return.", minimum: 1, maximum: 50 })),
  },
  { additionalProperties: false },
);

export const infomaniakDescribeToolSchema = Type.Object(
  {
    operation_id: Type.String({ description: "Normalized Infomaniak operation ID to describe." }),
  },
  { additionalProperties: false },
);

export const infomaniakCallToolSchema = Type.Object(
  {
    operation_id: Type.String({ description: "Normalized Infomaniak operation ID to call." }),
    path: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Path parameter values." })),
    query: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Query parameter values." })),
    headers: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Additional request headers." })),
    body: Type.Optional(Type.Unknown({ description: "JSON, form, or binary request body." })),
    confirm_mutating: Type.Optional(Type.Boolean({ description: "Required for mutating operations when plugin config allows mutation." })),
  },
  { additionalProperties: false },
);

export function createInfomaniakOpenClawTools(options: InfomaniakOpenClawToolsOptions = {}): AnyAgentTool[] {
  const config = resolveInfomaniakPluginConfig(options.config);

  return [
    {
      name: "infomaniak_domains",
      label: "Infomaniak Domains",
      description: "List Infomaniak API domains available through the current OpenClaw plugin policy.",
      parameters: infomaniakDomainsToolSchema,
      execute: async () => jsonResult({ domains: listAllowedDomains(config) }),
    },
    {
      name: "infomaniak_search",
      label: "Infomaniak Search",
      description: "Search Infomaniak API operations by domain, method, path, operation ID, summary, description, original operation ID, or tags.",
      parameters: infomaniakSearchToolSchema,
      execute: async (_toolCallId, params) =>
        jsonResult({
          operations: searchAllowedOperations(config, asRecord(params)).map(summarizeOperation),
        }),
    },
    {
      name: "infomaniak_describe",
      label: "Infomaniak Describe",
      description: "Describe one Infomaniak API operation before calling it.",
      parameters: infomaniakDescribeToolSchema,
      execute: async (_toolCallId, params) => jsonResult({ operation: describeAllowedOperation(config, readOperationId(params)) }),
    },
    {
      name: "infomaniak_call",
      label: "Infomaniak Call",
      description: "Call one Infomaniak API operation through the SDK. Use search and describe first; mutating operations require explicit confirmation and plugin permission.",
      parameters: infomaniakCallToolSchema,
      executionMode: "sequential",
      execute: async (_toolCallId, params, signal) => {
        const record = asRecord(params);
        const operation = getAllowedOperation(config, readOperationId(record));
        assertMutationAllowed(config, operation, record.confirm_mutating === true);
        const client = createInfomaniakClient(buildClientConfig(config, options.fetch));
        const request = buildOperationRequest(record, signal);
        const result = await client.requestOperation(operation.operationId, request);
        return jsonResult({ operation: summarizeOperation(operation), result });
      },
    },
  ];
}

export function resolveInfomaniakPluginConfig(config: Record<string, unknown> | InfomaniakOpenClawPluginConfig | undefined): InfomaniakOpenClawPluginConfig {
  const record = asRecord(config ?? {});
  return {
    ...optionalStringProperty(record, "token"),
    ...optionalStringProperty(record, "baseUrl"),
    allowedDomains: stringArrayProperty(record, "allowedDomains"),
    allowedOperations: stringArrayProperty(record, "allowedOperations"),
    deniedOperations: stringArrayProperty(record, "deniedOperations"),
    blockMutating: booleanProperty(record, "blockMutating", true),
  };
}

function listAllowedDomains(config: InfomaniakOpenClawPluginConfig) {
  const counts = new Map<string, number>();
  for (const operation of allowedOperations(config)) {
    counts.set(operation.domain, (counts.get(operation.domain) ?? 0) + 1);
  }
  return listDomains()
    .filter((domain) => counts.has(domain.domain))
    .map((domain) => ({ domain: domain.domain, operationCount: counts.get(domain.domain) as number }));
}

function searchAllowedOperations(config: InfomaniakOpenClawPluginConfig, params: Record<string, unknown>): readonly OperationMetadata[] {
  const query = stringParam(params.query);
  const domain = stringParam(params.domain);
  const method = stringParam(params.method);
  const limit = numberParam(params.limit) ?? 20;
  const mutating = typeof params.mutating === "boolean" ? params.mutating : undefined;
  const searchOptions: OperationSearchOptions = { limit };
  if (query) {
    searchOptions.query = query;
  }
  if (domain) {
    searchOptions.domain = domain;
  }
  if (method) {
    searchOptions.method = method;
  }
  if (mutating !== undefined) {
    searchOptions.mutating = mutating;
  }
  return searchOperations(searchOptions).filter((operation) => operationAllowed(config, operation));
}

function describeAllowedOperation(config: InfomaniakOpenClawPluginConfig, operationId: string): OperationDescription {
  getAllowedOperation(config, operationId);
  return describeOperation(operationId);
}

function getAllowedOperation(config: InfomaniakOpenClawPluginConfig, operationId: string): OperationMetadata {
  const operation = getOperation(operationId);
  if (!operationAllowed(config, operation)) {
    throw new Error(`Infomaniak operation is not allowed by plugin policy: ${operationId}`);
  }
  return operation;
}

function allowedOperations(config: InfomaniakOpenClawPluginConfig): readonly OperationMetadata[] {
  return listOperations().filter((operation) => operationAllowed(config, operation));
}

function operationAllowed(config: InfomaniakOpenClawPluginConfig, operation: OperationMetadata): boolean {
  const allowedDomainSet = new Set(config.allowedDomains);
  const allowedOperationSet = new Set(config.allowedOperations);
  const deniedOperationSet = new Set(config.deniedOperations);

  if (allowedDomainSet.size > 0 && !allowedDomainSet.has(operation.domain)) {
    return false;
  }
  if (allowedOperationSet.size > 0 && !allowedOperationSet.has(operation.operationId)) {
    return false;
  }
  return !deniedOperationSet.has(operation.operationId);
}

function assertMutationAllowed(config: InfomaniakOpenClawPluginConfig, operation: OperationMetadata, confirmed: boolean): void {
  if (!operation.mutating) {
    return;
  }
  if (config.blockMutating) {
    throw new Error(`Mutating Infomaniak operation is blocked by plugin config: ${operation.operationId}`);
  }
  if (!confirmed) {
    throw new Error(`Mutating Infomaniak operation requires confirm_mutating=true: ${operation.operationId}`);
  }
}

function summarizeOperation(operation: OperationMetadata): OperationSummary {
  return {
    operationId: operation.operationId,
    functionName: operation.functionName,
    domain: operation.domain,
    method: operation.method,
    path: operation.path,
    summary: operation.summary,
    mutating: operation.mutating,
    deprecated: operation.deprecated,
    docs: operation.docs
      ? {
          url: operation.docs.url,
          categoryPath: operation.docs.categoryPath,
          beta: operation.docs.beta,
        }
      : null,
  };
}

function buildClientConfig(config: InfomaniakOpenClawPluginConfig, fetchImpl: typeof fetch | undefined): InfomaniakClientConfig {
  const clientConfig: InfomaniakClientConfig = {};
  if (config.token) {
    clientConfig.token = config.token;
  }
  if (config.baseUrl) {
    clientConfig.baseUrl = config.baseUrl;
  }
  if (fetchImpl) {
    clientConfig.fetch = fetchImpl;
  }
  return clientConfig;
}

function buildOperationRequest(record: Record<string, unknown>, signal: AbortSignal | undefined): OperationRequest {
  const request: OperationRequest = {};
  const path = asOptionalRecord(record.path);
  const query = asOptionalRecord(record.query);
  const headers = asOptionalRecord(record.headers);
  if (path) {
    request.path = path;
  }
  if (query) {
    request.query = query;
  }
  if (headers) {
    request.headers = headers;
  }
  if ("body" in record) {
    request.body = record.body;
  }
  if (signal) {
    request.signal = signal;
  }
  return request;
}

function readOperationId(params: unknown): string {
  const operationId = stringParam(asRecord(params).operation_id);
  if (!operationId) {
    throw new Error("operation_id is required.");
  }
  return operationId;
}

function optionalStringProperty(record: Record<string, unknown>, key: "token" | "baseUrl"): Partial<Pick<InfomaniakOpenClawPluginConfig, "token" | "baseUrl">> {
  const value = stringParam(record[key]);
  return value ? { [key]: value } : {};
}

function stringArrayProperty(record: Record<string, unknown>, key: "allowedDomains" | "allowedOperations" | "deniedOperations"): readonly string[] {
  const value = record[key];
  if (value === undefined) {
    return [];
  }
  if (!Array.isArray(value)) {
    throw new Error(`${key} must be an array of strings.`);
  }
  return value.map((entry) => stringParam(entry)).filter((entry): entry is string => Boolean(entry));
}

function booleanProperty(record: Record<string, unknown>, key: "blockMutating", defaultValue: boolean): boolean {
  const value = record[key];
  if (value === undefined) {
    return defaultValue;
  }
  if (typeof value !== "boolean") {
    throw new Error(`${key} must be a boolean.`);
  }
  return value;
}

function stringParam(value: unknown): string | undefined {
  return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}

function numberParam(value: unknown): number | undefined {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : undefined;
}

function asOptionalRecord(value: unknown): Record<string, unknown> | undefined {
  return value === undefined ? undefined : asRecord(value);
}

function asRecord(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return {};
  }
  return value as Record<string, unknown>;
}
