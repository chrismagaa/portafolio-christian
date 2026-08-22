// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Única fuente del dominio: cambiar aquí al conectar el dominio propio
// (y en public/robots.txt, que es un archivo estático).
export default defineConfig({
  site: 'https://christian-portafolio.web.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
