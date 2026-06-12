import { describe, expect, it } from "vitest";

import {
  describeOperation,
  getOperation,
  InfomaniakError,
  isMutatingOperation,
  listDomains,
  listOperations,
  operationCatalog,
  searchOperations,
} from "../../../src/index.js";

describe("operation catalog", () => {
  it("lists generated domains and operations", () => {
    expect(listDomains()).toHaveLength(17);
    expect(listDomains()).toContainEqual({ domain: "kdrive", operationCount: 188 });
    expect(listOperations()).toHaveLength(1429);
    expect(operationCatalog.listDomains()).toBe(listDomains());
    expect(operationCatalog.listOperations()).toHaveLength(1429);
  });

  it("filters operations by domain, domains, method, mutating flag, and deprecated flag", () => {
    const kmeetPosts = listOperations({ domain: "kmeet", method: "post", mutating: true });
    const selectedDomains = listOperations({ domains: ["kmeet", "urlShortener"], deprecated: true });

    expect(kmeetPosts.map((operation) => operation.operationId)).toEqual(["post_1_kmeet_rooms"]);
    expect(selectedDomains.length).toBeGreaterThan(0);
    expect(selectedDomains.every((operation) => ["kmeet", "urlShortener"].includes(operation.domain))).toBe(true);
    expect(selectedDomains.every((operation) => operation.deprecated)).toBe(true);
    expect(listOperations({ domain: "does-not-exist" })).toEqual([]);
  });

  it("searches across identifiers, domains, paths, summaries, descriptions, tags, and original operation IDs", () => {
    const conferenceMatches = searchOperations("conference");
    const settingsMatches = searchOperations({ query: "fetch room settings", domain: "kmeet", limit: 1 });
    const originalIdMatches = searchOperations({ query: "Mail/ServicesUpdateAMailbox", method: "patch" });
    const emptySearch = searchOperations();

    expect(conferenceMatches.some((operation) => operation.operationId === "post_1_kmeet_rooms")).toBe(true);
    expect(settingsMatches).toHaveLength(1);
    expect(settingsMatches[0]?.operationId).toBe("get_1_kmeet_rooms_room_id_settings");
    expect(originalIdMatches.map((operation) => operation.operationId)).toEqual([
      "Mail_ServicesUpdateAMailbox_patch_1_mail_hostings_mail_hosting_id_mailboxes_mailbox_name",
    ]);
    expect(emptySearch).toHaveLength(1429);
  });

  it("gets and describes operations by normalized operation ID", () => {
    const operation = getOperation("get_1_kmeet_rooms_room_id_settings");
    const description = describeOperation("get_1_kmeet_rooms_room_id_settings");

    expect(operation.path).toBe("/1/kmeet/rooms/{room_id}/settings");
    expect(description).toMatchObject({
      operationId: "get_1_kmeet_rooms_room_id_settings",
      functionName: "get1KmeetRoomsRoomIdSettings",
      domain: "kmeet",
      method: "GET",
      mutating: false,
      requestContentTypes: [],
      responseContentTypes: ["application/json"],
      auth: ["bearerAuth"],
    });
    expect(description.parameters.path).toEqual([{ name: "room_id", in: "path", required: true }]);
    expect(description.parameters.query).toEqual([]);
    expect(description.parameters.header).toEqual([]);
    expect(description.parameters.cookie).toEqual([]);
    expect(operationCatalog.describeOperation("post_1_kmeet_rooms").summary).toBe("Plan a conference");
  });

  it("reports mutating operations and fails unknown operation lookups", () => {
    expect(isMutatingOperation("post_1_kmeet_rooms")).toBe(true);
    expect(operationCatalog.isMutatingOperation("get_1_kmeet_rooms_room_id_settings")).toBe(false);
    expect(() => getOperation("missing-operation")).toThrow(InfomaniakError);
    expect(() => operationCatalog.getOperation("missing-operation")).toThrow(/Unknown Infomaniak operation/);
  });
});
