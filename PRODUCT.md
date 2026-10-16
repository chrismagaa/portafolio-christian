# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos públicos, en este orden de peso:

- **Reclutadores y empresas** que evalúan a Christian para un puesto de desarrollador móvil. Llegan desde un CV, LinkedIn o una búsqueda de su nombre y tienen poco tiempo: quieren confirmar experiencia, stack y trabajo publicado.
- **Clientes freelance**: negocios que necesitan que alguien les construya una app (el antecedente es eDiverti2, hecha para la empresa Diverti2). Quieren saber si puede llevar un producto de principio a fin.

El sitio también aloja las políticas de privacidad y términos de uso de sus apps (`public/<app>/`), así que llega tráfico de las fichas de Google Play y App Store. Ese público es secundario: las páginas legales tienen que funcionar, pero el portafolio no se diseña para ellos.

## Product Purpose

Portafolio personal de Christian Magaña, desarrollador móvil en Zapopan, Jalisco. Existe para que el visitante adecuado le escriba.

**Éxito = que el visitante mande un correo** (`mailto:` en cabecera, hero y pie) con una oferta de trabajo o un proyecto. Las descargas de sus apps y el GitHub son prueba de apoyo, no el objetivo.

## Positioning

No es un desarrollador que solo muestra repos o ejercicios: publica y mantiene sus propias apps en Google Play y App Store, haciendo él mismo el diseño, el código y la publicación. Una de ellas superó las cien mil descargas y la vendió a Rounds en marzo de 2024. Domina las dos vías: Kotlin cuando el proyecto pide nativo y Flutter cuando pide velocidad y dos tiendas a la vez.

## Operating Context

- Sitio de una sola página en español (`lang="es"`, `og:locale es_MX`).
- Producción en Vercel, en `https://www.christianmagana.dev`. Firebase Hosting (`christian-portafolio`) solo redirige (301) al dominio nuevo.
- El contenido vive en `src/data/*.json` (`site`, `cifras`, `proyectos`, `experiencias`, `tecnologias`); los componentes no llevan texto fijo.
- `public/` sirve las páginas legales de las apps; sus URLs están registradas en las tiendas y no deben moverse.
- `design/` guarda exploraciones visuales anteriores (Claude Design). No se publican.

## Capabilities and Constraints

- Astro 7 + Tailwind 4, sitio estático. Sin backend ni formulario: el contacto es por `mailto:`.
- Enlaces de proyecto: insignias de Google Play, App Store y Sitio web (`StoreBadge.astro`).
- Contacto público: email y GitHub. LinkedIn se quitó a propósito.
- SEO: datos estructurados `Person`, OG image generada (`scripts/generar-og.mjs`), sitemap.

## Brand Commitments

- Nombre: Christian Magaña. Titular: «Desarrollador Móvil».
- Voz: primera persona, frases cortas y concretas, sin exagerar; afirma solo hechos verificables (tiendas, descargas, venta, empresas).
- La identidad visual actual vive en el código (`src/styles/global.css`, componentes); todavía no hay DESIGN.md.

## Evidence on Hand

Confirmado con el usuario (2026-10-16):

- **500K+ descargas acumuladas** y **4+ años** en desarrollo móvil (`src/data/cifras.json`).
- **1 app propia vendida**: Carta de recomendación (Kotlin, 2021), más de cien mil descargas con cinco estrellas, vendida a Rounds en marzo de 2024.
- Apps publicadas: **ColorIgual** (Flutter, Google Play y App Store) y **FisioVia** (Flutter, Android y web: fisiovia.app y Google Play).
- Freelance: **eDiverti2**, gestión y recorrido de rutas para Diverti2 (Android, Kotlin). Desde 2026-10-16 no se muestra en el sitio por decisión de Christian.
- Experiencia: **PABS** (enero 2023 – presente, producto móvil con Flutter y Kotlin) y **Pegasus Control** (octubre – diciembre 2022, Android nativo). Desde 2026-10-16 la trayectoria no se muestra en el sitio por decisión de Christian.

No existen y no deben inventarse: testimonios de clientes, logos de empresas cliente, tarifas, casos de estudio escritos ni métricas por app más allá de las anteriores.

## Product Principles

1. **Todo lleva al correo.** Cada sección refuerza la decisión de escribir; el contacto siempre está a un gesto de distancia.
2. **Prueba antes que promesa.** Apps publicadas, enlaces a las tiendas y cifras reales pesan más que cualquier adjetivo.
3. **Lo que vale para un reclutador con prisa vale para todos.** En los primeros segundos tiene que quedar claro el rol, la ubicación, el stack y que tiene apps reales publicadas.
4. **Un solo autor.** El sitio demuestra el mismo oficio que vende: diseño, código y publicación cuidados por una sola persona.
5. **Los datos mandan.** El contenido se edita en `src/data/`, y un cambio de cifra o proyecto no debe requerir tocar componentes.
