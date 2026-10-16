---
name: Christian Magaña — Portafolio
description: Diario de medianoche. Crema sobre negro cálido, titulares a sangre y una sola tinta de acento.
colors:
  ink: "#0d0d0b"
  cream: "#ece6da"
  body: "#b3aca0"
  muted: "#8c8578"
  ghost: "#4a4840"
  rule: "#2a2a25"
  rule-soft: "#1c1c18"
  accent: "#7fd1bd"
  beta: "#d9a55c"
typography:
  display:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "min(calc((100vw - 6rem) / 8.5), 153px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "46px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: 0.95
  figure:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  gutter-mobile: "24px"
  gutter: "40px"
  row: "24px"
  column-gap: "28px"
  container: "1400px"
components:
  store-badge:
    textColor: "{colors.cream}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  store-badge-hover:
    textColor: "{colors.accent}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.accent}"
  section-title:
    textColor: "{colors.cream}"
    typography: "{typography.headline}"
  status-live:
    textColor: "{colors.accent}"
    typography: "{typography.label}"
  status-beta:
    textColor: "{colors.beta}"
    typography: "{typography.label}"
---

# Design System: Christian Magaña — Portafolio

## Overview

**Creative North Star: "El diario de medianoche"**

El sitio es la portada de un periódico impreso de noche: papel negro cálido, tinta crema, titulares que corren de margen a margen y filetes finos que ordenan todo en columnas. Nada flota y nada brilla. La jerarquía la hacen el tamaño del tipo, la mayúscula y el aire entre secciones, como en una plana bien compuesta.

La densidad es editorial. Pocas piezas por pantalla, cada una con su numeración, su filete y su metadato en versalitas espaciadas. El color está casi ausente a propósito: la paleta es una gama de grises cálidos con un solo acento, la **menta de imprenta**, que aparece como una segunda tinta, rara y deliberada, para marcar lo vivo (lo publicado, lo actual, lo que responde al cursor).

Rechazos confirmados: nada de tarjetas redondeadas con sombras ni fondos elevados, y nada de degradados, glassmorphism, texto con degradado ni resplandores.

**Key Characteristics:**
- Tipografía como imagen: Anton en mayúsculas, a sangre, sin ilustración que compita.
- Negro cálido y crema hueso; nunca `#000` ni `#fff`.
- Un solo acento cromático, la menta de imprenta, usado con escasez.
- Estructura por filetes de 1px y numeración, no por cajas.
- Esquinas rectas en todo y profundidad completamente plana.
- Sin animaciones: la página es estática y solo cambian de color los enlaces al pasar el cursor.

## Colors

Una gama de grises con temperatura de papel envejecido, más una sola tinta fría que lo enciende.

### Primary
- **Menta de imprenta** (`accent`): la segunda tinta del diario. Marca el estado «Publicada», el periodo de empleo actual y todos los hovers (texto y bordes). Contraste 10.9:1 sobre el fondo. Nunca como fondo de bloque ni en superficies grandes.

### Secondary
- **Ámbar de prueba** (`beta`): estado para proyectos en beta o en desarrollo. Hoy no hay ninguno en pantalla, pero el token se conserva a propósito para el próximo. Solo como color de texto en etiquetas de estado.

### Neutral
- **Negro de rotativa** (`ink`): el papel. Fondo de toda la página y `theme-color`.
- **Crema hueso** (`cream`): la tinta principal. Titulares, nombres, enlaces en reposo. 15.7:1.
- **Gris lectura** (`body`): párrafos de cuerpo (bio, descripciones). 8.6:1.
- **Gris pie de foto** (`muted`): metadatos, etiquetas, navegación y notas de sección. 5.3:1, el mínimo para texto.
- **Gris fantasma** (`ghost`): numeración de proyectos, iconos de aficiones y la firma del pie al 45%. Solo 2.1:1, así que **nunca para texto que haya que leer**.
- **Filete** (`rule`): líneas estructurales (cabecera, bordes de sección, insignias).
- **Filete interno** (`rule-soft`): divisiones dentro de una sección (filas de proyectos, columnas de cifras).

Lo que pinta el navegador también usa la paleta: `color-scheme: dark`, barra de scroll en `ghost` sobre `ink` y selección de texto en menta con texto `ink`.

### Named Rules
**The Second Ink Rule.** La menta es una segunda tinta de imprenta: se usa para lo vivo y para la respuesta al cursor, nunca como decoración ni como relleno. Si una pantalla tiene más de un puñado de toques de menta en reposo, sobra alguno.

