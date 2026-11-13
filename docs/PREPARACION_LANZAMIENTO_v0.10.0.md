# DEPOFIBRA · Preparación de producción v0.10.0

Fecha: 13/11/2026. Base: `main` de GitHub comprobada al commit `9088d8b` (v0.9.4).

## Qué se entrega

- `src/components/CookieConsent.astro`: preferencias con aceptar/rechazar simétricos, personalización, almacenamiento local y enlace para reabrir preferencias al final de la página. **No se instala Google Analytics, GTM ni Clarity** todavía; no hay rastreo estadístico.
- `src/layouts/Layout.astro`: se importa y se incluye el componente de cookies. Basado en archivo idéntico al blob GitHub `40c1c0f74f353174d8ed49587a9cd2367243f0a0`.
- `.github/workflows/deploy.yml`: usa una variable de repositorio `DEPOFIBRA_SITE_URL` si la configuras; por defecto permanece la demo.
- `src/components/LegacyRedirect.astro` y **22** páginas `.html.astro` de transición; **3** rutas antiguas ya existían y quedan intactas.
- `docs/mapa-redirecciones-v0.10.0.csv`: correspondencia URL anterior/nueva con origen.
- `CHANGELOG.md`: historial actualizado.

## Lo que NO se ha modificado

- Ningún documento legal: `aviso-legal`, `politica-de-privacidad`, `politica-de-cookies` permanecen sin cambios. Mantenerlos como están es decisión del propietario, pero su suficiencia legal no está certificada.
- Ninguna fotografía, fichero de producto, sección, precio, formulario ni ficha de producto.
- Ningún favicon ni imagen de la marca.
- Ni GitHub Pages Settings ni las DNS ni Search Console, ni acceso al VPS.

## Instalación hoy manteniendo la demo

1. Crear commit de seguridad en GitHub Desktop.
2. Descomprimir el ZIP, copiar `src`, `.github`, `docs` y `CHANGELOG.md` a la raíz de `website-depofibra` y aceptar combinar carpetas.
3. Verificar que los cambios se limitan a los archivos del ZIP.
4. Hacer commit con la descripción incluida más abajo y pulsar `Push origin`.
5. Verificar GitHub Actions en verde y abrir `https://demo.depofibra.com/` en incógnito.
6. Probar consentimiento (primera visita, rechazar, aceptar, personalizar, volver a abrir desde pie, móvil), y comprobar antigua ruta `https://demo.depofibra.com/piscinas.html`.
7. Verificar que demo sigue con meta `noindex` e imágenes correctas.

## Cuando vayas a cambiar a depofibra.com

**No cambiar las DNS primero sin configurar GitHub Pages.** Antes de modificar nada, guardar copia de zona DNS actual y anotar A/AAAA/CNAME/MX/TXT (sobre todo correo, SPF, DKIM, DMARC).

1. GitHub → repositorio → `Settings → Secrets and variables → Actions → Variables → New repository variable`.
   - Nombre: `DEPOFIBRA_SITE_URL`
   - Valor: `https://depofibra.com`
   Esto configura canonical, robots y sitemap **solo en la siguiente compilación**, no en el sitio ya publicado.
2. GitHub → `Settings → Pages → Custom domain`: introducir `depofibra.com` y guardar.
3. Desde el proveedor DNS configurar el dominio raíz con GitHub Pages, usando los IP `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` si utiliza A; revisar AAAA/ALIAS si procede. Para `www`, usar un `CNAME` hacia el dominio de Pages que GitHub confirme en los ajustes del repositorio. **No tocar MX/TXT del correo ni otros subdominios**.
4. GitHub → Actions → `Publicar web de Depofibra (demo o producción)` → `Run workflow` para compilar con la variable de producción.
5. Verificar HTTPS, dominio, `www`, formulario real, sitemap, robots y `canonical` sin prefijo demo.
6. Revisar todos los accesos antiguos del CSV. Las páginas HTML harán transición inmediata, pero **NO devuelven 301 HTTP**: para 301 auténticos necesitamos un proxy (por ejemplo, Cloudflare con reglas) o un hosting con acceso a reglas de servidor. No anunciar que la migración está 100% resuelta en SEO hasta entonces.
7. Search Console: verificar dominio y enviar `https://depofibra.com/sitemap.xml` únicamente cuando sea el dominio activo.

### Compatibilidad: ¿por qué no sobrescribir `CNAME`?

Este proyecto publica desde **GitHub Actions**, no desde una rama. GitHub ignora los archivos `CNAME` en ese modo. El dominio real se gestiona en `Settings → Pages → Custom domain`, mientras `DEPOFIBRA_SITE_URL` afecta al HTML generado. Dejamos intactos los archivos antiguos `CNAME` para no tocar ajustes hoy.

### Cookies y futuro VPS/CRM

El componente almacena únicamente preferencias en `localStorage` del navegador. El evento JS `depofibra:consent` permite que una futura integración pueda leer el consentimiento. Por ahora **no existe servidor de estadísticas, recogida de eventos, métricas comerciales ni sincronización con CRM**. Cuando integremos un servicio real habrá que explicar proveedor/finalidades, activar scripts solo con consentimiento si procede, versionar el aviso para recabar nuevo permiso y revisar la política correspondiente. Registrar las decisiones en un CRM requerirá un diseño de privacidad propio y controles de acceso.

### Estado de formularios

El código `QuoteModal.astro` sigue dirigiendo los mensajes a FormSubmit. El destinatario necesita activación y prueba de entrega en `depofibra21@gmail.com` por el propietario. El commit no cambia este servicio.

### Compromiso jurídico

Se han mantenido las páginas legales porque así lo has indicado. Eso no elimina la obligación de identificar adecuadamente al titular en la web según la LSSI ni de revisar el tratamiento de datos personales (especialmente FormSubmit). Te recomiendo revisar estos extremos con asesoría antes de tratar datos reales, sin modificar los textos por nuestra cuenta.

## COMMIT PROPUESTO · Summary

`DEPOFIBRA v0.10.0 | Preparación de producción, cookies y enlaces antiguos`

## COMMIT PROPUESTO · Description

VERSIÓN: v0.10.0
TIPO: Nueva funcionalidad y preparación técnica de migración
ENTORNO: demo.depofibra.com (producción aún no activada)

CAMBIOS:
- Sistema de preferencias de cookies con opciones de aceptar, rechazar y personalizar.
- Preferencias recuperables desde el pie de página y almacenamiento local.
- Preparación de GitHub Actions para elegir la URL de producción mediante variable segura de configuración.
- Compatibilidad para 22 direcciones históricas con transición HTML y JavaScript.
- Mapa documentado de 25 rutas antiguas y sus destinos.
- Actualización de CHANGELOG y guía de cambio de dominio.

ALCANCE:
- Se mantienen intactos las páginas legales, fotografías, identidad visual y contenidos comerciales.
- Sin herramientas estadísticas ni conexión al futuro VPS.
- La demo continúa como destino predeterminado.

VALIDACIÓN:
- Comprobación estática de rutas y archivos realizada.
- Pendiente: compilación de GitHub Actions, verificación visual y prueba de formularios por el propietario.
- Redirecciones HTTP 301 reales pendientes de configurar en hosting/proxy si se habilita.
