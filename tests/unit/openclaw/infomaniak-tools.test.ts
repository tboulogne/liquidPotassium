import { describe, expect, it, vi } from "vitest";
import type { AnyAgentTool, OpenClawPluginApi } from "openclaw/plugin-sdk/plugin-entry";

import infomaniakOpenClawPlugin from "../../../openclaw/plugin.js";
import {
  createInfomaniakOpenClawTools,
  InfomaniakPluginConfigJsonSchema,
  infomaniakCallToolSchema,
  infomaniakDescribeToolSchema,
  infomaniakDomainsToolSchema,
  infomaniakSearchToolSchema,
  resolveInfomaniakPluginConfig,
} from "../../../src/openclaw/infomaniak-tools.js";

describe("Infomaniak OpenClaw tools", () => {
  it("declares plugin config and registers the four compact tools", () => {
    const registeredTools: AnyAgentTool[] = [];
    const api = {
      pluginConfig: { allowedDomains: ["kmeet"] },
      registerTool(tool: AnyAgentTool) {
        registeredTools.push(tool);
      },
    } as unknown as OpenClawPluginApi;

    infomaniakOpenClawPlugin.register?.(api);

    expect(infomaniakOpenClawPlugin.id).toBe("infomaniak");
    expect(InfomaniakPluginConfigJsonSchema.properties.blockMutating.default).toBe(true);
    expect(registeredTools.map((tool) => tool.name)).toEqual([
      "infomaniak_domains",
      "infomaniak_search",
      "infomaniak_describe",
      "infomaniak_call",
    ]);
    expect(registeredTools.map((tool) => tool.parameters)).toEqual([
      infomaniakDomainsToolSchema,
      infomaniakSearchToolSchema,
      infomaniakDescribeToolSchema,
      infomaniakCallToolSchema,
    ]);
    expect(registeredTools.every((tool) => tool.label && tool.description)).toBe(true);
  });

  it("resolves strict plugin config defaults and validates supported config types", () => {
    expect(resolveInfomaniakPluginConfig(undefined)).toEqual({
      allowedDomains: [],
      allowedOperations: [],
      deniedOperations: [],
      blockMutating: true,
    });
    expect(
      resolveInfomaniakPluginConfig({
        token: " token ",
        baseUrl: " https://example.test ",
        allowedDomains: ["kmeet", "", 1],
        allowedOperations: ["post_1_kmeet_rooms"],
        deniedOperations: ["missing"],
        blockMutating: false,
      }),
    ).toEqual({
      token: "token",
      baseUrl: "https://example.test",
      allowedDomains: ["kmeet"],
      allowedOperations: ["post_1_kmeet_rooms"],
      deniedOperations: ["missing"],
      blockMutating: false,
    });
    expect(() => resolveInfomaniakPluginConfig({ allowedDomains: "kmeet" })).toThrow(/allowedDomains/);
    expect(() => resolveInfomaniakPluginConfig({ blockMutating: "false" })).toThrow(/blockMutating/);
  });

  it("lists, searches, and describes only operations allowed by policy without network access", async () => {
    const tools = createInfomaniakOpenClawTools({
      config: { allowedDomains: ["kmeet"], deniedOperations: ["post_1_kmeet_rooms"] },
    });
    const domains = await executeTool(findTool(tools, "infomaniak_domains"), {});
    const search = await executeTool(findTool(tools, "infomaniak_search"), {
      query: "kmeet room",
      limit: 10,
      mutating: false,
    });
    const methodSearch = await executeTool(findTool(tools, "infomaniak_search"), {
      query: "settings",
      domain: "kmeet",
      method: "GET",
      limit: "invalid",
    });
    const specOnlySearch = await executeTool(
      findTool(
        createInfomaniakOpenClawTools({
          config: { allowedOperations: ["Core/ResourcesGetApplicationList"] },
        }),
        "infomaniak_search",
      ),
      { query: "applications" },
    );
    const description = await executeTool(findTool(tools, "infomaniak_describe"), {
      operation_id: "get_1_kmeet_rooms_room_id_settings",
    });

    expect(domains).toEqual({ domains: [{ domain: "kmeet", operationCount: 1 }] });
    expect(search.operations).toEqual([
      expect.objectContaining({
        operationId: "get_1_kmeet_rooms_room_id_settings",
        domain: "kmeet",
        method: "GET",
        mutating: false,
      }),
    ]);
    expect(methodSearch.operations).toEqual([
      expect.objectContaining({ operationId: "get_1_kmeet_rooms_room_id_settings" }),
    ]);
    expect(specOnlySearch.operations).toEqual([
      expect.objectContaining({ operationId: "Core/ResourcesGetApplicationList", docs: null }),
    ]);
    expect(description.operation).toMatchObject({
      operationId: "get_1_kmeet_rooms_room_id_settings",
      path: "/1/kmeet/rooms/{room_id}/settings",
    });
    await expect(
      executeTool(findTool(tools, "infomaniak_describe"), { operation_id: "post_1_kmeet_rooms" }),
    ).rejects.toThrow(/not allowed/);
    await expect(findTool(tools, "infomaniak_describe").execute("bad-call", undefined)).rejects.toThrow(/operation_id is required/);
  });

  it("calls allowed operations through the SDK with injected fetch", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ planned: true }), {
        headers: { "content-type": "application/json" },
      }),
    );
    const tools = createInfomaniakOpenClawTools({
      fetch: fetchMock,
      config: {
        token: "secret",
        baseUrl: "https://example.test",
        allowedOperations: ["post_1_kmeet_rooms"],
        blockMutating: false,
      },
    });

    const result = await executeTool(findTool(tools, "infomaniak_call"), {
      operation_id: "post_1_kmeet_rooms",
      body: { title: "Planning" },
      headers: { "x-extra": "1" },
      confirm_mutating: true,
    });

    expect(result).toEqual({
      operation: expect.objectContaining({
        operationId: "post_1_kmeet_rooms",
        method: "POST",
        mutating: true,
      }),
      result: { planned: true },
    });
    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(url).toBe("https://example.test/1/kmeet/rooms");
    expect(init?.method).toBe("POST");
    expect(init?.body).toBe(JSON.stringify({ title: "Planning" }));
    expect((init?.headers as Headers).get("authorization")).toBe("Bearer secret");
    expect((init?.headers as Headers).get("x-extra")).toBe("1");
  });

  it("blocks disallowed calls and mutating operations without explicit permission", async () => {
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_call"), {
        operation_id: "post_1_kmeet_rooms",
        confirm_mutating: true,
      }),
    ).rejects.toThrow(/blocked by plugin config/);

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { blockMutating: false } }), "infomaniak_call"),
        { operation_id: "post_1_kmeet_rooms" },
      ),
    ).rejects.toThrow(/confirm_mutating=true/);

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedOperations: ["get_1_kmeet_rooms_room_id_settings"] } }), "infomaniak_call"),
        { operation_id: "post_1_kmeet_rooms", confirm_mutating: true },
      ),
    ).rejects.toThrow(/not allowed/);
  });

  it("passes path, query, headers, body, and abort signals for non-mutating calls", async () => {
    const abort = new AbortController();
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response("{}", { headers: { "content-type": "application/json" } }));
    const tools = createInfomaniakOpenClawTools({ fetch: fetchMock, config: { allowedDomains: ["kmeet"] } });

    await findTool(tools, "infomaniak_call").execute(
      "call-1",
      {
        operation_id: "get_1_kmeet_rooms_room_id_settings",
        path: { room_id: "room 1" },
        query: { verbose: true },
        headers: { "x-extra": "2" },
      },
      abort.signal,
    );

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(url).toBe("https://api.infomaniak.com/1/kmeet/rooms/room%201/settings?verbose=true");
    expect(init?.signal).toBe(abort.signal);
    expect((init?.headers as Headers).get("x-extra")).toBe("2");
  });
});

function findTool(tools: readonly AnyAgentTool[], name: string): AnyAgentTool {
  const tool = tools.find((candidate) => candidate.name === name);
  if (!tool) {
    throw new Error(`Missing test tool: ${name}`);
  }
  return tool;
}

async function executeTool(tool: AnyAgentTool, params: Record<string, unknown>): Promise<Record<string, unknown>> {
  const result = await tool.execute("test-call", params);
  return result.details as Record<string, unknown>;
}
