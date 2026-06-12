# Master Plan

## Purpose

Build a production-quality TypeScript/Node SDK for the Infomaniak API, generated from the official OpenAPI specification and organized by Infomaniak product domains. The end state is a safe, searchable, domain-oriented OpenClaw integration that lets agents inspect, describe, and call Infomaniak operations without exposing a huge raw endpoint list to the model.

This plan is the implementation blueprint. It should be followed together with `MANIFESTO.md`, `AGENTS.md`, and the live tracker in `PROGRESS.md`.

## Current Known Facts

- The raw OpenAPI file is `infomaniak_api_1781289971.json`.
- The spec is OpenAPI 3.1.0 with server `https://api.infomaniak.com`.
- The spec contains 1,045 paths and 1,429 operations.
- Method counts are 719 `GET`, 326 `POST`, 190 `DELETE`, 161 `PUT`, and 33 `PATCH`.
- 1,107 operations have `operationId`; 322 are missing `operationId`.
- 12 duplicate `operationId` groups exist.
- The spec has 769 schemas and a small number of missing component refs that must be normalized.
- 83 operations have malformed tags as a string value instead of an array.
- Content types include JSON, binary, file, image, CSV, ZIP, and multipart form data.

## Non-Negotiable Standards

- Use TypeScript targeting Node 22+.
- Use ESM packages.
- Keep all handwritten runtime code typed.
- Keep generated code deterministic and clearly marked.
- Keep the raw spec immutable; all fixes happen through normalization.
- Maintain 100% unit test coverage for handwritten runtime, generation, normalization, and OpenClaw adapter logic.
- Test every generated endpoint from the normalized spec without making real network calls.
- Use mocked/injected `fetch` for all tests.
- Keep files below 1,000 lines where practical by splitting domains, generators, and tests.
- Use Conventional Commits with small, focused commits.

## Target Repository Shape

Start as a single package if that is fastest, but structure it so packages can split cleanly later.

```text
.
  AGENTS.md
  MANIFESTO.md
  MASTERPLAN.md
  PROGRESS.md
  package.json
  tsconfig.json
  vitest.config.ts
  src/
    index.ts
    client/
      create-client.ts
      fetcher.ts
      errors.ts
      auth.ts
      response.ts
    domains/
      index.ts
      domain-types.ts
    generated/
      schema.ts
      operations/
      catalog/
  scripts/
    normalize-openapi.ts
    generate-types.ts
    generate-operations.ts
    generate-endpoint-tests.ts
  spec/
    infomaniak.raw.json
    infomaniak.normalized.json
    normalization-report.json
  tests/
    unit/
    generated/
    fixtures/
  openclaw/
    plugin/
    skills/
```

If the project grows into a workspace, split it into these packages without changing public behavior:

```text
packages/
  infomaniak-sdk/
  openclaw-infomaniak-plugin/
  infomaniak-openclaw-skill/
  infomaniak-mcp-server/
```

The MCP server is a future adapter, not required for the first complete OpenClaw plugin.

## Progress And Coordination

Track all implementation progress in `PROGRESS.md`.

The work must be coordinated by one main agent from start to completion. The main agent owns task order, progress updates, verification, integration, and commits.

Subagents may be used only for bounded tasks assigned by the main agent. Subagent work must happen one task at a time and synchronously: assign one task, wait for the result, review and verify the result, update `PROGRESS.md`, then decide the next task.

Do not run parallel mutation streams unless the user explicitly changes this rule. Continue task by task until this master plan's completion checklist is satisfied.

## Domain Model

The SDK and OpenClaw integration are domain-first. Use path-prefix rules plus a small override map for ambiguous endpoints. Do not use tags as the primary grouping because the spec has malformed and sparse tags.

Initial domains:

- `kchat`: `/api/v4/**`
- `kdrive`: `/2/drive/**`, `/3/drive/**`, and `/2/app/{drive_id}/share/**`
- `mail`: `/1/mail_hostings/**`
- `kmeet`: `/1/kmeet/**`
- `newsletter`: `/1/newsletters/**`
- `publicCloud`: `/1/public_clouds/**`
- `domains`: `/2/domains/**`, `/2/zones/**`, `/2/tld/**`
- `ai`: `/1/ai/**`, `/2/ai/**`
- `vod`: `/1/vod/**`, `/2/vod/**`
- `video`: `/1/videos/**`
- `radio`: `/1/radios/**`
- `swissBackup`: `/1/swiss_backups/**`
- `urlShortener`: `/1/url-shortener/**`, `/2/url-shortener/**`
- `etickets`: `/2/etickets/**`
- `account`: `/1/accounts/**`, `/2/accounts/**`
- `profile`: `/2/profile/**`
- `core`: actions, async tasks, app information, countries, languages, products, timezones, events, myKsuite, and other shared platform endpoints.

Every operation must have exactly one domain in generated metadata. Ambiguous operations must be assigned in a reviewed override file.

## Public SDK API

Expose both typed domain methods and raw typed access.

Primary shape:

