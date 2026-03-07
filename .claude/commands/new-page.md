---
description: Scaffold a new page following CLAUDE.md conventions. Usage: /new-page [route] [locale]
argument-hint: route and locale (e.g. blog en)
---

Create a new page at the appropriate route group location.

Determine the correct path based on locale:
- `ru` → `src/app/(ru)/[route]/page.tsx`
- `en` → `src/app/(en)/en/[route]/page.tsx`
- `he` → `src/app/(he)/he/[route]/page.tsx`

Follow CLAUDE.md strictly:

- Server Component, no `"use client"` at page level
- Export `metadata` using `createMetadata()` from `src/lib/metadata.ts`
- Single `<main>` element, single `<h1>`
- Add the appropriate JSON-LD component from `src/components/seo/` based on page type
- Use Tailwind utility classes only, no inline styles
- Use only logical properties (ps/pe/ms/me/text-start/text-end) for RTL compatibility
- All user-facing text from i18n dictionaries — no hardcoded strings
- Match visual style of existing pages

Read existing pages as reference before writing.
