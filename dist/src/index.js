export const packageName = "liquid-potassium";
export { describeOperation, getOperation, isMutatingOperation, listDomains, listOperations, operationCatalog, searchOperations, } from "./catalog/operation-catalog.js";
export { createInfomaniakClient } from "./client/create-client.js";
export { InfomaniakError, InfomaniakOperationError } from "./client/errors.js";
export { createResourceDiscovery, describeOperationRequirements, describeResourceKind, discoverResources, listResourceDiscoveryRecipes, listResourceKinds, } from "./discovery/resource-discovery.js";
export { createDomainWorkflowClient, describeDomainAction, listDomainActions, runDomainAction, } from "./workflows/domain-actions.js";
export { createInfomaniakOpenClawTools, InfomaniakPluginConfigJsonSchema, infomaniakCallToolSchema, infomaniakDiscoverToolSchema, infomaniakDescribeToolSchema, infomaniakDomainsToolSchema, infomaniakMailApplicationToolSchema, infomaniakSearchToolSchema, infomaniakWorkflowDescribeToolSchema, infomaniakWorkflowListToolSchema, infomaniakWorkflowRunToolSchema, resolveInfomaniakPluginConfig, } from "./openclaw/infomaniak-tools.js";
export { buildDomainMetadata, buildOperationCatalog, renderCatalogSources, renderGeneratedEndpointTests, renderOperationWrapperSources, } from "./openapi/operation-generator.js";
export { normalizeOpenApiSpec } from "./openapi/normalize.js";
//# sourceMappingURL=index.js.map