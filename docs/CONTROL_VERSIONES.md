# Procedimiento de control de versiones — DEPOFIBRA

**Repositorio:** `website-depofibra`  
**Entorno de pruebas:** `demo.depofibra.com`  
**Sitio principal:** `depofibra.com`  
**Gestión:** GitHub Desktop

## 1. Numeración

Usamos `vMAJOR.MINOR.PATCH`:

- **PATCH** (`v0.9.1` → `v0.9.2`): errores y mantenimiento funcional o técnico.
- **MINOR** (`v0.9.2` → `v0.10.0`): nuevas páginas, prestaciones o mejoras relevantes compatibles.
- **MAJOR** (`v0.x.x` → `v1.0.0`): primera publicación estable en el dominio principal o evolución mayor acordada.

**Un commit de documentación no incrementa por sí solo la versión del producto.** La referencia conocida más reciente es `v0.9.1`; cualquier incremento posterior se decidirá en función de los cambios reales.

## 2. Estados de entrega

No confundir estas etapas:

1. **Preparado:** archivos ZIP y comprobaciones locales de estructura.
2. **Integrado:** archivos copiados al repositorio y revisados en GitHub Desktop.
3. **Publicado:** commit enviado mediante `Push origin` y despliegue completado.
4. **Verificado:** enlaces, formularios, logotipo, favicon y rutas SEO comprobados en el navegador.

Un commit o un despliegue correcto no implica que todas las funciones hayan sido verificadas.

## 3. Formato de commits

**Resumen:** `DEPOFIBRA | <tipo> | <área>: <cambio breve>`

Tipos: `Corrección`, `Mejora`, `Contenido`, `SEO`, `Documentación`, `Seguridad`, `Despliegue`.

**Descripción:**

```text
ENTORNO: demo.depofibra.com
TIPO: Documentación

CAMBIOS:
- ...

ALCANCE:
- ...

VERIFICACIÓN:
- ...
```

Incluir identificador de versión únicamente cuando la modificación corresponda realmente a una versión del producto.

## 4. Flujo de trabajo en GitHub Desktop

1. Copiar los archivos del ZIP en la raíz del proyecto, conservando carpetas.
2. Abrir GitHub Desktop y revisar la pestaña `Changes`.
3. Confirmar que únicamente aparecen los archivos previstos.
4. Copiar el resumen y descripción facilitados para el commit.
5. Pulsar `Commit to main`, después `Push origin`.
6. Comprobar el estado del despliegue en GitHub y revisar la demo.
7. Anotar el resultado real en `CHANGELOG.md` cuando esté verificado.

## 5. Reglas de seguridad

- No subir credenciales, contraseñas, archivos `.env` con secretos ni tarifas privadas.
- No sobrescribir archivos de diseño aprobados sin revisar los cambios.
- No renombrar retrospectivamente commits publicados si no existe una necesidad técnica: reescribir el historial tiene riesgos.
- Los commits antiguos que tengan el mensaje `.` no se modifican por añadir un nuevo commit.
- No crear etiquetas (`tags`) ni `releases` antes de confirmar su contenido y su estado de publicación.

## 6. Alcance del commit que introduce este procedimiento

Se añaden exclusivamente dos documentos de seguimiento:

- `CHANGELOG.md`
- `docs/CONTROL_VERSIONES.md`

**No modifica código Astro, recursos visuales, SEO, contenidos de producto ni formularios.**
