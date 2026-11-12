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
}

const fotoFosas = '/images/productos/categoria-fosas.jpg';
const fotoCubas = '/images/productos/deposito-horizontal.jpg';

export const secondaryProducts: SecondaryProduct[] = [
  {
    slug: 'fosa-estanca', family: 'fosas', title: 'Fosa séptica estanca',
    eyebrow: 'ALMACENAMIENTO SIN VERTIDO',
    summary: 'Almacenamiento de aguas residuales sin salida de vertido; requiere vaciado periódico.',
    details: 'Una fosa estanca almacena las aguas residuales para su retirada posterior. Debe estudiarse la capacidad, la frecuencia de vaciado, los accesos para mantenimiento y la documentación de la referencia.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'fosa-biologica', family: 'fosas', title: 'Fosa con filtro biológico',
    eyebrow: 'TRATAMIENTO BIOLÓGICO',
    summary: 'Sistema que incorpora tratamiento biológico. La selección depende del proyecto y del vertido.',
    details: 'El filtro biológico incorpora una etapa de tratamiento distinta del simple almacenamiento. Es necesario conocer los habitantes equivalentes, caudal previsto y condiciones de vertido.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'oxidacion-total', family: 'fosas', title: 'Depuradora de oxidación total',
    eyebrow: 'DEPURACIÓN CON AIREACIÓN',
    summary: 'Tratamiento biológico mediante aireación, con necesidades de electricidad y mantenimiento.',
    details: 'La oxidación total necesita equipos de aireación y mantenimiento según fabricante. El dimensionamiento y las condiciones de vertido dependen del uso y de la normativa aplicable al proyecto.',
    image: fotoFosas,
    imageAlt: 'Fotografía general de equipos de saneamiento, representativa de la familia de fosas sépticas',
    quoteProduct: 'Fosa séptica',
  },
  {
    slug: 'cuba-remolque', family: 'cubas', title: 'Cuba para remolque agrícola',
    eyebrow: 'APLICACIÓN AGRÍCOLA',
    summary: 'Cuba de poliéster para estudiar su montaje en remolque y los apoyos necesarios.',
    details: 'Conviene confirmar las dimensiones del remolque, la carga admisible, los apoyos y la capacidad necesaria. No se presupone incluido el remolque completo.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
  {
    slug: 'cisterna-camion', family: 'cubas', title: 'Cisterna para plataforma',
    eyebrow: 'PLATAFORMA / CAMIÓN',
    summary: 'Formato para montaje sobre plataforma o caja de vehículo según proyecto.',
    details: 'Debe comprobarse la compatibilidad con el vehículo o plataforma, la distribución de cargas, las sujeciones, los apoyos y las condiciones de circulación aplicables.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
  {
    slug: 'cuba-especial', family: 'cubas', title: 'Cuba de configuración especial',
    eyebrow: 'CONFIGURACIÓN A CONSULTAR',
    summary: 'Configuraciones y accesorios a estudiar según capacidad, uso y soporte.',
    details: 'Los accesorios y detalles como conexiones, escaleras o barandillas dependen de la configuración que confirme el proveedor. No se consideran incluidos por defecto.',
    image: fotoCubas,
    imageAlt: 'Cuba horizontal blanca de poliéster con franjas y apoyos azules, fotografía de referencia',
    quoteProduct: 'Cuba o cisterna',
  },
];
