/**
 * Validación técnica después de `npm run build`.
 * Comprobar en local y después verificar las etiquetas reales en el dominio final.
 * No requiere dependencias adicionales.
 */
import fs from 'node:fs';
import path from 'node:path';

const base = path.resolve('dist');
if (!fs.existsSync(base)) {
  console.error('No existe dist/. Ejecuta primero npm run build.');
  process.exit(1);
}
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(item => {
  const file = path.join(dir, item.name);
  return item.isDirectory() ? walk(file) : item.name.endsWith('.html') ? [file] : [];
});
const attr = (tag, key) => {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = tag.match(new RegExp(`(?:^|\\s)${escaped}=(?:"([^"]*)"|'([^']*)')`, 'i'));
  return match ? match[1] ?? match[2] : '';
};
const meta = (html, property, value) => {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    if (attr(tag, property) === value) return attr(tag, 'content');
  }
  return '';
};
const link = (html, relation) => {
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    if (attr(tag, 'rel') === relation) return attr(tag, 'href');
  }
  return '';
};
const errors = [];
const titles = new Map();
const descriptions = new Map();
let checked = 0;
let preview = 0;
let production = 0;
for (const file of walk(base)) {
  const rel = path.relative(base, file).split(path.sep).join('/');
  // Las tres URL HTML heredadas son páginas de transición, no destinos SEO.
  if (['contacto.html', 'cookies.html', 'politica-privacidad.html'].includes(rel)) continue;
  const html = fs.readFileSync(file, 'utf8');
  const robots = meta(html, 'name', 'robots');
  // Las páginas legales están correctamente fuera del índice en producción.
  if (['aviso-legal/index.html', 'politica-de-privacidad/index.html', 'politica-de-cookies/index.html'].includes(rel)) continue;
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) ?? [])[1] ?? '';
  const desc = meta(html, 'name', 'description');
  const canonical = link(html, 'canonical');
  const ogImage = meta(html, 'property', 'og:image');
  const ogAlt = meta(html, 'property', 'og:image:alt');
  const url = rel.endsWith('/index.html') ? `/${rel.slice(0, -'index.html'.length)}` : rel === 'index.html' ? '/' : `/${rel}`;
  checked++;
  if (!title.trim()) errors.push(`${url}: falta <title>`);
  if (!desc.trim()) errors.push(`${url}: falta meta description`);
  if (!/^https:\/\//.test(canonical)) errors.push(`${url}: canonical inválido`);
  if (!/^https:\/\//.test(ogImage)) errors.push(`${url}: falta imagen social absoluta`);
  if (!ogAlt.trim()) errors.push(`${url}: falta descripción de la imagen social`);
  if (title && titles.has(title)) errors.push(`${url}: título duplicado con ${titles.get(title)}`);
  if (desc && descriptions.has(desc)) errors.push(`${url}: descripción duplicada con ${descriptions.get(desc)}`);
  titles.set(title, url);
  descriptions.set(desc, url);
  if (robots.includes('noindex')) preview++;
  else production++;
  if (ogImage.startsWith('https://depofibra.com/images/') || ogImage.startsWith('https://demo.depofibra.com/images/')) {
    const src = new URL(ogImage).pathname;
    if (!fs.existsSync(path.join(base, src.slice(1)))) errors.push(`${url}: falta foto ${src}`);
  }
}
console.log(`Páginas comerciales/editoriales revisadas: ${checked}. Con noindex: ${preview}. Sin noindex: ${production}.`);
if (checked !== 35) errors.push(`Se esperaban 35 páginas comerciales/editoriales según el inventario actual y se han encontrado ${checked}.`);
if (errors.length) {
  errors.forEach(error => console.error('ERROR:', error));
  process.exit(1);
}
console.log('SEO: títulos únicos, descripciones únicas, canonicals y fotografías sociales presentes en el HTML compilado.');
console.log('Pendiente: validación en la URL pública, Core Web Vitals, redirecciones y Search Console.');
