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
- The official Infomaniak Developer Portal operation pages expose structured `data-page` JSON containing richer operation metadata than the raw OpenAPI file, including parameter examples, enums, docs categories, pagination/sorting flags, and capabilities.
- Newsletter endpoints are a representative resource-discovery pain point: `/1/newsletters/{domain}` uses an integer Newsletter Domain identifier, not a DNS name, and the public spec/docs do not expose an obvious "list my newsletter domains" endpoint.
- The public OpenAPI `mail` domain covers Mail Hosting/admin routes under `/1/mail_hostings/**`; mailbox consumption uses the Mail application host `https://mail.infomaniak.com/api` and is absent from the committed OpenAPI spec and public docs snapshot currently used for generation.
- Reviewed mailbox-consumption routes must live in a separate handwritten Mail application surface until Infomaniak publishes official OpenAPI/docs metadata for them.
- The SDK includes a curated `client.workflows` action layer to ease migration from existing OpenClaw skills and command-line glue without exposing one tool per endpoint.

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
    fetch-docs-snapshot.ts
    check-docs-snapshot.ts
    generate-types.ts
    generate-operations.ts
    generate-endpoint-tests.ts
  spec/
    infomaniak.raw.json
    infomaniak.normalized.json
    normalization-report.json
    infomaniak.docs-snapshot.json
    docs-enrichment-report.json
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
- `mail`: generated public Mail Hosting/admin operations under `/1/mail_hostings/**`
- `mail.application`: reviewed Mail application mailbox-consumption routes under `https://mail.infomaniak.com/api/**`, kept separate from generated OpenAPI operations
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
await client.mail.application.listUserMailboxes();
await client.mail.application.listThreads("mailbox-uuid", "inbox");
await client.workflows.run({ domain: "kdrive", action: "listDirectory", input: { drive_id: 3024749 } });
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
- `ResourceKind`
- `ResourceDescriptor`
- `ResourceDiscoveryRecipe`
- `OperationRequirement`
- `DiscoverySuggestion`
- `DomainWorkflowClient`
- `DomainActionMetadata`
- `DomainActionRequest`
- generated OpenAPI `paths`, `components`, and operation metadata types

Client config:

- `token?: string | (() => string | Promise<string>)`
- `baseUrl?: string`, default `https://api.infomaniak.com`
- `mailApplicationBaseUrl?: string`, default `https://mail.infomaniak.com`
- `fetch?: typeof fetch`
- `headers?: HeadersInit | (() => HeadersInit | Promise<HeadersInit>)`
- `userAgent?: string`

Every request must support `AbortSignal`.

## Mail Application Consumption

Mailbox content workflows are a reviewed handwritten layer because they are not present in the public OpenAPI snapshot. This layer must be small, typed, documented, and fully unit-tested.

Supported SDK surface:

- `client.mail.application.listUserMailboxes()`
- `client.mail.application.listFolders(mailboxUuid)`
- `client.mail.application.listThreads(mailboxUuid, folderId, options?)`
- `client.mail.application.getMessage(resource, options?)`
- `client.mail.application.getMailboxQuota(mailbox, productId, options?)`
- `client.mail.application.createDraft(mailboxUuid, payload, options?)`
- `client.mail.application.updateDraft(mailboxUuid, draftUuid, payload, options?)`
- `client.mail.application.getDraft(mailboxUuid, draftUuid, options?)`
- `client.mail.application.deleteDraft(mailboxUuid, draftUuid, options?)`
- `client.mail.application.scheduleDraft(draftResource, scheduleDate, options?)`
- `client.mail.application.deleteSchedule(scheduleAction, options?)`
- `client.mail.application.cancelSend(cancelSendResource, options?)`
- `client.mail.application.moveMessages(mailboxUuid, payload, options?)`
- `client.mail.application.currentMyKSuite(options?)`

Maintenance rules:

- Prefer official Infomaniak OpenAPI/docs metadata whenever it exists.
- When public docs are unavailable, reviewed local working implementations may be used only as fallback provenance and must be documented in `docs/mail-application-api.md`.
- Do not merge Mail application routes into generated OpenAPI metadata unless official OpenAPI/docs operation data becomes available.
- Keep all tests mocked through injected `fetch`.
- Never store private mailbox content, tokens, cookies, or authorization headers in fixtures or docs.

## SDK Domain Workflow Actions

