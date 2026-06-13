export function createAiOperations(client) {
    return {
        aiToolslistallyourllmapi: (request) => client.requestOperation("AI/ToolsListAllYourLLMAPI", request),
        aiToolslistallconsumptions: (request) => client.requestOperation("AI/ToolsListAllConsumptions", request),
        aiToolscustomizingrealistichumanphotos: (request) => client.requestOperation("AI/ToolsCustomizingRealisticHumanPhotos", request),
        aiToolscreatetranscription: (request) => client.requestOperation("AI/ToolsCreateTranscription", request),
        aiToolscreatechatcompletiondeprecated: (request) => client.requestOperation("AI/ToolsCreateChatCompletiondeprecated", request),
        aiToolscreateimage: (request) => client.requestOperation("AI/ToolsCreateImage", request),
        aiToolslistmodelsdeprecated: (request) => client.requestOperation("AI/ToolsListModelsdeprecated", request),
        aiToolscreateembeddingsdeprecated: (request) => client.requestOperation("AI/ToolsCreateEmbeddingsdeprecated", request),
        aiToolsgettheresultofanasyncmodelbatch: (request) => client.requestOperation("AI/ToolsGetTheResultOfAnAsyncModelBatch", request),
        aiToolsdownloadtheoutputresultofanasyncmodelbatch: (request) => client.requestOperation("AI/ToolsDownloadTheOutputResultOfAnAsyncModelBatch", request),
        aiToolslistmodels: (request) => client.requestOperation("AI/ToolsListModels", request),
        aiToolscreatererankingsv2: (request) => client.requestOperation("AI/ToolsCreateRerankingsV2", request),
        aiToolscreatechatcompletionv2: (request) => client.requestOperation("AI/ToolsCreateChatCompletionV2", request),
        aiToolscreatecompletionv2: (request) => client.requestOperation("AI/ToolsCreateCompletionV2", request),
        aiToolscreateembeddingsv2: (request) => client.requestOperation("AI/ToolsCreateEmbeddingsV2", request),
        aiToolslistmodelsv2: (request) => client.requestOperation("AI/ToolsListModelsV2", request),
    };
}
//# sourceMappingURL=ai.js.map