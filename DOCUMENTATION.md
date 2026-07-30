# Shakkho Teammate Documentation

This is the practical handoff guide for **Shakkho | সাক্ষ্য**, a bilingual, offline-capable July archive prototype. Read this file first; use the other Markdown files only when preparing the final submission.

## 1. Run the project

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. No account, API key, backend, database server, or demo credentials are required.

Before sharing changes:

```bash
npm run lint
npm run test
npm run build
```

The production output is created in `dist/`.

## 2. What is implemented

| Route | Purpose |
|---|---|
| `/` | Landing page, product explanation, featured stories |
| `/timeline` | Searchable and filterable six-phase timeline |
| `/story/:storyId` | Bilingual story, uncertainty, evidence, share card |
| `/evidence/:id` | Full Evidence Passport and integrity check |
| `/verify` | “Before You Share” documentation-readiness checklist |
| `/contribute` | Anonymous local contribution form |
| `/archive` | Export, import, deduplication, conflict handling, deletion |
| `/methodology` | Verification, privacy, source policy, limitations, AI disclosure |
| `/about` | Project purpose and civic-dignity principles |

The app also includes a responsive 404 page, persistent language selection, online/offline status, installable PWA, PNG story-card download, and IndexedDB storage.

## 3. Important files

```text
src/
  App.tsx                 Route definitions
  pages.tsx               Page implementations and workflows
  components.tsx          Navigation, layout, status and passport UI
  data.ts                 Demo events, stories and evidence
  i18n.tsx                English/Bangla dictionary and language state
  styles.css              Complete responsive visual system
  types.ts                Shared TypeScript data types
  lib/
    integrity.ts          Canonical JSON, SHA-256, schemas and archive logic
    readiness.ts          Evidence-readiness weights and result levels
    db.ts                 Dexie/IndexedDB setup
    core.test.ts          Integrity, archive, scoring and translation tests
  components.test.tsx     Important rendering tests
public/
  icon.svg                Original PWA icon
  og-image.svg            Social-sharing image
```

Submission and policy files are in the repository root. `README.md` is the public overview; `SUBMISSION_PACK.md`, `DEMO_SCRIPT.md`, `SLIDES.md`, and `FACEBOOK_POST.md` are ready-to-edit submission materials.

## 4. Data relationships

- An `Event` links to one story and zero or more evidence IDs.
- A `Story` links to one or more evidence IDs.
- An `Evidence` record contains source, consent, reuse, verification, timestamps, and an integrity fingerprint.
- IDs must stay unique and match across these relationships.

All bundled demonstration content is in `src/data.ts`.

### Add an event

Add an item to `events` with:

- unique ID;
- natural English and Bangla title/summary;
- broad date and location;
- category and verification status;
- related evidence IDs and story ID;
- source count;
- `demoOnly: true` until human review.

### Add a story

Add an item to `stories` with bilingual title, introduction, context, moments, known facts, uncertainties, preservation value, reflection question, and evidence IDs. If it is not a direct sourced testimony, retain the composite-demonstration label. Never invent quotations or named victims.

### Add evidence

Add a complete `Evidence` object to `evidence`. Use only `http://` or `https://` source links. Include source type/name, corroborating IDs, consent, reuse licence, timestamps, notes, and demo status. Keep claims narrower than the original source supports.

After changing data, check every affected story, event, and passport route.

## 5. Integrity verification

`src/lib/integrity.ts`:

1. Sorts stable object keys into canonical JSON.
2. Excludes mutable fields such as `integrityHash`.
3. Computes SHA-256 through the Web Crypto API.
4. Recomputes imported record fingerprints.
5. Detects changes and archive conflicts.

A matching hash means the canonical record did not change after fingerprinting. It **does not prove the claim is true**, identify the author, establish consent, or detect manipulation that happened before fingerprinting. Never remove this warning from the interface.

## 6. Local contribution workflow

The form intentionally does not ask for a name, email, phone, exact address, government ID, or political affiliation.

On submit:

1. Form data becomes an `Evidence` record.
2. SHA-256 is calculated.
3. Zod validates the record.
4. Dexie stores it in the browser’s IndexedDB.
5. The new Evidence Passport opens.

Data stays on the current browser profile unless the user exports it. “Delete all local data” permanently clears the app’s IndexedDB records after confirmation.

## 7. Archive packs

Archive packs contain format, version, export time, language, records, and a pack fingerprint.

Import protections:

- maximum file size: 5 MB;
- maximum records: 500;
- supported version: 1;
- JSON and Zod validation;
- record hash recomputation;
- duplicate detection by ID and fingerprint;
- same-ID/different-hash conflicts are not overwritten;
- preview must be accepted before adding records.

Imported text is rendered as plain React text. Do not add HTML rendering or script execution.

## 8. Translation and design

Primary translations live in `src/i18n.tsx`. When adding an interface label, add the same key to both `en` and `bn`. Do not transliterate Bangla.

Design tokens and responsive rules are in `src/styles.css`. Preserve:

- off-white paper background;
- charcoal text;
- memorial red accent;
- green verified state;
- visible keyboard focus;
- 44 px minimum controls;
- mobile navigation;
- reduced-motion support.

Do not communicate status by colour alone; keep icons and text labels.

## 9. Offline testing

```bash
npm run build
npx vite preview
```

Load the app once while online. In browser DevTools, select **Network → Offline**, then refresh and test:

- timeline and stories;
- Evidence Passports;
- readiness lab;
- local contribution;
- archive export/import.

The service worker caches the app shell and bundled assets. It does not cache third-party source websites.

## 10. Deployment

For Vercel or Netlify:

- build command: `npm run build`;
- publish directory: `dist`;
- configure unknown routes to serve `index.html`.

For GitHub Pages, update `base` in `vite.config.ts` if deploying under a repository subpath, then publish `dist`.

## 11. Safety rules

- Do not add unsupported casualty figures, allegations, identities, or quotations.
- Do not copy photographs, videos, or article text without permission.
- Remove unnecessary personal details from contributions.
- Keep demonstration data visibly labelled.
- Do not add analytics, tracking, facial recognition, profiling, or background location collection.
- Treat sensitive real records as requiring consent, redaction, governance, and expert review.
- Never describe the readiness result as a truth score.

## 12. Final teammate checklist

- Replace team names and repository/live/demo links.
- Add final reviewed data or retain the demo labels.
- Test English and Bangla at mobile and desktop widths.
- Test keyboard navigation, contribution, deletion, export, import, conflicts, and tamper detection.
- Run lint, tests, and production build.
- Capture screenshots and record the four-minute demo.
- Export `SLIDES.md` to PDF.
- Review and publish `FACEBOOK_POST.md`.
- Confirm the MIT `LICENSE` and AI disclosure remain included.

For source rules read `DATA_SOURCES.md`; for security details read `SECURITY_AND_PRIVACY.md`; for the presentation flow read `DEMO_SCRIPT.md`.
