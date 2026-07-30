# Commit Plan

Git identity is configured, but this checkout currently triggers Git’s Windows “dubious ownership” protection. After the repository owner marks this exact folder safe, use:

```bash
git config --global --add safe.directory E:/july26
git add package.json package-lock.json tsconfig*.json vite.config.ts vitest.config.ts eslint.config.js index.html .gitignore
git commit -m "chore: scaffold React TypeScript application"
git add src/data.ts src/i18n.tsx src/styles.css src/components.tsx src/pages.tsx src/App.tsx src/main.tsx
git commit -m "feat: add bilingual July timeline and story experience"
git add src/lib/integrity.ts src/types.ts
git commit -m "feat: implement evidence passports and integrity verification"
git add src/lib/db.ts
git commit -m "feat: add local contribution and archive-pack exchange"
git add public vite.config.ts
git commit -m "feat: add offline PWA and share-card generation"
git add src/*.test.tsx src/lib/*.test.ts src/test
git commit -m "test: add verification and archive validation tests"
git add "*.md" LICENSE
git commit -m "docs: add hackathon submission and teammate documentation"
git add -A
git commit -m "fix: complete accessibility and production polish"
```

Review `git status` before each commit; do not blindly include unrelated work.
