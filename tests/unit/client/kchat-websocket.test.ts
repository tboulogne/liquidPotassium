import { describe, expect, it, vi } from "vitest";

import {
  createInfomaniakClient,
  createKchatMattermostAuthFrame,
  createKchatWebSocketClient,
  InfomaniakError,
  normalizeKchatWebSocketPostEvent,
  resolveKchatWebSocketUrl,
  runKchatWebSocketConnection,
  type KchatWebSocketLike,
} from "../../../src/index.js";

const fixtureToken = "test";
const factoryToken = "factory";
const runToken = "run";

describe("kChat WebSocket client", () => {
  it("exposes kChat WebSocket helpers on the generated kChat domain client", async () => {
    EventTargetWebSocket.instances = [];
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async (url) => {
      if (String(url).endsWith("/api/v4/teams/name/main-team")) {
        return jsonResponse({ id: "team-123" });
      }
      if (String(url).endsWith("/api/v4/users/me")) {
        return jsonResponse({ id: "user-self" });
      }
      return jsonResponse({ auth: "kchat-key:signature" });
    });
    const client = createInfomaniakClient({
      token: async () => "placeholder-token",
      fetch: fetchMock,
      webSocket: EventTargetWebSocket,
    });
    expect(client.kchat.websocket.resolveUrl()).toBe(
      "wss://websocket.kchat.infomaniak.com/app/kchat-key?protocol=7&client=liquid-potassium&version=0.2.0&flash=false",
    );
    const posts: string[] = [];
    const abort = new AbortController();
    const connection = client.kchat.websocket.runConnection({
      teamName: "main-team",
      channelIds: ["channel-123"],
      signal: abort.signal,
      onPost(event) {
        posts.push(event.text);
        abort.abort();
      },
    });

    await waitImmediate();
    const socket = EventTargetWebSocket.instances[0]!;
    socket.emitMessage({
      event: "pusher:connection_established",
      data: JSON.stringify({ socket_id: "1.2", activity_timeout: 30 }),
    });
    await waitImmediate();
    socket.emitMessage({
      event: "posted",
      channel: "presence-teamUser.user-self",
      data: JSON.stringify({
        channel_name: "test",
        channel_id: "channel-123",
        sender_name: "alice",
        post: JSON.stringify({
          id: "post-123",
          channel_id: "channel-123",
          user_id: "user-123",
          message: "hello from client facade",
          create_at: 1710000000000,
        }),
      }),
    });
    await connection;

    expect(posts).toEqual(["hello from client facade"]);
    expect(socket.closed).toBe(true);
  });

  it("derives Echo and Mattermost WebSocket URLs", () => {
    expect(resolveKchatWebSocketUrl()).toBe(
      "wss://websocket.kchat.infomaniak.com/app/kchat-key?protocol=7&client=liquid-potassium&version=0.2.0&flash=false",
    );
    expect(resolveKchatWebSocketUrl({ host: "ws.example.test", appKey: "custom key" })).toBe(
      "wss://ws.example.test/app/custom%20key?protocol=7&client=liquid-potassium&version=0.2.0&flash=false",
    );
    expect(resolveKchatWebSocketUrl({ url: " ", host: " ", appKey: " " })).toBe(
      "wss://websocket.kchat.infomaniak.com/app/kchat-key?protocol=7&client=liquid-potassium&version=0.2.0&flash=false",
    );
    expect(resolveKchatWebSocketUrl({ protocol: "mattermost", apiBaseUrl: "http://mattermost.example.test/path?ignored=true" })).toBe(
      "ws://mattermost.example.test/api/v4/websocket",
    );
    expect(resolveKchatWebSocketUrl({ protocol: "mattermost", teamName: "main-team" })).toBe(
      "wss://main-team.kchat.infomaniak.com/api/v4/websocket",
    );
    expect(resolveKchatWebSocketUrl({ url: "wss://custom.example.test/socket" })).toBe("wss://custom.example.test/socket");
    expect(() => resolveKchatWebSocketUrl({ protocol: "mattermost" })).toThrow(InfomaniakError);
    expect(() => resolveKchatWebSocketUrl({ protocol: "mattermost", teamName: "Not Safe" })).toThrow(/DNS-safe/);
  });

  it("normalizes Mattermost and Echo posted events", () => {
    const normalized = normalizeKchatWebSocketPostEvent(
      {
        event: "posted",
        data: JSON.stringify({
          channel_display_name: "Test",
          channel_name: "test",
          channel_id: "channel-123",
          sender_name: "alice",
          team_id: "team-123",
          post: JSON.stringify({
            id: "post-123",
            create_at: 1710000000,
            channel_id: "channel-123",
            root_id: "root-123",
            user_id: "user-123",
            message: "hello over websocket",
          }),
        }),
      },
      { teamName: "main-team" },
    );

    expect(normalized).toMatchObject({
      id: "post-123",
      postId: "post-123",
      rootId: "root-123",
      timestamp: 1710000000000,
      text: "hello over websocket",
      channelId: "channel-123",
      channelName: "test",
      teamId: "team-123",
      teamDomain: "main-team",
      userId: "user-123",
      userName: "alice",
    });
    expect(normalizeKchatWebSocketPostEvent({ event: "hello" })).toBeUndefined();
    expect(normalizeKchatWebSocketPostEvent({ event: "posted", data: {} })).toBeUndefined();
    expect(normalizeKchatWebSocketPostEvent({ event: "posted", data: { post: "{}" } })).toBeUndefined();
    expect(
      normalizeKchatWebSocketPostEvent({
        event: "posted",
        broadcast: { channel_id: "broadcast-channel", team_id: "team-broadcast" },
        data: {
          channelDisplayName: "Display",
          teamDomain: "team-domain",
          senderName: "bob",
          post: {
            createAt: "1710000000000",
            message: "fallback id",
            post_id: "post-alt",
            rootId: "root-alt",
            teamId: "team-alt",
            userName: "bob-post",
          },
        },
      }),
    ).toMatchObject({
      id: "post-alt",
      channelId: "broadcast-channel",
      channelName: "Display",
      rootId: "root-alt",
      teamId: "team-alt",
      teamDomain: "team-domain",
      userName: "bob",
      timestamp: 1710000000000,
    });
    expect(
      normalizeKchatWebSocketPostEvent({
        event: "posted",
        data: {
          channelName: "display-only",
          post: {
            id: "post-display-only",
            message: "no channel id",
            userName: "post-user",
            create_at: "not-a-number",
          },
        },
      }),
    ).toMatchObject({
      id: "post-display-only",
      channelName: "display-only",
      text: "no channel id",
      userName: "post-user",
    });
    expect(
      normalizeKchatWebSocketPostEvent({
        event: "posted",
        data: {
          channel_id: "fallback-channel",
          post: {
            channel_id: "fallback-channel",
            message: "fallback id",
          },
        },
      }),
    ).toMatchObject({
      id: "fallback-channel:fallback id",
      text: "fallback id",
      channelId: "fallback-channel",
    });
    expect(normalizeKchatWebSocketPostEvent({ event: "posted", data: "not json" })).toBeUndefined();
    expect(normalizeKchatWebSocketPostEvent({ event: "posted", data: { post: { id: "post-no-channel", message: "missing channel" } } })).toBeUndefined();
  });

  it("authenticates and subscribes to the Infomaniak Echo socket", async () => {
    EventTargetWebSocket.instances = [];
    const fetchCalls: Array<{ url: string; method: string; body: string; authorization: string | null }> = [];
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async (url, init = {}) => {
      const headers = new Headers(init.headers);
      fetchCalls.push({
        url: String(url),
        method: init.method ?? "GET",
        body: String(init.body ?? ""),
        authorization: headers.get("authorization"),
      });
      if (String(url).endsWith("/api/v4/teams/name/main-team")) {
        return jsonResponse({ id: "team-123" });
      }
      if (String(url).endsWith("/api/v4/users/me")) {
        return jsonResponse({ id: "user-self" });
      }
      const body = new URLSearchParams(String(init.body ?? ""));
      return jsonResponse({
        auth: `kchat-key:${body.get("channel_name")}`,
        ...(body.get("channel_name")?.startsWith("presence-") ? { channel_data: JSON.stringify({ user_id: "user-self" }) } : {}),
      });
    });
    const frames: string[] = [];
    const subscriptions: string[] = [];
    const posts: string[] = [];
    const abort = new AbortController();
    const connection = runKchatWebSocketConnection({
      token: fixtureToken,
      fetch: fetchMock,
      webSocket: EventTargetWebSocket,
      teamName: "main-team",
      channelIds: ["channel-123"],
      ignoredUserNames: ["bot-user"],
      signal: abort.signal,
      onFrame(frame) {
        frames.push(frame.event ?? "");
      },
      onSubscribed(channelName) {
        subscriptions.push(channelName);
      },
      onPost(event) {
        posts.push(event.text);
        abort.abort();
      },
    });

    await waitImmediate();
    const socket = EventTargetWebSocket.instances[0]!;
    socket.emitMessage({
      event: "pusher:connection_established",
      data: JSON.stringify({ socket_id: "1.2" }),
    });
    socket.emitMessage({
      event: "pusher:connection_established",
      data: JSON.stringify({ socket_id: "1.2" }),
    });
    await waitImmediate();
    await waitImmediate();
    socket.emitMessage({ event: "pusher:ping", data: {} });
    socket.emitMessage({ event: "pusher_internal:subscription_succeeded", data: "{}" });
    socket.emitMessage({ event: "pusher:cache_miss", data: "{}" });
    socket.emitMessage({ event: "pusher_internal:subscription_succeeded", channel: "private-team.team-123", data: "{}" });
    socket.emitMessage({ event: "pusher_internal:subscription_succeeded", channel: "presence-teamUser.user-self", data: "{}" });
    socket.emitMessage({
      event: "posted",
      data: {
        channel_id: "other-channel",
        post: JSON.stringify({ id: "ignored-channel", channel_id: "other-channel", user_id: "user-1", message: "ignored" }),
      },
    });
    socket.emitMessage({
      event: "posted",
      data: {
        channel_id: "channel-123",
        sender_name: "bot-user",
        post: JSON.stringify({ id: "ignored-sender", channel_id: "channel-123", user_id: "user-1", message: "ignored" }),
      },
    });
    socket.emitMessage({
      event: "posted",
      data: {
        channel_id: "channel-123",
        sender_name: "alice",
        post: JSON.stringify({ id: "post-123", channel_id: "channel-123", user_id: "user-1", message: "accepted" }),
      },
    });
    await connection;

    expect(frames).toContain("pusher:connection_established");
    expect(subscriptions).toEqual(["private-team.team-123", "presence-teamUser.user-self"]);
    expect(posts).toEqual(["accepted"]);
    expect(fetchCalls).toMatchObject([
      { url: "https://main-team.kchat.infomaniak.com/api/v4/teams/name/main-team", method: "GET", authorization: `Bearer ${fixtureToken}` },
      { url: "https://main-team.kchat.infomaniak.com/api/v4/users/me", method: "GET", authorization: `Bearer ${fixtureToken}` },
      { url: "https://main-team.kchat.infomaniak.com/broadcasting/auth", method: "POST", authorization: `Bearer ${fixtureToken}` },
      { url: "https://main-team.kchat.infomaniak.com/broadcasting/auth", method: "POST", authorization: `Bearer ${fixtureToken}` },
    ]);
    expect(socket.sent.map((value) => JSON.parse(value) as { event: string; data: { channel?: string } })).toEqual([
      { event: "pusher:subscribe", data: { channel: "private-team.team-123", auth: "kchat-key:private-team.team-123" } },
      {
        event: "pusher:subscribe",
        data: { channel: "presence-teamUser.user-self", auth: "kchat-key:presence-teamUser.user-self", channel_data: JSON.stringify({ user_id: "user-self" }) },
      },
      { event: "pusher:pong", data: {} },
    ]);
  });

  it("uses explicit Echo subscriptions and rejects Echo server errors", async () => {
    EventTargetWebSocket.instances = [];
    const client = createKchatWebSocketClient({
      token: fixtureToken,
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
      webSocket: EventTargetWebSocket,
    });
    const connection = client.runConnection({
      apiBaseUrl: "https://team.example.test",
      authEndpoint: "https://team.example.test/auth",
      subscriptions: ["private-team.team-123"],
    });

    await waitImmediate();
    const socket = EventTargetWebSocket.instances[0]!;
    socket.emitMessage({ event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) });
    await waitImmediate();
    expect(JSON.parse(socket.sent[0] ?? "{}")).toEqual({
      event: "pusher:subscribe",
      data: { channel: "private-team.team-123", auth: "signature" },
    });
    socket.emitMessage({ event: "pusher:error", data: JSON.stringify({ message: "denied" }) });

    await expect(connection).rejects.toThrow(/denied/);
  });

  it("uses explicit Echo team identifiers without discovery calls", async () => {
    EventTargetWebSocket.instances = [];
    const fetchMock = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ auth: "signature" }));
    const abort = new AbortController();
    const connection = runKchatWebSocketConnection({
      token: fixtureToken,
      fetch: fetchMock,
      webSocket: EventTargetWebSocket,
      apiBaseUrl: "https://team.example.test",
      teamId: "team-123",
      teamUserId: "user-self",
      signal: abort.signal,
      onAuthenticated() {
        abort.abort();
      },
    });

    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emitMessage({
      event: "pusher:connection_established",
      data: JSON.stringify({ socket_id: "1.2" }),
    });
    await connection;

    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(EventTargetWebSocket.instances[0]!.sent.map((value) => JSON.parse(value).data.channel)).toEqual([
      "private-team.team-123",
      "presence-teamUser.user-self",
    ]);
  });

  it("authenticates and receives posts over a Mattermost socket", async () => {
    NodeStyleWebSocket.instances = [];
    const posts: string[] = [];
    const abort = new AbortController();
    const connection = runKchatWebSocketConnection({
      protocol: "mattermost",
      apiBaseUrl: "https://mattermost.example.test",
      token: () => "placeholder-token",
      webSocket: NodeStyleWebSocket,
      signal: abort.signal,
      onPost(event) {
        posts.push(event.text);
        abort.abort();
      },
    });

    await waitImmediate();
    const socket = NodeStyleWebSocket.instances[0]!;
    socket.emit("open", {});
    expect(JSON.parse(socket.sent[0] ?? "{}")).toEqual(createKchatMattermostAuthFrame("placeholder-token"));
    socket.emitMessage({ status: "OK", seq_reply: 1 });
    socket.emitMessage({
      event: "posted",
      data: {
        channel_name: "test",
        post: JSON.stringify({ id: "post-mm", channel_id: "channel-mm", message: "from mattermost", create_at: 1710000000000 }),
      },
    });
    await connection;

    expect(posts).toEqual(["from mattermost"]);
    expect(socket.closed).toBe(true);
  });

  it("lets run options override WebSocket client factory defaults", async () => {
    EventTargetWebSocket.instances = [];
    const factoryFetch = vi.fn<typeof fetch>();
    const runFetch = vi.fn<typeof fetch>().mockImplementation(async () => jsonResponse({ auth: "run-signature" }));
    const client = createKchatWebSocketClient({
      token: factoryToken,
      fetch: factoryFetch,
      webSocket: ThrowingSendWebSocket,
    });
    const abort = new AbortController();
    const connection = client.runConnection({
      token: runToken,
      fetch: runFetch,
      webSocket: EventTargetWebSocket,
      apiBaseUrl: "https://team.example.test",
      subscriptions: ["private-team.team-123"],
      signal: abort.signal,
      onAuthenticated() {
        abort.abort();
      },
    });

    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emitMessage({
      event: "pusher:connection_established",
      data: JSON.stringify({ socket_id: "1.2" }),
    });
    await connection;

    expect(factoryFetch).not.toHaveBeenCalled();
    expect(runFetch).toHaveBeenCalledOnce();
    expect(new Headers(runFetch.mock.calls[0]?.[1]?.headers).get("authorization")).toBe(`Bearer ${runToken}`);
  });

  it("fails closed for missing token, missing WebSocket, and failed auth", async () => {
    await expect(runKchatWebSocketConnection({ webSocket: EventTargetWebSocket })).rejects.toThrow(/bearer token/);
    const originalWebSocket = globalThis.WebSocket;
    vi.stubGlobal("WebSocket", undefined);
    await expect(runKchatWebSocketConnection({ token: fixtureToken })).rejects.toThrow(/No WebSocket/);
    vi.stubGlobal("WebSocket", originalWebSocket);

    EventTargetWebSocket.instances = [];
    const connection = runKchatWebSocketConnection({
      protocol: "mattermost",
      apiBaseUrl: "https://mattermost.example.test",
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
    });
    await waitImmediate();
    const socket = EventTargetWebSocket.instances[0]!;
    socket.emitOpen();
    socket.emitMessage({ status: "FAIL", seq_reply: 1 });

    await expect(connection).rejects.toThrow(/authentication failed/);
  });

  it("fails closed for malformed Echo handshakes and API discovery/auth failures", async () => {
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>(),
      message: { event: "pusher:connection_established", data: "{}" },
      error: /socket id/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>(),
      message: { event: "pusher:error", data: "{}" },
      error: /returned an error/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>(),
      options: { teamUserId: "user-self" },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /teamName/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({})),
      options: { teamName: "main-team", teamUserId: "user-self" },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /team lookup/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockImplementation(async (url) => {
        if (String(url).endsWith("/api/v4/teams/name/main-team")) {
          return jsonResponse({ id: "team-123" });
        }
        return jsonResponse({});
      }),
      options: { teamName: "main-team" },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /current-user/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ error: "denied" }, { status: 403 })),
      options: { apiBaseUrl: "https://team.example.test", subscriptions: ["private-team.team-123"] },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /channel auth failed/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ missing: "auth" })),
      options: { apiBaseUrl: "https://team.example.test", subscriptions: ["private-team.team-123"] },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /did not return a signature/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ error: "nope" }, { status: 500 })),
      options: { teamName: "main-team", teamUserId: "user-self" },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /API request failed/,
    });
    await expectEchoFailure({
      fetchImpl: vi.fn<typeof fetch>().mockResolvedValue(new Response(JSON.stringify([]), { status: 200, headers: { "content-type": "application/json" } })),
      options: { teamName: "main-team", teamUserId: "user-self" },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /JSON object/,
    });
  });

  it("handles alternate socket APIs, payload encodings, aborts, and socket errors", async () => {
    await expect(
      runKchatWebSocketConnection({
        protocol: "mattermost",
        apiBaseUrl: "https://mattermost.example.test",
        token: fixtureToken,
        webSocket: ThrowingSendWebSocket,
      }),
    ).rejects.toThrow(/send failed/);

    const preAborted = new AbortController();
    preAborted.abort();
    await expect(
      runKchatWebSocketConnection({
        token: fixtureToken,
        webSocket: EventTargetWebSocket,
        signal: preAborted.signal,
      }),
    ).resolves.toBeUndefined();

    PropertyWebSocket.instances = [];
    const abort = new AbortController();
    const frames: string[] = [];
    const connection = runKchatWebSocketConnection({
      protocol: "mattermost",
      apiBaseUrl: "https://mattermost.example.test",
      token: fixtureToken,
      webSocket: PropertyWebSocket,
      signal: abort.signal,
      onFrame(frame) {
        frames.push(frame.event ?? String(frame.status));
      },
    });
    await waitImmediate();
    const propertySocket = PropertyWebSocket.instances[0]!;
    propertySocket.emitOpen();
    propertySocket.emitRaw(Buffer.from(JSON.stringify({ status: "OK", seq_reply: 1 })));
    const arrayBufferFrame = Buffer.from(
      JSON.stringify({ event: "posted", data: { channel_name: "test", post: JSON.stringify({ id: "post-buffer", channel_id: "channel", message: "buffer" }) } }),
    );
    propertySocket.emitRaw(arrayBufferFrame.buffer.slice(arrayBufferFrame.byteOffset, arrayBufferFrame.byteOffset + arrayBufferFrame.byteLength));
    propertySocket.emitRaw(
      new Uint8Array(
        Buffer.from(
          JSON.stringify({
            event: "posted",
            data: { post: "{}" },
          }),
        ),
      ),
    );
    propertySocket.emitRaw(Buffer.from("not json"));
    propertySocket.emitRaw(Buffer.from(JSON.stringify([])));
    propertySocket.emitRaw({ event: "posted", data: { post: "{}" } });
    propertySocket.onmessage = () => undefined;
    abort.abort();
    await connection;
    expect(frames).toEqual(["OK", "posted", "posted"]);
    expect(propertySocket.closed).toBe(true);

    RemoveListenerWebSocket.instances = [];
    const removeListenerAbort = new AbortController();
    const removeListenerConnection = runKchatWebSocketConnection({
      protocol: "mattermost",
      apiBaseUrl: "https://mattermost.example.test",
      token: fixtureToken,
      webSocket: RemoveListenerWebSocket,
      signal: removeListenerAbort.signal,
    });
    await waitImmediate();
    RemoveListenerWebSocket.instances[0]!.emit("open", {});
    removeListenerAbort.abort();
    await removeListenerConnection;
    expect(RemoveListenerWebSocket.instances[0]!.removed).toContain("message");

    EventTargetWebSocket.instances = [];
    const errored = runKchatWebSocketConnection({
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
      subscriptions: ["private-team.team-123"],
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
    });
    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emit("error", new Error("socket exploded"));
    await expect(errored).rejects.toThrow(/socket exploded/);

    EventTargetWebSocket.instances = [];
    const messageErrored = runKchatWebSocketConnection({
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
      subscriptions: ["private-team.team-123"],
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
    });
    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emit("error", { error: JSON.stringify({ message: "nested socket error" }) });
    await expect(messageErrored).rejects.toThrow(/nested socket error/);

    EventTargetWebSocket.instances = [];
    const directMessageErrored = runKchatWebSocketConnection({
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
      subscriptions: ["private-team.team-123"],
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
    });
    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emit("error", { message: "direct socket error" });
    await expect(directMessageErrored).rejects.toThrow(/direct socket error/);

    EventTargetWebSocket.instances = [];
    const fallbackErrored = runKchatWebSocketConnection({
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
      subscriptions: ["private-team.team-123"],
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
    });
    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emit("error", {});
    await expect(fallbackErrored).rejects.toThrow(/connection failed/);

    EventTargetWebSocket.instances = [];
    const primitiveErrored = runKchatWebSocketConnection({
      token: fixtureToken,
      webSocket: EventTargetWebSocket,
      subscriptions: ["private-team.team-123"],
      fetch: vi.fn<typeof fetch>().mockResolvedValue(jsonResponse({ auth: "signature" })),
    });
    await waitImmediate();
    EventTargetWebSocket.instances[0]!.emit("error", "primitive error");
    await expect(primitiveErrored).rejects.toThrow(/connection failed/);

    vi.stubGlobal("fetch", undefined);
    await expectEchoFailure({
      options: { apiBaseUrl: "https://team.example.test", subscriptions: ["private-team.team-123"] },
      message: { event: "pusher:connection_established", data: JSON.stringify({ socket_id: "1.2" }) },
      error: /No fetch implementation/,
    });
  });
});

