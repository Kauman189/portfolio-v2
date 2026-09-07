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
  facts: { value: string; label: Bilingual }[];
  metric: Bilingual;
  measure: Bilingual;
  detail: Bilingual;
  learning: Bilingual;
}
export const CASE_STUDIES: Record<string, CaseStudy> = {
  altura: {
    headline: [
      'Un lugar para trabajar.\nUn motivo para quedarse.',
      'A place to work.\nA reason to stay.',
    ],
    category: [
      'Diseño UX/UI · Diseño de producto',
      'UX/UI design · Product design',
    ],
    overview: [
      'Una experiencia de coworking pensada para jóvenes profesionales en Valencia. El proyecto reúne reservas, espacios y comunidad en un producto digital con la calidez del Mediterráneo.',
      'A coworking experience for young professionals in Valencia. The project brings bookings, spaces and community together in a digital product shaped by Mediterranean warmth.',
    ],
    role: [
      'Investigación UX, arquitectura de información y diseño de interfaz',
      'UX research, information architecture and interface design',
    ],
    audience: [
      'Estudiantes y profesionales freelance',
      'Students and freelance professionals',
    ],
    challenge: [
      'Reservar un puesto no debería sentirse como una gestión administrativa. Los flujos complejos, la falta de imágenes del ambiente y la desconexión entre miembros eran los problemas que el diseño debía abordar.',
      'Booking a desk should not feel like administrative work. Complex flows, limited atmosphere previews and disconnected members were the problems the design needed to address.',
    ],
    chapters: [
      {
        title: [
          '01 — Dos formas de habitar el espacio',
          '01 — Two ways to use the space',
        ],
        body: [
          'El trabajo de investigación distinguió dos perfiles: estudiantes que buscan flexibilidad y profesionales freelance que valoran las conexiones. Esta diferencia orientó las personas, la arquitectura de información y la relación entre reservar y descubrir la comunidad.',
          'Research distinguished two profiles: students seeking flexibility and freelancers who value professional connections. This informed the personas, information architecture and the relationship between booking and discovering the community.',
        ],
      },
      {
        title: [
          '02 — Primero el recorrido, después la pantalla',
          '02 — The journey before the screen',
        ],
        body: [
          'La estructura parte de descubrir un espacio, entender qué ofrece y reservarlo. Los wireframes permiten trabajar esa secuencia sin que la decoración distraiga de las decisiones. La gestión de reservas y los eventos completan el ecosistema.',
          'The structure moves from discovering a space to understanding its offering and booking it. Wireframes make it possible to work on that sequence without decoration distracting from decisions. Reservation management and events complete the ecosystem.',
        ],
      },
      {
        title: [
          '03 — Traducir Valencia a un sistema',
          '03 — Translating Valencia into a system',
        ],
        body: [
          'La dirección visual combina tonos neutros, luz natural y acentos terracota. Tipografía, color e iconografía se reúnen en un sistema para transmitir calma y pertenencia de forma consistente, desde la primera exploración hasta la reserva.',
          'The visual direction combines neutral tones, natural light and terracotta accents. Type, color and iconography form a system that communicates calm and belonging consistently, from first exploration through booking.',
        ],
      },
    ],
    flow: [
      ['Descubrir', 'Discover'],
      ['Comparar', 'Compare'],
      ['Reservar', 'Book'],
      ['Conectar', 'Connect'],
    ],
    facts: [
      {
        value: '02',
        label: ['perfiles de usuario', 'user profiles'],
      },
      {
        value: '01',
        label: ['sistema visual', 'visual system'],
      },
    ],
    metric: ['Conversión de reserva', 'Booking conversion'],
    measure: [
      'Reservas completadas ÷ reservas iniciadas × 100. Sería la medida principal para evaluar el recorrido; faltan datos de uso para publicar un resultado.',
      'Completed bookings ÷ started bookings × 100. This would be the main measure for the journey; usage data is needed before publishing a result.',
    ],
    detail: [
      'Paleta, tipografía y referencias mediterráneas del sistema de diseño.',
      'Palette, typography and Mediterranean references from the design system.',
    ],
    learning: [
      'El valor del producto está tanto en resolver una tarea como en anticipar la sensación de estar allí. La comunidad debe aparecer en el recorrido, no quedar relegada a una sección secundaria.',
      'The value of the product lies in both solving a task and anticipating how it feels to be there. Community belongs in the journey, rather than in a secondary section.',
    ],
  },
  'its-time': {
    headline: [
      'Menos fricción.\nMás claridad sobre el tiempo.',
      'Less friction.\nMore clarity around time.',
    ],
    category: [
      'Diseño UX/UI · Diseño de interfaz',
      'UX/UI design · Interface design',
    ],
    overview: [
      'Un sistema para JKU ITS que permite registrar tiempo por paquete de trabajo, visualizar el consumo y realizar la conciliación mensual. El foco: hacer comprensible un proceso denso.',
      'A system for JKU ITS to record time by Work Package, visualize consumption and reconcile monthly reports. The focus: making a dense process understandable.',
    ],
    role: [
      'Diseño de interacción, interfaz e implementación',
      'Interaction design, interface design and implementation',
    ],
    audience: [
      'Personal y responsables de proyectos de JKU ITS',
      'JKU ITS employees and project managers',
    ],
    challenge: [
      'El sistema tenía que soportar múltiples registros diarios y comparaciones entre tiempo planificado y consumido sin añadir incertidumbre. La precisión de los datos dependía también de la claridad de la interfaz.',
      'The system needed multiple daily entries and planned-versus-consumed time comparisons without adding uncertainty. Data accuracy also depended on interface clarity.',
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
    ],
    flow: [
      ['Registrar', 'Record'],
      ['Revisar', 'Review'],
      ['Comparar', 'Compare'],
      ['Exportar', 'Export'],
    ],
    facts: [
      {
        value: '03',
        label: ['flujos principales', 'core workflows'],
      },
      {
        value: '01',
        label: ['revisión antes de exportar', 'review before export'],
      },
    ],
    metric: ['Registros sin correcciones', 'Entries without corrections'],
    measure: [
      'Registros que no requieren corrección ÷ registros totales × 100. También evaluaría el tiempo necesario para completar una entrada. No hay una medición publicada.',
      'Entries requiring no corrections ÷ total entries × 100. I would also evaluate time to complete an entry. No measured result is published.',
    ],
    detail: [
      'Jerarquía visual y organización de la información en la interfaz.',
      'Visual hierarchy and information organization in the interface.',
    ],
    learning: [
      'En una herramienta de trabajo, la confianza se construye con acciones predecibles, estados visibles y mensajes en el momento adecuado.',
      'In a work tool, confidence comes from predictable actions, visible states and messages at the right moment.',
    ],
  },
  'autotok-web': {
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
    facts: [
      {
        value: 'UPV',
        label: ['equipo de estudiantes', 'student team'],
      },
      {
        value: '01',
        label: ['visión compartida', 'shared direction'],
      },
    ],
    metric: ['Conversión de la landing', 'Landing page conversion'],
    measure: [
      'Acciones principales completadas ÷ visitas elegibles × 100. La definición exacta de la acción y el periodo de medida deben fijarse antes de comparar resultados.',
      'Completed primary actions ÷ eligible visits × 100. The exact action and measurement period must be defined before comparing results.',
    ],
    detail: [
      'Propuesta de valor y lenguaje de la landing de AutoTok.',
      'Value proposition and visual language of the AutoTok landing page.',
    ],
    learning: [
      'Una web de producto también es una herramienta para alinear al equipo: obliga a expresar con claridad qué se ofrece, a quién y por qué importa.',
      'A product website also aligns the team: it forces clarity about what is offered, who it is for and why it matters.',
    ],
  },
  'autotok-dashboard': {
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
    facts: [
      {
        value: '03',
        label: ['familias de información', 'information families'],
      },
      {
        value: '01',
        label: ['lenguaje de color', 'color language'],
      },
    ],
    metric: ['Éxito al encontrar una métrica', 'Success finding a metric'],
    measure: [
      'Tareas de consulta completadas correctamente ÷ intentos × 100. Un test con tareas representativas permitiría medir claridad y tiempo de localización.',
      'Correctly completed lookup tasks ÷ attempts × 100. A test using representative tasks would measure clarity and time to find information.',
    ],
    detail: [
      'Módulos, gráficos y estados del dashboard.',
      'Dashboard modules, charts and states.',
    ],
    learning: [
      'Una buena visualización no consiste en mostrar más datos. Consiste en hacer visible la relación que permite tomar la siguiente decisión.',
      'Good visualization is not about showing more data. It makes visible the relationship that supports the next decision.',
    ],
  },
  'autotok-poster': {
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
    facts: [
      {
        value: '01',
        label: ['pieza de gran formato', 'large-format piece'],
      },
      {
        value: '03',
        label: ['niveles de lectura', 'reading levels'],
      },
    ],
    metric: ['Comprensión del mensaje', 'Message comprehension'],
    measure: [
      'Personas que identifican la propuesta tras una exposición breve ÷ participantes × 100. Es una propuesta de evaluación, no un resultado medido.',
      'People identifying the proposition after brief exposure ÷ participants × 100. This is a proposed evaluation, not a measured result.',
    ],
    detail: [
      'Detalle de tipografía, contraste y jerarquía en el cartel.',
      'Detail of typography, contrast and hierarchy in the poster.',
    ],
    learning: [
      'El diseño impreso obliga a elegir. Cada nivel de información debe tener una función clara en la distancia y el tiempo de lectura disponibles.',
      'Print design demands choices. Each information level needs a clear purpose within the available viewing distance and reading time.',
    ],
  },
  'acera-jku': {
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
    facts: [
      {
        value: '02',
        label: ['idiomas: español y alemán', 'languages: Spanish and German'],
      },
      {
        value: '01',
        label: ['estructura editorial', 'editorial structure'],
      },
    ],
    metric: ['Localización de información', 'Information findability'],
    measure: [
      'Participantes que localizan un dato solicitado ÷ participantes × 100. La comparación por idioma y distancia permitiría evaluar la jerarquía. No se dispone de resultados.',
      'Participants finding a requested detail ÷ participants × 100. Comparing by language and viewing distance would evaluate hierarchy. Results are not available.',
    ],
    detail: [
      'Organización bilingüe y jerarquía del contenido científico.',
      'Bilingual organization and hierarchy of scientific content.',
    ],
    learning: [
      'El rigor visual puede ser cercano. Una estructura clara facilita que una institución se presente sin convertir su información en una barrera.',
      'Visual rigor can be approachable. Clear structure helps an institution introduce itself without making information a barrier.',
    ],
  },
};