The migration bridge for `potassium-openclaw` should live in the SDK as curated domain workflow actions, not as OpenClaw-only glue. The goal is to make common user tasks easy while keeping the lower-level generated client, catalog, discovery, and Mail application APIs available.

Required workflow surface:

- `client.workflows.listActions(options?)`
- `client.workflows.describeAction(domain, action)`
- `client.workflows.run({ domain, action, input, signal })`
- standalone exports `listDomainActions`, `describeDomainAction`, `runDomainAction`, and `createDomainWorkflowClient`

Workflow action rules:

- Organize by Infomaniak domain, using action names such as `kdrive/listDirectory`, `mail/getMessage`, `kchat/createPost`, and `urlShortener/createLink`.
- Expose input metadata, mutating flags, and backing operation IDs so OpenClaw adapters can explain and gate calls.
- Cover every domain with at least one useful action, even if some actions only route to discovery or a reviewed no-public-discovery result.
- Prefer generated OpenAPI operations whenever possible.
- Route mailbox-consumption actions through `client.mail.application`, keeping Mail Hosting/admin and Mail application APIs separate.
- Route opaque-ID lookup actions through `client.discovery` rather than duplicating discovery logic.
- Validate required input before calling the runtime; fail closed with clear `InfomaniakError` messages.
- Preserve `AbortSignal` and injected `fetch` behavior.
- Keep tests mocked and maintain 100% unit coverage for the workflow layer.

This layer is a convenience facade, not the source of truth. If an operation is missing from workflows, callers can still use catalog search/describe plus generated or raw operation calls. Add workflow actions only when they represent common migration workflows or reduce repeated adapter code.

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
- Serialize nested query objects using Infomaniak-compatible bracket notation, such as `filter[service_names][]=mailing`.
- Preserve simple top-level array behavior for existing callers.
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
- auth requirements when known;
- parameter descriptions, schema type, enum values, examples, style, and explode behavior when available;
- docs URL and docs category path when available;
- pagination, sorting, capability, beta, and public-cloud metadata when available.

Catalog helpers:

- `listDomains()`
- `listOperations(domain?)`
- `searchOperations(query, filters?)`
- `getOperation(operationId)`
- `describeOperation(operationId)`
- `describeOperationRequirements(operationId)`
- `isMutatingOperation(operationId)`
- `listResourceKinds(options?)`
- `describeResourceKind(kind)`
- `discoverResources(client, options)`
- `createResourceDiscovery(client)`

Search should match operation ID, original operation ID, path, method, summary, description, and tags.

## Docs-Enriched Resource Discovery

Resource discovery is the next major usability layer after the generated SDK, catalog, and OpenClaw tools. Its purpose is to answer: "What identifier does this operation need, how can I find it, and is there a public API path to discover it?"

### Docs Snapshot And Enrichment

Use the official Infomaniak Developer Portal docs as a generation-time enrichment source.

Required commands:

- `docs:fetch`: fetch one official docs page, collect the navigation endpoint list, fetch each operation page, extract `data-page.props.operation.meta`, and write a deterministic committed snapshot.
- `docs:check`: validate that the committed snapshot still maps to normalized operations by `method + path` without making network calls.

Rules:

- Do not fetch documentation at SDK runtime.
- Do not fetch documentation in unit tests or CI validation except when a maintainer explicitly runs `docs:fetch`.
- Treat docs examples as examples only, never as real account or customer IDs.
- Generate from the committed docs snapshot so normal generation remains reproducible.
- Emit `spec/docs-enrichment-report.json` with matched operations, unmatched docs entries, unmatched spec entries, changed examples/enums, and warnings.

Generated catalog metadata must preserve docs-enriched facts when available:

- full parameter schema summaries;
- parameter descriptions;
- enum and `x-values` values;
- examples;
- docs URL;
- category/subcategory path;
- `x-paginable`, `x-sortable`, `x-capabilities`, beta flags, and public-cloud flags.

### Discovery Model

Add a typed discovery model that can represent both successful discovery paths and known gaps.

Core concepts:

- `ResourceKind`: a named resource type such as account, product, kDrive drive, mail service, mailbox, newsletter domain, kChat team, public cloud project, video channel, VOD channel, radio product, Swiss Backup product, short URL, eTicket event, or AI product.
- `ResourceDescriptor`: one discovered resource with stable id, display label, domain, kind, raw source operation, and optional parent resource references.
- `ResourceDiscoveryRecipe`: a read-only operation plus mapping rules that turn API results into descriptors.
- `OperationRequirement`: the required path/query/header/body identifiers for an operation and the resource kinds likely to satisfy them.
- `DiscoverySuggestion`: guidance returned when discovery is missing, ambiguous, blocked by auth, or not exposed by the public API.