class EventTargetWebSocket implements KchatWebSocketLike {
  static instances: EventTargetWebSocket[] = [];
  readonly sent: string[] = [];
  readonly listeners = new Map<string, Array<(event: unknown) => void>>();
  closed = false;

  constructor(readonly url: string) {
    EventTargetWebSocket.instances.push(this);
    queueMicrotask(() => this.emitOpen());
  }

  send(data: string): void {
    this.sent.push(data);
  }

  close(): void {
    this.closed = true;
    this.emit("close", {});
  }

  addEventListener(eventName: string, handler: (event: unknown) => void): void {
    this.listeners.set(eventName, [...(this.listeners.get(eventName) ?? []), handler]);
  }

  removeEventListener(eventName: string, handler: (event: unknown) => void): void {
    this.listeners.set(
      eventName,
      (this.listeners.get(eventName) ?? []).filter((listener) => listener !== handler),
    );
  }

  emitOpen(): void {
    this.emit("open", {});
  }

  emitMessage(frame: unknown): void {
    this.emit("message", { data: JSON.stringify(frame) });
  }

  emit(eventName: string, event: unknown): void {
    for (const listener of this.listeners.get(eventName) ?? []) {
      listener(event);
    }
  }
}

class NodeStyleWebSocket implements KchatWebSocketLike {
  static instances: NodeStyleWebSocket[] = [];
  readonly sent: string[] = [];
  readonly listeners = new Map<string, Array<(event: unknown) => void>>();
  closed = false;

