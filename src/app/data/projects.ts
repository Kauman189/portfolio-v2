export interface Project {
  slug: string;
  featuredRank?: number;
  cardSummary?: readonly [string, string];
  roleSummary?: readonly [string, string];
  ownership?: readonly [string, string];
  statusText?: readonly [string, string];
  title: string;
  titleEs: string;
  shortTitle: string;
  shortTitleEs: string;
  category: string;
  image: string;
  thumbnail: string;
  displayImage: string;
  color: string;
  tools: string[];
  status: string | null;
  externalUrl: string | null;
  imageFit: string;
  repositoryUrl?: string;
  processImages: { src: string; alt: string }[];
}

// Add project photography to processImages; keep original source assets.
export const PROJECTS: Project[] = [
  {
    slug: 'digital-commerce',
    featuredRank: 1,
    title: 'Digital Commerce Platform',
    titleEs: 'Plataforma de comercio digital',
    shortTitle: 'Digital Commerce',
    shortTitleEs: 'Comercio digital',
    category: 'Digital commerce · Production · Confidential',
    cardSummary: [
      'Flujos de compra y pago convertidos en una experiencia de comercio digital lista para producción.',
      'Purchase and payment flows shaped into a production digital commerce experience.',
    ],
    roleSummary: ['Liderazgo de proyecto, diseño de producto e interfaz', 'Project lead, product design and interface implementation'],
    ownership: ['Flujos · UX/UI · Frontend · Entrega', 'Flows · UX/UI · Frontend · Delivery'],
    statusText: ['Producto en producción · Confidencial', 'Production product · Confidential'],
    image: '',
    thumbnail: '',
    displayImage: '',
    color: '#FAFAF8',
    tools: ['Product Design', 'Frontend'],
    status: 'Production',
    externalUrl: null,
    imageFit: 'contain',
    processImages: [],
  },
  {
    slug: 'operations-analytics',
    featuredRank: 2,
    title: 'Operations & Analytics Dashboard',
    titleEs: 'Panel de operaciones y analítica',
    shortTitle: 'Operations & Analytics',
    shortTitleEs: 'Operaciones y analítica',
    category: 'Operations · Analytics · Production · Confidential',
    cardSummary: [
      'Información operativa y métricas organizadas para dar visibilidad al trabajo diario.',
      'Operational information and metrics organized to make daily work visible.',
    ],
    roleSummary: ['Liderazgo de proyecto, diseño de producto e interfaz', 'Project lead, product design and interface implementation'],
    ownership: ['Flujos · UX/UI · Frontend · Entrega', 'Flows · UX/UI · Frontend · Delivery'],
    statusText: ['Producto en producción · Confidencial', 'Production product · Confidential'],
    image: '',
    thumbnail: '',
    displayImage: '',
    color: '#FAFAF8',
    tools: ['Product Design', 'Frontend'],
    status: 'Production',
    externalUrl: null,
    imageFit: 'contain',
    processImages: [],
  },
  {
    slug: 'fynaq',
    featuredRank: 3,
    title: 'Fynaq',
    titleEs: 'Fynaq',
    shortTitle: 'Fynaq',
    shortTitleEs: 'Fynaq',
    category: '0→1 · Business software · Live',
    cardSummary: [
      'Una empresa creada desde cero y soluciones digitales para restaurantes de sushi en uso real.',
      'A company built from scratch, with digital solutions used by sushi restaurants.',
    ],
    roleSummary: ['Dirección de producto, UX/UI y frontend', 'Product direction, UX/UI and frontend'],
    ownership: ['Estrategia · UX/UI · Sistema visual · Frontend', 'Strategy · UX/UI · Visual system · Frontend'],
    statusText: ['Empresa y sistemas en producción', 'Live company and client systems'],
    image: '/assets/images/fynaq-hero.jpg',
    thumbnail: '/assets/images/fynaq-hero.jpg',
    displayImage: '/assets/images/fynaq-hero.jpg',
    color: '#FAFAF8',
    tools: ['Product Design', 'Frontend'],
    status: 'Live',
    externalUrl: 'https://www.fynaq.com/en',
    imageFit: 'contain',
    processImages: [],
  },
  {
    slug: 'altura',
    featuredRank: 5,
    cardSummary: [
      'Concepto autoiniciado para descubrir y reservar espacios de coworking en Valencia.',
      'A self-initiated concept for discovering and booking coworking spaces in Valencia.',
    ],
    roleSummary: ['Investigación de entorno, arquitectura y UX/UI', 'Context research, information architecture and UX/UI'],
    ownership: ['Competencia · Entorno · Wireframes · UI', 'Competitors · Local context · Wireframes · UI'],
    statusText: ['Proyecto conceptual', 'Concept project'],
    title: 'Altura Coworking Experience',
    shortTitle: 'Altura',
    category: 'UX/UI Design · Product Design',
    image: '/assets/images/lemon.png',
    color: '#e8eaca',
    tools: ['Figma', 'FigJam', 'Notion', 'Illustrator'],
    status: 'In progress',
    externalUrl:
      'https://www.behance.net/gallery/236791381/Altura-UX-UI-Project-(In-Progress)',
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/lemon.webp',
    processImages: [],
    displayImage: '/assets/images/optimized/lemon-large.webp',
    titleEs: 'Altura · Experiencia de coworking',
    shortTitleEs: 'Altura',
  },
  {
    slug: 'acera-jku',
    statusText: ['Pieza de archivo · Cartel', 'Archive work · Poster'],
    title: 'ACERA/JKU Scientific Event Poster',
    shortTitle: 'ACERA / JKU',
    category: 'Print Design · Scientific Communication · Event Branding',
    image: '/assets/images/posterJKU.png',
    color: '#f0cd60',
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: null,
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/posterJKU.webp',
    processImages: [],
    displayImage: '/assets/images/optimized/posterJKU-large.webp',
    titleEs: 'ACERA/JKU · Cartel de encuentro científico',
    shortTitleEs: 'ACERA / JKU',
  },
  {
    slug: 'its-time',
    featuredRank: 4,
    cardSummary: [
      'Un sistema interno que sustituye hojas de cálculo para registrar y conciliar tiempo de proyectos europeos.',
      'An internal system replacing spreadsheets for recording and reconciling time on European projects.',
    ],
    roleSummary: ['Diseño y desarrollo completos', 'Sole designer and developer'],
    ownership: ['Requisitos · UX/UI · Frontend · Backend', 'Requirements · UX/UI · Frontend · Backend'],
    statusText: ['Producto interno en producción · JKU Linz', 'Live internal product · JKU Linz'],
    title: 'ITS Time Management System',
    shortTitle: 'ITS Time',
    category: 'UX/UI Design · Interface Design',
    image: '/assets/images/itsTime.png',
    color: '#e5e9ea',
    tools: ['HTML/CSS', 'JavaScript', 'Python', 'Figma', 'Interface Design'],
    status: null,
    externalUrl: null,
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/itsTime.webp',
    processImages: [],
    displayImage: '/assets/images/optimized/itsTime-large.webp',
    titleEs: 'ITS Time · Gestión del tiempo',
    shortTitleEs: 'ITS Time',
  },
  {
    slug: 'autotok-poster',
    statusText: ['Pieza de archivo · Cartel', 'Archive work · Poster'],
    title: 'AutoTok Roll Up Poster',
    shortTitle: 'AutoTok — Print',
    category: 'Print Design · Branding',
    image: '/assets/images/posterAutotok.png',
    color: '#cebcf4',
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: 'https://autotok.net',
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/posterAutotok.webp',
    processImages: [],
    displayImage: '/assets/images/optimized/posterAutotok-large.webp',
    titleEs: 'AutoTok · Diseño editorial',
    shortTitleEs: 'AutoTok / Cartel',
  },
  {
    slug: 'autotok-web',
    statusText: ['Pieza de archivo · Web en desarrollo', 'Archive work · Website in progress'],
    title: 'AutoTok Landing Page',
    shortTitle: 'AutoTok — Web',
    category: 'Product Design · Team Leadership',
    image: '/assets/images/landing.png',
    color: '#d5cdf8',
    tools: ['Angular', 'TypeScript', 'Team Leadership', 'Figma'],
    status: 'In progress',
    externalUrl: 'https://autotok.net',
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/landing.webp',
    processImages: [],
    repositoryUrl: 'https://github.com/autotok',
    displayImage: '/assets/images/optimized/landing-large.webp',
    titleEs: 'AutoTok · Sitio web',
    shortTitleEs: 'AutoTok / Web',
  },
  {
    slug: 'autotok-dashboard',
    statusText: ['Pieza de archivo · Interfaz', 'Archive work · Interface'],
    title: 'AutoTok Analytics Dashboard',
    shortTitle: 'AutoTok — Dashboard',
    category: 'Data Visualization · Dashboard Design',
    image: '/assets/images/dashboard.png',
    color: '#d8def1',
    tools: ['Angular', 'TypeScript', 'Symfony', 'API Platform', 'Chart.js'],
    status: null,
    externalUrl: 'https://dashboard.autotok.net',
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/dashboard.webp',
    processImages: [],
    repositoryUrl: 'https://github.com/autotok',
    displayImage: '/assets/images/optimized/dashboard-large.webp',
    titleEs: 'AutoTok · Panel de control',
    shortTitleEs: 'AutoTok / Panel',
  },
];

export const SELECTED_PROJECTS = PROJECTS.filter((project) => project.featuredRank)
  .sort((a, b) => (a.featuredRank ?? 0) - (b.featuredRank ?? 0));

const archiveOrder = ['autotok-web', 'autotok-dashboard', 'autotok-poster', 'acera-jku'];
export const ARCHIVE_PROJECTS = archiveOrder.map((slug) => PROJECTS.find((project) => project.slug === slug)!);
