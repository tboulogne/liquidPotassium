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
    updateDraft(mailboxUuid: string, draftUuid: string, payload: MailDraftPayload, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraft>>;
    getDraft(mailboxUuid: string, draftUuid: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraft>>;
    deleteDraft(mailboxUuid: string, draftUuid: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
    scheduleDraft(draftResource: string, scheduleDate: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailDraftSchedule>>;
    deleteSchedule(scheduleAction: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
    cancelSend(cancelSendResource: string, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<unknown>>;
    moveMessages(mailboxUuid: string, payload: MailMoveMessagesPayload, options?: MailApplicationRequestOptions): Promise<InfomaniakMailResponse<MailMoveResult>>;
    currentMyKSuite(options?: MailIncludedResourcesOptions): Promise<InfomaniakMailResponse<CurrentMyKSuite>>;
}
export declare function createMailApplicationClient(options: MailApplicationClientFactoryOptions): MailApplicationClient;
export {};
