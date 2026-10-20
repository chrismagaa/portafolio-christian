---
name: Christian Magaña — Portafolio
description: Diario de medianoche. Crema sobre negro cálido, los proyectos como titulares de portada y una sola tinta de acento.
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
    fontSize: "96px"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.012em"
  project:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "104px"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  figure:
    fontFamily: "Anton, Anton respaldo, sans-serif"
    fontSize: "60px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Archivo, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.625
  small:
    fontFamily: "Archivo, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.16em"
  micro:
    fontFamily: "Archivo, sans-serif"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.14em"
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

El sitio es la portada de un periódico impreso de noche: papel negro cálido, tinta crema, filetes finos que ordenan todo en columnas y, como notas de portada, los proyectos. Cada app es una noticia con su titular enorme, su dato y su prueba; las cifras son el apoyo. Nada flota y nada brilla. La jerarquía la hacen el tamaño del tipo, la mayúscula y el aire entre secciones, como en una plana bien compuesta.

La densidad es editorial. Pocas piezas por pantalla, cada una con su numeración, su filete y su metadato en versalitas espaciadas. El color está casi ausente a propósito: la paleta es una gama de grises cálidos con un solo acento, la **menta de imprenta**, que aparece como una segunda tinta, rara y deliberada, para marcar lo vivo (lo publicado, lo actual, lo que responde al cursor).

Rechazos confirmados: nada de tarjetas redondeadas con sombras ni fondos elevados, y nada de degradados, glassmorphism, texto con degradado ni resplandores.

**Key Characteristics:**
- Los proyectos son la portada: el nombre de cada app es el titular más grande de la página.
- Tipografía como imagen: Anton en mayúsculas; la única imagen admitida es la captura plana de cada app.
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
- **Display** (Anton 400; 44 / 72 / 96px en móvil, `sm` y `lg`; interlineado 0.95; -0.012em; mayúsculas; `text-wrap: balance`; máximo 16ch): la frase de entrada (h1). El 0.95 solo vale porque ninguna línea a partir de la segunda lleva acento en mayúscula.
- **Project** (Anton 400; 44 / 72 / 104px; interlineado 1.12; -0.012em; mayúsculas): el nombre de cada proyecto, el titular más grande de la página. El 1.12 es obligatorio porque un nombre largo se parte («CARTA DE / RECOMENDACIÓN») y la Ó chocaría con la línea de arriba.
- **Figure** (Anton 400, 60px; 32px en móvil en la franja y 48px en el dato de proyecto; -0.02em): la franja de cifras (500K+, 4+, 1) y el dato de un proyecto (100K+).
- **Lead** (Archivo 400, 16px en móvil y 18px desde `sm`, interlineado 1.625, máximo 60ch, `text-wrap: pretty`): la entradilla y la descripción de cada proyecto, en `body`.
- **Small** (Archivo 400, 13px): el correo, el nombre en las insignias y el enlace de GitHub.
- **Label** (Archivo 500, 11px, 0.14–0.16em, mayúsculas): cabecera, notas de sección, etiquetas de cifra, periodos y la línea de datos de cada proyecto.
- **Micro** (Archivo 500, 10px, 0.14em, mayúsculas): el botón «Copiar». El encabezado de las insignias aún usa 8px y está pendiente de subir.

### Named Rules
**The Lead Story Rule.** Lo más grande de la página es siempre el nombre de un proyecto. Ningún texto sobre la persona (como la frase de entrada) supera el tamaño Project.

**The Two Voices Rule.** Solo dos familias. Anton para todo lo que es titular o cifra; Archivo para todo lo demás. Ninguna tercera, ni siquiera monoespaciada.

## Layout

Una sola columna de hasta 1400px centrada, con medianil de 24px en móvil y 40px desde 640px. Las secciones se apilan como planas de periódico separadas por filetes de lado a lado (`rule`) y por los iconos de aficiones.

- **Breakpoints:** 640px (`sm`) y 1024px (`lg`), los de Tailwind.
- **Una pantalla por momento:** portada → un proyecto por pantalla → pie. Cada momento mide al menos `100svh` (svh, para que la barra del navegador móvil no lo corte) con el contenido centrado en vertical. La portada descuenta la cabecera, que tiene alto fijo (`--alto-cabecera`, 50px).
- **Scroll snap:** solo en escritorio (`lg`) y en modo `proximity`, que encaja suave en cada pantalla sin atrapar el scroll. En móvil el scroll es libre. Los proyectos empiezan en la primera pantalla.
- **Portada:** h1 a la izquierda (máximo 16ch) y, debajo, la entradilla (máximo 60ch) con el bloque de correo alineado abajo a la derecha desde `lg`. La franja de cifras cierra la pantalla abajo.
- **Proyectos:** una pantalla por app, separada por un filete `rule`. El número («01/04») va en la línea del nombre, nunca encima. El nombre ocupa su propia fila a todo el ancho (una palabra larga como RECOMENDACIÓN no cabe junto a una imagen ni puede partirse). Debajo, columna de texto: línea de datos, descripción, datos y botones. Si hay imagen: vertical (ficha de tienda) va a la derecha desde `md`, hasta 360px de ancho y nunca más de 64svh de alto, y debajo del texto en móvil (hasta 260px); horizontal (portada de la web de la app) ocupa la columna derecha más ancha desde `lg` (1fr + 1.4fr, hasta 60svh de alto) y va a todo el ancho bajo el texto en móvil y tablet.
- **Cifras:** franja de tres columnas también en móvil, dividida por filetes internos, al pie de la portada.
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

