import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { buildOperationCatalog, renderGeneratedEndpointTests } from "../src/openapi/operation-generator.js";
import type { JsonObject } from "../src/openapi/normalize.js";

const spec = JSON.parse(await readFile("spec/infomaniak.normalized.json", "utf8")) as JsonObject;
const operations = buildOperationCatalog(spec);
const testsRoot = resolve("tests/generated");

await rm(testsRoot, { recursive: true, force: true });

for (const [relativePath, source] of renderGeneratedEndpointTests(operations)) {
  const outputPath = resolve(testsRoot, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, source);
}

console.log(`Generated endpoint tests for ${operations.length} operations.`);
