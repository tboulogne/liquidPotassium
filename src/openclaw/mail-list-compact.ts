/** Project one Mail API page for agent consumption. This is not anonymization. */
export function compactMailThreadPage(value: unknown, requestedOffset?: number): unknown {
  const response = record(value);
  const data = record(response.data);
  if (response.result !== "success" || !Array.isArray(data.threads) || !Number.isSafeInteger(data.current_offset) || (data.current_offset as number) < 0 || data.thread_mode !== "off") {
    throw new Error("Compact Mail listing requires a successful individual-message page with a valid offset.");
  }
  const offset = data.current_offset as number;
  if (requestedOffset !== undefined && offset !== requestedOffset) throw new Error("Mail page offset does not match the request.");
  const threads = data.threads as unknown[];
  const messages = threads.slice(0, 10).map((entry) => {
    const thread = record(entry);
    if (!Array.isArray(thread.messages) || thread.messages.length !== 1) {
      throw new Error("Compact Mail listing requires exactly one message per thread.");
    }
    const message = record(thread.messages[0]);
    if (!(typeof message.uid === "string" && message.uid.length > 0) && !(typeof message.resource === "string" && message.resource.length > 0)) {
      throw new Error("Compact Mail message requires an identifier.");
    }
    const fields = ["uid", "resource", "folder_id", "date", "subject", "seen", "flagged", "has_attachments", "size"];
    const summary = Object.fromEntries(fields.filter((key) => ["string", "number", "boolean"].includes(typeof message[key])).map((key) => [key, message[key]]));
    for (const key of ["from", "to"]) {
      if (message[key] !== undefined) summary[key] = correspondents(message[key]);
    }
    return summary;
  });
  if (!("resource_next" in data) || data.resource_next === undefined) throw new Error("Mail page continuation is missing.");
  let serverNext: number | null = null;
  if (data.resource_next !== null && data.resource_next !== undefined && data.resource_next !== "") {
    if (typeof data.resource_next !== "string") throw new Error("Invalid Mail page continuation.");
    let next: URL;
    try { next = new URL(data.resource_next, "https://mail.invalid"); } catch { throw new Error("Invalid Mail page continuation."); }
    const nextValue = next.searchParams.get("offset");
    if (nextValue === null || !/^\d+$/.test(nextValue)) throw new Error("Invalid Mail page continuation offset.");
    serverNext = Number(nextValue);
    if (!Number.isSafeInteger(serverNext) || serverNext !== offset + threads.length || serverNext <= offset) throw new Error("Invalid or discontinuous Mail page continuation offset.");
  }
  const nextOffset = threads.length > messages.length ? offset + messages.length : serverNext;
  if (nextOffset !== null && !Number.isSafeInteger(nextOffset)) throw new Error("Invalid Mail page continuation offset.");
  return { result: "success", data: { messages, current_offset: offset, next_offset: nextOffset, total_messages_count: typeof data.total_messages_count === "number" ? data.total_messages_count : null, thread_mode: "off" } };
}

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid Mail page response.");
  return value as Record<string, unknown>;
}

// Never copy arbitrary nested objects: address fields are still personal data.
function correspondents(value: unknown): unknown {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(correspondents);
  const address = record(value);
  return Object.fromEntries(["name", "email"].filter((key) => typeof address[key] === "string").map((key) => [key, address[key]]));
}
