export const packageName = "liquid-potassium";
export type { GeneratedOperationClient, OperationRequest } from "./client/generated-operation-client.js";
export {
  buildDomainMetadata,
  buildOperationCatalog,
  renderCatalogSources,
  renderGeneratedEndpointTests,
  renderOperationWrapperSources,
  type DomainMetadata,
  type OperationMetadata,
  type OperationParameterMetadata,
} from "./openapi/operation-generator.js";
export { normalizeOpenApiSpec, type JsonObject, type NormalizationReport } from "./openapi/normalize.js";
