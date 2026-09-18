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
  'digital-commerce': {
    context: ['El proyecto reunía una experiencia de compra orientada al público y herramientas para continuar la operación después de cada transacción. Mi trabajo abarcó decisiones de producto, diseño y la capa de interfaz, dentro de una entrega en equipo que llegó a producción.', 'The project combined a customer-facing purchase experience with tools for continuing the operation after each transaction. My work covered product decisions, design and the interface layer within a team delivery that reached production.'],
    headline: ['Del flujo de compra al producto real.', 'From purchase flow to live product.'],
    category: ['Comercio digital · Producción · Confidencial', 'Digital commerce · Production · Confidential'],
    overview: [
      'Una plataforma de comercio digital en producción. Lideré el proyecto y el diseño, y trabajé en la implementación de la interfaz a lo largo de los flujos de compra, pedidos y pagos.',
      'A digital commerce platform in production. I led the project and design, and worked on interface implementation across purchase, order and payment flows.',
    ],
    role: ['Liderazgo de proyecto, diseño de producto e implementación de interfaz', 'Project lead, product design and interface implementation'],
    audience: ['Personas que compran y equipos que gestionan la operación', 'Customers and the teams managing operations'],
    team: ['Trabajo en equipo; la integración backend especializada de pagos la realizaron otros desarrolladores.', 'Team project; other developers built the specialized payment backend integration.'],
    constraints: ['Había que coordinar una experiencia continua entre selección, reserva, pago y pedido, mientras una parte crítica del pago dependía de una integración backend especializada. La confidencialidad limita lo que puedo publicar sobre pantallas, reglas y datos.', 'The experience had to stay coherent across selection, reservation, payment and order while a critical part of payment depended on a specialist backend integration. Confidentiality limits what I can publish about screens, rules and data.'],
    owned: ['Lideré el proyecto y la dirección de diseño. Me encargué de la estructura de los recorridos, la UX/UI y la implementación de la interfaz visible; coordiné los puntos de contacto con el backend de pagos desarrollado por el equipo.', 'I led the project and design direction. I owned journey structure, UX/UI and visible interface implementation, coordinating the touchpoints with the payment backend built by the team.'],
    keyDecisions: ['Traté compra, reserva y pedido como una misma secuencia de producto. La información de cada etapa tenía que explicar qué acababa de suceder y qué venía después, especialmente cuando la acción pasaba por el pago.', 'I treated purchase, reservation and order as one product sequence. Information at each stage needed to explain what had just happened and what came next, especially where the action passed through payment.'],
    flowDetail: ['El recorrido conecta exploración y selección con reserva o compra, confirmación de pago y seguimiento del pedido. El diseño también contempla la información que necesita el equipo para continuar la operación después de la acción del cliente.', 'The journey connects discovery and selection with reservation or purchase, payment confirmation and order follow-up. The design also considers the information the team needs to continue the operation after the customer acts.'],
    iterations: ['El alcance pasó de resolver pantallas individuales a comprobar la continuidad entre estados del recorrido. Las decisiones de interfaz se ajustaron al conectar las acciones del cliente con pagos y gestión posterior; no publico aquí versiones internas concretas.', 'The scope moved from individual screens to continuity across journey states. Interface decisions evolved as customer actions were connected to payments and subsequent management; I do not publish specific internal versions here.'],
    designSystem: ['La interfaz necesitaba patrones coherentes para formularios, estados, confirmaciones y vistas de pedido. Esa consistencia ayuda a que el usuario reconozca qué puede hacer y a que el equipo mantenga las distintas partes del producto.', 'The interface needed consistent patterns for forms, states, confirmations and order views. That consistency helps customers recognize available actions and helps the team maintain the different parts of the product.'],
    implementation: ['Mi trabajo continuó del diseño a la construcción de la interfaz. Coordiné comportamiento y estados visibles con quienes desarrollaron la integración de pagos, manteniendo clara la separación entre mi aportación y ese backend especializado.', 'My work continued from design into interface development. I coordinated visible behavior and states with the developers of the payment integration, keeping my contribution distinct from that specialist backend.'],
    shipped: ['Una plataforma de comercio digital en producción con flujos conectados de compra, reservas, pagos y pedidos.', 'A live digital commerce platform with connected purchase, reservation, payment and order flows.'],
    reflection: ['En un comercio real, la claridad entre pasos importa tanto como cada pantalla. Diseñar el recorrido completo permitió tratar la confirmación y la gestión posterior como parte de la experiencia de compra.', 'In real commerce, clarity between steps matters as much as each screen. Designing the whole journey made confirmation and subsequent management part of the purchase experience.'],
    challenge: [
      'Una compra no termina al pulsar «pagar»: la persona necesita avanzar con claridad entre selección, reserva, pago y pedido, mientras el equipo mantiene el control de la operación. El producto debía conectar esos momentos sin exponer la complejidad técnica al comprador.',
      'A purchase does not end at “pay”: customers need clarity across selection, reservation, payment and order, while the team needs control of the operation. The product had to connect those moments without passing technical complexity on to the buyer.',
    ],
    chapters: [
      { title: ['01 — Pensar en el recorrido completo', '01 — Consider the full journey'], body: ['Lideré el proyecto y el diseño más allá de una pantalla de compra. El alcance incluía selección, reservas, pagos y pedidos; por eso el trabajo de interfaz debía contemplar la continuidad entre cada paso y la gestión posterior.', 'I led project and design work beyond a single checkout screen. The scope included selection, reservations, payments and orders, so the interface work had to account for continuity between each step and the work that followed.'] },
      { title: ['02 — Separar responsabilidades técnicas', '02 — Separate technical responsibilities'], body: ['Trabajé en la experiencia y su implementación, coordinándola con la integración backend especializada de pagos que construyeron otros desarrolladores. Esa división importa: mi responsabilidad cubría el producto y su interfaz, no atribuirme un backend ajeno.', 'I worked on the experience and interface implementation alongside a specialized payment backend built by other developers. That split matters: I owned the product and its interface work, while the specialist backend belonged to the team.'] },
      { title: ['03 — Llegar a producción', '03 — Ship the product'], body: ['La entrega reunió diseño e implementación en un producto de comercio digital operativo. Las pantallas y datos internos no se publican aquí; el alcance puede explicarse con más detalle en privado.', 'Design and implementation came together in a working digital commerce product. Internal screens and data are not published here; I can explain the scope in more detail privately.'] },
    ],
    flow: [],
    outcome: ['La plataforma y sus flujos de comercio están en producción.', 'The platform and its commerce flows are in production.'],
    privateNote: ['Las pantallas del producto no son públicas. Puedo enseñarlas y explicar el trabajo en una conversación privada.', 'Product screens are not public. I can show them and discuss the work in a private conversation.'],
  },
  'operations-analytics': {
    context: ['El panel forma parte de la misma realidad operativa que la experiencia de comercio, pero está pensado para quienes supervisan y resuelven el trabajo interno. Reunir actividad, métricas e incidencias exigía definir una lectura común para información de naturaleza distinta.', 'The dashboard belongs to the same operational reality as the commerce experience, but serves the people supervising and resolving internal work. Bringing together activity, metrics and issues required a shared reading structure for different kinds of information.'],
    headline: ['Hacer visible la operación.', 'Making operations visible.'],
    category: ['Operaciones y analítica · Producción · Confidencial', 'Operations and analytics · Production · Confidential'],
    overview: [
      'Un panel en producción para reunir información operativa y métricas. Lideré el proyecto y el diseño y participé en la implementación de la interfaz.',
      'A production dashboard bringing together operational information and metrics. I led the project and design and worked on interface implementation.',
    ],
    role: ['Liderazgo de proyecto, diseño de producto e implementación de interfaz', 'Project lead, product design and interface implementation'],
    audience: ['Equipos que supervisan actividad y gestionan incidencias', 'Teams monitoring activity and handling issues'],
    team: ['Proyecto desarrollado en equipo, con liderazgo de proyecto y diseño a mi cargo.', 'Team project, with project and design leadership under my responsibility.'],
    constraints: ['La información procede de áreas con ritmos y necesidades distintos: compras, reservas, pagos, pedidos e incidencias. El panel debía permitir lectura rápida y acceso a detalle sin perder el contexto. Las pantallas y datos operativos son confidenciales.', 'Information comes from areas with different rhythms and needs: purchases, reservations, payments, orders and issues. The dashboard needed to support a quick read and access to detail without losing context. Screens and operational data are confidential.'],
    owned: ['Lideré el proyecto y el diseño del panel: estructura de información, jerarquía de métricas, recorridos operativos e implementación de la interfaz en colaboración con el equipo.', 'I led the dashboard project and design: information structure, metric hierarchy, operational journeys and interface implementation in collaboration with the team.'],
    keyDecisions: ['Organicé la experiencia alrededor de las preguntas de la operación: qué ocurre, qué ha cambiado y qué requiere atención. Las métricas debían aportar contexto a pedidos e incidencias, no competir con ellos por espacio.', 'I organized the experience around operational questions: what is happening, what has changed and what needs attention. Metrics needed to give context to orders and issues rather than compete with them for space.'],
    flowDetail: ['La lectura comienza con una visión de actividad; desde allí se puede entrar en compras, reservas, pagos o pedidos y llegar a las incidencias que requieren seguimiento. La estructura conserva el vínculo entre resumen y acción.', 'The read begins with an activity overview; from there, people can move into purchases, reservations, payments or orders and reach issues that need follow-up. The structure preserves the link between summary and action.'],
    iterations: ['El relato del panel evolucionó desde reunir datos hasta ordenar tareas y prioridades. Ese cambio de enfoque dio más peso a estados, excepciones y continuidad del trabajo; no atribuyo pruebas o ciclos concretos que no puedo documentar públicamente.', 'The dashboard direction evolved from gathering data to organizing tasks and priorities. That shift gave more weight to states, exceptions and work continuity; I do not claim specific tests or cycles I cannot document publicly.'],
    designSystem: ['Se trabajaron patrones de tabla, filtros, estados y tarjetas de resumen para que tipos distintos de información conservaran una lectura común. El objetivo era que nuevas vistas pudieran encajar sin reinventar la interacción.', 'Table, filter, state and summary-card patterns gave different information types a shared reading language. The aim was for additional views to fit without reinventing interaction.'],
    implementation: ['Participé en convertir la estructura diseñada en una interfaz funcional, revisando cómo se presentan los estados y cómo se pasa del resumen al detalle. El desarrollo se realizó en equipo.', 'I helped turn the designed structure into a working interface, reviewing how states appear and how people move from overview to detail. Development was collaborative.'],
    shipped: ['Un panel en producción que reúne actividad operativa, métricas y seguimiento de incidencias.', 'A live dashboard bringing together operational activity, metrics and issue follow-up.'],
    reflection: ['Un dashboard es útil cuando ayuda a tomar la siguiente decisión. La jerarquía visual debía hacer comprensible la actividad y dar una ruta clara hacia lo que necesita atención.', 'A dashboard is useful when it helps someone make the next decision. Visual hierarchy had to make activity understandable and give a clear path to what needs attention.'],
    challenge: [
      'El equipo operativo necesita leer la actividad y actuar sobre ella. Compras, reservas, pagos, pedidos, métricas e incidencias aportan información distinta; el reto era darles una estructura de trabajo, no solo reunir cifras en una pantalla.',
      'Operations teams need to read activity and act on it. Purchases, reservations, payments, orders, metrics and issues each carry different information; the challenge was to give them a workable structure, not simply collect numbers on one screen.',
    ],
    chapters: [
      { title: ['01 — Una audiencia distinta', '01 — A different audience'], body: ['Este caso se centra en quienes gestionan la operación, no en la persona que compra. Esa diferencia cambia las preguntas de diseño: qué está pasando, qué requiere atención y dónde continuar el trabajo.', 'This case focuses on the people managing operations rather than the customer buying. That changes the design questions: what is happening, what needs attention and where work continues.'] },
      { title: ['02 — Datos con contexto operativo', '02 — Data in operational context'], body: ['Lideré la organización de flujos e información para que métricas, pedidos e incidencias pudieran consultarse en el contexto del trabajo diario. La jerarquía debía servir tanto a la lectura como a la acción.', 'I led the organization of flows and information so metrics, orders and issues could be reviewed in the context of day-to-day work. The hierarchy needed to support both reading and action.'] },
      { title: ['03 — De diseño a interfaz funcional', '03 — From design to working interface'], body: ['Mi participación siguió durante la implementación de la interfaz y la entrega del panel. El producto está en producción; por confidencialidad, aquí no se muestran pantallas ni datos reales.', 'My involvement continued through interface implementation and dashboard delivery. The product is in production; confidentiality prevents me from showing real screens or data here.'] },
    ],
    flow: [],
    outcome: ['El panel está en producción como herramienta para consultar la actividad operativa.', 'The dashboard is in production as a tool for reviewing operational activity.'],
    privateNote: ['Las pantallas del producto no son públicas. Puedo enseñarlas y explicar el trabajo en una conversación privada.', 'Product screens are not public. I can show them and discuss the work in a private conversation.'],
  },
  fynaq: {
    context: ['Fynaq empezó como una empresa creada desde cero para diseñar y construir soluciones digitales. La web pública presenta la matriz y su oferta; los sistemas para restaurantes de sushi son entregas para clientes dentro de esa actividad, con uso operativo continuado.', 'Fynaq began as a company built from scratch to design and develop digital solutions. The public website presents the parent company and its offer; sushi restaurant systems are client deliveries within that work, with ongoing operational use.'],
    headline: ['De cero a sistemas en uso.', 'From zero to systems in use.'],
    category: ['0→1 · Software para empresas · En producción', '0→1 · Business software · Live'],
    overview: [
      'Creé Fynaq desde cero como matriz para desarrollar productos y servicios digitales. Definí su dirección de producto, diseñé y construí su web y trabajé en soluciones para restaurantes de sushi junto a un compañero de backend.',
      'I built Fynaq from scratch as the parent company for digital products and services. I shaped its product direction, designed and built its website, and worked on solutions for sushi restaurants with a backend teammate.',
    ],
    role: ['Dirección de producto, UX/UI, sistema visual y frontend', 'Product direction, UX/UI, visual system and frontend'],
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
      { title: ['01 — Definir qué es Fynaq', '01 — Define what Fynaq is'], body: ['Partí de una empresa nueva, no de un encargo de rediseño. Trabajé su dirección, su sistema visual y la forma de explicar software, webs y sistemas conectados para empresas.', 'I started with a new company, not a website redesign brief. I shaped its direction, visual system and the way it explains connected software, websites and systems for businesses.'] },
      { title: ['02 — Construir la capa pública', '02 — Build the public layer'], body: ['Diseñé la estructura y la interfaz de la web y desarrollé el frontend que está publicado. La captura de este caso corresponde a esa web real.', 'I designed the structure and interface of the website and developed the live frontend. The image in this case is a screenshot of that real website.'] },
      { title: ['03 — Soluciones para restaurantes de sushi', '03 — Solutions for sushi restaurants'], body: ['El trabajo continuó en sistemas para restaurantes de sushi con usuarios y actividad operativa diarios. Mi responsabilidad estuvo en la dirección de producto, UX/UI y frontend; mi compañero desarrolló el backend.', 'The work continued in systems for sushi restaurants with daily users and operational activity. I owned product direction, UX/UI and frontend; my teammate developed the backend.'] },
      { title: ['04 — Web y operación conectadas', '04 — Connect website and operations'], body: ['La propuesta pública de Fynaq une la capa visible con los procesos internos. Este caso muestra por qué la web no se diseñó como una pieza aislada: debía sostener una oferta de software que también llega a operaciones reales.', 'Fynaq’s public proposition connects the visible layer with internal processes. This case shows why the website was not treated as an isolated piece: it needed to support a software offer that extends into real operations.'] },
    ],
    flow: [],
    outcome: ['La web y los sistemas para clientes están en producción y forman parte de operaciones reales.', 'The website and client systems are live and support real operations.'],
    privateNote: ['La imagen muestra la web pública de Fynaq. Las interfaces de los sistemas para clientes pueden verse en privado durante una llamada.', 'The image shows Fynaq’s public website. Client system interfaces can be reviewed privately on a call.'],
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
  'its-time': {
    context: ['En JKU ITS, el registro y la conciliación de tiempo para proyectos europeos dependían de hojas de Excel y cálculos manuales. Diseñé y desarrollé un sistema que reúne el registro diario, las reglas laborales y la revisión mensual en un único flujo de trabajo.', 'At JKU ITS, time recording and reconciliation for European projects depended on Excel sheets and manual calculations. I designed and developed a system bringing daily entries, working rules and monthly review into one workflow.'],
    team: ['Diseñé y desarrollé el sistema completo. El personal y los responsables de proyectos de JKU ITS aportaron el contexto operativo de uso.', 'I designed and built the full system. JKU ITS staff and project managers provided the operational context for its use.'],
    constraints: ['Los registros debían ajustarse a paquetes de trabajo de proyectos europeos, horarios individuales, vacaciones pagadas y cierres mensuales. Un error en un dato podía afectar la conciliación; por eso las reglas debían ser visibles antes de exportar.', 'Entries had to fit European project Work Packages, individual schedules, paid leave and monthly close. A data error could affect reconciliation, so rules needed to be visible before export.'],
    owned: ['Fui responsable del diseño y del desarrollo completo, desde modelar los flujos y la interfaz hasta implementar frontend y backend. También traduje las reglas del proceso anterior en un sistema de uso cotidiano.', 'I owned design and full development, from modeling flows and interface to implementing frontend and backend. I also translated the rules of the previous process into a system for everyday use.'],
    keyDecisions: ['Puse la entrada diaria en el centro y llevé las comprobaciones al momento de registrar, en lugar de dejar todos los problemas para el cierre mensual. La visualización del tiempo previsto frente al registrado ayuda a detectar diferencias antes de preparar informes.', 'I centered the daily entry and brought checks into the moment of recording instead of leaving every issue until monthly close. Showing planned against recorded time helps people spot differences before preparing reports.'],
    flowDetail: ['Cada persona registra tiempo por paquete de trabajo según su horario. El sistema contempla ausencias pagadas, permite revisar el avance y reúne la información para conciliar y preparar informes de proyectos europeos.', 'Each person records time against a Work Package according to their schedule. The system accounts for paid leave, supports progress review and brings information together for reconciliation and European project reporting.'],
    iterations: ['El cambio principal fue pasar de fórmulas y cálculos manuales en Excel a registros guiados, validaciones y revisión dentro del producto. La estructura se amplió para abarcar horarios diferentes y vacaciones pagadas sin sacar esos casos del flujo.', 'The main change was moving from manual Excel formulas and calculations to guided entries, validation and in-product review. The structure expanded to cover different schedules and paid leave without taking those cases out of the flow.'],
    designSystem: ['Usé patrones consistentes para entradas, edición en línea, estados, tarjetas de progreso y mensajes de validación. La repetición de esos componentes hace más predecible una tarea que se realiza muchas veces.', 'I used consistent patterns for entries, inline editing, states, progress cards and validation messages. Repeating those components makes a frequently performed task more predictable.'],
    implementation: ['Desarrollé tanto frontend como backend, conectando el modelo de datos de tiempo y paquetes con las pantallas de registro, revisión y conciliación. Esa continuidad entre diseño y código permitió adaptar la interfaz a las reglas reales del proceso.', 'I developed both frontend and backend, connecting the time and Work Package data model to recording, review and reconciliation screens. That continuity between design and code let the interface reflect the real process rules.'],
    shipped: ['Un sistema completo en producción para el registro de tiempo y la conciliación de proyectos europeos en JKU ITS.', 'A complete live system for time recording and European project reconciliation at JKU ITS.'],
    reflection: ['El proyecto mostró cuánto esfuerzo se escondía en las hojas de cálculo. Convertir reglas y excepciones en pasos visibles hizo que el trabajo diario y la revisión mensual compartieran una fuente de información.', 'The project exposed how much work had been hidden in spreadsheets. Turning rules and exceptions into visible steps gave daily work and monthly review a shared source of information.'],
    headline: [
      'Menos fricción.\nMás claridad sobre el tiempo.',
      'Less friction.\nMore clarity around time.',
    ],
    category: [
      'Producto interno · JKU Linz · En producción',
      'Internal product · JKU Linz · Live',
    ],
    overview: [
      'Diseñé y desarrollé un sistema de JKU ITS para registrar tiempo por paquete de trabajo y conciliar informes de proyectos europeos. Sustituyó un proceso anterior basado en hojas de Excel.',
      'I designed and built a JKU ITS system for recording time by Work Package and reconciling European project reports. It replaced a process previously handled in Excel spreadsheets.',
    ],
    role: [
      'Diseño y desarrollo completos, frontend y backend',
      'Sole designer and developer, frontend and backend',
    ],
    audience: [
      'Personal y responsables de proyectos de JKU ITS',
      'JKU ITS employees and project managers',
    ],
    challenge: [
      'El equipo calculaba y conciliaba horas en Excel. El nuevo sistema debía cubrir paquetes de trabajo, horarios distintos, vacaciones pagadas y revisiones mensuales dentro de las exigencias de los proyectos europeos.',
      'The team calculated and reconciled hours in Excel. The new system needed to cover Work Packages, different schedules, paid leave and monthly reviews within the requirements of European projects.',
    ],
    chapters: [
      {
        title: [
          '01 — La entrada diaria como punto de partida',
          '01 — Starting with the daily entry',
        ],
        body: [
          'La captura se organiza alrededor de acciones pequeñas y repetibles. La edición en línea evita saltos innecesarios entre pantallas y mantiene el registro en su contexto.',
          'Capture is organized around small, repeatable actions. Inline editing avoids unnecessary jumps between screens and keeps each entry in context.',
        ],
      },
      {
        title: [
          '02 — Hacer visible lo que queda',
          '02 — Making remaining time visible',
        ],
        body: [
          'Tarjetas y barras de progreso comparan el tiempo previsto con el real. Una jerarquía consistente permite leer la situación de cada paquete de trabajo sin reconstruir mentalmente una tabla completa.',
          'Cards and progress bars compare planned and actual time. A consistent hierarchy makes each Work Package understandable without mentally reconstructing an entire table.',
        ],
      },
      {
        title: [
          '03 — Revisar antes de exportar',
          '03 — Reviewing before export',
        ],
        body: [
          'Las validaciones se muestran antes de guardar y los informes pasan por un paso de revisión. La intención es prevenir errores cuando aún son fáciles de corregir, en lugar de explicarlos al final del proceso.',
          'Validation appears before saving, and reports pass through a review step. The intent is to prevent mistakes while they are still easy to correct rather than explain them at the end.',
        ],
      },
      {
        title: [
          '04 — Las reglas del trabajo real',
          '04 — Rules from real working life',
        ],
        body: [
          'El sistema debía contemplar horarios diferentes y vacaciones pagadas además de los registros por paquete de trabajo. Estos casos importan porque la conciliación mensual tiene que reflejar el tiempo real sin volver a cálculos manuales en Excel.',
          'The system needed to account for different schedules and paid leave alongside Work Package entries. Those cases matter because monthly reconciliation has to reflect actual time without returning to manual Excel calculations.',
        ],
      },
    ],
    flow: [
      ['Registrar', 'Record'],
      ['Revisar', 'Review'],
      ['Comparar', 'Compare'],
      ['Exportar', 'Export'],
    ],
outcome: ['El sistema completo está en producción y se usa actualmente para proyectos europeos en JKU ITS.', 'The complete system is in production and currently used for European projects at JKU ITS.'],
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
