# Unmaze Website

## Project

Marketing SSG website for [unmaze.app](https://unmaze.app). Multilingual (RU/EN/HE) with RTL support for Hebrew.

Fully isolated from unmaze-platform. Own repository, own dependencies.

- **Visual reference:** `/Users/peshkes/Projects/unmaze/old-unmaze-next-website/` (archived Next.js site)

## Stack

- Next.js 15, App Router, TypeScript strict, Tailwind CSS 4, pnpm
- i18n: custom type-safe dictionaries (no external i18n library)
- Deployment: Vercel (SSG, no `output: 'export'`)

## Architecture

**SSG only. No API routes, no server actions, no middleware.**

All pages are statically generated at build time. No exceptions.

- Forbidden: `getServerSideProps`, server actions, middleware, ISR, cookies, sessions, API routes
- `generateStaticParams()` is required for all `[slug]` dynamic routes
- No `output: 'export'` — Vercel handles SSG natively

### Test (dyslexia screening)

Fully client-side. Scoring, analysis, localStorage persistence — all on client. Pure math (weighted sums), no secrets, no DB needed.

---

## Directory Structure

```
unmaze-website/
├── CLAUDE.md
├── public/
│   ├── images/                  — static images (WebP)
│   ├── fonts/                   — custom fonts (Emotical)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── (detect)/            — Language detection (root /)
│   │   │   ├── layout.tsx       — Minimal root layout
│   │   │   └── page.tsx         — Client-side redirect to /{locale}
│   │   ├── (ru)/                — Russian route group
│   │   │   ├── layout.tsx       — Root layout (lang="ru", dir="ltr")
│   │   │   └── ru/              — /ru prefix
│   │   │       ├── page.tsx
│   │   │       ├── blog/page.tsx
│   │   │       ├── blog/[slug]/page.tsx
│   │   │       └── test/page.tsx
│   │   ├── (en)/                — English route group
│   │   │   ├── layout.tsx       — Root layout (lang="en", dir="ltr")
│   │   │   └── en/              — /en prefix
│   │   │       ├── page.tsx
│   │   │       ├── blog/page.tsx
│   │   │       ├── blog/[slug]/page.tsx
│   │   │       └── test/page.tsx
│   │   ├── (he)/                — Hebrew route group
│   │   │   ├── layout.tsx       — Root layout (lang="he", dir="rtl")
│   │   │   └── he/              — /he prefix
│   │   │       ├── page.tsx
│   │   │       ├── blog/page.tsx
│   │   │       ├── blog/[slug]/page.tsx
│   │   │       └── test/page.tsx
│   │   ├── sitemap.ts           — Dynamic XML sitemap
│   │   └── globals.css          — Tailwind + CSS variables + custom styles
│   ├── components/
│   │   ├── pages/               — Page content components (HomePageContent, BlogPageContent, etc.)
│   │   ├── layout/              — Header, Footer, LanguageSwitcher
│   │   ├── home/                — Hero, Features, HowDetect, Videos, Guide
│   │   ├── sections/            — Reusable sections (2+ pages): FAQ, ArticlesPreview
│   │   ├── blog/                — ArticleCard, ArticleList
│   │   ├── test/                — TestQuestion, TestResult
│   │   ├── ui/                  — Button, Card, Accordion, Container, Icon, Cursor
│   │   └── seo/                 — JsonLd component
│   ├── lib/
│   │   ├── i18n/
│   │   │   ├── index.ts         — t(), getLocalePrefix(), Locale type
│   │   │   ├── types.ts         — DeepString<T>, Dictionary, Locale
│   │   │   ├── ru.ts            — Russian dictionary
│   │   │   ├── en.ts            — English dictionary
│   │   │   └── he.ts            — Hebrew dictionary
│   │   ├── metadata.ts          — createMetadata() + JSON-LD generators
│   │   ├── content.ts           — Blog post loading (MDX + gray-matter)
│   │   ├── icons.ts             — Centralized icon SVG paths
│   │   └── fonts.ts             — Font configuration (Manrope, Emotical)
│   ├── data/
│   │   └── test-questions.ts    — Dyslexia test questions with weights
│   └── hooks/
│       └── use-test.ts          — Test state management with localStorage
├── content/
│   └── blog/
│       ├── ru/                  — Russian blog posts (.mdx)
│       ├── en/                  — English blog posts (.mdx)
│       └── he/                  — Hebrew blog posts (.mdx)
├── next.config.ts               — Minimal (Vercel handles SSG)
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## i18n Strategy

### Routing — Route Groups (no middleware)

Four route groups — one for detection, one per locale:

```
/              → (detect) Auto-detect language, redirect to /{locale}
/ru            → (ru) Russian
/ru/blog       → (ru) Russian blog
/en            → (en) English
/en/blog       → (en) English blog
/he            → (he) Hebrew
/he/blog       → (he) Hebrew blog
```

Root `/` uses client-side `navigator.languages` to detect preferred locale and redirects. Falls back to Russian.

Each route group has its own `layout.tsx` with correct `lang` and `dir` attributes.

### Type-Safe Dictionaries

```typescript
// src/lib/i18n/types.ts
type DeepString<T> = T extends string
  ? string
  : T extends object
    ? { [K in keyof T]: DeepString<T[K]> }
    : T

export type Dictionary = DeepString<typeof ru>
export type Locale = 'ru' | 'en' | 'he'
```

```typescript
// src/lib/i18n/index.ts
export function t(locale: Locale): Dictionary { return dict[locale] }
export function getLocalePrefix(locale: Locale): string {
  return `/${locale}`
}
export function isRtl(locale: Locale): boolean { return locale === 'he' }
```

### RTL Support (Hebrew)

- `<html dir="rtl" lang="he">` in `(he)/layout.tsx`
- Tailwind logical properties only: `ps-*`/`pe-*`, `ms-*`/`me-*`, `text-start`/`text-end`
- Never use `pl-*`/`pr-*`, `ml-*`/`mr-*`, `text-left`/`text-right`
- Flexbox auto-reverses with `dir="rtl"`
- Arrow icons: `rtl:rotate-180`
- Hebrew font: add Noto Sans Hebrew in `(he)/layout.tsx`

---

## Component Rules

### When to create a component

Create a component when **any** of these are true:

- Used in 2+ places
- Contains interactive logic (`"use client"`)
- JSX block exceeds ~40 lines and has a clear single responsibility

Do NOT create a component just to split a file. Inline JSX is fine for single-use, non-interactive sections.

### Where to put it

| Type                      | Location                                             |
| ------------------------- | ---------------------------------------------------- |
| Page content (per-page)   | `src/components/pages/`                              |
| Used on 1 page only       | Same file as the page, or `app/[route]/_components/` |
| Used on 2+ pages          | `src/components/sections/`                           |
| Generic UI (button, card) | `src/components/ui/`                                 |
| Layout (header, footer)   | `src/components/layout/`                             |
| JSON-LD / meta helpers    | `src/components/seo/`                                |
| Home page sections        | `src/components/home/`                               |

### Server vs Client

- **Default: Server Component.** No `"use client"` unless required.
- Add `"use client"` only for: accordion, mobile menu, language switcher, dyslexia test, custom cursor, interactive alphabet.
- Keep client components **leaf-level** — never wrap an entire section in `"use client"` just for one interactive element.

---

## Styling Rules

- **Tailwind utility classes only.** No inline `style`, no CSS modules.
- **CSS variables** for all theme colors — defined in `globals.css`, used as `var(--color-*)`.
- `@apply` only for patterns repeated 3+ times that cannot be expressed as a component.
- Responsive: mobile-first with `sm:` `md:` `lg:` `xl:` prefixes.

### Inline Styles

**Forbidden** — always convert to Tailwind:

- `style={{ padding: '...' }}` → `p-[...]` or `px-[...] py-[...]`
- `style={{ margin: '...' }}` → `m-[...]` or `mx-[...] my-[...]`
- `style={{ maxWidth: '...' }}` → `max-w-[...]`
- `style={{ fontSize: '...' }}` → `text-[...]`
- `style={{ backgroundColor: '...' }}` → `bg-[...]`

**Allowed** — only for dynamic values from state:

- `style={{ maxHeight: isOpen ? '1000px' : '0' }}` — accordion animation
- `style={{ transform: `translateX(-${index * 100}%)` }}` — carousel position

### Color reference

| Token          | Value   | Usage             |
| -------------- | ------- | ----------------- |
| Background     | #FFFFFF | Main bg           |
| Text primary   | #000000 | Headings          |
| Text body      | #374151 | Body text         |
| Light bg       | #F6F6F6 | Cards, sections   |
| Light bg alt   | #F8F8F8 | Alternate cards   |
| Border         | #E5E7EB | Dividers, borders |

---

## Icons

Use the centralized `Icon` component for all icons. No inline SVGs except the Unmaze logo.

```tsx
import { Icon } from '@/components/ui/icon'
<Icon name="arrow-right" className="h-5 w-5" />
```

Icons stored in `src/lib/icons.ts` as Material Design SVG paths. Must be fill-based, single `<path>`, `viewBox="0 0 24 24"`.

---

## Page Rules

Every `page.tsx` must:

1. Export a `metadata` object or `generateMetadata()` function
2. Have a single `<main>` element
3. Have a single `<h1>` — the page title
4. Be a **Server Component** (no `"use client"` at page level)

### No Code Duplication Across Locales

Page content must NOT be duplicated across locale route groups. Each `page.tsx` contains **only metadata + locale prop**. All rendering logic lives in a shared component in `src/components/pages/`.

```tsx
// src/app/(en)/en/page.tsx — CORRECT: thin wrapper
import { HomePageContent } from '@/components/pages/home'
const dict = t('en')
export const metadata = createMetadata({ ... })
export default function HomePage() {
  return <HomePageContent locale="en" />
}

// src/components/pages/home.tsx — all logic here
export function HomePageContent({ locale }: { locale: Locale }) {
  const dict = t(locale)
  return <main>...</main>
}
```

For dynamic routes (`blog/[slug]`), `generateStaticParams` and `generateMetadata` stay in `page.tsx`, but rendering delegates to the shared component.

---

## SEO / Structured Data

Every page gets a JSON-LD component from `src/components/seo/`.

### Schema Types by Page

| Page type       | Schema                       |
| --------------- | ---------------------------- |
| All pages       | `WebPage` + `BreadcrumbList` |
| Homepage        | `WebSite` + `Organization`   |
| Blog post       | `BlogPosting`                |
| Blog listing    | `ItemList`                   |
| Pages with FAQ  | `FAQPage`                    |

### Metadata Factory

```typescript
createMetadata({
  title: 'Page Title',
  description: '150-160 char description',
  path: '/blog',
  locale: 'ru',
  // Automatically generates: canonical, hreflang (ru/en/he + x-default), OG, Twitter
})
```

### Structured Data Best Practices (2026)

- JSON-LD must match **visible page content exactly**
- Use `datePublished` (ISO 8601) for all content
- hreflang links must be **bidirectional** across all 3 languages
- Validate with Google Rich Results Test before deploying

### Core Web Vitals (for ranking)

- **LCP** (Largest Contentful Paint) ≤ 2.5s
- **INP** (Interaction to Next Paint) < 200ms
- **CLS** (Cumulative Layout Shift) < 0.1

### Dynamic Sitemap

`src/app/sitemap.ts` generates sitemap from static pages + blog articles for all 3 locales. `export const dynamic = 'force-static'`.

---

## Architectural Decisions

- **No i18n library.** Custom type-safe dictionaries with `DeepString<T>`. Simpler, zero bundle cost, full control.
- **Route groups for i18n.** `(ru)`, `(en)`, `(he)` — no middleware needed. Each has own layout with correct `lang`/`dir`.
- **All locales have prefixes.** `/ru`, `/en`, `/he`. Root `/` auto-detects language via `navigator.languages` and redirects.
- **No API routes.** Site is fully static. Server logic lives in unmaze-platform.
- **Deploy on Vercel.** No `output: 'export'` — Vercel handles SSG natively.
- **Dyslexia test — fully client-side.** Scoring is pure math, no secrets, no DB.
- **MDX blog with file-based content.** Articles stored as `.mdx` files per locale in `content/blog/{locale}/`. Parsed with `gray-matter`, rendered with `next-mdx-remote`.

---

## Blog Architecture

Blog articles are stored as MDX files with YAML frontmatter, organized by locale:

```
content/blog/
├── ru/
│   ├── how-to-help-child-with-dyslexia.mdx
│   └── ...
├── en/
│   └── ...
└── he/
    └── ...
```

### MDX Frontmatter

Every `.mdx` file must have this frontmatter:

```yaml
---
title: "Article Title"
slug: "article-slug"
date: "2026-01-20"
description: "Short description for SEO and cards."
image: "/images/blog/article-slug.webp"
---
```

- `slug` must match the filename (without `.mdx`)
- `slug` must be identical across all locales (same article = same slug)
- `date` in ISO format
- `image` path to WebP in `public/`

### Content Loading

`src/lib/content.ts` provides:

```typescript
getAllBlogPosts(locale)   // → sorted by date desc
getBlogPost(slug, locale) // → single post or undefined
getAllBlogSlugs(locale)   // → string[] for generateStaticParams
```

Uses `gray-matter` to parse frontmatter + content at build time. `MDXRemote` from `next-mdx-remote/rsc` renders content as JSX with Tailwind Typography (`prose`).

### Adding a New Article

1. Create `.mdx` file in `content/blog/{locale}/` for **each locale** (ru, en, he)
2. Use the same `slug` across all locales
3. Add frontmatter with all required fields
4. Write content in Markdown (supports headings, lists, links, images, bold/italic)
5. No code changes needed — new articles appear automatically

### Dependencies

- `gray-matter` — parse YAML frontmatter from MDX
- `next-mdx-remote` — server-side MDX rendering (RSC-compatible)
- `@tailwindcss/typography` — `prose` classes for rendered markdown

---

## What We Take from Old Project

### Transfer (good)

| What | From | Adjustments |
|------|------|-------------|
| Home page structure | `page.tsx` | Sections: Hero, Features, HowDetect, Videos, Guide, FAQ, Articles |
| Article content | `data/articles.ts` | Migrated to MDX files in `content/blog/{locale}/` |
| Test questions | `data/readingTestQuestions.ts` | Translate, adapt UI |
| Test logic | `hooks/useTest.ts`, `utils/testAnalysis.ts` | Port as-is, better typing |
| Images | `assets/images/` | WebP — keep logo, iphone, alphabet |
| Emotical font | `assets/fonts/` | Port |
| Inline SVG logo | `components/share/header/Logo.tsx` | Port |
| Custom cursor | `components/share/cursor/` | Rewrite with Tailwind, desktop only |
| Interactive alphabet | `components/home/how-detect/example/` | Rewrite with Tailwind |
| Video player | `components/home/videos/` | Rewrite, add real videos |

### Do NOT transfer (bad)

| What | Why |
|------|-----|
| CSS Modules | Replace with Tailwind |
| API routes | SSG site, no APIs |
| Hardcoded Russian text | Replace with i18n dictionaries |
| Chaotic breakpoints (15+) | Standard Tailwind breakpoints |
| Broken links (social) | Remove or use real URLs |
| Placeholder images (picsum) | Replace with real images or remove |
| FAQ stubs | Write real answers or remove section |

---

## TypeScript Rules

- `strict: true` — no exceptions
- No `any`. Use `unknown` + type guard if type is truly unknown.
- Props: `interface {Name}Props { ... }` — always explicit
- Prefer `type` for unions, `interface` for object shapes

## Conventions

- **Components**: PascalCase, one file = one component
- **Utilities/hooks**: camelCase
- **CSS**: Tailwind utility-first, custom styles only in globals.css
- **Images**: WebP, via `next/image`, mandatory alt text (translated)
- **Translations**: dictionary-based (`dict.hero.title`), no hardcoded strings
- **Exports**: named exports (not default), except page/layout
- **RTL**: only logical properties in Tailwind (ps/pe/ms/me/start/end)
- **Comments**: English only, minimal — code must be readable without them

## Git Rules

- Format: `type: short description` (e.g. `feat: add blog listing page`)
- Types: `feat` `fix` `refactor` `style` `docs` `chore`
- One logical change per commit
- Feature branches only, never commit directly to `main`

## Scripts

```bash
pnpm dev          # dev server
pnpm build        # production build (SSG)
pnpm start        # run production
pnpm lint         # ESLint
pnpm format       # Prettier
```

---

## Claude Commands

| Command                        | When to use                                       |
| ------------------------------ | ------------------------------------------------- |
| `/new-page [route] [locale]`   | New page with metadata, h1, JSON-LD               |
| `/new-article [slug]`          | New blog article in data                           |
| `/refactor [file]`             | Bring a file up to CLAUDE.md standards             |
| `/fix-typos [path]`            | Fix spelling/grammar errors only (no refactoring)  |
| `/edit-content [path] [desc]`  | Edit/rewrite text content (copy, UI text)          |
| `/commit`                      | Write a proper commit message for staged changes   |
| `/translate [locale]`          | Add/update translations for a locale               |
| `/audit-seo`                   | Check all pages for SEO compliance                 |

---

## Pre-Commit Checklist

**Code**

- [ ] No `any` types
- [ ] No `console.log` left in code
- [ ] No unused imports or variables
- [ ] No hardcoded colors or sizes — use CSS variables or Tailwind tokens
- [ ] No hardcoded strings — use i18n dictionaries

**Components**

- [ ] New component is in the correct directory (see table above)
- [ ] Interactive components have `"use client"`
- [ ] No `"use client"` at page level

**Pages**

- [ ] `metadata` or `generateMetadata()` exported
- [ ] Single `<h1>` on the page
- [ ] JSON-LD component added

**Styles**

- [ ] No inline `style` attributes
- [ ] Responsive — checked at mobile, tablet, desktop
- [ ] RTL — checked with Hebrew locale
- [ ] Only logical properties (no pl/pr/ml/mr/text-left/text-right)

**Content**

- [ ] All images have `alt` text (translated per locale)
- [ ] No broken internal links
- [ ] Translations exist for all 3 locales

---

## Implementation Phases

### Phase 1 — Foundation
1. Initialize Next.js + TypeScript + Tailwind 4
2. Set up i18n (type-safe dictionaries, route groups, RTL)
3. Layout: Header + Footer + LanguageSwitcher
4. SEO foundation: createMetadata(), JSON-LD generators, sitemap
5. CSS variables, fonts, globals.css

### Phase 2 — Home Page
6. Hero section
7. Features (4 cards)
8. HowDetect (symptoms + interactive alphabet)
9. Videos section
10. Guide section
11. FAQ (accordion)
12. Articles preview

### Phase 3 — Additional Pages
13. Blog: listing + individual articles
14. Dyslexia test
15. Translate all content to EN and HE

### Phase 4 — Polish
16. OG images for sharing
17. Animations (scroll-triggered)
18. Custom cursor (desktop only)
19. Lighthouse audit → optimize to 95+
20. Accessibility audit (WCAG 2.1 AA)

See [FUTURE.md](FUTURE.md) for planned features and TODO items.