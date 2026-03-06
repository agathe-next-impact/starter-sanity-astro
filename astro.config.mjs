import { defineConfig } from 'astro/config';
import sanity from '@astrojs/sanity';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '',
      dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      studioBasePath: '/studio',
    }),
  ],
  adapter: vercel(),
});
