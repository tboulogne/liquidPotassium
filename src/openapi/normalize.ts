export const HTTP_METHODS = ["get", "post", "put", "patch", "delete", "head", "options", "trace"] as const;

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

interface DomainRule {
  domain: string;
  pattern: RegExp;
}

const domainRules: DomainRule[] = [
  { domain: "kchat", pattern: /^\/api\/v4(?:\/|$)/ },
  { domain: "kdrive", pattern: /^\/(?:2|3)\/drive(?:\/|$)/ },
  { domain: "kdrive", pattern: /^\/2\/app\/\{drive_id\}\/share(?:\/|$)/ },
  { domain: "mail", pattern: /^\/1\/mail_hostings(?:\/|$)/ },
  { domain: "kmeet", pattern: /^\/1\/kmeet(?:\/|$)/ },
  { domain: "newsletter", pattern: /^\/1\/newsletters(?:\/|$)/ },
  { domain: "publicCloud", pattern: /^\/1\/public_clouds(?:\/|$)/ },
  { domain: "domains", pattern: /^\/2\/(?:domains|zones|tld)(?:\/|$)/ },
  { domain: "ai", pattern: /^\/(?:1|2)\/ai(?:\/|$)/ },
  { domain: "vod", pattern: /^\/(?:1|2)\/vod(?:\/|$)/ },
  { domain: "video", pattern: /^\/1\/videos(?:\/|$)/ },
  { domain: "radio", pattern: /^\/1\/radios(?:\/|$)/ },
  { domain: "swissBackup", pattern: /^\/1\/swiss_backups(?:\/|$)/ },
  { domain: "urlShortener", pattern: /^\/(?:1|2)\/url-shortener(?:\/|$)/ },
  { domain: "etickets", pattern: /^\/2\/etickets(?:\/|$)/ },
  { domain: "account", pattern: /^\/(?:1|2)\/accounts(?:\/|$)/ },
  { domain: "profile", pattern: /^\/2\/profile(?:\/|$)/ },
  {
    domain: "core",
    pattern:
      /^\/(?:1\/(?:actions|async\/tasks|countries|languages|products|timezones|app-information|my_ksuite)|2\/events)(?:\/|$)/,
  },
];

const missingSchemaAliases: Record<string, JsonObject> = {
  Error: {
    type: "object",
    additionalProperties: true,
    properties: {
      result: { type: "string" },
      error: { type: "object", additionalProperties: true },
      data: {},
    },
  },
  AppError: {
    type: "object",
    additionalProperties: true,
    properties: {
      id: { type: "string" },
      message: { type: "string" },
      detailed_error: { type: "string" },
      request_id: { type: "string" },
      status_code: { type: "integer" },
    },
  },
  ApiError: {
    type: "object",
    additionalProperties: true,
    properties: {
      result: { type: "string" },
      error: { type: "object", additionalProperties: true },
      data: {},
    },
  },
  SuccessResponse: {
    type: "object",
    additionalProperties: true,
    properties: {
      result: { type: "string" },
      data: {},
    },
  },
  TotalSuccessResponse: {
    type: "object",
    additionalProperties: true,
    properties: {
      result: { type: "string" },
      data: {},
      total: { type: "integer" },
    },
  },
  PaginatedSuccessResponse: {
    type: "object",
    additionalProperties: true,
    properties: {
      result: { type: "string" },
      data: {},
      pages: { type: "integer" },
      page: { type: "integer" },
      items_per_page: { type: "integer" },
    },
  },
};

export function normalizeOpenApiSpec(input: JsonObject): NormalizeOpenApiResult {
  const spec = cloneJsonObject(input);
  const report: NormalizationReport = {
    operationCount: 0,
    domainCounts: {},
    repairs: [],
    warnings: [],
  };

  ensureQuotedComponentAliases(spec, report);
  ensureMissingSchemas(spec, report);
  normalizeCompositions(spec, report);
  normalizeMediaTypes(spec, report);
  normalizeSchemaProperties(spec, report);
  normalizeOperations(spec, report);
  validateLocalRefs(spec, report);

  if (report.warnings.length > 0) {
    const details = report.warnings.map((warning) => warning.detail).join("; ");
    throw new Error(`OpenAPI normalization failed: ${details}`);
  }

  return { spec, report };
}

