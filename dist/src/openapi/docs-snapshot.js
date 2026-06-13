import { HTTP_METHODS } from "./normalize.js";
export const defaultDocsSeedUrl = "https://developer.infomaniak.com/docs/api/get/1/newsletters/%7Bdomain%7D";
export const defaultDeveloperPortalBaseUrl = "https://developer.infomaniak.com";
export const defaultApiBaseUrl = "https://api.infomaniak.com";
const docsMetaKeys = [
    ["x-version", "xVersion"],
    ["x-category", "xCategory"],
    ["x-subCategory", "xSubCategory"],
    ["x-visible", "xVisible"],
    ["x-badges", "xBadges"],
    ["x-auth-user", "xAuthUser"],
    ["x-codeSamples", "xCodeSamples"],
    ["x-is-beta", "xIsBeta"],
    ["x-is-public-cloud", "xIsPublicCloud"],
    ["x-paginable", "xPaginable"],
    ["x-sortable", "xSortable"],
    ["x-capabilities", "xCapabilities"],
];
export function extractDataPageJson(html) {
    const encoded = html.match(/\bdata-page="([^"]+)"/u)?.[1];
    if (!encoded) {
        throw new Error("Developer Portal page does not contain a data-page attribute.");
    }
    return JSON.parse(decodeHtmlAttribute(encoded));
}
export function extractDocsOperation(html, docsUrl, navigationItem, apiBaseUrl = defaultApiBaseUrl) {
    const page = asObject(extractDataPageJson(html), "data-page");
    const operation = asObject(asObject(page.props, "data-page.props").operation, "data-page.props.operation");
    const meta = asObject(operation.meta, "data-page.props.operation.meta");
    const method = readHttpMethod(operation.method, "operation.method");
    const path = normalizeApiPath(readString(operation.path, "operation.path"), apiBaseUrl);
    const operationId = typeof meta.operationId === "string" && meta.operationId.length > 0 ? meta.operationId : null;
    return {
        key: operationKey(method, path),
        method,
        path,
        docsUrl,
        summary: readOptionalString(meta.summary),
        operationId,
        categoryPath: navigationItem?.categoryPath ?? readMetaCategoryPath(meta),
        staff: navigationItem?.staff ?? false,
        meta: readDocsOperationMeta(meta),
    };
}
export function flattenDocsNavigation(navigation) {
    const root = asObject(navigation, "navigation");
    const items = [];
    for (const [fallbackLabel, value] of Object.entries(root)) {
        readNavigationNode(value, [readNodeLabel(value, fallbackLabel)], items);
    }
    return items.sort((left, right) => operationKey(left.method, left.endpoint).localeCompare(operationKey(right.method, right.endpoint)));
}
export async function buildDocsSnapshot(seedPageHtml, fetchOperationPage, options = {}) {
    const page = asObject(extractDataPageJson(seedPageHtml), "seed data-page");
    const navigation = asObject(asObject(page.props, "seed data-page.props").navigation, "seed data-page.props.navigation");
    const developerPortalBaseUrl = options.developerPortalBaseUrl ?? defaultDeveloperPortalBaseUrl;
    const apiBaseUrl = options.apiBaseUrl ?? defaultApiBaseUrl;
    const concurrency = Math.max(1, Math.floor(options.concurrency ?? 6));
    const navigationItems = flattenDocsNavigation(navigation);
    const operations = await mapWithConcurrency(navigationItems, concurrency, async (item) => {
        const docsUrl = buildDocsOperationUrl(item.method, item.endpoint, developerPortalBaseUrl);
        const html = await fetchOperationPage(item, docsUrl);
        return extractDocsOperation(html, docsUrl, item, apiBaseUrl);
    });
    const sortedOperations = operations.sort((left, right) => left.key.localeCompare(right.key));
    return {
        generatedAt: options.generatedAt ?? "manual",
        source: {
            seedUrl: options.seedUrl ?? defaultDocsSeedUrl,
            developerPortalBaseUrl,
            apiBaseUrl,
        },
        operationCount: sortedOperations.length,
        operations: sortedOperations,
    };
}
export function checkDocsSnapshot(snapshot, normalizedSpec) {
    const snapshotObject = asObject(snapshot, "docs snapshot");
    const operations = readSnapshotOperations(snapshotObject.operations);
    const normalizedKeys = readNormalizedOperationKeys(normalizedSpec);
    const docsKeys = operations.map((operation) => operation.key);
    const duplicateDocs = findDuplicates(docsKeys);
    const docsKeySet = new Set(docsKeys);
    const matchedKeys = [...docsKeySet].filter((key) => normalizedKeys.has(key)).sort();
    const operationIdMismatches = matchedKeys.flatMap((key) => {
        const docsOperation = operations.find((operation) => operation.key === key);
        const normalizedOperationId = normalizedKeys.get(key);
        if (!docsOperation?.operationId || !normalizedOperationId || docsOperation.operationId === normalizedOperationId) {
            return [];
        }
        return [{ key, docsOperationId: docsOperation.operationId, normalizedOperationId }];
    });
    return {
        operationCount: operations.length,
        normalizedOperationCount: normalizedKeys.size,
        matchedCount: matchedKeys.length,
        duplicateDocs,
        unmatchedDocs: [...docsKeySet].filter((key) => !normalizedKeys.has(key)).sort(),
        unmatchedSpec: [...normalizedKeys.keys()].filter((key) => !docsKeySet.has(key)).sort(),
        operationIdMismatches,
        errors: validateSnapshot(snapshotObject),
    };
}
export function buildDocsOperationUrl(method, endpoint, developerPortalBaseUrl = defaultDeveloperPortalBaseUrl) {
    const encodedEndpoint = endpoint
        .split("/")
        .map((segment) => encodeURIComponent(segment))
        .join("/");
    return new URL(`/docs/api/${method}${encodedEndpoint}`, developerPortalBaseUrl).toString();
}
export function stringifyStableJson(value) {
    return `${JSON.stringify(value, null, 2)}\n`;
}
function decodeHtmlAttribute(value) {
    return value
        .replace(/&quot;/g, "\"")
        .replace(/&#039;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
}
function readNavigationNode(value, categoryPath, output) {
    const node = asObject(value, `navigation.${categoryPath.join(".")}`);
    for (const item of readNavigationItems(node.items, categoryPath, node.is_beta === true)) {
        output.push(item);
    }
    const subCategories = asOptionalObject(node.sub_categories);
    for (const [fallbackLabel, subCategory] of Object.entries(subCategories ?? {})) {
        readNavigationNode(subCategory, [...categoryPath, readNodeLabel(subCategory, fallbackLabel)], output);
    }
}
function readNavigationItems(value, categoryPath, nodeIsBeta) {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.flatMap((item) => {
        if (!isJsonObject(item)) {
            return [];
        }
        const method = typeof item.method === "string" ? maybeHttpMethod(item.method) : undefined;
        const endpoint = typeof item.endpoint === "string" ? item.endpoint : undefined;
        if (!method || !endpoint) {
            return [];
        }
        return [
            {
                method,
                endpoint,
                summary: readOptionalString(item.summary),
                categoryPath,
                staff: item.staff === true,
                isBeta: nodeIsBeta || item.is_beta === true,
            },
        ];
    });
}
function readDocsOperationMeta(meta) {
    const output = {
        parameters: readArray(meta.parameters),
        queryParameters: readArray(meta.queryParameters),
        pathParameters: readArray(meta.pathParameters),
        headerParameters: readArray(meta.headerParameters),
        responses: meta.responses ?? null,
    };
    for (const [sourceKey, targetKey] of docsMetaKeys) {
        output[targetKey] = meta[sourceKey];
    }
    return output;
}
function readMetaCategoryPath(meta) {
    return [meta["x-category"], meta["x-subCategory"]].filter((value) => typeof value === "string" && value.length > 0);
}
function normalizeApiPath(path, apiBaseUrl) {
    if (path.startsWith(apiBaseUrl)) {
        return decodeURI(new URL(path).pathname);
    }
    if (path.startsWith("http://") || path.startsWith("https://")) {
        return decodeURI(new URL(path).pathname);
    }
    if (path.startsWith("/")) {
        return path;
    }
    throw new Error(`Docs operation path is not an API URL or absolute path: ${path}`);
}
function readNormalizedOperationKeys(spec) {
    const paths = asObject(asObject(spec, "normalized spec").paths, "normalized spec.paths");
    const keys = new Map();
    for (const [path, pathItemValue] of Object.entries(paths)) {
        const pathItem = asObject(pathItemValue, `paths.${path}`);
        for (const [method, operationValue] of Object.entries(pathItem)) {
            const httpMethod = maybeHttpMethod(method);
            if (!httpMethod) {
                continue;
            }
            const operation = asObject(operationValue, `${method.toUpperCase()} ${path}`);
            keys.set(operationKey(httpMethod, path), readOptionalString(operation.operationId));
        }
    }
    return keys;
}
function readSnapshotOperations(value) {
    if (!Array.isArray(value)) {
        throw new Error("Docs snapshot operations must be an array.");
    }
    return value.map((operation, index) => readSnapshotOperation(operation, index));
}
function readSnapshotOperation(value, index) {
    const operation = asObject(value, `docs snapshot operation ${index}`);
    return {
        key: readString(operation.key, `operations.${index}.key`),
        method: readHttpMethod(operation.method, `operations.${index}.method`),
        path: readString(operation.path, `operations.${index}.path`),
        docsUrl: readString(operation.docsUrl, `operations.${index}.docsUrl`),
        summary: readOptionalString(operation.summary),
        operationId: typeof operation.operationId === "string" ? operation.operationId : null,
        categoryPath: readStringArray(operation.categoryPath),
        staff: operation.staff === true,
        meta: readDocsOperationMeta(asObject(operation.meta, `operations.${index}.meta`)),
    };
}
function validateSnapshot(snapshot) {
    const errors = [];
    if (typeof snapshot.generatedAt !== "string" || snapshot.generatedAt.length === 0) {
        errors.push("Docs snapshot generatedAt must be a non-empty string.");
    }
    const source = asOptionalObject(snapshot.source);
    if (!source) {
        errors.push("Docs snapshot source must be an object.");
    }
    if (typeof snapshot.operationCount !== "number") {
        errors.push("Docs snapshot operationCount must be a number.");
    }
    if (Array.isArray(snapshot.operations) && typeof snapshot.operationCount === "number" && snapshot.operationCount !== snapshot.operations.length) {
        errors.push("Docs snapshot operationCount must match operations.length.");
    }
    return errors;
}
async function mapWithConcurrency(items, concurrency, mapper) {
    const results = new Array(items.length);
    let nextIndex = 0;
    async function worker() {
        for (;;) {
            const index = nextIndex;
            nextIndex += 1;
            if (index >= items.length) {
                return;
            }
            results[index] = await mapper(items[index]);
        }
    }
    await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
    return results;
}
function operationKey(method, path) {
    return `${method} ${path}`;
}
function findDuplicates(values) {
    const seen = new Set();
    const duplicates = new Set();
    for (const value of values) {
        if (seen.has(value)) {
            duplicates.add(value);
        }
        seen.add(value);
    }
    return [...duplicates].sort();
}
function readNodeLabel(value, fallback) {
    const node = asOptionalObject(value);
    return typeof node?.label === "string" && node.label.length > 0 ? node.label : fallback;
}
function readArray(value) {
    return Array.isArray(value) ? value : [];
}
function readString(value, label) {
    if (typeof value !== "string" || value.length === 0) {
        throw new Error(`Expected ${label} to be a non-empty string.`);
    }
    return value;
}
function readOptionalString(value) {
    return typeof value === "string" ? value : "";
}
function readStringArray(value) {
    return Array.isArray(value) ? value.filter((item) => typeof item === "string") : [];
}
function readHttpMethod(value, label) {
    const method = typeof value === "string" ? maybeHttpMethod(value) : undefined;
    if (!method) {
        throw new Error(`Expected ${label} to be an HTTP method.`);
    }
    return method;
}
function maybeHttpMethod(value) {
    const method = value.toLowerCase();
    return HTTP_METHODS.includes(method) ? method : undefined;
}
function asObject(value, label) {
    if (!isJsonObject(value)) {
        throw new Error(`Expected ${label} to be an object.`);
    }
    return value;
}
function asOptionalObject(value) {
    return isJsonObject(value) ? value : undefined;
}
function isJsonObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
//# sourceMappingURL=docs-snapshot.js.map