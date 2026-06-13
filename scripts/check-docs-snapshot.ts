import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { checkDocsSnapshot, stringifyStableJson } from "../src/openapi/docs-snapshot.js";

const snapshotPath = resolve("spec/infomaniak.docs-snapshot.json");
const normalizedSpecPath = resolve("spec/infomaniak.normalized.json");
const reportPath = resolve("spec/docs-enrichment-report.json");

const snapshot = JSON.parse(await readFile(snapshotPath, "utf8")) as unknown;
const normalizedSpec = JSON.parse(await readFile(normalizedSpecPath, "utf8")) as unknown;
const report = checkDocsSnapshot(snapshot, normalizedSpec);

await mkdir(dirname(reportPath), { recursive: true });
await writeFile(reportPath, stringifyStableJson(report));

if (report.errors.length > 0 || report.duplicateDocs.length > 0) {
  throw new Error(`Docs snapshot check failed. See ${reportPath}.`);
}

console.log(
  `Checked ${report.operationCount} docs operations: ${report.matchedCount} matched, ` +
    `${report.unmatchedDocs.length} docs-only, ${report.unmatchedSpec.length} spec-only.`,
);