**The No Pure Values Rule.** Ni `#000` ni `#fff`. El papel es `ink` y la tinta es `cream`; el blanco puro rompe el papel.

**The Ghost Is Not Text Rule.** `ghost` solo para numeración, iconos y marcas de agua. Todo lo que deba leerse empieza en `muted`.

## Typography

**Display Font:** Anton, servida desde el propio sitio y precargada; mientras carga usa «Anton respaldo» (Arial al 68%, medido para que el titular ocupe el mismo ancho)
**Body Font:** Archivo 400/500/600, servida desde el propio sitio con respaldo de métricas ajustadas que genera Astro

**Character:** Anton es la voz del titular de diario: condensada, alta, siempre en mayúsculas. Archivo es la letra de la columna: neutra, legible a 14px y con buena presencia en versalitas espaciadas para los metadatos.

### Hierarchy
- **Display** (Anton 400, fluido hasta 153px, interlineado 0.9 en escritorio y 1.12 en móvil, -0.012em, mayúsculas): solo el titular «Desarrollador Móvil». Se calcula para ocupar el ancho de la columna; en escritorio va en una línea, y en móvil y tablet en dos. El 1.12 móvil es obligatorio: con menos, el acento de la Ó choca con la línea de arriba.
- **Headline** (Anton 400, 46px; 36px en móvil; interlineado 1; -0.01em; mayúsculas): títulos de sección («Proyectos», «Trayectoria»).
- **Title** (Anton 400, 40px; 32px en móvil; interlineado 0.95; mayúsculas): nombres de proyecto. Los nombres de empresa usan la misma voz a 30px.
- **Figure** (Anton 400, 60px; 48px en móvil; -0.02em): las cifras grandes (500K+, 4+, 1).
- **Body** (Archivo 400, 14px, interlineado 1.625, `text-wrap: pretty`): bio y descripciones, siempre en `body`.
- **Label** (Archivo 500, 11px, 0.14–0.16em, mayúsculas): cabecera, notas de sección, etiquetas de cifra, periodos, stack y estado de proyecto.

### Named Rules
**The Headline Earns Its Width Rule.** El titular Display se dimensiona contra el ancho real del texto medido en Anton. Si cambia el texto, se vuelve a medir el divisor de `.titular`; no se ajusta a ojo.

**The Two Voices Rule.** Solo dos familias. Anton para todo lo que es titular o cifra; Archivo para todo lo demás. Ninguna tercera, ni siquiera monoespaciada.

## Layout

Una sola columna de hasta 1400px centrada, con medianil de 24px en móvil y 40px desde 640px. Las secciones se apilan como planas de periódico separadas por filetes de lado a lado (`rule`) y por los iconos de aficiones.

- **Breakpoints:** 640px (`sm`) y 1024px (`lg`), los de Tailwind.
- **Proyectos:** en `lg`, una fila de cuatro columnas fijas (46px de número, nombre flexible, 300px de descripción y 132px de metadatos alineados a la derecha) con 28px entre columnas; en móvil se apila en una sola columna. Cada fila lleva 24px de aire arriba y abajo y un filete interno.
- **Bio:** una columna en móvil, dos en `sm` y en `lg` tres párrafos iguales más la columna del correo, alineada abajo.
- **Cifras y Trayectoria:** rejillas de tres y dos columnas desde `sm`, divididas por filetes, no por huecos.
- **Ritmo:** las secciones abren con 24px de aire superior y los separadores aportan 112–160px de pausa entre ellas.

## Elevation & Depth

Completamente plano. No hay `box-shadow`, ni capas tonales, ni fondos elevados: todo está impreso sobre el mismo papel. La profundidad se sugiere solo con la escala tipográfica y con el valor del gris (crema adelante, fantasma atrás, como una marca de agua).

### Named Rules
**The Same Sheet Rule.** Todo vive en el plano del papel. Si un elemento necesita destacarse, se le da más tamaño o la tinta menta, nunca una sombra ni un fondo propio.

## Shapes

Esquinas rectas sin excepción (0px). La forma la dan las líneas: filetes horizontales de 1px que cruzan la página, bordes de 1px en las insignias y un subrayado fino bajo el correo. No hay círculos, píldoras ni recortes. Los únicos contornos curvos son los iconos de línea de las aficiones.

## Components

