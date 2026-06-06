// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with the customer's production domain before deployment.
  site: 'https://example.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), icon()],
});