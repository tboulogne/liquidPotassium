# Progress

This file is the canonical live tracker for the Infomaniak SDK and OpenClaw integration project. Keep it current throughout implementation.

## Current State

- Phase: project documentation foundation.
- Active task: progress-tracking and agent-coordination workflow is documented; next step is committing these documentation changes.
- Repository status: documentation and raw OpenAPI spec are committed; implementation scaffold has not started.
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

## Next Task Queue

1. Commit the progress-tracking documentation changes.
2. Add project scaffold: package metadata, TypeScript config, Vitest config, source/test folders, and `.gitignore`.
3. Move or copy the raw spec into the planned `spec/infomaniak.raw.json` location while preserving the committed original.
4. Implement and test OpenAPI normalization.
5. Generate typed schema, operation catalog, domain metadata, operation wrappers, and generated endpoint tests.
6. Implement the runtime SDK client with injectable transport and typed errors.
7. Build the compact OpenClaw plugin tools.
8. Add the OpenClaw skill.
9. Add release documentation and CI.

## Validation Status

- Unit tests: not started.
- Typecheck: not started.
- Build: not started.
- OpenAPI normalization: not started.
- Generated endpoint coverage: not started.
- No-network test guarantee: policy documented, implementation not started.
- OpenClaw plugin validation: not started.

## Blockers And Risks

- No current blockers.
- The OpenAPI spec has known generator-hostile issues that must be handled in normalization: missing operation IDs, duplicate operation IDs, malformed tags, unusual content types, and missing component refs.
- The project must avoid exposing all raw endpoints as OpenClaw tools because that would create an oversized and unsafe tool surface.

## Open Decisions

- None currently. `MASTERPLAN.md` is the decision-complete implementation blueprint unless the user changes direction.
