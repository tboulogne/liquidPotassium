import { describe, expect, it, vi } from "vitest";

import { createInfomaniakClient, InfomaniakError, InfomaniakOperationError } from "../../../src/index.js";

describe("createInfomaniakClient", () => {
  it("builds raw GET requests with auth, headers, path params, query params, and abort signals", async () => {
    const abort = new AbortController();
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ ok: true }));
    const client = createInfomaniakClient({
      token: "secret",
      fetch: fetchMock,
      headers: { "x-default": "yes" },
      userAgent: "liquid-potassium-test",
    });

    const result = await client.raw.GET("/2/drive/{drive_id}", {
      path: { drive_id: "drive 1" },
      query: { page: 1, tags: ["a", "b"], empty: undefined },
      headers: { "x-request": "now" },
      signal: abort.signal,
    });

    expect(result).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    const headers = init?.headers as Headers;
    expect(url).toBe("https://api.infomaniak.com/2/drive/drive%201?page=1&tags=a&tags=b");
    expect(init?.method).toBe("GET");
    expect(init?.signal).toBe(abort.signal);
    expect(headers.get("authorization")).toBe("Bearer secret");
    expect(headers.get("x-default")).toBe("yes");
    expect(headers.get("x-request")).toBe("now");
    expect(headers.get("user-agent")).toBe("liquid-potassium-test");
  });

  it("dispatches generated domain operation wrappers through requestOperation", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ room: true }));
    const client = createInfomaniakClient({ token: async () => "token", fetch: fetchMock });

    const result = await client.kmeet.operations.post1KmeetRooms({
      body: { title: "Planning" },
      headers: { "x-extra": "1" },
    });

    expect(result).toEqual({ room: true });
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(url).toBe("https://api.infomaniak.com/1/kmeet/rooms");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ title: "Planning" }));
    expect((init?.headers as Headers).get("content-type")).toBe("application/json");
    expect((init?.headers as Headers).get("authorization")).toBe("Bearer token");
  });

  it("does not force JSON content-type for multipart bodies", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response(null, { status: 204 }));
    const form = new FormData();
    form.set("file", new Blob(["hello"]));
    const client = createInfomaniakClient({ fetch: fetchMock });

    const result = await client.raw.POST("/upload", {
      body: form,
      requestContentTypes: ["multipart/form-data"],
    });

    expect(result).toBeUndefined();
    const init = fetchMock.mock.calls[0]?.[1];
    expect(init?.body).toBe(form);
    expect((init?.headers as Headers).has("content-type")).toBe(false);
  });

  it("supports the generic request helper, custom base URLs, header providers, and all raw mutating methods", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ ok: true }));
    const client = createInfomaniakClient({
      baseUrl: "https://example.test/api/",
      fetch: fetchMock,
      headers: async () => ({ authorization: "Bearer override", "x-provider": "yes" }),
      token: "unused",
      userAgent: "provider-client",
    });

    await client.request("/plain");
    await client.raw.PUT("/put", { body: { raw: true }, headers: { "content-type": "application/x-www-form-urlencoded" } });
    await client.raw.PATCH("/patch", { body: new URLSearchParams({ value: "1" }) });

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://example.test/plain",
      "https://example.test/put",
      "https://example.test/patch",
    ]);
    expect(fetchMock.mock.calls.map(([, init]) => init?.method)).toEqual(["GET", "PUT", "PATCH"]);
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("authorization")).toBe("Bearer override");
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("x-provider")).toBe("yes");
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("user-agent")).toBe("provider-client");
    expect(fetchMock.mock.calls[1]?.[1]?.body).toEqual({ raw: true });
    expect(fetchMock.mock.calls[2]?.[1]?.body).toBeInstanceOf(URLSearchParams);
  });

  it("parses text and binary success responses", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(new Response("a,b", { headers: { "content-type": "text/csv" } }))
      .mockResolvedValueOnce(new Response(new Uint8Array([1, 2, 3])));
    const client = createInfomaniakClient({ fetch: fetchMock });

    await expect(client.raw.GET("/csv")).resolves.toBe("a,b");
    const binary = await client.raw.GET("/bin");
    expect(binary).toBeInstanceOf(ArrayBuffer);
    expect([...(new Uint8Array(binary as ArrayBuffer))]).toEqual([1, 2, 3]);
  });

  it("throws typed operation errors with safe response summaries", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ error: "nope" }), {
        status: 403,
        statusText: "Forbidden",
        headers: { "content-type": "application/json", "x-request-id": "req-1" },
      }),
    );
    const client = createInfomaniakClient({ fetch: fetchMock });

    await expect(client.raw.DELETE("/danger")).rejects.toMatchObject({
      name: "InfomaniakOperationError",
      method: "DELETE",
      path: "/danger",
      status: 403,
      statusText: "Forbidden",
      responseSummary: "{\"error\":\"nope\"}",
      headers: { "content-type": "application/json", "x-request-id": "req-1" },
    } satisfies Partial<InfomaniakOperationError>);
  });

  it("adds operation IDs to errors from generated wrappers", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(null, {
        status: 404,
        statusText: "Missing",
      }),
    );
    const client = createInfomaniakClient({ fetch: fetchMock });

    await expect(client.kmeet.operations.post1KmeetRooms()).rejects.toMatchObject({
      operationId: "post_1_kmeet_rooms",
      responseSummary: "",
    } satisfies Partial<InfomaniakOperationError>);
  });

  it("throws typed text operation errors", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response("x".repeat(600), { status: 500, statusText: "Broken" }));
    const client = createInfomaniakClient({ fetch: fetchMock });

    await expect(client.raw.GET("/broken")).rejects.toMatchObject({
      responseSummary: "x".repeat(500),
    });
  });

  it("uses global fetch when no injected fetch is provided", () => {
    expect(createInfomaniakClient().raw).toBeDefined();
  });

  it("fails closed for missing path params, unknown operation ids, and missing fetch", async () => {
    const client = createInfomaniakClient({ fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({})) });

    await expect(client.raw.GET("/2/drive/{drive_id}")).rejects.toThrow(InfomaniakError);
    await expect(client.requestOperation("missing-operation")).rejects.toThrow(/Unknown Infomaniak operation/);
    vi.stubGlobal("fetch", undefined);
    expect(() => createInfomaniakClient()).toThrow(/No fetch implementation/);
  });
});

function jsonResponse(value: unknown): Response {
  return new Response(JSON.stringify(value), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
