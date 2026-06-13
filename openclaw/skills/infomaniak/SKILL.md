---
name: infomaniak
description: "Use Infomaniak API capabilities through the liquid-potassium OpenClaw plugin. Trigger when working with Infomaniak domains such as kdrive, kchat, mail, newsletter, publicCloud, video, vod, radio, domains, account, profile, ai, kmeet, swissBackup, urlShortener, etickets, or core API operations."
metadata: { "openclaw": { "requires": { "config": ["plugins.entries.infomaniak.enabled"] } } }
---

# Infomaniak

Use the Infomaniak plugin as a compact API navigator and caller. Prefer domain names first: `kdrive`, `kchat`, `mail`, `newsletter`, `publicCloud`, `video`, `vod`, `radio`, `domains`, `account`, `profile`, `ai`, `kmeet`, `swissBackup`, `urlShortener`, `etickets`, and `core`.

## Workflow

1. Use `infomaniak_domains` when the available domain policy is unknown.
2. Use `infomaniak_search` to find candidate operations. Filter by `domain`, `method`, or `mutating` when the user names a product area or action type.
3. Use `infomaniak_describe` on the best operation before calling it. Check path parameters, query parameters, request content types, auth, operation requirements, discovery suggestions, and the `mutating` flag.
4. Use `infomaniak_discover` when an operation needs opaque IDs such as account ids, drive ids, mail access ids, kChat team ids, or product ids. If discovery reports `no_public_discovery`, explain that clearly instead of guessing.
5. Use `infomaniak_call` only after the operation and inputs are clear.

## Safety

- Do not guess operation IDs or required path parameters. Search and describe first.
- Use `infomaniak_discover` before asking the user for opaque resource IDs when a reviewed public discovery recipe exists.
- If discovery says a resource has no public discovery path, ask the user for the ID or explain where it must come from.
- Treat `mutating: true` as create/update/delete/send/archive or other state-changing work.
- Call a mutating operation only when the user has explicitly asked for that state change and the request parameters are clear.
- Set `confirm_mutating=true` only for explicit mutating user intent. If the plugin blocks mutation, explain that the plugin policy prevents the call.
- Prefer read-only discovery for ambiguous requests.

## Tool Model

- `infomaniak_domains`: list domains available under the current plugin policy.
- `infomaniak_search`: search operations by domain, method, path, operation ID, original operation ID, summary, description, and tags.
- `infomaniak_describe`: inspect one normalized operation ID, including resource requirements and discovery suggestions.
- `infomaniak_discover`: discover resource IDs or return reviewed no-public-discovery explanations.
- `infomaniak_call`: call one normalized operation ID with optional `path`, `query`, `headers`, `body`, and `confirm_mutating`.
