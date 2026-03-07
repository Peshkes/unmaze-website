---
description: Refactor a file or component to match CLAUDE.md conventions. Usage: /refactor [file path]
argument-hint: file path (e.g. src/components/layout/header.tsx)
---

Refactor `$ARGUMENTS` to comply with CLAUDE.md.

Steps:

1. Read the file carefully
2. Identify violations:
   - `"use client"` where not needed
   - Inline `style` attributes instead of Tailwind
   - Hardcoded colors or sizes instead of CSS variables/Tailwind tokens
   - `any` types
   - Components in wrong directories
   - Missing or incorrect TypeScript types
   - Non-logical CSS properties (pl/pr/ml/mr/text-left/text-right instead of ps/pe/ms/me/text-start/text-end)
   - Hardcoded strings instead of i18n dictionary values
   - Unnecessary comments
   - Components that should be split out (>40 lines, reused logic)
   - Components that should NOT be split (single-use, non-interactive)
3. Apply fixes — only what violates the rules, nothing more
4. Do not change logic, only structure and style compliance

After refactoring, list what was changed and why.
