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

  it("adds unquoted aliases for quoted component keys", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      components: {
        parameters: [],
        responses: {
          invalid: [],
          "'bad-response'": { description: "quoted response" },
          existing: { description: "existing response" },
          "'existing'": { description: "should not overwrite" },
        },
      },
      paths: {
        "/1/kmeet/rooms": {
          get: {
            tags: ["Rooms"],
            operationId: "getRooms",
            responses: { 400: { $ref: "#/components/responses/bad-response" } },
          },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const responses = ((spec.components as JsonObject).responses as JsonObject);

    expect(responses["bad-response"]).toEqual({ description: "quoted response" });
    expect(responses.existing).toEqual({ description: "existing response" });
    expect(report.repairs.filter((repair) => repair.kind === "component.quotedAlias")).toHaveLength(1);
  });

  it("repairs object-shaped and invalid composition fields", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/rooms": {
          get: {
            tags: ["Rooms"],
            operationId: "getRooms",
            responses: {
              200: {
                content: {
                  "application/json": {
                    schema: {
                      allOf: {
                        "1": { type: "string" },
                        "2": "bad",
                        "0": { type: "number" },
                        properties: { value: { type: "boolean" } },
                      },
                      oneOf: "broken",
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const schema = getJsonResponseSchema(spec);

    expect(schema.allOf).toEqual([{ type: "number" }, { type: "string" }, {}, { properties: { value: { type: "boolean" } } }]);
    expect(schema.oneOf).toEqual([]);
    expect(report.repairs.some((repair) => repair.kind === "composition.objectToArray")).toBe(true);
    expect(report.repairs.some((repair) => repair.kind === "composition.invalid")).toBe(true);
  });

  it("keeps numeric-only object-shaped compositions as sorted arrays", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/rooms": {
          get: {
            tags: ["Rooms"],
            operationId: "getRooms",
            responses: {
              200: {
                content: {
                  "application/json": {
                    schema: {
                      allOf: {
                        "1": { type: "string" },
                        "0": { type: "number" },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const { spec } = normalizeOpenApiSpec(fixture);
    const schema = getJsonResponseSchema(spec);

    expect(schema.allOf).toEqual([{ type: "number" }, { type: "string" }]);
  });

  it("repairs invalid schema property and items values", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/rooms": {
          get: {
            tags: ["Rooms"],
            operationId: "getRooms",
            responses: {
              200: {
                content: {
                  "application/json": {
                    schema: {
                      type: "object",
                      properties: {
                        type: "object",
                        ok: { type: "string" },
                        allowed: true,
                      },
                      items: "broken",
                    },
                  },
                },
              },
            },
          },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const schema = getJsonResponseSchema(spec);
    const properties = schema.properties as JsonObject;

    expect(properties.type).toEqual({ "x-infomaniak-original-property-value": "object" });
    expect(properties.ok).toEqual({ type: "string" });
    expect(properties.allowed).toBe(true);
    expect(schema.items).toEqual({});
    expect(report.repairs.some((repair) => repair.kind === "schema.property")).toBe(true);
    expect(report.repairs.some((repair) => repair.kind === "schema.items")).toBe(true);
  });

  it("repairs invalid media type objects and schemas without touching schema properties named content", () => {
    const fixture: JsonObject = {
      openapi: "3.1.0",
      paths: {
        "/1/kmeet/rooms": {
          get: {
            tags: ["Rooms"],
            operationId: "getRooms",
            requestBody: {
              content: {
                file: { schema: 1 },
                broken: 2,
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      content: { type: "string" },
                    },
                  },
                },
              },
            },
            responses: { 200: { description: "ok" } },
          },
        },
      },
    };

    const { spec, report } = normalizeOpenApiSpec(fixture);
    const content = ((((spec.paths as JsonObject)["/1/kmeet/rooms"] as JsonObject).get as JsonObject).requestBody as JsonObject)
      .content as JsonObject;
    const jsonSchema = ((content["application/json"] as JsonObject).schema as JsonObject);

    expect((content.file as JsonObject).schema).toEqual({});
    expect(content.broken).toEqual({ schema: {} });
    expect((jsonSchema.properties as JsonObject).content).toEqual({ type: "string" });
    expect(report.repairs.some((repair) => repair.kind === "mediaType.invalid")).toBe(true);
    expect(report.repairs.some((repair) => repair.kind === "mediaType.schema")).toBe(true);
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

function getJsonResponseSchema(spec: JsonObject): JsonObject {
  const pathItem = (spec.paths as JsonObject)["/1/kmeet/rooms"] as JsonObject;
  const operation = pathItem.get as JsonObject;
  const responses = operation.responses as JsonObject;
  const ok = responses["200"] as JsonObject;
  const content = ok.content as JsonObject;
  const media = content["application/json"] as JsonObject;
  return media.schema as JsonObject;
}
