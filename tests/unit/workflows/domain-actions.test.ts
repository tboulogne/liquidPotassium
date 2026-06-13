import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { describe, expect, it, vi } from "vitest";

import {
  createInfomaniakClient,
  describeDomainAction,
  listDomainActions,
  listDomains,
  runDomainAction,
  type DomainWorkflowRuntimeClient,
  type MailApplicationClient,
  type OperationRequest,
} from "../../../src/index.js";

describe("domain workflow actions", () => {
  it("lists and describes SDK workflow actions for every domain", () => {
    const actions = listDomainActions();
    const domainsWithActions = new Set(actions.map((action) => action.domain));
    for (const domain of listDomains()) {
      expect(domainsWithActions.has(domain.domain), domain.domain).toBe(true);
    }

    expect(describeDomainAction("kdrive", "listAccessibleDrives")).toMatchObject({
      id: "kdrive/listAccessibleDrives",
      mutating: false,
      operationIds: ["kDriveAccessiblesDrivesV2"],
      input: expect.arrayContaining([expect.objectContaining({ name: "account_id", required: true })]),
    });
    expect(describeDomainAction("kdrive", "createDirectory")).toMatchObject({
      mutating: true,
      operationIds: ["kDriveCreateDirectoryV3"],
    });
    expect(listDomainActions({ domain: "kdrive", mutating: true }).map((action) => action.action)).toContain("uploadFile");
    expect(listDomainActions({ domain: "kdrive", mutating: false }).map((action) => action.action)).toContain("listDirectory");
    expect(() => describeDomainAction("missing", "list")).toThrow(/Unknown Infomaniak workflow domain/);
    expect(() => describeDomainAction("kdrive", "missing")).toThrow(/Unknown Infomaniak workflow action/);
  });

  it("runs migration-critical operation-backed actions with typed request shapes", async () => {
    const client = createMockWorkflowRuntime();
    const binary = new Uint8Array([1, 2, 3]);
    const actionInputs: Array<[string, string, Record<string, unknown>]> = [
      ["account", "listAccounts", {}],
      ["account", "getAccount", { account_id: 42 }],
      ["account", "listAccountProducts", { account_id: 42, with: "resources", filter: { service_names: ["mail"] } }],
      ["ai", "listProducts", {}],
      ["ai", "listModels", {}],
      ["ai", "createChatCompletion", { product_id: 77, body: { model: "test", messages: [] } }],
      ["ai", "createEmbedding", { product_id: 77, body: { model: "test", input: "hello" } }],
      ["core", "listProducts", {}],
      ["core", "currentMyKSuite", { with: "mail" }],
      ["core", "listTasks", {}],
      ["core", "getTask", { task_uuid: "task-uuid" }],
      ["domains", "listDomains", { account_id: 42, search: "example" }],
      ["domains", "getDomain", { domain: "example.com" }],
      ["domains", "listZones", { domain: "example.com", return: "full" }],
      ["domains", "listDnsRecords", { zone: "example.com", with: "source", filter: { type: "A" }, search: "www" }],
      ["etickets", "listDates", { with: "event" }],
      ["etickets", "getReservation", { reservation_id: 123, with: "tickets" }],
      ["etickets", "editTicket", { body: { ticket_id: 456 } }],
      ["kmeet", "createRoom", { body: { title: "Planning" } }],
      ["kmeet", "getRoomSettings", { room_id: "room-1" }],
      ["kdrive", "listAccessibleDrives", { account_id: 42, with: "capabilities" }],
      ["kdrive", "getUserPreferences", {}],
      ["kdrive", "getDrive", { drive_id: 3024749 }],
      ["kdrive", "getFile", { drive_id: 3024749, file_id: 5, with: "path" }],
      ["kdrive", "listDirectory", { drive_id: 3024749, file_id: 5, limit: 10, with: "path" }],
      ["kdrive", "resolveChildByName", { drive_id: 3024749, name: "Private", with: "capabilities" }],
      ["kdrive", "createDirectory", { drive_id: 3024749, file_id: 5, body: { name: "Docs" }, with: "path" }],
      ["kdrive", "createDefaultFile", { drive_id: 3024749, file_id: 5, body: { name: "note", type: "txt" } }],
      ["kdrive", "uploadFile", { drive_id: 3024749, total_size: 3, file_name: "a.txt", directory_id: 5, conflict: "error", body: binary }],
      ["newsletter", "showDomain", { domain: 9, with: "stats" }],
      ["newsletter", "listCampaigns", { domain: 9, with: "subject", filter: { status: "draft" } }],
      ["newsletter", "listSubscribers", { domain: 9, filter: { email: "a@example.com" } }],
      ["newsletter", "createSubscriber", { domain: 9, body: { email: "a@example.com" } }],
      ["profile", "getProfile", { with: "emails" }],
      ["profile", "listEmails", {}],
      ["profile", "listPhones", {}],
      ["publicCloud", "listPublicClouds", { account_id: 42, with: "projects", filter: { status: "active" } }],
      ["publicCloud", "listProjects", { public_cloud_id: 88, with: "quota", filter: { name: "demo" } }],
      ["publicCloud", "getProject", { public_cloud_id: 88, public_cloud_project_id: 99, with: "openstack" }],
      ["radio", "listProducts", { account_id: 42, with: "stations", search: "studio" }],
      ["radio", "getProduct", { radio_product_id: 11, with: "stations" }],
      ["radio", "listStations", { radio_product_id: 11, with: "streams", search: "main" }],
      ["radio", "listStreams", { radio_product_id: 11, station_id: 22, with: "stats" }],
      ["swissBackup", "listBackups", { account_id: 42 }],
      ["swissBackup", "getBackup", { swiss_backup_id: 33 }],
      ["swissBackup", "listSlots", { swiss_backup_id: 33 }],
      ["kchat", "listTeams", {}],
      ["kchat", "getTeamByName", { name: "moo" }],
      ["kchat", "getChannelByNameForTeamName", { team_name: "moo", channel_name: "town-square", include_deleted: false }],
      ["kchat", "createPost", { channel_id: "channel-1", message: "Hello", root_id: "root-1", set_online: true }],
      ["urlShortener", "listLinks", {}],
      ["urlShortener", "getQuota", {}],
      ["urlShortener", "createLink", { url: "https://example.com", expiration_date: 1_800_000_000 }],
      ["urlShortener", "updateExpiration", { short_url_code: "abc", expiration_date: 1_800_000_000 }],
      ["video", "listChannels", { with: "thumbnail" }],
      ["video", "getChannel", { channel: 44, with: "players" }],
      ["video", "listEvents", { channel: 44, account_id: 42 }],
      ["vod", "listChannels", {}],
      ["vod", "getChannel", { channel: 55 }],
      ["vod", "browseRoot", { channel: 55 }],
      ["vod", "listMedia", { channel: 55, with: "folder" }],
    ];

    for (const [domain, action, input] of actionInputs) {
      await runDomainAction(client, { domain, action, input });
    }

    expect(client.requestOperation).toHaveBeenCalledWith("kDriveAccessiblesDrivesV2", {
      query: { account_id: 42, with: "capabilities" },
    });
    expect(client.requestOperation).toHaveBeenCalledWith("kDriveGetFilesInDirectoryV3", {
      path: { drive_id: 3024749, file_id: 5 },
      query: { limit: 10, with: "path" },
    });
    expect(client.requestOperation).toHaveBeenCalledWith("kDriveGetSubFiledirectoryByFilenameV3", {
      path: { drive_id: 3024749, file_id: 1 },
      query: { name: "Private", with: "capabilities" },
    });
    expect(client.requestOperation).toHaveBeenCalledWith("kDriveUploadV3", {
      path: { drive_id: 3024749 },
      query: { total_size: 3, file_name: "a.txt", directory_id: 5, conflict: "error" },
      body: binary,
    });
    expect(client.requestOperation).toHaveBeenCalledWith("CreatePost", {
      query: { set_online: true },
      body: { channel_id: "channel-1", message: "Hello", root_id: "root-1" },
    });
    expect(client.requestOperation).toHaveBeenCalledWith("put_1_url_shortener_short_url_code", {
      path: { short_url_code: "abc" },
      body: { expiration_date: 1_800_000_000 },
    });
  });

  it("uploads kDrive files from absolute file paths", async () => {
    const client = createMockWorkflowRuntime();
    const directory = await mkdtemp(join(tmpdir(), "liquid-potassium-"));
    const filePath = join(directory, "note.txt");

    try {
      await writeFile(filePath, "hello");

      await runDomainAction(client, {
        domain: "kdrive",
        action: "uploadFile",
        input: { drive_id: 3024749, file_path: filePath, directory_path: "/Docs" },
      });
      await runDomainAction(client, {
        domain: "kdrive",
        action: "uploadFile",
        input: { drive_id: 3024749, file_path: filePath, total_size: 5, file_name: "remote.txt" },
      });

      const firstUpload = client.requestOperation.mock.calls.find((call) => call[0] === "kDriveUploadV3")?.[1];
      const secondUpload = client.requestOperation.mock.calls.filter((call) => call[0] === "kDriveUploadV3")[1]?.[1];
      expect(firstUpload).toEqual({
        path: { drive_id: 3024749 },
        query: { total_size: 5, file_name: "note.txt", directory_path: "/Docs" },
        body: expect.any(Uint8Array),
      });
      expect([...(firstUpload?.body as Uint8Array)]).toEqual([104, 101, 108, 108, 111]);
      expect(secondUpload).toEqual({
        path: { drive_id: 3024749 },
        query: { total_size: 5, file_name: "remote.txt" },
        body: expect.any(Uint8Array),
      });
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  it("delegates mailbox actions to the Mail application client", async () => {
    const client = createMockWorkflowRuntime();

    await runDomainAction(client, { domain: "mail", action: "listUserMailboxes", input: { with: "unseen" } });
    await runDomainAction(client, { domain: "mail", action: "listFolders", input: { mailbox_uuid: "mailbox-uuid", with: "ik-static" } });
    await runDomainAction(client, {
      domain: "mail",
      action: "listThreads",
      input: { mailbox_uuid: "mailbox-uuid", folder_id: "inbox", filter: "unseen", thread_mode: "off", offset: 0 },
    });
    await runDomainAction(client, { domain: "mail", action: "getMessage", input: { message_resource: "/api/mail/x", preferred_format: "text" } });
    await runDomainAction(client, {
      domain: "mail",
      action: "createDraft",
      input: { mailbox_uuid: "mailbox-uuid", payload: { body: "Hello", to: [{ email: "a@example.com" }] } },
    });
    await runDomainAction(client, {
      domain: "mail",
      action: "moveMessages",
      input: { mailbox_uuid: "mailbox-uuid", payload: { uids: ["1@inbox"], to: "archive" } },
    });

    expect(client.mail.application.listUserMailboxes).toHaveBeenCalledWith({ includedResources: "unseen" });
    expect(client.mail.application.listFolders).toHaveBeenCalledWith("mailbox-uuid", { includedResources: "ik-static" });
    expect(client.mail.application.listThreads).toHaveBeenCalledWith("mailbox-uuid", "inbox", {
      filter: "unseen",
      threadMode: "off",
      offset: 0,
    });
    expect(client.mail.application.getMessage).toHaveBeenCalledWith("/api/mail/x", { preferredFormat: "text" });
    expect(client.mail.application.createDraft).toHaveBeenCalledWith("mailbox-uuid", { body: "Hello", to: [{ email: "a@example.com" }] }, {});
    expect(client.mail.application.moveMessages).toHaveBeenCalledWith("mailbox-uuid", { uids: ["1@inbox"], to: "archive" }, {});
  });

  it("omits absent optional action fields and propagates abort signals", async () => {
    const client = createMockWorkflowRuntime();
    const abort = new AbortController();

    await runDomainAction(client, { domain: "kdrive", action: "getDrive", input: { drive_id: 3024749 }, signal: abort.signal });
    await runDomainAction(client, { domain: "account", action: "listAccountProducts", input: { account_id: 42, filter: "bad" } });
    await runDomainAction(client, { domain: "kdrive", action: "listDirectory", input: { drive_id: 3024749 } });
    await runDomainAction(client, { domain: "mail", action: "listUserMailboxes", signal: abort.signal });
    await runDomainAction(client, { domain: "mail", action: "listThreads", input: { mailbox_uuid: "mailbox-uuid", folder_id: "inbox" } });
    await runDomainAction(client, { domain: "mail", action: "getMessage", input: { message_resource: "/api/mail/x" } });
    await runDomainAction(client, { domain: "mail", action: "createDraft", input: { mailbox_uuid: "mailbox-uuid", payload: { body: "Hello", to: [] } }, signal: abort.signal });
    await runDomainAction(client, { domain: "kchat", action: "getChannelByNameForTeamName", input: { team_name: "moo", channel_name: "town-square" } });
    await runDomainAction(client, { domain: "kchat", action: "createPost", input: { channel_id: "channel-1", message: "Hello", set_online: "yes" } });

    expect(client.requestOperation).toHaveBeenCalledWith("kDriveGetDriveInformationV2", {
      path: { drive_id: 3024749 },
      signal: abort.signal,
    });
    expect(client.requestOperation).toHaveBeenCalledWith("Core/ResourcesListAccountsProducts", {
      path: { account_id: 42 },
      query: {},
    });
    expect(client.requestOperation).toHaveBeenCalledWith("kDriveGetFilesInDirectoryV3", {
      path: { drive_id: 3024749, file_id: 1 },
      query: {},
    });
    expect(client.requestOperation).toHaveBeenCalledWith("GetChannelByNameForTeamName", {
      path: { team_name: "moo", channel_name: "town-square" },
      query: {},
    });
    expect(client.requestOperation).toHaveBeenCalledWith("CreatePost", {
      query: {},
      body: { channel_id: "channel-1", message: "Hello" },
    });
    expect(client.mail.application.listUserMailboxes).toHaveBeenCalledWith({ signal: abort.signal });
    expect(client.mail.application.listThreads).toHaveBeenCalledWith("mailbox-uuid", "inbox", {});
    expect(client.mail.application.getMessage).toHaveBeenCalledWith("/api/mail/x", {});
    expect(client.mail.application.createDraft).toHaveBeenCalledWith("mailbox-uuid", { body: "Hello", to: [] }, { signal: abort.signal });
  });

  it("runs custom discovery and Private-folder workflows", async () => {
    const client = createMockWorkflowRuntime();
    const abort = new AbortController();

    const privateFolder = await runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 3024749 } });
    client.requestOperation.mockResolvedValueOnce([{ id: 6, name: "Private" }]);
    const privateFolderFromArray = await runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 3024749 } });
    client.requestOperation.mockResolvedValueOnce({ data: { results: [{ id: 7, name: "Private" }] } });
    const privateFolderFromNestedResults = await runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 3024749 } });
    const kdriveDiscovery = await runDomainAction(client, {
      domain: "kdrive",
      action: "discoverKdriveDrive",
      input: { parents: { account_id: 42, ignored: true }, limit: 1 },
      signal: abort.signal,
    });
    const newsletterDiscovery = await runDomainAction(client, { domain: "newsletter", action: "discoverNewsletterDomain" });

    expect(privateFolder.result).toEqual({ id: 5, name: "Private" });
    expect(privateFolderFromArray.result).toEqual({ id: 6, name: "Private" });
    expect(privateFolderFromNestedResults.result).toEqual({ id: 7, name: "Private" });
    expect(kdriveDiscovery.result).toEqual({ resources: [], suggestions: [], recipe: null });
    expect(newsletterDiscovery.result).toEqual({ resources: [], suggestions: [], recipe: null });
    expect(client.discovery.discover).toHaveBeenCalledWith({
      kind: "kdriveDrive",
      parents: { account_id: 42 },
      limit: 1,
      signal: abort.signal,
    });
    expect(client.discovery.discover).toHaveBeenCalledWith({
      kind: "newsletterDomain",
    });
  });

  it("fails closed on invalid workflow inputs", async () => {
    const client = createMockWorkflowRuntime();

    await expect(runDomainAction(client, { domain: "kdrive", action: "getDrive", input: {} })).rejects.toThrow(/drive_id must be an integer/);
    await expect(runDomainAction(client, { domain: "kdrive", action: "resolveChildByName", input: { drive_id: 1, name: " " } })).rejects.toThrow(
      /name is required/,
    );
    await expect(runDomainAction(client, { domain: "kdrive", action: "createDirectory", input: { drive_id: 1, file_id: 1, body: "bad" } })).rejects.toThrow(
      /body must be an object/,
    );
    await expect(runDomainAction(client, { domain: "kdrive", action: "uploadFile", input: { drive_id: 1, total_size: 10 } })).rejects.toThrow(
      /body or file_path is required/,
    );
    await expect(runDomainAction(client, { domain: "kdrive", action: "uploadFile", input: { drive_id: 1, file_path: "relative.txt" } })).rejects.toThrow(
      /file_path must be absolute/,
    );
    await expect(runDomainAction(client, { domain: "kdrive", action: "discoverKdriveDrive", input: { parents: "bad" } })).rejects.toThrow(
      /parents must be an object/,
    );

    client.requestOperation.mockResolvedValueOnce({ data: [{ id: 5, label: "Not Private" }] });
    await expect(runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 1 } })).rejects.toThrow(/Private/);
    client.requestOperation.mockResolvedValueOnce({ data: {} });
    await expect(runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 1 } })).rejects.toThrow(/Private/);
    client.requestOperation.mockResolvedValueOnce(null);
    await expect(runDomainAction(client, { domain: "kdrive", action: "findPrivateFolder", input: { drive_id: 1 } })).rejects.toThrow(/Private/);
  });

  it("fails closed for invalid kDrive upload file paths", async () => {
    const client = createMockWorkflowRuntime();
    const directory = await mkdtemp(join(tmpdir(), "liquid-potassium-"));
    const filePath = join(directory, "note.txt");

    try {
      await writeFile(filePath, "hello");

      await expect(
        runDomainAction(client, { domain: "kdrive", action: "uploadFile", input: { drive_id: 1, file_path: directory } }),
      ).rejects.toThrow(/regular file/);
      await expect(
        runDomainAction(client, { domain: "kdrive", action: "uploadFile", input: { drive_id: 1, file_path: filePath, total_size: 4 } }),
      ).rejects.toThrow(/total_size must match/);
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });

  it("exposes workflows on createInfomaniakClient", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ data: [] }));
    const client = createInfomaniakClient({ token: "secret", fetch: fetchMock });

    const result = await client.workflows.run({
      domain: "kdrive",
      action: "listAccessibleDrives",
      input: { account_id: 42 },
    });

    expect(result.action.id).toBe("kdrive/listAccessibleDrives");
    expect(fetchMock.mock.calls[0]?.[0]).toBe("https://api.infomaniak.com/2/drive?account_id=42");
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("authorization")).toBe("Bearer secret");
    expect(client.workflows.describeAction("urlShortener", "createLink").mutating).toBe(true);
    expect(client.workflows.listActions({ domain: "mail" }).map((action) => action.action)).toContain("getMessage");
  });
});

