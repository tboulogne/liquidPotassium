import { Type } from "typebox";
import type { AnyAgentTool } from "openclaw/plugin-sdk/plugin-entry";
import { jsonResult } from "openclaw/plugin-sdk/agent-runtime";

import {
  createInfomaniakClient,
  createResourceDiscovery,
  describeOperation,
  describeOperationRequirements,
  describeResourceKind,
  getOperation,
  listDomains,
  listResourceDiscoveryRecipes,
  listOperations,
  searchOperations,
  type InfomaniakClientConfig,
  type MailDraftPayload,
  type MailMoveMessagesPayload,
  type OperationRequirement,
  type OperationRequest,
  type OperationSearchOptions,
  type OperationDescription,
  type OperationMetadata,
} from "../index.js";

export interface InfomaniakOpenClawPluginConfig {
  token?: string;
  baseUrl?: string;
  mailApplicationBaseUrl?: string;
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

export type OperationDescriptionWithRequirements = OperationDescription & {
  requirements: OperationRequirement;
};

const emptyParamsSchema = Type.Object({}, { additionalProperties: false });

export const InfomaniakPluginConfigJsonSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    token: { type: "string", description: "Infomaniak API bearer token." },
    baseUrl: { type: "string", description: "Infomaniak API base URL. Defaults to https://api.infomaniak.com." },
    mailApplicationBaseUrl: {
      type: "string",
      description: "Infomaniak Mail application API base URL. Defaults to https://mail.infomaniak.com.",
    },
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

const mailApplicationActionSchema = Type.Union([
  Type.Literal("listUserMailboxes"),
  Type.Literal("listFolders"),
  Type.Literal("listThreads"),
  Type.Literal("getMessage"),
  Type.Literal("getMailboxQuota"),
  Type.Literal("createDraft"),
  Type.Literal("updateDraft"),
  Type.Literal("getDraft"),
  Type.Literal("deleteDraft"),
  Type.Literal("scheduleDraft"),
  Type.Literal("deleteSchedule"),
  Type.Literal("cancelSend"),
  Type.Literal("moveMessages"),
  Type.Literal("currentMyKSuite"),
]);

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

export const infomaniakDiscoverToolSchema = Type.Object(
  {
    domain: Type.Optional(Type.String({ description: "Restrict discovery to one Infomaniak domain." })),
    kind: Type.Optional(Type.String({ description: "Resource kind to discover, such as kdriveDrive, mailAccess, or newsletterDomain." })),
    operation_id: Type.Optional(Type.String({ description: "Operation ID whose required resources should guide discovery." })),
    parents: Type.Optional(Type.Record(Type.String(), Type.Union([Type.String(), Type.Number()]), { description: "Known parent resource values." })),
    limit: Type.Optional(Type.Integer({ description: "Maximum number of resources to return.", minimum: 1, maximum: 100 })),
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

export const infomaniakMailApplicationToolSchema = Type.Object(
  {
    action: mailApplicationActionSchema,
    mailbox_uuid: Type.Optional(Type.String({ description: "Mail application mailbox UUID." })),
    folder_id: Type.Optional(Type.String({ description: "Mail application folder identifier." })),
    message_resource: Type.Optional(Type.String({ description: "Message resource path or same-origin mail application URL returned by the thread list." })),
    mailbox: Type.Optional(Type.String({ description: "Mailbox name for quota lookups." })),
    product_id: Type.Optional(Type.Integer({ description: "Mail product ID for quota lookups.", minimum: 1 })),
    draft_uuid: Type.Optional(Type.String({ description: "Draft UUID." })),
    draft_resource: Type.Optional(Type.String({ description: "Draft resource path returned by the mail application API." })),
    schedule_action: Type.Optional(Type.String({ description: "Schedule action resource path returned by the mail application API." })),
    cancel_send_resource: Type.Optional(Type.String({ description: "Cancel-send resource path returned by the mail application API." })),
    schedule_date: Type.Optional(Type.String({ description: "ISO-like schedule date accepted by Infomaniak Mail." })),
    offset: Type.Optional(Type.Integer({ description: "Thread list offset.", minimum: 0 })),
    thread_mode: Type.Optional(Type.String({ description: "Thread mode, usually on or off." })),
    filter: Type.Optional(Type.String({ description: "Thread list filter." })),
    with: Type.Optional(Type.String({ description: "Included resources requested from the mail application API." })),
    preferred_format: Type.Optional(Type.String({ description: "Message format, usually html or text." })),
    unit: Type.Optional(Type.String({ description: "Quota unit, usually B, kB, or MB." })),
    payload: Type.Optional(Type.Unknown({ description: "Draft or message-move payload." })),
    headers: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Additional request headers." })),
    confirm_mutating: Type.Optional(Type.Boolean({ description: "Required for mutating mail application actions when plugin config allows mutation." })),
  },
  { additionalProperties: false },
);

type MailApplicationActionName =
  | "listUserMailboxes"
  | "listFolders"
  | "listThreads"
  | "getMessage"
  | "getMailboxQuota"
  | "createDraft"
  | "updateDraft"
  | "getDraft"
  | "deleteDraft"
  | "scheduleDraft"
  | "deleteSchedule"
  | "cancelSend"
  | "moveMessages"
  | "currentMyKSuite";

interface MailApplicationActionMetadata {
  operationId: string;
  action: MailApplicationActionName;
  domain: "mail";
  method: string;
  path: string;
  summary: string;
  mutating: boolean;
}

const mailApplicationActions = [
  {
    operationId: "MailApplication/ListUserMailboxes",
    action: "listUserMailboxes",
    domain: "mail",
    method: "GET",
    path: "/api/mailbox",
    summary: "List mailboxes available to the current user in the Infomaniak Mail application.",
    mutating: false,
  },
  {
    operationId: "MailApplication/ListFolders",
    action: "listFolders",
    domain: "mail",
    method: "GET",
    path: "/api/mail/{mailbox_uuid}/folder",
    summary: "List folders for a mailbox in the Infomaniak Mail application.",
    mutating: false,
  },
  {
    operationId: "MailApplication/ListThreads",
    action: "listThreads",
    domain: "mail",
    method: "GET",
    path: "/api/mail/{mailbox_uuid}/folder/{folder_id}/message",
    summary: "List mailbox threads or messages for a folder in the Infomaniak Mail application.",
    mutating: false,
  },
  {
    operationId: "MailApplication/GetMessage",
    action: "getMessage",
    domain: "mail",
    method: "GET",
    path: "/api/mail/{mailbox_uuid}/folder/{folder_id}/message/{message_uid}",
    summary: "Read one message resource returned by the Infomaniak Mail application thread list.",
    mutating: false,
  },
  {
    operationId: "MailApplication/GetMailboxQuota",
    action: "getMailboxQuota",
    domain: "mail",
    method: "GET",
    path: "/api/mailbox/quotas",
    summary: "Read mailbox quota information from the Infomaniak Mail application.",
    mutating: false,
  },
  {
    operationId: "MailApplication/CreateDraft",
    action: "createDraft",
    domain: "mail",
    method: "POST",
    path: "/api/mail/{mailbox_uuid}/draft",
    summary: "Create a draft in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/UpdateDraft",
    action: "updateDraft",
    domain: "mail",
    method: "PUT",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}",
    summary: "Update a draft in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/GetDraft",
    action: "getDraft",
    domain: "mail",
    method: "GET",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}",
    summary: "Read a draft in the Infomaniak Mail application.",
    mutating: false,
  },
  {
    operationId: "MailApplication/DeleteDraft",
    action: "deleteDraft",
    domain: "mail",
    method: "DELETE",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}",
    summary: "Delete a draft in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/ScheduleDraft",
    action: "scheduleDraft",
    domain: "mail",
    method: "PUT",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}/schedule",
    summary: "Schedule a draft send in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/DeleteSchedule",
    action: "deleteSchedule",
    domain: "mail",
    method: "DELETE",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}/schedule",
    summary: "Delete a scheduled draft send in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/CancelSend",
    action: "cancelSend",
    domain: "mail",
    method: "PUT",
    path: "/api/mail/{mailbox_uuid}/draft/{draft_uuid}/cancel",
    summary: "Cancel a pending send in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/MoveMessages",
    action: "moveMessages",
    domain: "mail",
    method: "POST",
    path: "/api/mail/{mailbox_uuid}/message/move",
    summary: "Move messages between folders in the Infomaniak Mail application.",
    mutating: true,
  },
  {
    operationId: "MailApplication/CurrentMyKSuite",
    action: "currentMyKSuite",
    domain: "mail",
    method: "GET",
    path: "/1/my_ksuite/current",
    summary: "Read the current user's kSuite mail context from the public API host.",
    mutating: false,
  },
] as const satisfies readonly MailApplicationActionMetadata[];

