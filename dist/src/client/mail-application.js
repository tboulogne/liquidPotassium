import { InfomaniakError } from "./errors.js";
export function createMailApplicationClient(options) {
    return {
        listUserMailboxes: (requestOptions) => typedMailResponse(options.mailRequest("/api/mailbox", {
            method: "GET",
            query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "unseen,aliases") }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        listFolders: (mailboxUuid, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/folder", {
            method: "GET",
            path: { mailboxUuid },
            query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "ik-static") }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        listThreads: (mailboxUuid, folderId, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/folder/{folderId}/message", {
            method: "GET",
            path: { mailboxUuid, folderId },
            query: withOptionalQuery({
                offset: requestOptions?.offset ?? 0,
                thread: requestOptions?.threadMode ?? "on",
                filters: requestOptions?.filter,
                with: defaulted(requestOptions?.includedResources, "emoji_reactions_per_message"),
            }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        getMessage: (resource, requestOptions) => typedMailResponse(options.mailRequest(normalizeMailResource(resource, options.mailApplicationBaseUrl), {
            method: "GET",
            query: withOptionalQuery({
                prefered_format: defaulted(requestOptions?.preferredFormat, "html"),
                with: defaulted(requestOptions?.includedResources, "auto_uncrypt,recipient_provider_source,emoji_reactions_per_message"),
            }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        getMailboxQuota: (mailbox, productId, requestOptions) => typedMailResponse(options.mailRequest("/api/mailbox/quotas", {
            method: "GET",
            query: withOptionalQuery({
                mailbox,
                product_id: productId,
                unit: defaulted(requestOptions?.unit, "B"),
            }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        createDraft: (mailboxUuid, payload, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/draft", {
            method: "POST",
            path: { mailboxUuid },
            body: normalizeDraftPayload(payload),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        updateDraft: (mailboxUuid, draftUuid, payload, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
            method: "PUT",
            path: { mailboxUuid, draftUuid },
            body: normalizeDraftPayload(payload),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        getDraft: (mailboxUuid, draftUuid, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
            method: "GET",
            path: { mailboxUuid, draftUuid },
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        deleteDraft: (mailboxUuid, draftUuid, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
            method: "DELETE",
            path: { mailboxUuid, draftUuid },
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        scheduleDraft: (draftResource, scheduleDate, requestOptions) => typedMailResponse(options.mailRequest(`${normalizeMailResource(draftResource, options.mailApplicationBaseUrl)}/schedule`, {
            method: "PUT",
            body: { schedule_date: scheduleDate },
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        deleteSchedule: (scheduleAction, requestOptions) => typedMailResponse(options.mailRequest(normalizeMailResource(scheduleAction, options.mailApplicationBaseUrl), {
            method: "DELETE",
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        cancelSend: (cancelSendResource, requestOptions) => typedMailResponse(options.mailRequest(normalizeMailResource(cancelSendResource, options.mailApplicationBaseUrl), {
            method: "PUT",
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        moveMessages: (mailboxUuid, payload, requestOptions) => typedMailResponse(options.mailRequest("/api/mail/{mailboxUuid}/message/move", {
            method: "POST",
            path: { mailboxUuid },
            body: payload,
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
        currentMyKSuite: (requestOptions) => typedMailResponse(options.apiRequest("/1/my_ksuite/current", {
            method: "GET",
            query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "mail") }),
            headers: requestOptions?.headers,
            signal: requestOptions?.signal,
        })),
    };
}
function typedMailResponse(response) {
    return response;
}
function defaulted(value, defaultValue) {
    if (value === null) {
        return undefined;
    }
    return value ?? defaultValue;
}
function withOptionalQuery(values) {
    const query = {};
    for (const [key, value] of Object.entries(values)) {
        if (value !== undefined && value !== null) {
            query[key] = value;
        }
    }
    return query;
}
function normalizeDraftPayload(payload) {
    const normalized = {
        ...payload,
        subject: payload.subject ?? "",
        ack_request: payload.ackRequest ?? false,
        priority: payload.priority ?? "normal",
        attachments: payload.attachments ?? [],
        mime_type: payload.mimeType ?? "text/html",
    };
    delete normalized.ackRequest;
    delete normalized.mimeType;
    if (payload.cc === undefined || payload.cc.length === 0) {
        delete normalized.cc;
    }
    if (payload.bcc === undefined || payload.bcc.length === 0) {
        delete normalized.bcc;
    }
    if (payload.action === undefined) {
        normalized.action = "save";
    }
    if (payload.action === null) {
        delete normalized.action;
    }
    return normalized;
}
function normalizeMailResource(resource, mailApplicationBaseUrl) {
    if (resource.startsWith("/api/mail/")) {
        return resource;
    }
    const baseUrl = new URL(mailApplicationBaseUrl);
    const parsed = new URL(resource, baseUrl);
    if (parsed.origin !== baseUrl.origin || !parsed.pathname.startsWith("/api/mail/")) {
        throw new InfomaniakError("Mail application resource paths must target the configured Infomaniak Mail application API.");
    }
    return `${parsed.pathname}${parsed.search}`;
}
//# sourceMappingURL=mail-application.js.map