function createMockWorkflowRuntime() {
  const mailApplication = {
    listUserMailboxes: vi.fn<MailApplicationClient["listUserMailboxes"]>().mockResolvedValue({ result: "success", data: [] }),
    listFolders: vi.fn<MailApplicationClient["listFolders"]>().mockResolvedValue({ result: "success", data: [] }),
    listThreads: vi.fn<MailApplicationClient["listThreads"]>().mockResolvedValue({ result: "success", data: {} }),
    getMessage: vi.fn<MailApplicationClient["getMessage"]>().mockResolvedValue({ result: "success", data: {} }),
    getMailboxQuota: vi.fn<MailApplicationClient["getMailboxQuota"]>().mockResolvedValue({ result: "success", data: {} }),
    createDraft: vi.fn<MailApplicationClient["createDraft"]>().mockResolvedValue({ result: "success", data: {} }),
    updateDraft: vi.fn<MailApplicationClient["updateDraft"]>().mockResolvedValue({ result: "success", data: {} }),
    getDraft: vi.fn<MailApplicationClient["getDraft"]>().mockResolvedValue({ result: "success", data: {} }),
    deleteDraft: vi.fn<MailApplicationClient["deleteDraft"]>().mockResolvedValue({ result: "success", data: {} }),
    scheduleDraft: vi.fn<MailApplicationClient["scheduleDraft"]>().mockResolvedValue({ result: "success", data: {} }),
    deleteSchedule: vi.fn<MailApplicationClient["deleteSchedule"]>().mockResolvedValue({ result: "success", data: {} }),
    cancelSend: vi.fn<MailApplicationClient["cancelSend"]>().mockResolvedValue({ result: "success", data: {} }),
    moveMessages: vi.fn<MailApplicationClient["moveMessages"]>().mockResolvedValue({ result: "success", data: {} }),
    currentMyKSuite: vi.fn<MailApplicationClient["currentMyKSuite"]>().mockResolvedValue({ result: "success", data: {} }),
  };
  return {
    requestOperation: vi.fn<DomainWorkflowRuntimeClient["requestOperation"]>().mockImplementation(async (operationId: string, _request?: OperationRequest) => {
      if (operationId === "kDriveGetFilesInDirectoryV3") {
        return { data: [{ id: 4, name: 44 }, { id: 5, name: "Private" }, "ignored"] };
      }
      return { operationId };
    }),
    discovery: {
      discover: vi.fn().mockResolvedValue({ resources: [], suggestions: [], recipe: null }),
    },
    mail: { application: mailApplication },
  } satisfies DomainWorkflowRuntimeClient;
}

function jsonResponse(value: unknown): Response {
  return new Response(JSON.stringify(value), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
