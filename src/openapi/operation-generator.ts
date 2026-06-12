import { HTTP_METHODS, type JsonObject } from "./normalize.js";

export interface OperationParameterMetadata {
  name: string;
  in: "path" | "query" | "header" | "cookie";
  required: boolean;
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
}

export interface DomainMetadata {
  domain: string;
  operationCount: number;
}

interface ParameterLike {
  name?: unknown;
  in?: unknown;
  required?: unknown;
}

const parameterBuckets = ["path", "query", "header", "cookie"] as const;

export function buildOperationCatalog(spec: JsonObject): OperationMetadata[] {
  const operations: OperationMetadata[] = [];
  const paths = asObject(spec.paths, "paths");
  const functionNamesByDomain = new Map<string, Set<string>>();

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
      });
    }
  }

  return operations.sort((left, right) => `${left.domain}:${left.path}:${left.method}`.localeCompare(`${right.domain}:${right.path}:${right.method}`));
}

export function buildDomainMetadata(operations: readonly OperationMetadata[]): DomainMetadata[] {
  const counts = new Map<string, number>();
  for (const operation of operations) {
    counts.set(operation.domain, (counts.get(operation.domain) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([domain, operationCount]) => ({ domain, operationCount }))
    .sort((left, right) => left.domain.localeCompare(right.domain));
}

export function renderCatalogSources(operations: readonly OperationMetadata[]): Map<string, string> {
  const domains = buildDomainMetadata(operations);
  const output = new Map<string, string>();

  for (const domain of domains) {
    const domainOperations = operations.filter((operation) => operation.domain === domain.domain);
    output.set(`catalog/domains/${domain.domain}.ts`, renderDomainCatalog(domain.domain, domainOperations));
  }

  output.set("catalog/domains.ts", renderDomains(domains));
  output.set("catalog/operations.ts", renderOperationsIndex(domains));
  output.set("catalog/types.ts", renderCatalogTypes());
  return output;
}

export function renderOperationWrapperSources(operations: readonly OperationMetadata[]): Map<string, string> {
  const output = new Map<string, string>();
  for (const domain of buildDomainMetadata(operations)) {
    output.set(`operations/${domain.domain}.ts`, renderOperationWrappers(domain.domain, operations.filter((operation) => operation.domain === domain.domain)));
  }
  output.set("operations/index.ts", renderOperationsRoot(buildDomainMetadata(operations)));
  return output;
}

export function renderGeneratedEndpointTests(operations: readonly OperationMetadata[]): Map<string, string> {
  const output = new Map<string, string>();
  for (const domain of buildDomainMetadata(operations)) {
    output.set(`${domain.domain}.generated.test.ts`, renderEndpointTest(domain.domain));
  }
  return output;
}

function renderDomainCatalog(domain: string, operations: readonly OperationMetadata[]): string {
  return `${generatedHeader()}import type { OperationMetadata } from "../types.js";\n\nexport const ${domain}Operations: readonly OperationMetadata[] = ${JSON.stringify(operations, null, 2)};\n`;
}

function renderDomains(domains: readonly DomainMetadata[]): string {
  return `${generatedHeader()}import type { DomainMetadata } from "./types.js";\n\nexport const domains = ${JSON.stringify(domains, null, 2)} as const satisfies readonly DomainMetadata[];\n`;
}

function renderOperationsIndex(domains: readonly DomainMetadata[]): string {
  const imports = domains.map((domain) => `import { ${domain.domain}Operations } from "./domains/${domain.domain}.js";`).join("\n");
  const arrays = domains.map((domain) => `  ...${domain.domain}Operations,`).join("\n");
  return `${generatedHeader()}${imports}\nimport type { OperationMetadata } from "./types.js";\n\nexport const operations: readonly OperationMetadata[] = [\n${arrays}\n];\n`;
}

function renderCatalogTypes(): string {
  return `${generatedHeader()}export interface OperationParameterMetadata {\n  name: string;\n  in: "path" | "query" | "header" | "cookie";\n  required: boolean;\n}\n\nexport interface OperationMetadata {\n  operationId: string;\n  functionName: string;\n  originalOperationId: string | null;\n  domain: string;\n  method: string;\n  path: string;\n  summary: string;\n  description: string;\n  tags: readonly string[];\n  mutating: boolean;\n  pathParameters: readonly OperationParameterMetadata[];\n  queryParameters: readonly OperationParameterMetadata[];\n  headerParameters: readonly OperationParameterMetadata[];\n  cookieParameters: readonly OperationParameterMetadata[];\n  requestContentTypes: readonly string[];\n  responseContentTypes: readonly string[];\n  deprecated: boolean;\n  auth: readonly string[];\n}\n\nexport interface DomainMetadata {\n  domain: string;\n  operationCount: number;\n}\n`;
}

function renderOperationWrappers(domain: string, operations: readonly OperationMetadata[]): string {
  const entries = operations
    .map((operation) => `    ${operation.functionName}: (request?: OperationRequest) => client.requestOperation(${JSON.stringify(operation.operationId)}, request),`)
    .join("\n");
  return `${generatedHeader()}import type { GeneratedOperationClient, OperationRequest } from "../../client/generated-operation-client.js";\n\nexport function create${pascalCase(domain)}Operations(client: GeneratedOperationClient) {\n  return {\n${entries}\n  } as const;\n}\n`;
}

function renderOperationsRoot(domains: readonly DomainMetadata[]): string {
  const imports = domains.map((domain) => `import { create${pascalCase(domain.domain)}Operations } from "./${domain.domain}.js";`).join("\n");
  const entries = domains.map((domain) => `    ${domain.domain}: create${pascalCase(domain.domain)}Operations(client),`).join("\n");
  return `${generatedHeader()}import type { GeneratedOperationClient } from "../../client/generated-operation-client.js";\n${imports}\n\nexport function createDomainOperations(client: GeneratedOperationClient) {\n  return {\n${entries}\n  } as const;\n}\n`;
}

function renderEndpointTest(domain: string): string {
  const createName = `create${pascalCase(domain)}Operations`;
  return `${generatedHeader()}import { readFile } from "node:fs/promises";\n\nimport { describe, expect, it } from "vitest";\n\nimport type { GeneratedOperationClient, OperationRequest } from "../../src/client/generated-operation-client.js";\nimport { ${domain}Operations } from "../../src/generated/catalog/domains/${domain}.js";\nimport { ${createName} } from "../../src/generated/operations/${domain}.js";\n\ninterface CapturedCall {\n  operationId: string;\n  request: OperationRequest | undefined;\n}\n\nfunction createCapturingClient(calls: CapturedCall[]): GeneratedOperationClient {\n  return {\n    async requestOperation(operationId, request) {\n      calls.push({ operationId, request });\n      return { operationId, request };\n    },\n  };\n}\n\ndescribe("generated ${domain} endpoints", () => {\n  it("matches normalized spec metadata and wrapper dispatch for every operation", async () => {\n    const normalized = JSON.parse(await readFile("spec/infomaniak.normalized.json", "utf8")) as { paths: Record<string, Record<string, { operationId?: string }>> };\n    const calls: CapturedCall[] = [];\n    const wrappers = ${createName}(createCapturingClient(calls));\n\n    for (const operation of ${domain}Operations) {\n      const normalizedOperation = normalized.paths[operation.path]?.[operation.method.toLowerCase()];\n      expect(normalizedOperation?.operationId).toBe(operation.operationId);\n      expect(operation.domain).toBe(${JSON.stringify(domain)});\n      expect(operation.method).toMatch(/^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS|TRACE)$/);\n      expect(operation.path).toMatch(/^\\//);\n      expect(Array.isArray(operation.pathParameters)).toBe(true);\n      expect(Array.isArray(operation.queryParameters)).toBe(true);\n      expect(Array.isArray(operation.requestContentTypes)).toBe(true);\n      expect(Array.isArray(operation.responseContentTypes)).toBe(true);\n\n      const wrapper = wrappers[operation.functionName as keyof typeof wrappers];\n      expect(wrapper).toBeTypeOf("function");\n      await wrapper({ query: { sample: "value" } });\n      expect(calls.at(-1)).toEqual({ operationId: operation.operationId, request: { query: { sample: "value" } } });\n    }\n  });\n});\n`;
}

function readParameters(value: unknown): OperationParameterMetadata[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value.flatMap((parameter) => {
    if (!isJsonObject(parameter) || typeof parameter.$ref === "string") {
      return [];
    }
    const parsed = parameter as ParameterLike;
    if (typeof parsed.name !== "string" || !isParameterLocation(parsed.in)) {
      return [];
    }
    return [{ name: parsed.name, in: parsed.in, required: parsed.required === true }];
  });
}

function bucketParameters(parameters: readonly OperationParameterMetadata[]): Record<(typeof parameterBuckets)[number], OperationParameterMetadata[]> {
  const buckets: Record<(typeof parameterBuckets)[number], OperationParameterMetadata[]> = {
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

function readContentTypes(operation: JsonObject, key: "request" | "response"): string[] {
  const contentTypes = asObject(operation["x-infomaniak-content-types"], "x-infomaniak-content-types");
  const value = contentTypes[key];
  return readStringArray(value);
}

function readAuth(security: unknown): string[] {
  if (!Array.isArray(security)) {
    return [];
  }
  const auth = new Set<string>();
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

function uniqueFunctionName(baseName: string, domain: string, namesByDomain: Map<string, Set<string>>): string {
  const names = namesByDomain.get(domain) ?? new Set<string>();
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

function toFunctionName(operationId: string): string {
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

function pascalCase(value: string): string {
  const name = toFunctionName(value);
  return `${name.slice(0, 1).toUpperCase()}${name.slice(1)}`;
}

function generatedHeader(): string {
  return "// Generated by npm run generate. Do not edit by hand.\n";
}

function isHttpMethod(method: string): boolean {
  return HTTP_METHODS.includes(method as (typeof HTTP_METHODS)[number]);
}

function isParameterLocation(value: unknown): value is OperationParameterMetadata["in"] {
  return parameterBuckets.includes(value as OperationParameterMetadata["in"]);
}

function readRequiredString(value: unknown, label: string): string {
  if (typeof value !== "string" || !value) {
    throw new Error(`Missing ${label}`);
  }
  return value;
}

function readNullableString(value: unknown): string | null {
  return typeof value === "string" ? value : null;
}

function readOptionalString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function readStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string").sort() : [];
}

function asObject(value: unknown, label: string): JsonObject {
  if (!isJsonObject(value)) {
    throw new Error(`Expected ${label} to be an object`);
  }
  return value;
}

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
