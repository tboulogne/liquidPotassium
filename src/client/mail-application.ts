import { InfomaniakError } from "./errors.js";

type MailRequest = (path: string, options?: MailApplicationInternalRequest) => Promise<unknown>;

interface MailApplicationInternalRequest {
  method?: string | undefined;
  path?: Record<string, unknown> | undefined;
  query?: Record<string, unknown> | undefined;
  headers?: Record<string, unknown> | undefined;
  body?: unknown;
  signal?: AbortSignal | undefined;
}

interface MailApplicationClientFactoryOptions {
  apiRequest: MailRequest;
  mailRequest: MailRequest;
  mailApplicationBaseUrl: string;
}

export type MailJsonValue = string | number | boolean | null | MailJsonObject | MailJsonValue[];

export interface MailJsonObject {
  [key: string]: MailJsonValue;
}

export interface InfomaniakMailResponse<TData> {
  result: string;
  data: TData;
  error?: unknown;
  [key: string]: unknown;
}

export type UserMailbox = MailJsonObject;
export type MailFolder = MailJsonObject;
export type MailThreadList = MailJsonObject;
export type MailMessage = MailJsonObject;
export type MailboxQuota = MailJsonObject;
export type MailDraft = MailJsonObject;
export type MailDraftSchedule = MailJsonObject;
export type MailMoveResult = MailJsonObject;
export type CurrentMyKSuite = MailJsonObject;

export interface MailApplicationRequestOptions {
  headers?: Record<string, unknown>;
  signal?: AbortSignal;
}

export interface MailIncludedResourcesOptions extends MailApplicationRequestOptions {
  includedResources?: string | null;
}

export interface ListMailThreadsOptions extends MailIncludedResourcesOptions {
  offset?: number;
  threadMode?: "on" | "off" | (string & {});
  filter?: string | null;
  /** Search behavior observed in the official Mail client; not a public API contract. */
  searchText?: string;
  searchEverywhere?: boolean;
  searchAttachments?: boolean;
}

export interface GetMailMessageOptions extends MailIncludedResourcesOptions {
  preferredFormat?: "html" | "text" | (string & {}) | null;
}

export interface GetMailboxQuotaOptions extends MailApplicationRequestOptions {
  unit?: "B" | "kB" | "MB" | (string & {}) | null;
}

export interface MailDraftRecipient {
  email: string;
  name?: string;
}

export interface MailDraftPayload {
  body: string;
  to: MailDraftRecipient[];
  cc?: MailDraftRecipient[];
  bcc?: MailDraftRecipient[];
  subject?: string;
  ackRequest?: boolean;
  priority?: string;
  attachments?: MailJsonValue[];
  action?: string | null;
  mimeType?: string;
  [key: string]: unknown;
}

export interface MailMoveMessagesPayload {
  uids: string[];
  to: string;
}

