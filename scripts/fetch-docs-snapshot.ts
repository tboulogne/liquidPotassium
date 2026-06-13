import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import {
  buildDocsSnapshot,
  defaultDocsSeedUrl,
  stringifyStableJson,
  type DocsNavigationItem,
} from "../src/openapi/docs-snapshot.js";

const outputPath = resolve("spec/infomaniak.docs-snapshot.json");

const seedHtml = await fetchText(defaultDocsSeedUrl);
const snapshot = await buildDocsSnapshot(
  seedHtml,
  async (_item: DocsNavigationItem, docsUrl: string) => fetchText(docsUrl),
  { generatedAt: "manual" },
);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, stringifyStableJson(snapshot));

console.log(`Fetched ${snapshot.operationCount} Infomaniak docs operations into ${outputPath}.`);

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response.text();
}
