import { describe, expect, it, vi } from "vitest";
import type { AnyAgentTool, OpenClawPluginApi } from "openclaw/plugin-sdk/plugin-entry";

import infomaniakOpenClawPlugin from "../../../openclaw/plugin.js";
import {
  createInfomaniakOpenClawTools,
  InfomaniakPluginConfigJsonSchema,
  infomaniakCallToolSchema,
  infomaniakDiscoverToolSchema,
  infomaniakDescribeToolSchema,
  infomaniakDomainsToolSchema,
  infomaniakMailApplicationToolSchema,
  infomaniakSearchToolSchema,
  resolveInfomaniakPluginConfig,
} from "../../../src/openclaw/infomaniak-tools.js";

describe("Infomaniak OpenClaw tools", () => {
  it("declares plugin config and registers the compact tools", () => {
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
      "infomaniak_discover",
      "infomaniak_mail_application",
      "infomaniak_call",
    ]);
    expect(registeredTools.map((tool) => tool.parameters)).toEqual([
      infomaniakDomainsToolSchema,
      infomaniakSearchToolSchema,
      infomaniakDescribeToolSchema,
      infomaniakDiscoverToolSchema,
      infomaniakMailApplicationToolSchema,
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
        mailApplicationBaseUrl: " https://mail.example.test ",
        allowedDomains: ["kmeet", "", 1],
        allowedOperations: ["post_1_kmeet_rooms"],
        deniedOperations: ["missing"],
        blockMutating: false,
      }),
    ).toEqual({
      token: "token",
      baseUrl: "https://example.test",
      mailApplicationBaseUrl: "https://mail.example.test",
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
    const mailApplicationDomains = await executeTool(
      findTool(
        createInfomaniakOpenClawTools({
          config: { allowedOperations: ["MailApplication/ListUserMailboxes"] },
        }),
        "infomaniak_domains",
      ),
      {},
    );
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
    const filteredSearch = await executeTool(findTool(tools, "infomaniak_search"), {
      domain: "kmeet",
      method: "GET",
      limit: 1,
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
    expect(mailApplicationDomains).toEqual({ domains: [{ domain: "mail", operationCount: 1 }] });
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
    expect(filteredSearch.operations).toEqual([
      expect.objectContaining({ operationId: "get_1_kmeet_rooms_room_id_settings" }),
    ]);
    expect(specOnlySearch.operations).toEqual([
      expect.objectContaining({ operationId: "Core/ResourcesGetApplicationList", docs: null }),
    ]);
    expect(description.operation).toMatchObject({
      operationId: "get_1_kmeet_rooms_room_id_settings",
      path: "/1/kmeet/rooms/{room_id}/settings",
      requirements: {
        suggestions: [expect.objectContaining({ kind: "kmeetRoom", code: "no_public_discovery" })],
      },
    });
    await expect(
      executeTool(findTool(tools, "infomaniak_describe"), { operation_id: "post_1_kmeet_rooms" }),
    ).rejects.toThrow(/not allowed/);
    await expect(findTool(tools, "infomaniak_describe").execute("bad-call", undefined)).rejects.toThrow(/operation_id is required/);
  });

  it("discovers resources or explains reviewed gaps through policy-aware OpenClaw tooling", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () =>
      new Response(JSON.stringify({ data: [{ id: 123, name: "Drive" }] }), {
        headers: { "content-type": "application/json" },
      }),
    );
    const tools = createInfomaniakOpenClawTools({
      fetch: fetchMock,
      config: { allowedDomains: ["kdrive", "newsletter"] },
    });

    const kdriveDiscovery = await executeTool(findTool(tools, "infomaniak_discover"), {
      kind: "kdriveDrive",
      limit: 1,
      parents: { ignored: true, account_id: 12 },
    });
    const domainDiscovery = await executeTool(findTool(tools, "infomaniak_discover"), {
      domain: "kdrive",
      parents: { account_id: 12 },
    });
    const newsletterDiscovery = await executeTool(findTool(tools, "infomaniak_discover"), {
      kind: "newsletterDomain",
    });

    expect(kdriveDiscovery).toMatchObject({
      resources: [
        {
          id: 123,
          label: "Drive",
          domain: "kdrive",
          kind: "kdriveDrive",
          sourceOperationId: "kDriveAccessiblesDrivesV2",
          parents: { account_id: 12 },
        },
      ],
      recipe: { operationId: "kDriveAccessiblesDrivesV2" },
    });
    expect(domainDiscovery).toMatchObject({
      resources: [expect.objectContaining({ kind: "kdriveDrive" })],
      recipe: { operationId: "kDriveAccessiblesDrivesV2" },
    });
    expect(newsletterDiscovery).toMatchObject({
      resources: [],
      recipe: null,
      suggestions: [expect.objectContaining({ code: "no_public_discovery", kind: "newsletterDomain" })],
    });
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls[0]?.[0]).toBe("https://api.infomaniak.com/2/drive?account_id=12");
    expect(fetchMock.mock.calls[1]?.[0]).toBe("https://api.infomaniak.com/2/drive?account_id=12");

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["mail"] } }), "infomaniak_discover"),
        { domain: "kdrive" },
      ),
    ).rejects.toThrow(/domain is not allowed/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["mail"] } }), "infomaniak_discover"),
        { kind: "kdriveDrive" },
      ),
    ).rejects.toThrow(/resource kind is not allowed/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { deniedOperations: ["kDriveAccessiblesDrivesV2"] } }), "infomaniak_discover"),
        { kind: "kdriveDrive" },
      ),
    ).rejects.toThrow(/not allowed by plugin policy/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { deniedOperations: ["kDriveAccessiblesDrivesV2"] } }), "infomaniak_discover"),
        { operation_id: "kDriveGetDriveInformationV2" },
      ),
    ).rejects.toThrow(/not allowed by plugin policy/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { deniedOperations: ["kDriveAccessiblesDrivesV2"] } }), "infomaniak_discover"),
        { domain: "kdrive" },
      ),
    ).rejects.toThrow(/not allowed by plugin policy/);
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["newsletter"] } }), "infomaniak_discover"), {
        operation_id: "NewsletterShowDomain",
      }),
    ).resolves.toMatchObject({
      suggestions: [expect.objectContaining({ code: "no_public_discovery", kind: "newsletterDomain" })],
    });
  });

  it("calls every read-only Mail application action through injected fetch", async () => {
    const abort = new AbortController();
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () =>
      new Response(JSON.stringify({ result: "success", data: [] }), {
        headers: { "content-type": "application/json" },
      }),
    );
    const tool = findTool(
      createInfomaniakOpenClawTools({
        fetch: fetchMock,
        config: {
          token: "secret",
          baseUrl: "https://api.example.test",
          mailApplicationBaseUrl: "https://mail.example.test",
          allowedDomains: ["mail"],
        },
      }),
      "infomaniak_mail_application",
    );

    const mailboxes = await executeTool(tool, { action: "listUserMailboxes", headers: { "x-mail": "yes" } });
    await executeTool(tool, { action: "listFolders", mailbox_uuid: "mailbox-uuid", with: "ik-static" });
    await tool.execute(
      "threads",
      {
        action: "listThreads",
        mailbox_uuid: "mailbox-uuid",
        folder_id: "inbox",
        offset: 0,
        thread_mode: "off",
        filter: "unseen",
        with: "emoji_reactions_per_message",
      },
      abort.signal,
    );
    await executeTool(tool, {
      action: "listThreads",
      mailbox_uuid: "mailbox-uuid",
      folder_id: "archive",
      offset: -1,
    });
    await executeTool(tool, {
      action: "getMessage",
      message_resource: "/api/mail/mailbox-uuid/folder/inbox/message/42",
      preferred_format: "text",
      with: "auto_uncrypt",
    });
    await executeTool(tool, { action: "getMailboxQuota", mailbox: "opencow", product_id: 497445, unit: "MB" });
    await executeTool(tool, { action: "getDraft", mailbox_uuid: "mailbox-uuid", draft_uuid: "draft-uuid" });
    await executeTool(tool, { action: "currentMyKSuite", with: "mail" });

    expect(mailboxes.operation).toEqual(
      expect.objectContaining({
        operationId: "MailApplication/ListUserMailboxes",
        domain: "mail",
        method: "GET",
        mutating: false,
      }),
    );
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://mail.example.test/api/mailbox?with=unseen%2Caliases",
      "https://mail.example.test/api/mail/mailbox-uuid/folder?with=ik-static",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message?offset=0&thread=off&filters=unseen&with=emoji_reactions_per_message",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/archive/message?offset=0&thread=on&with=emoji_reactions_per_message",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message/42?prefered_format=text&with=auto_uncrypt",
      "https://mail.example.test/api/mailbox/quotas?mailbox=opencow&product_id=497445&unit=MB",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://api.example.test/1/my_ksuite/current?with=mail",
    ]);
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("authorization")).toBe("Bearer secret");
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("x-mail")).toBe("yes");
    expect(fetchMock.mock.calls[2]?.[1]?.signal).toBe(abort.signal);
  });

  it("calls every mutating Mail application action only with explicit permission", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () =>
      new Response(JSON.stringify({ result: "success", data: {} }), {
        headers: { "content-type": "application/json" },
      }),
    );
    const tool = findTool(
      createInfomaniakOpenClawTools({
        fetch: fetchMock,
        config: {
          blockMutating: false,
          mailApplicationBaseUrl: "https://mail.example.test",
          allowedDomains: ["mail"],
        },
      }),
      "infomaniak_mail_application",
    );
    const draftPayload = {
      body: "<p>Hello</p>",
      to: [{ email: "recipient@example.com" }],
    };

    await executeTool(tool, { action: "createDraft", mailbox_uuid: "mailbox-uuid", payload: draftPayload, confirm_mutating: true });
    await executeTool(tool, {
      action: "updateDraft",
      mailbox_uuid: "mailbox-uuid",
      draft_uuid: "draft-uuid",
      payload: { ...draftPayload, subject: "Updated" },
      confirm_mutating: true,
    });
    await executeTool(tool, { action: "deleteDraft", mailbox_uuid: "mailbox-uuid", draft_uuid: "draft-uuid", confirm_mutating: true });
    await executeTool(tool, {
      action: "scheduleDraft",
      draft_resource: "/api/mail/mailbox-uuid/draft/draft-uuid",
      schedule_date: "2026-05-10T08:00:00+02:00",
      confirm_mutating: true,
    });
    await executeTool(tool, {
      action: "deleteSchedule",
      schedule_action: "/api/mail/mailbox-uuid/draft/draft-uuid/schedule",
      confirm_mutating: true,
    });
    await executeTool(tool, {
      action: "cancelSend",
      cancel_send_resource: "/api/mail/mailbox-uuid/draft/draft-uuid/cancel",
      confirm_mutating: true,
    });
    const move = await executeTool(tool, {
      action: "moveMessages",
      mailbox_uuid: "mailbox-uuid",
      payload: { to: "archive", uids: ["31@inbox"] },
      confirm_mutating: true,
    });

    expect(move.operation).toEqual(expect.objectContaining({ operationId: "MailApplication/MoveMessages", mutating: true }));
    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://mail.example.test/api/mail/mailbox-uuid/draft",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/schedule",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/schedule",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/cancel",
      "https://mail.example.test/api/mail/mailbox-uuid/message/move",
    ]);
    expect(fetchMock.mock.calls.map(([, init]) => init?.method)).toEqual(["POST", "PUT", "DELETE", "PUT", "DELETE", "PUT", "POST"]);
    expect(jsonBodyAt(fetchMock, 0)).toEqual({
      action: "save",
      ack_request: false,
      attachments: [],
      body: "<p>Hello</p>",
      mime_type: "text/html",
      priority: "normal",
      subject: "",
      to: [{ email: "recipient@example.com" }],
    });
    expect(jsonBodyAt(fetchMock, 6)).toEqual({ to: "archive", uids: ["31@inbox"] });
  });

  it("applies policy, confirmation, and parameter validation to Mail application actions", async () => {
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_mail_application"), {
        action: "createDraft",
        mailbox_uuid: "mailbox-uuid",
        payload: { body: "Hello", to: [{ email: "recipient@example.com" }] },
        confirm_mutating: true,
      }),
    ).rejects.toThrow(/blocked by plugin config/);

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { blockMutating: false } }), "infomaniak_mail_application"),
        { action: "createDraft", mailbox_uuid: "mailbox-uuid", payload: { body: "Hello", to: [{ email: "recipient@example.com" }] } },
      ),
    ).rejects.toThrow(/confirm_mutating=true/);

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["kmeet"] } }), "infomaniak_mail_application"),
        { action: "listUserMailboxes" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(
      executeTool(
        findTool(
          createInfomaniakOpenClawTools({ config: { allowedOperations: ["MailApplication/ListUserMailboxes"] } }),
          "infomaniak_mail_application",
        ),
        { action: "listFolders", mailbox_uuid: "mailbox-uuid" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(
      executeTool(
        findTool(
          createInfomaniakOpenClawTools({ config: { deniedOperations: ["MailApplication/ListUserMailboxes"] } }),
          "infomaniak_mail_application",
        ),
        { action: "listUserMailboxes" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_mail_application"), { action: "missing" })).rejects.toThrow(
      /Unknown Infomaniak Mail application action/,
    );
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_mail_application"), { action: "listFolders" }),
    ).rejects.toThrow(/mailbox_uuid is required/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { blockMutating: false } }), "infomaniak_mail_application"),
        { action: "createDraft", mailbox_uuid: "mailbox-uuid", payload: "nope", confirm_mutating: true },
      ),
    ).rejects.toThrow(/payload must be an object/);
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_mail_application"), {
        action: "getMailboxQuota",
        mailbox: "opencow",
        product_id: 0,
      }),
    ).rejects.toThrow(/product_id must be a positive integer/);
    await expect(findTool(createInfomaniakOpenClawTools(), "infomaniak_mail_application").execute("bad-call", undefined)).rejects.toThrow(
      /action is required/,
    );
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
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => new Response("{}", { headers: { "content-type": "application/json" } }));
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
    await executeTool(findTool(tools, "infomaniak_call"), {
      operation_id: "get_1_kmeet_rooms_room_id_settings",
      path: { room_id: "room 2" },
    });

    const [url, init] = fetchMock.mock.calls[0] ?? [];
    expect(url).toBe("https://api.infomaniak.com/1/kmeet/rooms/room%201/settings?verbose=true");
    expect(init?.signal).toBe(abort.signal);
    expect((init?.headers as Headers).get("x-extra")).toBe("2");
    expect(fetchMock.mock.calls[1]?.[0]).toBe("https://api.infomaniak.com/1/kmeet/rooms/room%202/settings");
    expect((fetchMock.mock.calls[1]?.[1]?.headers as Headers).has("x-extra")).toBe(false);
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

function jsonBodyAt(fetchMock: ReturnType<typeof vi.fn<typeof fetch>>, index: number): unknown {
  const body = fetchMock.mock.calls[index]?.[1]?.body;
  if (typeof body !== "string") {
    throw new Error(`Expected JSON string body at fetch call ${index}.`);
  }
  return JSON.parse(body) as unknown;
}
