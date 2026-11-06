/**
 * Depofibra · fichas de familias de depósitos.
 * Datos editoriales públicos, sin precios privados, stock, medidas no verificadas ni certificaciones genéricas.
 * Las imágenes son fotografías de referencia / dibujos ilustrativos ya existentes en el proyecto.
 */

export type DepositFamily = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  intro: string;
  installation: string;
  geometry: string;
  application: string;
  quoteProduct: string;
  gallery: { src: string; alt: string; kind: 'Fotografía de referencia' | 'Dibujo orientativo' }[];
  titleSeo: string;
  metaDescription: string;
  highlights: { title: string; text: string }[];
  description: string[];
  installationPoints: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  capacityChoices?: { label: string; product: string }[];
};

export const depositFamilies: DepositFamily[] = [
  {
    slug: 'vertical-base-plana',
    name: 'Depósito vertical de base plana',
    shortName: 'Vertical de base plana',
    eyebrow: 'Depósitos · Instalación en superficie',
    intro: 'Una de las opciones más consultadas para almacenar agua de riego y otros usos compatibles, aprovechando la altura disponible.',
    installation: 'En superficie',
    geometry: 'Vertical · Base plana',
    application: 'Agua y riego, según referencia',
    quoteProduct: 'Depósito vertical de base plana',
    gallery: [
      {src:'/images/productos/deposito-vertical.jpg',alt:'Fotografía de referencia de un depósito vertical de poliéster de base plana',kind:'Fotografía de referencia'},
      {src:'/images/depositos/vertical-base-plana.svg',alt:'Esquema ilustrativo del formato vertical con base plana',kind:'Dibujo orientativo'},
    ],
    titleSeo: 'Depósitos verticales de base plana | Depofibra',
    metaDescription:'Depósitos verticales de poliéster de base plana para agua y riego. Consulta capacidades, instalación y presupuesto con transporte según destino.',
    highlights:[
      {title:'Capacidad a tu medida',text:'Consultas habituales de 5.000, 10.000 y 15.000 litros, además de otros volúmenes según referencia.'},
      {title:'Espacio de instalación',text:'Revisa diámetro, altura libre y superficie de apoyo antes de elegir un modelo.'},
      {title:'Conexiones y uso',text:'Entradas, salidas y compatibilidad se confirman para cada configuración.'},
    ],
    description:[
      'Los depósitos verticales de base plana se utilizan para almacenamiento de agua cuando la instalación dispone de altura suficiente y una base de apoyo adecuada. Su geometría vertical permite organizar el espacio de una forma distinta a los depósitos horizontales.',
      'Antes de preparar una oferta conviene conocer la capacidad aproximada, el uso previsto, las medidas máximas admitidas y las conexiones necesarias. Las dimensiones y el equipamiento se confirman para la referencia concreta.',
    ],
    installationPoints:[
      {title:'Superficie y apoyo',text:'Comprobar que el apoyo sea compatible con la referencia y que exista espacio para instalar y mantener el depósito.'},
      {title:'Altura y accesos',text:'La altura total, el diámetro y el paso de los vehículos condicionan tanto la elección como el transporte.'},
      {title:'Entrega y descarga',text:'Facilita localidad y código postal. La descarga requiere medios adecuados y no está incluida por defecto en el transporte estándar.'},
    ],
    faqs:[
      {q:'¿Trabajáis solo con 5.000, 10.000 y 15.000 litros?',a:'No. Son capacidades que suelen consultarse, pero podemos estudiar otras según la familia y la referencia disponible.'},
      {q:'¿Es adecuado para agua potable?',a:'Solo si la referencia concreta es apta para agua de consumo humano y cuenta con la documentación exigible para ese uso.'},
      {q:'¿Necesito medidas exactas antes de pedir precio?',a:'No hace falta conocerlas para una primera consulta. Cuéntanos el uso, los litros aproximados y el lugar de entrega, y revisamos las opciones que encajen.'},
    ],
    capacityChoices: [
      { label: '5.000 L', product: 'Depósito vertical de base plana 5.000 L' },
      { label: '10.000 L', product: 'Depósito vertical de base plana 10.000 L' },
      { label: '15.000 L', product: 'Depósito vertical de base plana 15.000 L' },
    ],
  },
  {
    slug:'horizontal-con-cunas',
    name:'Depósito horizontal con cunas',
    shortName:'Horizontal con cunas',
    eyebrow:'Depósitos · Instalación en superficie',
    intro:'Formato horizontal con apoyos para instalaciones donde interesa limitar la altura y aprovechar el espacio longitudinal.',
    installation:'En superficie', geometry:'Horizontal · Con apoyos', application:'Almacenamiento según uso',
    quoteProduct:'Depósito horizontal con cunas',
    gallery:[
      {src:'/images/productos/deposito-horizontal.jpg',alt:'Fotografía de referencia de un depósito horizontal de poliéster con apoyos',kind:'Fotografía de referencia'},
      {src:'/images/depositos/horizontal-cunas.svg',alt:'Esquema orientativo de depósito horizontal con cunas',kind:'Dibujo orientativo'},
    ],
    titleSeo:'Depósitos horizontales con cunas | Depofibra',
    metaDescription:'Consulta depósitos horizontales de poliéster con cunas para instalación en superficie. Características, condiciones de apoyo y presupuesto por destino.',
    highlights:[
      {title:'Formato bajo',text:'Interesante cuando el espacio en altura condiciona la instalación.'},
      {title:'Apoyos específicos',text:'El número y disposición de las cunas se comprueban según modelo.'},
      {title:'Entrega planificada',text:'La longitud y el acceso al lugar de instalación influyen en la logística.'},
    ],
    description:[
      'Los depósitos horizontales con cunas se colocan en superficie sobre apoyos adecuados a su geometría. Son una alternativa a los verticales cuando conviene distribuir el volumen de forma longitudinal.',
      'Para seleccionar la referencia conviene conocer la capacidad, la longitud disponible, las conexiones y las condiciones de descarga. Un depósito horizontal de superficie no debe confundirse con un depósito enterrable.',
    ],
    installationPoints:[
      {title:'Longitud útil',text:'Revisar el espacio horizontal disponible, las distancias de acceso y las posibles interferencias.'},
      {title:'Cunas y base',text:'Los apoyos deben corresponder al modelo concreto y sus condiciones de instalación.'},
      {title:'Transporte y descarga',text:'Confirmar la llegada del vehículo y los medios de descarga según las dimensiones.'},
    ],
    faqs:[
      {q:'¿Un horizontal con cunas puede enterrarse?',a:'No debe darse por supuesto. Para enterrar un depósito hay que elegir una referencia diseñada expresamente para ese uso.'},
      {q:'¿Las cunas están incluidas?',a:'Los elementos incluidos se confirman al presupuestar la referencia y el conjunto de apoyos correspondiente.'},
      {q:'¿Puedo consultar otra capacidad?',a:'Sí. La capacidad, dimensiones y configuración se verifican según el modelo que se estudie.'},
    ],
  },
  {
    slug:'horizontal-enterrable',
    name:'Depósito horizontal enterrable',
    shortName:'Horizontal enterrable',
    eyebrow:'Depósitos · Instalación enterrada',
    intro:'Depósitos concebidos específicamente para instalaciones bajo tierra, con requisitos de montaje distintos de los modelos de superficie.',
    installation:'Enterrado · Bajo proyecto',geometry:'Horizontal · Enterrable',application:'Agua y otros usos compatibles',
    quoteProduct:'Depósito horizontal para enterrar',
    gallery:[{src:'/images/depositos/horizontal-enterrar.svg',alt:'Ilustración orientativa de depósito horizontal enterrable',kind:'Dibujo orientativo'}],
    titleSeo:'Depósitos horizontales enterrables | Depofibra',
    metaDescription:'Depósitos horizontales de poliéster aptos para enterramiento según referencia. Consulta condiciones de instalación, capacidades y presupuesto.',
    highlights:[
      {title:'Uso enterrado',text:'La elección debe partir de un modelo diseñado expresamente para enterramiento.'},
      {title:'Terreno y cargas',text:'Condiciones del suelo y profundidad requieren verificación técnica.'},
      {title:'Accesos al depósito',text:'Se deben prever las conexiones y las necesidades de inspección y mantenimiento.'},
    ],
    description:[
      'Las referencias enterrables permiten estudiar instalaciones donde no interesa ocupar espacio visible en superficie. No son intercambiables con los depósitos horizontales con cunas.',
      'El terreno, la profundidad, la presencia de agua subterránea y las cargas previstas condicionan la solución. La instalación debe seguir la documentación y las prescripciones técnicas aplicables al modelo.',
    ],
    installationPoints:[
      {title:'Comprobar el terreno',text:'Identificar condiciones del suelo, nivel freático y cargas del entorno.'},
      {title:'Revisión técnica',text:'Solicitar la ficha de la referencia y seguir las instrucciones de instalación y relleno.'},
      {title:'Entrega y maniobra',text:'Estudiar cómo accederá el camión y qué medios de descarga se necesitan.'},
    ],
    faqs:[
      {q:'¿Puedo enterrar un depósito horizontal convencional?',a:'No se debe hacer. Solo debe enterrarse una referencia diseñada y validada para ese uso.'},
      {q:'¿El precio incluye excavación e instalación?',a:'No se presuponen esos trabajos. Se concretarán por separado si correspondiese, y siempre según condiciones acordadas.'},
      {q:'¿Es obligatorio un proyecto?',a:'Los requisitos técnicos y administrativos dependen del uso y la instalación. Deben revisarse para cada caso.'},
    ],
  },
  {
    slug:'vertical-con-patas',
    name:'Depósito vertical con patas',
    shortName:'Vertical con patas',
    eyebrow:'Depósitos · Instalación elevada',
    intro:'Formato vertical con apoyos elevados, para estudiar configuraciones que necesitan una altura o posición de salida concreta.',
    installation:'Superficie · Estructura elevada',geometry:'Vertical · Con patas',application:'Configuración según necesidad',
    quoteProduct:'Depósito vertical con patas',
    gallery:[{src:'/images/depositos/vertical-patas.svg',alt:'Esquema orientativo de un depósito vertical con patas',kind:'Dibujo orientativo'}],
    titleSeo:'Depósitos verticales con patas | Depofibra',
    metaDescription:'Consulta depósitos verticales de poliéster con patas. Configuraciones elevadas, apoyo, instalación y presupuesto según necesidades.',
    highlights:[
      {title:'Altura de instalación',text:'La altura y el tipo de soporte se estudian según las necesidades del proyecto.'},
      {title:'Apoyo y estabilidad',text:'Es necesario revisar la superficie, la estructura y las cargas correspondientes.'},
      {title:'Conexiones',text:'La posición de entradas y salidas se comprueba para cada referencia.'},
    ],
    description:[
      'Los depósitos verticales con patas son una variante de instalación que puede resultar útil cuando la salida del líquido debe situarse a una altura determinada o el proyecto requiere una estructura de apoyo.',
      'No todas las configuraciones usan los mismos soportes ni alcanzan las mismas alturas. Los detalles de la estructura, la capacidad y las conexiones se verifican con el proveedor para cada referencia.',
    ],
    installationPoints:[
      {title:'Base y estructura',text:'Comprobar el soporte necesario y la estabilidad del conjunto.'},
      {title:'Altura disponible',text:'Revisar la altura total de depósito y patas frente a las limitaciones de espacio.'},
      {title:'Montaje y descarga',text:'Planificar el acceso y los medios adecuados para manejar el conjunto.'},
    ],
    faqs:[
      {q:'¿Puedo elegir la altura de las patas?',a:'La altura y el material de los apoyos deben confirmarse con la configuración concreta.'},
      {q:'¿Todos tienen la misma estructura?',a:'No. El sistema de apoyo depende de la referencia, la capacidad y el diseño.'},
      {q:'¿Incluye la instalación?',a:'No se presuponen trabajos de instalación; cualquier condición se confirmaría en el presupuesto.'},
    ],
  },
  {
    slug:'tipo-vaso',
    name:'Depósito de poliéster tipo vaso',
    shortName:'Tipo vaso',
    eyebrow:'Depósitos · Formatos específicos',
    intro:'Una familia distinta de los depósitos cerrados habituales, para estudiar geometrías y usos específicos.',
    installation:'Según modelo',geometry:'Tipo vaso',application:'Usos compatibles por verificar',
    quoteProduct:'Depósito tipo vaso',
    gallery:[{src:'/images/depositos/vaso.svg',alt:'Dibujo orientativo de un depósito tipo vaso de poliéster',kind:'Dibujo orientativo'}],
    titleSeo:'Depósitos tipo vaso de poliéster | Depofibra',
    metaDescription:'Depósitos tipo vaso de poliéster. Consulta configuración, capacidad y condiciones de uso antes de pedir presupuesto.',
    highlights:[
      {title:'Geometría diferente',text:'Su forma se diferencia de las familias verticales y horizontales cerradas.'},
      {title:'Capacidad por definir',text:'Se estudia según el espacio y la referencia del catálogo aplicable.'},
      {title:'Uso compatible',text:'Antes de decidir es necesario conocer qué líquido contendrá y cómo se instalará.'},
    ],
    description:[
      'Los depósitos tipo vaso constituyen una alternativa cuando el proyecto requiere una geometría específica. Su adecuación depende del volumen, la forma y las conexiones solicitadas.',
      'En esta familia no conviene suponer que todos los productos comparten medidas, tapa, accesorios o resistencia. La propuesta se prepara con datos de la referencia concreta.',
    ],
    installationPoints:[
      {title:'Definir uso y líquido',text:'Especificar las condiciones reales de uso para revisar la compatibilidad.'},
      {title:'Espacio disponible',text:'Concretar el hueco, la altura y el tipo de apoyo.'},
      {title:'Accesorios',text:'Consultar entradas, salidas o elementos adicionales antes del presupuesto.'},
    ],
    faqs:[
      {q:'¿Todos los tipo vaso son iguales?',a:'No. La geometría, capacidad y accesorios dependen del modelo.'},
      {q:'¿Puedo elegir una capacidad concreta?',a:'Sí, puedes indicarnos los litros aproximados que necesitas y se revisará qué referencia encaja.'},
      {q:'¿Se pueden utilizar para cualquier líquido?',a:'No debe suponerse. La compatibilidad con el contenido se comprueba expresamente.'},
    ],
  },
  {
    slug:'cuadrados-rectangulares',
    name:'Depósito cuadrado o rectangular',
    shortName:'Cuadrado o rectangular',
    eyebrow:'Depósitos · Aprovechamiento de espacio',
    intro:'Modelos con geometría cuadrada o rectangular para estudiar instalaciones donde el espacio condiciona la elección.',
    installation:'En superficie · Según modelo',geometry:'Cuadrado / rectangular',application:'Almacenamiento compatible',
    quoteProduct:'Depósito cuadrado o rectangular',
    gallery:[{src:'/images/depositos/rectangular.svg',alt:'Esquema orientativo de depósito rectangular de poliéster',kind:'Dibujo orientativo'}],
    titleSeo:'Depósitos cuadrados y rectangulares | Depofibra',
    metaDescription:'Depósitos cuadrados y rectangulares de poliéster para espacios condicionados. Consulta modelos, accesorios y presupuesto.',
    highlights:[
      {title:'Geometría definida',text:'Permite estudiar huecos donde una forma cilíndrica no encaja bien.'},
      {title:'Medidas por modelo',text:'Ancho, largo y altura requieren confirmación en la referencia concreta.'},
      {title:'Conexiones',text:'Las tomas y accesorios se revisan según uso y posibilidades de configuración.'},
    ],
    description:[
      'Los depósitos cuadrados y rectangulares se valoran cuando importa aprovechar un espacio con condicionantes geométricos. No todos ofrecen las mismas dimensiones o configuraciones.',
      'Para orientar una consulta es útil conocer las medidas máximas del hueco, la capacidad aproximada, el líquido y el modo de instalación previsto.',
    ],
    installationPoints:[
      {title:'Tomar medidas',text:'Identificar las dimensiones interiores y de acceso al lugar de instalación.'},
      {title:'Base compatible',text:'Comprobar que el apoyo es adecuado para el modelo elegido.'},
      {title:'Entrada y salida',text:'Revisar ubicación y diámetros de conexiones según la configuración.'},
    ],
    faqs:[
      {q:'¿Puedo pedir un depósito rectangular para un hueco exacto?',a:'Puedes enviarnos las dimensiones máximas y estudiaremos las referencias que puedan encajar; no se garantiza fabricación a medida sin confirmación.'},
      {q:'¿Son aptos para cualquier líquido?',a:'La compatibilidad de materiales y la documentación técnica deben verificarse según el contenido.'},
      {q:'¿Puedo solicitar presupuesto con transporte?',a:'Sí. Conviene facilitar destino, acceso y medidas disponibles para valorar la entrega.'},
    ],
  },
];

export const getDepositFamily = (slug: string): DepositFamily | undefined => depositFamilies.find(family => family.slug === slug);
