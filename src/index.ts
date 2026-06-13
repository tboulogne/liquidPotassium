export const packageName = "liquid-potassium";
export {
  describeOperation,
  getOperation,
  isMutatingOperation,
  listDomains,
  listOperations,
  operationCatalog,
  searchOperations,
  type InfomaniakDomain,
  type OperationCatalog,
  type OperationDescription,
  type OperationListOptions,
  type OperationSearchOptions,
} from "./catalog/operation-catalog.js";
export { createInfomaniakClient, type DomainClients, type InfomaniakClient, type InfomaniakClientConfig, type RawClient, type RawRequestOptions } from "./client/create-client.js";
export { InfomaniakError, InfomaniakOperationError, type OperationErrorDetails } from "./client/errors.js";
export type { GeneratedOperationClient, OperationRequest } from "./client/generated-operation-client.js";
export type {
  CurrentMyKSuite,
  GetMailboxQuotaOptions,
  GetMailMessageOptions,
  InfomaniakMailResponse,
  ListMailThreadsOptions,
  MailApplicationClient,
  MailApplicationRequestOptions,
  MailDraft,
  MailDraftPayload,
  MailDraftRecipient,
  MailDraftSchedule,
  MailFolder,
  MailIncludedResourcesOptions,
  MailJsonObject,
  MailJsonValue,
  MailMessage,
  MailMoveMessagesPayload,
  MailMoveResult,
  MailboxQuota,
  MailThreadList,
  UserMailbox,
} from "./client/mail-application.js";
export {
  createResourceDiscovery,
  describeOperationRequirements,
  describeResourceKind,
  discoverResources,
  listResourceDiscoveryRecipes,
  listResourceKinds,
  type DiscoverySuggestion,
  type OperationParameterRequirement,
  type OperationRequirement,
  type ResourceDescriptor,
  type ResourceDiscovery,
  type ResourceDiscoveryClient,
  type ResourceDiscoveryOptions,
  type ResourceDiscoveryRecipe,
  type ResourceDiscoveryResult,
  type ResourceKind,
  type ResourceKindMetadata,
} from "./discovery/resource-discovery.js";
export {
  buildDomainMetadata,
  buildOperationCatalog,
  renderCatalogSources,
  renderGeneratedEndpointTests,
  renderOperationWrapperSources,
} from "./openapi/operation-generator.js";
export type {
  DomainMetadata,
  OperationDocsCapabilityMetadata,
  OperationDocsJsonValue,
  OperationDocsMetadata,
  OperationDocsParameterMetadata,
  OperationMetadata,
  OperationParameterMetadata,
} from "./generated/catalog/types.js";
export { normalizeOpenApiSpec, type JsonObject, type NormalizationReport } from "./openapi/normalize.js";
