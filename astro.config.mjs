// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://waqasahmad31.github.io',
  integrations: [sitemap()],
});
