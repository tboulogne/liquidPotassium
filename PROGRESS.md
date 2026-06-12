# Progress

This file is the canonical live tracker for the Infomaniak SDK and OpenClaw integration project. Keep it current throughout implementation.

## Current State

- Phase: Phase 2 - Spec Location And Normalization.
- Active task: Phase 2 normalization is complete and verified; next step is committing normalization work.
- Repository status: TypeScript scaffold is committed; normalized spec, report, normalizer, and tests are ready to commit.
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

## Next Task Queue

1. Commit Phase 2 normalization work.
2. Generate typed schema, operation catalog, domain metadata, operation wrappers, and generated endpoint tests.
3. Implement the runtime SDK client with injectable transport and typed errors.
4. Build the compact OpenClaw plugin tools.
5. Add the OpenClaw skill.
6. Add release documentation and CI.

## Validation Status

- Unit tests: passing for scaffold (`npm test`).
- Typecheck: passing for scaffold (`npm run typecheck`).
- Build: passing for scaffold (`npm run build`).
- Coverage: 100% for scaffold (`npm run test:coverage`).
- OpenAPI normalization: passing for 1,429 operations with unique operation IDs, complete domain assignment, no unresolved local refs, and no warnings.
- Generated endpoint coverage: not started.
- No-network test guarantee: policy documented, implementation not started.
- OpenClaw plugin validation: not started.

## Blockers And Risks

- No current blockers.
- The OpenAPI spec has known generator-hostile issues that must be handled in normalization: missing operation IDs, duplicate operation IDs, malformed tags, unusual content types, and missing component refs.
- The project must avoid exposing all raw endpoints as OpenClaw tools because that would create an oversized and unsafe tool surface.

## Open Decisions

- None currently. `MASTERPLAN.md` is the decision-complete implementation blueprint unless the user changes direction.
