---
description: Review staged changes and create a proper commit message following project conventions.
---

Review the current git diff and create a commit.

Steps:

1. Run `git diff --staged` to see all staged changes
2. If nothing is staged, run `git status` and ask which files to include
3. Analyze the changes and write a commit message:
   - Format: `type: short description` (imperative mood, lowercase)
   - Types: `feat` `fix` `refactor` `style` `docs` `chore`
   - Max ~72 characters
   - Be specific — describe what changed, not how
4. Create the commit

Rules:

- One logical change per commit — if changes are unrelated, ask which to commit first
- Do not add extra files unless explicitly asked