```ts
const client = createInfomaniakClient({
  token: process.env.INFOMANIAK_TOKEN,
  fetch: customFetch,
});

await client.kdrive.operations.someGeneratedOperation(params);
await client.mail.operations.someGeneratedOperation(params);
await client.raw.GET("/2/drive/{drive_id}/files/{file_id}", options);
```

Required public exports:

- `createInfomaniakClient(config)`
- `InfomaniakClient`
- `InfomaniakClientConfig`
- `InfomaniakError`
- `InfomaniakOperationError`
- `InfomaniakDomain`
- `OperationCatalog`
- generated OpenAPI `paths`, `components`, and operation metadata types

Client config:

- `token?: string | (() => string | Promise<string>)`
- `baseUrl?: string`, default `https://api.infomaniak.com`
- `fetch?: typeof fetch`
- `headers?: HeadersInit | (() => HeadersInit | Promise<HeadersInit>)`
- `userAgent?: string`

Every request must support `AbortSignal`.

## Spec Normalization

Create `scripts/normalize-openapi.ts`.

Inputs:

- `spec/infomaniak.raw.json`
- domain rule definitions
- domain override map
- schema alias/fix map

Outputs:

- `spec/infomaniak.normalized.json`
- `spec/normalization-report.json`

Required normalization behavior:

- Preserve the raw spec unchanged.
- Convert malformed `tags` values into arrays.
- Assign `["untagged"]` only when no useful tag exists.
- Generate stable `operationId` values for missing IDs using method and path.
- Deduplicate duplicate `operationId` values by adding stable method/path suffixes.
- Add or alias missing component schemas needed by refs.
- Preserve original IDs and tags in `x-infomaniak-original-*` extension fields.
- Attach `x-infomaniak-domain`.
- Attach `x-infomaniak-mutating` for non-GET operations.
- Attach `x-infomaniak-content-types` for request and response content types.
- Emit a report listing every repair, synthetic ID, duplicate ID, domain override, and unresolved warning.
- Fail if any operation has no domain, duplicate normalized ID, unresolved local ref, or invalid method/path metadata.

## Code Generation

Use `openapi-typescript` to generate TypeScript types from the normalized spec. Use `openapi-fetch` as the low-runtime typed fetch engine.

Generate:

- `src/generated/schema.ts`
- `src/generated/catalog/operations.ts`
- `src/generated/catalog/domains.ts`
- `src/generated/operations/<domain>.ts`
- generated endpoint tests under `tests/generated/`

Generated files must include a header:

```ts
// Generated by <command>. Do not edit by hand.
```

Generated operation wrappers must:

- call the shared runtime request layer;
- preserve domain, method, path, operation ID, summary, tags, and content-type metadata;
- support path, query, header, cookie, body, form, and multipart parameters as represented by the spec;
- return typed success data or throw/return typed errors according to the runtime policy;
- avoid hand-authored business logic.

## Runtime Behavior

All HTTP must flow through a small handwritten transport layer.

Runtime requirements:

- Inject `fetch` for all requests.
- Build URLs from base URL, path templates, and query parameters.
- Add bearer auth when `token` is configured.
- Allow custom headers.
- Never log secrets.
- Parse JSON responses when content type is JSON.
- Return `Blob`, `ArrayBuffer`, `ReadableStream`, or `Response` for binary/file responses according to the runtime design chosen in implementation.
- Surface non-2xx responses as typed `InfomaniakOperationError` values.
- Preserve status, response headers, request method, path, operation ID, and safe response summary on errors.
- Support aborts through `AbortSignal`.
- Keep retries opt-in and disabled by default.

## Operation Catalog

The catalog is the bridge between the full SDK and OpenClaw.

Each operation metadata entry must include:

- normalized operation ID;
- original operation ID when present;
- domain;
- method;
- path;
- summary;
- description when available;
- tags;
- mutating flag;
- path parameters;
- query parameters;
- header parameters;
- body content types;
- response content types;
- deprecation flag;
- auth requirements when known.

Catalog helpers:

- `listDomains()`
- `listOperations(domain?)`
- `searchOperations(query, filters?)`
- `getOperation(operationId)`
- `describeOperation(operationId)`
- `isMutatingOperation(operationId)`

Search should match operation ID, original operation ID, path, method, summary, description, and tags.

## OpenClaw Integration

Build a native OpenClaw tool plugin after the SDK is stable.

Do not register one tool per Infomaniak endpoint.

Register compact tools:

- `infomaniak_domains`: list available domains and operation counts.
- `infomaniak_search`: search operations by domain, text, method, tag, and mutating flag.
- `infomaniak_describe`: describe one operation's parameters, body, response types, and safety metadata.
- `infomaniak_call`: call one operation by ID with validated params/body.

If model usability requires more domain separation, add optional domain tools such as `infomaniak_kdrive`, `infomaniak_mail`, and `infomaniak_kchat`, each using the same action set: `search`, `describe`, and `call`.

Plugin config:

