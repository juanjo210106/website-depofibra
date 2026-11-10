/**
 * Referencias fotográficas de piscinas aportadas por Depofibra.
 * Las medidas indican la carpeta del lote, NO ficha técnica vigente confirmada.
 * No afirmar fabricación propia, stock, instalación incluida ni profundidades como definitivas.
 */
export type PoolModel = {
  slug: string;
  name: string;
  shortName: string;
  measure: string;
  intro: string;
  historicalDepth: string;
  gallery: { src: string; alt: string }[];
  quoteProduct: string;
  measureConflict: boolean;
};

export const poolModels: PoolModel[] = [
  {
    "slug": "3x2",
    "name": "Piscina de poliéster 3 × 2 m",
    "shortName": "Piscina 3 × 2 m",
    "measure": "3 × 2 m",
    "intro": "Una opción compacta para estudiar si cuentas con un espacio exterior limitado. Consulta el acceso a la parcela y las dimensiones finales del vaso.",
    "historicalDepth": "1,00 m",
    "gallery": [
      {
        "src": "/images/piscinas/modelos/3x2/01-piscina-poliester-3x2-m-instalada-jardin-perspectiva.webp",
        "alt": "Piscina de poliéster 3 × 2 m instalada en jardín, vista en perspectiva"
      },
      {
        "src": "/images/piscinas/modelos/3x2/02-piscina-poliester-3x2-m-escalones-vista-superior.webp",
        "alt": "Piscina de poliéster 3 × 2 m con zona de acceso y vista elevada"
      }
    ],
    "quoteProduct": "Piscina de poliéster 3 × 2 m",
    "measureConflict": false
  },
  {
    "slug": "4-5x2-5",
    "name": "Piscina de poliéster 4,5 × 2,5 m",
    "shortName": "Piscina 4,5 × 2,5 m",
    "measure": "4,5 × 2,5 m",
    "intro": "Un formato de dimensiones intermedias para valorar su integración en patios y jardines. Confirma escalones, profundidad y entrega antes del presupuesto.",
    "historicalDepth": "1,40 m",
    "gallery": [
      {
        "src": "/images/piscinas/modelos/4-5x2-5/01-piscina-poliester-4-5x2-5-m-escalones-jardin.webp",
        "alt": "Piscina de poliéster 4,5 × 2,5 m con acceso por escalones curvos en jardín"
      },
      {
        "src": "/images/piscinas/modelos/4-5x2-5/02-piscina-poliester-4-5x2-5-m-vaso-vista-superior-nave.webp",
        "alt": "Vaso de piscina de poliéster 4,5 × 2,5 m visto desde arriba en una nave"
      }
    ],
    "quoteProduct": "Piscina de poliéster 4,5 × 2,5 m",
    "measureConflict": false
  },
  {
    "slug": "5x2-8",
    "name": "Piscina de poliéster 5 × 2,8 m",
    "shortName": "Piscina 5 × 2,8 m",
    "measure": "5 × 2,8 m",
    "intro": "Una referencia para quienes buscan un poco más de longitud sin ocupar una gran superficie. La disposición de escalones y el equipamiento se revisan por modelo.",
    "historicalDepth": "1,10–1,50 m",
    "gallery": [
      {
        "src": "/images/piscinas/modelos/5x2-8/01-piscina-poliester-5x2-8-m-instalada-patio-jardin.webp",
        "alt": "Piscina de poliéster 5 × 2,8 m con entrada curva instalada en patio con jardín"
      },
      {
        "src": "/images/piscinas/modelos/5x2-8/02-piscina-poliester-5x2-8-m-escalera-vista-elevada.webp",
        "alt": "Piscina de poliéster 5 × 2,8 m y escalones en extremo curvo, vista elevada"
      },
      {
        "src": "/images/piscinas/modelos/5x2-8/03-piscina-poliester-5x2-8-m-escalera-perspectiva.webp",
        "alt": "Piscina de poliéster 5 × 2,8 m con escalera curva, vista en perspectiva"
      }
    ],
    "quoteProduct": "Piscina de poliéster 5 × 2,8 m",
    "measureConflict": false
  },
  {
    "slug": "6x3",
    "name": "Piscina de poliéster 6 × 3 m",
    "shortName": "Piscina 6 × 3 m",
    "measure": "6 × 3 m",
    "intro": "Una piscina de formato alargado para estudiar su encaje en el jardín y en los accesos de la parcela. Las medidas finales y la configuración requieren confirmación.",
    "historicalDepth": "1,20–1,60 m",
    "gallery": [
      {
        "src": "/images/piscinas/modelos/6x3/01-piscina-poliester-6x3-m-instalada-jardin-vista-diagonal.webp",
        "alt": "Piscina de poliéster 6 × 3 m instalada en jardín con césped, vista diagonal"
      },
      {
        "src": "/images/piscinas/modelos/6x3/02-piscina-poliester-6x3-m-jardin-vista-general.webp",
        "alt": "Piscina de poliéster 6 × 3 m en jardín, vista general vertical"
      }
    ],
    "quoteProduct": "Piscina de poliéster 6 × 3 m",
    "measureConflict": false
  },
  {
    "slug": "7x3",
    "name": "Piscina de poliéster 7 × 3 m",
    "shortName": "Piscina 7 × 3 m",
    "measure": "7 × 3 m",
    "intro": "Una referencia fotográfica de tamaño amplio para exteriores. La medida de esta carpeta es 7 × 3 m; existe una referencia histórica anterior de 7,1 × 3 m que debemos contrastar.",
    "historicalDepth": "1,30–1,70 m",
    "gallery": [
      {
        "src": "/images/piscinas/modelos/7x3/01-piscina-poliester-7x3-m-instalada-patio-muro.webp",
        "alt": "Piscina de poliéster incluida en el lote 7 × 3 m, instalada junto a un muro y tarima"
      },
      {
        "src": "/images/piscinas/modelos/7x3/02-piscina-poliester-7x3-m-jardin-con-banistas.webp",
        "alt": "Piscina de poliéster del lote 7 × 3 m con bañistas en jardín"
      },
      {
        "src": "/images/piscinas/modelos/7x3/03-piscina-poliester-7x3-m-vaso-sobre-remolque.webp",
        "alt": "Vaso de piscina del lote 7 × 3 m preparado sobre un remolque"
      }
    ],
    "quoteProduct": "Piscina de poliéster 7 × 3 m",
    "measureConflict": true
  }
];

export function getPoolModel(slug: string): PoolModel | undefined {
  return poolModels.find(model => model.slug === slug);
}
