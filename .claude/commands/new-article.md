---
description: Create a new blog article entry. Usage: /new-article [slug]
argument-hint: slug (e.g. how-to-help-child-with-dyslexia)
---

Add a new article to `src/data/articles.ts`.

Requirements:

- Slug: `$ARGUMENTS`
- Add article data with structure matching existing articles
- Include translations for all 3 locales in the i18n dictionaries
- Title and description must be filled in (ask me if not provided)
- Image path: `/images/blog/$ARGUMENTS.webp` — remind me to add the actual image
- Date should be today's date (ISO 8601)
- Add the article to the sitemap entries in `src/app/sitemap.ts`