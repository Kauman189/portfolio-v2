import { Bilingual } from '../i18n/locale.service';
export const PROFILE = {
  email: 'camiloarias.frg@gmail.com',
  linkedin: 'https://www.linkedin.com/in/camilo-arias189/',
  behance: 'https://www.behance.net/camiloariasg',
  instagram: 'https://www.instagram.com/kauman189/',
  intro: [
    'Soy Camilo, diseñador de producto digital en Valencia. Trabajo en interfaces y sistemas de diseño, desde los primeros flujos hasta su implementación.',
    'I’m Camilo, a digital product designer based in Valencia. I work on interfaces and design systems, from early flows through to implementation.',
  ] as Bilingual,
  current: [
    'Actualmente diseño y construyo interfaces para productos de pagos B2B y SaaS en F1-Connecting.',
    'Currently designing and building interfaces for B2B payments and SaaS products at F1-Connecting.',
  ] as Bilingual,
};
export const EXPERIENCE: {
  company: string;
  dates: Bilingual;
  role: Bilingual;
  detail: Bilingual;
}[] = [
  {
    company: 'F1-Connecting',
    dates: ['2026 — Actualidad', '2026 — Present'],
    role: ['Frontend y full stack', 'Frontend & full stack'],
    detail: [
      'Diseño e implementación de interfaces para pagos B2B y plataformas SaaS. Trabajo con flujos en Figma y componentes reutilizables en Angular.',
      'Interface design and implementation for B2B payments and SaaS platforms, working with Figma flows and reusable Angular components.',
    ],
  },
  {
    company: 'JKU · ITS',
    dates: ['2025 — 2026', '2025 — 2026'],
    role: [
      'Desarrollo full stack · Erasmus+',
      'Full stack development · Erasmus+',
    ],
    detail: [
      'Herramientas internas para equipos de investigación en Linz: paneles, indicadores y seguimiento de proyectos.',
      'Internal tools for research teams in Linz: dashboards, indicators and project tracking.',
    ],
  },
  {
    company: 'Grupo Planeta · VIU',
    dates: ['2024 — 2025', '2024 — 2025'],
    role: ['Soporte técnico', 'Technical support'],
    detail: [
      'Soporte a estudiantes y equipos académicos, documentación y resolución de incidencias en plataformas universitarias.',
      'Supporting students and academic teams, documenting procedures and resolving issues on university platforms.',
    ],
  },
  {
    company: 'Minsait · Indra',
    dates: ['2023 — 2024', '2023 — 2024'],
    role: ['Técnico IT de nivel 2', 'Level 2 IT technician'],
    detail: [
      'Soporte IT y colaboración con equipos en contextos de trabajo en inglés y francés.',
      'IT support and cross-team collaboration in English- and French-speaking work environments.',
    ],
  },
];
