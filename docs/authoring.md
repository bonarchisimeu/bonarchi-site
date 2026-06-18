# Authoring & operations guide

Everything you need to add content and ship it. Written for the one person who maintains this site: you.

## TL;DR

1. Add a Markdown file (EN), optionally a `-fr.md` twin with the **same `urlSlug`**.
2. `pnpm dev` to preview, `pnpm build` to verify.
3. `git commit` then **`git pushboth`** → Cloudflare auto-deploys.

---

## 1. Add an article

Articles live in `src/content/writing/`. The filename becomes the entry id; the URL comes from `urlSlug`.

**English** — `src/content/writing/my-post.md`:

```markdown
---
title: "How I learn a domain"
description: "One sentence. Used on cards, in <meta>, and in the RSS feed."
pubDate: 2026-06-20          # controls order (newest first) + article date
tags: ["learning", "method"]
draft: false                 # true = built but hidden from all listings
lang: en
urlSlug: how-i-learn-a-domain
---

Body in Markdown. Use ## for section headings.
```

**French (optional)** — `src/content/writing/my-post-fr.md`:

```markdown
---
title: "Comment j'apprends un domaine"
description: "Une phrase, en français."
pubDate: 2026-06-20
tags: ["apprentissage", "méthode"]
draft: false
lang: fr
urlSlug: how-i-learn-a-domain   # ← SAME urlSlug as the EN file
---
```

Result:
- EN at `/writing/how-i-learn-a-domain`, listed on `/writing` and the EN home.
- FR at `/fr/writing/how-i-learn-a-domain`, listed on `/fr/writing` and the FR home.
- The two are linked as translations for hreflang (Google serves the right one per locale).

> **The one gotcha:** the field is `urlSlug`, **never `slug`**. Astro's content
> layer treats `slug` as the entry id, so two translations sharing `slug` collide
> ("Duplicate id") and one silently overwrites the other. `urlSlug` avoids this.
> Also: name the FR file with a `-fr` suffix (`...-fr.md`), not `....fr.md`, so the
> ids differ.

---

## 2. Add a case study

Same convention, in `src/content/work/`. Extra fields: `role`, `stack`, `year`, `impact`, `order`.

```markdown
---
title: "Digitizing the branch customer journey"
summary: "One sentence shown on the work list and as the page lede."
role: "Software engineer"
stack: ["Java", "Spring Boot", "PostgreSQL"]
year: 2024
impact: "−45% client wait time · −40% processing time"
order: 1                     # lower = higher on the list
draft: false
lang: en
urlSlug: digitizing-the-branch-journey
---

## Context
## What I built
## Impact
## What I took from it
```

The FR twin (`...-fr.md`) mirrors it with `lang: fr` and the same `urlSlug`.

---

## 3. Add an epigraph (quote)

A reusable component, currently on `/about`. Drop it into any page:

```astro
---
import Epigraph from '../components/Epigraph.astro';   // adjust depth for /fr pages
---
<Epigraph
  quote="The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
  author="Brian Herbert"
  source="Dune: House Harkonnen"   {/* optional */}
/>
```

> Verify the attribution before using a quote. A misattributed quote backfires
> like empty jargon.

---

## 4. Editing chrome text (nav, footer, labels)

Shared UI strings are **not** hardcoded in pages — edit `src/i18n/ui.ts`:

```ts
export const ui = {
  en: { 'nav.work': 'Work', 'footer.colophon': '…', 'brand.ledger': 'The Logbook', … },
  fr: { 'nav.work': 'Réalisations', 'footer.colophon': '…', 'brand.ledger': 'Le Carnet', … },
};
```

Add a key to both `en` and `fr`, then use `t('your.key')` in a component (the header/footer already resolve the active language).

---

## 5. Regenerate the OG image

The social-share card (`public/og.png`, 1200×630) is generated from an HTML template, not hand-drawn. To refresh it after changing the tagline or name:

1. Edit the source HTML (`/tmp/og.html` recipe, or recreate it): "The Logbook · No. 001", name, the hero tagline, "Software engineer · Central Africa", `bonarchisimeu.me`. Paper background, Space Grotesk.
2. Serve it locally and screenshot at exactly **1200×630** (any headless browser / Playwright).
3. Save the PNG to `public/og.png`.

No code change needed — `Base.astro` already points `og:image` at `/og.png`.

---

## 6. Build, preview, ship

```bash
pnpm dev            # live-reload preview at http://localhost:4321
pnpm build          # must pass before shipping; outputs dist/
pnpm preview        # serve the exact production build
```

Then publish to both repos (Cloudflare deploys from `yannbonarchi`):

```bash
git add -A
git commit -m "Publish: <what>"
git pushboth        # origin (bonarchisimeu) + yannbonarchi, restores active gh account
```

Cloudflare builds and deploys automatically (~1 min). Watch it in the dashboard under **Workers & Pages → bonarchi-site → Deployments**.

### After publishing something important

In **Google Search Console** → URL Inspection → paste the URL → **Request indexing**. This refreshes the title/description in search results within hours-to-days instead of waiting for the next natural crawl.

---

## 7. Design tokens

All colors, fonts, and rhythm live as CSS variables at the top of `src/styles/global.css`:

| Token | Role |
|-------|------|
| `--paper`, `--paper-2` | backgrounds (warm ivory) |
| `--ink`, `--ink-soft`, `--ink-faint` | text shades |
| `--accent`, `--accent-deep` | terracotta |
| `--rule`, `--rule-strong` | ruled lines / borders |
| `--display`, `--body`, `--mono` | font stacks |

Dark mode values are defined under `@media (prefers-color-scheme: dark)`. Change a token once, it propagates everywhere.

---

## Conventions

- **Accuracy first.** State only what you did. Keep employers anonymous. Don't republish coursework verbatim.
- **Voice.** First person, concrete, no em-dashes, short punches mixed with longer sentences.
- **EN is the default**, FR mirrors it. A piece can ship EN-only; add the `-fr.md` twin when you translate.
- **Drafts** (`draft: true`) build but never appear in listings — safe to commit work-in-progress.
