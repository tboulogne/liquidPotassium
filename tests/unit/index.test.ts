import { describe, expect, it } from "vitest";

import { packageName } from "../../src/index.js";

describe("package entrypoint", () => {
  it("exports the package identity", () => {
    expect(packageName).toBe("liquid-potassium");
  });
});

