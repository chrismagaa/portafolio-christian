// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Única fuente del dominio: cambiar aquí al conectar el dominio propio
// (y en public/robots.txt, que es un archivo estático).
export default defineConfig({
  site: 'https://www.christianmagana.dev',
  integrations: [sitemap()],
  /*
    Las fuentes se descargan al compilar y se sirven desde el propio sitio.
    Astro genera además un respaldo con las métricas de cada fuente
    (size-adjust), así que mientras carga Anton el titular ocupa casi el
    mismo ancho y no se sale de la pantalla.
  */
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Anton',
      cssVariable: '--font-anton',
      weights: [400],
      styles: ['normal'],
      // El respaldo automático deja el titular un 33% más ancho que Anton en
      // mayúsculas; se usa uno propio, medido (ver «Anton respaldo» en global.css).
      fallbacks: ['Anton respaldo', 'sans-serif'],
      optimizedFallbacks: false,
    },
    {
      provider: fontProviders.google(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
