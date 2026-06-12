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

## Generation Flow

The committed root spec is the immutable source:

- Raw source: `infomaniak_api_1781289971.json`
- Tooling copy: `spec/infomaniak.raw.json`
- Normalized output: `spec/infomaniak.normalized.json`
- Normalization report: `spec/normalization-report.json`
- Generated TypeScript and tests: `src/generated`, `tests/generated`

Commands:

```bash
npm run normalize
npm run generate
npm run check:generated
```

`check:generated` re-runs normalization and generation, then fails if generated outputs differ from the committed state.

## Testing Rules

Tests and CI must not perform real network calls. Runtime HTTP goes through injected or mocked `fetch`.

```bash
npm run check:no-network
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

The plugin registers four compact tools:

- `infomaniak_domains`
- `infomaniak_search`
- `infomaniak_describe`
- `infomaniak_call`

Plugin config supports:

- `token`
- `baseUrl`
- `allowedDomains`
- `allowedOperations`
- `deniedOperations`
- `blockMutating`

The OpenClaw skill is in `openclaw/skills/infomaniak/SKILL.md`. Agents should search and describe before calling, and mutating operations require explicit user intent plus plugin permission.
