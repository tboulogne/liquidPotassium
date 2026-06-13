import { InfomaniakError } from "./errors.js";

export type KchatWebSocketProtocol = "infomaniak-echo" | "mattermost";
export type KchatTokenProvider = string | (() => string | undefined | Promise<string | undefined>);

export interface KchatWebSocketLike {
  send(data: string): void;
  close(code?: number, reason?: string): void;
  addEventListener?(eventName: string, handler: (event: unknown) => void): void;
  removeEventListener?(eventName: string, handler: (event: unknown) => void): void;
  on?(eventName: string, handler: (event: unknown) => void): void;
  off?(eventName: string, handler: (event: unknown) => void): void;
  removeListener?(eventName: string, handler: (event: unknown) => void): void;
}

export type KchatWebSocketConstructor = new (url: string) => KchatWebSocketLike;

export interface KchatJsonObject {
  [key: string]: KchatJsonValue;
}

export type KchatJsonValue = string | number | boolean | null | KchatJsonObject | KchatJsonValue[];

export interface KchatWebSocketFrame {
  event?: string;
  channel?: string;
  data?: unknown;
  broadcast?: unknown;
  status?: string;
  seq_reply?: number;
  error?: unknown;
  [key: string]: unknown;
}

export interface KchatWebSocketPostEvent {
  id: string;
  postId?: string;
  rootId?: string;
  timestamp?: number;
  text: string;
  channelId?: string;
  channelName?: string;
  teamId?: string;
  teamDomain?: string;
  userId?: string;
  userName?: string;
  rawPost: KchatJsonObject;
  rawFrame: KchatWebSocketFrame;
}

export interface KchatWebSocketUrlOptions {
  protocol?: KchatWebSocketProtocol;
  teamName?: string;
  apiBaseUrl?: string;
  url?: string;
  host?: string;
  appKey?: string;
}

export interface KchatWebSocketRunOptions extends KchatWebSocketUrlOptions {
  token?: KchatTokenProvider;
  fetch?: typeof fetch;
  webSocket?: KchatWebSocketConstructor;
  signal?: AbortSignal;
  authEndpoint?: string;
  subscriptions?: readonly string[];
  teamId?: string;
  teamUserId?: string;
  channelIds?: readonly string[];
  ignoredUserIds?: readonly string[];
  ignoredUserNames?: readonly string[];
  onFrame?: (frame: KchatWebSocketFrame) => void;
  onAuthenticated?: () => void;
  onSubscribed?: (channelName: string) => void;
  onPost?: (event: KchatWebSocketPostEvent) => void | Promise<void>;
}

export interface KchatWebSocketClientFactoryOptions {
  token?: KchatTokenProvider;
  fetch?: typeof fetch;
  webSocket?: KchatWebSocketConstructor;
}

export interface KchatWebSocketClient {
  resolveUrl(options?: KchatWebSocketUrlOptions): string;
  runConnection(options?: KchatWebSocketRunOptions): Promise<void>;
}

const defaultProtocol: KchatWebSocketProtocol = "infomaniak-echo";
const defaultEchoHost = "websocket.kchat.infomaniak.com";
const defaultEchoAppKey = "kchat-key";
const echoClientName = "liquid-potassium";
const echoClientVersion = "0.3.0";
const mattermostAuthSeq = 1;

export function createKchatWebSocketClient(options: KchatWebSocketClientFactoryOptions = {}): KchatWebSocketClient {
  return {
    resolveUrl: (urlOptions = {}) => resolveKchatWebSocketUrl(urlOptions),
    runConnection: (runOptions = {}) => {
      const mergedOptions: KchatWebSocketRunOptions = { ...runOptions };
      if (mergedOptions.token === undefined && options.token !== undefined) {
        mergedOptions.token = options.token;
      }
      if (mergedOptions.fetch === undefined && options.fetch !== undefined) {
        mergedOptions.fetch = options.fetch;
      }
      if (mergedOptions.webSocket === undefined && options.webSocket !== undefined) {
        mergedOptions.webSocket = options.webSocket;
      }
      return runKchatWebSocketConnection(mergedOptions);
    },
  };
}