### Nota de proyecto (signature)
La pieza central de la plana. Número de dos dígitos en Anton `ghost` en la línea base del nombre, nombre en Project `cream` y, debajo, una línea de datos en Label (estado, stack y plataformas; solo los que existan). El estado se colorea según su tono: `accent` para lo publicado, `cream` (`fuerte`) para lo vendido, `beta` para lo que está en prueba y `muted` para lo freelance. Después vienen la descripción en Lead, los datos opcionales (una o varias cifras en Figure con su etiqueta en Label, p. ej. descargas y estrellas tomadas de la ficha de tienda) y las insignias.

**Captura:** opcional; la primera imagen de la ficha de tienda o la portada de la web de la app, colocada tal cual, sin añadirle marco, sombra ni redondeo. Su texto alternativo va en `capturaAlt` (proyectos.json) y describe lo que se ve.

**Collage:** si un proyecto tiene varias imágenes numeradas (`carta-de-recomendacion-1.png`, `-2`, `-3`), se superponen como recortes pegados en la plana: la 1 es la base y las demás van encima, con giros mínimos (1–2°) y separadas por un borde de 6px del color del papel (`ink`), nunca por sombras. El recuadro es cuadrado en móvil (piezas más grandes y legibles) y 25:18 desde `md`. Textos alternativos en `capturasAlt`, uno por pieza. Pensado para hasta tres piezas. Se añade dejando un archivo en `src/assets/proyectos/` con el nombre del proyecto en minúsculas, sin acentos y con guiones (`carta-de-recomendacion.png`); Astro la optimiza a WebP. Sin archivo, la nota se compone sin ella y no queda hueco.

**Carrusel con profundidad:** con `"carrusel": true` en el proyecto, las mismas imágenes numeradas se muestran como carrusel cíclico en lugar de collage: la activa al frente y las de los lados atrás (giradas en Y, desplazadas en Z y oscurecidas). Se cambia con las flechas, tocando una imagen lateral, deslizando o con ← → del teclado. Pensado para capturas verticales 9:16.

### Cifra
Número en Figure `cream` sobre su etiqueta en Label `muted`, dentro de una celda separada por filetes internos.

### Aficiones
Fila de cuatro iconos (fútbol, automovilismo, impresión 3D y gimnasio) en `ghost`, de 32px (40px desde `sm`), sobre la firma del pie, sin nombre: son un guiño. Familia propia en `src/icons/aficiones/`: retícula de 48, trazo de 1.5px con remates redondos y **un acento sólido por icono** (el pentágono y los parches del balón, las casillas de la bandera a cuadros, el bloque y la boquilla de la impresora, los discos grandes de la barra). Un icono nuevo sigue la misma receta. Estáticos y decorativos (`aria-hidden`).

### Firma del pie
Simple: nombre y apellido en Anton de hasta 92px, en `ghost` al 45%, a modo de marca de agua (`aria-hidden`), y a la derecha el correo en `cream` y GitHub en `muted`. Sin titular de llamada: el contacto se encuentra arriba (entrada y cabecera) o aquí abajo. Interlineado 1.12, igual que el titular móvil, para que la tilde de la Ñ no toque la línea de arriba.

### Foco de teclado
Global para todo lo enfocable: contorno recto de 2px en menta con 3px de separación (`:focus-visible`). Es la única excepción al grosor de 1px de los filetes, porque el foco tiene que verse.

## Do's and Don'ts

### Do:
- **Do** componer con filetes de 1px (`rule` entre secciones, `rule-soft` dentro de ellas) en lugar de cajas.
- **Do** escribir titulares, nombres y cifras en Anton en mayúsculas, y metadatos en Archivo 11px con 0.14–0.16em de espaciado.
- **Do** reservar la menta para lo vivo (publicado, actual) y para los hovers de texto y borde.
- **Do** mantener todo el texto legible en `muted` o más claro; `ghost` solo para numeración e iconos.
- **Do** dejar que el nombre de un proyecto sea lo más grande de su pantalla.
- **Do** dar a cualquier texto en Anton con acentos o Ñ en mayúscula, en dos o más líneas, un interlineado de al menos 1.12.
- **Do** que cualquier punto de contacto muestre la dirección o permita copiarla; nunca depender solo de `mailto:`.
- **Do** recortar en horizontal (`overflow-x: clip`) cualquier elemento que pueda salirse de su sitio, como los titulares, para que la página nunca se pueda arrastrar de lado en el móvil.

### Don't:
- **Don't** añadir llamadas forzadas al contacto («¿Hablamos?», «Trabajemos juntos»): el correo a la vista, arriba y abajo, basta.
- **Don't** añadir animaciones de entrada, de scroll ni decorativas: el sitio es estático a propósito.
- **Don't** usar tarjetas redondeadas, sombras ni fondos elevados: todo es plano y de esquina recta (0px).
- **Don't** usar degradados, glassmorphism, texto con degradado ni resplandores.
- **Don't** usar `#000` ni `#fff`; el papel es `ink` y la tinta es `cream`.
- **Don't** usar la menta como fondo de bloque ni en superficies grandes.
- **Don't** añadir una tercera familia tipográfica.
- **Don't** poner texto legible en `ghost` (2.1:1).
