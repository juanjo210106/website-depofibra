/** Imágenes editoriales de Pexels (licencia gratuita para uso comercial).
 * Son imágenes de contexto, no fotografías de productos ni instalaciones propias de Depofibra.
 * Para la web final: descargar originales optimizados y sustituir remote por ficheros locales.
 */
export interface BlogPhoto {
  src: string; alt: string; fallback: string; credit: string; creditUrl: string;
}
export const blogPhotos: Record<string, BlogPhoto> = {
  "como-elegir-deposito-poliester-riego": {
    src: "https://images.pexels.com/photos/3351909/pexels-photo-3351909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Riego por aspersión sobre un campo verde",
    fallback: "/images/productos/categoria-depositos.jpg",
    credit: "Q. Hưng Phạm",
    creditUrl: "https://www.pexels.com/photo/3351909/",
  },
  "deposito-vertical-horizontal-diferencias": {
    src: "https://images.pexels.com/photos/40650630/pexels-photo-40650630.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Instalación de riego en cultivo agrícola, imagen de contexto",
    fallback: "/images/productos/deposito-horizontal.jpg",
    credit: "Jon Champaigne",
    creditUrl: "https://www.pexels.com/photo/40650630/",
  },
  "depositos-poliester-agua-potable-documentacion": {
    src: "https://images.pexels.com/photos/36251665/pexels-photo-36251665.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Agua saliendo de una conducción agrícola, imagen ilustrativa",
    fallback: "/images/productos/tipos-depositos-referencia.jpg",
    credit: "Dr Photographer",
    creditUrl: "https://www.pexels.com/photo/36251665/",
  },
  "transporte-descarga-depositos-poliester": {
    src: "https://images.pexels.com/photos/5410923/pexels-photo-5410923.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Camión de transporte circulando por una carretera",
    fallback: "/images/productos/categoria-cubas.jpg",
    credit: "Ahmet Polat",
    creditUrl: "https://www.pexels.com/photo/5410923/",
  },
  "fosa-estanca-filtro-biologico-oxidacion-total": {
    src: "https://images.pexels.com/photos/12634302/pexels-photo-12634302.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Vista aérea de instalación de tratamiento de aguas",
    fallback: "/images/productos/saneamiento-referencia.jpg",
    credit: "Jakob Schlothane",
    creditUrl: "https://www.pexels.com/photo/12634302/",
  },
  "piscina-poliester-antes-de-comprar": {
    src: "https://images.pexels.com/photos/17591079/pexels-photo-17591079.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Piscina exterior en un jardín residencial",
    fallback: "/images/productos/piscina-poliester.jpg",
    credit: "Musa Ortaç",
    creditUrl: "https://www.pexels.com/photo/17591079/",
  },
  "cuba-cisterna-poliester-remolque-agricola": {
    src: "https://images.pexels.com/photos/27351043/pexels-photo-27351043.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Riego agrícola en un campo al atardecer",
    fallback: "/images/productos/categoria-cubas.jpg",
    credit: "Aydın Photography",
    creditUrl: "https://www.pexels.com/photo/27351043/",
  },
  "separador-hidrocarburos-como-elegir": {
    src: "https://images.pexels.com/photos/35425762/pexels-photo-35425762.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Vista aérea de una planta de tratamiento de aguas",
    fallback: "/images/productos/fosas-septicas.jpg",
    credit: "Giant Asparagus",
    creditUrl: "https://www.pexels.com/photo/35425762/",
  },
};
