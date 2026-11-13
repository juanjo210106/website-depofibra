// Comprobación de la demo tras publicar en GitHub Pages.
const origin='https://demo.depofibra.com';
const routes=['/', '/depositos/', '/depositos/vertical-base-plana/', '/depositos/vertical-base-plana/5000-litros/', '/depositos/vertical-base-plana/10000-litros/', '/depositos/vertical-base-plana/15000-litros/', '/piscinas/', '/fosas-septicas/', '/cubas-cisternas/', '/blog/', '/sobre-depofibra/', '/contacto/'];
const assets=['/images/depofibra_brand_assets/depofibra-logo-horizontal.png', '/images/depofibra_brand_assets/depofibra-logo-horizontal@2x.png', '/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-32.png','/images/depofibra_brand_assets/favicon-depofibra-circulo-v3.ico','/favicon.ico'];
let fail=0;
for(const path of [...routes,...assets]) {
 try{
  const res=await fetch(origin+path,{redirect:'follow',signal:AbortSignal.timeout(12000)});
  const ct=res.headers.get('content-type')||'';
  let notes='';
  if(ct.includes('text/html')){
   const html=await res.text();
   const title=html.match(/<title>([^<]+)<\/title>/i)?.[1] || 'SIN TITLE';
   const robots=html.match(/<meta[^>]*name=["']robots["'][^>]*>/i)?.[0]||'';
   const og=html.match(/<meta[^>]*property=["']og:image["'][^>]*>/i)?.[0]||'';
   notes=` · ${title} · ${/noindex/i.test(robots)?'NOINDEX':'REVISAR ROBOTS'} · ${og?'OG OK':'OG NO'}`;
  }
  console.log(`${res.ok?'OK   ':'ERROR'} ${res.status} ${origin+path}${notes}`);
  if(!res.ok)fail++;
 }catch(error){fail++;console.log(`ERROR ${origin+path} · ${String(error).slice(0,160)}`)}
}
console.log(`\nResultado: ${fail} problemas detectados de ${routes.length+assets.length} comprobaciones.`);
process.exitCode=fail?1:0;
