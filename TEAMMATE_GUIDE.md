# Teammate Guide

Shakkho connects July stories to Evidence Passports, checks record changes with SHA-256, teaches documentation readiness, and stores contributions only in the current browser.

## Structure and run

- `src/data.ts`: curated demo events, stories, evidence
- `src/lib`: hashing, schemas, scoring, IndexedDB
- `src/pages.tsx`: route views
- `src/components.tsx`, `src/styles.css`: shared UI
- `public`: original SVG assets

Run `npm install`, then `npm run dev`. Before delivery run `npm run lint`, `npm run test`, and `npm run build`.

## Editing content

Add events, stories, or evidence in `src/data.ts`, preserving bilingual fields and cross-linked IDs. Never invent quotations. Add only reviewed `https://` sources. Verify every source, retain neutral wording, remove unsupported claims and personal information, and remove `demoOnly` only after human review. Follow `DATA_SOURCES.md`.

## Offline, build, deploy

Build and preview `dist` through a static server. Visit core routes online once, switch DevTools Network to Offline, then refresh and test timeline, story, passport, lab, contribution, and archive. Deploy `dist` to Vercel or Netlify with SPA fallback. For GitHub Pages, confirm the Vite `base`.

## Final checklist

- Replace names and repository/live/demo links
- Capture desktop/mobile screenshots and record the demo
- Recheck languages, navigation, keyboard focus, forms, import/export, tamper result, and offline refresh
- Confirm no unsupported numbers, identities, quotes, or unlicensed media
- Run all quality commands
- Export slides to PDF and publish the approved Facebook post

Roles: `[Product/Engineering]`, `[Research/Editorial]`, `[Design/Accessibility]`, `[Demo/Community]`.
