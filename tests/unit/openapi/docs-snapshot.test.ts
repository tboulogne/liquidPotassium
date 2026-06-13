import { readFile } from "node:fs/promises";

import { describe, expect, it } from "vitest";

import {
  buildDocsOperationUrl,
  buildDocsSnapshot,
  checkDocsSnapshot,
  defaultDeveloperPortalBaseUrl,
  defaultDocsSeedUrl,
  extractDataPageJson,
  extractDocsOperation,
  flattenDocsNavigation,
  stringifyStableJson,
} from "../../../src/openapi/docs-snapshot.js";

describe("docs snapshot utilities", () => {
  it("extracts and decodes Developer Portal data-page JSON", async () => {
    const html = await readFixture("newsletter-show.html");
    const dataPage = extractDataPageJson(html);
    const operation = extractDocsOperation(html, "https://developer.infomaniak.com/docs/api/get/1/newsletters/%7Bdomain%7D");

    expect(dataPage).toMatchObject({ component: "Path" });
    expect(operation).toMatchObject({
      key: "get /1/newsletters/{domain}",
      method: "get",
      path: "/1/newsletters/{domain}",
      summary: "Display Domain",
      operationId: "NewsletterShowDomain",
      categoryPath: ["Newsletter", "Domains"],
      staff: false,
    });
    expect(operation.meta.parameters[0]).toMatchObject({
      description: "Unique identifier & owner",
      schema: { type: "integer", example: 76335 },
    });
    expect(operation.meta.xPaginable).toBe(false);
  });

  it("flattens nested docs navigation and builds encoded docs URLs", async () => {
    const html = await readFixture("newsletter-show.html");
    const dataPage = extractDataPageJson(html) as { props: { navigation: unknown } };
    const items = flattenDocsNavigation(dataPage.props.navigation);

    expect(items).toEqual([
      {
        method: "get",
        endpoint: "/1/newsletters/{domain}",
        summary: "Display Domain",
        categoryPath: ["Newsletter"],
        staff: false,
        isBeta: false,
      },
      {
        method: "get",
        endpoint: "/1/newsletters/{domain}/campaigns",
        summary: "List all campaigns",
        categoryPath: ["Newsletter", "Campaigns"],
        staff: false,
        isBeta: true,
      },
    ]);
    expect(buildDocsOperationUrl("get", "/1/newsletters/{domain}/campaigns")).toBe(
      "https://developer.infomaniak.com/docs/api/get/1/newsletters/%7Bdomain%7D/campaigns",
    );
  });

  it("builds a deterministic snapshot using a caller-provided fetch callback", async () => {
    const seedHtml = await readFixture("newsletter-show.html");
    const campaignHtml = operationHtml({
      method: "get",
      path: "https://api.infomaniak.com/1/newsletters/{domain}/campaigns",
      operationId: "NewsletterListCampaigns",
      summary: "List all campaigns",
      category: "Newsletter",
      subCategory: "Campaigns",
    });
    const snapshot = await buildDocsSnapshot(
      seedHtml,
      async (_item, docsUrl) => (docsUrl.endsWith("/campaigns") ? campaignHtml : seedHtml),
      { generatedAt: "fixture", concurrency: 2 },
    );

    expect(snapshot).toMatchObject({
      generatedAt: "fixture",
      operationCount: 2,
      operations: [
        { key: "get /1/newsletters/{domain}", operationId: "NewsletterShowDomain" },
        { key: "get /1/newsletters/{domain}/campaigns", operationId: "NewsletterListCampaigns" },
      ],
    });
    expect(snapshot.operations[1]?.categoryPath).toEqual(["Newsletter", "Campaigns"]);

    const defaultConcurrencySnapshot = await buildDocsSnapshot(seedHtml, async () => seedHtml);
    expect(defaultConcurrencySnapshot.operationCount).toBe(2);
  });

  it("builds an empty defaulted snapshot from empty navigation", async () => {
    const snapshot = await buildDocsSnapshot(
      pageHtml({
        operation: operationPayload({
          method: "get",
          path: "/empty",
          operationId: "",
          summary: undefined,
        }),
        navigation: {},
      }),
      async () => {
        throw new Error("No docs pages should be fetched for empty navigation.");
      },
      { concurrency: 0 },
    );

    expect(snapshot).toEqual({
      generatedAt: "manual",
      source: {
        seedUrl: defaultDocsSeedUrl,
        developerPortalBaseUrl: defaultDeveloperPortalBaseUrl,
        apiBaseUrl: "https://api.infomaniak.com",
      },
      operationCount: 0,
      operations: [],
    });
  });

  it("handles fallback navigation labels, invalid navigation items, absolute paths, and full docs metadata", () => {
    const items = flattenDocsNavigation({
      fallbackRoot: {
        items: [
          "ignored",
          { method: "nope", endpoint: "/ignored" },
          { method: 123, endpoint: "/ignored" },
          { method: "get" },
          { method: "post", endpoint: "/valid", summary: 42, staff: true, is_beta: true },
        ],
        sub_categories: {
          fallbackChild: {
            items: undefined,
          },
        },
      },
    });
    const operation = extractDocsOperation(
      pageHtml({
        operation: operationPayload({
          method: "post",
          path: "https://your-team.kchat.infomaniak.com/api/v4/channels/{channel_id}",
          operationId: "",
          summary: undefined,
          meta: {
            parameters: "not-array",
            responses: undefined,
            "x-version": 1,
            "x-visible": true,
            "x-badges": ["beta"],
            "x-auth-user": false,
            "x-codeSamples": [{ lang: "curl" }],
            "x-is-beta": true,
            "x-is-public-cloud": false,
            "x-sortable": true,
            "x-capabilities": ["read"],
          },
        }),
        navigation: {},
      }),
      "https://developer.infomaniak.com/docs/api/post/valid",
      items[0],
    );

    expect(items).toEqual([
      {
        method: "post",
        endpoint: "/valid",
        summary: "",
        categoryPath: ["fallbackRoot"],
        staff: true,
        isBeta: true,
      },
    ]);
    expect(operation).toMatchObject({
      key: "post /api/v4/channels/{channel_id}",
      path: "/api/v4/channels/{channel_id}",
      operationId: null,
      categoryPath: ["fallbackRoot"],
      staff: true,
      meta: {
        parameters: [],
        responses: null,
        xVersion: 1,
        xVisible: true,
        xBadges: ["beta"],
        xAuthUser: false,
        xCodeSamples: [{ lang: "curl" }],
        xIsBeta: true,
        xIsPublicCloud: false,
        xSortable: true,
        xCapabilities: ["read"],
      },
    });
    expect(
      extractDocsOperation(
        pageHtml({
          operation: operationPayload({
            method: "get",
            path: "/absolute",
            operationId: "Absolute",
            summary: "Absolute",
          }),
          navigation: {},
        }),
        "https://developer.infomaniak.com/docs/api/get/absolute",
      ).path,
    ).toBe("/absolute");
  });

  it("reports matches, misses, operation ID drift, duplicates, and malformed snapshot metadata", async () => {
    const html = await readFixture("newsletter-show.html");
    const operation = extractDocsOperation(html, "https://developer.infomaniak.com/docs/api/get/1/newsletters/%7Bdomain%7D");
    const report = checkDocsSnapshot(
      {
        generatedAt: "",
        operationCount: 1,
        operations: [
          operation,
          {
            ...operation,
            operationId: "DocsOnlyOperation",
          },
          {
            ...operation,
            key: "get /docs-only",
            path: "/docs-only",
            operationId: "DocsOnlyOperation",
          },
        ],
      },
      {
        paths: {
          "/1/newsletters/{domain}": {
            get: { operationId: "NormalizedOperation" },
          },
          "/spec-only": {
            get: { operationId: "SpecOnlyOperation" },
          },
          "/ignored": {
            parameters: [],
          },
        },
      },
    );

    expect(report).toEqual({
      operationCount: 3,
      normalizedOperationCount: 2,
      matchedCount: 1,
      duplicateDocs: ["get /1/newsletters/{domain}"],
      unmatchedDocs: ["get /docs-only"],
      unmatchedSpec: ["get /spec-only"],
      operationIdMismatches: [
        {
          key: "get /1/newsletters/{domain}",
          docsOperationId: "NewsletterShowDomain",
          normalizedOperationId: "NormalizedOperation",
        },
      ],
      errors: [
        "Docs snapshot generatedAt must be a non-empty string.",
        "Docs snapshot source must be an object.",
        "Docs snapshot operationCount must match operations.length.",
      ],
    });
    expect(
      checkDocsSnapshot(
        {
          generatedAt: "manual",
          source: {},
          operationCount: "3",
          operations: [
            {
              ...operation,
              operationId: null,
              categoryPath: "not-array",
            },
          ],
        },
        { paths: {} },
      ).errors,
    ).toEqual(["Docs snapshot operationCount must be a number."]);
    expect(
      checkDocsSnapshot(
        { generatedAt: "manual", source: {}, operationCount: 1, operations: [operation] },
        { paths: { "/1/newsletters/{domain}": { get: { operationId: "NewsletterShowDomain" } } } },
      ).operationIdMismatches,
    ).toEqual([]);
    expect(stringifyStableJson({ ok: true })).toBe('{\n  "ok": true\n}\n');
  });

  it("throws clear errors for missing data-page and malformed snapshots", () => {
    expect(() => extractDataPageJson("<html></html>")).toThrow("data-page");
    expect(() => checkDocsSnapshot({ generatedAt: "manual", operationCount: 0 }, { paths: {} })).toThrow("operations must be an array");
    expect(() =>
      extractDocsOperation(
        pageHtml({ operation: operationPayload({ method: "wat", path: "/bad", operationId: "Bad", summary: "Bad" }), navigation: {} }),
        "https://developer.infomaniak.com/docs/api/wat/bad",
      ),
    ).toThrow("HTTP method");
    expect(() =>
      extractDocsOperation(
        pageHtml({ operation: operationPayload({ method: "get", path: "bad", operationId: "Bad", summary: "Bad" }), navigation: {} }),
        "https://developer.infomaniak.com/docs/api/get/bad",
      ),
    ).toThrow("not an API URL");
    expect(() =>
      extractDocsOperation(
        pageHtml({ operation: null, navigation: {} }),
        "https://developer.infomaniak.com/docs/api/get/bad",
      ),
    ).toThrow("data-page.props.operation");
    expect(() =>
      checkDocsSnapshot(
        {
          generatedAt: "manual",
          source: {},
          operationCount: 1,
          operations: [{ key: "", method: "get", path: "/bad", docsUrl: "docs", meta: {} }],
        },
        { paths: {} },
      ),
    ).toThrow("operations.0.key");
    expect(() =>
      checkDocsSnapshot(
        {
          generatedAt: "manual",
          source: {},
          operationCount: 1,
          operations: [{ key: "get /bad", method: null, path: "/bad", docsUrl: "docs", meta: {} }],
        },
        { paths: {} },
      ),
    ).toThrow("operations.0.method");
  });
});

async function readFixture(name: string): Promise<string> {
  return readFile(new URL(`../../fixtures/docs/${name}`, import.meta.url), "utf8");
}

function operationHtml(options: {
  method: string;
  path: string;
  operationId: string;
  summary: string;
  category: string;
  subCategory: string;
}): string {
  const page = { component: "Path", props: { operation: operationPayload(options) } };
  return `<div id="app" data-page="${escapeDataPage(JSON.stringify(page))}"></div>`;
}

function pageHtml(props: unknown): string {
  const page = { component: "Path", props };
  return `<div id="app" data-page="${escapeDataPage(JSON.stringify(page))}"></div>`;
}

function operationPayload(options: {
  method: string;
  path: string;
  operationId: string;
  summary: string | undefined;
  category?: string;
  subCategory?: string;
  meta?: Record<string, unknown>;
}) {
  return {
    method: options.method,
    path: options.path,
    meta: {
      operationId: options.operationId,
      summary: options.summary,
      parameters: [],
      pathParameters: [],
      queryParameters: [],
      headerParameters: [],
      responses: {},
      "x-category": options.category,
      "x-subCategory": options.subCategory,
      ...options.meta,
    },
  };
}

function escapeDataPage(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}
