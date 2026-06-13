import { type HttpMethod } from "./normalize.js";
export interface DocsNavigationItem {
    method: HttpMethod;
    endpoint: string;
    summary: string;
    categoryPath: readonly string[];
    staff: boolean;
    isBeta: boolean;
}
export interface DocsOperationMeta {
    parameters: readonly unknown[];
    queryParameters: readonly unknown[];
    pathParameters: readonly unknown[];
    headerParameters: readonly unknown[];
    responses: unknown;
    xVersion?: unknown;
    xCategory?: unknown;
    xSubCategory?: unknown;
    xVisible?: unknown;
    xBadges?: unknown;
    xAuthUser?: unknown;
    xCodeSamples?: unknown;
    xIsBeta?: unknown;
    xIsPublicCloud?: unknown;
    xPaginable?: unknown;
    xSortable?: unknown;
    xCapabilities?: unknown;
}
export interface DocsOperationEntry {
    key: string;
    method: HttpMethod;
    path: string;
    docsUrl: string;
    summary: string;
    operationId: string | null;
    categoryPath: readonly string[];
    staff: boolean;
    meta: DocsOperationMeta;
}
export interface DocsSnapshot {
    generatedAt: string;
    source: {
        seedUrl: string;
        developerPortalBaseUrl: string;
        apiBaseUrl: string;
    };
    operationCount: number;
    operations: readonly DocsOperationEntry[];
}
export interface DocsSnapshotCheckReport {
    operationCount: number;
    normalizedOperationCount: number;
    matchedCount: number;
    duplicateDocs: readonly string[];
    unmatchedDocs: readonly string[];
    unmatchedSpec: readonly string[];
    operationIdMismatches: readonly DocsOperationIdMismatch[];
    errors: readonly string[];
}
export interface DocsOperationIdMismatch {
    key: string;
    docsOperationId: string;
    normalizedOperationId: string;
}
export interface BuildDocsSnapshotOptions {
    seedUrl?: string;
    developerPortalBaseUrl?: string;
    apiBaseUrl?: string;
    generatedAt?: string;
    concurrency?: number;
}
export type FetchDocsOperationPage = (item: DocsNavigationItem, docsUrl: string) => Promise<string>;
export declare const defaultDocsSeedUrl = "https://developer.infomaniak.com/docs/api/get/1/newsletters/%7Bdomain%7D";
export declare const defaultDeveloperPortalBaseUrl = "https://developer.infomaniak.com";
export declare const defaultApiBaseUrl = "https://api.infomaniak.com";
export declare function extractDataPageJson(html: string): unknown;
export declare function extractDocsOperation(html: string, docsUrl: string, navigationItem?: DocsNavigationItem, apiBaseUrl?: string): DocsOperationEntry;
export declare function flattenDocsNavigation(navigation: unknown): DocsNavigationItem[];
export declare function buildDocsSnapshot(seedPageHtml: string, fetchOperationPage: FetchDocsOperationPage, options?: BuildDocsSnapshotOptions): Promise<DocsSnapshot>;
export declare function checkDocsSnapshot(snapshot: unknown, normalizedSpec: unknown): DocsSnapshotCheckReport;
export declare function buildDocsOperationUrl(method: HttpMethod, endpoint: string, developerPortalBaseUrl?: string): string;
export declare function stringifyStableJson(value: unknown): string;
