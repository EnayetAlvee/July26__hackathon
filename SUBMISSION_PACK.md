# Submission Pack

## A–C

**Project:** Shakkho | সাক্ষ্য  
**Pitch (19 words):** Shakkho preserves July stories as source-linked evidence passports, verifies record integrity, and creates an interactive bilingual learning experience.  
**Track:** Spirit of July

## D. Problem statement

The July 2024 movement became a defining moment in Bangladesh’s recent history, yet many testimonies, images, documents, and local stories remain scattered across social media, personal devices, and informal sources. These records can be deleted, manipulated, taken out of context, or permanently lost. At the same time, students and ordinary citizens often struggle to separate verified information from rumours, edited content, and politically influenced narratives.

We aim to address the absence of a trusted, accessible, and organised digital platform for preserving and understanding the spirit of July. Our project will create a bilingual digital archive where users can explore a chronological timeline, view source-linked evidence, read personal testimonies, and learn about civic rights. Events will be organised by date and location, while each submission will show its source and verification status. The platform will preserve history, promote responsible civic awareness, and help future generations learn from the movement’s human experiences.

**Verified word count: 150**

## E. Solution (300–380 words)

Shakkho is a mobile-first, bilingual learning archive built around an original unit: the Evidence Passport. Instead of presenting a generic timeline or asking visitors to trust a platform badge, each archived record carries traceable context. The passport shows the associated event, date and broad location, source organisation and type, original link, corroborating-source count, verification label, consent and reuse conditions, timestamps, and a deterministic SHA-256 integrity fingerprint.

The fingerprint is calculated in the browser from stable canonical fields. A visitor can recompute it and detect whether the record changed after fingerprinting. The interface explains the essential limitation: integrity is evidence of unchanged content, not proof that the original claim is true. A separate “Before You Share” lab evaluates documentation completeness—source, date, location, publisher, corroboration, context, and consent—without presenting a misleading truth score.

Visitors explore six carefully worded phases and three human-centred composite demonstration stories in English or Bangla. Source-linked cards make what is documented, what remains uncertain, and why preservation matters visible together. Share cards can be downloaded without automatically posting or including sensitive personal data.

Community contribution is private by design. The form asks for record information, not a name, email, phone, exact address, ID, or affiliation. Zod validates input, Web Crypto fingerprints it, and Dexie stores it only in IndexedDB on the current device. Users can delete or export their collection. Portable Archive Packs provide validated JSON transfer with record and pack fingerprints, a 5 MB and 500-record limit, tamper checks, deduplication, conflict preview, and no silent overwrite.

The bundled demo works without a backend or paid API. A service worker caches the application shell and static archive, enabling core learning and local archive tasks after the first load. This is feasible on intermittent connections and low-end phones while avoiding a single point of dependence. It is an educational prototype, not a fact-checking authority or secure whistleblowing channel; real deployment requires editorial governance, consent review, durable institutional storage, and continued source verification.

## F–N

- **Stack:** React, TypeScript, Vite, Router, CSS, Dexie, Zod, Web Crypto, html-to-image, PWA, Vitest.
- **Third-party components:** See `ATTRIBUTIONS.md`.
- **AI disclosure:** AI assisted code, design/copy drafts, tests, and documentation; humans remain responsible for source review.
- **Personal data:** No identity required; contributions remain local unless exported.
- **Team:** `[Name — role]`
- **Repository:** `[REPOSITORY_URL]`
- **Live:** `[LIVE_URL]`
- **Demo video:** `[DEMO_VIDEO_URL]`
- **Facebook post:** `[FACEBOOK_POST_URL]`
