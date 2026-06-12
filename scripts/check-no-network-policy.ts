import { readFileSync } from "node:fs";

const vitestConfig = readFileSync("vitest.config.ts", "utf8");
const noNetworkSetup = readFileSync("tests/setup/no-network.ts", "utf8");

const checks = [
  {
    ok: vitestConfig.includes("tests/setup/no-network.ts"),
    message: "vitest.config.ts must load tests/setup/no-network.ts.",
  },
  {
    ok: noNetworkSetup.includes("vi.stubGlobal(\"fetch\", blockedFetch)"),
    message: "tests/setup/no-network.ts must replace global fetch.",
  },
  {
    ok: noNetworkSetup.includes("Real network calls are forbidden in tests"),
    message: "tests/setup/no-network.ts must fail loudly on real network attempts.",
  },
];

const failures = checks.filter((check) => !check.ok);
if (failures.length > 0) {
  for (const failure of failures) {
    console.error(failure.message);
  }
  process.exitCode = 1;
}
