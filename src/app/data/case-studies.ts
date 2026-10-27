import { Bilingual } from '../i18n/locale.service';
export interface CaseStudy {
  headline: Bilingual;
  category: Bilingual;
  overview: Bilingual;
  role: Bilingual;
  audience: Bilingual;
  challenge: Bilingual;
  chapters: { title: Bilingual; body: Bilingual }[];
  flow: Bilingual[];
  learning?: Bilingual;
  team?: Bilingual;
  outcome?: Bilingual;
  privateNote?: Bilingual;
  context?: Bilingual;
  constraints?: Bilingual;
  owned?: Bilingual;
  keyDecisions?: Bilingual;
  flowDetail?: Bilingual;
  iterations?: Bilingual;
  designSystem?: Bilingual;
  implementation?: Bilingual;
  shipped?: Bilingual;
  reflection?: Bilingual;
}
export const CASE_STUDIES: Record<string, CaseStudy> = {
  "digital-commerce": {
    "headline": [
  "Evolucionar una herramienta que ya formaba parte del trabajo.",
  "Evolving a tool already embedded in daily work."
],
    "category": [
      "Retail · Punto de venta · Caso anonimizado",
      "Retail · Point of sale · Anonymized case"
    ],
    "overview": [
  "Rediseñé una solución de punto de venta heredada para un retailer con más de 500 tiendas y presencia internacional. Lideré el diseño de producto, la investigación y las iteraciones con el equipo, hasta acompañar la integración de la nueva experiencia.",
  "I redesigned a legacy point-of-sale solution for a retailer with more than 500 stores and an international presence. I led product design, research and iterations with the team, through to the integration of the new experience."
],
    "role": [
  "Product Designer · Team Lead",
  "Product Designer · Team Lead"
],
    "audience": [
      "Personal de tienda y responsables de caja",
      "Store staff and checkout supervisors"
    ],
    "team": [
      "Liderazgo de producto y diseño, en coordinación con desarrollo e integración.",
      "Product and design leadership, coordinating development and integration."
    ],
    "challenge": [
  "Cambiar un sistema conocido implica cambiar hábitos de trabajo. El reto era mejorar la claridad y la organización de la venta sin exigir que el personal de tienda aprendiera de nuevo cada tarea.",
  "Changing a familiar system also changes working habits. The challenge was to improve clarity and the organization of the sales experience without making store staff relearn every task."
],
    "context": [
  "Evolución de una solución legacy dentro de un retailer de más de 500 tiendas. La escala describe el contexto del negocio, no una cifra de despliegue del rediseño.",
  "An evolution of a legacy solution within a retailer of more than 500 stores. This describes the business context, not a rollout figure for the redesign."
],
    "constraints": [
  "Respetar hábitos existentes, organizar una interfaz de uso intensivo y mantener coherencia entre formatos y situaciones de tienda.",
  "Respect existing habits, organize an interface used throughout the day and maintain consistency across formats and store situations."
],
    "owned": [
  "Investigación, definición de recorridos, arquitectura de información, UX/UI y liderazgo del diseño. Acompañé la integración para conservar el criterio de experiencia acordado.",
  "Research, journey definition, information architecture, UX/UI and design leadership. I supported integration to preserve the agreed experience principles."
],
    "keyDecisions": [
  "Dar al ticket un lugar estable, separar el área de tarea de la información de la venta y hacer que la jerarquía visual ayude a reconocer el siguiente paso.",
  "Give the receipt a stable position, separate the task area from sale information and use visual hierarchy to make the next step recognizable."
],
    "flowDetail": [
      "Escanear → revisar ticket → cobrar → confirmar o recuperar → cerrar turno.",
      "Scan → review receipt → collect payment → confirm or recover → close shift."
    ],
    "iterations": [
  "Realicé entrevistas, análisis, pruebas y QA. El diseño pasó por más de cuatro rondas de iteración, revisando decisiones a partir del feedback y las comprobaciones de uso.",
  "I conducted interviews, analysis, testing and QA. The design went through more than four rounds of iteration, revisiting decisions through feedback and usage checks."
],
    "designSystem": [
      "Patrones compartidos para navegación, artículos, líneas de ticket, métodos de pago, alertas y dispositivos.",
      "Shared patterns for navigation, products, receipt lines, payment methods, alerts and devices."
    ],
    "implementation": [
  "Trabajé con el equipo para que jerarquía, comportamiento y consistencia se conservaran durante la integración. Las revisiones y el QA formaron parte de la entrega de diseño.",
  "I worked with the team to preserve hierarchy, behavior and consistency during integration. Reviews and QA were part of the design delivery."
],
    "shipped": [
      "Sistema visual y recorridos de venta, pago, recuperación y arqueo documentados para integración.",
      "A visual system and documented sales, payment, recovery and till reconciliation journeys for integration."
    ],
    "reflection": [
  "Rediseñar una herramienta de trabajo exige saber qué cambiar y qué conviene conservar. La familiaridad también tiene valor de diseño.",
  "Redesigning a working tool means knowing what to change and what to preserve. Familiarity has design value too."
],
    "chapters": [
  {
    "title": [
      "Una estructura que acompaña el trabajo",
      "A structure that supports the work"
    ],
    "body": [
      "Organicé la pantalla en dos áreas: la tarea que está realizando la persona y la información de la venta. Mantener el ticket en un lugar estable evita que cada paso obligue a buscar de nuevo el contexto.",
      "I organized the screen around two areas: the task being performed and the sale information. Keeping the receipt in a stable position avoids making people find their context again at every step."
    ]
  },
  {
    "title": [
      "Menos esfuerzo para decidir",
      "Less effort to make the next decision"
    ],
    "body": [
      "Trabajé el orden, el tamaño y la agrupación de las acciones para que las opciones se lean con claridad. La prioridad era que la persona reconociera dónde continuar, incluso cuando cambia el tipo de tarea.",
      "I worked on the order, size and grouping of actions so choices can be read clearly. The priority was to make the next step recognizable, even when the type of task changes."
    ]
  },
  {
    "title": [
      "Diseñar también los momentos de incertidumbre",
      "Designing for moments of uncertainty"
    ],
    "body": [
      "La confianza también depende de los momentos en los que la experiencia se interrumpe. Utilicé jerarquía visual, mensajes breves y una acción principal reconocible para orientar a la persona y evitar que tenga que interpretar qué hacer.",
      "Confidence also depends on the moments when an experience is interrupted. I used visual hierarchy, concise messages and a recognizable primary action to guide people rather than make them interpret what to do."
    ]
  }
],
    "flow": [
      [
        "Escanear",
        "Scan"
      ],
      [
        "Revisar",
        "Review"
      ],
      [
        "Cobrar",
        "Collect payment"
      ],
      [
        "Conciliar",
        "Reconcile"
      ]
    ],
    "outcome": [
  "Una propuesta de punto de venta que reorganiza la experiencia existente alrededor de las tareas de tienda, afinada mediante investigación, iteración y QA.",
  "A point-of-sale experience that reorganizes the existing product around store tasks, refined through research, iteration and QA."
],
    "privateNote": [
      "Caso profesional anonimizado. Se han retirado marcas, nombres e identificadores de las capturas. Las cifras ilustran el diseño; no son resultados de negocio.",
      "Anonymized professional case study. Brands, names and identifiers have been removed from the screenshots. Figures illustrate the design; they are not business results."
    ]
  },
  "operations-analytics": {
    "headline": [
  "Dar forma a un producto de pagos desde cero.",
  "Shaping a payments product from the ground up."
],
    "category": [
      "Fintech · Operaciones · Caso anonimizado",
      "Fintech · Operations · Anonymized case"
    ],
    "overview": [
  "Lideré el diseño de producto de una solución creada desde cero para una integración personalizada con Redsys y múltiples comercios. El trabajo unió investigación, definición del producto y diseño de una experiencia operativa común.",
  "I led product design for a solution built from scratch around a custom Redsys integration and multiple merchants. The work brought together research, product definition and the design of a shared operational experience."
],
    "role": [
  "Product Designer · Team Lead",
  "Product Designer · Team Lead"
],
    "audience": [
  "Comercios y equipos responsables de su operativa de pagos",
  "Merchants and teams responsible for payment operations"
],
    "team": [
      "Liderazgo de diseño y coordinación con el equipo técnico.",
      "Design leadership and coordination with the technical team."
    ],
    "challenge": [
  "El reto no era añadir un panel a una integración. Había que convertir necesidades distintas de cobro y gestión en un producto comprensible para varios comercios, manteniendo una lectura clara de la información y de las acciones disponibles.",
  "The challenge went beyond adding a dashboard to an integration. Different payment and management needs had to become a coherent product for multiple merchants, with clear information and recognizable actions."
],
    "context": [
  "Producto 0→1 para una integración personalizada con Redsys, planteado para trabajar con varios comercios dentro de una misma plataforma.",
  "A 0→1 product for a custom Redsys integration, designed to support multiple merchants within one platform."
],
    "constraints": [
  "Un producto nuevo, necesidades de distintos comercios y una integración de pagos que había que traducir a una experiencia de uso clara.",
  "A new product, different merchant needs and a payment integration that needed to become a clear user experience."
],
    "owned": [
  "Research, análisis, definición de producto, arquitectura de información y diseño de interfaz, con liderazgo de equipo y seguimiento de la integración.",
  "Research, analysis, product definition, information architecture and interface design, with team leadership and integration follow-through."
],
    "keyDecisions": [
  "Separé la lectura del negocio, la consulta de operaciones y la gestión de enlaces. Cada espacio responde a una intención concreta, con una jerarquía y acciones acordes.",
  "I separated business overview, transaction investigation and payment-link management. Each space serves a specific intent, with a corresponding hierarchy and set of actions."
],
    "flowDetail": [
      "Consultar actividad → filtrar transacciones → revisar estado → gestionar enlaces de pago.",
      "Review activity → filter transactions → inspect status → manage payment links."
    ],
    "iterations": [
  "Entrevistas, análisis, pruebas y QA acompañaron el diseño desde el inicio. Más de cuatro rondas de iteración permitieron revisar las propuestas y ajustar las decisiones con feedback.",
  "Interviews, analysis, testing and QA accompanied the design from the beginning. More than four rounds of iteration allowed proposals and decisions to be revisited through feedback."
],
    "designSystem": [
      "Navegación común, filtros reutilizables, estados de operación y acciones consistentes sobre tablas.",
      "Shared navigation, reusable filters, operation statuses and consistent table actions."
    ],
    "implementation": [
  "Acompañé la integración para contrastar la experiencia diseñada con el producto en construcción, revisando estados, consistencia visual y claridad de uso junto al equipo.",
  "I supported integration by comparing the intended experience with the product being built, reviewing states, visual consistency and clarity with the team."
],
    "shipped": [
      "Diseño de los módulos de panel, transacciones y enlaces de pago con sus patrones de consulta y gestión.",
      "Dashboard, transaction and payment-link module designs with their investigation and management patterns."
    ],
    "reflection": [
      "Una métrica es útil cuando abre una pregunta que el producto permite resolver. El detalle y la acción deben estar cerca del resumen.",
      "A metric is useful when it raises a question the product can help answer. Detail and action need to stay close to the overview."
    ],
    "chapters": [
  {
    "title": [
      "Decidir qué necesita verse primero",
      "Deciding what deserves attention first"
    ],
    "body": [
      "Organicé el panel para separar una primera lectura del negocio de la consulta en profundidad. El tamaño, el espacio y la posición de cada bloque definen un orden de lectura antes de entrar en los detalles.",
      "I organized the dashboard to separate an initial business overview from deeper investigation. Size, space and placement establish a reading order before people move into details."
    ]
  },
  {
    "title": [
      "Hacer legible la información densa",
      "Making dense information readable"
    ],
    "body": [
      "En la vista de operaciones trabajé la jerarquía entre datos, filtros y acciones. La tabla debía permitir comparar y localizar información sin dar el mismo peso visual a cada elemento.",
      "In the transaction view, I worked on the hierarchy between data, filters and actions. The table needed to support comparison and lookup without giving every element equal visual weight."
    ]
  },
  {
    "title": [
      "Dar a cada tarea su propio espacio",
      "Giving each task its own space"
    ],
    "body": [
      "La gestión de enlaces tiene necesidades distintas de la supervisión del negocio. Le di una estructura propia, conservando los patrones compartidos para que cambiar de sección no supusiera aprender otra interfaz.",
      "Payment-link management has different needs from business monitoring. I gave it a dedicated structure while preserving shared patterns, so moving between sections would not mean learning a different interface."
    ]
  }
],
    "flow": [
      [
        "Supervisar",
        "Monitor"
      ],
      [
        "Filtrar",
        "Filter"
      ],
      [
        "Investigar",
        "Investigate"
      ],
      [
        "Gestionar",
        "Manage"
      ]
    ],
    "outcome": [
  "Una definición de producto y una experiencia común para supervisar, consultar y gestionar cobros en un entorno con múltiples comercios.",
  "A product definition and shared experience for monitoring, investigating and managing payments across multiple merchants."
],
    "privateNote": [
      "Caso profesional anonimizado. Se han retirado marcas, nombres e identificadores de las capturas. Las cifras ilustran el diseño; no son resultados de negocio.",
      "Anonymized professional case study. Brands, names and identifiers have been removed from the screenshots. Figures illustrate the design; they are not business results."
    ]
  },
  fynaq: {
    context: ['Fynaq empezó como una empresa creada desde cero para diseñar y construir soluciones digitales. La web pública presenta la matriz y su oferta; los sistemas para restaurantes de sushi son entregas para clientes dentro de esa actividad, con uso operativo continuado.', 'Fynaq began as a company built from scratch to design and develop digital solutions. The public website presents the parent company and its offer; sushi restaurant systems are client deliveries within that work, with ongoing operational use.'],
    headline: [
  "Una identidad para una empresa con muchas posibilidades.",
  "One identity for a company with many possibilities."
],
    category: ['0→1 · Software para empresas · En producción', '0→1 · Business software · Live'],
    overview: [
  "Creé Fynaq desde cero como matriz para productos y servicios digitales. Definí su posicionamiento, su identidad visual y la experiencia de su web para presentar una oferta amplia de forma reconocible y clara.",
  "I built Fynaq from scratch as a parent company for digital products and services. I defined its positioning, visual identity and website experience to present a broad offer with clarity and a recognizable character."
],
    role: [
  "Fundador · Product Designer · Dirección creativa",
  "Founder · Product Designer · Creative direction"
],
    audience: ['Empresas cliente, restaurantes de sushi y usuarios de sus sistemas', 'Client businesses, sushi restaurants and users of their systems'],
    team: ['Trabajé con un compañero responsable del backend de los sistemas para clientes.', 'I worked with a teammate responsible for the backend of client systems.'],
    constraints: ['Fynaq tenía que presentar una empresa nueva y, a la vez, servir de base a productos reales para clientes. La web pública podía mostrarse; las interfaces y datos de los sistemas para restaurantes requerían una presentación privada.', 'Fynaq had to introduce a new company while providing a base for real client products. The public website could be shown; interfaces and data from restaurant systems require a private presentation.'],
    owned: ['Definí la dirección de producto y la identidad de Fynaq, investigué y organicé la oferta, diseñé UX/UI y desarrollé el frontend público y de los sistemas para clientes. Mi compañero se ocupó del backend de esos sistemas.', 'I defined Fynaq’s product direction and identity, researched and structured the offer, designed UX/UI and developed the public and client-system frontends. My teammate owned the backend of those systems.'],
    keyDecisions: ['Separé la marca matriz de las soluciones que entrega. La web presenta qué hace Fynaq y permite entender su capacidad, mientras cada solución para restaurantes responde a tareas y operaciones concretas.', 'I separated the parent brand from the solutions it delivers. The website explains what Fynaq does and its capabilities, while each restaurant solution addresses specific tasks and operations.'],
    flowDetail: ['En la capa pública, una empresa descubre la oferta y puede iniciar una conversación. En los productos para restaurantes, el recorrido continúa en la experiencia de usuario y en las tareas diarias del negocio.', 'In the public layer, a business discovers the offer and can start a conversation. In restaurant products, the journey continues through the customer experience and the business’s daily tasks.'],
    iterations: ['El trabajo creció desde la definición de marca y la web hasta productos para clientes. Esa ampliación obligó a que el lenguaje visual y las decisiones de frontend funcionaran tanto como presentación comercial como en interfaces de uso frecuente.', 'The work grew from brand and website definition into client products. That expansion meant the visual language and frontend decisions had to work for both business presentation and frequently used interfaces.'],
    designSystem: ['Definí un lenguaje visual y componentes para mantener coherencia en la web y en la interfaz de producto. El criterio no era repetir exactamente la misma pantalla, sino compartir estructura, claridad y comportamiento donde aportaran continuidad.', 'I defined a visual language and components to maintain coherence across the website and product interfaces. The goal was not identical screens but shared structure, clarity and behavior where they improved continuity.'],
    implementation: ['Implementé el frontend de la web pública y trabajé en los frontends de las soluciones para clientes. La colaboración con mi compañero conectó esas interfaces con la lógica y los servicios backend que él desarrolló.', 'I built the public website frontend and worked on the frontends of client solutions. Collaboration with my teammate connected those interfaces to the backend logic and services he developed.'],
    shipped: ['Fynaq tiene una web pública y sistemas para clientes en producción. Las soluciones para restaurantes de sushi sostienen actividad operativa diaria.', 'Fynaq has a public website and live client systems. Solutions for sushi restaurants support daily operational activity.'],
    reflection: ['Crear una empresa 0→1 obligó a unir posicionamiento, diseño y ejecución. La web tenía que explicar una oferta real; los sistemas entregados demostraron que esa oferta podía convertirse en herramientas de trabajo.', 'Building a company from zero connected positioning, design and execution. The website needed to explain a real offer; delivered systems showed that the offer could become working tools.'],
    challenge: [
      'Fynaq debía explicar una oferta que va más allá de una web y convertirla en entregas reales. En las soluciones para restaurantes de sushi, la experiencia pública y el trabajo operativo necesitaban pensarse como partes de un mismo sistema.',
      'Fynaq needed to explain an offer that goes beyond a website and turn it into real deliveries. For sushi restaurant solutions, the public experience and operational work needed to be considered as parts of one system.',
    ],
    chapters: [
  {
    "title": [
      "Definir una marca que pueda crecer",
      "Defining a brand with room to grow"
    ],
    "body": [
      "Fynaq debía reunir servicios y productos propios bajo una misma identidad. Trabajé el posicionamiento y el lenguaje visual para construir reconocimiento sin limitar la empresa a una única herramienta.",
      "Fynaq needed to bring services and owned products together under one identity. I worked on positioning and visual language to build recognition without defining the company through a single tool."
    ]
  },
  {
    "title": [
      "Ordenar la oferta antes de pedir una acción",
      "Structuring the offer before asking for action"
    ],
    "body": [
      "Organicé los servicios para que una empresa pudiera reconocer qué necesita y entender dónde encaja Fynaq. Las exploraciones en distintos idiomas muestran cómo esa estructura y la composición visual se adaptan al contenido.",
      "I organized services so a business could recognize its needs and understand where Fynaq fits. Explorations across languages show how that structure and visual composition adapt to content."
    ]
  },
  {
    "title": [
      "Conectar identidad y experiencia",
      "Connecting identity and experience"
    ],
    "body": [
      "La tipografía, el espacio y los recursos gráficos construyen un mismo tono entre la web y las aplicaciones de marca. El objetivo era que la personalidad de Fynaq se reconociera también fuera de una pantalla concreta.",
      "Typography, space and graphic elements establish a shared tone across the website and brand applications. The aim was for Fynaq’s personality to remain recognizable beyond a single screen."
    ]
  }
],
    flow: [],
    outcome: ['La web y los sistemas para clientes están en producción y forman parte de operaciones reales.', 'The website and client systems are live and support real operations.'],
    privateNote: ['Las capturas muestran las exploraciones originales de marca y web en Figma; la web publicada ha evolucionado desde estos diseños. Los sistemas privados de clientes no se muestran.', 'Screenshots show the original brand and website explorations in Figma; the live website has evolved from these designs. Private client systems are not shown.'],
  },
  altura: {
    context: ['Altura nació de una investigación propia sobre espacios de trabajo, propuestas competidoras y el entorno cotidiano de Valencia. A partir de ahí desarrollé una hipótesis de producto y wireframes para discutir cómo podría descubrirse y reservarse un espacio.', 'Altura grew from my own research into workspaces, competing offers and Valencia’s everyday environment. From there I developed a product hypothesis and wireframes to explore how a space could be discovered and booked.'],
    team: ['Proyecto autoiniciado, desarrollado de forma independiente.', 'Self-initiated project developed independently.'],
    constraints: ['Era un concepto sin encargo, producto existente ni acceso a pruebas con usuarios. Las decisiones se apoyaron en análisis de competencia y observación del entorno de Valencia; los wireframes son una propuesta, no un flujo validado.', 'This was a concept without a client brief, existing product or access to user testing. Decisions drew on competitor analysis and observation of Valencia’s local context; the wireframes are a proposal, not a validated flow.'],
    owned: ['Realicé la investigación exploratoria, definí el enfoque del producto, la arquitectura inicial y los wireframes. El alcance fue diseño conceptual completo; no hubo desarrollo ni lanzamiento.', 'I carried out exploratory research, defined the product approach, initial information architecture and wireframes. The scope was a complete design concept; there was no development or launch.'],
    keyDecisions: ['Empecé por la decisión que la persona tendría que tomar: qué espacio le conviene y por qué. Por eso los wireframes priorizan descubrimiento, comparación e información necesaria antes de avanzar a la reserva.', 'I started with the decision a person would need to make: which space suits them and why. The wireframes therefore prioritize discovery, comparison and the information needed before moving to booking.'],
    flowDetail: ['El flujo propuesto pasa de explorar opciones a comprender cada espacio, compararlo con alternativas y plantear una reserva. Es un modelo de interacción para discutir y desarrollar, no una experiencia utilizada por clientes.', 'The proposed flow moves from exploring options to understanding each space, comparing alternatives and considering a booking. It is an interaction model for discussion and further development, not an experience used by customers.'],
    iterations: ['La exploración avanzó de referencias de competencia y calles de Valencia hacia una estructura de información y wireframes. Ese paso ayudó a concretar qué información tendría que estar disponible antes de diseñar la capa visual final.', 'The exploration moved from competitor references and Valencia’s streets toward information structure and wireframes. That step clarified what information would need to be available before designing a final visual layer.'],
    designSystem: ['Exploré una dirección visual inspirada en el contexto mediterráneo para dar coherencia al concepto. La paleta y la tipografía son propuestas de diseño, no un sistema aplicado a un producto publicado.', 'I explored a visual direction informed by the Mediterranean context to give the concept coherence. The palette and typography are design proposals, not a system applied to a published product.'],
    implementation: ['El entregable quedó en investigación exploratoria, estructura y wireframes. La siguiente etapa, si se desarrollara, sería contrastar la información y las necesidades de reserva con personas reales antes de construir la interfaz.', 'The deliverable stopped at exploratory research, structure and wireframes. If developed further, the next step would be to check information and booking needs with real people before building the interface.'],
    shipped: ['Un concepto documentado con análisis del contexto de Valencia y wireframes del recorrido. No se lanzó ni implementó.', 'A documented concept with Valencia context analysis and journey wireframes. It was neither launched nor implemented.'],
    reflection: ['El valor de Altura está en convertir una observación local en una hipótesis de producto clara. Los wireframes muestran qué habría que resolver; también dejan visible qué todavía necesita validación.', 'Altura’s value lies in turning local observation into a clear product hypothesis. The wireframes show what would need to be solved and make visible what still needs validation.'],
    headline: [
      'Explorar cómo podría ser un coworking en Valencia.',
      'Exploring a coworking experience for Valencia.',
    ],
    category: [
      'Proyecto conceptual · Diseño de producto',
      'Concept project · Product design',
    ],
    overview: [
      'Un concepto autoiniciado de coworking para Valencia. Analicé propuestas de la competencia y el entorno local, y desarrollé wireframes para explorar descubrimiento y reserva de espacios.',
      'A self-initiated coworking concept for Valencia. I studied competing offerings and the local context, then developed wireframes exploring space discovery and booking.',
    ],
    role: [
      'Análisis de competencia y entorno, arquitectura y wireframes',
      'Competitor and local context research, information architecture and wireframes',
    ],
    audience: [
      'Estudiantes y profesionales freelance',
      'Students and freelance professionals',
    ],
    challenge: [
      'Explorar cómo una persona podría descubrir un espacio de trabajo y entender sus opciones antes de reservar, a partir de un concepto propio y del contexto de Valencia.',
      'Explore how someone could find a workspace and understand their options before booking, starting from an independent concept and Valencia’s local context.',
    ],
    chapters: [
      {
        title: [
          '01 — Dos formas de habitar el espacio',
          '01 — Two ways to use the space',
        ],
        body: [
          'Analicé la competencia y observé el entorno de Valencia para situar el concepto. Estudiantes y profesionales freelance fueron perfiles de diseño, no segmentos validados mediante pruebas con usuarios.',
          'I studied competing offerings and observed Valencia’s local context to ground the concept. Students and freelancers were design profiles, not segments validated through user testing.',
        ],
      },
      {
        title: [
          '02 — Primero el recorrido, después la pantalla',
          '02 — The journey before the screen',
        ],
        body: [
          'Los wireframes exploran la secuencia de descubrir un espacio, revisar su información y avanzar hacia una reserva. El proyecto quedó en fase de concepto.',
          'The wireframes explore discovering a space, reviewing its information and moving toward a booking. The project remained a concept.',
        ],
      },
      {
        title: [
          '03 — Traducir Valencia a un sistema',
          '03 — Translating Valencia into a system',
        ],
        body: [
          'La exploración visual toma referencias del entorno mediterráneo. Es una propuesta de diseño, no una interfaz implementada.',
          'The visual exploration draws on the Mediterranean setting. It is a design proposal, not an implemented interface.',
        ],
      },
    ],
    flow: [
      ['Descubrir', 'Discover'],
      ['Comparar', 'Compare'],
      ['Reservar', 'Book'],
      ['Conectar', 'Connect'],
    ],
outcome: ['El resultado es un concepto documentado con análisis de contexto y wireframes; no se lanzó como producto.', 'The outcome is a concept documented through context research and wireframes; it was not launched as a product.'],
  },
  "poketrade": {
    "headline": [
  "Diseñar desde dentro de la comunidad.",
  "Designing from within the community."
],
    "category": [
      "App móvil · Coleccionismo · Diseño de producto",
      "Mobile app · Collectibles · Product design"
    ],
    "overview": [
  "PokéTrade nació como un proyecto personal alrededor del coleccionismo. Hice research, entrevistas y pruebas con amigos que juegan a las cartas, y utilicé ese contacto para diseñar e iterar la relación entre catálogo, colección e intercambio.",
  "PokéTrade began as a personal project around collecting. I conducted research, interviews and testing with friends who play card games, using that contact to design and iterate the relationship between catalogue, collection and trading."
],
    "role": [
  "Product Designer · Proyecto personal",
  "Product Designer · Personal project"
],
    "audience": [
      "Coleccionistas de cartas Pokémon y comunidades de intercambio",
      "Pokémon card collectors and trading communities"
    ],
    "team": [
  "Proyecto personal con participación de amigos jugadores en entrevistas, pruebas y QA.",
  "A personal project with friends who play card games taking part in interviews, testing and QA."
],
    "challenge": [
  "Quería entender cómo conectar lo que una persona colecciona con lo que busca y puede intercambiar. La experiencia tenía que responder al lenguaje y a las prioridades de los jugadores, además de organizar un catálogo de cartas.",
  "I wanted to understand how to connect what someone collects with what they want and can trade. The experience needed to reflect players’ language and priorities, beyond organizing a card catalogue."
],
    "context": [
      "Un producto móvil que conecta inventario personal, catálogo, anuncios y conversación.",
      "A mobile product connecting personal inventory, catalogue, listings and conversation."
    ],
    "constraints": [
  "Investigación con jugadores de mi entorno. Sus aportaciones orientan el diseño, pero no representan por sí solas a toda la comunidad de coleccionistas.",
  "Research with players in my own circle. Their input informs the design but does not on its own represent the wider collecting community."
],
    "owned": [
  "Investigación, entrevistas, definición de producto, UX/UI, sistema visual e integración, con pruebas y QA a lo largo del proceso.",
  "Research, interviews, product definition, UX/UI, visual system and integration, with testing and QA throughout the process."
],
    "keyDecisions": [
      "Diferencié carta, ejemplar y anuncio. La colección funciona como origen del intercambio, no como una lista aislada.",
      "I separated card, copy and listing. The collection becomes the starting point for a trade rather than an isolated list."
    ],
    "flowDetail": [
      "Explorar → revisar la carta → consultar la colección → proponer un intercambio → conversar.",
      "Explore → inspect a card → review the collection → propose a trade → talk."
    ],
    "iterations": [
  "Más de cuatro rondas de iteración. Las entrevistas y las pruebas llevaron a revisar botones y la forma de presentar las cartas, además de afinar el recorrido.",
  "More than four rounds of iteration. Interviews and testing led to changes in buttons and card presentation, alongside refinements to the journey."
],
    "designSystem": [
      "Un kit de interfaz para Flutter conecta navegación, cartas, filtros, álbumes, anuncios y propuestas.",
      "A Flutter UI kit connects navigation, cards, filters, albums, listings and proposals."
    ],
    "implementation": [
  "Contrasté el diseño con la experiencia móvil y utilicé el QA para revisar la coherencia entre los recorridos planteados y su comportamiento.",
  "I compared the design with the mobile experience and used QA to review consistency between the intended journeys and their behavior."
],
    "shipped": [
      "Sistema de producto y pantallas de catálogo, colección, anuncios e intercambios documentados en Figma.",
      "Product system and catalogue, collection, listing and trading screens documented in Figma."
    ],
    "reflection": [
      "El intercambio funciona cuando ambas personas comparten el mismo contexto: qué ofrecen, qué buscan y en qué estado está la propuesta.",
      "Trading works when both people share the same context: what they offer, what they want and the proposal’s current state."
    ],
    "chapters": [
  {
    "title": [
      "Entender cómo descubren los jugadores",
      "Understanding how players discover cards"
    ],
    "body": [
      "El research y las conversaciones con jugadores ayudaron a plantear diferentes entradas: expansiones, búsqueda y anuncios cercanos. La exploración debía admitir intereses distintos, sin imponer un único camino hacia una carta.",
      "Research and conversations with players informed different entry points: expansions, search and nearby listings. Discovery needed to accommodate different interests rather than impose one route to a card."
    ]
  },
  {
    "title": [
      "Diseñar desde la colección real",
      "Designing around the collection"
    ],
    "body": [
      "La colección da sentido a lo que se busca y se ofrece. Trabajé la lectura de las cartas y la distinción entre las que se tienen y las que faltan; las pruebas sirvieron para revisar su presentación y las acciones asociadas.",
      "The collection gives meaning to what people want and offer. I worked on card readability and the distinction between owned and missing cards; testing helped revisit their presentation and associated actions."
    ]
  },
  {
    "title": [
      "Iterar lo que se ve y se toca",
      "Iterating what people see and interact with"
    ],
    "body": [
      "El feedback se tradujo en cambios concretos en botones, jerarquía y disposición de las cartas. Las decisiones se revisaron en varias rondas, buscando que la interfaz se acercara a la forma de pensar y actuar de los jugadores.",
      "Feedback led to concrete changes in buttons, hierarchy and card layout. Decisions were revisited over several rounds, bringing the interface closer to how players think and act."
    ]
  }
],
    "flow": [
      [
        "Descubrir",
        "Discover"
      ],
      [
        "Coleccionar",
        "Collect"
      ],
      [
        "Proponer",
        "Propose"
      ],
      [
        "Intercambiar",
        "Trade"
      ]
    ],
    "outcome": [
  "Un proyecto personal que conecta investigación con decisiones visibles de navegación, presentación de cartas y construcción del intercambio.",
  "A personal project connecting research with visible decisions about navigation, card presentation and the trading experience."
],
    "privateNote": [
      "Las capturas muestran el diseño de producto. Los precios, perfiles y propuestas son contenido de interfaz, no métricas de adopción.",
      "Screenshots show the product design. Prices, profiles and proposals are interface content, not adoption metrics."
    ]
  },
  'autotok-web': {
    context: ['AutoTok es una idea de automatización de vídeo desarrollada con compañeros de la UPV en Start Inf. La web pública actúa como primera explicación del producto mientras la demo continúa en construcción.', 'AutoTok is a video automation idea developed with UPV teammates through Start Inf. The public website acts as the first explanation of the product while the demo remains under construction.'],
    team: ['Proyecto con compañeros de la UPV dentro de Start Inf; asumí diseño de producto, dirección de equipo y frontend.', 'A project with UPV teammates through Start Inf; I led product design, the team and frontend work.'],
    constraints: ['La propuesta de automatización debía entenderse antes de explicar sus detalles técnicos. Además, el diseño tenía que pasar a una web construida por un equipo con responsabilidades distintas.', 'The automation proposition needed to be understood before its technical detail. The design also had to become a website built by a team with different responsibilities.'],
    owned: ['Trabajé la propuesta visual, los wireframes, la estructura de la landing, el frontend y la coordinación de revisiones del equipo.', 'I worked on visual direction, wireframes, landing structure, frontend and coordination of team reviews.'],
    keyDecisions: ['Ordené la página como una historia: primero qué hace el producto y para quién, después cómo funciona y finalmente la acción. Esto evita pedir un clic antes de que la propuesta sea comprensible.', 'I structured the page as a story: what the product does and for whom first, then how it works, and finally the action. This avoids asking for a click before the proposition is clear.'],
    iterations: ['El trabajo pasó de investigación y wireframes a composición visual y revisión de frontend. Las revisiones con el equipo ayudaron a mantener la misma jerarquía cuando el diseño se convirtió en código.', 'The work moved from research and wireframes to visual composition and frontend review. Team reviews helped preserve the hierarchy as the design became code.'],
    implementation: ['Participé directamente en el frontend y revisé con el equipo la traducción del diseño a la web. El sitio público presenta actualmente una demo en construcción.', 'I worked directly on the frontend and reviewed how the team translated the design into the website. The public site currently presents a demo under construction.'],
    shipped: ['Una landing pública de AutoTok que comunica la idea de producto; la demo permanece en desarrollo.', 'A public AutoTok landing page communicating the product idea; the demo remains in development.'],
    reflection: ['La landing sirvió para concretar el relato del producto y alinear al equipo. Cuando el mensaje se entiende, las decisiones de interfaz tienen un criterio compartido.', 'The landing page helped clarify the product story and align the team. When the message is clear, interface decisions have a shared criterion.'],
    headline: [
      'De una idea de producto\na una historia que se entiende.',
      'From a product idea\nto a story that makes sense.',
    ],
    category: [
      'Diseño de producto · Dirección de equipo',
      'Product design · Team leadership',
    ],
    overview: [
      'La landing de AutoTok presenta una plataforma de automatización de vídeo para TikTok. El proyecto se desarrolla con compañeros de la UPV dentro de Start Inf, desde la concepción visual hasta la implementación.',
      'The AutoTok landing page introduces a TikTok video automation platform. The project is developed with fellow UPV students through Start Inf, from visual conception to implementation.',
    ],
    role: [
      'Diseño de producto, dirección de equipo y frontend',
      'Product design, team leadership and frontend',
    ],
    audience: [
      'Personas interesadas en automatizar la creación de vídeo',
      'People interested in automating video creation',
    ],
    challenge: [
      'Explicar un producto técnico con una propuesta clara y coordinar un equipo con distintas disciplinas. El diseño debía mantener su coherencia al convertirse en una web funcional.',
      'Explain a technical product with a clear proposition while coordinating a multidisciplinary team. The design needed to remain coherent as it became a working website.',
    ],
    chapters: [
      {
        title: [
          '01 — Encontrar el hilo del producto',
          '01 — Finding the product’s through line',
        ],
        body: [
          'La investigación y los wireframes sitúan primero la propuesta de valor. La página debe ayudar a entender para qué sirve AutoTok antes de pedir al visitante que actúe.',
          'Research and wireframes put the value proposition first. The page should help visitors understand what AutoTok does before asking them to act.',
        ],
      },
      {
        title: [
          '02 — Diseñar y construir con el mismo criterio',
          '02 — Designing and building with the same intent',
        ],
        body: [
          'El trabajo une diseño, frontend y revisiones de implementación. La consistencia visual se comprueba durante el desarrollo, para que las decisiones de composición y jerarquía sobrevivan al cambio de herramienta.',
          'The work connects design, frontend and implementation reviews. Visual consistency is checked during development so composition and hierarchy decisions survive the change of tool.',
        ],
      },
      {
        title: [
          '03 — El equipo también forma parte del diseño',
          '03 — The team is part of the design',
        ],
        body: [
          'Como diseñador y responsable del equipo, coordino revisiones, acompaño a compañeros y conecto las decisiones visuales con sus restricciones técnicas. El proyecto sigue en construcción.',
          'As designer and team lead, I coordinate reviews, support teammates and connect visual decisions to technical constraints. The project remains in development.',
        ],
      },
    ],
    flow: [
      ['Entender', 'Understand'],
      ['Descubrir', 'Discover'],
      ['Evaluar', 'Evaluate'],
      ['Actuar', 'Act'],
    ],
learning: [
      'Una web de producto también es una herramienta para alinear al equipo: obliga a expresar con claridad qué se ofrece, a quién y por qué importa.',
      'A product website also aligns the team: it forces clarity about what is offered, who it is for and why it matters.',
    ],
  },
  'autotok-dashboard': {
    context: ['El dashboard explora cómo supervisar automatización de vídeo y actividad de contenido dentro del universo AutoTok. El reto de diseño era ordenar lecturas distintas en una interfaz que permitiera pasar de una visión general a detalles concretos.', 'The dashboard explores how to monitor video automation and content activity within AutoTok. The design challenge was to organize different readings in an interface that could move from overview to specific detail.'],
    team: ['Trabajo de diseño e implementación dentro del proyecto AutoTok.', 'Design and implementation work within the AutoTok project.'],
    constraints: ['Métricas de rendimiento, interacción y estado de automatización compiten por espacio. La interfaz debía hacer legibles sus relaciones en escritorio y en tamaños más pequeños, sin sugerir que el diseño ya había validado resultados de uso.', 'Performance, engagement and automation status compete for space. The interface needed to make their relationships legible on desktop and smaller screens without implying measured user outcomes.'],
    owned: ['Diseñé la organización del dashboard, los módulos de datos, los gráficos, estados y su adaptación responsive, y trabajé en su implementación.', 'I designed dashboard organization, data modules, charts, states and responsive adaptation, and worked on implementation.'],
    keyDecisions: ['Separé la visión general de la lectura en detalle. Cada módulo agrupa métricas relacionadas, mientras color y tipografía ayudan a distinguir estado, tendencia y valor sin añadir decoración gratuita.', 'I separated overview from detailed reading. Each module groups related metrics, while color and typography distinguish state, trend and value without unnecessary decoration.'],
    iterations: ['La estructura se ajustó desde una colección de datos hacia módulos con jerarquía repetible. En pantallas pequeñas, la prioridad cambia hacia una lectura por secciones en vez de reducir el tablero completo.', 'The structure developed from a collection of data into repeatable modules with hierarchy. On smaller screens, priority shifts to reading by section instead of shrinking the entire dashboard.'],
    implementation: ['El trabajo conectó diseño de visualización e implementación de interfaz. El caso se presenta como diseño y desarrollo del dashboard, sin publicar métricas de uso que no se han medido.', 'The work connected visualization design with interface implementation. This case presents dashboard design and development without publishing unmeasured usage metrics.'],
    shipped: ['Una interfaz de dashboard para AutoTok con vistas de rendimiento, interacción y automatización.', 'An AutoTok dashboard interface with performance, engagement and automation views.'],
    reflection: ['En analítica, la utilidad está en relacionar datos con una decisión. Mantener una jerarquía repetible permite recorrer el tablero sin reaprender cada módulo.', 'In analytics, value comes from connecting data to a decision. A repeatable hierarchy lets people scan the dashboard without relearning each module.'],
    headline: [
      'Ver lo importante.\nEntender qué hacer después.',
      'See what matters.\nUnderstand what comes next.',
    ],
    category: [
      'Visualización de datos · Diseño de dashboard',
      'Data visualization · Dashboard design',
    ],
    overview: [
      'Un dashboard para leer métricas de automatización de vídeo, rendimiento e interacción. La interfaz organiza información compleja para ayudar a identificar patrones y orientar decisiones.',
      'A dashboard for reading video automation, performance and engagement metrics. The interface organizes complex information to help identify patterns and inform decisions.',
    ],
    role: [
      'Diseño de dashboard, visualización e implementación',
      'Dashboard design, visualization and implementation',
    ],
    audience: [
      'Usuarios que supervisan contenido y automatizaciones',
      'Users monitoring content and automation',
    ],
    challenge: [
      'Mostrar rendimiento de vídeos, estados de automatización y tendencias de interacción a la vez, sin convertir la pantalla en una colección de números que compiten por atención.',
      'Show video performance, automation states and engagement trends together without turning the screen into a collection of numbers competing for attention.',
    ],
    chapters: [
      {
        title: [
          '01 — Jerarquizar antes de visualizar',
          '01 — Hierarchy before visualization',
        ],
        body: [
          'La estructura modular separa la visión general del detalle. Los widgets permiten organizar métricas relacionadas manteniendo una lectura consistente de la pantalla.',
          'The modular structure separates overview from detail. Widgets organize related metrics while maintaining a consistent way to read the screen.',
        ],
      },
      {
        title: [
          '02 — Un color debe significar algo',
          '02 — Color should mean something',
        ],
        body: [
          'Gráficos y estados comparten un lenguaje de color. La repetición ayuda a reconocer patrones sin reaprender la interfaz en cada módulo.',
          'Charts and states share a color language. Repetition helps users recognize patterns without relearning the interface in every module.',
        ],
      },
      {
        title: [
          '03 — Conservar la claridad en pantallas pequeñas',
          '03 — Preserving clarity on smaller screens',
        ],
        body: [
          'El diseño adapta la distribución a distintos tamaños. La prioridad es mantener legibles las métricas y claras las relaciones entre información, en lugar de reducir todo proporcionalmente.',
          'The layout adapts to different screen sizes. The priority is to preserve readable metrics and clear relationships rather than scale everything down proportionally.',
        ],
      },
    ],
    flow: [
      ['Visión general', 'Overview'],
      ['Comparación', 'Comparison'],
      ['Detalle', 'Detail'],
      ['Decisión', 'Decision'],
    ],
learning: [
      'Una buena visualización no consiste en mostrar más datos. Consiste en hacer visible la relación que permite tomar la siguiente decisión.',
      'Good visualization is not about showing more data. It makes visible the relationship that supports the next decision.',
    ],
  },
  'autotok-poster': {
    context: ['Esta pieza traslada el relato de AutoTok a un formato físico de evento. La atención disponible es breve y el punto de lectura cambia con la distancia, así que la comunicación no podía seguir la densidad de una landing.', 'This piece moves the AutoTok story into a physical event format. Attention is brief and reading distance changes, so the communication could not follow the density of a landing page.'],
    constraints: ['El soporte es físico y se ve primero a distancia, en un entorno con muchas otras señales visuales. El mensaje tenía que funcionar en segundos antes de ofrecer detalles a quien se acercara.', 'The medium is physical and first seen from a distance amid many other visual signals. The message needed to work in seconds before offering detail to someone who came closer.'],
    owned: ['Diseñé la composición, la jerarquía tipográfica, el uso del color y la preparación de la pieza como cartel de gran formato.', 'I designed composition, typographic hierarchy, color use and the piece as a large-format poster.'],
    keyDecisions: ['Construí dos velocidades de lectura: una idea principal grande para atraer la mirada y contenido de apoyo para la lectura próxima. El color une la pieza con la identidad de AutoTok.', 'I built two reading speeds: a large primary idea to catch the eye and supporting content for closer reading. Color connects the piece to AutoTok’s identity.'],
    iterations: ['El contenido se sintetizó para ajustarse a una lectura de evento. La composición equilibró impacto inicial e información secundaria sin convertir el cartel en una pantalla trasladada al papel.', 'Content was condensed for event reading. The composition balanced initial impact and secondary information without turning the poster into a screen moved onto paper.'],
    implementation: ['La ejecución se resolvió como diseño editorial para impresión, atendiendo a escala, contraste y orden de lectura.', 'Execution was treated as editorial design for print, considering scale, contrast and reading order.'],
    shipped: ['Un diseño de cartel de gran formato para presentar AutoTok en contextos de evento.', 'A large-format poster design to introduce AutoTok in event settings.'],
    reflection: ['Cambiar de interfaz a cartel obligó a reducir el mensaje a lo esencial. La distancia y el tiempo de atención se convierten en decisiones concretas de tipografía y composición.', 'Moving from interface to poster required reducing the message to its essentials. Viewing distance and attention time become concrete typography and composition decisions.'],
    headline: [
      'Una idea clara.\nA escala de evento.',
      'One clear idea.\nAt event scale.',
    ],
    category: [
      'Diseño editorial · Identidad visual',
      'Print design · Visual identity',
    ],
    overview: [
      'Una pieza de gran formato para presentar AutoTok en eventos. Tipografía, contraste y síntesis se organizan para comunicar el producto en un entorno lleno de estímulos.',
      'A large-format piece introducing AutoTok at events. Typography, contrast and concise messaging communicate the product in a visually busy environment.',
    ],
    role: [
      'Composición, tipografía y diseño para impresión',
      'Composition, typography and print design',
    ],
    audience: [
      'Visitantes de eventos y ferias',
      'Event and trade show visitors',
    ],
    challenge: [
      'Captar atención a distancia y comunicar el mensaje sin exigir una lectura larga. El cartel tenía que funcionar como primer contacto con el producto.',
      'Capture attention from a distance and communicate the message without requiring a long read. The poster needed to work as a first encounter with the product.',
    ],
    chapters: [
      {
        title: [
          '01 — Diseñar una primera lectura',
          '01 — Designing the first read',
        ],
        body: [
          'La tipografía destacada establece un punto de entrada. El mensaje se sintetiza para que la propuesta principal pueda reconocerse antes de acercarse a la pieza.',
          'Bold typography establishes an entry point. The message is distilled so the main proposition can be recognized before approaching the piece.',
        ],
      },
      {
        title: [
          '02 — Ordenar la información por distancia',
          '02 — Organizing information by distance',
        ],
        body: [
          'La composición equilibra imagen y texto para guiar la mirada. La jerarquía separa el impacto inicial del contenido que se descubre al observar el cartel de cerca.',
          'The composition balances imagery and text to guide the eye. Hierarchy separates the initial impression from the content discovered on closer inspection.',
        ],
      },
      {
        title: [
          '03 — Dar presencia a la marca',
          '03 — Giving the brand presence',
        ],
        body: [
          'El color vibrante conecta la pieza con el universo de AutoTok. El objetivo es conservar reconocimiento y claridad cuando el diseño sale de la pantalla.',
          'Vibrant color connects the piece to AutoTok’s visual world. The goal is to preserve recognition and clarity when the design leaves the screen.',
        ],
      },
    ],
    flow: [
      ['Atención', 'Attention'],
      ['Mensaje', 'Message'],
      ['Detalle', 'Detail'],
      ['Recuerdo', 'Recall'],
    ],
learning: [
      'El diseño impreso obliga a elegir. Cada nivel de información debe tener una función clara en la distancia y el tiempo de lectura disponibles.',
      'Print design demands choices. Each information level needs a clear purpose within the available viewing distance and reading time.',
    ],
  },
  'acera-jku': {
    context: ['ACERA reúne a científicos españoles en Austria. El cartel debía presentar su identidad y objetivos en un contexto de encuentro científico donde conviven lectores de español y alemán.', 'ACERA brings together Spanish scientists in Austria. The poster needed to present its identity and goals at a scientific gathering with Spanish and German readers.'],
    constraints: ['La pieza debía convivir con español y alemán, un contenido institucional denso y una lectura en movimiento durante un evento científico. La claridad en ambos idiomas era parte de la estructura, no un añadido final.', 'The piece had to accommodate Spanish and German, dense institutional content and reading in motion at a scientific event. Clarity in both languages was part of the structure rather than a final add-on.'],
    owned: ['Organicé la información de misión, objetivos y comunidad; definí jerarquía editorial, composición, tipografía y diseño para impresión.', 'I organized mission, objectives and community information, defining editorial hierarchy, composition, typography and print design.'],
    keyDecisions: ['Usé módulos y una jerarquía paralela para que ambas lenguas pudieran recorrerse sin perder orientación. El tratamiento visual contenido deja espacio al contenido científico y a la identidad institucional.', 'I used modules and a parallel hierarchy so either language could be scanned without losing orientation. The restrained visual treatment gives space to scientific content and institutional identity.'],
    iterations: ['La información se reorganizó en niveles de lectura: identidad y misión primero, objetivos y detalles después. Esa estructura responde al modo en que una persona se acerca a un cartel en un encuentro.', 'Information was organized into reading levels: identity and mission first, objectives and detail afterward. That structure reflects how someone approaches a poster at an event.'],
    implementation: ['El resultado es una pieza editorial diseñada para impresión y lectura bilingüe, con atención a escala, espacio y consistencia entre idiomas.', 'The result is an editorial piece designed for print and bilingual reading, with attention to scale, spacing and consistency between languages.'],
    shipped: ['Un cartel ACERA/JKU que presenta la asociación y su actividad en español y alemán.', 'An ACERA/JKU poster introducing the association and its activity in Spanish and German.'],
    reflection: ['La traducción afecta al espacio y al ritmo de una composición. Diseñar la estructura bilingüe desde el inicio evita que una lengua parezca secundaria.', 'Translation changes the space and rhythm of a composition. Designing the bilingual structure from the beginning keeps either language from feeling secondary.'],
    headline: [
      'Conectar conocimiento.\nCruzar idiomas.',
      'Connect knowledge.\nCross languages.',
    ],
    category: [
      'Diseño editorial · Comunicación científica',
      'Print design · Scientific communication',
    ],
    overview: [
      'Un cartel para ACERA, la Asociación de Científicos Españoles en Austria. La pieza presenta su misión, objetivos y público en el contexto de un encuentro científico y multilingüe.',
      'A poster for ACERA, the Association of Spanish Scientists in Austria. The piece introduces its mission, objectives and audience in a scientific, multilingual event context.',
    ],
    role: [
      'Jerarquía editorial, composición y diseño para impresión',
      'Editorial hierarchy, composition and print design',
    ],
    audience: [
      'Comunidad científica hispanohablante y germanohablante',
      'Spanish- and German-speaking scientific communities',
    ],
    challenge: [
      'Presentar información institucional en un espacio limitado sin perder claridad, equilibrio o credibilidad académica. La pieza debía poder leerse a distancia y convivir con dos idiomas.',
      'Present institutional information within limited space without losing clarity, balance or academic credibility. The piece needed to read at a distance and accommodate two languages.',
    ],
    chapters: [
      {
        title: [
          '01 — Una estructura para dos idiomas',
          '01 — One structure for two languages',
        ],
        body: [
          'El contenido en español y alemán se organiza con una jerarquía reconocible. Los módulos permiten encontrar información sin depender de una lectura lineal completa.',
          'Spanish and German content is organized through a recognizable hierarchy. Modules make information findable without requiring a complete linear read.',
        ],
      },
      {
        title: [
          '02 — Claridad con carácter institucional',
          '02 — Clarity with institutional character',
        ],
        body: [
          'La paleta contenida y la tipografía sólida buscan transmitir rigor. El espacio entre bloques ayuda a distinguir misión, objetivos y público sin saturar la pieza.',
          'A restrained palette and strong typography aim to communicate rigor. Space between blocks distinguishes mission, objectives and audience without overwhelming the piece.',
        ],
      },
      {
        title: [
          '03 — Pensar en el contexto del encuentro',
          '03 — Considering the event context',
        ],
        body: [
          'En un evento, la información compite con movimiento y conversaciones. La composición prioriza una primera lectura clara y deja los detalles para una observación más cercana.',
          'At an event, information competes with movement and conversation. The composition prioritizes a clear first read, leaving details for closer inspection.',
        ],
      },
    ],
    flow: [
      ['Identidad', 'Identity'],
      ['Misión', 'Mission'],
      ['Objetivos', 'Objectives'],
      ['Comunidad', 'Community'],
    ],
learning: [
      'El rigor visual puede ser cercano. Una estructura clara facilita que una institución se presente sin convertir su información en una barrera.',
      'Visual rigor can be approachable. Clear structure helps an institution introduce itself without making information a barrier.',
    ],
  },
};
