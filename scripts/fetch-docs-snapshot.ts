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
  { generatedAt: "manual", concurrency: 2 },
);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, stringifyStableJson(snapshot));

console.log(`Fetched ${snapshot.operationCount} Infomaniak docs operations into ${outputPath}.`);

async function fetchText(url: string): Promise<string> {
  const maxAttempts = 5;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const response = await fetch(url, { headers: { "user-agent": "liquid-potassium-docs-fetch/0.1" } });
    if (response.ok) {
      return response.text();
    }
    if (!shouldRetry(response.status) || attempt === maxAttempts) {
      throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
    }
    await sleep(retryDelayMs(response, attempt));
  }
  throw new Error(`Failed to fetch ${url}.`);
}

function shouldRetry(status: number): boolean {
  return status === 429 || status >= 500;
}

function retryDelayMs(response: Response, attempt: number): number {
  const retryAfter = response.headers.get("retry-after");
  const retryAfterSeconds = retryAfter ? Number(retryAfter) : NaN;
  if (Number.isFinite(retryAfterSeconds) && retryAfterSeconds > 0) {
    return retryAfterSeconds * 1000;
  }
  return attempt * 2000;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