function ensureQuotedComponentAliases(spec: JsonObject, report: NormalizationReport): void {
  const components = asOptionalObject(spec.components);
  if (!components) {
    return;
  }

  for (const [componentKind, componentValue] of Object.entries(components)) {
    const componentMap = asOptionalObject(componentValue);
    if (!componentMap) {
      continue;
    }

    for (const [key, value] of Object.entries(componentMap)) {
      if (!isWrappedInSingleQuotes(key)) {
        continue;
      }
      const unquoted = key.slice(1, -1);
      if (Object.hasOwn(componentMap, unquoted)) {
        continue;
      }
      componentMap[unquoted] = cloneJsonValue(value);
      report.repairs.push({
        kind: "component.quotedAlias",
        detail: `Added #/components/${componentKind}/${unquoted} alias for quoted key ${key}`,
      });
    }
  }
}

function normalizeCompositions(value: unknown, report: NormalizationReport, path: string[] = []): void {
  if (!isJsonObject(value)) {
    return;
  }

  for (const key of ["allOf", "oneOf", "anyOf"]) {
    const composition = value[key];
    if (composition === undefined || Array.isArray(composition)) {
      continue;
    }
    if (!isJsonObject(composition)) {
      value[key] = [];
      report.repairs.push({ kind: "composition.invalid", detail: `Replaced non-object ${path.concat(key).join("/")} with an empty array` });
      continue;
    }
    value[key] = objectCompositionToArray(composition);
    report.repairs.push({ kind: "composition.objectToArray", detail: `Converted object-shaped ${path.concat(key).join("/")} to an array` });
  }

  for (const [key, child] of Object.entries(value)) {
    if (Array.isArray(child)) {
      child.forEach((item, index) => normalizeCompositions(item, report, path.concat(key, String(index))));
    } else {
      normalizeCompositions(child, report, path.concat(key));
    }
  }
}

function objectCompositionToArray(composition: JsonObject): JsonObject[] {
  const numericEntries = Object.entries(composition)
    .filter(([key]) => /^\d+$/.test(key))
    .sort(([left], [right]) => Number(left) - Number(right))
    .map(([, value]) => (isJsonObject(value) ? value : {}));
  const remainingEntries = Object.entries(composition).filter(([key]) => !/^\d+$/.test(key));
  if (remainingEntries.length === 0) {
    return numericEntries;
  }
  return [...numericEntries, Object.fromEntries(remainingEntries)];
}

function normalizeMediaTypes(value: unknown, report: NormalizationReport, path: string[] = []): void {
  if (!isJsonObject(value)) {
    return;
  }

  const content = asOptionalObject(value.content);
  if (content && !path.includes("schema") && !path.includes("properties")) {
    for (const [contentType, mediaValue] of Object.entries(content)) {
      if (!isJsonObject(mediaValue)) {
        content[contentType] = { schema: {} };
        report.repairs.push({
          kind: "mediaType.invalid",
          detail: `Replaced invalid media type object ${path.concat("content", contentType).join("/")} with a permissive schema`,
        });
        continue;
      }
      if ("schema" in mediaValue && !isJsonObject(mediaValue.schema) && typeof mediaValue.schema !== "boolean") {
        mediaValue.schema = {};
        report.repairs.push({
          kind: "mediaType.schema",
          detail: `Replaced invalid media schema ${path.concat("content", contentType, "schema").join("/")} with a permissive schema`,
        });
      }
    }
  }

  for (const [key, child] of Object.entries(value)) {
    if (Array.isArray(child)) {
      child.forEach((item, index) => normalizeMediaTypes(item, report, path.concat(key, String(index))));
    } else {
      normalizeMediaTypes(child, report, path.concat(key));
    }
  }
}