export function resolveKchatWebSocketUrl(options: KchatWebSocketUrlOptions = {}): string {
  const explicitUrl = readOptionalString(options.url);
  if (explicitUrl) {
    return explicitUrl;
  }

  if (resolveKchatWebSocketProtocol(options.protocol) === "mattermost") {
    const url = new URL(resolveKchatApiBaseUrl(options));
    url.protocol = url.protocol === "http:" ? "ws:" : "wss:";
    url.pathname = "/api/v4/websocket";
    url.search = "";
    url.hash = "";
    return url.toString();
  }

  const host = readOptionalString(options.host) ?? defaultEchoHost;
  const appKey = readOptionalString(options.appKey) ?? defaultEchoAppKey;
  const url = new URL(`wss://${host}/app/${encodeURIComponent(appKey)}`);
  url.searchParams.set("protocol", "7");
  url.searchParams.set("client", echoClientName);
  url.searchParams.set("version", echoClientVersion);
  url.searchParams.set("flash", "false");
  return url.toString();
}

export function createKchatMattermostAuthFrame(token: string, seq = mattermostAuthSeq): KchatJsonObject {
  return {
    seq,
    action: "authentication_challenge",
    data: {
      token,
    },
  };
}

export async function runKchatWebSocketConnection(options: KchatWebSocketRunOptions = {}): Promise<void> {
  if (resolveKchatWebSocketProtocol(options.protocol) === "mattermost") {
    await runMattermostWebSocketConnection(options);
    return;
  }

  await runEchoWebSocketConnection(options);
}

export function normalizeKchatWebSocketPostEvent(
  frame: KchatWebSocketFrame,
  options: Pick<KchatWebSocketRunOptions, "teamName"> = {},
): KchatWebSocketPostEvent | undefined {
  if (frame.event !== "posted") {
    return undefined;
  }

  const data = parseJsonObject(frame.data) ?? {};
  const broadcast = parseJsonObject(frame.broadcast) ?? {};
  const post = parseJsonObject(data.post);
  if (!post) {
    return undefined;
  }

  const text = readOptionalString(post.message) ?? readOptionalString(data.message);
  const channelId = readOptionalString(post.channel_id) ?? readOptionalString(post.channelId) ?? readOptionalString(data.channel_id) ?? readOptionalString(broadcast.channel_id);
  const channelName =
    readOptionalString(data.channel_name) ??
    readOptionalString(data.channelName) ??
    readOptionalString(data.channel_display_name) ??
    readOptionalString(data.channelDisplayName);
  const postId = readOptionalString(post.id) ?? readOptionalString(post.post_id);
  const fallbackId = channelId && text ? `${channelId}:${readOptionalNumber(post.create_at) ?? text}` : undefined;
  const id = postId ?? fallbackId;

  if (!id || !text || (!channelId && !channelName)) {
    return undefined;
  }

  const teamId = readOptionalString(post.team_id) ?? readOptionalString(post.teamId) ?? readOptionalString(data.team_id) ?? readOptionalString(broadcast.team_id);
  const teamDomain =
    readOptionalString(data.team_domain) ??
    readOptionalString(data.teamDomain) ??
    readOptionalString(data.team_name) ??
    readOptionalString(options.teamName);
  const rootId = readOptionalString(post.root_id) ?? readOptionalString(post.rootId);
  const userId = readOptionalString(post.user_id) ?? readOptionalString(post.userId);
  const userName =
    readOptionalString(data.sender_name) ??
    readOptionalString(data.senderName) ??
    readOptionalString(post.user_name) ??
    readOptionalString(post.userName);
  const timestamp = normalizeKchatTimestamp(readOptionalNumber(post.create_at) ?? readOptionalNumber(post.createAt));

  return {
    id,
    ...(postId ? { postId } : {}),
    ...(rootId ? { rootId } : {}),
    ...(timestamp === undefined ? {} : { timestamp }),
    text,
    ...(channelId ? { channelId } : {}),
    ...(channelName ? { channelName } : {}),
    ...(teamId ? { teamId } : {}),
    ...(teamDomain ? { teamDomain } : {}),
    ...(userId ? { userId } : {}),
    ...(userName ? { userName } : {}),
    rawPost: post,
    rawFrame: frame,
  };
}

async function runMattermostWebSocketConnection(options: KchatWebSocketRunOptions): Promise<void> {
  const token = await resolveRequiredToken(options.token);
  const socket = createSocket(options);

  await runSocket(socket, options, {
    open: async () => {
      socket.send(JSON.stringify(createKchatMattermostAuthFrame(token)));
    },
    frame: async (frame, close, fail) => {
      if (isMattermostAuthReply(frame)) {
        if (frame.status !== "OK") {
          fail(new InfomaniakError("kChat Mattermost WebSocket authentication failed."));
          close();
          return;
        }
        options.onAuthenticated?.();
        return;
      }

      await maybeEmitPost(frame, options);
    },
  });
}

