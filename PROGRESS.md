# Progress

This file is the canonical live tracker for the Infomaniak SDK and OpenClaw integration project. Keep it current throughout implementation.

## Current State

- Fork task (2026-11-03): implemented Mail text-search options and opt-in compact OpenClaw listing. Independent review identified discontinuous pagination, nested-field leakage, and missing identifiers; these were corrected with synthetic tests. A subsequent coding-standards audit led to strict search input validation and additional pagination safeguards. `npm run ci` passed under Node 22.21.0 (116 tests, 100% configured coverage). No live mailbox calls, plugin installation, or message mutation. Search semantics and compact response shape remain unverified against a live mailbox; offset pagination is not a stable mailbox snapshot. Integration into an installed plugin and any mailbox cleanup remain future separately authorized work.

- Phase: Published SDK release and OpenClaw migration readiness.
- Active task: Migrating downstream `potassium-openclaw` usage to the published `liquid-potassium` package.
- Repository status: `liquid-potassium@0.1.0` is published on npm; OpenClaw workflow tooling and kDrive upload file-path support are implemented on branch `codex/liquid-library-openclaw-workflows`.
- Coordination mode: one main agent owns sequencing, verification, integration, and commits.

## Coordination Rules

- Work must be coordinated by one main agent from start to completion.
- The main agent owns `PROGRESS.md`, task ordering, acceptance checks, final integration, and commit boundaries.
- Subagents may be used for bounded tasks, but only one subagent task may run at a time.
- Subagent work must be synchronous: assign one task, wait for completion, review the result, update `PROGRESS.md`, then decide the next task.
- Do not run parallel mutation streams unless the user explicitly changes this rule.
- The main agent must verify subagent output before treating a task as complete.
- Continue task by task until the completion checklist in `MASTERPLAN.md` is satisfied.

## Completed Work

- `49a447c docs: add project standards`
  - Added `AGENTS.md` with engineering, testing, OpenAPI generation, runtime, OpenClaw, git, and quality standards.
- `0f16add docs: add project manifesto`
  - Added `MANIFESTO.md` and referenced it from `AGENTS.md`.
- `3aab2f1 docs: add project master plan`
  - Added `MASTERPLAN.md` and referenced it from `AGENTS.md`.
- `f57c58b docs: add infomaniak openapi spec`
  - Added `infomaniak_api_1781289971.json`.
- `b5eff5d docs: add progress tracking workflow`
  - Added `PROGRESS.md` and documented synchronous main-agent/subagent coordination in `AGENTS.md` and `MASTERPLAN.md`.
- `2ecffc3 chore: scaffold typescript project`
  - Added Node 22+ ESM TypeScript scaffold, Vitest, no-network test harness, `.gitignore`, package lock, and initial validation scripts.
- `bae9ddd feat: normalize infomaniak openapi spec`
  - Added spec copy, deterministic normalizer, normalized spec, normalization report, and normalizer tests.
- `c976922 feat: generate infomaniak operation catalog`
  - Added generated OpenAPI types, domain catalog metadata, domain operation wrappers, endpoint representation tests for all normalized operations, and deterministic generation scripts.
- `7b3ff7a feat: add runtime sdk client`
  - Added `createInfomaniakClient`, raw and generated operation dispatch, injectable fetch, auth/header providers, request/response handling, typed errors, and mocked runtime tests.
- `b95b654 feat: add operation catalog api`
  - Added public catalog helpers for domain listing, operation filtering/search, lookup, descriptions, mutating flags, and unknown-operation failures.
- `b5a335e feat: add openclaw infomaniak tools`
  - Added native OpenClaw plugin entry, compact tools, config policy handling, injected SDK calls, and OpenClaw adapter tests.
- `3d0fe5d feat: add openclaw infomaniak skill`
  - Added the Infomaniak OpenClaw skill and drift tests for valid tool references and safe search-describe-call guidance.
- `834383c docs: add release readiness`
  - Added README usage, release checklist, CI workflow, package exports, no-network policy check, and release validation.
- `39c0692 docs: plan resource discovery`
  - Added the Phase 9 docs-enriched resource discovery plan to project documentation.
- `83d88c2 feat: add docs snapshot tooling`
  - Added deterministic official-docs snapshot extraction, docs consistency checking, fixture-backed tests, and `docs:fetch`/`docs:check` scripts.
