# Unmaze Website

Marketing website for [unmaze.app](https://unmaze.app) — an educational gaming platform for children aged 5–12 with dyslexia, dyscalculia, and ADHD.

## Stack

- **Next.js 15** (App Router, SSG)
- **TypeScript** (strict)
- **Tailwind CSS 4**
- **pnpm**

## Features

- Multilingual: Russian, English, Hebrew (RTL)
- Type-safe i18n with custom dictionaries
- MDX blog with gray-matter
- Dyslexia screening test
- SEO: JSON-LD, sitemap, metadata
- Scroll-reveal animations
- Custom cursor (desktop)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `pnpm dev`     | Dev server           |
| `pnpm build`   | Production build     |
| `pnpm start`   | Run production       |
| `pnpm lint`    | ESLint               |
| `pnpm format`  | Prettier             |

## Deployment

Vercel (SSG, no `output: 'export'`).

## License

All rights reserved.