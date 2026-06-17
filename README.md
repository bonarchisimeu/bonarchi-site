# bonarchisimeu.me

Personal site of **Yann Bonarchi Simeu** — software engineer building banking
infrastructure in Central Africa. A hybrid authority + augmented-CV site.

Design theme: **"Le Grand Livre"** — a banking ledger transposed into an
editorial object (paper & ink, terracotta accent, ruled baseline grid, tabular
mono figures). The look encodes the subject matter; it is not decoration.

## Stack

- [Astro 5](https://astro.build) — content-first, ships ~0 JS
- Self-hosted fonts via Fontsource — **Fraunces** (display) + **Inter** (body)
- Content collections in Markdown (`src/content/`)
- `@astrojs/sitemap` + RSS feed (`/rss.xml`)

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # outputs to dist/
pnpm preview      # preview the production build
```

## Structure

```
src/
├── content.config.ts        # collections: writing, work
├── content/
│   ├── writing/             # blog posts (.md) — the authority engine
│   └── work/                # case studies (.md) — the augmented CV
├── layouts/Base.astro       # <head>, header, footer, SEO/OG tags
├── components/              # Header, Footer
├── pages/
│   ├── index.astro          # home: hero + ledger strip + selected work + writing
│   ├── about.astro          # parcours / story
│   ├── work/                # case study index + [...slug]
│   ├── writing/             # blog index + [...slug]
│   ├── now.astro            # /now page
│   ├── contact.astro
│   └── rss.xml.js           # RSS feed
└── styles/global.css        # "Le Grand Livre" design system
```

## Adding content

**A blog post** — create `src/content/writing/my-post.md`:

```yaml
---
title: "Title"
description: "One-line summary for cards + SEO + RSS."
pubDate: 2026-06-20
tags: ["fintech"]
draft: false        # set false to publish
---
```

**A case study** — create `src/content/work/my-case.md`:

```yaml
---
title: "Title"
summary: "What the project was, in one sentence."
role: "Backend engineer"
stack: ["Java", "PostgreSQL"]
year: 2025
impact: "A concrete result."
order: 1            # lower = higher on the list
draft: false
---
```

Starter posts/cases ship with `draft: true` — they build but are filtered out of
listings. Fill them in your own voice, then flip to `draft: false`.

## Before launch — checklist

- [ ] Confirm domain `bonarchisimeu.me` and update `site` in `astro.config.mjs` if different
- [ ] Replace LinkedIn / GitHub URLs in `Header`/`Footer`/`about`/`contact`
- [ ] Rewrite `/about` and the case studies in your own voice (no confidential employer detail)
- [ ] Publish at least 1 real article (`draft: false`)
- [ ] Add an OG image (`public/og.png`, 1200×630) and reference it in `Base.astro`
- [ ] Update `/now`

## Deploy — Cloudflare Pages (recommended)

Free, global CDN (good latency from Cameroon and for readers worldwide).

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → connect the repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `pnpm build`
   - **Output directory:** `dist`
4. Add the custom domain `bonarchisimeu.me` in the Pages project → **Custom domains**.

Netlify / Vercel work identically (build `pnpm build`, publish `dist`).