  constructor(readonly url: string) {
    NodeStyleWebSocket.instances.push(this);
  }

  send(data: string): void {
    this.sent.push(data);
  }

  close(): void {
    this.closed = true;
    this.emit("close", {});
  }

  on(eventName: string, handler: (event: unknown) => void): void {
    this.listeners.set(eventName, [...(this.listeners.get(eventName) ?? []), handler]);
  }

  off(eventName: string, handler: (event: unknown) => void): void {
    this.listeners.set(
      eventName,
      (this.listeners.get(eventName) ?? []).filter((listener) => listener !== handler),
    );
  }

  emitMessage(frame: unknown): void {
    this.emit("message", { data: JSON.stringify(frame) });
  }

  emit(eventName: string, event: unknown): void {
    for (const listener of this.listeners.get(eventName) ?? []) {
      listener(event);
    }
  }
}

class RemoveListenerWebSocket implements KchatWebSocketLike {
  static instances: RemoveListenerWebSocket[] = [];
  readonly sent: string[] = [];
  readonly removed: string[] = [];
  readonly listeners = new Map<string, Array<(event: unknown) => void>>();

  constructor(readonly url: string) {
    RemoveListenerWebSocket.instances.push(this);
  }

  send(data: string): void {
    this.sent.push(data);
  }

