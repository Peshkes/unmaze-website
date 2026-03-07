---
description: Edit and rewrite text content (copy, descriptions, UI text). Usage: /edit-content [path] [description of changes]
argument-hint: file path (e.g. src/lib/i18n/ru.ts) and description of what to change
---

Edit text content in `$ARGUMENTS`.

**SCOPE — CONTENT ONLY:**

1. **What you can change:**
   - UI text (button labels, headings, descriptions, hero text)
   - i18n dictionary values
   - Article content and descriptions
   - Tone, phrasing, wording
   - Any user-facing text

2. **What NOT to change:**
   - Code, logic, or functionality
   - Component structure or props
   - HTML/JSX tags
   - TypeScript types or interfaces
   - CSS classes or styling
   - File structure or imports

3. **Edit guidelines:**
   - Keep the same meaning and intent
   - Preserve SEO value where relevant
   - Match the brand voice and tone
   - Maintain consistency with existing content
   - If editing one locale, flag if other locales need the same update

4. **Workflow:**
   - Read the file
   - Make edits according to the request
   - Show before/after for each change
   - Explain why each change was made
