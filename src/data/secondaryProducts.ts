/**
 * Fichas informativas de fosas y cubas: datos comerciales tomados de las
 * categorías actuales de Depofibra. No son fichas técnicas confirmadas.
 * La fotografía de cabecera es compartida deliberadamente por categoría.
 */
export interface SecondaryProduct {
  slug: string;
  family: 'fosas' | 'cubas';
  title: string;
  eyebrow: string;
  summary: string;
  details: string;
  image: string;
  imageAlt: string;
  quoteProduct: string;
  titleSeo: string;
  metaDescription: string;
}

const fotoFosas = '/images/productos/categoria-fosas.jpg';
const fotoCubas = '/images/productos/deposito-horizontal.jpg';

export const secondaryProducts: SecondaryProduct[] = [
  {
    slug: 'fosa-estanca', family: 'fosas', title: 'Fosa séptica estanca',
    titleSeo: 'Fosa séptica estanca de poliéster | Depofibra',
    metaDescription: 'Fosa séptica estanca para almacenar aguas residuales: características generales, vaciado periódico y datos necesarios para solicitar presupuesto.',
    eyebrow: 'ALMACENAMIENTO SIN VERTIDO',
    summary: 'Almacenamiento de aguas residuales sin salida de vertido; requiere vaciado periódico.',
    details: 'Una fosa estanca almacena las aguas residuales para su retirada posterior. Debe estudiarse la capacidad, la frecuencia de vaciado, los accesos para mantenimiento y la documentación de la referencia.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'fosa-biologica', family: 'fosas', title: 'Fosa con filtro biológico',
    titleSeo: 'Fosa séptica con filtro biológico | Depofibra',
    metaDescription: 'Fosa con filtro biológico de poliéster: conoce las condiciones generales del tratamiento, los datos del proyecto y cómo pedir presupuesto.',
    eyebrow: 'TRATAMIENTO BIOLÓGICO',
    summary: 'Sistema que incorpora tratamiento biológico. La selección depende del proyecto y del vertido.',
    details: 'El filtro biológico incorpora una etapa de tratamiento distinta del simple almacenamiento. Es necesario conocer los habitantes equivalentes, caudal previsto y condiciones de vertido.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'oxidacion-total', family: 'fosas', title: 'Depuradora de oxidación total',
    titleSeo: 'Depuradora de oxidación total de poliéster | Depofibra',
    metaDescription: 'Depuradora de oxidación total: tratamiento mediante aireación, mantenimiento y datos de instalación que conviene revisar antes de solicitar presupuesto.',
    eyebrow: 'DEPURACIÓN CON AIREACIÓN',
    summary: 'Tratamiento biológico mediante aireación, con necesidades de electricidad y mantenimiento.',
    details: 'La oxidación total necesita equipos de aireación y mantenimiento según fabricante. El dimensionamiento y las condiciones de vertido dependen del uso y de la normativa aplicable al proyecto.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'cuba-remolque', family: 'cubas', title: 'Cuba para remolque agrícola',
    titleSeo: 'Cuba de poliéster para remolque agrícola | Depofibra',
    metaDescription: 'Cuba de poliéster para remolque agrícola: comprueba capacidad, dimensiones, apoyos y carga del vehículo antes de consultar presupuesto.',
    eyebrow: 'APLICACIÓN AGRÍCOLA',
    summary: 'Cuba de poliéster para estudiar su montaje en remolque y los apoyos necesarios.',
    details: 'Conviene confirmar las dimensiones del remolque, la carga admisible, los apoyos y la capacidad necesaria. No se presupone incluido el remolque completo.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
  {
    slug: 'cisterna-camion', family: 'cubas', title: 'Cisterna para plataforma',
    titleSeo: 'Cisterna de poliéster para plataforma o camión | Depofibra',
    metaDescription: 'Cisternas de poliéster para plataforma o camión. Consulta compatibilidad, medidas, soportes y condiciones de suministro según tu vehículo.',
    eyebrow: 'PLATAFORMA / CAMIÓN',
    summary: 'Formato para montaje sobre plataforma o caja de vehículo según proyecto.',
    details: 'Debe comprobarse la compatibilidad con el vehículo o plataforma, la distribución de cargas, las sujeciones, los apoyos y las condiciones de circulación aplicables.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
  {
    slug: 'cuba-especial', family: 'cubas', title: 'Cuba de configuración especial',
    titleSeo: 'Cubas de poliéster con configuración especial | Depofibra',
    metaDescription: 'Cubas de poliéster con accesorios o configuración especial a consultar. Indica uso, capacidad y soporte para estudiar un presupuesto adaptado.',
    eyebrow: 'CONFIGURACIÓN A CONSULTAR',
    summary: 'Configuraciones y accesorios a estudiar según capacidad, uso y soporte.',
    details: 'Los accesorios y detalles como conexiones, escaleras o barandillas dependen de la configuración que confirme el proveedor. No se consideran incluidos por defecto.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
];
