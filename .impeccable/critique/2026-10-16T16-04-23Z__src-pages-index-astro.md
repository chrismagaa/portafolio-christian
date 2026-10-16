---
target: la portada (src/pages/index.astro)
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/Users/sistemas/Desktop/portafolio-christian/src/pages/index.astro"
target_fingerprint: "sha256:a71eeab27a78cea5a7da325549ae56b864e01e77310deb74231388705948568e"
target_path: /Users/sistemas/Desktop/portafolio-christian/src/pages/index.astro
timestamp: 2026-10-16T16-04-23Z
slug: src-pages-index-astro
---
# Crítica: portada (src/pages/index.astro)

Método: dos agentes (A: revisión de diseño · B: detector + navegador). Puntuación 20/32 (n/a: 7, 10) — Aceptable (62%).

## Heurísticas
| # | Heurística | Nota | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 2 | mailto: sin respuesta visible si no hay cliente de correo; pestañas nuevas sin aviso |
| 2 | Lenguaje del mundo real | 3 | «Rounds» sin contexto; iconos de aficiones sin palabra |
| 3 | Control y libertad | 3 | Sin trampas; todas las insignias abren pestaña nueva |
| 4 | Consistencia | 3 | Una acción, tres nombres: «Email», «Contacto →», la dirección |
| 5 | Prevención de errores | 2 | El éxito depende solo de mailto:; la dirección solo está en el pie |
| 6 | Reconocer antes que recordar | 3 | Hay que bajar al pie para ver el correo |
| 7 | Flexibilidad | n/a | Portafolio de una página |
| 8 | Estética y minimalismo | 3 | Bio párrafo 2 repite las cifras; vacíos alrededor de Herramientas |
| 9 | Recuperación de errores | 1 | Si mailto falla no hay alternativa a la vista |
| 10 | Ayuda | n/a | No aplica |

## Prioridades
1. [P1] Contacto frágil y ausente en el momento de mayor convicción: solo mailto:, CTA de 13px/~24px de alto, dirección solo en el pie, ~2400px sin contacto en móvil, la página termina en una marca de agua a 1.3:1. Fix: dirección visible junto al CTA + botón Copiar con aria-live; bloque de cierre «¿Hablamos?» antes del pie; objetivos ≥44px. (harden, layout)
2. [P1] La jerarquía gasta la voz más alta en lo menos distintivo: nombre a 11px, «Desarrollador Móvil» a 153px, el diferenciador (app de 100K vendida a Rounds, autor único) en cuerpo de 14px; ubicación oculta en móvil. Fix: línea de nombre + ubicación sobre el h1; entradilla de 20–24px con el hecho de la venta; quitar la repetición de cifras de la bio; tercera cifra menos desnuda. (typeset, clarify, adapt)
3. [P2] Filas de proyecto en escritorio: la rejilla 46px/1fr/300px/132px deja 400–600px vacíos entre el nombre y su prueba. Fix: limitar la columna del nombre y ensanchar la descripción a ~400px. (layout)
4. [P2] Accesibilidad de las insignias: texto de 8px (5 hits del detector), aria-label que no contiene el texto visible (WCAG 2.5.3), objetivos de 35–37px; numeración en ghost 2.1:1. Fix: kicker ≥10px, aria-label «Disponible en Google Play, ColorIgual», insignias ≥44px. (polish)
5. [P2] Titular frágil ante la fuente de respaldo: dimensionado para Anton con 1.5% de margen; Arial Narrow no existe en Android/Windows, así que con display=swap o fuentes bloqueadas «DESARROLLADOR» puede desbordar. Fix: auto-alojar y precargar Anton, @font-face de respaldo con size-adjust, overflow-x: clip en el hero. (harden, optimize)

## Personas
- Jordan: no entiende los iconos de aficiones; «Rounds» sin contexto; «Vendida» en gris parece menos importante que «Publicada» cuando es el mayor logro.
- Riley: titular desborda con fuente de respaldo o si cambia site.titular; proyecto sin stack/plataformas deja líneas vacías.
- Casey: ningún objetivo llega a 44px; tras el hero el siguiente contacto está a ~2400px; cabecera no fija.
- Reclutadora con Gmail web: «Email» no hace nada; busca la dirección en el pie; sin rol por empleo, sin disponibilidad (remoto/freelance), sin CV; Firebase en el JSON-LD pero no en la página.

## Detector
Fuente: 6 avisos design-system-font-size (valores documentados en prosa; 52px no). dist + navegador: 2 low-contrast (numeración 2.1:1, marca de agua 1.3:1), 5 undersized-ui-text (kicker 8px). 4 cramped-padding solo en análisis estático, no confirmados en navegador (falsos positivos). Sin desbordamiento horizontal ni errores de consola.

## Observaciones menores
Bio párrafo 2 repite cifras; titular a 1440px termina ~40px antes del medianil; en móvil el estado va después de las insignias; enlaces externos sin aviso de pestaña nueva; Google Fonts bloquea el render; eDiverti2 sin enlace podría llevar una nota (solo si es cierta).

## Preguntas
1. ¿Qué frase debe recordar un reclutador: «Desarrollador Móvil» o «hice una app de 100K descargas y la vendí»?
2. Portafolio de desarrollador móvil sin un solo píxel de sus apps: ¿una captura plana por proyecto rompería el diario o sería su foto de portada?
3. Si este periódico quiere respuesta, ¿cuál es su última línea, y qué tipo de correo espera: empleo, remoto, freelance?