- `5604d71 fix: support alternate docs API hosts`
  - Fixed docs operation extraction for documented API examples that use product-specific absolute hosts, including kChat URLs.
- `17dc23d fix: retry docs snapshot fetches`
  - Added bounded retry/backoff handling for live docs snapshot fetching when the developer portal returns transient 429 or 5xx responses.
- `009a418 chore: add infomaniak docs snapshot`
  - Added the committed official docs snapshot and docs enrichment report, with 1,405 docs operations and 1,402 normalized-operation matches.
- `8b46773 feat: enrich catalog with docs metadata`
  - Enriched generated operation metadata from the committed docs snapshot with docs URLs, docs operation IDs, category paths, portal flags, capabilities, compact parameter descriptions/schema metadata/enums/examples, and response statuses.
  - Extended generated endpoint tests, catalog search/description, public exports, and OpenClaw search summaries to expose and verify docs-backed metadata.
- `dc7f743 feat: serialize nested query parameters`
  - Added Infomaniak-compatible bracket notation for nested query objects and nested arrays while preserving repeated-key serialization for simple top-level arrays.
  - Added runtime tests for nested filters such as `filter[service_names][]=mailing`.
- `d7c2135 feat: add resource discovery`
  - Added curated resource discovery kinds and recipes, operation requirement descriptions, no-public-discovery suggestions, SDK discovery helpers, and `client.discovery`.
  - Added OpenClaw `infomaniak_discover`, enriched `infomaniak_describe` with requirements, and updated the skill workflow to search, describe, discover, then call.
  - Added tests for every domain having a recipe or reviewed explanation, recipe safety, newsletter/kMeet no-public-discovery behavior, mocked discovery calls, response mapping, policy enforcement, and valid skill tool references.
- `feat: add mail application consumption api`
  - Recorded the root cause that public OpenAPI/docs Mail routes cover Mail Hosting/admin, while mailbox consumption uses the separate Mail application API host.
  - Added `client.mail.application` for reviewed mailbox-consumption workflows: user mailboxes, folders, threads, messages, quotas, drafts, schedules, cancel-send, message moves, and current kSuite mail context.
  - Added the compact OpenClaw `infomaniak_mail_application` tool with domain/operation policy checks, injected fetch, mutating-operation blocking, explicit confirmation, and parameter validation.
  - Updated README, `MASTERPLAN.md`, `AGENTS.md`, `MANIFESTO.md`, the Infomaniak OpenClaw skill, and `docs/mail-application-api.md` with route provenance and maintenance rules.
  - Added mocked SDK and OpenClaw tests for all reviewed Mail application actions without real network calls.
- `chore: prepare open source release`
  - Reworked `README.md` into a public open-source entry point with install, quick start, SDK surfaces, resource discovery, Mail application API, OpenClaw plugin, generation, testing, security, status, contributing, and license sections.
  - Added Apache-2.0 licensing and npm publication metadata.
  - Removed the npm `private` publication blocker.
  - Updated the release checklist for the six-tool OpenClaw surface, including `infomaniak_mail_application`.
  - Upgraded Vitest and coverage tooling to 4.1.8 to clear dev-toolchain audit findings, then pinned test discovery to source tests only.
  - Added small coverage tests required by Vitest 4's V8 coverage accounting.
- `914a1d3 feat: add domain workflow sdk actions`
  - Added `client.workflows` plus standalone workflow helpers for listing, describing, and running curated domain actions.
  - Added migration-critical actions for kDrive browsing/uploads, Mail application mailbox reads, kChat workflows, URL shortener operations, and discovery-backed actions.
  - Fixed parent-bound discovery recipes so parent values can be supplied in query parameters as well as path parameters.
- `cd64a48 feat: expand domain workflow coverage`
  - Expanded workflow actions across all Infomaniak domains, including account, AI, core, domains, eTickets, kMeet, newsletter, profile, publicCloud, radio, Swiss Backup, video, and VOD.
  - Kept actions backed by generated operations, reviewed Mail application calls, or discovery helpers.
- `7ddb63f refactor: split domain workflow modules`
  - Split workflow action types and helpers out of the action registry.
  - Brought `src/workflows/domain-actions.ts` back under the 1,000-line guidance while preserving 100% coverage.