async function runEchoWebSocketConnection(options: KchatWebSocketRunOptions): Promise<void> {
  const token = await resolveRequiredToken(options.token);
  const socket = createSocket(options);
  let subscribed = false;

  await runSocket(socket, options, {
    frame: async (frame, close, fail) => {
      if (frame.event === "pusher:connection_established") {
        if (subscribed) {
          return;
        }
        subscribed = true;
        const socketId = readOptionalString(parseJsonObject(frame.data)?.socket_id);
        if (!socketId) {
          fail(new InfomaniakError("kChat Echo WebSocket did not return a socket id."));
          close();
          return;
        }
        const channels = await resolveEchoSubscriptionChannels(options, token);
        for (const channelName of channels) {
          const auth = await authorizeEchoSubscription(options, token, socketId, channelName);
          socket.send(JSON.stringify(createEchoSubscribeFrame(channelName, auth)));
        }
        options.onAuthenticated?.();
        return;
      }

      if (frame.event === "pusher:ping") {
        socket.send(JSON.stringify({ event: "pusher:pong", data: {} }));
        return;
      }

      if (frame.event === "pusher:error") {
        fail(new InfomaniakError(readOptionalString(parseJsonObject(frame.data)?.message) ?? "kChat Echo WebSocket returned an error."));
        close();
        return;
      }

      if (frame.event === "pusher_internal:subscription_succeeded") {
        if (frame.channel) {
          options.onSubscribed?.(frame.channel);
        }
        return;
      }

      if (frame.event?.startsWith("pusher:")) {
        return;
      }

      await maybeEmitPost(frame, options);
    },
  });
}

interface SocketHandlers {
  open?: () => void | Promise<void>;
  frame: (frame: KchatWebSocketFrame, close: () => void, fail: (error: Error) => void) => void | Promise<void>;
}

async function runSocket(socket: KchatWebSocketLike, options: KchatWebSocketRunOptions, handlers: SocketHandlers): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    let settled = false;
    const cleanups: (() => void)[] = [];

    const settleResolve = (): void => {
      /* v8 ignore next 3 -- duplicate close/abort events can race after a socket is already settled. */
      if (settled) {
        return;
      }
      settled = true;
      for (const cleanup of cleanups.splice(0)) {
        cleanup();
      }
      options.signal?.removeEventListener("abort", onAbort);
      resolve();
    };
    const settleReject = (error: Error): void => {
      /* v8 ignore next 3 -- duplicate error events can race after a socket is already settled. */
      if (settled) {
        return;
      }
      settled = true;
      for (const cleanup of cleanups.splice(0)) {
        cleanup();
      }
      options.signal?.removeEventListener("abort", onAbort);
      reject(error);
    };
    const fail = (error: Error): void => settleReject(error);
    const close = (): void => closeSocket(socket);
    const onAbort = (): void => {
      close();
      settleResolve();
    };
    const onOpen = (): void => {
      void Promise.resolve(handlers.open?.()).catch(fail);
    };
    const onMessage = (event: unknown): void => {
      const frame = parseFrame(resolveWebSocketMessageData(event));
      if (!frame) {
        return;
      }
      options.onFrame?.(frame);
      void Promise.resolve(handlers.frame(frame, close, fail)).catch(fail);
    };
    const onError = (event: unknown): void => fail(resolveWebSocketError(event));
    const onClose = (): void => settleResolve();

    cleanups.push(addSocketListener(socket, "open", onOpen));
    cleanups.push(addSocketListener(socket, "message", onMessage));
    cleanups.push(addSocketListener(socket, "error", onError));
    cleanups.push(addSocketListener(socket, "close", onClose));

    if (options.signal?.aborted) {
      onAbort();
      return;
    }
    options.signal?.addEventListener("abort", onAbort, { once: true });
  });
}

async function maybeEmitPost(frame: KchatWebSocketFrame, options: KchatWebSocketRunOptions): Promise<void> {
  const event = normalizeKchatWebSocketPostEvent(frame, options);
  if (!event || !isAllowedChannel(event, options) || isIgnoredSender(event, options)) {
    return;
  }

  await options.onPost?.(event);
}

async function resolveEchoSubscriptionChannels(options: KchatWebSocketRunOptions, token: string): Promise<readonly string[]> {
  if (options.subscriptions && options.subscriptions.length > 0) {
    return options.subscriptions;
  }

  const [teamId, teamUserId] = await Promise.all([resolveEchoTeamId(options, token), resolveEchoTeamUserId(options, token)]);
  return [`private-team.${teamId}`, `presence-teamUser.${teamUserId}`];
}

