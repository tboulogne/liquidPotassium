# Progress

This file is the canonical live tracker for the Infomaniak SDK and OpenClaw integration project. Keep it current throughout implementation.

## Current State

- Phase: Phase 9 planning - Docs-Enriched Resource Discovery.
- Active task: Project documentation now includes the resource-discovery and docs-enriched catalog plan; next step is commit or implementation.
- Repository status: The Phase 1-8 implementation is complete and committed; resource discovery is planned but not implemented.
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

## Next Task Queue

1. Commit the docs update for Phase 9 resource discovery planning.
2. Implement docs snapshot tooling and committed docs enrichment artifacts.
3. Enrich generated operation metadata from the docs snapshot.
4. Add nested Infomaniak query serialization.
5. Add SDK and OpenClaw resource discovery APIs across all domains.

## Validation Status

- Unit tests: passing for scaffold, normalizer, generated endpoint tests, and runtime client (`npm test`).
- Typecheck: passing for current source and tests (`npm run typecheck`).
- Build: passing for current source (`npm run build`).
- Coverage: 100% statements, branches, functions, and lines for included handwritten source (`npm run test:coverage`).
- OpenAPI normalization: passing for 1,429 operations with unique operation IDs, complete domain assignment, no unresolved local refs, and no warnings.
- Generated endpoint coverage: passing for all 1,429 normalized operations across 17 generated domain test files.
- Runtime SDK: passing mocked tests for auth, URL/path/query/body handling, multipart, binary/text/JSON responses, abort signals, non-2xx typed errors, generated operation dispatch, raw methods, custom base URLs, and missing fetch failures.
- Operation catalog API: passing tests for domain listing, operation filtering, search, lookup, descriptions, mutating flags, and unknown-operation failures.
- OpenClaw plugin: passing tests for native registration, tool schemas, config defaults/validation, search/describe/call behavior, domain/operation filtering, mutating blocks, injected fetch usage, and no-network search/describe behavior.
- OpenClaw skill: passing tests for valid tool references, search-describe-call workflow, and explicit mutating-operation intent guidance.
- Release readiness: passing full `npm run ci`, including generation consistency, no-network policy, typecheck, build, and 100% coverage.
- No-network test guarantee: implemented through the Vitest setup harness and injected fetch tests.
- OpenClaw plugin validation: implemented for compact native tools.
- Resource discovery: planned in `MASTERPLAN.md`; not implemented yet.

## Blockers And Risks

- No current blockers.
- The OpenAPI spec has known generator-hostile issues that must be handled in normalization: missing operation IDs, duplicate operation IDs, malformed tags, unusual content types, and missing component refs.
- The project must avoid exposing all raw endpoints as OpenClaw tools because that would create an oversized and unsafe tool surface.
- Resource discovery must avoid guessing opaque IDs. Every domain needs either a read-only discovery recipe or an explicit no-public-discovery explanation.
- Official docs enrichment must remain a committed generation-time snapshot, not a runtime dependency.

## Open Decisions

- None currently. `MASTERPLAN.md` now includes the decision-complete Phase 9 resource-discovery blueprint unless the user changes direction.
