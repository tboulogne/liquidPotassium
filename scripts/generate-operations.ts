import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import {
  buildOperationCatalog,
  renderCatalogSources,
  renderOperationWrapperSources,
} from "../src/openapi/operation-generator.js";
import type { JsonObject } from "../src/openapi/normalize.js";

const spec = JSON.parse(await readFile("spec/infomaniak.normalized.json", "utf8")) as JsonObject;
const operations = buildOperationCatalog(spec);
const generatedRoot = resolve("src/generated");

await rm(resolve(generatedRoot, "catalog"), { recursive: true, force: true });
await rm(resolve(generatedRoot, "operations"), { recursive: true, force: true });

for (const [relativePath, source] of [...renderCatalogSources(operations), ...renderOperationWrapperSources(operations)]) {
  const outputPath = resolve(generatedRoot, relativePath);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, source);
}

console.log(`Generated operation catalog and wrappers for ${operations.length} operations.`);
