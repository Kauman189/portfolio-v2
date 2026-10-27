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
  displayImage: string;
  color: string;
  tools: string[];
  status: string | null;
  externalUrl: string | null;
  imageFit: string;
  repositoryUrl?: string;
  imageLayout?: 'screen' | 'phone';
  designUrl?: string;
  processImages: { src: string; alt: string; caption?: readonly [string, string] }[];
}

// Add project photography to processImages; keep original source assets.
export const PROJECTS: Project[] = [
  {
    "color": "#ffffff",
    "imageFit": "contain",
    "tools": [
      "Product Design",
      "Team Leadership",
      "Interface Integration"
    ],
    "externalUrl": null,
    "status": "Production",
    "imageLayout": "screen",
    "roleSummary": ["Product Designer · Research · Team Lead","Product Designer · Research · Team Lead"],
    "ownership": ["Research · Flujos · UX/UI · Sistema","Research · Flows · UX/UI · System"],
    "slug": "digital-commerce",
    "featuredRank": 1,
    "title": "Retail POS",
    "titleEs": "Retail POS",
    "shortTitle": "Retail POS",
    "shortTitleEs": "Retail POS",
    "category": "Retail · Point of sale · Confidential",
    "cardSummary": [
      "Rediseño de una solución legacy para un retailer de más de 500 tiendas, desde la investigación hasta la experiencia de caja.",
      "Redesigning a legacy solution for a retailer with 500+ stores, from research to the checkout experience."
    ],
    "statusText": ["Rediseño de producto · Anonimizado","Product redesign · Anonymized"],
    "displayImage": "/assets/images/case-studies/pos-sale.webp",
    "processImages": [
      {
        "src": "/assets/images/case-studies/pos-sale.webp",
        "alt": "Sale and receipt remain visible",
        "caption": [
          "Venta y ticket siempre visibles",
          "Sale and receipt remain visible"
        ]
      },
      {
        "src": "/assets/images/case-studies/pos-payment.webp",
        "alt": "Payment methods and remaining balance",
        "caption": [
          "Métodos de pago y saldo pendiente",
          "Payment methods and remaining balance"
        ]
      },
      {
        "src": "/assets/images/case-studies/pos-recovery.webp",
        "alt": "Designing clarity in moments of uncertainty",
        "caption": [
          "Diseñar claridad en momentos de incertidumbre",
          "Recover printing without charging twice"
        ]
      },
      {
        "src": "/assets/images/case-studies/pos-dark.webp",
        "alt": "The same system in dark mode",
        "caption": [
          "El mismo sistema en modo oscuro",
          "The same system in dark mode"
        ]
      },
      {
        "src": "/assets/images/case-studies/pos-closing.webp",
        "alt": "Till reconciliation and shift review",
        "caption": [
          "Arqueo y revisión del turno",
          "Till reconciliation and shift review"
        ]
      }
    ]
  },
  {
    "color": "#ffffff",
    "imageFit": "contain",
    "tools": [
      "Product Design",
      "Team Leadership",
      "Interface Integration"
    ],
    "externalUrl": null,
    "status": "Production",
    "imageLayout": "screen",
    "roleSummary": ["Product Designer · Research · Team Lead","Product Designer · Research · Team Lead"],
    "ownership": ["Research · Producto · UX/UI · Validación","Research · Product · UX/UI · Validation"],
    "slug": "operations-analytics",
    "featuredRank": 2,
    "title": "Payments Platform",
    "titleEs": "Plataforma de pagos",
    "shortTitle": "Payments Platform",
    "shortTitleEs": "Plataforma de pagos",
    "category": "Fintech · Operations · Confidential",
    "cardSummary": [
      "Un producto de pagos desde cero: research, UX/UI y una experiencia común para múltiples comercios.",
      "A payments product built from scratch: research, UX/UI and one experience for multiple merchants."
    ],
    "statusText": ["Producto 0→1 · Anonimizado","0→1 product · Anonymized"],
    "displayImage": "/assets/images/case-studies/payments-overview.webp",
    "processImages": [
      {
        "src": "/assets/images/case-studies/payments-overview.webp",
        "alt": "From key indicators to operational detail",
        "caption": [
          "De los indicadores al detalle de la operación",
          "From key indicators to operational detail"
        ]
      },
      {
        "src": "/assets/images/case-studies/payments-transactions.webp",
        "alt": "Transactions, filters and statuses",
        "caption": [
          "Transacciones, filtros y estados",
          "Transactions, filters and statuses"
        ]
      },
      {
        "src": "/assets/images/case-studies/payments-links.webp",
        "alt": "Payment links and follow-up",
        "caption": [
          "Enlaces de pago y seguimiento",
          "Payment links and follow-up"
        ]
      }
    ]
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
    roleSummary: ["Fundador · Product Designer · Dirección creativa","Founder · Product Designer · Creative direction"],
    ownership: ['Estrategia · UX/UI · Sistema visual · Frontend', 'Strategy · UX/UI · Visual system · Frontend'],
    statusText: ['Empresa y sistemas en producción', 'Live company and client systems'],
    displayImage: '/assets/images/case-studies/fynaq-home.webp',
    color: '#FAFAF8',
    tools: ['Product Design', 'Frontend'],
    status: 'Live',
    externalUrl: 'https://www.fynaq.com/en',
    imageFit: 'contain',
    designUrl: 'https://www.figma.com/design/CtTO7GP2PJzKmTQShAKwZV/Fynaq',
    processImages: [{"src":"/assets/images/case-studies/fynaq-home.webp","alt":"Visual exploration of the Chinese website","caption":["Exploración visual de la web en chino","Visual exploration of the Chinese website"]},{"src":"/assets/images/case-studies/fynaq-direction.webp","alt":"Service structure and offer","caption":["Estructura de servicios y oferta","Service structure and offer"]},{"src":"/assets/images/case-studies/fynaq-brand.webp","alt":"Visual identity and brand applications","caption":["Identidad visual y aplicaciones de marca","Visual identity and brand applications"]}],
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
    color: '#e8eaca',
    tools: ['Figma', 'FigJam', 'Notion', 'Illustrator'],
    status: 'In progress',
    externalUrl:
      'https://www.behance.net/gallery/236791381/Altura-UX-UI-Project-(In-Progress)',
    imageFit: 'contain',
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
    color: '#f0cd60',
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: null,
    imageFit: 'contain',
    processImages: [],
    displayImage: '/assets/images/optimized/posterJKU-large.webp',
    titleEs: 'ACERA/JKU · Cartel de encuentro científico',
    shortTitleEs: 'ACERA / JKU',
  },
  {
    "color": "#ffffff",
    "imageFit": "contain",
    "tools": [
      "Figma",
      "Flutter",
      "Product Design",
      "Team Leadership"
    ],
    "externalUrl": null,
    "status": null,
    "imageLayout": "phone",
    "roleSummary": ["Research · UX/UI · Proyecto personal","Research · UX/UI · Personal project"],
    "ownership": ["Entrevistas · Flujos · UI · Pruebas","Interviews · Flows · UI · Testing"],
    "slug": "poketrade",
    "featuredRank": 4,
    "title": "PokéTrade",
    "titleEs": "PokéTrade",
    "shortTitle": "PokéTrade",
    "shortTitleEs": "PokéTrade",
    "category": "Mobile · Collectibles · Product design",
    "cardSummary": [
      "Tu colección, las cartas que buscas y el próximo intercambio, dentro de una misma experiencia móvil.",
      "Your collection, the cards you want and your next trade, in one mobile experience."
    ],
    "statusText": ["Proyecto personal · Research y diseño","Personal project · Research and design"],
    "designUrl": "https://www.figma.com/design/ISj3A6iewkWx9epPKV0nQb/PokeTrade",
    "displayImage": "/assets/images/case-studies/poke-explore.webp",
    "processImages": [
      {
        "src": "/assets/images/case-studies/poke-explore.webp",
        "alt": "Explore cards, expansions and nearby listings",
        "caption": [
          "Explorar cartas, expansiones y anuncios cercanos",
          "Explore cards, expansions and nearby listings"
        ]
      },
      {
        "src": "/assets/images/case-studies/poke-collection.webp",
        "alt": "Owned and missing: the collection as a starting point",
        "caption": [
          "Tengo, faltan: la colección como punto de partida",
          "Owned and missing: the collection as a starting point"
        ]
      },
      {
        "src": "/assets/images/case-studies/poke-card.webp",
        "alt": "Card price, history and condition",
        "caption": [
          "Precio, historial y estado de la carta",
          "Card price, history and condition"
        ]
      },
      {
        "src": "/assets/images/case-studies/poke-trade.webp",
        "alt": "Review a trade proposal",
        "caption": [
          "Revisar una propuesta de intercambio",
          "Review a trade proposal"
        ]
      },
      {
        "src": "/assets/images/case-studies/poke-chat.webp",
        "alt": "A conversation with trading context",
        "caption": [
          "Conversación con contexto de intercambio",
          "A conversation with trading context"
        ]
      }
    ]
  },
  {
    slug: 'autotok-poster',
    statusText: ['Pieza de archivo · Cartel', 'Archive work · Poster'],
    title: 'AutoTok Roll Up Poster',
    shortTitle: 'AutoTok — Print',
    category: 'Print Design · Branding',
    color: '#cebcf4',
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: 'https://autotok.net',
    imageFit: 'contain',
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
    color: '#d5cdf8',
    tools: ['Angular', 'TypeScript', 'Team Leadership', 'Figma'],
    status: 'In progress',
    externalUrl: 'https://autotok.net',
    imageFit: 'cover',
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
    color: '#d8def1',
    tools: ['Angular', 'TypeScript', 'Symfony', 'API Platform', 'Chart.js'],
    status: null,
    externalUrl: 'https://dashboard.autotok.net',
    imageFit: 'cover',
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