- API token through config or SecretRef-compatible environment wiring.
- Optional base URL.
- Optional allowlist of domains.
- Optional allowlist or denylist of operations.
- Optional block for mutating operations.

OpenClaw safety:

- Validate domain and operation before calling.
- Refuse calls to unknown operations.
- Refuse mutating operations when disabled.
- Return clear structured errors.
- Keep tool schemas compact.
- Make mutating metadata available for future approval gating.

## Skill Integration

Create an OpenClaw skill only after the plugin exists.

Skill goals:

- Teach agents to search and describe before calling.
- Prefer read-only operations first.
- Require explicit user intent before mutating calls.
- Explain required parameters before requesting missing data.
- Keep implementation out of the skill.

The skill must reference the plugin tools and the domain model.

## Testing Plan

Use Vitest with strict coverage thresholds set to 100% for statements, branches, functions, and lines for handwritten code.

No test may make a real network call.

Test groups:

- Normalizer unit tests for malformed tags, synthetic IDs, duplicate IDs, missing refs, domain assignment, and report output.
- Generator tests for deterministic output and stable operation wrapper names.
- Runtime tests for URL construction, auth headers, custom headers, JSON body, multipart body, binary responses, aborts, and typed errors.
- Catalog tests for domain listing, operation lookup, search, describe, and mutating flags.
- Generated endpoint tests for every normalized operation.
- OpenClaw plugin tests for tool schemas, config validation, domain filtering, operation search, describe, call validation, and mutating blocks.
- Skill content tests or lint checks to ensure referenced tool names stay valid.

Generated endpoint test minimum:

- Assert operation exists in the generated catalog.
- Assert domain, method, and path match the normalized spec.
- Assert parameter buckets match the normalized spec.
- Assert request body content types match the normalized spec.
- Assert response content types match the normalized spec.
- Assert the generated wrapper calls the injected mock fetch with the expected method and path-template expansion.

## Implementation Phases

### Phase 1: Project Scaffold

- Add package metadata, TypeScript config, Vitest config, lint/typecheck scripts, and source/test folders.
- Move or copy the raw spec into `spec/infomaniak.raw.json`.
- Add `.gitignore` for OS files, build output, coverage, and dependency folders.
- Acceptance: `npm test`, `npm run typecheck`, and `npm run build` commands exist and run, even if implementation is minimal.

### Phase 2: Spec Profiling And Normalization

- Implement domain rule definitions and override map.
- Implement `normalize-openapi.ts`.
- Produce normalized spec and report.
- Add tests for every known spec repair category.
- Acceptance: normalization is deterministic, all operations have domains and unique operation IDs, and no local refs are unresolved.

### Phase 3: Generated Types And Catalog

- Generate OpenAPI TypeScript types.
- Generate operation catalog and domain metadata.
- Generate endpoint representation tests.
- Acceptance: every normalized operation appears exactly once in the catalog and generated endpoint tests cover all operations.

### Phase 4: Runtime Client

- Implement `createInfomaniakClient`.
- Implement auth, URL building, request body handling, response parsing, binary handling, abort support, and typed errors.
- Add full unit coverage.
- Acceptance: the raw typed client can call mocked endpoints for every method and content-type family.

### Phase 5: Domain Operation Wrappers

- Generate domain clients and operation wrappers.
- Export domain namespaces from the main SDK.
- Add tests for generated wrapper call behavior.
- Acceptance: callers can use `client.kdrive.operations.*`, `client.mail.operations.*`, and raw typed access.

### Phase 6: OpenClaw Plugin

- Build native OpenClaw tool plugin using the SDK.
- Register compact discovery and call tools.
- Add config schema and validation.
- Add plugin tests with mocked SDK/fetch.
- Acceptance: OpenClaw tools can list domains, search operations, describe operations, and call mocked operations without real network access.

### Phase 7: OpenClaw Skill

- Add skill instructions for safe Infomaniak operation.
- Gate required token/config metadata.
- Add tests/lints to keep skill tool references valid.
- Acceptance: skill explains domain-first workflow and relies on plugin tools only.

### Phase 8: Release Readiness

- Add README usage examples.
- Add generated-code documentation.
- Add OpenClaw install/config examples.
- Add CI workflow for typecheck, tests, coverage, generation consistency, and no-network tests.
- Acceptance: a new maintainer can install, generate, test, and use the SDK/plugin from documented commands.

## Completion Checklist

- Raw spec is preserved.
- Normalized spec and report are generated.
- All operations have unique IDs.
- All operations have domains.
- All generated endpoints are tested.
- 100% unit test coverage is enforced.
- No tests perform real network calls.
- SDK exposes domain clients and raw typed access.
- Operation catalog supports OpenClaw search/describe/call workflows.
- OpenClaw plugin uses compact tools, not one tool per endpoint.
- Skill documents safe usage.
- Docs explain installation, generation, testing, and OpenClaw configuration.
- `PROGRESS.md` accurately reflects current phase, completed work, next tasks, blockers, and validation status.
- Conventional Commit history remains small and reviewable.
