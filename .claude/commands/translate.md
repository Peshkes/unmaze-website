---
description: Add or update translations for a specific locale. Usage: /translate [locale]
argument-hint: locale (ru, en, or he)
---

Add or update translations for the `$ARGUMENTS` locale.

Steps:

1. Read the primary dictionary (`src/lib/i18n/ru.ts`) as the source of truth
2. Read the target dictionary (`src/lib/i18n/$ARGUMENTS.ts`)
3. Identify missing or outdated keys
4. Add translations for all missing keys
5. Ensure the structure matches the primary dictionary exactly (TypeScript will enforce this via `DeepString<T>`)

Rules:

- Translations must be natural, not literal word-for-word
- For Hebrew (`he`): ensure text reads correctly in RTL context
- Preserve SEO-relevant terms (product name "Unmaze" stays as-is)
- Technical terms (dyslexia, ADHD, dyscalculia) should use the standard medical term in each language
- Keep the same tone: friendly, supportive, parent-oriented
- If unsure about a translation, add a `// TODO: verify` comment
