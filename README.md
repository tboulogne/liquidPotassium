# liquid-potassium

Domain-oriented TypeScript SDK and OpenClaw integration for the Infomaniak API.

The SDK is generated from `infomaniak_api_1781289971.json`, normalized deterministically, grouped by domains such as `kdrive`, `kchat`, and `mail`, and tested without real network calls.

## Requirements

- Node.js 22+
- npm

```bash
npm ci
npm run ci
```

## SDK Usage

```ts
import { createInfomaniakClient, searchOperations } from "liquid-potassium";

const client = createInfomaniakClient({
  token: process.env.INFOMANIAK_TOKEN,
  fetch,
});

const matches = searchOperations({ domain: "kmeet", query: "room settings" });
const settings = await client.kmeet.operations.get1KmeetRoomsRoomIdSettings({
  path: { room_id: "room-123" },
});

const raw = await client.raw.GET("/1/kmeet/rooms/{room_id}/settings", {
  path: { room_id: "room-123" },
});
```

## Operation Catalog

Use the catalog before calling endpoints:

```ts
import {
  describeOperation,
  isMutatingOperation,
  listDomains,
  listOperations,
  searchOperations,
} from "liquid-potassium";

const domains = listDomains();
const kdriveReads = listOperations({ domain: "kdrive", method: "GET", mutating: false });
const search = searchOperations({ query: "mailbox", domain: "mail", limit: 10 });
const description = describeOperation(search[0].operationId);
const mutating = isMutatingOperation(description.operationId);
```

## Resource Discovery

Docs-enriched resource discovery helps callers find required IDs before calling operations. The official Infomaniak Developer Portal pages expose structured operation metadata that includes examples, enums, category paths, and pagination/sorting hints missing from the raw OpenAPI file.

The flow is:

```ts
import {
  createInfomaniakClient,
  createResourceDiscovery,
  describeOperationRequirements,
} from "liquid-potassium";

const client = createInfomaniakClient({ token: process.env.INFOMANIAK_TOKEN, fetch });
const discovery = createResourceDiscovery(client);

const requirements = describeOperationRequirements("NewsletterListCampaigns");
const drives = await discovery.discover({ kind: "kdriveDrive" });
const newsletterDomains = await discovery.discover({ kind: "newsletterDomain" });
```

Discovery uses only reviewed read-only Infomaniak operations through injected `fetch`. When a required ID cannot be discovered through the public API, such as a Newsletter Domain id, the SDK returns a clear `no_public_discovery` suggestion instead of guessing.

## Generation Flow

The committed root spec is the immutable source:

- Raw source: `infomaniak_api_1781289971.json`
- Tooling copy: `spec/infomaniak.raw.json`
- Normalized output: `spec/infomaniak.normalized.json`
- Normalization report: `spec/normalization-report.json`
- Docs snapshot: `spec/infomaniak.docs-snapshot.json`
- Docs enrichment report: `spec/docs-enrichment-report.json`
- Generated TypeScript and tests: `src/generated`, `tests/generated`

Commands:

```bash
npm run normalize
npm run generate
npm run check:generated
npm run check:docs
```

`check:generated` re-runs normalization and generation, then fails if generated outputs differ from the committed state.

The docs-enrichment flow is:

```bash
npm run docs:fetch
npm run docs:check
```

Docs are fetched only into a committed snapshot for generation; SDK runtime and tests must not fetch documentation pages. `check:docs` re-runs `docs:check` without network access and fails if the committed enrichment report drifts.

## Testing Rules

Tests and CI must not perform real network calls. Runtime HTTP goes through injected or mocked `fetch`.

```bash
npm run check:no-network
npm run check:docs
npm run typecheck
npm test
npm run test:coverage
npm run build
```

Coverage is set to 100% for handwritten runtime, normalizer, generator, catalog, and OpenClaw adapter code. Generated endpoint representation tests cover every normalized operation.

## OpenClaw Setup

The native plugin entry is exported at:

```ts
import plugin from "liquid-potassium/openclaw/plugin";
```

The plugin registers five compact tools:

- `infomaniak_domains`
- `infomaniak_search`
- `infomaniak_describe`
- `infomaniak_discover`
- `infomaniak_call`

`infomaniak_describe` includes required resource IDs and discovery suggestions. `infomaniak_discover` discovers reviewed resources or returns a structured no-public-discovery explanation.

Plugin config supports:

- `token`
- `baseUrl`
- `allowedDomains`
- `allowedOperations`
- `deniedOperations`
- `blockMutating`

The OpenClaw skill is in `openclaw/skills/infomaniak/SKILL.md`. Agents should search, describe, discover, and then call; mutating operations require explicit user intent plus plugin permission.
