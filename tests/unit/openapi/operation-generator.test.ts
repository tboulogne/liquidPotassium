import { describe, expect, it } from "vitest";

import {
  buildDomainMetadata,
  buildOperationCatalog,
  renderCatalogSources,
  renderGeneratedEndpointTests,
  renderOperationWrapperSources,
  type OperationMetadata,
} from "../../../src/openapi/operation-generator.js";
import type { DocsSnapshot } from "../../../src/openapi/docs-snapshot.js";
import type { JsonObject } from "../../../src/openapi/normalize.js";

describe("operation generator", () => {
  it("builds operation metadata from normalized OpenAPI operations", () => {
    const operations = buildOperationCatalog(fixtureSpec());
    const getDriveFile = operations.find((operation) => operation.operationId === "get-drive-file");
    const duplicate = operations.find((operation) => operation.operationId === "same_name");
    const symbolOnly = operations.find((operation) => operation.operationId === "!!!");

    expect(operations).toHaveLength(5);
    expect(getDriveFile).toMatchObject({
      operationId: "get-drive-file",
      functionName: "getDriveFile",
      originalOperationId: "legacyGetDriveFile",
      domain: "kdrive",
      method: "GET",
      path: "/2/drive/{drive_id}/files/{file_id}",
      pathParameters: [
        { name: "drive_id", in: "path", required: true },
        { name: "file_id", in: "path", required: true },
      ],
      queryParameters: [{ name: "with", in: "query", required: false }],
      requestContentTypes: [],
      responseContentTypes: ["application/json"],
      auth: ["bearerAuth"],
    });
    expect(duplicate?.functionName).toBe("sameName2");
    expect(symbolOnly?.functionName).toBe("operation");
    expect(operations.find((operation) => operation.operationId === "123bad")?.functionName).toBe("operation123bad");
    expect(operations.every((operation) => operation.docs === null)).toBe(true);
  });

  it("enriches generated operation metadata from a docs snapshot", () => {
    const operations = buildOperationCatalog(fixtureSpec(), fixtureDocsSnapshot());
    const getDriveFile = operations.find((operation) => operation.operationId === "get-drive-file");
    const createDriveFile = operations.find((operation) => operation.operationId === "123bad");
    const duplicate = operations.find((operation) => operation.operationId === "same-name");
    const missingDocs = operations.find((operation) => operation.operationId === "same_name");

    expect(getDriveFile?.docs).toEqual({
      url: "https://developer.infomaniak.com/docs/api/get/2/drive/%7Bdrive_id%7D/files/%7Bfile_id%7D",
      operationId: "Docs/GetDriveFile",
      summary: "Docs get file",
      categoryPath: ["kDrive", "Files"],
      staff: true,
      beta: true,
      publicCloud: false,
      paginable: true,
      sortable: false,
      authUser: true,
      version: 2,
      capabilities: [{ name: "paginable", description: "Page results", values: ["page"] }],
      parameters: [
        {
          name: "drive_id",
          in: "path",
          required: true,
          description: "Drive identifier",
          style: "simple",
          explode: true,
          schemaType: "integer",
          schema: { example: 1, type: "integer" },
          enumValues: [],
          values: [1, 2],
          examples: [1],
        },
        {
          name: "with",
          in: "query",
          required: false,
          description: "Relations to include",
          style: "form",
          explode: null,
          schemaType: "null | string",
          schema: { enum: ["permissions", "teams"], example: "permissions", type: ["string", "null", null] },
          enumValues: ["permissions", "teams"],
          values: ["permissions"],
          examples: ["parameter-example", "permissions", "named-example", "raw-example"],
        },
        {
          name: "mode",
          in: "query",
          required: false,
          description: "",
          style: null,
          explode: null,
          schemaType: "ModeRef",
          schema: { "x-ref": "ModeRef", unsupported: null },
          enumValues: [],
          values: [],
          examples: ["array-example"],
        },
        {
          name: "plain",
          in: "query",
          required: false,
          description: "",
          style: null,
          explode: null,
          schemaType: null,
          schema: null,
          enumValues: [],
          values: [],
          examples: [],
        },
        {
          name: "empty",
          in: "query",
          required: false,
          description: "",
          style: null,
          explode: null,
          schemaType: null,
          schema: {},
          enumValues: [],
          values: [],
          examples: [],
        },
        {
          name: "unknown_type",
          in: "query",
          required: false,
          description: "",
          style: null,
          explode: null,
          schemaType: null,
          schema: { type: [null, 1] },
          enumValues: [],
          values: [],
          examples: [],
        },
      ],
      responseStatuses: ["2", "10", "200"],
    });
    expect(createDriveFile?.docs).toMatchObject({
      url: "https://developer.infomaniak.com/docs/api/post/2/drive/%7Bdrive_id%7D/files/%7Bfile_id%7D",
      operationId: null,
      version: "beta",
      paginable: null,
      sortable: null,
      authUser: null,
      parameters: [],
      responseStatuses: [],
    });
    expect(duplicate?.docs).toMatchObject({
      operationId: "Docs/SameName",
      publicCloud: true,
    });
    expect(missingDocs?.docs).toBeNull();
  });

  it("builds domain metadata and generated source files", () => {
    const operations = buildOperationCatalog(fixtureSpec());
    const domains = buildDomainMetadata(operations);
    const catalogSources = renderCatalogSources(operations);
    const wrapperSources = renderOperationWrapperSources(operations);
    const endpointTests = renderGeneratedEndpointTests(operations);

    expect(domains).toEqual([{ domain: "kdrive", operationCount: 5 }]);
    expect(catalogSources.get("catalog/operations.ts")).toContain("Generated by npm run generate");
    expect(catalogSources.get("catalog/domains/kdrive.ts")).toContain("getDriveFile");
    expect(catalogSources.get("catalog/types.ts")).toContain("interface OperationDocsMetadata");
    expect(wrapperSources.get("operations/kdrive.ts")).toContain("createKdriveOperations");
    expect(wrapperSources.get("operations/index.ts")).toContain("createDomainOperations");
    expect(endpointTests.get("kdrive.generated.test.ts")).toContain("matches normalized spec metadata, docs enrichment, and wrapper dispatch");
  });

  it("fails when required normalized metadata is missing or malformed", () => {
    expect(() => buildOperationCatalog({ paths: [] })).toThrow(/Expected paths to be an object/);
    expect(() =>
      buildOperationCatalog({
        paths: {
          "/2/drive": {
            get: {
              operationId: "missingDomain",
              "x-infomaniak-content-types": { request: [], response: [] },
            },
          },
        },
      }),
    ).toThrow(/Missing domain/);
    expect(() =>
      buildOperationCatalog({
        paths: {
          "/2/drive": {
            get: {
              "x-infomaniak-domain": "kdrive",
              "x-infomaniak-content-types": { request: [], response: [] },
            },
          },
        },
      }),
    ).toThrow(/Missing operationId/);
    expect(() =>
      buildOperationCatalog({
        paths: {
          "/2/drive": {
            get: {
              operationId: "missingContentTypes",
              "x-infomaniak-domain": "kdrive",
            },
          },
        },
      }),
    ).toThrow(/Expected x-infomaniak-content-types to be an object/);
  });
});

