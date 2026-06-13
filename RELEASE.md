# Release Checklist

Use this checklist before cutting a liquid-potassium release or handing the project to a new maintainer.

## Verification

Run the full local verification suite:

```bash
npm ci
npm run ci
```

This runs:

- deterministic normalization and generation consistency checks
- no-network test policy verification
- TypeScript typecheck
- production build
- Vitest with 100% coverage thresholds

## Source And Generation

- Keep `infomaniak_api_1781289971.json` immutable unless deliberately updating the upstream Infomaniak OpenAPI source.
- Re-run `npm run normalize` after any normalizer change.
- Re-run `npm run generate` after any normalized spec or generator change.
- Re-run `npm run docs:fetch` only when intentionally refreshing the official Infomaniak docs snapshot, then run `npm run check:docs`.
- Commit generated files and endpoint tests with the generator change that produced them.
- Confirm `spec/normalization-report.json` has no unresolved refs and no warnings.
- Confirm docs-derived examples, enums, and resource-discovery metadata do not contain real tokens, private customer data, or account-specific secrets.

## Network Safety

- Do not add tests that depend on live Infomaniak services.
- Inject `fetch` in runtime and plugin tests.
- Keep `tests/setup/no-network.ts` configured in `vitest.config.ts`.
- Run `npm run check:no-network` before release.

## Public Interfaces

Confirm these exports remain stable or document breaking changes:

- `createInfomaniakClient`
- `InfomaniakClient`
- `InfomaniakClientConfig`
- `InfomaniakError`
- `InfomaniakOperationError`
- `InfomaniakDomain`
- `OperationCatalog`
- Resource discovery exports once implemented: `ResourceKind`, `ResourceDescriptor`, `ResourceDiscoveryRecipe`, `OperationRequirement`, `DiscoverySuggestion`
- generated OpenAPI `paths` and `components`
- OpenClaw plugin entry: `liquid-potassium/openclaw/plugin`
- OpenClaw tools: `infomaniak_domains`, `infomaniak_search`, `infomaniak_describe`, `infomaniak_call`, and `infomaniak_discover` once the discovery expansion lands

## OpenClaw Readiness

- Confirm the native plugin registers all four compact tools.
- Once resource discovery lands, confirm the plugin registers `infomaniak_discover` and that describe output includes discovery suggestions.
- Confirm the skill at `openclaw/skills/infomaniak/SKILL.md` references only valid tool names.
- Confirm mutating operations are blocked by default and require explicit confirmation when unblocked by config.
- Confirm domain and operation allow/deny policy tests pass.

## Commit And Release Notes

- Use Conventional Commits.
- Keep release commits focused and reviewable.
- Summarize spec changes, generated operation count, runtime changes, OpenClaw behavior, and validation evidence in release notes.
