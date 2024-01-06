import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"]
  },
  routing: {
    prefixDefaultLocale: false
  },
  routes: [{
    path: '/sheet/:id',
    component: './src/pages/sheet.astro'
  }]
});