- `docs: document OpenClaw migration workflow bridge`
  - Documents `client.workflows` as the SDK-first bridge for migrating `potassium-openclaw`.
  - Records that OpenClaw-specific orchestration belongs in the OpenClaw adapter/repository, while this library owns reusable network/domain workflows.
- `feat: expose openclaw workflow tools`
  - Added OpenClaw workflow list/describe/run tools backed by `client.workflows`, with domain/operation allow/deny policy, mutating blocks, explicit confirmation, and injected fetch.
  - Added `tokenEnvName` config defaulting to `INFOMANIAK_TOKEN` so OpenClaw can inject credentials without copying bearer tokens into plugin config.
  - Added public exports and the `./openclaw/tools` package subpath for downstream `potassium-openclaw` migration.
  - Added kDrive workflow uploads from absolute local `file_path`, including size validation, default remote file names, and binary body preservation in the shared transport.
  - Added a package `prepare` script so GitHub-pinned installs can build `dist` without publishing `liquid-potassium` to npm.
- `security: harden public repository readiness`
  - Redacted sensitive response headers and secret-shaped JSON/text fields from `InfomaniakOperationError.responseSummary` while preserving status, request id, and non-sensitive diagnostics.
  - Added tests for JSON, malformed JSON, and text error redaction while maintaining 100% coverage.
  - Tightened local ignore rules for credential files and generated build leftovers.
  - Restricted CI workflow permissions to read-only contents access and disabled checkout credential persistence.
  - Added `SECURITY.md` and Dependabot updates for npm and GitHub Actions.
- `feat: add kchat websocket client`
  - Added reviewed `client.kchat.websocket` helpers for hosted Infomaniak Echo/Pusher sockets and plain Mattermost `/api/v4/websocket` sockets.
  - Added injectable `fetch` and `WebSocket` transports, team/user discovery for Echo subscriptions, private-channel `/broadcasting/auth`, Mattermost authentication challenge frames, normalized `posted` events, sender/channel filters, abort handling, and no-secret error messages.
  - Added mocked unit coverage for Echo subscription/auth flows, Mattermost auth/post flows, filtering, malformed frames, binary payloads, socket API variants, and failure cases without live network calls.

## Next Task Queue

- In `/Users/opencow/Software/potassium-openclaw`, depend on a specific `OpenCow42/liquidPotassium` commit and migrate existing skills/tools to call `liquid-potassium` through the exported OpenClaw tools and `client.workflows` where a curated action exists.
- Fall back to catalog search/describe plus generated/raw SDK calls for operations that are not yet worth promoting to workflow actions.
- Add new workflow actions in this repository only when migration exposes repeated adapter code or a common user workflow.

## Validation Status