### Store Badge (insignias de Google Play, App Store y Sitio web)
Discreta e impresa, como un recuadro de anuncio clasificado.
- **Shape:** rectángulo de esquinas rectas con borde `rule` de 1px y relleno de 6px × 12px.
- **Contenido:** icono de 20px a la izquierda; arriba un encabezado de 8px en mayúsculas `muted` («Disponible en», «Visita el») y abajo el nombre a 13px en semibold `cream`.
- **Hover:** el borde y el texto pasan a menta. Sin fondo, sin movimiento.

### Bloque de contacto (`Correo.astro`)
El contacto no depende de `mailto:`. La dirección es el propio enlace: 13px en `cream`, subrayada en `rule` (menta al pasar el cursor), con área de toque ~47px. A su lado va un botón «Copiar»: recuadro de 1px `rule`, texto de 10px en mayúsculas `muted`, área de toque ~47px. Al copiar pasa a «Copiado» en menta durante 2.5s y lo anuncia una región `aria-live`; si no hay portapapeles, selecciona la dirección y explica cómo copiarla. Sin JavaScript el botón no aparece.

### Navigation (cabecera)
- **Style:** franja con filete inferior. Nombre en `cream` a la izquierda, ubicación al centro (oculta en móvil) y enlaces GitHub / Email a la derecha, todo en Label `muted`.
- **Hover:** `muted` pasa a menta. No hay estado activo, porque es una sola página.

### Section Title
- Headline de Anton a la izquierda y, opcionalmente, una nota en Label `muted` alineada por la línea base a la derecha («4 seleccionados»). En Trayectoria lleva filete inferior.

### Project Row (signature)
La pieza central de la plana. Número de dos dígitos en Anton `ghost`, nombre en Title `cream`, descripción en Body con insignias debajo y una columna de metadatos en Label (stack, plataformas y estado). El estado se colorea según su tono: `accent` para lo publicado, `beta` para lo que está en prueba y `muted` para lo vendido o freelance.

### Cifra
Número en Figure `cream` sobre su etiqueta en Label `muted`, dentro de una celda separada por filetes internos.

### Icono de afición
Icono de línea de una afición (balón, volante, ejercicio) en `ghost`, de 64px (96px desde `sm`), alternando de lado entre secciones. Estático. Es decorativo: `aria-hidden` y sin eventos de puntero.

### Firma del pie
Nombre y apellido en Anton de hasta 92px, en `ghost` al 45%, a modo de marca de agua junto al correo y GitHub. Interlineado 1.12, igual que el titular móvil, para que la tilde de la Ñ no toque la línea de arriba.

### Foco de teclado
Global para todo lo enfocable: contorno recto de 2px en menta con 3px de separación (`:focus-visible`). Es la única excepción al grosor de 1px de los filetes, porque el foco tiene que verse.

## Do's and Don'ts

### Do:
- **Do** componer con filetes de 1px (`rule` entre secciones, `rule-soft` dentro de ellas) en lugar de cajas.
- **Do** escribir titulares, nombres y cifras en Anton en mayúsculas, y metadatos en Archivo 11px con 0.14–0.16em de espaciado.
- **Do** reservar la menta para lo vivo (publicado, actual) y para los hovers de texto y borde.
- **Do** mantener todo el texto legible en `muted` o más claro; `ghost` solo para numeración e iconos.
- **Do** volver a medir el divisor de `.titular` si cambia el texto del titular.
- **Do** dar a cualquier texto en Anton con acentos o Ñ en mayúscula, en dos o más líneas, un interlineado de al menos 1.12.
- **Do** que cualquier punto de contacto muestre la dirección o permita copiarla; nunca depender solo de `mailto:`.
- **Do** recortar en horizontal (`overflow-x: clip`) cualquier elemento que pueda salirse de su sitio, como el titular, para que la página nunca se pueda arrastrar de lado en el móvil.

### Don't:
- **Don't** añadir animaciones de entrada, de scroll ni decorativas: el sitio es estático a propósito.
- **Don't** usar tarjetas redondeadas, sombras ni fondos elevados: todo es plano y de esquina recta (0px).
- **Don't** usar degradados, glassmorphism, texto con degradado ni resplandores.
- **Don't** usar `#000` ni `#fff`; el papel es `ink` y la tinta es `cream`.
- **Don't** usar la menta como fondo de bloque ni en superficies grandes.
- **Don't** añadir una tercera familia tipográfica.
- **Don't** poner texto legible en `ghost` (2.1:1).
