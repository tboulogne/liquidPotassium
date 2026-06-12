import { InfomaniakError } from "../client/errors.js";
import { domains as generatedDomains } from "../generated/catalog/domains.js";
import { operations as generatedOperations } from "../generated/catalog/operations.js";
import type { DomainMetadata, OperationMetadata, OperationParameterMetadata } from "../generated/catalog/types.js";

export type InfomaniakDomain = (typeof generatedDomains)[number]["domain"];

export interface OperationListOptions {
  domain?: InfomaniakDomain | string;
  domains?: readonly (InfomaniakDomain | string)[];
  method?: string;
  mutating?: boolean;
  deprecated?: boolean;
}

export interface OperationSearchOptions extends OperationListOptions {
  query?: string;
  limit?: number;
}

export interface OperationDescription {
  operationId: string;
  functionName: string;
  originalOperationId: string | null;
  domain: string;
  method: string;
  path: string;
  summary: string;
  description: string;
  tags: readonly string[];
  mutating: boolean;
  deprecated: boolean;
  auth: readonly string[];
  parameters: {
    path: readonly OperationParameterMetadata[];
    query: readonly OperationParameterMetadata[];
    header: readonly OperationParameterMetadata[];
    cookie: readonly OperationParameterMetadata[];
  };
  requestContentTypes: readonly string[];
  responseContentTypes: readonly string[];
}

export interface OperationCatalog {
  listDomains(): readonly DomainMetadata[];
  listOperations(options?: OperationListOptions): readonly OperationMetadata[];
  searchOperations(search?: string | OperationSearchOptions): readonly OperationMetadata[];
  getOperation(operationId: string): OperationMetadata;
  describeOperation(operationId: string): OperationDescription;
  isMutatingOperation(operationId: string): boolean;
}

const operationById = new Map<string, OperationMetadata>(
  generatedOperations.map((operation) => [operation.operationId, operation]),
);

export const operationCatalog: OperationCatalog = {
  listDomains,
  listOperations,
  searchOperations,
  getOperation,
  describeOperation,
  isMutatingOperation,
};

export function listDomains(): readonly DomainMetadata[] {
  return generatedDomains;
}

export function listOperations(options: OperationListOptions = {}): readonly OperationMetadata[] {
  return filterOperations(generatedOperations, options);
}

export function searchOperations(search: string | OperationSearchOptions = {}): readonly OperationMetadata[] {
  const options = typeof search === "string" ? { query: search } : search;
  const query = options.query?.trim().toLowerCase();
  const filteredOperations = filterOperations(generatedOperations, options);
  const matchedOperations =
    query && query.length > 0
      ? filteredOperations.filter((operation) => operationMatchesQuery(operation, query))
      : filteredOperations;

  return options.limit === undefined ? matchedOperations : matchedOperations.slice(0, options.limit);
}

export function getOperation(operationId: string): OperationMetadata {
  const operation = operationById.get(operationId);
  if (!operation) {
    throw new InfomaniakError(`Unknown Infomaniak operation: ${operationId}`);
  }
  return operation;
}

export function describeOperation(operationId: string): OperationDescription {
  const operation = getOperation(operationId);
  return {
    operationId: operation.operationId,
    functionName: operation.functionName,
    originalOperationId: operation.originalOperationId,
    domain: operation.domain,
    method: operation.method,
    path: operation.path,
    summary: operation.summary,
    description: operation.description,
    tags: operation.tags,
    mutating: operation.mutating,
    deprecated: operation.deprecated,
    auth: operation.auth,
    parameters: {
      path: operation.pathParameters,
      query: operation.queryParameters,
      header: operation.headerParameters,
      cookie: operation.cookieParameters,
    },
    requestContentTypes: operation.requestContentTypes,
    responseContentTypes: operation.responseContentTypes,
  };
}

export function isMutatingOperation(operationId: string): boolean {
  return getOperation(operationId).mutating;
}

function filterOperations(
  operations: readonly OperationMetadata[],
  options: OperationListOptions,
): readonly OperationMetadata[] {
  let filteredOperations = operations;
  const domainSet = requestedDomains(options);

  if (domainSet) {
    filteredOperations = filteredOperations.filter((operation) => domainSet.has(operation.domain));
  }
  if (options.method) {
    const method = options.method.toUpperCase();
    filteredOperations = filteredOperations.filter((operation) => operation.method === method);
  }
  if (options.mutating !== undefined) {
    filteredOperations = filteredOperations.filter((operation) => operation.mutating === options.mutating);
  }
  if (options.deprecated !== undefined) {
    filteredOperations = filteredOperations.filter((operation) => operation.deprecated === options.deprecated);
  }

  return filteredOperations;
}

function requestedDomains(options: OperationListOptions): ReadonlySet<string> | undefined {
  const domains: string[] = [];
  if (options.domain) {
    domains.push(options.domain);
  }
  if (options.domains) {
    domains.push(...options.domains);
  }
  return domains.length === 0 ? undefined : new Set(domains);
}

function operationMatchesQuery(operation: OperationMetadata, query: string): boolean {
  const searchableText = [
    operation.domain,
    operation.method,
    operation.path,
    operation.operationId,
    operation.originalOperationId ?? "",
    operation.summary,
    operation.description,
    ...operation.tags,
  ]
    .join(" ")
    .toLowerCase();

  return query.split(/\s+/u).every((term) => searchableText.includes(term));
}
