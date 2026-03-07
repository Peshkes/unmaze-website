---
description: Fix only typos and spelling errors. No architecture changes, no refactoring. Usage: /fix-typos [path or 'all']
argument-hint: file path (e.g. src/lib/i18n/ru.ts) or 'all' to check entire project
---

Fix typos and spelling errors in `$ARGUMENTS`.

**STRICT SCOPE — DO NOT DEVIATE:**

1. **What to fix:**
   - Spelling mistakes in all 3 languages (RU, EN, HE)
   - Grammar errors
   - Typos in i18n dictionaries, content, UI text
   - Typos in comments and strings

2. **What NOT to change:**
   - Architecture, structure, or organization
   - Component logic or functionality
   - Code style or formatting
   - TypeScript types or interfaces
   - CSS or Tailwind classes
   - File organization or imports

3. **Search strategy:**
   - If `$ARGUMENTS` is 'all', search the entire project
   - If `$ARGUMENTS` is a file path, read and fix that file only
   - Focus on user-facing text and i18n dictionaries first

After fixing, list each typo found and what it was changed to.
