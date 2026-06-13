import { createDomainOperations } from "../generated/operations/index.js";
import { type ResourceDiscovery } from "../discovery/resource-discovery.js";
import { type DomainWorkflowClient } from "../workflows/domain-actions.js";
import type { GeneratedOperationClient, OperationRequest } from "./generated-operation-client.js";
import { type MailApplicationClient } from "./mail-application.js";
export interface InfomaniakClientConfig {
    token?: string | (() => string | Promise<string>);
    baseUrl?: string;
    mailApplicationBaseUrl?: string;
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
export type MailDomainClient = DomainClients["mail"] & {
    application: MailApplicationClient;
};
export type InfomaniakClient = GeneratedOperationClient & Omit<DomainClients, "mail"> & {
    discovery: ResourceDiscovery;
    mail: MailDomainClient;
    raw: RawClient;
    workflows: DomainWorkflowClient;
    request(path: string, options?: RawRequestOptions): Promise<unknown>;
};
export declare function createInfomaniakClient(config?: InfomaniakClientConfig): InfomaniakClient;