Discovery must fail honestly. If the public API does not expose a list endpoint for a required ID, return an explicit explanation and recommended manual source instead of guessing or probing random IDs.

### Generation And Curated Rules

Use generated candidates plus curated overrides.

Generated candidates should come from:

- read-only list/search/show operations;
- docs categories and subcategories;
- path parameter names and descriptions;
- parameter schema types and examples;
- response shapes containing `id`, `name`, `display_name`, `email`, `service_name`, or similar labels.

Curated overrides must review and stabilize:

- root resources for each domain;
- parent-child relationships;
- display labels;
- resource id field names;
- known non-discoverable resources;
- operations that look like list operations but are not useful for discovery.

Every domain must have at least one of:

- a reliable discovery recipe;
- a reviewed explanation that no public live discovery path is available yet.

Newsletter-specific rule:

- The newsletter `domain` path parameter is an integer Newsletter Domain id, not a DNS domain string.
- `NewsletterShowDomain`, `NewsletterListCampaigns`, and related operations should point to the Newsletter Domain resource kind.
- If no recipe can list Newsletter Domain ids, discovery must explain that the id must come from the Newsletter Manager/API key context or a future public endpoint.

### SDK Surface

Expose discovery through the SDK without hiding raw operation behavior.

Required shape:

```ts
const discovery = createResourceDiscovery(client);

const resources = await discovery.discover({
  domain: "newsletter",
  kind: "newsletterDomain",
});

const requirements = describeOperationRequirements("NewsletterListCampaigns");
```

Discovery calls must:

- use injected `fetch`;
- use only non-mutating operations;
- support `AbortSignal`;
- respect base URL, token, headers, and caller-provided fetch;
- return structured errors and suggestions instead of throwing for expected missing-resource cases.

### OpenClaw Surface

Add a compact `infomaniak_discover` tool.

The agent workflow becomes:

1. `infomaniak_search`
2. `infomaniak_describe`
3. `infomaniak_discover`
4. `infomaniak_call`

`infomaniak_describe` should include operation requirements and discovery suggestions. `infomaniak_discover` should accept optional domain, resource kind, operation id, parent resource values, and limit. It must obey the same domain and operation allow/deny policy as the call tool.

## OpenClaw Integration

Build a native OpenClaw tool plugin after the SDK is stable.

Do not register one tool per Infomaniak endpoint.

Register compact tools:

- `infomaniak_domains`: list available domains and operation counts.
- `infomaniak_search`: search operations by domain, text, method, tag, and mutating flag.
- `infomaniak_describe`: describe one operation's parameters, body, response types, and safety metadata.
- `infomaniak_discover`: discover resource IDs and explain missing or non-discoverable requirements.
- `infomaniak_mail_application`: call reviewed Mail application mailbox-consumption actions that are absent from the public OpenAPI catalog.
- `infomaniak_call`: call one operation by ID with validated params/body.

If model usability requires more domain separation, add optional domain tools such as `infomaniak_kdrive`, `infomaniak_mail`, and `infomaniak_kchat`, each using the same action set: `search`, `describe`, and `call`.

Plugin config:

- API token through config or SecretRef-compatible environment wiring.
- Optional base URL.
- Optional Mail application base URL.
- Optional allowlist of domains.
- Optional allowlist or denylist of operations.
- Optional block for mutating operations.

OpenClaw safety:

- Validate domain and operation before calling.
- Refuse calls to unknown operations.
- Prefer SDK workflow actions for common migrated skills before falling back to raw search/describe/call.
- Route mailbox-consumption workflows through `infomaniak_mail_application`, not generated Mail Hosting/admin operations.
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
- Use resource discovery before asking the user for opaque IDs.
- Explain when an ID cannot be discovered through public API endpoints.
- Keep implementation out of the skill.

The skill must reference the plugin tools and the domain model.

## Testing Plan

Use Vitest with strict coverage thresholds set to 100% for statements, branches, functions, and lines for handwritten code.

No test may make a real network call.

Test groups:

