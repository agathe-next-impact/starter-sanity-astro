import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://example.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap(),
    sanity({
      projectId: 'sym9ypo5',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      studioBasePath: '/studio',
    }),
  ],
  adapter: vercel(),
});
