/**
 * Landings comerciales por capacidad prioritaria. Las medidas son referencias
 * históricas internas pendientes de confirmación: NO equivalen a una ficha
 * técnica vigente ni a una disponibilidad garantizada.
 * La "frase clave objetivo" se guarda editorialmente; Google no utiliza
 * meta keywords y no se genera esa etiqueta.
 */
export interface CapacityLanding {
  slug: string;
  liters: number;
  cubicMeters: number;
  keyword: string;
  titleSeo: string;
  metaDescription: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  decisionTitle: string;
  decisionParagraphs: string[];
  checklist: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
}

export const capacityLandings: CapacityLanding[] = [
  {
    slug: '5000-litros', liters: 5000, cubicMeters: 5,
    keyword: 'depósito de poliéster 5000 litros',
    titleSeo: 'Depósito de poliéster 5.000 litros vertical | Depofibra',
    metaDescription: 'Consulta un depósito vertical de poliéster de 5.000 litros. Compara dos referencias de dimensiones, revisa la instalación y pide presupuesto según destino.',
    h1: 'Depósito de poliéster de 5.000 litros',
    lead: 'Una capacidad de referencia para almacenar 5 m³ de agua de riego u otros líquidos compatibles. Existen dos configuraciones documentadas con medidas diferentes; conviene elegir según el espacio real de instalación.',
    image: '/images/depositos/vertical-base-plana/deposito-poliester-vertical-base-plana-blanco-compacto-escala.webp',
    imageAlt: 'Fotografía representativa de un depósito vertical blanco de poliéster, no identificada con la capacidad exacta de 5.000 litros',
    decisionTitle: 'Dos configuraciones de referencia para 5.000 litros',
    decisionParagraphs: [
      'Para esta capacidad hay anotadas dos parejas de cotas. No son intercambiables: antes de comparar precios hay que confirmar cuál corresponde al modelo que se puede suministrar, la altura real y el espacio de maniobra.',
      'Si tienes un acceso estrecho o una altura máxima de paso, comunícalo desde la primera consulta. La capacidad nominal por sí sola no indica si el depósito podrá entrar o instalarse en tu parcela.'
    ],
    checklist: [
      { title: 'Medidas de acceso', detail: 'Anchura de portones, altura libre y obstáculos hasta el lugar de entrega.' },
      { title: 'Uso y conexiones', detail: 'Agua de riego u otro líquido; especifica entradas, salidas y uso previsto.' },
      { title: 'Destino', detail: 'Población y código postal para estudiar transporte y medios de descarga.' },
    ],
    faqs: [
      { question: '¿Por qué aparecen dos medidas de 5.000 litros?', answer: 'En la documentación interna constan dos configuraciones de referencia. Antes de ofrecer una unidad concreta hay que verificar las dimensiones y la disponibilidad del modelo con el proveedor.' },
      { question: '¿5.000 litros equivalen a 5 m³?', answer: 'Sí. Es la equivalencia de la capacidad nominal: 1 m³ son 1.000 litros. Las dimensiones exteriores siguen siendo propias de cada modelo.' },
      { question: '¿Se puede enterrar este depósito?', answer: 'No debe enterrarse un modelo vertical de superficie sin documentación específica que lo autorice. Para enterramiento consulta las referencias diseñadas para ese uso.' },
    ],
  },
  {
    slug: '10000-litros', liters: 10000, cubicMeters: 10,
    keyword: 'depósito de poliéster 10000 litros',
    titleSeo: 'Depósito de poliéster 10.000 litros vertical | Depofibra',
    metaDescription: 'Depósito vertical de poliéster de 10.000 litros para almacenamiento de agua de riego. Consulta dimensiones orientativas, conexiones y transporte.',
    h1: 'Depósito de poliéster de 10.000 litros',
    lead: 'Consulta una reserva nominal de 10 m³ en formato vertical de base plana. Para acertar con el modelo, además del volumen se deben comprobar el diámetro exterior, la cota total y las conexiones.',
    image: '/images/depositos/vertical-base-plana/deposito-poliester-vertical-base-plana-blanco-escala-frontal.webp',
    imageAlt: 'Fotografía representativa de un depósito vertical de poliéster blanco con escala, sin atribución a una referencia de 10.000 litros',
    decisionTitle: 'Comprueba dimensiones y necesidades de reserva',
    decisionParagraphs: [
      'El depósito de 10.000 litros es una referencia a estudiar cuando el consumo y la frecuencia de reposición requieren un volumen de 10 m³. No se puede recomendar solo por el tamaño de la finca: conviene conocer el consumo real y la autonomía buscada.',
      'Para preparar el suministro es importante determinar las entradas y salidas, el uso del agua y el sitio exacto de apoyo. Antes de cerrar el presupuesto verificaremos el modelo, las medidas definitivas y el transporte.'
    ],
    checklist: [
      { title: 'Consumo previsto', detail: 'Litros que necesitas almacenar y cada cuánto puedes reponer el agua.' },
      { title: 'Espacio y conexiones', detail: 'Diámetro, cota total, superficie de apoyo y posición de bocas necesarias.' },
      { title: 'Acceso de entrega', detail: 'Código postal, camino y medios disponibles para descargar con seguridad.' },
    ],
    faqs: [
      { question: '¿Qué es importante confirmar en un depósito de 10.000 litros?', answer: 'El modelo concreto, las dimensiones totales, las conexiones incluidas, el uso compatible y la logística hasta el punto de entrega.' },
      { question: '¿Se suministra con las conexiones ya decididas?', answer: 'La configuración de entradas y salidas depende de la referencia y del pedido; hay que concretarla y confirmarla con el proveedor antes de presupuestar.' },
      { question: '¿La entrega incluye la descarga?', answer: 'El transporte estándar no incluye la descarga salvo acuerdo expreso. Los medios adecuados de descarga deben preverse antes de la llegada.' },
    ],
  },
  {
    slug: '15000-litros', liters: 15000, cubicMeters: 15,
    keyword: 'depósito de poliéster 15000 litros',
    titleSeo: 'Depósito de poliéster 15.000 litros vertical | Depofibra',
    metaDescription: 'Consulta depósitos verticales de poliéster de 15.000 litros. Revisa la cota de referencia, accesos, descarga y presupuesto con entrega por destino.',
    h1: 'Depósito de poliéster de 15.000 litros',
    lead: 'Una capacidad nominal de 15 m³ que requiere comprobar con especial atención el espacio de instalación y la maniobra de entrega. Te ayudamos a concretar el modelo y el transporte.',
    image: '/images/depositos/vertical-base-plana/deposito-poliester-vertical-base-plana-verde-escala-en-exterior.webp',
    imageAlt: 'Depósito vertical verde de poliéster con escala de nivel, fotografía de familia que no identifica una capacidad concreta',
    decisionTitle: 'Planifica el espacio y la logística antes de comprar',
    decisionParagraphs: [
      'Una reserva de 15.000 litros puede exigir una planificación logística distinta de la de capacidades menores. La altura y los accesos deben contrastarse con las medidas confirmadas del depósito y con los medios de descarga disponibles.',
      'Antes de aceptar un presupuesto conviene confirmar la ubicación de las conexiones, la superficie de apoyo, el modelo que ofrece el fabricante y cómo se realizará la entrega. El transporte se estudia según dimensiones y destino.'
    ],
    checklist: [
      { title: 'Altura libre', detail: 'Espacio disponible para la unidad y elementos superiores, una vez confirmadas las medidas finales.' },
      { title: 'Condiciones de apoyo', detail: 'Base y situación de instalación que deberán ajustarse a la documentación del modelo.' },
      { title: 'Maniobra de descarga', detail: 'Comprobar accesos y coordinar grúa u otros medios apropiados cuando sean necesarios.' },
    ],
    faqs: [
      { question: '¿Son definitivas las medidas del depósito de 15.000 litros?', answer: 'No. Mostramos las cotas recogidas en una tabla de referencia, pero deben contrastarse las dimensiones exteriores y el modelo vigente antes de la oferta.' },
      { question: '¿La descarga viene incluida al pedir 15.000 litros?', answer: 'No se considera incluida en el transporte estándar. Se deben confirmar medios y condiciones de descarga para el destino.' },
      { question: '¿Puede utilizarse para agua potable?', answer: 'Solo cuando la referencia concreta dispone de aptitud acreditada y documentación exigible para el uso de consumo humano. No debe presuponerse por ser de poliéster.' },
    ],
  },
];

export const getCapacityLanding = (slug: string) => capacityLandings.find(item => item.slug === slug);