function fixtureSpec(): JsonObject {
  return {
    paths: {
      "/2/drive/{drive_id}/files/{file_id}": {
        parameters: [{ name: "drive_id", in: "path", required: true }],
        get: {
          operationId: "get-drive-file",
          "x-infomaniak-original-operationId": "legacyGetDriveFile",
          "x-infomaniak-domain": "kdrive",
          "x-infomaniak-mutating": false,
          "x-infomaniak-content-types": { request: [], response: ["application/json"] },
          summary: "Get a file",
          description: "Fetch file metadata.",
          tags: ["Drive"],
          deprecated: false,
          security: ["ignored", { bearerAuth: [] }],
          parameters: [
            { name: "file_id", in: "path", required: true },
            { name: "with", in: "query" },
            { name: "ignored", in: "invalid" },
            { $ref: "#/components/parameters/Ignored" },
          ],
          responses: { 200: { description: "ok" } },
        },
        post: {
          operationId: "123bad",
          "x-infomaniak-domain": "kdrive",
          "x-infomaniak-mutating": true,
          "x-infomaniak-content-types": { request: ["multipart/form-data"], response: [] },
          tags: [1, "Drive"],
          parameters: [{ name: "content-type", in: "header", required: true }],
          requestBody: { content: { "multipart/form-data": {} } },
          responses: { 204: { description: "ok" } },
        },
      },
      "/2/drive/duplicate-one": {
        get: {
          operationId: "same-name",
          "x-infomaniak-domain": "kdrive",
          "x-infomaniak-mutating": false,
          "x-infomaniak-content-types": { request: [], response: [] },
          responses: { 200: { description: "ok" } },
        },
      },
      "/2/drive/duplicate-two": {
        get: {
          operationId: "same_name",
          "x-infomaniak-domain": "kdrive",
          "x-infomaniak-mutating": false,
          "x-infomaniak-content-types": { request: [], response: [] },
          responses: { 200: { description: "ok" } },
        },
      },
      "/2/drive/symbol-only": {
        get: {
          operationId: "!!!",
          "x-infomaniak-domain": "kdrive",
          "x-infomaniak-mutating": false,
          "x-infomaniak-content-types": { request: [], response: [] },
          responses: { 200: { description: "ok" } },
        },
      },
    },
  };
}

