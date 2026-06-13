import { createDomainOperations } from "../generated/operations/index.js";
import { operations } from "../generated/catalog/operations.js";
import { createResourceDiscovery } from "../discovery/resource-discovery.js";
import { createDomainWorkflowClient } from "../workflows/domain-actions.js";
import { InfomaniakError, InfomaniakOperationError } from "./errors.js";
import { createMailApplicationClient } from "./mail-application.js";
const defaultBaseUrl = "https://api.infomaniak.com";
const defaultMailApplicationBaseUrl = "https://mail.infomaniak.com";
const operationById = new Map(operations.map((operation) => [operation.operationId, operation]));
export function createInfomaniakClient(config = {}) {
    const fetchImpl = config.fetch ?? globalThis.fetch;
    if (typeof fetchImpl !== "function") {
        throw new InfomaniakError("No fetch implementation is available. Provide config.fetch.");
    }
    const generatedClient = {
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
    const raw = {
        GET: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "GET" }),
        POST: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "POST" }),
        PUT: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "PUT" }),
        PATCH: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "PATCH" }),
        DELETE: (path, options) => requestPath(fetchImpl, config, path, { ...options, method: "DELETE" }),
    };
    const domainClients = createDomainOperations(generatedClient);
    const mailApplicationBaseUrl = config.mailApplicationBaseUrl ?? defaultMailApplicationBaseUrl;
    const mailApplication = createMailApplicationClient({
        apiRequest: (path, options) => requestPath(fetchImpl, config, path, options),
        mailApplicationBaseUrl,
        mailRequest: (path, options) => requestPath(fetchImpl, { ...config, baseUrl: mailApplicationBaseUrl }, path, options),
    });
    const discovery = createResourceDiscovery(generatedClient);
    const workflows = createDomainWorkflowClient({
        ...generatedClient,
        discovery,
        mail: { application: mailApplication },
    });
    return {
        ...generatedClient,
        ...domainClients,
        discovery,
        mail: {
            ...domainClients.mail,
            application: mailApplication,
        },
        raw,
        workflows,
        request: (path, options) => requestPath(fetchImpl, config, path, options),
    };
}
async function requestPath(fetchImpl, config, pathTemplate, options = {}) {
    const method = (options.method ?? "GET").toUpperCase();
    const url = buildUrl(config.baseUrl ?? defaultBaseUrl, pathTemplate, options.path, options.query);
    const headers = await buildHeaders(config, options.headers, options.body, options.requestContentTypes);
    const requestInit = {
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
        throw new InfomaniakOperationError(options.operationId === undefined
            ? errorDetails
            : {
                ...errorDetails,
                operationId: options.operationId,
            });
    }
    return parseSuccessResponse(response);
}
function buildUrl(baseUrl, pathTemplate, pathParams, query) {
    const path = pathTemplate.replace(/\{([^}]+)\}/g, (_match, key) => {
        const value = pathParams?.[key];
        if (value === undefined || value === null) {
            throw new InfomaniakError(`Missing path parameter: ${key}`);
        }
        return encodeURIComponent(String(value));
    });
    const url = new URL(path, baseUrl);
    for (const [key, value] of Object.entries(query ?? {})) {
        appendQueryValue(url, key, value, false);
    }
    return url.toString();
}
function appendQueryValue(url, key, value, nested) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        for (const item of value) {
            appendQueryValue(url, nested ? `${key}[]` : key, item, nested);
        }
        return;
    }
    if (isQueryObject(value)) {
        for (const [childKey, childValue] of Object.entries(value)) {
            appendQueryValue(url, `${key}[${childKey}]`, childValue, true);
        }
        return;
    }
    url.searchParams.append(key, String(value));
}
function isQueryObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}
async function buildHeaders(config, requestHeaders, body, requestContentTypes = []) {
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
async function resolveToken(token) {
    return typeof token === "function" ? token() : token;
}
async function resolveHeaders(headers) {
    return typeof headers === "function" ? headers() : headers;
}
function shouldSetJsonContentType(headers, body, requestContentTypes) {
    return body !== undefined && isJsonSerializableBody(body) && !headers.has("content-type") && !requestContentTypes.includes("multipart/form-data");
}
function serializeBody(body, headers) {
    if (body === undefined) {
        return undefined;
    }
    if (!isJsonSerializableBody(body)) {
        return body;
    }
    if (headers.get("content-type")?.includes("application/json")) {
        return JSON.stringify(body);
    }
    return body;
}
function isJsonSerializableBody(body) {
    return (typeof body === "object" &&
        body !== null &&
        !(body instanceof ArrayBuffer) &&
        !ArrayBuffer.isView(body) &&
        !(body instanceof Blob) &&
        !(body instanceof FormData) &&
        !(body instanceof URLSearchParams));
}
async function parseSuccessResponse(response) {
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
async function safeResponseSummary(response) {
    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
        return JSON.stringify(await response.json());
    }
    return (await response.text()).slice(0, 500);
}
function headersToRecord(headers) {
    const record = {};
    headers.forEach((value, key) => {
        record[key] = value;
    });
    return record;
}
//# sourceMappingURL=create-client.js.map