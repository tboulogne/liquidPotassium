import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";
export declare function createUrlshortenerOperations(client: GeneratedOperationClient): {
    readonly get1UrlShortener: (request?: OperationRequest) => Promise<unknown>;
    readonly post1UrlShortener: (request?: OperationRequest) => Promise<unknown>;
    readonly put1UrlShortenerShortUrlCode: (request?: OperationRequest) => Promise<unknown>;
    readonly get1UrlShortenerQuota: (request?: OperationRequest) => Promise<unknown>;
    readonly get2UrlShortener: (request?: OperationRequest) => Promise<unknown>;
    readonly post2UrlShortener: (request?: OperationRequest) => Promise<unknown>;
    readonly get2UrlShortenerQuota: (request?: OperationRequest) => Promise<unknown>;
};