async function resolveEchoTeamId(options: KchatWebSocketRunOptions, token: string): Promise<string> {
  const configuredTeamId = readOptionalString(options.teamId);
  if (configuredTeamId) {
    return configuredTeamId;
  }

  const teamName = readOptionalString(options.teamName);
  if (!teamName) {
    throw new InfomaniakError("Configure teamName, teamId, or subscriptions before connecting to the kChat Echo WebSocket.");
  }

  const team = await fetchKchatJson(options, token, `${resolveKchatApiBaseUrl(options)}/api/v4/teams/name/${encodeURIComponent(teamName)}`);
  const teamId = readOptionalString(team.id);
  if (!teamId) {
    throw new InfomaniakError(`kChat team lookup did not return an id for ${teamName}.`);
  }
  return teamId;
}

async function resolveEchoTeamUserId(options: KchatWebSocketRunOptions, token: string): Promise<string> {
  const configuredTeamUserId = readOptionalString(options.teamUserId);
  if (configuredTeamUserId) {
    return configuredTeamUserId;
  }

  const user = await fetchKchatJson(options, token, `${resolveKchatApiBaseUrl(options)}/api/v4/users/me`);
  const userId = readOptionalString(user.id);
  if (!userId) {
    throw new InfomaniakError("kChat current-user lookup did not return an id.");
  }
  return userId;
}

async function authorizeEchoSubscription(
  options: KchatWebSocketRunOptions,
  token: string,
  socketId: string,
  channelName: string,
): Promise<KchatJsonObject> {
  const response = await fetchKchat(options, token, resolveEchoAuthEndpoint(options), {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ socket_id: socketId, channel_name: channelName }),
  });
  if (!response.ok) {
    throw new InfomaniakError(`kChat Echo WebSocket channel auth failed for ${channelName}: HTTP ${response.status}.`);
  }
  const auth = parseJsonObject(await response.json());
  if (!auth || !readOptionalString(auth.auth)) {
    throw new InfomaniakError(`kChat Echo WebSocket channel auth did not return a signature for ${channelName}.`);
  }
  return auth;
}

function createEchoSubscribeFrame(channelName: string, auth: KchatJsonObject): KchatJsonObject {
  const channelData = readOptionalString(auth.channel_data);
  return {
    event: "pusher:subscribe",
    data: {
      channel: channelName,
      auth: readOptionalString(auth.auth)!,
      ...(channelData ? { channel_data: channelData } : {}),
    },
  };
}

function resolveEchoAuthEndpoint(options: KchatWebSocketRunOptions): string {
  return readOptionalString(options.authEndpoint) ?? `${resolveKchatApiBaseUrl(options)}/broadcasting/auth`;
}

async function fetchKchatJson(options: KchatWebSocketRunOptions, token: string, url: string): Promise<KchatJsonObject> {
  const response = await fetchKchat(options, token, url);
  if (!response.ok) {
    throw new InfomaniakError(`kChat API request failed: HTTP ${response.status}.`);
  }
  const parsed = parseJsonObject(await response.json());
  if (!parsed) {
    throw new InfomaniakError("kChat API response did not return a JSON object.");
  }
  return parsed;
}

async function fetchKchat(options: KchatWebSocketRunOptions, token: string, url: string, init: RequestInit = {}): Promise<Response> {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new InfomaniakError("No fetch implementation is available. Provide options.fetch.");
  }
  const headers = new Headers(init.headers);
  headers.set("authorization", `Bearer ${token}`);
  return fetchImpl(url, {
    ...init,
    headers,
    ...(options.signal ? { signal: options.signal } : {}),
  });
}

function createSocket(options: KchatWebSocketRunOptions): KchatWebSocketLike {
  const WebSocketImpl = options.webSocket ?? globalThis.WebSocket;
  if (typeof WebSocketImpl !== "function") {
    throw new InfomaniakError("No WebSocket implementation is available. Provide options.webSocket.");
  }
  return new WebSocketImpl(resolveKchatWebSocketUrl(options));
}

async function resolveRequiredToken(tokenProvider: KchatTokenProvider | undefined): Promise<string> {
  const token = readOptionalString(typeof tokenProvider === "function" ? await tokenProvider() : tokenProvider);
  if (!token) {
    throw new InfomaniakError("A kChat WebSocket bearer token is required.");
  }
  return token;
}

