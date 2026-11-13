# Historial de cambios — DEPOFIBRA

Registro de cambios del proyecto web `website-depofibra`.

> **Alcance:** este archivo documenta el estado de trabajo y las versiones registradas. No sustituye las comprobaciones de despliegue ni certifica que un cambio esté publicado en `demo.depofibra.com`.

## Sin publicar

Aquí se documentarán las modificaciones que todavía no hayan sido verificadas y publicadas.

## v0.9.3 — 2026-11-13 — Preparada, pendiente de publicación y validación

**Tipo:** Corrección visual / favicon.

- Se reajusta el encuadre del favicon para que el isotipo se vea más grande y legible en pestañas del navegador.
- Se generan nuevos recursos `favicon-depofibra-humo-v5-*` y se actualizan también las rutas v4/v3 por compatibilidad.
- Se actualiza `src/layouts/Layout.astro` a las rutas `v5` para forzar la renovación de caché del navegador.
- Se regeneran `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png` e `icon-512.png`.
- No se modifican contenidos, formularios, diseño de páginas ni SEO.

**Validación:** comprobada la mejora visual del 16x16, 32x32 y 48x48 en las vistas previas generadas. Pendiente de verificar en la demo después del `Push origin`.

## v0.9.2 — 2026-11-13 — Preparada, pendiente de publicación y validación

**Tipo:** Corrección visual / identidad de marca.

- Se adopta el isotipo blanco sobre fondo azul degradado con forma orgánica difuminada, aprobado para el favicon.
- Se generan favicons para 16, 32, 48, 64, 180, 192 y 512 píxeles, más `favicon.ico` y respaldo `favicon.svg`.
- Se actualiza `src/layouts/Layout.astro` a rutas `favicon-depofibra-humo-v4-*` para evitar versiones guardadas en caché.
- Se actualizan también las rutas antiguas `favicon-depofibra-circulo-v3-*` por compatibilidad.
- No se alteran los estilos de la web, el logo de cabecera ni el contenido SEO.

**Validación:** comprobadas imágenes, tamaños y referencias en los archivos entregados. Pendiente de verificar en la demo tras el `Push origin`.

## Documentación del proyecto — 2026-11-13

- Se incorpora este historial de cambios (`CHANGELOG.md`).
- Se documenta el procedimiento de control de versiones en `docs/CONTROL_VERSIONES.md`.
- **Sin cambios funcionales, visuales ni SEO en esta actualización.**

## v0.9.1 — referencia existente en el historial de GitHub

**Identificación observada:** `DEPOFIBRA v0.9.1 | Corrección de identidad visual y SEO técnico`.

Según la denominación del commit, esta actualización trata sobre la identidad visual y el SEO técnico. El alcance exacto de los archivos y su correcta publicación deben verificarse en el repositorio y en la demo antes de darla por cerrada.

## Versiones anteriores

El repositorio contiene commits previos, algunos con mensajes no descriptivos. Se mantienen sin reinterpretar ni reescribir su contenido para evitar atribuir cambios no comprobados.

---

**Política:** a partir de ahora, cada cambio de la web deberá quedar acompañado de un mensaje de commit descriptivo, su estado de validación y, cuando proceda, una versión identificable. Véase `docs/CONTROL_VERSIONES.md`.