function normalizeSchemaProperties(value: unknown, report: NormalizationReport, path: string[] = []): void {
  if (!isJsonObject(value)) {
    return;
  }

  const properties = asOptionalObject(value.properties);
  if (properties) {
    for (const [propertyName, propertyValue] of Object.entries(properties)) {
      if (isJsonObject(propertyValue) || typeof propertyValue === "boolean") {
        continue;
      }
      properties[propertyName] = { "x-infomaniak-original-property-value": propertyValue };
      report.repairs.push({
        kind: "schema.property",
        detail: `Replaced invalid schema property ${path.concat("properties", propertyName).join("/")} with a permissive schema`,
      });
    }
  }

  if ("items" in value && !isJsonObject(value.items) && typeof value.items !== "boolean" && !Array.isArray(value.items)) {
    value.items = {};
    report.repairs.push({
      kind: "schema.items",
      detail: `Replaced invalid items schema ${path.concat("items").join("/")} with a permissive schema`,
    });
  }

  for (const [key, child] of Object.entries(value)) {
    if (Array.isArray(child)) {
      child.forEach((item, index) => normalizeSchemaProperties(item, report, path.concat(key, String(index))));
    } else {
      normalizeSchemaProperties(child, report, path.concat(key));
    }
  }
}

function normalizeOperations(spec: JsonObject, report: NormalizationReport): void {
  const paths = asObject(spec.paths, "paths");
  const seenOperationIds = new Map<string, string>();

  for (const [path, pathItemValue] of Object.entries(paths)) {
    const pathItem = asObject(pathItemValue, `paths.${path}`);
    for (const [method, operationValue] of Object.entries(pathItem)) {
      if (!isHttpMethod(method)) {
        continue;
      }

      const operation = asObject(operationValue, `${method.toUpperCase()} ${path}`);
      const domain = assignDomain(path);
      if (!domain) {
        report.warnings.push({ kind: "domain", path, method, detail: `No domain rule matched ${method.toUpperCase()} ${path}` });
        continue;
      }

      operation["x-infomaniak-domain"] = domain;
      operation["x-infomaniak-mutating"] = method !== "get";
      operation["x-infomaniak-content-types"] = collectContentTypes(operation);
      report.domainCounts[domain] = (report.domainCounts[domain] ?? 0) + 1;
      report.operationCount += 1;

      normalizeTags(operation, path, method, report);
      normalizeOperationId(operation, path, method, seenOperationIds, report);
    }
  }
}

function normalizeTags(operation: JsonObject, path: string, method: string, report: NormalizationReport): void {
  const tags = operation.tags;
  if (Array.isArray(tags) && tags.every((tag) => typeof tag === "string") && tags.length > 0) {
    return;
  }

  operation["x-infomaniak-original-tags"] = tags;
  operation.tags = ["untagged"];
  report.repairs.push({
    kind: "tags",
    path,
    method,
    detail: `Normalized malformed or empty tags for ${method.toUpperCase()} ${path}`,
  });
}

function normalizeOperationId(
  operation: JsonObject,
  path: string,
  method: string,
  seenOperationIds: Map<string, string>,
  report: NormalizationReport,
): void {
  const original = typeof operation.operationId === "string" && operation.operationId.trim() ? operation.operationId.trim() : undefined;
  const source = `${method.toUpperCase()} ${path}`;
  let next = original ?? syntheticOperationId(method, path);

  if (!original) {
    operation["x-infomaniak-original-operationId"] = null;
    report.repairs.push({ kind: "operationId.missing", path, method, detail: `Generated operationId ${next} for ${source}` });
  }

  const firstSeen = seenOperationIds.get(next);
  if (firstSeen) {
    operation["x-infomaniak-original-operationId"] = original ?? null;
    next = `${sanitizeIdentifier(next)}_${syntheticOperationId(method, path)}`;
    report.repairs.push({
      kind: "operationId.duplicate",
      path,
      method,
      detail: `Replaced duplicate operationId from ${source}; first seen at ${firstSeen}; new id ${next}`,
    });
  }

  operation.operationId = next;
  seenOperationIds.set(next, source);
}

