import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";
export declare function createAiOperations(client: GeneratedOperationClient): {
    readonly aiToolslistallyourllmapi: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolslistallconsumptions: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscustomizingrealistichumanphotos: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreatetranscription: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreatechatcompletiondeprecated: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreateimage: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolslistmodelsdeprecated: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreateembeddingsdeprecated: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolsgettheresultofanasyncmodelbatch: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolsdownloadtheoutputresultofanasyncmodelbatch: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolslistmodels: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreatererankingsv2: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreatechatcompletionv2: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreatecompletionv2: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolscreateembeddingsv2: (request?: OperationRequest) => Promise<unknown>;
    readonly aiToolslistmodelsv2: (request?: OperationRequest) => Promise<unknown>;
};
