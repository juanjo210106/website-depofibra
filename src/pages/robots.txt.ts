import type { APIRoute } from 'astro';

// En la demo las páginas llevan meta noindex y siguen accesibles a rastreadores
// para que puedan leer esa directiva. No se anuncia allí un sitemap público.
export const GET: APIRoute = ({ site }) => {
  const production = site?.hostname === 'depofibra.com';
  const txt = production
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml', site?.origin ?? 'https://depofibra.com').href}\n`
    : 'User-agent: *\nAllow: /\n';
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
