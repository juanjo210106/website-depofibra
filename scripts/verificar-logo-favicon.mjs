import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const paths = [
  'src/components/Header.astro',
  'src/layouts/Layout.astro',
  'src/components/WhatsAppIcon.astro',
  'public/images/depofibra_brand_assets/depofibra-logo-horizontal.png',
  'public/images/depofibra_brand_assets/depofibra-logo-horizontal@2x.png',
  'public/images/depofibra_brand_assets/depofibra-og-logo.jpg',
  'public/images/depofibra_brand_assets/depofibra-logo-stacked-blue.png',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3.ico',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-16.png',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-32.png',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-48.png',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-180.png',
  'public/images/depofibra_brand_assets/favicon-depofibra-circulo-v3-512.png',
  'public/favicon.ico',
];
let errors=0;
for (const file of paths){
  const ok=existsSync(join(root,file));
  console.log(`${ok?'OK    ':'FALTA '} ${file}`);
  if(!ok) errors++;
}
for(const [file,fragments] of [
  ['src/components/Header.astro',['depofibra-logo-horizontal.png','depofibra-logo-horizontal@2x.png']],
  ['src/layouts/Layout.astro',['favicon-depofibra-circulo-v3.ico','favicon-depofibra-circulo-v3-32.png']]
]) {
 const content=readFileSync(join(root,file),'utf8');
 for(const f of fragments) if(!content.includes(f)){ console.error('REFERENCIA AUSENTE',file,f);errors++ }
}
console.log(errors ? `\nFALLO: ${errors} referencias o archivos ausentes.` : '\nOK: logotipo y favicon listos en el proyecto local.');
process.exitCode=errors?1:0;
