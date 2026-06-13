# Security Policy

## Supported Versions

Security fixes are prepared for the latest published npm release line.

## Reporting A Vulnerability

Please report suspected vulnerabilities through GitHub's private vulnerability reporting or a private security advisory for this repository.

Do not open a public issue with exploit details, access tokens, cookies, mailbox content, customer data, or production payloads. If a public issue is the only available channel, keep it minimal and ask for a private follow-up path.

Useful reports include:

- affected package version or commit;
- impacted SDK, OpenClaw, generation, or documentation-snapshot surface;
- reproduction steps using mocked data whenever possible;
- whether credentials, authorization headers, cookies, request bodies, response summaries, generated metadata, or package contents are involved.

The project does not require real Infomaniak network calls for tests. Security reproductions should use injected `fetch`, local fixtures, or redacted recordings.
