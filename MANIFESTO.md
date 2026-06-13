# Manifesto

## Mission

Build a high-trust TypeScript/Node library that exposes the Infomaniak API through a complete, typed, domain-oriented interface, generated from the official OpenAPI specification and shaped for practical automation.

The library should make Infomaniak services feel coherent to developers and agents. The OpenAPI spec is broad and uneven; this project turns it into a stable SDK that can be tested, audited, searched, and safely used inside the OpenClaw ecosystem.

## End Goal

The end goal is to make Infomaniak a first-class capability inside OpenClaw.

OpenClaw users and agents should be able to inspect, search, and operate Infomaniak domains such as `kchat`, `kdrive`, `mail`, `kmeet`, `newsletter`, `publicCloud`, `domains`, `ai`, and related services without needing to understand the raw OpenAPI file, path templates, transport details, or authentication wiring.

The SDK is the durable foundation. The OpenClaw plugin and skills are the agent-facing layer. The same library should also remain useful outside OpenClaw for scripts, services, tests, and future MCP adapters.

## What This Library Must Provide

- Complete endpoint coverage from the Infomaniak OpenAPI specification.
- Domain-oriented access instead of one giant flat namespace.
- Typed request parameters, request bodies, responses, errors, and domain metadata wherever the spec allows.
- A low-level typed request surface for advanced users and generated endpoint coverage.
- Higher-level domain helpers only when they clarify common workflows without hiding important behavior.
- Reviewed handwritten application surfaces for important workflows that Infomaniak exposes outside the public OpenAPI spec, kept separate from generated operations until official metadata is available.
- Deterministic generated output from a normalized spec.
- A searchable operation catalog that OpenClaw tools can use to find and describe operations before calling them.
- A resource discovery layer that helps developers and agents find required IDs, understand parent-child resource relationships, and recognize when the public API does not expose a discovery path.
- Docs-enriched operation metadata from the official Infomaniak Developer Portal, captured at generation time and committed as deterministic project data.
- No required real network access for tests, generation checks, or OpenClaw tool validation.

## OpenClaw Product Goal

The OpenClaw integration should be domain-first and operator-friendly.

It should not register one tool per raw API endpoint. The Infomaniak API is too large for that to be useful in an agent context. Instead, OpenClaw should expose compact domain tools and discovery tools that can:

- list supported domains;
- search operations by domain, path, method, tag, summary, and operation id;
- describe the exact parameters and request body for an operation;
- discover resources and required identifiers before calling operations;
- call an operation through the typed SDK with validation;
- clearly identify read-only versus mutating operations;
- make destructive operations suitable for future approval gating.

Skills should teach safe workflows and domain conventions. They should not contain the core implementation.

## Design Commitments

- Prefer generated completeness plus handwritten clarity.
- Keep generated code reproducible, reviewable, and clearly marked.
- Keep handwritten runtime code small, typed, and unit-tested.
- Treat the OpenAPI spec as an input, not as perfect truth. Normalize it through explicit, tested rules.
- Treat the official API documentation as a useful enrichment source, not as a runtime dependency or a substitute for reviewed behavior.
- Preserve escape hatches for raw operations while making domain workflows pleasant.
- Keep auth, transport, and environment handling injectable so the library works in OpenClaw, tests, scripts, and services.
- Fail closed when the domain, operation, auth, or request shape is ambiguous.

## Non-Goals

- Do not hand-write wrappers for every endpoint.
- Do not make real network calls in tests.
- Do not hide Infomaniak API behavior behind vague magic methods.
- Do not couple the core SDK to OpenClaw runtime internals.
- Do not expose massive tool schemas to models when a small searchable interface is safer and clearer.

## Definition Of Success

The project succeeds when:

- the raw spec can be normalized and regenerated deterministically;
- every generated endpoint is represented and tested;
- developers can call Infomaniak APIs through typed domain clients;
- OpenClaw can search, describe, and call Infomaniak operations by domain;
- OpenClaw can discover required resources or explain clearly why a required identifier cannot be discovered through public API endpoints;
- the implementation remains auditable, maintainable, and safe to evolve as the spec changes.
