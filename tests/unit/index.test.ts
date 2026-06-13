import { describe, expect, it } from "vitest";

import { createInfomaniakOpenClawTools, packageName, resolveInfomaniakPluginConfig } from "../../src/index.js";

describe("package entrypoint", () => {
  it("exports the package identity", () => {
    expect(packageName).toBe("liquid-potassium");
  });

  it("exports the OpenClaw adapter helpers from the public entrypoint", () => {
    expect(resolveInfomaniakPluginConfig(undefined).tokenEnvName).toBe("INFOMANIAK_TOKEN");
    expect(createInfomaniakOpenClawTools().map((tool) => tool.name)).toContain("infomaniak_workflow_run");
  });
});