function ensureMissingSchemas(spec: JsonObject, report: NormalizationReport): void {
  const components = ensureObject(spec, "components");
  const schemas = ensureObject(components, "schemas");
  const localRefs = collectLocalSchemaRefs(spec);

  for (const refName of localRefs) {
    if (Object.hasOwn(schemas, refName)) {
      continue;
    }

    const alias = missingSchemaAliases[refName];
    if (!alias) {
      report.warnings.push({ kind: "schemaRef", detail: `Missing schema #/components/schemas/${refName}` });
      continue;
    }

    schemas[refName] = cloneJsonObject(alias);
    report.repairs.push({ kind: "schemaRef.alias", detail: `Added compatibility schema for #/components/schemas/${refName}` });
  }
}

function validateLocalRefs(spec: JsonObject, report: NormalizationReport): void {
  const schemas = asObject(asObject(spec.components, "components").schemas, "components.schemas");
  for (const refName of collectLocalSchemaRefs(spec)) {
    if (!Object.hasOwn(schemas, refName)) {
      report.warnings.push({ kind: "schemaRef", detail: `Unresolved schema ref #/components/schemas/${refName}` });
    }
  }
}

function collectContentTypes(operation: JsonObject): JsonObject {
  return {
    request: Object.keys(asOptionalObject(asOptionalObject(operation.requestBody)?.content) ?? {}).sort(),
    response: collectResponseContentTypes(operation),
  };
}

function collectResponseContentTypes(operation: JsonObject): string[] {
  const responses = asOptionalObject(operation.responses);
  if (!responses) {
    return [];
  }

  const contentTypes = new Set<string>();
  for (const response of Object.values(responses)) {
    const content = asOptionalObject(asOptionalObject(response)?.content);
    if (!content) {
      continue;
    }
    for (const contentType of Object.keys(content)) {
      contentTypes.add(contentType);
    }
  }
  return [...contentTypes].sort();
}

function collectLocalSchemaRefs(value: unknown, refs = new Set<string>()): Set<string> {
  if (!isJsonObject(value)) {
    return refs;
  }

  const ref = value.$ref;
  if (typeof ref === "string" && ref.startsWith("#/components/schemas/")) {
    refs.add(decodeURIComponent(ref.slice("#/components/schemas/".length)));
  }

  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) {
        collectLocalSchemaRefs(item, refs);
      }
    } else {
      collectLocalSchemaRefs(child, refs);
    }
  }

  return refs;
}

function assignDomain(path: string): string | undefined {
  return domainRules.find((rule) => rule.pattern.test(path))?.domain;
}

function syntheticOperationId(method: string, path: string): string {
  return sanitizeIdentifier(`${method}_${path}`);
}

function sanitizeIdentifier(value: string): string {
  const normalized = value
    .replace(/[{}]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .replace(/_+/g, "_");
  return normalized || "operation";
}

function isHttpMethod(method: string): method is HttpMethod {
  return HTTP_METHODS.includes(method as HttpMethod);
}

function cloneJsonObject(value: JsonObject): JsonObject {
  return JSON.parse(JSON.stringify(value)) as JsonObject;
}

function cloneJsonValue(value: unknown): unknown {
  return JSON.parse(JSON.stringify(value)) as unknown;
}

function isWrappedInSingleQuotes(value: string): boolean {
  return value.length >= 2 && value.startsWith("'") && value.endsWith("'");
}

function ensureObject(parent: JsonObject, key: string): JsonObject {
  const value = parent[key];
  if (isJsonObject(value)) {
    return value;
  }
  const next: JsonObject = {};
  parent[key] = next;
  return next;
}

function asObject(value: unknown, label: string): JsonObject {
  if (!isJsonObject(value)) {
    throw new Error(`Expected ${label} to be an object`);
  }
  return value;
}

function asOptionalObject(value: unknown): JsonObject | undefined {
  return isJsonObject(value) ? value : undefined;
}

function isJsonObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
