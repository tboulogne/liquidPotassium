# Infomaniak Mail Application API

## Root Cause

The first complete implementation treated the committed OpenAPI spec and public Developer Portal operation catalog as the whole Infomaniak API surface. That was complete for public OpenAPI coverage, but incomplete for the user workflow "read mailbox content."

The public `mail` domain in the OpenAPI spec represents Mail Hosting/admin operations under `/1/mail_hostings/**`. Mailbox consumption uses a different application API host, `https://mail.infomaniak.com/api`, and those routes were not present in the committed OpenAPI spec or the public docs snapshot used for generation.

## Provenance

Official public documentation verified:

- The Infomaniak Developer Portal exposes Mail Services routes for Mail Hosting/admin, such as `GET /1/mail_hostings/{mail_hosting_id}/mailboxes`.
- Direct public Developer Portal lookup for `GET /api/mailbox` was not available as a public operation page.
- Unauthenticated probes against `https://mail.infomaniak.com/api/mailbox` return JSON authentication errors, which confirms the host and route shape exist but does not provide a public schema.

Reviewed fallback provenance used only after public docs were unavailable:

- The existing working OpenClaw mail-handling skill in `/Users/opencow/Software/potassium-openclaw/skills/mail-handling/SKILL.md`.
- The local `pot` implementation in `/Users/opencow/Software/potassium`.

These fallback sources are not treated as the official source of truth. They are reviewed implementation evidence for routes absent from the public OpenAPI/docs surface.

## SDK Surface

Generated Mail Hosting/admin operations remain available under:

```ts
client.mail.operations.*
```

Mailbox consumption is available under:

```ts
client.mail.application.*
```

Supported reviewed actions:

- `listUserMailboxes()` -> `GET https://mail.infomaniak.com/api/mailbox`
- `listFolders(mailboxUuid)` -> `GET https://mail.infomaniak.com/api/mail/{mailbox_uuid}/folder`
- `listThreads(mailboxUuid, folderId)` -> `GET https://mail.infomaniak.com/api/mail/{mailbox_uuid}/folder/{folder_id}/message`
- `getMessage(resource)` -> returned `/api/mail/.../message/{message_uid}` resource
- `getMailboxQuota(mailbox, productId)` -> `GET https://mail.infomaniak.com/api/mailbox/quotas`
- `createDraft(mailboxUuid, payload)` -> `POST https://mail.infomaniak.com/api/mail/{mailbox_uuid}/draft`
- `updateDraft(mailboxUuid, draftUuid, payload)` -> `PUT https://mail.infomaniak.com/api/mail/{mailbox_uuid}/draft/{draft_uuid}`
- `getDraft(mailboxUuid, draftUuid)` -> `GET https://mail.infomaniak.com/api/mail/{mailbox_uuid}/draft/{draft_uuid}`
- `deleteDraft(mailboxUuid, draftUuid)` -> `DELETE https://mail.infomaniak.com/api/mail/{mailbox_uuid}/draft/{draft_uuid}`
- `scheduleDraft(draftResource, scheduleDate)` -> `PUT {draft_resource}/schedule`
- `deleteSchedule(scheduleAction)` -> `DELETE {schedule_action}`
- `cancelSend(cancelSendResource)` -> `PUT {cancel_send_resource}`
- `moveMessages(mailboxUuid, payload)` -> `POST https://mail.infomaniak.com/api/mail/{mailbox_uuid}/message/move`
- `currentMyKSuite()` -> `GET https://api.infomaniak.com/1/my_ksuite/current?with=mail`

## OpenClaw Surface

OpenClaw exposes these reviewed routes through:

```text
infomaniak_mail_application
```

The tool uses compact action names matching the SDK method names. It obeys the same plugin policy model as generated operations:

- `allowedDomains` must allow `mail` when configured.
- `allowedOperations` and `deniedOperations` can target operation IDs such as `MailApplication/ListThreads` or `MailApplication/GetMessage`.
- Mutating actions require explicit user intent, `confirm_mutating=true`, and `blockMutating=false`.
- All calls use the SDK's injected `fetch`; tests must never call the real network.

## Mail search and compact OpenClaw pages

`listThreads` accepts `searchText`, `searchEverywhere`, and `searchAttachments` in the SDK; their workflow and tool names are `search_text`, `search_everywhere`, and `search_attachments`. These map to `scontains`, `severywhere=1|0`, and `sattachments=yes` respectively. A false attachment option omits the filter rather than selecting messages without attachments. The parameter behavior is derived from [Infomaniak's Android Mail search client](https://github.com/Infomaniak/android-kMail/blob/eae10c9183acca4de4c939f80fdc78a83d2f3975/app/src/main/java/com/infomaniak/mail/utils/SearchUtils.kt), not a public stability contract. Text search is not guaranteed to match a sender field specifically. Treat search results as sensitive.

The `infomaniak_mail_application` tool accepts `compact: true` for `listThreads` only with `thread_mode: "off"`. It returns at most ten message summaries and an explicit `next_offset` (or `null` at the reported end); repeat the same filters and search options at that offset. This is a local projection, not an API page-size setting. It excludes message bodies and previews, but still includes personal metadata. It requires a nonempty UID or resource, checks the returned offset and contiguous server continuation, and fails on ambiguous response shapes. Correspondent objects are reduced to name and email fields. Offset pagination can shift when a mailbox changes, so verify IDs and do not claim a consistent snapshot or exhaustive count without reconciliation. The original, unprojected tool behavior remains the default. Workflow actions and the standalone SDK still return the API's raw response.

## Maintenance Rules

- Do not merge these routes into the generated OpenAPI catalog unless Infomaniak publishes them in the official OpenAPI spec or public Developer Portal operation data.
- Keep the handwritten route list small, reviewed, documented, and fully unit-tested.
- If official docs become available, replace fallback-derived route details with docs-backed generation inputs.
- Do not log tokens, cookies, authorization headers, message bodies, or private mailbox data in tests or docs.