- Unit tests: passing for scaffold, normalizer, generated endpoint tests, and runtime client (`npm test`).
- Typecheck: passing for current source and tests (`npm run typecheck`).
- Build: passing for current source (`npm run build`).
- Coverage: 100% statements, branches, functions, and lines for included handwritten source (`npm run test:coverage`).
- OpenAPI normalization: passing for 1,429 operations with unique operation IDs, complete domain assignment, no unresolved local refs, and no warnings.
- Generated endpoint coverage: passing for all 1,429 normalized operations across 17 generated domain test files.
- Runtime SDK: passing mocked tests for auth, URL/path/query/body handling, multipart, binary/text/JSON responses, abort signals, non-2xx typed errors, generated operation dispatch, raw methods, custom base URLs, and missing fetch failures.
- Operation catalog API: passing tests for domain listing, operation filtering, search, lookup, descriptions, mutating flags, and unknown-operation failures.
- OpenClaw plugin: passing tests for native registration, tool schemas, config defaults/validation, search/describe/discover/call behavior, domain/operation filtering, mutating blocks, injected fetch usage, and no-network search/describe/discover behavior.
- OpenClaw skill: passing tests for valid tool references, search-describe-discover-call workflow, and explicit mutating-operation intent guidance.
- Release readiness: passing full `npm run ci`, including generation consistency, no-network policy, typecheck, build, and 100% coverage.
- No-network test guarantee: implemented through the Vitest setup harness and injected fetch tests.
- OpenClaw plugin validation: implemented for compact native tools.
- Docs snapshot tooling: passing `npm run typecheck` and `npm run test:coverage` with fixture-backed unit tests and no live network calls.
- Docs snapshot artifacts: fetched 1,405 official docs operations; `npm run docs:check` reports 1,402 matched docs operations, 3 docs-only entries, 27 spec-only operations, 15 operation ID mismatches, 0 duplicate docs entries, and 0 errors.
- Docs-enriched catalog metadata: passing `npm run typecheck`, `npm run build`, `npm run check:no-network`, `npm run docs:check`, and `npm run test:coverage` with 100% statements, branches, functions, and lines.
- Nested query serialization: passing `npm run typecheck` and `npm run test:coverage`; nested objects use bracket notation and simple top-level arrays remain repeated query keys.
- Resource discovery: passing `npm run typecheck` and `npm run test:coverage`; every domain has a tested discovery recipe or reviewed no-public-discovery explanation, and no tests make live network calls.
- Mail application consumption: passing mocked tests for mailbox listing, folder listing, thread listing, message reads, quota reads, draft create/update/read/delete, draft scheduling, schedule deletion, send cancellation, message moves, current kSuite mail context, OpenClaw policy enforcement, mutating confirmation, and invalid parameter failures.
- Phase 10 validation: passing `npm run typecheck`, `npm run build`, `npm run check:no-network`, `npm run check:docs`, `npm run check:generated`, and `npm run test:coverage`.
- Open-source release preparation: passing `npm run ci`, `npm audit`, `npm audit --omit=dev`, `npm pack --dry-run`, and `git diff --check`.
- Package preview: `npm pack --dry-run` reports `liquid-potassium@0.1.0`, 160 files, approximately 881.6 kB packed and 16.1 MB unpacked, including `LICENSE`, `README.md`, built SDK output, OpenClaw plugin output, skill docs, Mail application docs, and normalization report.
- Domain workflow actions: passing `npm run typecheck` and `npm run test:coverage` with 100% statements, branches, functions, and lines after the workflow expansion and module split.
- OpenClaw workflow tool migration slice: passing `npm run typecheck`, `npm test`, `npm run test:coverage` with 100% statements/branches/functions/lines, `npm run build`, and `npm pack --dry-run --json`.
- Package preview after workflow tool migration: `npm pack --dry-run --json` reports `liquid-potassium@0.1.0`, 169 files, approximately 898.8 kB packed and 16.2 MB unpacked, including `dist/src/openclaw/infomaniak-tools.*`, `dist/openclaw/plugin.*`, skill docs, package exports, and the `prepare` build flow.
- npm publication: `liquid-potassium@0.1.0` is published to `https://registry.npmjs.org/` with `latest` pointing to `0.1.0`.
- Post-publish install verification: a fresh temporary project installed `liquid-potassium@0.1.0` from npm with 0 vulnerabilities and successfully imported the main SDK, OpenClaw plugin, and OpenClaw tools subpaths.
- Public GitHub security preflight: passing `npm run ci`, `npm audit`, `npm audit --omit=dev`, `npm pack --dry-run --json`, `git diff --check`, and high-confidence secret scans across current tracked files and git history.
- kChat WebSocket client: passing `npm run typecheck` and `npm run test:coverage` with 100% statements, branches, functions, and lines; all tests use mocked `fetch` and WebSocket implementations.

## Blockers And Risks

- No current blockers.
- The OpenAPI spec has known generator-hostile issues that must be handled in normalization: missing operation IDs, duplicate operation IDs, malformed tags, unusual content types, and missing component refs.
- The project must avoid exposing all raw endpoints as OpenClaw tools because that would create an oversized and unsafe tool surface.
- Resource discovery must avoid guessing opaque IDs. Every domain needs either a read-only discovery recipe or an explicit no-public-discovery explanation.
- Official docs enrichment must remain a committed generation-time snapshot, not a runtime dependency.
- Mail application consumption routes are reviewed fallback-backed until Infomaniak publishes official OpenAPI/docs operation metadata for those routes.
- OpenClaw migration should avoid reimplementing request construction or resource discovery in `/Users/opencow/Software/potassium-openclaw`; use `client.workflows`, `client.discovery`, or generated/raw SDK calls instead.
- The local `main` branch still reports `origin/main` as gone; configure or recreate the upstream before pushing/publishing from git automation.

## Open Decisions

- None currently. `MASTERPLAN.md` now includes the decision-complete Phase 9 resource-discovery blueprint unless the user changes direction.
