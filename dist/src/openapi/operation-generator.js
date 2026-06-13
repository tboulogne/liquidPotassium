import { HTTP_METHODS } from "./normalize.js";
const parameterBuckets = ["path", "query", "header", "cookie"];
export function buildOperationCatalog(spec, docsSnapshot) {
    const operations = [];
    const paths = asObject(spec.paths, "paths");
    const functionNamesByDomain = new Map();
    const docsByKey = buildDocsByOperationKey(docsSnapshot);
    for (const [path, pathItemValue] of Object.entries(paths)) {
        const pathItem = asObject(pathItemValue, `paths.${path}`);
        const sharedParameters = readParameters(pathItem.parameters);
        for (const [method, operationValue] of Object.entries(pathItem)) {
            if (!isHttpMethod(method)) {
                continue;
            }
            const operation = asObject(operationValue, `${method.toUpperCase()} ${path}`);
            const domain = readRequiredString(operation["x-infomaniak-domain"], `domain for ${method.toUpperCase()} ${path}`);
            const operationId = readRequiredString(operation.operationId, `operationId for ${method.toUpperCase()} ${path}`);
            const allParameters = [...sharedParameters, ...readParameters(operation.parameters)];
            const buckets = bucketParameters(allParameters);
            const functionName = uniqueFunctionName(toFunctionName(operationId), domain, functionNamesByDomain);
            const docsEntry = docsByKey.get(operationKey(method, path));
            operations.push({
                operationId,
                functionName,
                originalOperationId: readNullableString(operation["x-infomaniak-original-operationId"]),
                domain,
                method: method.toUpperCase(),
                path,
                summary: readOptionalString(operation.summary),
                description: readOptionalString(operation.description),
                tags: readStringArray(operation.tags),
                mutating: operation["x-infomaniak-mutating"] === true,
                pathParameters: buckets.path,
                queryParameters: buckets.query,
                headerParameters: buckets.header,
                cookieParameters: buckets.cookie,
                requestContentTypes: readContentTypes(operation, "request"),
                responseContentTypes: readContentTypes(operation, "response"),
                deprecated: operation.deprecated === true,
                auth: readAuth(operation.security),
                docs: readOperationDocsMetadata(docsEntry),
            });
        }
    }
    return operations.sort((left, right) => `${left.domain}:${left.path}:${left.method}`.localeCompare(`${right.domain}:${right.path}:${right.method}`));
}
export function buildDomainMetadata(operations) {
    const counts = new Map();
    for (const operation of operations) {
        counts.set(operation.domain, (counts.get(operation.domain) ?? 0) + 1);
    }
    return [...counts.entries()]
        .map(([domain, operationCount]) => ({ domain, operationCount }))
        .sort((left, right) => left.domain.localeCompare(right.domain));
}
export function renderCatalogSources(operations) {
    const domains = buildDomainMetadata(operations);
    const output = new Map();
    for (const domain of domains) {
        const domainOperations = operations.filter((operation) => operation.domain === domain.domain);
        output.set(`catalog/domains/${domain.domain}.ts`, renderDomainCatalog(domain.domain, domainOperations));
    }
    output.set("catalog/domains.ts", renderDomains(domains));
    output.set("catalog/operations.ts", renderOperationsIndex(domains));
    output.set("catalog/types.ts", renderCatalogTypes());
    return output;
}
export function renderOperationWrapperSources(operations) {
    const output = new Map();
    for (const domain of buildDomainMetadata(operations)) {
        output.set(`operations/${domain.domain}.ts`, renderOperationWrappers(domain.domain, operations.filter((operation) => operation.domain === domain.domain)));
    }
    output.set("operations/index.ts", renderOperationsRoot(buildDomainMetadata(operations)));
    return output;
}
export function renderGeneratedEndpointTests(operations) {
    const output = new Map();
    for (const domain of buildDomainMetadata(operations)) {
        output.set(`${domain.domain}.generated.test.ts`, renderEndpointTest(domain.domain));
    }
    return output;
}
function renderDomainCatalog(domain, operations) {
    return `${generatedHeader()}import type { OperationMetadata } from "../types.js";\n\nexport const ${domain}Operations: readonly OperationMetadata[] = ${JSON.stringify(operations, null, 2)};\n`;
}
function renderDomains(domains) {
    return `${generatedHeader()}import type { DomainMetadata } from "./types.js";\n\nexport const domains = ${JSON.stringify(domains, null, 2)} as const satisfies readonly DomainMetadata[];\n`;
}
function renderOperationsIndex(domains) {
    const imports = domains.map((domain) => `import { ${domain.domain}Operations } from "./domains/${domain.domain}.js";`).join("\n");
    const arrays = domains.map((domain) => `  ...${domain.domain}Operations,`).join("\n");
    return `${generatedHeader()}${imports}\nimport type { OperationMetadata } from "./types.js";\n\nexport const operations: readonly OperationMetadata[] = [\n${arrays}\n];\n`;
}
function renderCatalogTypes() {
    return `${generatedHeader()}export type OperationDocsJsonValue =\n  | string\n  | number\n  | boolean\n  | null\n  | readonly OperationDocsJsonValue[]\n  | { readonly [key: string]: OperationDocsJsonValue };\n\nexport interface OperationParameterMetadata {\n  name: string;\n  in: "path" | "query" | "header" | "cookie";\n  required: boolean;\n}\n\nexport interface OperationDocsCapabilityMetadata {\n  name: string;\n  description: string;\n  values: readonly string[];\n}\n\nexport interface OperationDocsParameterMetadata {\n  name: string;\n  in: string;\n  required: boolean;\n  description: string;\n  style: string | null;\n  explode: boolean | null;\n  schemaType: string | null;\n  schema: OperationDocsJsonValue;\n  enumValues: readonly OperationDocsJsonValue[];\n  values: readonly OperationDocsJsonValue[];\n  examples: readonly OperationDocsJsonValue[];\n}\n\nexport interface OperationDocsMetadata {\n  url: string;\n  operationId: string | null;\n  summary: string;\n  categoryPath: readonly string[];\n  staff: boolean;\n  beta: boolean;\n  publicCloud: boolean;\n  paginable: boolean | null;\n  sortable: boolean | null;\n  authUser: boolean | null;\n  version: string | number | null;\n  capabilities: readonly OperationDocsCapabilityMetadata[];\n  parameters: readonly OperationDocsParameterMetadata[];\n  responseStatuses: readonly string[];\n}\n\nexport interface OperationMetadata {\n  operationId: string;\n  functionName: string;\n  originalOperationId: string | null;\n  domain: string;\n  method: string;\n  path: string;\n  summary: string;\n  description: string;\n  tags: readonly string[];\n  mutating: boolean;\n  pathParameters: readonly OperationParameterMetadata[];\n  queryParameters: readonly OperationParameterMetadata[];\n  headerParameters: readonly OperationParameterMetadata[];\n  cookieParameters: readonly OperationParameterMetadata[];\n  requestContentTypes: readonly string[];\n  responseContentTypes: readonly string[];\n  deprecated: boolean;\n  auth: readonly string[];\n  docs: OperationDocsMetadata | null;\n}\n\nexport interface DomainMetadata {\n  domain: string;\n  operationCount: number;\n}\n`;
}
function renderOperationWrappers(domain, operations) {
    const entries = operations
        .map((operation) => `    ${operation.functionName}: (request?: OperationRequest) => client.requestOperation(${JSON.stringify(operation.operationId)}, request),`)
        .join("\n");
    return `${generatedHeader()}import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";\n\nexport function create${pascalCase(domain)}Operations(client: GeneratedOperationClient) {\n  return {\n${entries}\n  } as const;\n}\n`;
}
function renderOperationsRoot(domains) {
    const imports = domains.map((domain) => `import { create${pascalCase(domain.domain)}Operations } from "./${domain.domain}.js";`).join("\n");
    const entries = domains.map((domain) => `    ${domain.domain}: { operations: create${pascalCase(domain.domain)}Operations(client) },`).join("\n");
    return `${generatedHeader()}import type { GeneratedOperationClient } from "../../client/generated-operation-client.js";\n${imports}\n\nexport function createDomainOperations(client: GeneratedOperationClient) {\n  return {\n${entries}\n  } as const;\n}\n`;
}
function renderEndpointTest(domain) {
    const createName = `create${pascalCase(domain)}Operations`;
    return `${generatedHeader()}import { readFile } from "node:fs/promises";\n\nimport { describe, expect, it } from "vitest";\n\nimport type { GeneratedOperationClient, OperationRequest } from "../../src/client/generated-operation-client.js";\nimport { ${domain}Operations } from "../../src/generated/catalog/domains/${domain}.js";\nimport { ${createName} } from "../../src/generated/operations/${domain}.js";\n\ninterface CapturedCall {\n  operationId: string;\n  request: OperationRequest | undefined;\n}\n\ninterface DocsSnapshotOperation {\n  key: string;\n  docsUrl: string;\n  operationId: string | null;\n  categoryPath: readonly string[];\n  meta: { responses?: Record<string, unknown> };\n}\n\nfunction createCapturingClient(calls: CapturedCall[]): GeneratedOperationClient {\n  return {\n    async requestOperation(operationId, request) {\n      calls.push({ operationId, request });\n      return { operationId, request };\n    },\n  };\n}\n\ndescribe("generated ${domain} endpoints", () => {\n  it("matches normalized spec metadata, docs enrichment, and wrapper dispatch for every operation", async () => {\n    const normalized = JSON.parse(await readFile("spec/infomaniak.normalized.json", "utf8")) as { paths: Record<string, Record<string, { operationId?: string }>> };\n    const docsSnapshot = JSON.parse(await readFile("spec/infomaniak.docs-snapshot.json", "utf8")) as { operations: DocsSnapshotOperation[] };\n    const docsByKey = new Map(docsSnapshot.operations.map((operation) => [operation.key, operation]));\n    const calls: CapturedCall[] = [];\n    const wrappers = ${createName}(createCapturingClient(calls));\n\n    for (const operation of ${domain}Operations) {\n      const normalizedOperation = normalized.paths[operation.path]?.[operation.method.toLowerCase()];\n      const docsOperation = docsByKey.get(\`\${operation.method.toLowerCase()} \${operation.path}\`);\n      expect(normalizedOperation?.operationId).toBe(operation.operationId);\n      expect(operation.domain).toBe(${JSON.stringify(domain)});\n      expect(operation.method).toMatch(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS|TRACE)$/);\n      expect(operation.path).toMatch(/^\\//);\n      expect(Array.isArray(operation.pathParameters)).toBe(true);\n      expect(Array.isArray(operation.queryParameters)).toBe(true);\n      expect(Array.isArray(operation.requestContentTypes)).toBe(true);\n      expect(Array.isArray(operation.responseContentTypes)).toBe(true);\n      expect(operation.docs?.url ?? null).toBe(docsOperation?.docsUrl ?? null);\n      expect(operation.docs?.operationId ?? null).toBe(docsOperation?.operationId ?? null);\n      expect(operation.docs?.categoryPath ?? null).toEqual(docsOperation?.categoryPath ?? null);\n      expect(operation.docs?.responseStatuses ?? []).toEqual(Object.keys(docsOperation?.meta.responses ?? {}).sort((left, right) => left.localeCompare(right, undefined, { numeric: true })));\n\n      const wrapper = wrappers[operation.functionName as keyof typeof wrappers];\n      expect(wrapper).toBeTypeOf("function");\n      await wrapper({ query: { sample: "value" } });\n      expect(calls.at(-1)).toEqual({ operationId: operation.operationId, request: { query: { sample: "value" } } });\n    }\n  });\n});\n`;
}
function readParameters(value) {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.flatMap((parameter) => {
        if (!isJsonObject(parameter) || typeof parameter.$ref === "string") {
            return [];
        }
        const parsed = parameter;
        if (typeof parsed.name !== "string" || !isParameterLocation(parsed.in)) {
            return [];
        }
        return [{ name: parsed.name, in: parsed.in, required: parsed.required === true }];
    });
}
function bucketParameters(parameters) {
    const buckets = {
        path: [],
        query: [],
        header: [],
        cookie: [],
    };
    for (const parameter of parameters) {
        buckets[parameter.in].push(parameter);
    }
    return buckets;
}
function readContentTypes(operation, key) {
    const contentTypes = asObject(operation["x-infomaniak-content-types"], "x-infomaniak-content-types");
    const value = contentTypes[key];
    return readStringArray(value);
}
function readAuth(security) {
    if (!Array.isArray(security)) {
        return [];
    }
    const auth = new Set();
    for (const entry of security) {
        if (!isJsonObject(entry)) {
            continue;
        }
        for (const key of Object.keys(entry)) {
            auth.add(key);
        }
    }
    return [...auth].sort();
}
function buildDocsByOperationKey(docsSnapshot) {
    const operations = Array.isArray(docsSnapshot?.operations) ? docsSnapshot.operations : [];
    return new Map(operations.map((operation) => [operation.key, operation]));
}
function readOperationDocsMetadata(entry) {
    if (!entry) {
        return null;
    }
    return {
        url: entry.docsUrl,
        operationId: entry.operationId,
        summary: entry.summary,
        categoryPath: [...entry.categoryPath],
        staff: entry.staff,
        beta: entry.meta.xIsBeta === true,
        publicCloud: entry.meta.xIsPublicCloud === true,
        paginable: readNullableBoolean(entry.meta.xPaginable),
        sortable: readNullableBoolean(entry.meta.xSortable),
        authUser: readNullableBoolean(entry.meta.xAuthUser),
        version: readVersion(entry.meta.xVersion),
        capabilities: readCapabilities(entry.meta.xCapabilities),
        parameters: readDocsParameters(entry.meta.parameters),
        responseStatuses: readResponseStatuses(entry.meta.responses),
    };
}
function readDocsParameters(parameters) {
    return parameters.flatMap((parameter) => {
        if (!isJsonObject(parameter) || typeof parameter.name !== "string" || typeof parameter.in !== "string") {
            return [];
        }
        const schema = isJsonObject(parameter.schema) ? parameter.schema : undefined;
        return [
            {
                name: parameter.name,
                in: parameter.in,
                required: parameter.required === true,
                description: readOptionalString(parameter.description),
                style: readStringOrNull(parameter.style),
                explode: readNullableBoolean(parameter.explode),
                schemaType: readSchemaType(schema),
                schema: toJsonValue(schema ?? null),
                enumValues: readJsonValueArray(schema?.enum),
                values: readJsonValueArray(parameter["x-values"]),
                examples: readExamples(parameter, schema),
            },
        ];
    });
}
function readCapabilities(value) {
    if (!Array.isArray(value)) {
        return [];
    }
    return value.flatMap((capability) => {
        if (!isJsonObject(capability) || typeof capability.name !== "string") {
            return [];
        }
        return [
            {
                name: capability.name,
                description: readOptionalString(capability.description),
                values: readStringArray(capability.values),
            },
        ];
    });
}
function readResponseStatuses(value) {
    if (!isJsonObject(value)) {
        return [];
    }
    return Object.keys(value).sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
}
function readExamples(parameter, schema) {
    const examples = [];
    addJsonValue(examples, parameter.example);
    addJsonValue(examples, schema?.example);
    if (Array.isArray(parameter.examples)) {
        for (const example of parameter.examples) {
            addJsonValue(examples, example);
        }
    }
    else if (isJsonObject(parameter.examples)) {
        for (const example of Object.values(parameter.examples)) {
            const exampleValue = isJsonObject(example) && "value" in example ? example.value : example;
            addJsonValue(examples, exampleValue);
        }
    }
    return uniqueJsonValues(examples);
}
function addJsonValue(values, value) {
    if (value !== undefined) {
        values.push(toJsonValue(value));
    }
}
function uniqueJsonValues(values) {
    const seen = new Set();
    const output = [];
    for (const value of values) {
        const key = JSON.stringify(value);
        if (seen.has(key)) {
            continue;
        }
        seen.add(key);
        output.push(value);
    }
    return output;
}
function readJsonValueArray(value) {
    return Array.isArray(value) ? value.map(toJsonValue) : [];
}
function readSchemaType(schema) {
    if (!schema) {
        return null;
    }
    if (typeof schema.type === "string") {
        return schema.type;
    }
    if (Array.isArray(schema.type)) {
        return schema.type.filter((value) => typeof value === "string").sort().join(" | ") || null;
    }
    if (typeof schema["x-ref"] === "string") {
        return schema["x-ref"];
    }
    return null;
}
function readNullableBoolean(value) {
    return typeof value === "boolean" ? value : null;
}
function readVersion(value) {
    return typeof value === "string" || typeof value === "number" ? value : null;
}
function readStringOrNull(value) {
    return typeof value === "string" ? value : null;
}
function toJsonValue(value) {
    if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return value;
    }
    if (Array.isArray(value)) {
        return value.map(toJsonValue);
    }
    if (isJsonObject(value)) {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, toJsonValue(item)]));
    }
    return null;
}
function operationKey(method, path) {
    return `${method.toLowerCase()} ${path}`;
}
function uniqueFunctionName(baseName, domain, namesByDomain) {
    const names = namesByDomain.get(domain) ?? new Set();
    namesByDomain.set(domain, names);
    let name = baseName;
    let suffix = 2;
    while (names.has(name)) {
        name = `${baseName}${suffix}`;
        suffix += 1;
    }
    names.add(name);
    return name;
}
function toFunctionName(operationId) {
    const words = operationId.split(/[^A-Za-z0-9]+/).filter(Boolean);
    const name = words
        .map((word, index) => {
        const lower = word.toLowerCase();
        return index === 0 ? lower : `${lower.slice(0, 1).toUpperCase()}${lower.slice(1)}`;
    })
        .join("");
    const safeName = name || "operation";
    return /^[A-Za-z_$]/.test(safeName) ? safeName : `operation${safeName}`;
}
function pascalCase(value) {
    const name = toFunctionName(value);
    return `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
}
function generatedHeader() {
    return "// Generated by npm run generate. Do not edit by hand.\n";
}
function isHttpMethod(method) {
    return HTTP_METHODS.includes(method);
}
function isParameterLocation(value) {
    return parameterBuckets.includes(value);
}
function readRequiredString(value, label) {
    if (typeof value !== "string" || !value) {
        throw new Error(`Missing ${label}`);
    }
    return value;
}
function readNullableString(value) {
    return typeof value === "string" ? value : null;
}
function readOptionalString(value) {
    return typeof value === "string" ? value : "";
}
function readStringArray(value) {
    return Array.isArray(value) ? value.filter((item) => typeof item === "string").sort() : [];
}
function asObject(value, label) {
    if (!isJsonObject(value)) {
        throw new Error(`Expected ${label} to be an object`);
    }
    return value;
}
function isJsonObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
//# sourceMappingURL=operation-generator.js.map