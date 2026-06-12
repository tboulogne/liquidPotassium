import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const output = resolve("src/generated/schema.ts");
await mkdir(dirname(output), { recursive: true });

await new Promise<void>((resolvePromise, rejectPromise) => {
  const child = spawn("npx", ["openapi-typescript", "spec/infomaniak.normalized.json", "-o", output], {
    stdio: "inherit",
  });
  child.on("error", rejectPromise);
  child.on("exit", (code) => {
    if (code === 0) {
      resolvePromise();
    } else {
      rejectPromise(new Error(`openapi-typescript exited with code ${code ?? "unknown"}`));
    }
  });
});

