import { Type } from "typebox";
import { jsonResult } from "openclaw/plugin-sdk/agent-runtime";
import { createInfomaniakClient, createResourceDiscovery, describeOperation, describeOperationRequirements, describeResourceKind, getOperation, listDomainActions, listDomains, listResourceDiscoveryRecipes, listOperations, searchOperations, } from "../index.js";
const emptyParamsSchema = Type.Object({}, { additionalProperties: false });
export const InfomaniakPluginConfigJsonSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
        token: { type: "string", description: "Infomaniak API bearer token." },
        tokenEnvName: {
            type: "string",
            default: "INFOMANIAK_TOKEN",
            description: "Environment variable name used for the Infomaniak API bearer token when token is not configured directly.",
        },
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
};
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
export const infomaniakSearchToolSchema = Type.Object({
    query: Type.Optional(Type.String({ description: "Search text for operation IDs, paths, summaries, descriptions, tags, domains, or methods." })),
    domain: Type.Optional(Type.String({ description: "Restrict results to one Infomaniak domain." })),
    method: Type.Optional(Type.String({ description: "Restrict results to one HTTP method." })),
    mutating: Type.Optional(Type.Boolean({ description: "Restrict results by mutating status." })),
    limit: Type.Optional(Type.Integer({ description: "Maximum number of operations to return.", minimum: 1, maximum: 50 })),
}, { additionalProperties: false });
export const infomaniakDescribeToolSchema = Type.Object({
    operation_id: Type.String({ description: "Normalized Infomaniak operation ID to describe." }),
}, { additionalProperties: false });
export const infomaniakDiscoverToolSchema = Type.Object({
    domain: Type.Optional(Type.String({ description: "Restrict discovery to one Infomaniak domain." })),
    kind: Type.Optional(Type.String({ description: "Resource kind to discover, such as kdriveDrive, mailAccess, or newsletterDomain." })),
    operation_id: Type.Optional(Type.String({ description: "Operation ID whose required resources should guide discovery." })),
    parents: Type.Optional(Type.Record(Type.String(), Type.Union([Type.String(), Type.Number()]), { description: "Known parent resource values." })),
    limit: Type.Optional(Type.Integer({ description: "Maximum number of resources to return.", minimum: 1, maximum: 100 })),
}, { additionalProperties: false });
export const infomaniakCallToolSchema = Type.Object({
    operation_id: Type.String({ description: "Normalized Infomaniak operation ID to call." }),
    path: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Path parameter values." })),
    query: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Query parameter values." })),
    headers: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Additional request headers." })),
    body: Type.Optional(Type.Unknown({ description: "JSON, form, or binary request body." })),
    confirm_mutating: Type.Optional(Type.Boolean({ description: "Required for mutating operations when plugin config allows mutation." })),
}, { additionalProperties: false });
export const infomaniakMailApplicationToolSchema = Type.Object({
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
}, { additionalProperties: false });
export const infomaniakWorkflowListToolSchema = Type.Object({
    domain: Type.Optional(Type.String({ description: "Restrict workflow actions to one Infomaniak domain." })),
    mutating: Type.Optional(Type.Boolean({ description: "Restrict workflow actions by mutating status." })),
}, { additionalProperties: false });
export const infomaniakWorkflowDescribeToolSchema = Type.Object({
    domain: Type.String({ description: "Infomaniak workflow domain." }),
    action: Type.String({ description: "Infomaniak workflow action name." }),
}, { additionalProperties: false });
export const infomaniakWorkflowRunToolSchema = Type.Object({
    domain: Type.String({ description: "Infomaniak workflow domain." }),
    action: Type.String({ description: "Infomaniak workflow action name." }),
    input: Type.Optional(Type.Record(Type.String(), Type.Unknown(), { description: "Workflow action input." })),
    confirm_mutating: Type.Optional(Type.Boolean({ description: "Required for mutating workflow actions when plugin config allows mutation." })),
}, { additionalProperties: false });
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
];
const mailApplicationActionByName = new Map(mailApplicationActions.map((action) => [action.action, action]));
export function createInfomaniakOpenClawTools(options = {}) {
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
            execute: async (_toolCallId, params) => jsonResult({
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
            description: "Call reviewed Infomaniak Mail application actions for mailbox content, threads, messages, quotas, drafts, schedules, and message moves.",
            parameters: infomaniakMailApplicationToolSchema,
            executionMode: "sequential",
            execute: async (_toolCallId, params, signal) => jsonResult(await callMailApplicationAction(config, options.fetch, asRecord(params), signal)),
        },
        {
            name: "infomaniak_workflow_list",
            label: "Infomaniak Workflow List",
            description: "List reviewed Infomaniak SDK workflow actions available through the current OpenClaw plugin policy.",
            parameters: infomaniakWorkflowListToolSchema,
            execute: async (_toolCallId, params) => jsonResult({ actions: listAllowedWorkflowActions(config, asRecord(params)) }),
        },
        {
            name: "infomaniak_workflow_describe",
            label: "Infomaniak Workflow Describe",
            description: "Describe one reviewed Infomaniak SDK workflow action before running it.",
            parameters: infomaniakWorkflowDescribeToolSchema,
            execute: async (_toolCallId, params) => jsonResult({ action: getAllowedWorkflowAction(config, readDomain(params), readAction(params)) }),
        },
        {
            name: "infomaniak_workflow_run",
            label: "Infomaniak Workflow Run",
            description: "Run one reviewed Infomaniak SDK workflow action. Prefer this for common domain workflows; mutating actions require explicit confirmation and plugin permission.",
            parameters: infomaniakWorkflowRunToolSchema,
            executionMode: "sequential",
            execute: async (_toolCallId, params, signal) => jsonResult(await runWorkflowAction(config, options.fetch, asRecord(params), signal)),
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
export function resolveInfomaniakPluginConfig(config) {
    const record = asRecord(config ?? {});
    return {
        ...optionalStringProperty(record, "token"),
        tokenEnvName: stringParam(record.tokenEnvName) ?? "INFOMANIAK_TOKEN",
        ...optionalStringProperty(record, "baseUrl"),
        ...optionalStringProperty(record, "mailApplicationBaseUrl"),
        allowedDomains: stringArrayProperty(record, "allowedDomains"),
        allowedOperations: stringArrayProperty(record, "allowedOperations"),
        deniedOperations: stringArrayProperty(record, "deniedOperations"),
        blockMutating: booleanProperty(record, "blockMutating", true),
    };
}
function listAllowedDomains(config) {
    const counts = new Map();
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
        .map((domain) => ({ domain: domain.domain, operationCount: counts.get(domain.domain) }));
}
function searchAllowedOperations(config, params) {
    const query = stringParam(params.query);
    const domain = stringParam(params.domain);
    const method = stringParam(params.method);
    const limit = numberParam(params.limit) ?? 20;
    const mutating = typeof params.mutating === "boolean" ? params.mutating : undefined;
    const searchOptions = { limit };
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
function describeAllowedOperation(config, operationId) {
    getAllowedOperation(config, operationId);
    return {
        ...describeOperation(operationId),
        requirements: describeOperationRequirements(operationId),
    };
}
function getAllowedOperation(config, operationId) {
    const operation = getOperation(operationId);
    if (!operationAllowed(config, operation)) {
        throw new Error(`Infomaniak operation is not allowed by plugin policy: ${operationId}`);
    }
    return operation;
}
function allowedOperations(config) {
    return listOperations().filter((operation) => operationAllowed(config, operation));
}
async function discoverAllowedResources(config, fetchImpl, params, signal) {
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
async function callMailApplicationAction(config, fetchImpl, params, signal) {
    const action = getAllowedMailApplicationAction(config, readMailApplicationAction(params));
    assertMutationAllowed(config, action, params.confirm_mutating === true);
    const client = createInfomaniakClient(buildClientConfig(config, fetchImpl));
    const requestOptions = buildMailApplicationRequestOptions(params, signal);
    const result = await executeMailApplicationAction(client, action, params, requestOptions);
    return { operation: summarizeMailApplicationAction(action), result };
}
async function runWorkflowAction(config, fetchImpl, params, signal) {
    const action = getAllowedWorkflowAction(config, readDomain(params), readAction(params));
    assertMutationAllowed(config, { operationId: action.id, mutating: action.mutating }, params.confirm_mutating === true);
    const client = createInfomaniakClient(buildClientConfig(config, fetchImpl));
    return client.workflows.run({
        domain: action.domain,
        action: action.action,
        ...optionalProperty("input", asOptionalRecord(params.input)),
        ...optionalProperty("signal", signal),
    });
}
async function executeMailApplicationAction(client, action, params, requestOptions) {
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
            return client.mail.application.createDraft(requiredString(params, "mailbox_uuid"), requiredPayload(params, "payload"), requestOptions);
        case "updateDraft":
            return client.mail.application.updateDraft(requiredString(params, "mailbox_uuid"), requiredString(params, "draft_uuid"), requiredPayload(params, "payload"), requestOptions);
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
            return client.mail.application.moveMessages(requiredString(params, "mailbox_uuid"), requiredPayload(params, "payload"), requestOptions);
        case "currentMyKSuite":
            return client.mail.application.currentMyKSuite(requestOptions);
    }
}
function operationAllowed(config, operation) {
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
function getAllowedMailApplicationAction(config, actionName) {
    const action = mailApplicationActionByName.get(actionName);
    if (!action) {
        throw new Error(`Unknown Infomaniak Mail application action: ${actionName}`);
    }
    if (!mailApplicationActionAllowed(config, action)) {
        throw new Error(`Infomaniak Mail application action is not allowed by plugin policy: ${action.operationId}`);
    }
    return action;
}
function mailApplicationActionAllowed(config, action) {
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
function listAllowedWorkflowActions(config, params) {
    return listDomainActions({
        ...optionalProperty("domain", stringParam(params.domain)),
        ...optionalProperty("mutating", typeof params.mutating === "boolean" ? params.mutating : undefined),
    }).filter((action) => workflowActionAllowed(config, action));
}
function getAllowedWorkflowAction(config, domain, actionName) {
    const action = listDomainActions({ domain }).find((candidate) => candidate.action === actionName);
    if (!action) {
        throw new Error(`Unknown Infomaniak workflow action: ${domain}/${actionName}`);
    }
    if (!workflowActionAllowed(config, action)) {
        throw new Error(`Infomaniak workflow action is not allowed by plugin policy: ${action.id}`);
    }
    return action;
}
function workflowActionAllowed(config, action) {
    const allowedOperationSet = new Set(config.allowedOperations);
    const deniedOperationSet = new Set(config.deniedOperations);
    if (!domainAllowed(config, action.domain)) {
        return false;
    }
    if (action.operationIds.some((operationId) => deniedOperationSet.has(operationId))) {
        return false;
    }
    if (allowedOperationSet.size > 0) {
        return action.operationIds.length > 0 && action.operationIds.every((operationId) => allowedOperationSet.has(operationId));
    }
    return true;
}
function domainAllowed(config, domain) {
    return config.allowedDomains.length === 0 || config.allowedDomains.includes(domain);
}
function assertDiscoveryRecipeAllowed(config, options) {
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
function assertMutationAllowed(config, operation, confirmed) {
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
function summarizeOperation(operation) {
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
function summarizeMailApplicationAction(action) {
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
function buildClientConfig(config, fetchImpl) {
    const clientConfig = {};
    if (config.token) {
        clientConfig.token = config.token;
    }
    else {
        clientConfig.token = () => process.env[config.tokenEnvName] ?? "";
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
function buildOperationRequest(record, signal) {
    const request = {};
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
function buildMailApplicationRequestOptions(record, signal) {
    return {
        ...optionalProperty("headers", asOptionalRecord(record.headers)),
        ...optionalProperty("signal", signal),
        ...optionalProperty("includedResources", stringParam(record.with)),
    };
}
function readOperationId(params) {
    const operationId = stringParam(asRecord(params).operation_id);
    if (!operationId) {
        throw new Error("operation_id is required.");
    }
    return operationId;
}
function readMailApplicationAction(params) {
    const action = stringParam(params.action);
    if (!action) {
        throw new Error("action is required.");
    }
    return action;
}
function readDomain(params) {
    const domain = stringParam(asRecord(params).domain);
    if (!domain) {
        throw new Error("domain is required.");
    }
    return domain;
}
function readAction(params) {
    const action = stringParam(asRecord(params).action);
    if (!action) {
        throw new Error("action is required.");
    }
    return action;
}
function requiredString(params, key) {
    const value = stringParam(params[key]);
    if (!value) {
        throw new Error(`${key} is required.`);
    }
    return value;
}
function requiredPositiveInteger(params, key) {
    const value = numberParam(params[key]);
    if (value === undefined) {
        throw new Error(`${key} must be a positive integer.`);
    }
    return value;
}
function requiredPayload(params, key) {
    const payload = params[key];
    if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
        throw new Error(`${key} must be an object.`);
    }
    return payload;
}
function optionalStringProperty(record, key) {
    const value = stringParam(record[key]);
    return value ? { [key]: value } : {};
}
function stringArrayProperty(record, key) {
    const value = record[key];
    if (value === undefined) {
        return [];
    }
    if (!Array.isArray(value)) {
        throw new Error(`${key} must be an array of strings.`);
    }
    return value.map((entry) => stringParam(entry)).filter((entry) => Boolean(entry));
}
function booleanProperty(record, key, defaultValue) {
    const value = record[key];
    if (value === undefined) {
        return defaultValue;
    }
    if (typeof value !== "boolean") {
        throw new Error(`${key} must be a boolean.`);
    }
    return value;
}
function stringParam(value) {
    return typeof value === "string" && value.trim().length > 0 ? value.trim() : undefined;
}
function numberParam(value) {
    return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : undefined;
}
function nonNegativeIntegerParam(value) {
    return typeof value === "number" && Number.isInteger(value) && value >= 0 ? value : undefined;
}
function asOptionalRecord(value) {
    return value === undefined ? undefined : asRecord(value);
}
function stringNumberRecord(value) {
    const record = asOptionalRecord(value);
    if (!record) {
        return undefined;
    }
    return Object.fromEntries(Object.entries(record).filter((entry) => typeof entry[1] === "string" || typeof entry[1] === "number"));
}
function optionalProperty(key, value) {
    return value === undefined ? {} : { [key]: value };
}
function asRecord(value) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
        return {};
    }
    return value;
}
//# sourceMappingURL=infomaniak-tools.js.map