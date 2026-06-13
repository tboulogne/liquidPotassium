export declare const HTTP_METHODS: readonly ["get", "post", "put", "patch", "delete", "head", "options", "trace"];
export type HttpMethod = (typeof HTTP_METHODS)[number];
export type JsonObject = Record<string, unknown>;
export interface NormalizationRepair {
    kind: string;
    path?: string;
    method?: string;
    detail: string;
}
export interface NormalizationReport {
    operationCount: number;
    domainCounts: Record<string, number>;
    repairs: NormalizationRepair[];
    warnings: NormalizationRepair[];
}
export interface NormalizeOpenApiResult {
    spec: JsonObject;
    report: NormalizationReport;
}
export declare function normalizeOpenApiSpec(input: JsonObject): NormalizeOpenApiResult;