const mailApplicationActionByName = new Map<string, MailApplicationActionMetadata>(mailApplicationActions.map((action) => [action.action, action]));

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
      name: "infomaniak_discover",
      label: "Infomaniak Discover",
      description: "Discover resource IDs for Infomaniak operations, or explain when public discovery is unavailable.",
      parameters: infomaniakDiscoverToolSchema,
      executionMode: "sequential",
      execute: async (_toolCallId, params, signal) => jsonResult(await discoverAllowedResources(config, options.fetch, asRecord(params), signal)),
    },
    {
      name: "infomaniak_mail_application",
      label: "Infomaniak Mail Application",
      description:
        "Call reviewed Infomaniak Mail application actions for mailbox content, threads, messages, quotas, drafts, schedules, and message moves.",
      parameters: infomaniakMailApplicationToolSchema,
      executionMode: "sequential",
      execute: async (_toolCallId, params, signal) => jsonResult(await callMailApplicationAction(config, options.fetch, asRecord(params), signal)),
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
    ...optionalStringProperty(record, "mailApplicationBaseUrl"),
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
  for (const action of mailApplicationActions) {
    if (mailApplicationActionAllowed(config, action)) {
      counts.set(action.domain, (counts.get(action.domain) ?? 0) + 1);
    }
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

function describeAllowedOperation(config: InfomaniakOpenClawPluginConfig, operationId: string): OperationDescriptionWithRequirements {
  getAllowedOperation(config, operationId);
  return {
    ...describeOperation(operationId),
    requirements: describeOperationRequirements(operationId),
  };
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

async function discoverAllowedResources(
  config: InfomaniakOpenClawPluginConfig,
  fetchImpl: typeof fetch | undefined,
  params: Record<string, unknown>,
  signal: AbortSignal | undefined,
) {
  const domain = stringParam(params.domain);
  const kind = stringParam(params.kind);
  const operationId = stringParam(params.operation_id);
  if (domain && !domainAllowed(config, domain)) {
    throw new Error(`Infomaniak domain is not allowed by plugin policy: ${domain}`);
  }
  if (kind) {
    const resourceKind = describeResourceKind(kind);
    if (!domainAllowed(config, resourceKind.domain)) {
      throw new Error(`Infomaniak resource kind is not allowed by plugin policy: ${kind}`);
    }
  }
  if (operationId) {
    getAllowedOperation(config, operationId);
  }
  assertDiscoveryRecipeAllowed(config, {
    ...(domain ? { domain } : {}),
    ...(kind ? { kind } : {}),
    ...(operationId ? { operationId } : {}),
  });
  const client = createInfomaniakClient(buildClientConfig(config, fetchImpl));
  const discovery = createResourceDiscovery(client);
  const discoveryOptions = {
    ...(domain ? { domain } : {}),
    ...(kind ? { kind } : {}),
    ...(operationId ? { operationId } : {}),
    ...optionalProperty("parents", stringNumberRecord(params.parents)),
    ...optionalProperty("limit", numberParam(params.limit)),
    ...optionalProperty("signal", signal),
  };
  return discovery.discover(discoveryOptions);
}

async function callMailApplicationAction(
  config: InfomaniakOpenClawPluginConfig,
  fetchImpl: typeof fetch | undefined,
  params: Record<string, unknown>,
  signal: AbortSignal | undefined,
) {
  const action = getAllowedMailApplicationAction(config, readMailApplicationAction(params));
  assertMutationAllowed(config, action, params.confirm_mutating === true);
  const client = createInfomaniakClient(buildClientConfig(config, fetchImpl));
  const requestOptions = buildMailApplicationRequestOptions(params, signal);
  const result = await executeMailApplicationAction(client, action, params, requestOptions);
  return { operation: summarizeMailApplicationAction(action), result };
}

async function executeMailApplicationAction(
  client: ReturnType<typeof createInfomaniakClient>,
  action: MailApplicationActionMetadata,
  params: Record<string, unknown>,
  requestOptions: ReturnType<typeof buildMailApplicationRequestOptions>,
): Promise<unknown> {
  switch (action.action) {
    case "listUserMailboxes":
      return client.mail.application.listUserMailboxes(requestOptions);
    case "listFolders":
      return client.mail.application.listFolders(requiredString(params, "mailbox_uuid"), requestOptions);
    case "listThreads":
      return client.mail.application.listThreads(requiredString(params, "mailbox_uuid"), requiredString(params, "folder_id"), {
        ...requestOptions,
        ...optionalProperty("offset", nonNegativeIntegerParam(params.offset)),
        ...optionalProperty("threadMode", stringParam(params.thread_mode)),
        ...optionalProperty("filter", stringParam(params.filter)),
      });
    case "getMessage":
      return client.mail.application.getMessage(requiredString(params, "message_resource"), {
        ...requestOptions,
        ...optionalProperty("preferredFormat", stringParam(params.preferred_format)),
      });
    case "getMailboxQuota":
      return client.mail.application.getMailboxQuota(requiredString(params, "mailbox"), requiredPositiveInteger(params, "product_id"), {
        ...requestOptions,
        ...optionalProperty("unit", stringParam(params.unit)),
      });
    case "createDraft":
      return client.mail.application.createDraft(requiredString(params, "mailbox_uuid"), requiredPayload<MailDraftPayload>(params, "payload"), requestOptions);
    case "updateDraft":
      return client.mail.application.updateDraft(
        requiredString(params, "mailbox_uuid"),
        requiredString(params, "draft_uuid"),
        requiredPayload<MailDraftPayload>(params, "payload"),
        requestOptions,
      );
    case "getDraft":
      return client.mail.application.getDraft(requiredString(params, "mailbox_uuid"), requiredString(params, "draft_uuid"), requestOptions);
    case "deleteDraft":
      return client.mail.application.deleteDraft(requiredString(params, "mailbox_uuid"), requiredString(params, "draft_uuid"), requestOptions);
    case "scheduleDraft":
      return client.mail.application.scheduleDraft(requiredString(params, "draft_resource"), requiredString(params, "schedule_date"), requestOptions);
    case "deleteSchedule":
      return client.mail.application.deleteSchedule(requiredString(params, "schedule_action"), requestOptions);
    case "cancelSend":
      return client.mail.application.cancelSend(requiredString(params, "cancel_send_resource"), requestOptions);
    case "moveMessages":
      return client.mail.application.moveMessages(
        requiredString(params, "mailbox_uuid"),
        requiredPayload<MailMoveMessagesPayload>(params, "payload"),
        requestOptions,
      );
    case "currentMyKSuite":
      return client.mail.application.currentMyKSuite(requestOptions);
  }
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

function getAllowedMailApplicationAction(config: InfomaniakOpenClawPluginConfig, actionName: string): MailApplicationActionMetadata {
  const action = mailApplicationActionByName.get(actionName);
  if (!action) {
    throw new Error(`Unknown Infomaniak Mail application action: ${actionName}`);
  }
  if (!mailApplicationActionAllowed(config, action)) {
    throw new Error(`Infomaniak Mail application action is not allowed by plugin policy: ${action.operationId}`);
  }
  return action;
}

function mailApplicationActionAllowed(config: InfomaniakOpenClawPluginConfig, action: MailApplicationActionMetadata): boolean {
  const allowedOperationSet = new Set(config.allowedOperations);
  const deniedOperationSet = new Set(config.deniedOperations);
  if (!domainAllowed(config, action.domain)) {
    return false;
  }
  if (allowedOperationSet.size > 0 && !allowedOperationSet.has(action.operationId)) {
    return false;
  }
  return !deniedOperationSet.has(action.operationId);
}

function domainAllowed(config: InfomaniakOpenClawPluginConfig, domain: string): boolean {
  return config.allowedDomains.length === 0 || config.allowedDomains.includes(domain);
}

function assertDiscoveryRecipeAllowed(
  config: InfomaniakOpenClawPluginConfig,
  options: { domain?: string; kind?: string; operationId?: string },
): void {
  const recipes = options.kind
    ? listResourceDiscoveryRecipes({ kind: options.kind })
    : options.domain
      ? listResourceDiscoveryRecipes({ domain: options.domain })
      : [];
  for (const recipe of recipes.slice(0, 1)) {
    getAllowedOperation(config, recipe.operationId);
  }
  if (options.operationId) {
    for (const suggestion of describeOperationRequirements(options.operationId).suggestions) {
      if (suggestion.operationId) {
        getAllowedOperation(config, suggestion.operationId);
      }
    }
  }
}

function assertMutationAllowed(config: InfomaniakOpenClawPluginConfig, operation: Pick<OperationMetadata, "operationId" | "mutating">, confirmed: boolean): void {
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

function summarizeMailApplicationAction(action: MailApplicationActionMetadata): OperationSummary {
  return {
    operationId: action.operationId,
    functionName: action.action,
    domain: action.domain,
    method: action.method,
    path: action.path,
    summary: action.summary,
    mutating: action.mutating,
    deprecated: false,
    docs: null,
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
  if (config.mailApplicationBaseUrl) {
    clientConfig.mailApplicationBaseUrl = config.mailApplicationBaseUrl;
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

function buildMailApplicationRequestOptions(record: Record<string, unknown>, signal: AbortSignal | undefined) {
  return {
    ...optionalProperty("headers", asOptionalRecord(record.headers)),
    ...optionalProperty("signal", signal),
    ...optionalProperty("includedResources", stringParam(record.with)),
  };
}

function readOperationId(params: unknown): string {
  const operationId = stringParam(asRecord(params).operation_id);
  if (!operationId) {
    throw new Error("operation_id is required.");
  }
  return operationId;
}

function readMailApplicationAction(params: Record<string, unknown>): string {
  const action = stringParam(params.action);
  if (!action) {
    throw new Error("action is required.");
  }
  return action;
}

function requiredString(params: Record<string, unknown>, key: string): string {
  const value = stringParam(params[key]);
  if (!value) {
    throw new Error(`${key} is required.`);
  }
  return value;
}

function requiredPositiveInteger(params: Record<string, unknown>, key: string): number {
  const value = numberParam(params[key]);
  if (value === undefined) {
    throw new Error(`${key} must be a positive integer.`);
  }
  return value;
}

function requiredPayload<TPayload>(params: Record<string, unknown>, key: string): TPayload {
  const payload = params[key];
  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    throw new Error(`${key} must be an object.`);
  }
  return payload as TPayload;
}

function optionalStringProperty(
  record: Record<string, unknown>,
  key: "token" | "baseUrl" | "mailApplicationBaseUrl",
): Partial<Pick<InfomaniakOpenClawPluginConfig, "token" | "baseUrl" | "mailApplicationBaseUrl">> {
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

function nonNegativeIntegerParam(value: unknown): number | undefined {
  return typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : undefined;
}

function asOptionalRecord(value: unknown): Record<string, unknown> | undefined {
  return value === undefined ? undefined : asRecord(value);
}

function stringNumberRecord(value: unknown): Record<string, string | number> | undefined {
  const record = asOptionalRecord(value);
  if (!record) {
    return undefined;
  }
  return Object.fromEntries(
    Object.entries(record).filter((entry): entry is [string, string | number] => typeof entry[1] === "string" || typeof entry[1] === "number"),
  );
}

function optionalProperty<K extends string, V>(key: K, value: V | undefined): Partial<Record<K, V>> {
  return value === undefined ? {} : { [key]: value } as Partial<Record<K, V>>;
}

function asRecord(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return {};
  }
  return value as Record<string, unknown>;
}
