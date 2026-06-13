import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { createInfomaniakOpenClawTools } from "../../../src/openclaw/infomaniak-tools.js";

const skillPath = resolve("openclaw/skills/infomaniak/SKILL.md");

describe("Infomaniak OpenClaw skill", () => {
  it("uses valid frontmatter and references the registered compact tools", async () => {
    const skill = await readFile(skillPath, "utf8");
    const registeredToolNames = createInfomaniakOpenClawTools().map((tool) => tool.name);

    expect(skill).toContain("name: infomaniak");
    expect(skill).toContain("plugins.entries.infomaniak.enabled");
    for (const toolName of [
      "infomaniak_domains",
      "infomaniak_search",
      "infomaniak_describe",
      "infomaniak_discover",
      "infomaniak_mail_application",
      "infomaniak_workflow_list",
      "infomaniak_workflow_describe",
      "infomaniak_workflow_run",
      "infomaniak_call",
    ]) {
      expect(registeredToolNames).toContain(toolName);
      expect(skill).toContain(toolName);
    }
  });

  it("requires search and describe before calls and explicit intent for mutation", async () => {
    const skill = await readFile(skillPath, "utf8");
    const searchIndex = skill.indexOf("Use `infomaniak_search`");
    const describeIndex = skill.indexOf("Use `infomaniak_describe`");
    const discoverIndex = skill.indexOf("Use `infomaniak_discover`");
    const workflowIndex = skill.indexOf("Use `infomaniak_workflow_list`");
    const callIndex = skill.indexOf("Use `infomaniak_call`");

    expect(searchIndex).toBeGreaterThan(0);
    expect(describeIndex).toBeGreaterThan(searchIndex);
    expect(discoverIndex).toBeGreaterThan(describeIndex);
    expect(workflowIndex).toBeGreaterThan(discoverIndex);
    expect(callIndex).toBeGreaterThan(workflowIndex);
    expect(skill).toContain("Do not guess operation IDs");
    expect(skill).toContain("no_public_discovery");
    expect(skill).toContain("Mail application actions for mailbox consumption");
    expect(skill).toContain("Prefer reviewed workflow actions over raw operation calls");
    expect(skill).toContain("Call a mutating operation only when the user has explicitly asked");
    expect(skill).toContain("confirm_mutating=true");
  });
});
