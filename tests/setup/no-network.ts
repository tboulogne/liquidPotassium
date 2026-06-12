import { beforeEach, vi } from "vitest";

const blockedFetch: typeof fetch = async () => {
  throw new Error("Real network calls are forbidden in tests. Inject a mocked fetch instead.");
};

beforeEach(() => {
  vi.stubGlobal("fetch", blockedFetch);
});

