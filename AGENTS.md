# Project Standards

This project is a business-class TypeScript/Node SDK and OpenClaw integration for the Infomaniak OpenAPI specification. Treat correctness, maintainability, repeatability, and operator trust as product requirements, not polish.

Read `MANIFESTO.md`, `MASTERPLAN.md`, and `PROGRESS.md` before planning or implementing substantial changes. The manifesto defines the mission and OpenClaw end state, the master plan defines the complete implementation blueprint, and the progress file tracks the live execution state. Resource discovery and docs-enriched catalog work must follow the dedicated plan in `MASTERPLAN.md`.

## Engineering Principles

- Prefer typed TypeScript for public APIs, generated clients, test helpers, and build scripts.
- Avoid `any` unless it is isolated at a boundary and justified with a short comment.
- Keep runtime code small, explicit, and easy to audit. Generated code is allowed, but generation must be deterministic.
- Prefer structured parsing and OpenAPI-aware tooling over ad hoc string manipulation.
- Keep files under 1,000 lines whenever practical. Split by domain, responsibility, or generated output when a file grows too large.
- Keep functions focused. Extract helpers when repeated logic or branching obscures behavior.
- Public APIs must be stable, documented, and intentionally named by domain, such as `kchat`, `kdrive`, `mail`, and other Infomaniak product areas.

## Testing Standards

- Maintain 100% unit test coverage for handwritten runtime code, generators, normalizers, and OpenClaw adapter logic.
- Do not make real network calls in unit tests, integration tests, generated endpoint tests, or CI. Use mocked `fetch`, fixtures, and recorded local responses only.
- Every generated endpoint from the OpenAPI spec must be tested. At minimum, generated tests must verify that each operation is represented with the expected domain, method, path template, parameter buckets, request body handling, and response handling shape.
- Tests for generated endpoints should be produced from the same normalized spec metadata as the client, so coverage scales with the spec and fails when the spec changes.
- Auth behavior, headers, error mapping, abort handling, binary responses, multipart bodies, and pagination helpers must have explicit unit tests.
- Snapshot tests are acceptable for generated metadata, but they must be readable and reviewed when they change.
- Test fixtures must not contain real tokens, private user data, customer data, or production payloads.

## OpenAPI Generation Rules

- Keep the raw Infomaniak OpenAPI file immutable. Apply fixes through a normalization script that emits a normalized spec and a report.
- Normalization must be deterministic and tested.
- Use the official Infomaniak Developer Portal docs as a generation-time enrichment source only. Fetch docs into a committed deterministic snapshot, then generate from the snapshot; do not fetch docs at SDK runtime or in tests.
- Preserve docs-derived facts such as parameter descriptions, schema types, enums, examples, category paths, docs URLs, pagination/sorting hints, and capabilities in generated metadata when available.
- Keep reviewed application APIs that are absent from the public OpenAPI/docs snapshot separate from generated OpenAPI operations. For example, Mail Hosting/admin routes belong to `client.mail.operations`, while mailbox-consumption routes belong to `client.mail.application`.
- Missing or duplicate `operationId` values must be resolved using stable generated names.
- Malformed tags, missing schema aliases, unusual content types, and binary/file responses must be handled explicitly.
- Domain assignment must be reproducible from path-prefix rules plus a small reviewed override map for ambiguous endpoints.
- Generated files must include a clear header that states they are generated and names the command that produced them.

## Runtime And Network Rules

- The SDK must default to no side effects beyond the requested HTTP call.
- All HTTP transport must go through an injectable `fetch` implementation so tests and OpenClaw adapters can run without real network access.
- Support `AbortSignal` for all request paths.
- Support Infomaniak nested query parameters with bracket notation, such as `filter[service_names][]=mailing`, while preserving existing simple query behavior.
- Never log tokens, authorization headers, cookies, or full request bodies by default.
- Prefer typed error objects that preserve status code, response headers, request id when available, and a safe response summary.
- Keep retry behavior opt-in unless the API documentation clearly requires it.

## OpenClaw Integration Rules

- Do not expose one OpenClaw tool per raw API endpoint. The Infomaniak spec is too large for that to be operator-friendly.
- Expose domain-oriented tools or controlled request/search/describe tools that keep model context small.
- Resource discovery should be exposed through compact SDK and OpenClaw surfaces. Agents should be able to discover required IDs and understand when a resource has no public discovery endpoint before attempting calls.
- Mailbox-consumption workflows should use the compact Mail application surface, not generated Mail Hosting/admin operations.
- OpenClaw tools must validate domain, operation, parameters, and body before making a request.
- Destructive operations must be easy to identify from metadata and suitable for future approval gating.
- Skills should teach workflows and safety constraints; they should not contain the core implementation.

## Progress And Coordination Rules

- Track implementation progress in `PROGRESS.md` throughout the project.
- Use one main agent to own sequencing, verification, integration, progress updates, and commits.
- Subagents may perform bounded tasks, but only one subagent task may run at a time.
- Subagent work must be synchronous: assign one task, wait for completion, review it, update `PROGRESS.md`, then continue.
- Do not run parallel mutation streams unless the user explicitly changes this rule.
- Continue task by task until the completion checklist in `MASTERPLAN.md` is satisfied.

## Git And Review Rules

- Use Conventional Commits, for example `feat: add kdrive endpoint generation` or `test: cover binary response handling`.
- Keep commits relatively small, detailed, and reviewable. Prefer several focused commits over one broad commit.
- Commit generated artifacts together with the generator or normalized-spec change that produced them.
- Do not mix unrelated refactors with functional changes.
- Before committing implementation work, run the relevant tests and type checks.
- Document intentional tradeoffs in code, tests, commit messages, or project docs.

## Quality Bar

- Code should be understandable to a new maintainer without tribal knowledge.
- Fail closed when configuration, authentication, domain mapping, or generated metadata is ambiguous.
- Prefer clear errors over silent fallbacks.
- Keep dependency choices conservative and justified.
- Security-sensitive behavior must be explicit, tested, and easy to audit.