function resolveKchatWebSocketProtocol(protocol: KchatWebSocketProtocol | undefined): KchatWebSocketProtocol {
  return protocol ?? defaultProtocol;
}

function resolveKchatApiBaseUrl(options: Pick<KchatWebSocketUrlOptions, "apiBaseUrl" | "teamName">): string {
  const apiBaseUrl = readOptionalString(options.apiBaseUrl);
  if (apiBaseUrl) {
    return apiBaseUrl;
  }
  const teamName = readOptionalString(options.teamName);
  if (!teamName) {
    throw new InfomaniakError("Configure apiBaseUrl or a DNS-safe teamName before using kChat WebSocket helpers.");
  }
  const hostLabel = teamName.toLowerCase();
  if (!/^[a-z0-9-]+$/.test(hostLabel)) {
    throw new InfomaniakError("kChat teamName must be a DNS-safe team slug when apiBaseUrl is omitted.");
  }
  return `https://${hostLabel}.kchat.infomaniak.com`;
}

function isMattermostAuthReply(frame: KchatWebSocketFrame): boolean {
  return readOptionalNumber(frame.seq_reply) === mattermostAuthSeq && typeof frame.status === "string";
}

function isAllowedChannel(event: KchatWebSocketPostEvent, options: Pick<KchatWebSocketRunOptions, "channelIds">): boolean {
  return !options.channelIds || options.channelIds.length === 0 || Boolean(event.channelId && options.channelIds.includes(event.channelId));
}

function isIgnoredSender(event: KchatWebSocketPostEvent, options: Pick<KchatWebSocketRunOptions, "ignoredUserIds" | "ignoredUserNames">): boolean {
  return Boolean(
    (event.userId && options.ignoredUserIds?.includes(event.userId)) || (event.userName && options.ignoredUserNames?.includes(event.userName)),
  );
}

function parseFrame(data: unknown): KchatWebSocketFrame | undefined {
  return parseJsonObject(readWebSocketText(data));
}

function parseJsonObject(value: unknown): KchatJsonObject | undefined {
  if (isRecord(value)) {
    return value as KchatJsonObject;
  }
  if (typeof value !== "string" || !value.trim()) {
    return undefined;
  }
  try {
    const parsed: unknown = JSON.parse(value);
    return isRecord(parsed) ? (parsed as KchatJsonObject) : undefined;
  } catch {
    return undefined;
  }
}

function readWebSocketText(data: unknown): string | undefined {
  if (typeof data === "string") {
    return data;
  }
  if (data instanceof ArrayBuffer) {
    return Buffer.from(data).toString("utf8");
  }
  if (Buffer.isBuffer(data)) {
    return data.toString("utf8");
  }
  if (ArrayBuffer.isView(data)) {
    return Buffer.from(data.buffer, data.byteOffset, data.byteLength).toString("utf8");
  }
  return undefined;
}

function resolveWebSocketMessageData(event: unknown): unknown {
  if (isRecord(event) && "data" in event) {
    return event.data;
  }
  return event;
}

function addSocketListener(socket: KchatWebSocketLike, eventName: string, handler: (event: unknown) => void): () => void {
  if (socket.addEventListener) {
    socket.addEventListener(eventName, handler);
    return () => socket.removeEventListener?.(eventName, handler);
  }
  if (socket.on) {
    socket.on(eventName, handler);
    return () => {
      if (socket.off) {
        socket.off(eventName, handler);
      } else {
        socket.removeListener?.(eventName, handler);
      }
    };
  }
  const socketRecord = socket as unknown as Record<string, unknown>;
  const propertyName = `on${eventName}`;
  const previous = socketRecord[propertyName];
  socketRecord[propertyName] = handler;
  return () => {
    if (socketRecord[propertyName] === handler) {
      socketRecord[propertyName] = previous;
    }
  };
}

function closeSocket(socket: KchatWebSocketLike): void {
  socket.close();
}

function resolveWebSocketError(event: unknown): Error {
  if (event instanceof Error) {
    return event;
  }
  const message = isRecord(event) ? readOptionalString(event.message) ?? readOptionalString(parseJsonObject(event.error)?.message) : undefined;
  return new InfomaniakError(message ?? "kChat WebSocket connection failed.");
}

function normalizeKchatTimestamp(value: number | undefined): number | undefined {
  return value === undefined ? undefined : value > 0 && value < 10_000_000_000 ? value * 1000 : value;
}

function readOptionalString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function readOptionalNumber(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  if (typeof value !== "string" || !value.trim()) {
    return undefined;
  }
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
