import { InfomaniakError } from "../client/errors.js";
import { domains as generatedDomains } from "../generated/catalog/domains.js";
import { operations as generatedOperations } from "../generated/catalog/operations.js";
const operationById = new Map(generatedOperations.map((operation) => [operation.operationId, operation]));
export const operationCatalog = {
    listDomains,
    listOperations,
    searchOperations,
    getOperation,
    describeOperation,
    isMutatingOperation,
};
export function listDomains() {
    return generatedDomains;
}
export function listOperations(options = {}) {
    return filterOperations(generatedOperations, options);
}
export function searchOperations(search = {}) {
    const options = typeof search === "string" ? { query: search } : search;
    const query = options.query?.trim().toLowerCase();
    const filteredOperations = filterOperations(generatedOperations, options);
    const matchedOperations = query && query.length > 0
        ? filteredOperations.filter((operation) => operationMatchesQuery(operation, query))
        : filteredOperations;
    return options.limit === undefined ? matchedOperations : matchedOperations.slice(0, options.limit);
}
export function getOperation(operationId) {
    const operation = operationById.get(operationId);
    if (!operation) {
        throw new InfomaniakError(`Unknown Infomaniak operation: ${operationId}`);
    }
    return operation;
}
export function describeOperation(operationId) {
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
        docs: operation.docs,
    };
}
export function isMutatingOperation(operationId) {
    return getOperation(operationId).mutating;
}
function filterOperations(operations, options) {
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
function requestedDomains(options) {
    const domains = [];
    if (options.domain) {
        domains.push(options.domain);
    }
    if (options.domains) {
        domains.push(...options.domains);
    }
    return domains.length === 0 ? undefined : new Set(domains);
}
function operationMatchesQuery(operation, query) {
    const searchableText = [
        operation.domain,
        operation.method,
        operation.path,
        operation.operationId,
        operation.originalOperationId ?? "",
        operation.summary,
        operation.description,
        operation.docs?.url ?? "",
        operation.docs?.operationId ?? "",
        operation.docs?.summary ?? "",
        operation.docs?.categoryPath.join(" ") ?? "",
        operation.docs?.capabilities.map((capability) => `${capability.name} ${capability.description} ${capability.values.join(" ")}`).join(" ") ?? "",
        operation.docs?.parameters.map((parameter) => `${parameter.name} ${parameter.in} ${parameter.description} ${parameter.schemaType ?? ""}`).join(" ") ?? "",
        ...operation.tags,
    ]
        .join(" ")
        .toLowerCase();
    return query.split(/\s+/u).every((term) => searchableText.includes(term));
}
//# sourceMappingURL=operation-catalog.js.map