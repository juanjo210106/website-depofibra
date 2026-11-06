# DEPOFIBRA · PUBLICAR DEMO EN GITHUB PAGES

Proyecto de demostración, preparado a partir del contenido de `DEPOFIBRA_WEB_SRC_PUBLIC_V38.zip` y de los archivos de configuración del proyecto Astro original.

**Dirección deseada:** https://demo.depofibra.com

**Importante:** este ZIP contiene el proyecto completo (no solo `src` y `public`). NO hay que subir el ZIP comprimido a GitHub: hay que extraerlo y subir sus archivos.

## 1. Qué lleva preparado

- `src/` y `public/`: web Depofibra V38.
- `package.json`, `package-lock.json`, `tsconfig.json` y `astro.config.mjs`: archivos necesarios para compilar Astro.
- `.github/workflows/deploy.yml`: GitHub Actions compila automáticamente con Node 24 y publica en GitHub Pages.
- `public/CNAME`: indica el subdominio `demo.depofibra.com` (en un despliegue con Actions también hay que establecerlo en los ajustes de Pages).
- `src/layouts/Layout.astro`: cuando el sitio es la demo, añade `noindex, nofollow, noarchive` y usa su propia URL canónica. No modifica el diseño.
- `.gitignore`: evita publicar accidentalmente `node_modules`, compilaciones y archivos `.env` si se usa Git.

## 2. Subir la web a GitHub sin comandos (Windows)

1. Descomprime este ZIP en una carpeta nueva de tu ordenador, por ejemplo `C:\Depofibra\depofibra-demo`. Comprueba que dentro estén directamente `package.json`, `src`, `public`, `astro.config.mjs` y la carpeta `.github`.
2. Instala GitHub Desktop desde https://desktop.github.com/ e inicia sesión en tu cuenta de GitHub.
3. En GitHub Desktop: **File > Add local repository > Choose** y selecciona la carpeta descomprimida. Cuando indique que no es un repositorio Git, elige **Create a repository here**.
4. Pon el nombre `depofibra-demo` y pulsa **Create repository**.
5. Pulsa **Publish repository**. Para usar GitHub Pages con GitHub Free, deja el repositorio **público**. No publiques datos personales, contraseñas, tarifas de compra ni ficheros `.env`.
6. Abre el repositorio en github.com. En **Settings > Pages**, selecciona **GitHub Actions** como fuente (Build and deployment > Source). Las acciones del fichero `.github/workflows/deploy.yml` se ejecutan al subir cambios a `main`.
7. Comprueba en **Actions** que se han completado las tareas `build` y `deploy` (color verde). Si están en rojo, abre la ejecución para ver el error.

## 3. Configurar primero el dominio en GitHub

1. En el repositorio de GitHub, entra en **Settings > Pages**.
2. En **Custom domain**, escribe `demo.depofibra.com` y pulsa **Save**.
3. Puedes activar **Enforce HTTPS** una vez que GitHub haya emitido el certificado.

Para reforzar la seguridad, GitHub permite verificar el dominio `depofibra.com` desde los ajustes de Pages de tu cuenta, siguiendo un registro TXT independiente. Es recomendable, pero no cambia el CNAME siguiente.

## 4. Crear un CNAME en DonDominio

1. Accede a https://www.dondominio.com/ y abre el dominio `depofibra.com`.
2. Busca **ZonaDNS** o la zona DNS del dominio. Si los servidores de nombres están en otro proveedor, el cambio debe hacerse allí y no en la zona inactiva de DonDominio.
3. Añade (o corrige si ya existe) este registro:

| Campo | Valor |
|---|---|
| Tipo | CNAME |
| Nombre / Host | `demo` |
| Destino / Apunta a | `TU_USUARIO_GITHUB.github.io` |
| TTL | Valor por defecto |

**Muy importante:** sustituye `TU_USUARIO_GITHUB` por el nombre de la cuenta u organización que es PROPIETARIA del repositorio, **NO por el nombre del repositorio**. Por ejemplo, si el repositorio es `github.com/depofibra/depofibra-demo`, entonces el destino es `depofibra.github.io`.

Si el panel exige el nombre completo, puede mostrar `demo.depofibra.com` en lugar de `demo`. No crees `demo.depofibra.com.depofibra.com` por duplicado.

**No modifiques los registros `@`, `www`, MX, SPF, DKIM ni los demás registros de `depofibra.com`.** Son distintos del subdominio de pruebas.

## 5. Verificar en Windows

En PowerShell:

```powershell
Resolve-DnsName demo.depofibra.com -Type CNAME
```

El destino debe ser tu `TU_USUARIO_GITHUB.github.io`. La propagación DNS puede tardar hasta 24 horas. Después abre `https://demo.depofibra.com` y verifica:

- Home y todas las categorías.
- Fichas de depósitos.
- Blog y páginas de artículos.
- Contacto y las tres páginas legales.
- Imágenes en móvil y ordenador.
- Botón del formulario rápido (actualmente prepara un correo, no envía automáticamente).
- HTTPS activado en GitHub Pages.

## 6. Cómo actualizar la demo después

Cuando apruebes una versión nueva:

1. Copia sus `src` y `public` sobre esta carpeta local, **sin borrar** `public/CNAME` ni `.github/workflows/deploy.yml`.
2. En GitHub Desktop revisa cambios, escribe un mensaje (por ejemplo `Actualizar a V39`) y pulsa **Commit to main**.
3. Pulsa **Push origin**. GitHub Actions recompilará y republicará automáticamente.

Si sustituyes la carpeta `public` entera, comprueba que el archivo `public/CNAME` siga existiendo. Si quieres conservar el `noindex` automático de la demo, conserva la versión de `src/layouts/Layout.astro` incluida en este paquete o vuelve a añadir esa condición a la versión nueva.

## 7. Limitaciones y seguridad

- **GitHub Pages es alojamiento estático**: no ejecuta bases de datos ni un backend. El formulario rápido V38 abre el programa de correo del visitante; todavía no envía presupuestos automáticamente al negocio.
- **La demo es pública**, aunque lleve `noindex`. Esta etiqueta solo solicita a los motores de búsqueda que no la indexen, no exige contraseña.
- En GitHub Free, lo normal es utilizar repositorio público para Pages. Revisa siempre los archivos antes de subirlos: no subas tarifas privadas, datos de clientes, claves, contraseñas ni documentos internos.
- La compilación Astro integrada debe verificarse en GitHub Actions; si hay un fallo en las tareas, copia el mensaje de error.
- Para publicar definitivamente `depofibra.com`, habrá que planificar aparte el cambio del dominio principal y eliminar la marca de noindex.

## Fuentes oficiales

- Astro: https://docs.astro.build/es/guides/deploy/github/
- GitHub Pages (dominio personalizado): https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- DonDominio (Zona DNS): https://www.dondominio.com/es/help/209/zona-dns/