  close(): void {
    this.emit("close", {});
  }

  on(eventName: string, handler: (event: unknown) => void): void {
    this.listeners.set(eventName, [...(this.listeners.get(eventName) ?? []), handler]);
  }

  removeListener(eventName: string, handler: (event: unknown) => void): void {
    this.removed.push(eventName);
    this.listeners.set(
      eventName,
      (this.listeners.get(eventName) ?? []).filter((listener) => listener !== handler),
    );
  }

  emit(eventName: string, event: unknown): void {
    for (const listener of this.listeners.get(eventName) ?? []) {
      listener(event);
    }
  }
}

class PropertyWebSocket implements KchatWebSocketLike {
  static instances: PropertyWebSocket[] = [];
  readonly sent: string[] = [];
  closed = false;
  onopen?: (event: unknown) => void;
  onmessage?: (event: unknown) => void;
  onerror?: (event: unknown) => void;
  onclose?: (event: unknown) => void;

  constructor(readonly url: string) {
    PropertyWebSocket.instances.push(this);
  }

  send(data: string): void {
    this.sent.push(data);
  }

  close(): void {
    this.closed = true;
    this.onclose?.({});
  }

  emitOpen(): void {
    this.onopen?.({});
  }

  emitRaw(data: unknown): void {
    this.onmessage?.(data);
  }
}

class ThrowingSendWebSocket extends EventTargetWebSocket {
  override send(): void {
    throw new Error("send failed");
  }
}

function jsonResponse(value: unknown, init?: ResponseInit): Response {
  return new Response(JSON.stringify(value), {
    status: 200,
    headers: { "content-type": "application/json" },
    ...init,
  });
}

async function waitImmediate(): Promise<void> {
  await new Promise((resolve) => setImmediate(resolve));
}

async function expectEchoFailure({
  fetchImpl,
  options = {},
  message,
  error,
}: {
  fetchImpl?: typeof fetch;
  options?: Parameters<typeof runKchatWebSocketConnection>[0];
  message: unknown;
  error: RegExp;
}): Promise<void> {
  EventTargetWebSocket.instances = [];
  const connection = runKchatWebSocketConnection({
    token: fixtureToken,
    webSocket: EventTargetWebSocket,
    ...(fetchImpl === undefined ? {} : { fetch: fetchImpl }),
    ...options,
  });
  await waitImmediate();
  EventTargetWebSocket.instances[0]!.emitMessage(message);
  await expect(connection).rejects.toThrow(error);
}
