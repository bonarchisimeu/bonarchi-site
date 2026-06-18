# bonarchisimeu.me

> Personal site of **Bonarchi SIMEU** — a software engineer who learns a domain, then builds the software it runs on. Live, bilingual (EN + FR), and indexed.

**Live:** https://bonarchisimeu.me · **FR:** https://bonarchisimeu.me/fr

## What is this?

A hybrid **authority + augmented-CV** site. The positioning is deliberate: a builder who goes deep into a domain and ships what it needs. Banking is the *current* domain and the proof of depth, **not** the identity (tomorrow it could be energy, health, agriculture). The copy is grounded in [self-presentation principles](https://en.wikipedia.org/wiki/Humblebrag) — specificity over clichés, accuracy over inflation.

**Design theme — "The Logbook" / "Le Carnet":** an engineer's logbook transposed into an editorial object (warm paper, ruled baseline grid, terracotta accent, double-rule, tabular mono figures). The look is domain-neutral on purpose. Type: **Space Grotesk** (display) + **Inter** (body), self-hosted.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | [Astro 5](https://astro.build) — content-first, ships ~0 JS |
| Fonts | Self-hosted via Fontsource — Space Grotesk + Inter |
| Content | Markdown content collections (`src/content/`) |
| i18n | Astro built-in — EN at root, FR under `/fr` |
| SEO | sitemap, RSS, JSON-LD (Person/WebSite/BlogPosting), OG image, hreflang |
| Hosting | Cloudflare **Worker** (Static Assets) — free, global CDN, auto-deploy |

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:4321 (falls back to 4322+ if busy)
pnpm build        # outputs static site to dist/
pnpm preview      # serve the production build locally
```

> Build approvals for `esbuild` + `sharp` live in `pnpm-workspace.yaml`
> (`onlyBuiltDependencies`). The `packages: ['.']` field there is required by
> the pnpm version Cloudflare uses — do not remove it.

## Project structure

```
src/
├── content.config.ts        # collections: writing, work (lang + urlSlug fields)
├── content/
│   ├── writing/             # articles — <slug>.md (EN) + <slug>-fr.md (FR)
│   └── work/                # case studies — same EN/FR file convention
├── i18n/ui.ts               # shared chrome strings (nav, footer) EN/FR + helpers
├── layouts/Base.astro       # <head>, SEO/OG/JSON-LD, hreflang, lang detection
├── components/
│   ├── Header.astro         # localized nav + EN/FR language switch
│   ├── Footer.astro         # colophon + links
│   └── Epigraph.astro       # reusable quote block (used on /about)
├── pages/
│   ├── index.astro          # EN home          ├── fr/index.astro
│   ├── about.astro          # EN about         ├── fr/about.astro
│   ├── now.astro            #                  ├── fr/now.astro
│   ├── contact.astro        #                  ├── fr/contact.astro
│   ├── work/                # EN work index + [...slug]
│   ├── writing/             # EN writing index + [...slug]
│   ├── fr/work/             # FR work index + [...slug]
│   ├── fr/writing/          # FR writing index + [...slug]
│   └── rss.xml.js           # RSS feed (EN articles)
├── styles/global.css        # "The Logbook" design system + tokens
└── public/                  # favicon (svg+png), og.png, robots.txt, GSC file
```

## Bilingual model (how it works)

A pragmatic hybrid — see [`docs/authoring.md`](./docs/authoring.md) for the full workflow:

- **Chrome** (nav, footer, labels) → translation dictionary in `src/i18n/ui.ts`.
- **Prose** (pages, articles, case studies) → dedicated per-locale files.
- **Routing** → Astro i18n. EN at `/`, FR at `/fr`. A French-preferring browser landing on `/` is redirected to `/fr` (the explicit EN/FR switch is remembered).
- **Pairing** → each content item carries `lang` (`en`|`fr`) and a shared `urlSlug`. The `urlSlug` (not `slug`, which Astro reserves as the entry id) links a translation pair and powers hreflang.

## Adding content

Quick version (full guide: [`docs/authoring.md`](./docs/authoring.md)):

**Article** — `src/content/writing/my-post.md` (EN) and optionally `my-post-fr.md` (FR):

```yaml
---
title: "Title"
description: "One-line summary for cards + SEO + RSS."
pubDate: 2026-06-20
tags: ["learning"]
draft: false          # true = built but hidden from listings
lang: en              # en | fr
urlSlug: my-post      # SAME value on the EN and FR files
---
```

**Case study** — `src/content/work/my-case.md` (+ `my-case-fr.md`):

```yaml
---
title: "Title"
summary: "What the project was, in one sentence."
role: "Software engineer"
stack: ["Java", "PostgreSQL"]
year: 2025
impact: "A concrete result, e.g. −45% wait time."
order: 1              # lower = higher on the list
draft: false
lang: en
urlSlug: my-case
---
```

> ⚠️ **Accuracy is the rule.** State only what you actually did. Keep employers anonymous ("a Central African bank"). Do not republish UoP coursework verbatim.

## Publishing

The repo lives on **two GitHub accounts**; Cloudflare deploys from `yannbonarchi`. Publish to both with one command:

```bash
git add -A && git commit -m "…"
git pushboth          # alias → scripts/push-all.sh (pushes origin + yannbonarchi)
```

A push to `yannbonarchi/bonarchi-site` triggers an automatic Cloudflare build (~1 min) and deploy. No manual deploy step.

## Operations

| Topic | Detail |
|-------|--------|
| **Domain** | `bonarchisimeu.me` (Namecheap). Free year until **2027-06-17**; NS on Cloudflare; HTTPS auto. |
| **Hosting** | Cloudflare Worker `bonarchi-site`, Static Assets → `dist` (`wrangler.jsonc`). Free plan: 3,000 build-min/month. |
| **SEO** | Google Search Console verified (HTML-tag, `bonarchisimeu@gmail.com`); sitemap submitted. New content: request re-indexing in GSC to refresh faster. |
| **OG image** | `public/og.png` (1200×630). Regenerate from `docs/authoring.md` recipe when the tagline/name changes. |
| **Repos** | `github.com/bonarchisimeu/bonarchi-site` (origin) + `github.com/yannbonarchi/bonarchi-site` (deploy source). |

## License

Personal project. Content © Bonarchi SIMEU. Code is yours to reuse.
