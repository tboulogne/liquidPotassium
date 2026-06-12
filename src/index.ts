export const packageName = "liquid-potassium";
export { createInfomaniakClient, type DomainClients, type InfomaniakClient, type InfomaniakClientConfig, type RawClient, type RawRequestOptions } from "./client/create-client.js";
export { InfomaniakError, InfomaniakOperationError, type OperationErrorDetails } from "./client/errors.js";
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
