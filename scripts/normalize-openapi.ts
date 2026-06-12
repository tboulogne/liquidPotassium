import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { normalizeOpenApiSpec, type JsonObject } from "../src/openapi/normalize.js";

const inputPath = resolve("spec/infomaniak.raw.json");
const specOutputPath = resolve("spec/infomaniak.normalized.json");
const reportOutputPath = resolve("spec/normalization-report.json");

const raw = JSON.parse(await readFile(inputPath, "utf8")) as JsonObject;
const { spec, report } = normalizeOpenApiSpec(raw);

await mkdir(dirname(specOutputPath), { recursive: true });
await writeFile(specOutputPath, `${JSON.stringify(spec, null, 2)}\n`);
await writeFile(reportOutputPath, `${JSON.stringify(report, null, 2)}\n`);

console.log(
  `Normalized ${report.operationCount} operations across ${Object.keys(report.domainCounts).length} domains with ${report.repairs.length} repairs.`,
);

