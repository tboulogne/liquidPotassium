export type OperationDocsJsonValue = string | number | boolean | null | readonly OperationDocsJsonValue[] | {
    readonly [key: string]: OperationDocsJsonValue;
};
export interface OperationParameterMetadata {
    name: string;
    in: "path" | "query" | "header" | "cookie";
    required: boolean;
}
export interface OperationDocsCapabilityMetadata {
    name: string;
    description: string;
    values: readonly string[];
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
    enumValues: readonly OperationDocsJsonValue[];
    values: readonly OperationDocsJsonValue[];
    examples: readonly OperationDocsJsonValue[];
}
export interface OperationDocsMetadata {
    url: string;
    operationId: string | null;
    summary: string;
    categoryPath: readonly string[];
    staff: boolean;
    beta: boolean;
    publicCloud: boolean;
    paginable: boolean | null;
    sortable: boolean | null;
    authUser: boolean | null;
    version: string | number | null;
    capabilities: readonly OperationDocsCapabilityMetadata[];
    parameters: readonly OperationDocsParameterMetadata[];
    responseStatuses: readonly string[];
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
    tags: readonly string[];
    mutating: boolean;
    pathParameters: readonly OperationParameterMetadata[];
    queryParameters: readonly OperationParameterMetadata[];
    headerParameters: readonly OperationParameterMetadata[];
    cookieParameters: readonly OperationParameterMetadata[];
    requestContentTypes: readonly string[];
    responseContentTypes: readonly string[];
    deprecated: boolean;
    auth: readonly string[];
    docs: OperationDocsMetadata | null;
}
export interface DomainMetadata {
    domain: string;
    operationCount: number;
}
