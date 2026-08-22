/*
 * Genera public/og.png (1200x630), la miniatura que se ve al compartir el
 * enlace en WhatsApp, Slack, X o LinkedIn.
 *
 * El texto se convierte a vectores con la propia Anton, así la miniatura sale
 * idéntica al sitio sin depender de que el rasterizador sepa cargar fuentes.
 *
 * No corre en el build. Ejecutar a mano si cambia el titular o la paleta:
 *   npm i --no-save fontkit sharp && node scripts/generar-og.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import * as fontkit from 'fontkit';
import sharp from 'sharp';

const ANCHO = 1200;
const ALTO = 630;
const MARGEN = 72;
// La Ó de MÓVIL sube 1.101em sobre su línea base en Anton: con menos
// interlineado que esto, su acento se mete en la línea de arriba.
const INTERLINEADO = 1.12;

const COLOR = {
  fondo: '#0d0d0b',
  crema: '#ece6da',
  acento: '#7fd1bd',
  tenue: '#8c8578',
  filete: '#2a2a25',
};

const anton = fontkit.openSync(new URL('./assets/Anton.ttf', import.meta.url).pathname);

/** Convierte una cadena en un único path SVG, ya posicionado y escalado. */
function textoAPath(font, texto, { tam, x, y, tracking = 0 }) {
  const escala = tam / font.unitsPerEm;
  const run = font.layout(texto);
  const trozos = [];
  let avance = 0;

  run.glyphs.forEach((glifo, i) => {
    const pos = run.positions[i];
    // xOffset/yOffset colocan los glifos combinantes (la tilde de la Ó, por
    // ejemplo, viaja aparte con avance cero). Ignorarlos los deja sueltos.
    const dx = x + (avance + pos.xOffset) * escala + tracking * tam * i;
    // El eje Y de las fuentes crece hacia arriba; el de SVG hacia abajo.
    const dy = y - pos.yOffset * escala;
    trozos.push(glifo.path.scale(escala, -escala).translate(dx, dy).toSVG());
    avance += pos.xAdvance;
  });

  return trozos.join(' ');
}

/** Ancho que ocupará una cadena, en px, para poder centrarla o ajustarla. */
function anchoTexto(font, texto, tam, tracking = 0) {
  const run = font.layout(texto);
  return (run.advanceWidth * tam) / font.unitsPerEm + tracking * tam * texto.length;
}

// El titular ocupa el ancho útil completo, como en el sitio.
const titular = 'DESARROLLADOR';
const titular2 = 'MÓVIL';
const util = ANCHO - MARGEN * 2;
const tamTitular = Math.min((util / anchoTexto(anton, titular, 1)) * 1, 190);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${ANCHO}" height="${ALTO}" viewBox="0 0 ${ANCHO} ${ALTO}">
  <rect width="${ANCHO}" height="${ALTO}" fill="${COLOR.fondo}"/>

  <line x1="${MARGEN}" y1="118" x2="${ANCHO - MARGEN}" y2="118" stroke="${COLOR.filete}" stroke-width="1"/>
  <line x1="${MARGEN}" y1="530" x2="${ANCHO - MARGEN}" y2="530" stroke="${COLOR.filete}" stroke-width="1"/>

  <path d="${textoAPath(anton, 'CHRISTIAN MAGAÑA', { tam: 26, x: MARGEN, y: 88, tracking: 0.14 })}" fill="${COLOR.tenue}"/>

  <path d="${textoAPath(anton, titular, { tam: tamTitular, x: MARGEN, y: 288 })}" fill="${COLOR.crema}"/>
  <path d="${textoAPath(anton, titular2, { tam: tamTitular, x: MARGEN, y: 288 + tamTitular * INTERLINEADO })}" fill="${COLOR.crema}"/>

  <path d="${textoAPath(anton, 'KOTLIN · FLUTTER · ANDROID · iOS', { tam: 24, x: MARGEN, y: 580, tracking: 0.1 })}" fill="${COLOR.acento}"/>
</svg>`;

const destino = new URL('../public/og.png', import.meta.url).pathname;
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(destino);

console.log(`og.png generado — titular a ${tamTitular.toFixed(0)}px`);
