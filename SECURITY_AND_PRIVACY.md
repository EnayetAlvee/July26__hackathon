# Security and Privacy

## Threat model

Risks include malicious/malformed archive files, oversized input, deceptive links, stored script text, local-device access, record tampering, and false confidence in hashes. The app is not designed for hostile-device secrecy, anonymous whistleblowing, or contributor authentication.

## Controls

- Contributions remain in browser IndexedDB; no server, account, analytics, tracking pixel, or background location
- Zod validates record shape, lengths, enums, record count, version, and `http`/`https` URLs
- Imports are limited to 5 MB and 500 records, parsed only as JSON, and never executed
- React renders user text as escaped text; submitted HTML and arbitrary scripts are never rendered
- SHA-256 is recomputed on imported records; conflicts preview without silent overwrite
- Delete-all removes the app’s local IndexedDB records after confirmation

## Hash limitations

A matching fingerprint supports only that canonical fields are unchanged relative to the stored fingerprint. It does not prove accuracy, authorship, time of creation, consent, or absence of manipulation before fingerprinting. Pack fingerprints are not digital signatures.

## Known limitations

Anyone with device/profile access may read local records. Browser data can be cleared or lost. URLs may later change or become unsafe; no live reputation check is performed. There is no encryption at rest, authenticated editorial workflow, malware scanner for linked files, moderation, signed provenance, revocation, or durable backup. Sensitive real-world deployments require expert threat modelling, governance, redaction, encrypted storage, access control, and incident response.
