import { describe, expect, it, vi } from "vitest";

import {
  createResourceDiscovery,
  describeOperationRequirements,
  describeResourceKind,
  discoverResources,
  getOperation,
  listDomains,
  listResourceDiscoveryRecipes,
  listResourceKinds,
  type ResourceDiscoveryClient,
} from "../../../src/index.js";

describe("resource discovery", () => {
  it("covers every generated domain with a recipe or reviewed no-public-discovery kind", () => {
    for (const domain of listDomains()) {
      const recipes = listResourceDiscoveryRecipes({ domain: domain.domain });
      const unavailableKinds = listResourceKinds({ domain: domain.domain, discoverable: false });
      expect(recipes.length + unavailableKinds.length, domain.domain).toBeGreaterThan(0);
    }
  });

  it("keeps discovery recipes read-only and backed by known operations", () => {
    for (const recipe of listResourceDiscoveryRecipes()) {
      const operation = getOperation(recipe.operationId);

      expect(operation.domain).toBe(recipe.domain);
      expect(operation.method).toBe("GET");
      expect(operation.mutating).toBe(false);
    }
  });

  it("describes resource kinds and operation requirements with docs-backed metadata", () => {
    const newsletterKind = describeResourceKind("newsletterDomain");
    const newsletterRequirements = describeOperationRequirements("NewsletterListCampaigns");
    const kdriveRequirements = describeOperationRequirements("kDriveGetDriveInformationV2");
    const docsMissingRequirements = describeOperationRequirements("delete_1_radios_radio_product_id_stations_station_id");

    expect(newsletterKind).toMatchObject({
      kind: "newsletterDomain",
      domain: "newsletter",
      discoverable: false,
    });
    expect(newsletterRequirements.parameters).toContainEqual(
      expect.objectContaining({
        name: "domain",
        in: "path",
        required: true,
        resourceKind: "newsletterDomain",
        schemaType: "integer",
      }),
    );
    expect(newsletterRequirements.suggestions).toContainEqual(
      expect.objectContaining({
        code: "no_public_discovery",
        kind: "newsletterDomain",
        message: expect.stringContaining("integer Newsletter Domain id"),
      }),
    );
    expect(kdriveRequirements.suggestions).toContainEqual(
      expect.objectContaining({
        code: "recipe_available",
        kind: "kdriveDrive",
        operationId: "kDriveAccessiblesDrivesV2",
        parameterNames: ["drive_id"],
      }),
    );
    expect(docsMissingRequirements.parameters).toContainEqual({
      name: "station_id",
      in: "path",
      required: true,
      description: "",
      schemaType: null,
      resourceKind: null,
      example: null,
    });
    expect(() => describeResourceKind("missingKind")).toThrow(/Unknown Infomaniak resource kind/);
  });

  it("discovers resources through a mocked client and maps common response shapes", async () => {
    const abort = new AbortController();
    const requestOperation = vi
      .fn<ResourceDiscoveryClient["requestOperation"]>()
      .mockResolvedValueOnce({ data: ["ignored", { id: 1, name: "Primary" }, { name: "missing id" }, { id: 2 }, { id: 3, name: 44 }, { id: 4, name: "", display_name: "Fallback" }] })
      .mockResolvedValueOnce([{ drive_id: "drive-1", drive_name: "Team Drive" }])
      .mockResolvedValueOnce({ data: { items: [{ id: "nested", name: "Nested" }] } })
      .mockResolvedValueOnce({ data: { id: "single", name: "Single" } })
      .mockResolvedValueOnce(null)
      .mockResolvedValueOnce("scalar");
    const client = { requestOperation };

    const accounts = await createResourceDiscovery(client).discover({ kind: "account", limit: 5, signal: abort.signal });
    const drive = await discoverResources(client, { operationId: "kDriveGetDriveInformationV2" });
    const nested = await discoverResources(client, { kind: "coreProduct" });
    const single = await discoverResources(client, { kind: "account" });
    const empty = await discoverResources(client, { kind: "account" });
    const scalar = await discoverResources(client, { kind: "account" });

    expect(accounts).toMatchObject({
      recipe: expect.objectContaining({ operationId: "Core/ResourcesListAccounts" }),
      resources: [
        {
          id: 1,
          label: "Primary",
          domain: "account",
          kind: "account",
          sourceOperationId: "Core/ResourcesListAccounts",
          parents: {},
          raw: { id: 1, name: "Primary" },
        },
        {
          id: 2,
          label: "2",
          domain: "account",
          kind: "account",
        },
        {
          id: 3,
          label: "44",
          domain: "account",
          kind: "account",
        },
        {
          id: 4,
          label: "Fallback",
          domain: "account",
          kind: "account",
        },
      ],
      suggestions: [expect.objectContaining({ code: "recipe_available" })],
    });
    expect(drive.resources).toEqual([
      expect.objectContaining({
        id: "drive-1",
        label: "Team Drive",
        kind: "kdriveDrive",
      }),
    ]);
    expect(nested.resources).toEqual([expect.objectContaining({ id: "nested", label: "Nested" })]);
    expect(single.resources).toEqual([expect.objectContaining({ id: "single", label: "Single" })]);
    expect(empty.resources).toEqual([]);
    expect(scalar.resources).toEqual([]);
    expect(requestOperation.mock.calls.map(([operationId]) => operationId)).toEqual([
      "Core/ResourcesListAccounts",
      "kDriveAccessiblesDrivesV2",
      "get_1_products",
      "Core/ResourcesListAccounts",
      "Core/ResourcesListAccounts",
      "Core/ResourcesListAccounts",
    ]);
    expect(requestOperation.mock.calls[0]?.[1]).toEqual({ path: {}, signal: abort.signal });
  });

  it("returns structured suggestions instead of calling the client for known discovery gaps", async () => {
    const requestOperation = vi.fn<ResourceDiscoveryClient["requestOperation"]>();
    const client = { requestOperation };

    await expect(discoverResources(client)).resolves.toEqual({ resources: [], suggestions: [], recipe: null });
    await expect(discoverResources(client, { kind: "newsletterDomain" })).resolves.toMatchObject({
      resources: [],
      recipe: null,
      suggestions: [
        {
          code: "no_public_discovery",
          domain: "newsletter",
          kind: "newsletterDomain",
          message: expect.stringContaining("integer Newsletter Domain id"),
        },
      ],
    });
    await expect(discoverResources(client, { domain: "kmeet" })).resolves.toMatchObject({
      suggestions: [expect.objectContaining({ code: "no_public_discovery", kind: "kmeetRoom" })],
    });
    expect(requestOperation).not.toHaveBeenCalled();
  });

  it("handles parent-bound child discovery and unknown discovery requests without guessing", async () => {
    const requestOperation = vi.fn<ResourceDiscoveryClient["requestOperation"]>().mockResolvedValue({ data: [{ id: 9, subject: "June" }] });
    const client = { requestOperation };

    await expect(discoverResources(client, { kind: "newsletterCampaign" })).resolves.toMatchObject({
      resources: [],
      recipe: { operationId: "NewsletterListCampaigns" },
      suggestions: [
        {
          code: "requires_parent",
          kind: "newsletterCampaign",
          operationId: "NewsletterListCampaigns",
          parameterNames: ["domain"],
        },
      ],
    });
    await expect(discoverResources(client, { kind: "newsletterCampaign", parents: { domain: 123 } })).resolves.toMatchObject({
      resources: [
        {
          id: 9,
          label: "June",
          parents: { domain: 123 },
          kind: "newsletterCampaign",
        },
      ],
    });
    await expect(discoverResources(client, { kind: "unknownKind" })).resolves.toMatchObject({
      suggestions: [expect.objectContaining({ code: "no_recipe", domain: "unknown", kind: "unknownKind" })],
    });
    await expect(discoverResources(client, { domain: "unknownDomain" })).resolves.toMatchObject({
      suggestions: [expect.objectContaining({ code: "no_recipe", domain: "unknownDomain" })],
    });
    await expect(discoverResources(client, { operationId: "NewsletterShowDomain" })).resolves.toMatchObject({
      suggestions: [expect.objectContaining({ code: "no_public_discovery", kind: "newsletterDomain" })],
    });
    expect(requestOperation).toHaveBeenCalledTimes(1);
    expect(requestOperation.mock.calls[0]).toEqual(["NewsletterListCampaigns", { path: { domain: 123 } }]);
  });
});
