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
5. Use `infomaniak_mail_application` for mailbox content workflows such as listing the current user's mailboxes, folders, threads, reading message resources, checking quotas, drafts, schedules, cancellation, and moving messages. This is separate from Mail Hosting/admin operations in the generated `mail` domain.
6. Use `infomaniak_workflow_list` and `infomaniak_workflow_describe` for reviewed SDK workflow actions before falling back to raw operations. Prefer `infomaniak_workflow_run` for common tasks such as kDrive browsing/upload, kChat posts, URL shortener links, discovery workflows, and other domain actions.
7. Use `infomaniak_call` only after no reviewed workflow fits and the operation and inputs are clear.

## Safety

- Do not guess operation IDs or required path parameters. Search and describe first.
- Use `infomaniak_discover` before asking the user for opaque resource IDs when a reviewed public discovery recipe exists.
- If discovery says a resource has no public discovery path, ask the user for the ID or explain where it must come from.
- Use Mail application actions for mailbox consumption, not generated Mail Hosting operations.
- Prefer reviewed workflow actions over raw operation calls when they cover the user request.
- Treat `mutating: true` as create/update/delete/send/archive or other state-changing work.
- Call a mutating operation only when the user has explicitly asked for that state change and the request parameters are clear.
- Set `confirm_mutating=true` only for explicit mutating user intent, including mutating Mail application and workflow actions. If the plugin blocks mutation, explain that the plugin policy prevents the call.
- Prefer read-only discovery for ambiguous requests.

## Tool Model

- `infomaniak_domains`: list domains available under the current plugin policy.
- `infomaniak_search`: search operations by domain, method, path, operation ID, original operation ID, summary, description, and tags.
- `infomaniak_describe`: inspect one normalized operation ID, including resource requirements and discovery suggestions.
- `infomaniak_discover`: discover resource IDs or return reviewed no-public-discovery explanations.
- `infomaniak_mail_application`: call reviewed mailbox-consumption actions outside the public OpenAPI catalog.
- `infomaniak_workflow_list`: list reviewed SDK workflow actions available under plugin policy.
- `infomaniak_workflow_describe`: inspect one reviewed workflow action, including input metadata, mutating status, and backing operation IDs.
- `infomaniak_workflow_run`: run one reviewed workflow action with optional `input` and `confirm_mutating`.
- `infomaniak_call`: call one normalized operation ID with optional `path`, `query`, `headers`, `body`, and `confirm_mutating`.
