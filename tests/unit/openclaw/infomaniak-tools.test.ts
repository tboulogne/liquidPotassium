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
  infomaniakWorkflowDescribeToolSchema,
  infomaniakWorkflowListToolSchema,
  infomaniakWorkflowRunToolSchema,
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
    expect(InfomaniakPluginConfigJsonSchema.properties.tokenEnvName.default).toBe("INFOMANIAK_TOKEN");
    expect(registeredTools.map((tool) => tool.name)).toEqual([
      "infomaniak_domains",
      "infomaniak_search",
      "infomaniak_describe",
      "infomaniak_discover",
      "infomaniak_mail_application",
      "infomaniak_workflow_list",
      "infomaniak_workflow_describe",
      "infomaniak_workflow_run",
      "infomaniak_call",
    ]);
    expect(registeredTools.map((tool) => tool.parameters)).toEqual([
      infomaniakDomainsToolSchema,
      infomaniakSearchToolSchema,
      infomaniakDescribeToolSchema,
      infomaniakDiscoverToolSchema,
      infomaniakMailApplicationToolSchema,
      infomaniakWorkflowListToolSchema,
      infomaniakWorkflowDescribeToolSchema,
      infomaniakWorkflowRunToolSchema,
      infomaniakCallToolSchema,
    ]);
    expect(registeredTools.every((tool) => tool.label && tool.description)).toBe(true);
  });

  it("resolves strict plugin config defaults and validates supported config types", () => {
    expect(resolveInfomaniakPluginConfig(undefined)).toEqual({
      tokenEnvName: "INFOMANIAK_TOKEN",
      allowedDomains: [],
      allowedOperations: [],
      deniedOperations: [],
      blockMutating: true,
    });
    expect(
      resolveInfomaniakPluginConfig({
        token: " token ",
        tokenEnvName: " LIQUID_TEST_TOKEN ",
        baseUrl: " https://example.test ",
        mailApplicationBaseUrl: " https://mail.example.test ",
        allowedDomains: ["kmeet", "", 1],
        allowedOperations: ["post_1_kmeet_rooms"],
        deniedOperations: ["missing"],
        blockMutating: false,
      }),
    ).toEqual({
      token: "token",
      tokenEnvName: "LIQUID_TEST_TOKEN",
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
        search_text: "example & co",
        search_everywhere: true,
        search_attachments: false,
        with: "emoji_reactions_per_message",
      },
      abort.signal,
    );
    await expect(executeTool(tool, {
      action: "listThreads",
      mailbox_uuid: "mailbox-uuid",
      folder_id: "archive",
      offset: -1,
    })).rejects.toThrow(/offset/);
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
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message?offset=0&thread=off&filters=unseen&scontains=example+%26+co&severywhere=1&with=emoji_reactions_per_message",
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

  it("lists, describes, and runs allowed SDK workflow actions through injected fetch", async () => {
    const abort = new AbortController();
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () =>
      new Response(JSON.stringify({ result: "success", data: [] }), {
        headers: { "content-type": "application/json" },
      }),
    );
    const tools = createInfomaniakOpenClawTools({
      fetch: fetchMock,
      config: {
        allowedDomains: ["kdrive"],
        tokenEnvName: "LIQUID_POTASSIUM_TEST_TOKEN",
      },
    });
    const previousToken = process.env.LIQUID_POTASSIUM_TEST_TOKEN;
    process.env.LIQUID_POTASSIUM_TEST_TOKEN = "env-secret";

    try {
      const readOnlyActions = await executeTool(findTool(tools, "infomaniak_workflow_list"), {
        domain: "kdrive",
        mutating: false,
      });
      const allKdriveActions = await executeTool(findTool(tools, "infomaniak_workflow_list"), {
        domain: "kdrive",
      });
      const mutatingActions = await executeTool(findTool(tools, "infomaniak_workflow_list"), {
        domain: "kdrive",
        mutating: true,
      });
      const description = await executeTool(findTool(tools, "infomaniak_workflow_describe"), {
        domain: "kdrive",
        action: "uploadFile",
      });
      const run = await findTool(tools, "infomaniak_workflow_run").execute(
        "workflow-run",
        {
          domain: "kdrive",
          action: "listDirectory",
          input: { drive_id: 3024749, file_id: 5, limit: 2 },
        },
        abort.signal,
      );

      expect(readOnlyActions.actions).toEqual(
        expect.arrayContaining([expect.objectContaining({ id: "kdrive/listDirectory", operationIds: ["kDriveGetFilesInDirectoryV3"] })]),
      );
      expect((allKdriveActions.actions as unknown[]).length).toBeGreaterThan((readOnlyActions.actions as unknown[]).length);
      expect(mutatingActions.actions).toEqual(expect.arrayContaining([expect.objectContaining({ id: "kdrive/uploadFile", mutating: true })]));
      expect(description.action).toEqual(
        expect.objectContaining({
          id: "kdrive/uploadFile",
          input: expect.arrayContaining([expect.objectContaining({ name: "file_path", required: false })]),
        }),
      );
      expect(run.details).toEqual({
        action: expect.objectContaining({ id: "kdrive/listDirectory" }),
        result: { result: "success", data: [] },
      });
      expect(fetchMock.mock.calls[0]?.[0]).toBe("https://api.infomaniak.com/3/drive/3024749/files/5/files?limit=2");
      expect(fetchMock.mock.calls[0]?.[1]?.signal).toBe(abort.signal);
      expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("authorization")).toBe("Bearer env-secret");
    } finally {
      if (previousToken === undefined) {
        delete process.env.LIQUID_POTASSIUM_TEST_TOKEN;
      } else {
        process.env.LIQUID_POTASSIUM_TEST_TOKEN = previousToken;
      }
    }
  });

  it("applies operation policy, confirmation, and parameter validation to workflow actions", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () =>
      new Response(JSON.stringify({ created: true }), {
        headers: { "content-type": "application/json" },
      }),
    );

    const allowedByOperation = await executeTool(
      findTool(createInfomaniakOpenClawTools({ config: { allowedOperations: ["kDriveGetFilesInDirectoryV3"] } }), "infomaniak_workflow_describe"),
      { domain: "kdrive", action: "listDirectory" },
    );
    const emptyOperationIds = await executeTool(
      findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["newsletter"] } }), "infomaniak_workflow_list"),
      { domain: "newsletter", mutating: false },
    );
    const mutationResult = await executeTool(
      findTool(
        createInfomaniakOpenClawTools({
          fetch: fetchMock,
          config: { blockMutating: false, allowedOperations: ["kDriveCreateDirectoryV3"] },
        }),
        "infomaniak_workflow_run",
      ),
      {
        domain: "kdrive",
        action: "createDirectory",
        input: { drive_id: 3024749, file_id: 5, body: { name: "Docs" } },
        confirm_mutating: true,
      },
    );

    expect(allowedByOperation.action).toEqual(expect.objectContaining({ id: "kdrive/listDirectory" }));
    expect(emptyOperationIds.actions).toEqual(expect.arrayContaining([expect.objectContaining({ id: "newsletter/discoverNewsletterDomain", operationIds: [] })]));
    expect(mutationResult).toEqual({
      action: expect.objectContaining({ id: "kdrive/createDirectory" }),
      result: { created: true },
    });
    expect(fetchMock.mock.calls[0]?.[0]).toBe("https://api.infomaniak.com/3/drive/3024749/files/5/directory");

    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedOperations: ["NewsletterShowDomain"] } }), "infomaniak_workflow_describe"),
        { domain: "newsletter", action: "discoverNewsletterDomain" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { deniedOperations: ["kDriveGetFilesInDirectoryV3"] } }), "infomaniak_workflow_describe"),
        { domain: "kdrive", action: "listDirectory" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { allowedDomains: ["mail"] } }), "infomaniak_workflow_describe"),
        { domain: "kdrive", action: "listDirectory" },
      ),
    ).rejects.toThrow(/not allowed/);
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_workflow_describe"), {
        domain: "kdrive",
        action: "missing",
      }),
    ).rejects.toThrow(/Unknown Infomaniak workflow action/);
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_workflow_run"), {
        domain: "kdrive",
        action: "uploadFile",
        confirm_mutating: true,
      }),
    ).rejects.toThrow(/blocked by plugin config/);
    await expect(
      executeTool(
        findTool(createInfomaniakOpenClawTools({ config: { blockMutating: false } }), "infomaniak_workflow_run"),
        { domain: "kdrive", action: "uploadFile" },
      ),
    ).rejects.toThrow(/confirm_mutating=true/);
    await expect(findTool(createInfomaniakOpenClawTools(), "infomaniak_workflow_describe").execute("bad-call", undefined)).rejects.toThrow(
      /domain is required/,
    );
    await expect(
      executeTool(findTool(createInfomaniakOpenClawTools(), "infomaniak_workflow_describe"), {
        domain: "kdrive",
      }),
    ).rejects.toThrow(/action is required/);
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

  it("omits authorization when the configured token environment variable is absent", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ settings: true }), {
        headers: { "content-type": "application/json" },
      }),
    );
    delete process.env.LIQUID_POTASSIUM_MISSING_TOKEN;
    const tools = createInfomaniakOpenClawTools({
      fetch: fetchMock,
      config: {
        tokenEnvName: "LIQUID_POTASSIUM_MISSING_TOKEN",
        allowedOperations: ["get_1_kmeet_rooms_room_id_settings"],
      },
    });

    await executeTool(findTool(tools, "infomaniak_call"), {
      operation_id: "get_1_kmeet_rooms_room_id_settings",
      path: { room_id: "room-1" },
    });

    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).has("authorization")).toBe(false);
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

  it("rejects incorrectly typed Mail search options before fetch", async () => {
    const fetchMock = vi.fn<typeof fetch>();
    const tool = findTool(createInfomaniakOpenClawTools({ fetch: fetchMock, config: { allowedDomains: ["mail"] } }), "infomaniak_mail_application");
    for (const [key, value] of [["search_text", 4], ["search_everywhere", "true"], ["search_attachments", "true"], ["compact", "true"]] as const) {
      await expect(executeTool(tool, { action: "listThreads", mailbox_uuid: "box", folder_id: "inbox", [key]: value })).rejects.toThrow(key);
    }
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns compact Mail pages only when explicitly requested and keeps policy enforcement", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify({ result: "success", data: {
      threads: Array.from({ length: 12 }, (_, n) => ({ messages: [{ uid: String(n), subject: "sample", body: "private" }] })),
      current_offset: 0, thread_mode: "off", resource_next: null, total_messages_count: 12,
    } }), { headers: { "content-type": "application/json" } }));
    const tool = findTool(createInfomaniakOpenClawTools({ fetch: fetchMock, config: { allowedDomains: ["mail"] } }), "infomaniak_mail_application");
    const result = await executeTool(tool, { action: "listThreads", mailbox_uuid: "box", folder_id: "inbox", thread_mode: "off", compact: true });
    expect(result.result).toMatchObject({ data: { next_offset: 10, messages: Array.from({ length: 10 }, (_, n) => ({ uid: String(n), subject: "sample" })) } });
    expect(JSON.stringify(result)).not.toContain("private");
    await expect(executeTool(tool, { action: "listThreads", mailbox_uuid: "box", folder_id: "inbox", compact: true })).rejects.toThrow(/thread_mode off/);
    const denied = findTool(createInfomaniakOpenClawTools({ fetch: fetchMock, config: { deniedOperations: ["MailApplication/ListThreads"] } }), "infomaniak_mail_application");
    await expect(executeTool(denied, { action: "listThreads", mailbox_uuid: "box", folder_id: "inbox", thread_mode: "off", compact: true })).rejects.toThrow(/not allowed/);
    expect(fetchMock).toHaveBeenCalledTimes(1);
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
