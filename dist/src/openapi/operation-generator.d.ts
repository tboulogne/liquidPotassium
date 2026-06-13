import { type JsonObject } from "./normalize.js";
import type { DocsSnapshot } from "./docs-snapshot.js";
export type OperationDocsJsonValue = string | number | boolean | null | OperationDocsJsonValue[] | {
    [key: string]: OperationDocsJsonValue;
};
export interface OperationParameterMetadata {
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required: boolean;
}
export interface OperationDocsCapabilityMetadata {
    name: string;
    description: string;
    values: string[];
}
export interface OperationDocsParameterMetadata {
    name: string;
    in: string;
    required: boolean;
    description: string;
    style: string | null;
    explode: boolean | null;
    schemaType: string | null;
    schema: OperationDocsJsonValue;
    enumValues: OperationDocsJsonValue[];
    values: OperationDocsJsonValue[];
    examples: OperationDocsJsonValue[];
}
export interface OperationDocsMetadata {
    url: string;
    operationId: string | null;
    summary: string;
    categoryPath: string[];
    staff: boolean;
    beta: boolean;
    publicCloud: boolean;
    paginable: boolean | null;
    sortable: boolean | null;
    authUser: boolean | null;
    version: string | number | null;
    capabilities: OperationDocsCapabilityMetadata[];
    parameters: OperationDocsParameterMetadata[];
    responseStatuses: string[];
}
export interface OperationMetadata {
    operationId: string;
    functionName: string;
    originalOperationId: string | null;
    domain: string;
    method: string;
    path: string;
    summary: string;
    description: string;
    tags: string[];
    mutating: boolean;
    pathParameters: OperationParameterMetadata[];
    queryParameters: OperationParameterMetadata[];
    headerParameters: OperationParameterMetadata[];
    cookieParameters: OperationParameterMetadata[];
    requestContentTypes: string[];
    responseContentTypes: string[];
    deprecated: boolean;
    auth: string[];
    docs: OperationDocsMetadata | null;
}
export interface DomainMetadata {
    domain: string;
    operationCount: number;
}
export declare function buildOperationCatalog(spec: JsonObject, docsSnapshot?: DocsSnapshot | null): OperationMetadata[];
export declare function buildDomainMetadata(operations: readonly OperationMetadata[]): DomainMetadata[];
export declare function renderCatalogSources(operations: readonly OperationMetadata[]): Map<string, string>;
export declare function renderOperationWrapperSources(operations: readonly OperationMetadata[]): Map<string, string>;
export declare function renderGeneratedEndpointTests(operations: readonly OperationMetadata[]): Map<string, string>;