- Normalizer unit tests for malformed tags, synthetic IDs, duplicate IDs, missing refs, domain assignment, and report output.
- Generator tests for deterministic output and stable operation wrapper names.
- Docs snapshot tests for extracting `data-page` operation JSON from fixture HTML and matching docs entries to normalized operations.
- Docs enrichment tests for parameter schema, enum, example, category, pagination, sorting, and docs URL metadata.
- Runtime tests for URL construction, auth headers, custom headers, JSON body, multipart body, binary responses, aborts, and typed errors.
- Runtime tests for nested Infomaniak query serialization with bracket notation.
- Catalog tests for domain listing, operation lookup, search, describe, and mutating flags.
- Resource discovery tests for every domain, including reliable recipes or explicit no-public-discovery explanations.
- Generated endpoint tests for every normalized operation.
- OpenClaw plugin tests for tool schemas, config validation, domain filtering, operation search, describe, discovery, call validation, and mutating blocks.
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

### Phase 9: Docs-Enriched Resource Discovery

- Add docs snapshot tooling and committed docs snapshot artifacts.
- Enrich generated operation metadata from the docs snapshot.
- Add Infomaniak-compatible nested query serialization.
- Add resource discovery types, catalog helpers, and SDK discovery API.
- Add generated discovery candidates plus reviewed curated overrides for every domain.
- Add `infomaniak_discover` and enrich `infomaniak_describe` with requirements and suggestions.
- Update the OpenClaw skill to teach search, describe, discover, then call.
- Acceptance: every domain has either a tested discovery recipe or an explicit reviewed no-public-discovery explanation; no tests make real network calls; newsletter domain-id requirements are described accurately.

### Phase 10: Mail Application Consumption Gap Closure

- Audit public Infomaniak Developer Portal documentation and committed docs snapshot for mailbox-consumption routes.
- Record the root cause: Mail Hosting/admin public routes are not the same API surface as mailbox consumption.
- Add a reviewed handwritten `client.mail.application` SDK surface for mailbox-consumption routes missing from the public OpenAPI spec.
- Add the compact OpenClaw `infomaniak_mail_application` tool for mailbox content workflows.
- Apply existing plugin policy to Mail application actions: `allowedDomains`, `allowedOperations`, `deniedOperations`, `blockMutating`, and `confirm_mutating`.
- Document route provenance, official-docs absence, fallback review sources, and maintenance rules in `docs/mail-application-api.md`.
- Update README, skill instructions, and progress tracking.
- Acceptance: mailboxes, folders, threads, messages, quotas, drafts, schedules, cancel-send, message move, and current kSuite mail context are reachable through mocked SDK/OpenClaw tests without real network calls.

### Phase 11: OpenClaw Migration Readiness

- Add a curated SDK domain workflow action layer for common tasks currently handled by existing OpenClaw skills or command-line glue.
- Ensure every Infomaniak domain has at least one workflow action.
- Include migration-critical actions for kDrive browsing, Private-folder lookup, uploads, Mail application mailbox reads, kChat team/channel/post workflows, URL shortener actions, newsletter actions, and resource discovery.
- Keep the OpenClaw plugin compact; do not add one tool per workflow action in this repository.
- Document the SDK-first migration boundary so the `potassium-openclaw` repository can adopt `client.workflows` while keeping OpenClaw-specific orchestration there.
- Acceptance: `client.workflows` lists/describes/runs typed actions with mocked tests, preserves mutating metadata, uses injected fetch paths only, and maintains 100% coverage.

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
- Operation catalog includes docs-enriched parameter/schema metadata where available.
- Resource discovery supports every domain through recipes or explicit no-public-discovery explanations.
- Nested query serialization supports Infomaniak filter object syntax.
- OpenClaw plugin uses compact tools, not one tool per endpoint.
- OpenClaw plugin exposes compact discovery alongside search, describe, and call.
- OpenClaw plugin exposes reviewed mailbox-consumption actions through a compact Mail application tool.
- Mail Hosting/admin and Mail application consumption are clearly separated in SDK, docs, and skill instructions.
- SDK workflow actions expose migration-friendly domain actions while preserving raw generated/catalog access.
- Skill documents safe usage.
- Docs explain installation, generation, testing, and OpenClaw configuration.
- `PROGRESS.md` accurately reflects current phase, completed work, next tasks, blockers, and validation status.
- Conventional Commit history remains small and reviewable.
