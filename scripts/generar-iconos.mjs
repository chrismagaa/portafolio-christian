/*
 * Regenera los SVG de las tiendas desde los paths oficiales de simple-icons.
 * No corre en el build: se ejecuta a mano cuando haga falta añadir un icono.
 *
 *   npm i --no-save simple-icons && node scripts/generar-iconos.mjs
 */
import { writeFileSync } from 'node:fs';
import * as si from 'simple-icons';

const iconos = {
  googleplay: 'siGoogleplay',
  appstore: 'siApple',
};

for (const [nombre, clave] of Object.entries(iconos)) {
  const { path, title } = si[clave];
  writeFileSync(
    `src/icons/${nombre}.svg`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="${path}"/></svg>\n`,
  );
  console.log(`${nombre} <- ${title}`);
}
