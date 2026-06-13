import { describe, expect, it, vi } from "vitest";

import { createInfomaniakClient, InfomaniakError } from "../../../src/index.js";

describe("mail application client", () => {
  it("builds mailbox discovery, folder, thread, quota, and my kSuite requests", async () => {
    const abort = new AbortController();
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ result: "success", data: [] }));
    const client = createInfomaniakClient({
      baseUrl: "https://api.example.test",
      fetch: fetchMock,
      mailApplicationBaseUrl: "https://mail.example.test",
      token: "secret",
    });

    await client.mail.application.listUserMailboxes({ headers: { "x-mail": "yes" }, signal: abort.signal });
    await client.mail.application.listFolders("mailbox-uuid", { includedResources: null });
    await client.mail.application.listThreads("mailbox-uuid", "inbox");
    await client.mail.application.listThreads("mailbox-uuid", "inbox", {
      filter: "unseen",
      includedResources: "emoji_reactions_per_message",
      offset: 10,
      threadMode: "off",
    });
    await client.mail.application.getMailboxQuota("opencow", 497445, { unit: "MB" });
    await client.mail.application.currentMyKSuite({ includedResources: "mail" });

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://mail.example.test/api/mailbox?with=unseen%2Caliases",
      "https://mail.example.test/api/mail/mailbox-uuid/folder",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message?offset=0&thread=on&with=emoji_reactions_per_message",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message?offset=10&thread=off&filters=unseen&with=emoji_reactions_per_message",
      "https://mail.example.test/api/mailbox/quotas?mailbox=opencow&product_id=497445&unit=MB",
      "https://api.example.test/1/my_ksuite/current?with=mail",
    ]);
    expect(fetchMock.mock.calls.map(([, init]) => init?.method)).toEqual(["GET", "GET", "GET", "GET", "GET", "GET"]);
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("authorization")).toBe("Bearer secret");
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("x-mail")).toBe("yes");
    expect(fetchMock.mock.calls[0]?.[1]?.signal).toBe(abort.signal);
  });

  it("reads returned message resources and rejects resources outside the mail API", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ result: "success", data: { subject: "Hello" } }));
    const client = createInfomaniakClient({
      fetch: fetchMock,
      mailApplicationBaseUrl: "https://mail.example.test",
    });

    await client.mail.application.getMessage("/api/mail/mailbox-uuid/folder/inbox/message/42");
    await client.mail.application.getMessage("https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message/43", {
      includedResources: null,
      preferredFormat: "text",
    });

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message/42?prefered_format=html&with=auto_uncrypt%2Crecipient_provider_source%2Cemoji_reactions_per_message",
      "https://mail.example.test/api/mail/mailbox-uuid/folder/inbox/message/43?prefered_format=text",
    ]);
    expect(() => client.mail.application.getMessage("https://evil.example.test/api/mail/mailbox-uuid/message/44")).toThrow(InfomaniakError);
    expect(() => client.mail.application.getMessage("/api/not-mail/message/44")).toThrow(/Mail application resource paths/);
  });

  it("builds draft, schedule, cancel, and move requests", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ result: "success", data: {} }));
    const client = createInfomaniakClient({
      fetch: fetchMock,
      mailApplicationBaseUrl: "https://mail.example.test",
      token: "secret",
    });

    await client.mail.application.createDraft("mailbox-uuid", {
      body: "<p>Hello</p>",
      to: [{ email: "recipient@example.com", name: "Recipient" }],
    });
    await client.mail.application.updateDraft("mailbox-uuid", "draft-uuid", {
      action: null,
      ackRequest: true,
      attachments: [{ id: "attachment" }],
      bcc: [{ email: "bcc@example.com" }],
      body: "Plain text",
      cc: [{ email: "cc@example.com" }],
      mimeType: "text/plain",
      priority: "high",
      subject: "Updated",
      to: [{ email: "recipient@example.com" }],
    });
    await client.mail.application.getDraft("mailbox-uuid", "draft-uuid");
    await client.mail.application.deleteDraft("mailbox-uuid", "draft-uuid");
    await client.mail.application.scheduleDraft("/api/mail/mailbox-uuid/draft/draft-uuid", "2026-05-10T08:00:00+02:00");
    await client.mail.application.deleteSchedule("/api/mail/mailbox-uuid/draft/draft-uuid/schedule");
    await client.mail.application.cancelSend("/api/mail/mailbox-uuid/draft/draft-uuid/cancel");
    await client.mail.application.moveMessages("mailbox-uuid", {
      to: "archive",
      uids: ["31@inbox", "32@inbox"],
    });

    expect(fetchMock.mock.calls.map(([url]) => url)).toEqual([
      "https://mail.example.test/api/mail/mailbox-uuid/draft",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/schedule",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/schedule",
      "https://mail.example.test/api/mail/mailbox-uuid/draft/draft-uuid/cancel",
      "https://mail.example.test/api/mail/mailbox-uuid/message/move",
    ]);
    expect(fetchMock.mock.calls.map(([, init]) => init?.method)).toEqual(["POST", "PUT", "GET", "DELETE", "PUT", "DELETE", "PUT", "POST"]);

    expect(jsonBodyAt(fetchMock, 0)).toEqual({
      action: "save",
      ack_request: false,
      attachments: [],
      body: "<p>Hello</p>",
      mime_type: "text/html",
      priority: "normal",
      subject: "",
      to: [{ email: "recipient@example.com", name: "Recipient" }],
    });
    expect(jsonBodyAt(fetchMock, 1)).toEqual({
      ack_request: true,
      attachments: [{ id: "attachment" }],
      bcc: [{ email: "bcc@example.com" }],
      body: "Plain text",
      cc: [{ email: "cc@example.com" }],
      mime_type: "text/plain",
      priority: "high",
      subject: "Updated",
      to: [{ email: "recipient@example.com" }],
    });
    expect(jsonBodyAt(fetchMock, 4)).toEqual({ schedule_date: "2026-05-10T08:00:00+02:00" });
    expect(jsonBodyAt(fetchMock, 7)).toEqual({ to: "archive", uids: ["31@inbox", "32@inbox"] });
    expect((fetchMock.mock.calls[0]?.[1]?.headers as Headers).get("content-type")).toBe("application/json");
  });
});

function jsonResponse(value: unknown): Response {
  return new Response(JSON.stringify(value), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

function jsonBodyAt(fetchMock: ReturnType<typeof vi.fn<typeof fetch>>, index: number): unknown {
  const body = fetchMock.mock.calls[index]?.[1]?.body;
  if (typeof body !== "string") {
    throw new Error(`Expected JSON string body at fetch call ${index}.`);
  }
  return JSON.parse(body) as unknown;
}