function fixtureDocsSnapshot(): DocsSnapshot {
  return {
    generatedAt: "manual",
    source: {
      seedUrl: "https://developer.infomaniak.com/docs/api/get/2/drive/%7Bdrive_id%7D/files/%7Bfile_id%7D",
      developerPortalBaseUrl: "https://developer.infomaniak.com",
      apiBaseUrl: "https://api.infomaniak.com",
    },
    operationCount: 3,
    operations: [
      {
        key: "get /2/drive/{drive_id}/files/{file_id}",
        method: "get",
        path: "/2/drive/{drive_id}/files/{file_id}",
        docsUrl: "https://developer.infomaniak.com/docs/api/get/2/drive/%7Bdrive_id%7D/files/%7Bfile_id%7D",
        summary: "Docs get file",
        operationId: "Docs/GetDriveFile",
        categoryPath: ["kDrive", "Files"],
        staff: true,
        meta: {
          parameters: [
            "ignored",
            { name: "missing-location" },
            {
              name: "drive_id",
              in: "path",
              required: true,
              description: "Drive identifier",
              style: "simple",
              explode: true,
              schema: { type: "integer", example: 1 },
              "x-values": [1, 2],
            },
            {
              name: "with",
              in: "query",
              description: "Relations to include",
              style: "form",
              example: "parameter-example",
              examples: { named: { value: "named-example" }, duplicate: { value: "permissions" }, raw: "raw-example" },
              schema: { type: ["string", "null", null], enum: ["permissions", "teams"], example: "permissions" },
              "x-values": ["permissions"],
            },
            {
              name: "mode",
              in: "query",
              examples: ["array-example"],
              schema: { "x-ref": "ModeRef", unsupported: undefined },
            },
            {
              name: "plain",
              in: "query",
            },
            {
              name: "empty",
              in: "query",
              schema: {},
            },
            {
              name: "unknown_type",
              in: "query",
              schema: { type: [null, 1] },
            },
          ],
          queryParameters: [],
          pathParameters: [],
          headerParameters: [],
          responses: { 10: {}, 2: {}, 200: {} },
          xVersion: 2,
          xIsBeta: true,
          xIsPublicCloud: false,
          xPaginable: true,
          xSortable: false,
          xAuthUser: true,
          xCapabilities: [
            { name: "paginable", description: "Page results", values: ["page", 1] },
            { description: "ignored" },
          ],
        },
      },
      {
        key: "post /2/drive/{drive_id}/files/{file_id}",
        method: "post",
        path: "/2/drive/{drive_id}/files/{file_id}",
        docsUrl: "https://developer.infomaniak.com/docs/api/post/2/drive/%7Bdrive_id%7D/files/%7Bfile_id%7D",
        summary: "",
        operationId: null,
        categoryPath: [],
        staff: false,
        meta: {
          parameters: [],
          queryParameters: [],
          pathParameters: [],
          headerParameters: [],
          responses: null,
          xVersion: "beta",
        },
      },
      {
        key: "get /2/drive/duplicate-one",
        method: "get",
        path: "/2/drive/duplicate-one",
        docsUrl: "https://developer.infomaniak.com/docs/api/get/2/drive/duplicate-one",
        summary: "",
        operationId: "Docs/SameName",
        categoryPath: [],
        staff: false,
        meta: {
          parameters: [],
          queryParameters: [],
          pathParameters: [],
          headerParameters: [],
          responses: {},
          xIsPublicCloud: true,
          xCapabilities: "invalid",
        },
      },
    ],
  };
}

void ({} satisfies Partial<OperationMetadata>);
