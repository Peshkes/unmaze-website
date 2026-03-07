---
description: Audit all pages for SEO compliance following CLAUDE.md structured data and metadata rules.
---

Run a comprehensive SEO audit across all pages.

Check each page for:

1. **Metadata:**
   - [ ] `metadata` or `generateMetadata()` exported
   - [ ] Title is unique, 50-60 characters
   - [ ] Description is unique, 150-160 characters
   - [ ] Canonical URL is correct
   - [ ] hreflang links for all 3 locales (ru, en, he) + x-default
   - [ ] Open Graph tags (title, description, image, locale)
   - [ ] Twitter Card tags

2. **Structured Data:**
   - [ ] JSON-LD component present
   - [ ] Correct schema type for page type (see CLAUDE.md table)
   - [ ] JSON-LD content matches visible page content
   - [ ] `datePublished` in ISO 8601 format where applicable

3. **HTML:**
   - [ ] Single `<h1>` per page
   - [ ] Heading hierarchy (h1 → h2 → h3, no skips)
   - [ ] All images have translated `alt` text
   - [ ] No broken internal links
   - [ ] `lang` attribute correct on `<html>`
   - [ ] `dir` attribute correct (`rtl` for Hebrew)

4. **Sitemap:**
   - [ ] All pages included in `src/app/sitemap.ts`
   - [ ] All 3 locale versions present
   - [ ] Correct URLs

Report findings grouped by severity: Critical / Warning / Info.