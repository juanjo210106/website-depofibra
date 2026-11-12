import type { APIRoute } from 'astro';
import { depositFamilies } from '../data/depositProducts';
import { capacityLandings } from '../data/capacityLandings';
import { poolModels } from '../data/poolModels';
import { secondaryProducts } from '../data/secondaryProducts';
import { blogArticles } from '../data/blogArticles';

const fixedRoutes = ['/', '/depositos/', '/piscinas/', '/fosas-septicas/', '/cubas-cisternas/', '/blog/', '/contacto/'];
const allPaths = [
  ...fixedRoutes,
  ...depositFamilies.map(item => `/depositos/${item.slug}/`),
  ...capacityLandings.map(item => `/depositos/vertical-base-plana/${item.slug}/`),
  ...poolModels.map(item => `/piscinas/${item.slug}/`),
  ...secondaryProducts.map(item => `/${item.family === 'fosas' ? 'fosas-septicas' : 'cubas-cisternas'}/${item.slug}/`),
  ...blogArticles.map(item => `/blog/${item.slug}/`),
];
const escapeXml = (str: string) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = ({ site }) => {
  const origin = site?.origin ?? 'https://demo.depofibra.com';
  const routes = [...new Set(allPaths)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(path => `  <url><loc>${escapeXml(new URL(path, origin).href)}</loc></url>`).join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
