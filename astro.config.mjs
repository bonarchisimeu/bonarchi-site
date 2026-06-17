// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domain: bonarchisimeu.me — matches your social handles (@bonarchisimeu) for
// a single, consistent personal brand across the web.
const SITE = 'https://bonarchisimeu.me';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    // EN stays at the root (/), FR lives under /fr
    routing: { prefixDefaultLocale: false },
  },
  // Static output (default) — deploys as-is to Cloudflare Pages / Netlify.
  // Build command: `pnpm build` · Output dir: `dist`
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
});
