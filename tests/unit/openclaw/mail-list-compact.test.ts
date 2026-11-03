import { describe, expect, it } from "vitest";
import { compactMailThreadPage } from "../../../src/openclaw/mail-list-compact.js";

const item = (n: number) => ({ messages: [{ uid: String(n), subject: "sample", body: "private body", preview: "private preview", flagged: false }] });
const page = (count: number, next: unknown = null) => ({ result: "success", data: { threads: Array.from({ length: count }, (_, n) => item(n)), current_offset: 20, thread_mode: "off", total_messages_count: 70, resource_next: next } });

describe("compact Mail listing", () => {
  it("limits output, strips body and supplies a resume offset without losing records", () => {
    const result = compactMailThreadPage(page(15)) as { data: { messages: unknown[]; next_offset: number } };
    expect(result.data.messages).toHaveLength(10);
    expect(result.data.messages[0]).toEqual({ uid: "0", subject: "sample", flagged: false });
    expect(result.data.next_offset).toBe(30);
  });
  it("uses the server continuation or reports the end", () => {
    expect(compactMailThreadPage(page(2, "/api/mail/x?offset=22"))).toMatchObject({ data: { next_offset: 22 } });
    expect(compactMailThreadPage(page(0))).toMatchObject({ data: { next_offset: null } });
    expect(compactMailThreadPage({ result: "success", data: { threads: [], current_offset: 0, thread_mode: "off", resource_next: null } })).toMatchObject({ data: { total_messages_count: null } });
  });
  it("walks successive pages without gaps and rejects discontinuous server offsets", () => {
    const first = compactMailThreadPage(page(2, "/api/mail/x?offset=22")) as { data: { next_offset: number } };
    const second = page(1, null);
    second.data.current_offset = first.data.next_offset;
    expect(compactMailThreadPage(second)).toMatchObject({ data: { current_offset: 22, next_offset: null } });
    expect(() => compactMailThreadPage(page(2, "/api/mail/x?offset=70"))).toThrow(/discontinuous/);
    expect(() => compactMailThreadPage(page(1), 0)).toThrow(/offset does not match/);
    expect(compactMailThreadPage(page(1), 20)).toMatchObject({ data: { current_offset: 20 } });
  });
  it("validates server continuations even when a page is locally capped", () => {
    expect(() => compactMailThreadPage(page(15, "/api/mail/x?offset=70"))).toThrow(/discontinuous/);
    expect(() => compactMailThreadPage(page(15, {}))).toThrow(/continuation/);
    expect(compactMailThreadPage(page(15, "/api/mail/x?offset=35"))).toMatchObject({ data: { next_offset: 30 } });
    const overflow = page(15);
    overflow.data.current_offset = Number.MAX_SAFE_INTEGER - 5;
    expect(() => compactMailThreadPage(overflow)).toThrow(/offset/);
  });
  it("filters nested data and requires a usable identifier", () => {
    const input = page(1);
    input.data.threads[0] = { messages: [{ uid: "1", subject: "sample", body: "private body", preview: "private preview", flagged: false, from: { name: "Sender", email: "sender@example.test", body: "private nested body" }, to: [{ name: "Recipient", email: "recipient@example.test", body: "private nested body" }] }] } as unknown as typeof input.data.threads[0];
    const result = compactMailThreadPage(input);
    expect(result).toMatchObject({ data: { messages: [{ from: { name: "Sender", email: "sender@example.test" }, to: [{ name: "Recipient", email: "recipient@example.test" }] }] } });
    expect(JSON.stringify(result)).not.toContain("private");
    expect(compactMailThreadPage({ result: "success", data: { current_offset: 0, thread_mode: "off", resource_next: null, threads: [{ messages: [{ resource: "/message/1", from: "person@example.test" }] }] } })).toMatchObject({ data: { messages: [{ resource: "/message/1", from: "person@example.test" }] } });
    expect(() => compactMailThreadPage({ result: "success", data: { current_offset: 0, thread_mode: "off", resource_next: null, threads: [{ messages: [{ resource: "", subject: "no id" }] }] } })).toThrow(/identifier/);
    expect(() => compactMailThreadPage({ result: "success", data: { current_offset: 0, thread_mode: "off", resource_next: null, threads: [{ messages: [{ subject: "unidentifiable" }] }] } })).toThrow(/identifier/);
  });
  it("rejects malformed or ambiguous pages without leaking their content", () => {
    for (const invalid of [null, { result: "error", data: {} }, { result: "success", data: { threads: [], current_offset: -1, thread_mode: "off" } }, { result: "success", data: { threads: [{}], current_offset: 0, thread_mode: "off" } }, { result: "success", data: { threads: [], current_offset: 0, thread_mode: "off" } }, page(1, {}), page(1, "http://["), page(1, "/api/mail/x?offset=20"), page(1, "/api/mail/x?foo=1")]) {
      expect(() => compactMailThreadPage(invalid)).toThrow();
    }
  });
});
