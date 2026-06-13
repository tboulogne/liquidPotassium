import { domains as generatedDomains } from "../generated/catalog/domains.js";
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
    docs: OperationMetadata["docs"];
}
export interface OperationCatalog {
    listDomains(): readonly DomainMetadata[];
    listOperations(options?: OperationListOptions): readonly OperationMetadata[];
    searchOperations(search?: string | OperationSearchOptions): readonly OperationMetadata[];
    getOperation(operationId: string): OperationMetadata;
    describeOperation(operationId: string): OperationDescription;
    isMutatingOperation(operationId: string): boolean;
}
export declare const operationCatalog: OperationCatalog;
export declare function listDomains(): readonly DomainMetadata[];
export declare function listOperations(options?: OperationListOptions): readonly OperationMetadata[];
export declare function searchOperations(search?: string | OperationSearchOptions): readonly OperationMetadata[];
export declare function getOperation(operationId: string): OperationMetadata;
export declare function describeOperation(operationId: string): OperationDescription;
export declare function isMutatingOperation(operationId: string): boolean;
