# liquid-potassium

Domain-oriented TypeScript SDK and OpenClaw integration for the Infomaniak API.

`liquid-potassium` turns the Infomaniak OpenAPI specification into a generated, searchable, tested Node SDK. It also ships compact OpenClaw tools so agents can search, describe, discover resource IDs, and call Infomaniak operations without registering one tool per endpoint.

This is an unofficial community project and is not affiliated with Infomaniak.

## Highlights

- TypeScript-first SDK for Node.js 22+ and ESM.
- Generated coverage for all 1,429 operations in the committed Infomaniak OpenAPI spec.
- Domain clients for `kdrive`, `mail`, `kchat`, `newsletter`, `publicCloud`, `video`, `vod`, `radio`, `domains`, `account`, `profile`, `ai`, `kmeet`, `swissBackup`, `urlShortener`, `etickets`, and shared `core` operations.
- Searchable operation catalog with docs-enriched metadata from a committed Infomaniak Developer Portal snapshot.
- Resource discovery helpers for common opaque IDs such as kDrive drive IDs.
- Reviewed Mail application helpers for mailbox consumption routes that are not present in the public OpenAPI spec.
- Native OpenClaw plugin with six compact tools.
- No real network calls in tests; runtime HTTP goes through injected `fetch`.
- 100% unit coverage threshold for handwritten runtime, generation, catalog, discovery, and OpenClaw adapter code.

## Install

```bash
npm install liquid-potassium
```

For local development:

```bash
git clone https://github.com/OpenCow42/liquidPotassium.git
cd liquidPotassium
npm ci
npm run ci
```

## Quick Start

```ts
import { createInfomaniakClient, searchOperations } from "liquid-potassium";

const client = createInfomaniakClient({
  token: process.env.INFOMANIAK_TOKEN,
  fetch,
});

const matches = searchOperations({
  domain: "kdrive",
  query: "accessible drives",
  limit: 5,
});

const drives = await client.kdrive.operations.kdriveaccessiblesdrivesv2({
  query: { account_id: 123456 },
});
```

Every SDK request supports an injected `fetch`, bearer token providers, custom headers, custom base URLs, and `AbortSignal`.

## Client Surfaces

Generated domain operations:

```ts
await client.kdrive.operations.kdrivegetfilesindirectoryv3({
  path: { drive_id: 3024749, file_id: 1 },
  query: { limit: 100, with: "path,capabilities" },
});
```

Raw typed request helpers:

```ts
await client.raw.GET("/1/kmeet/rooms/{room_id}/settings", {
  path: { room_id: "room-123" },
});
```

Operation catalog:

```ts
import {
  describeOperation,
  isMutatingOperation,
  listDomains,
  listOperations,
  searchOperations,
} from "liquid-potassium";

const domains = listDomains();
const reads = listOperations({ domain: "kdrive", method: "GET", mutating: false });
const operation = describeOperation("kDriveAccessiblesDrivesV2");
const mutating = isMutatingOperation(operation.operationId);
```

## Resource Discovery

Resource discovery helps callers find required IDs before calling operations.

```ts
import { createInfomaniakClient, describeOperationRequirements } from "liquid-potassium";

const client = createInfomaniakClient({ token: process.env.INFOMANIAK_TOKEN, fetch });

const requirements = describeOperationRequirements("kDriveGetFilesInDirectoryV3");
const drives = await client.discovery.discover({ kind: "kdriveDrive", parents: { account_id: 123456 } });
```

Discovery uses reviewed read-only operations. If an ID cannot be discovered through the public API, the SDK returns a structured `no_public_discovery` suggestion instead of guessing.

## Mail Application API

The generated `mail` domain covers public Mail Hosting/admin routes under `/1/mail_hostings/**`.

Mailbox consumption uses Infomaniak's Mail application API at `https://mail.infomaniak.com/api`, which is not present in the committed public OpenAPI spec. Those reviewed routes are exposed separately:

```ts
const mailboxes = await client.mail.application.listUserMailboxes();
const folders = await client.mail.application.listFolders("mailbox-uuid");
const threads = await client.mail.application.listThreads("mailbox-uuid", "inbox", {
  filter: "unseen",
});
const message = await client.mail.application.getMessage(
  "/api/mail/mailbox-uuid/folder/inbox/message/42",
  { preferredFormat: "text" },
);
```

`mailApplicationBaseUrl` defaults to `https://mail.infomaniak.com`. Route provenance and maintenance rules are documented in [`docs/mail-application-api.md`](docs/mail-application-api.md).

## OpenClaw Plugin

The native plugin entry is exported at:

```ts
import plugin from "liquid-potassium/openclaw/plugin";
```

The plugin registers six compact tools:

- `infomaniak_domains`
- `infomaniak_search`
- `infomaniak_describe`
- `infomaniak_discover`
- `infomaniak_mail_application`
- `infomaniak_call`

Plugin config supports:

- `token`
- `baseUrl`
- `mailApplicationBaseUrl`
- `allowedDomains`
- `allowedOperations`
- `deniedOperations`
- `blockMutating`

The OpenClaw skill lives in [`openclaw/skills/infomaniak/SKILL.md`](openclaw/skills/infomaniak/SKILL.md). Agents should search, describe, discover, and only then call. Mutating operations require explicit user intent and plugin permission.

## Generation

The committed root spec is the immutable input:

- Raw source: `infomaniak_api_1781289971.json`
- Tooling copy: `spec/infomaniak.raw.json`
- Normalized output: `spec/infomaniak.normalized.json`
- Normalization report: `spec/normalization-report.json`
- Docs snapshot: `spec/infomaniak.docs-snapshot.json`
- Docs enrichment report: `spec/docs-enrichment-report.json`
- Generated SDK and tests: `src/generated`, `tests/generated`

Useful commands:

```bash
npm run normalize
npm run generate
npm run check:generated
npm run check:docs
```

`check:generated` re-runs normalization and generation, then fails if generated outputs drift from the committed state. `check:docs` validates the committed docs snapshot without fetching the web.

## Testing

Tests and CI must not perform real network calls. Runtime HTTP goes through injected or mocked `fetch`.

```bash
npm run check:no-network
npm run check:docs
npm run typecheck
npm test
npm run test:coverage
npm run build
```

The full release gate is:

```bash
npm run ci
```

## Security

- Do not commit Infomaniak API tokens, cookies, mailbox content, customer data, or account-specific secrets.
- Prefer token providers or environment variables for credentials.
- The SDK does not log authorization headers or request bodies by default.
- Tests must use fixtures and mocked `fetch`, never live Infomaniak services.

## Project Status

`0.1.0` is an initial open-source release candidate. Public API shape is usable, but consumers should expect breaking changes until `1.0.0`.

## Contributing

Before opening a change:

1. Read [`AGENTS.md`](AGENTS.md), [`MANIFESTO.md`](MANIFESTO.md), and [`MASTERPLAN.md`](MASTERPLAN.md).
2. Keep generated artifacts deterministic.
3. Add focused tests for handwritten behavior.
4. Run `npm run ci`.
5. Use Conventional Commits.

## License

Licensed under the [Apache License 2.0](LICENSE).
