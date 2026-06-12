import { readFile } from "node:fs/promises";

import { describe, expect, it } from "vitest";

import { normalizeOpenApiSpec, type JsonObject } from "../../../src/openapi/normalize.js";

describe("normalizeOpenApiSpec", () => {
  it("repairs malformed tags, missing ids, duplicate ids, schema aliases, and domain metadata", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      components: { schemas: {} },
      paths: {
        "/1/kmeet/rooms": {
          post: {
            tags: "{ }",
            responses: { 200: { content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } } },
          },
        },
        "/2/drive": {
          get: {
            tags: [],
            operationId: "duplicate",
            responses: { 200: { content: { "application/octet-stream": {} } } },
          },
        },
        "/2/drive/{drive_id}": {
          get: {
            tags: ["Drive"],
            operationId: "duplicate",
            requestBody: { content: { "application/json": {} } },
            responses: { 200: { content: { "application/json": {} } } },
          },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const paths = spec.paths as JsonObject;
    const kmeetPost = ((paths["/1/kmeet/rooms"] as JsonObject).post as JsonObject);
    const driveRoot = ((paths["/2/drive"] as JsonObject).get as JsonObject);
    const driveShow = ((paths["/2/drive/{drive_id}"] as JsonObject).get as JsonObject);

    expect(report.operationCount).toBe(3);
    expect(report.domainCounts).toEqual({ kmeet: 1, kdrive: 2 });
    expect(kmeetPost.tags).toEqual(["untagged"]);
    expect(kmeetPost.operationId).toBe("post_1_kmeet_rooms");
    expect(kmeetPost["x-infomaniak-domain"]).toBe("kmeet");
    expect(kmeetPost["x-infomaniak-mutating"]).toBe(true);
    expect(driveRoot.tags).toEqual(["untagged"]);
    expect(driveRoot.operationId).toBe("duplicate");
    expect(driveShow.operationId).toBe("duplicate_get_2_drive_drive_id");
    expect(driveShow["x-infomaniak-content-types"]).toEqual({
      request: ["application/json"],
      response: ["application/json"],
    });
    expect(((spec.components as JsonObject).schemas as JsonObject).Error).toMatchObject({ type: "object" });
    expect(report.repairs.map((repair) => repair.kind)).toEqual([
      "schemaRef.alias",
      "tags",
      "operationId.missing",
      "tags",
      "operationId.duplicate",
    ]);
  });

  it("fails closed when an operation has no domain", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/unknown/service": {
          get: { responses: { 200: { description: "ok" } } },
        },
      },
    };

    expect(() => normalizeOpenApiSpec(fixture)).toThrow(/No domain rule matched GET \/unknown\/service/);
  });

  it("fails closed when local schema refs cannot be repaired", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      components: { schemas: {} },
      paths: {
        "/1/kmeet/rooms": {
          get: { responses: { 200: { content: { "application/json": { schema: { $ref: "#/components/schemas/Unknown" } } } } } },
        },
      },
    };

    expect(() => normalizeOpenApiSpec(fixture)).toThrow(/Missing schema #\/components\/schemas\/Unknown/);
  });

  it("fails when required OpenAPI sections have invalid shapes", () => {
    expect(() => normalizeOpenApiSpec({ openapi: "3.1.0", paths: [] })).toThrow(/Expected paths to be an object/);
    expect(() =>
      normalizeOpenApiSpec({
        openapi: "3.1.0",
        paths: {
          "/1/kmeet/rooms": [],
        },
      }),
    ).toThrow(/Expected paths\.\/1\/kmeet\/rooms to be an object/);
  });

  it("skips non-operation path keys and handles operations without response metadata", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/rooms": {
          parameters: [],
          get: { tags: ["Rooms"] },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const operation = (((spec.paths as JsonObject)["/1/kmeet/rooms"] as JsonObject).get as JsonObject);

    expect(report.operationCount).toBe(1);
    expect(operation["x-infomaniak-content-types"]).toEqual({ request: [], response: [] });
  });

  it("keeps existing schemas and resolves synthetic operation id collisions", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      components: {
        schemas: {
          Error: { type: "object", properties: { kept: { type: "boolean" } } },
        },
      },
      paths: {
        "/1/kmeet/a-b": {
          get: { responses: { 200: { content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } } } } },
        },
        "/1/kmeet/a_b": {
          get: { responses: { 200: { description: "ok" } } },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const schemas = (spec.components as JsonObject).schemas as JsonObject;
    const first = (((spec.paths as JsonObject)["/1/kmeet/a-b"] as JsonObject).get as JsonObject);
    const second = (((spec.paths as JsonObject)["/1/kmeet/a_b"] as JsonObject).get as JsonObject);

    expect(schemas.Error).toEqual({ type: "object", properties: { kept: { type: "boolean" } } });
    expect(first.operationId).toBe("get_1_kmeet_a_b");
    expect(second.operationId).toBe("get_1_kmeet_a_b_get_1_kmeet_a_b");
    expect(second["x-infomaniak-original-operationId"]).toBeNull();
    expect(report.repairs.some((repair) => repair.kind === "operationId.duplicate")).toBe(true);
  });

  it("sanitizes duplicate operation ids that contain no identifier characters", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/first": {
          get: { tags: ["Rooms"], operationId: "!!!", responses: { 200: { description: "ok" } } },
        },
        "/1/kmeet/second": {
          get: { tags: ["Rooms"], operationId: "!!!", responses: { 200: { description: "ok" } } },
        },
      },
    };

    const { spec } = normalizeOpenApiSpec(fixture);
    const second = (((spec.paths as JsonObject)["/1/kmeet/second"] as JsonObject).get as JsonObject);

    expect(second.operationId).toBe("operation_get_1_kmeet_second");
  });

  it("normalizes the complete committed Infomaniak spec", async () => {
    const raw = JSON.parse(await readFile("spec/infomaniak.raw.json", "utf8")) as JsonObject;
    const { report } = normalizeOpenApiSpec(raw);

    expect(report.operationCount).toBe(1429);
    expect(report.domainCounts.kdrive).toBe(188);
    expect(report.domainCounts.kchat).toBe(173);
    expect(report.repairs.some((repair) => repair.kind === "operationId.missing")).toBe(true);
    expect(report.repairs.some((repair) => repair.kind === "operationId.duplicate")).toBe(true);
    expect(report.warnings).toEqual([]);
  });
});
