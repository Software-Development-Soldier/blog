// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 프로젝트 사이트 주소: https://<org>.github.io/<repo>/
// https://astro.build/config
export default defineConfig({
  site: 'https://software-development-soldier.github.io',
  base: '/blog',
  integrations: [mdx(), sitemap(), react()],


  vite: {
    plugins: [tailwindcss()],
  },
});