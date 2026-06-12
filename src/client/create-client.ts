import { createDomainOperations } from "../generated/operations/index.js";
import { operations } from "../generated/catalog/operations.js";
import type { OperationMetadata } from "../generated/catalog/types.js";
import type { GeneratedOperationClient, OperationRequest } from "./generated-operation-client.js";
import { InfomaniakError, InfomaniakOperationError } from "./errors.js";

export interface InfomaniakClientConfig {
  token?: string | (() => string | Promise<string>);
  baseUrl?: string;
  fetch?: typeof fetch;
  headers?: HeadersInit | (() => HeadersInit | Promise<HeadersInit>);
  userAgent?: string;
}

export interface RawRequestOptions extends OperationRequest {
  method?: string;
  operationId?: string;
  requestContentTypes?: readonly string[];
}

export interface RawClient {
  GET(path: string, options?: RawRequestOptions): Promise<unknown>;
  POST(path: string, options?: RawRequestOptions): Promise<unknown>;
  PUT(path: string, options?: RawRequestOptions): Promise<unknown>;
  PATCH(path: string, options?: RawRequestOptions): Promise<unknown>;
  DELETE(path: string, options?: RawRequestOptions): Promise<unknown>;
}

export type DomainClients = ReturnType<typeof createDomainOperations>;

export type InfomaniakClient = GeneratedOperationClient &
  DomainClients & {
    raw: RawClient;
    request(path: string, options?: RawRequestOptions): Promise<unknown>;
  };

const defaultBaseUrl = "https://api.infomaniak.com";
const operationById = new Map<string, OperationMetadata>(operations.map((operation) => [operation.operationId, operation]));

export function createInfomaniakClient(config: InfomaniakClientConfig = {}): InfomaniakClient {
  const fetchImpl = config.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new InfomaniakError("No fetch implementation is available. Provide config.fetch.");
  }

  const generatedClient: GeneratedOperationClient = {
    async requestOperation(operationId, request) {
      const operation = operationById.get(operationId);
      if (!operation) {
        throw new InfomaniakError(`Unknown Infomaniak operation: ${operationId}`);
      }
      return requestPath(fetchImpl, config, operation.path, {
        ...request,
        method: operation.method,
        operationId,
        requestContentTypes: operation.requestContentTypes,
      });
    },
  };

  const raw: RawClient = {
    GET: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "GET" }),
    POST: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "POST" }),
    PUT: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "PUT" }),
    PATCH: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "PATCH" }),
    DELETE: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "DELETE" }),
  };

  return {
    ...generatedClient,
    ...createDomainOperations(generatedClient),
    raw,
    request: (path, options) => requestPath(fetchImpl, config, path, options),
  };
}

async function requestPath(
  fetchImpl: typeof fetch,
  config: InfomaniakClientConfig,
  pathTemplate: string,
  options: RawRequestOptions = {},
): Promise<unknown> {
  const method = (options.method ?? "GET").toUpperCase();
  const url = buildUrl(config.baseUrl ?? defaultBaseUrl, pathTemplate, options.path, options.query);
  const headers = await buildHeaders(config, options.headers, options.body, options.requestContentTypes);
  const requestInit: RequestInit = {
    method,
    headers,
  };
  const serializedBody = serializeBody(options.body, headers);
  if (serializedBody !== undefined) {
    requestInit.body = serializedBody;
  }
  if (options.signal) {
    requestInit.signal = options.signal;
  }
  const response = await fetchImpl(url, requestInit);

  if (!response.ok) {
    const errorDetails = {
      method,
      path: pathTemplate,
      status: response.status,
      statusText: response.statusText,
      headers: headersToRecord(response.headers),
      responseSummary: await safeResponseSummary(response),
    };
    throw new InfomaniakOperationError(
      options.operationId === undefined
        ? errorDetails
        : {
            ...errorDetails,
            operationId: options.operationId,
          },
    );
  }

  return parseSuccessResponse(response);
}

function buildUrl(baseUrl: string, pathTemplate: string, pathParams?: Record<string, unknown>, query?: Record<string, unknown>): string {
  const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key: string) => {
    const value = pathParams?.[key];
    if (value === undefined || value === null) {
      throw new InfomaniakError(`Missing path parameter: ${key}`);
    }
    return encodeURIComponent(String(value));
  });
  const url = new URL(path, baseUrl);
  for (const [key, value] of Object.entries(query ?? {})) {
    appendQueryValue(url, key, value);
  }
  return url.toString();
}

function appendQueryValue(url: URL, key: string, value: unknown): void {
  if (value === undefined || value === null) {
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) {
      appendQueryValue(url, key, item);
    }
    return;
  }
  url.searchParams.append(key, String(value));
}

async function buildHeaders(
  config: InfomaniakClientConfig,
  requestHeaders: Record<string, unknown> | undefined,
  body: unknown,
  requestContentTypes: readonly string[] = [],
): Promise<Headers> {
  const headers = new Headers(await resolveHeaders(config.headers));
  if (config.userAgent && !headers.has("user-agent")) {
    headers.set("user-agent", config.userAgent);
  }
  const token = await resolveToken(config.token);
  if (token && !headers.has("authorization")) {
    headers.set("authorization", `Bearer ${token}`);
  }
  for (const [key, value] of Object.entries(requestHeaders ?? {})) {
    if (value !== undefined && value !== null) {
      headers.set(key, String(value));
    }
  }
  if (shouldSetJsonContentType(headers, body, requestContentTypes)) {
    headers.set("content-type", "application/json");
  }
  return headers;
}

async function resolveToken(token: InfomaniakClientConfig["token"]): Promise<string | undefined> {
  return typeof token === "function" ? token() : token;
}

async function resolveHeaders(headers: InfomaniakClientConfig["headers"]): Promise<HeadersInit | undefined> {
  return typeof headers === "function" ? headers() : headers;
}

function shouldSetJsonContentType(headers: Headers, body: unknown, requestContentTypes: readonly string[]): boolean {
  return body !== undefined && isJsonSerializableBody(body) && !headers.has("content-type") && !requestContentTypes.includes("multipart/form-data");
}

function serializeBody(body: unknown, headers: Headers): BodyInit | undefined {
  if (body === undefined) {
    return undefined;
  }
  if (!isJsonSerializableBody(body)) {
    return body as BodyInit;
  }
  if (headers.get("content-type")?.includes("application/json")) {
    return JSON.stringify(body);
  }
  return body as BodyInit;
}

function isJsonSerializableBody(body: unknown): boolean {
  return typeof body === "object" && body !== null && !(body instanceof ArrayBuffer) && !(body instanceof Blob) && !(body instanceof FormData) && !(body instanceof URLSearchParams);
}

async function parseSuccessResponse(response: Response): Promise<unknown> {
  if (response.status === 204) {
    return undefined;
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  if (contentType.startsWith("text/") || contentType.includes("csv")) {
    return response.text();
  }
  return response.arrayBuffer();
}

async function safeResponseSummary(response: Response): Promise<string> {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return JSON.stringify(await response.json());
  }
  return (await response.text()).slice(0, 500);
}

function headersToRecord(headers: Headers): Record<string, string> {
  const record: Record<string, string> = {};
  headers.forEach((value, key) => {
    record[key] = value;
  });
  return record;
}