export interface MailApplicationClient {
  listUserMailboxes(options?: MailIncludedResourcesOptions): Promise<InfomaniakMailResponse<UserMailbox[]>>;
  listFolders(mailboxUuid: string, options?: MailIncludedResourcesOptions): Promise<InfomaniakMailResponse<MailFolder[]>>;
  listThreads(mailboxUuid: string, folderId: string, options?: ListMailThreadsOptions): Promise<InfomaniakMailResponse<MailThreadList>>;
  getMessage(resource: string, options?: GetMailMessageOptions): Promise<InfomaniakMailResponse<MailMessage>>;
  getMailboxQuota(mailbox: string, productId: number, options?: GetMailboxQuotaOptions): Promise<InfomaniakMailResponse<MailboxQuota>>;
  createDraft(mailboxUuid: string, payload: MailDraftPayload, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraft>>;
  updateDraft(
    mailboxUuid: string,
    draftUuid: string,
    payload: MailDraftPayload,
    options?: MailApplicationRequestOptions,
  ): Promise<InfomaniakMailResponse<MailDraft>>;
  getDraft(mailboxUuid: string, draftUuid: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraft>>;
  deleteDraft(mailboxUuid: string, draftUuid: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
  scheduleDraft(draftResource: string, scheduleDate: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraftSchedule>>;
  deleteSchedule(scheduleAction: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
  cancelSend(cancelSendResource: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
  moveMessages(
    mailboxUuid: string,
    payload: MailMoveMessagesPayload,
    options?: MailApplicationRequestOptions,
  ): Promise<InfomaniakMailResponse<MailMoveResult>>;
  currentMyKSuite(options?: MailIncludedResourcesOptions): Promise<InfomaniakMailResponse<CurrentMyKSuite>>;
}

export function createMailApplicationClient(options: MailApplicationClientFactoryOptions): MailApplicationClient {
  return {
    listUserMailboxes: (requestOptions) =>
      typedMailResponse<UserMailbox[]>(
        options.mailRequest("/api/mailbox", {
          method: "GET",
          query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "unseen,aliases") }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    listFolders: (mailboxUuid, requestOptions) =>
      typedMailResponse<MailFolder[]>(
        options.mailRequest("/api/mail/{mailboxUuid}/folder", {
          method: "GET",
          path: { mailboxUuid },
          query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "ik-static") }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    listThreads: (mailboxUuid, folderId, requestOptions) =>
      typedMailResponse<MailThreadList>(
        options.mailRequest("/api/mail/{mailboxUuid}/folder/{folderId}/message", {
          method: "GET",
          path: { mailboxUuid, folderId },
          query: withOptionalQuery({
            offset: requestOptions?.offset ?? 0,
            thread: requestOptions?.threadMode ?? "on",
            filters: requestOptions?.filter,
            scontains: requestOptions?.searchText,
            severywhere: requestOptions?.searchEverywhere === undefined ? undefined : requestOptions.searchEverywhere ? "1" : "0",
            sattachments: requestOptions?.searchAttachments ? "yes" : undefined,
            with: defaulted(requestOptions?.includedResources, "emoji_reactions_per_message"),
          }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    getMessage: (resource, requestOptions) =>
      typedMailResponse<MailMessage>(
        options.mailRequest(normalizeMailResource(resource, options.mailApplicationBaseUrl), {
          method: "GET",
          query: withOptionalQuery({
            prefered_format: defaulted(requestOptions?.preferredFormat, "html"),
            with: defaulted(requestOptions?.includedResources, "auto_uncrypt,recipient_provider_source,emoji_reactions_per_message"),
          }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    getMailboxQuota: (mailbox, productId, requestOptions) =>
      typedMailResponse<MailboxQuota>(
        options.mailRequest("/api/mailbox/quotas", {
          method: "GET",
          query: withOptionalQuery({
            mailbox,
            product_id: productId,
            unit: defaulted(requestOptions?.unit, "B"),
          }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    createDraft: (mailboxUuid, payload, requestOptions) =>
      typedMailResponse<MailDraft>(
        options.mailRequest("/api/mail/{mailboxUuid}/draft", {
          method: "POST",
          path: { mailboxUuid },
          body: normalizeDraftPayload(payload),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    updateDraft: (mailboxUuid, draftUuid, payload, requestOptions) =>
      typedMailResponse<MailDraft>(
        options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
          method: "PUT",
          path: { mailboxUuid, draftUuid },
          body: normalizeDraftPayload(payload),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    getDraft: (mailboxUuid, draftUuid, requestOptions) =>
      typedMailResponse<MailDraft>(
        options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
          method: "GET",
          path: { mailboxUuid, draftUuid },
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    deleteDraft: (mailboxUuid, draftUuid, requestOptions) =>
      typedMailResponse<unknown>(
        options.mailRequest("/api/mail/{mailboxUuid}/draft/{draftUuid}", {
          method: "DELETE",
          path: { mailboxUuid, draftUuid },
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    scheduleDraft: (draftResource, scheduleDate, requestOptions) =>
      typedMailResponse<MailDraftSchedule>(
        options.mailRequest(`${normalizeMailResource(draftResource, options.mailApplicationBaseUrl)}/schedule`, {
          method: "PUT",
          body: { schedule_date: scheduleDate },
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    deleteSchedule: (scheduleAction, requestOptions) =>
      typedMailResponse<unknown>(
        options.mailRequest(normalizeMailResource(scheduleAction, options.mailApplicationBaseUrl), {
          method: "DELETE",
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    cancelSend: (cancelSendResource, requestOptions) =>
      typedMailResponse<unknown>(
        options.mailRequest(normalizeMailResource(cancelSendResource, options.mailApplicationBaseUrl), {
          method: "PUT",
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    moveMessages: (mailboxUuid, payload, requestOptions) =>
      typedMailResponse<MailMoveResult>(
        options.mailRequest("/api/mail/{mailboxUuid}/message/move", {
          method: "POST",
          path: { mailboxUuid },
          body: payload,
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
    currentMyKSuite: (requestOptions) =>
      typedMailResponse<CurrentMyKSuite>(
        options.apiRequest("/1/my_ksuite/current", {
          method: "GET",
          query: withOptionalQuery({ with: defaulted(requestOptions?.includedResources, "mail") }),
          headers: requestOptions?.headers,
          signal: requestOptions?.signal,
        }),
      ),
  };
}

function typedMailResponse<TData>(response: Promise<unknown>): Promise<InfomaniakMailResponse<TData>> {
  return response as Promise<InfomaniakMailResponse<TData>>;
}

function defaulted<T>(value: T | null | undefined, defaultValue: T): T | undefined {
  if (value === null) {
    return undefined;
  }
  return value ?? defaultValue;
}

function withOptionalQuery(values: Record<string, unknown>): Record<string, unknown> {
  const query: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(values)) {
    if (value !== undefined && value !== null) {
      query[key] = value;
    }
  }
  return query;
}

function normalizeDraftPayload(payload: MailDraftPayload): Record<string, unknown> {
  const normalized: Record<string, unknown> = {
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

function normalizeMailResource(resource: string, mailApplicationBaseUrl: string): string {
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
