export interface Project {
  slug: string;
  title: string;
  titleEs: string;
  shortTitle: string;
  shortTitleEs: string;
  category: string;
  image: string;
  thumbnail: string;
  displayImage: string;
  color: string;
  description: string;
  sections: { title: string; body: string }[];
  tools: string[];
  status: string | null;
  externalUrl: string | null;
  imageFit: string;
  repositoryUrl?: string;
  processTitle: string;
  processCaption: string;
  processImages: { src: string; alt: string }[];
}

// Add project photography to processImages; keep original source assets.
export const PROJECTS: Project[] = [
  {
    slug: 'altura',
    title: 'Altura Coworking Experience',
    shortTitle: 'Altura',
    category: 'UX/UI Design · Product Design',
    image: '/assets/images/lemon.png',
    color: '#e8eaca',
    description:
      'Altura Coworking is a UX/UI design project focused on redefining the coworking experience for young professionals in Valencia. The goal is to merge functionality, community, and Mediterranean warmth into a seamless digital product that makes booking and connecting effortless.',
    sections: [
      {
        title: 'Challenge',
        body: "Create a mobile-first coworking platform that reflects Altura's premium identity while solving key user frustrations: complicated booking flows, lack of atmosphere preview, and the absence of social connection within existing apps.",
      },
      {
        title: 'Approach',
        body: "Through research and user analysis, I identified the needs of two main user types: students seeking flexibility and freelancers looking for professional connections. Using this insight, I developed a complete design process — from personas and information architecture to low-fidelity wireframes and a cohesive design system. Every visual and interaction choice aims to convey clarity, calm, and belonging, mirroring Valencia's lifestyle.",
      },
      {
        title: 'Outcome',
        body: 'Altura presents a digital ecosystem where users can easily discover and book coworking spaces, manage reservations, and join community events. The result is a user experience that feels premium, connected, and human — designed to grow alongside the creative community of Valencia.',
      },
    ],
    tools: ['Figma', 'FigJam', 'Notion', 'Illustrator'],
    status: 'In progress',
    externalUrl:
      'https://www.behance.net/gallery/236791381/Altura-UX-UI-Project-(In-Progress)',
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/lemon.webp',
    processTitle: 'Booking, from discovery to confirmation',
    processCaption:
      'Mobile wireframes, booking screens and the community experience.',
    processImages: [],
    displayImage: '/assets/images/optimized/lemon-large.webp',
    titleEs: 'Altura · Experiencia de coworking',
    shortTitleEs: 'Altura',
  },
  {
    slug: 'acera-jku',
    title: 'ACERA/JKU Scientific Event Poster',
    shortTitle: 'ACERA / JKU',
    category: 'Print Design · Scientific Communication · Event Branding',
    image: '/assets/images/posterJKU.png',
    color: '#f0cd60',
    description:
      "A clean and professional poster designed for ACERA (Asociación de Científicos Españoles en Austria) to promote a scientific networking event, clearly communicating the association's mission, objectives, and target audience in a multilingual context.",
    sections: [
      {
        title: 'Challenge',
        body: 'The challenge was to present institutional and scientific information in a limited space while maintaining clarity, academic credibility, and visual balance. The poster also needed to work effectively in a busy event environment and be easily readable from a distance.',
      },
      {
        title: 'Approach',
        body: 'I focused on a structured layout, clear visual hierarchy, and concise multilingual content (Spanish and German). The design uses restrained colors, strong typography, and modular sections to guide the viewer smoothly through the information, while maintaining a professional and institutional tone suitable for scientific events.',
      },
    ],
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: null,
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/posterJKU.webp',
    processTitle: 'Scientific communication across languages',
    processCaption:
      'Spanish and German content, modular sections and reading hierarchy.',
    processImages: [],
    displayImage: '/assets/images/optimized/posterJKU-large.webp',
    titleEs: 'ACERA/JKU · Cartel de encuentro científico',
    shortTitleEs: 'ACERA / JKU',
  },
  {
    slug: 'its-time',
    title: 'ITS Time Management System',
    shortTitle: 'ITS Time',
    category: 'UX/UI Design · Interface Design',
    image: '/assets/images/itsTime.png',
    color: '#e5e9ea',
    description:
      'Time tracking and visualization system by Work Package designed for JKU ITS. An interface focused on clarity that enables multiple daily entries, package consumption visualization, and monthly reconciliation.',
    sections: [
      {
        title: 'Challenge',
        body: 'Transform a complex and demanding process into a fast, readable, and predictable experience for both managers and employees. The system needed to handle detailed time tracking without creating friction or confusion.',
      },
      {
        title: 'Approach',
        body: 'I developed minimalist daily capture flows with inline editing capabilities, consumption panels with cards and progress bars to compare planned vs actual time, contextual messaging with visible validations before saving, and a review step before exporting reports to prevent errors.',
      },
      {
        title: 'Outcome',
        body: 'An experience that facilitates detailed registration, reduces errors, and improves confidence in monthly reports. Clean interface with clear visual hierarchy and highlighted primary actions that streamline the entire time management workflow.',
      },
    ],
    tools: ['HTML/CSS', 'JavaScript', 'Python', 'Figma', 'Interface Design'],
    status: null,
    externalUrl: null,
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/itsTime.webp',
    processTitle: 'Daily tracking. Monthly clarity.',
    processCaption:
      'Time entries, Work Package consumption and export validation.',
    processImages: [],
    displayImage: '/assets/images/optimized/itsTime-large.webp',
    titleEs: 'ITS Time · Gestión del tiempo',
    shortTitleEs: 'ITS Time',
  },
  {
    slug: 'autotok-poster',
    title: 'AutoTok Roll Up Poster',
    shortTitle: 'AutoTok — Print',
    category: 'Print Design · Branding',
    image: '/assets/images/posterAutotok.png',
    color: '#cebcf4',
    description:
      "A visually striking roll-up poster designed to promote AutoTok's innovative video automation solutions at industry events.",
    sections: [
      {
        title: 'Challenge',
        body: 'The poster needed to capture attention quickly and convey key messages clearly in a busy trade show environment.',
      },
      {
        title: 'Approach',
        body: 'I focused on bold typography, vibrant colors, and concise messaging. The design balances imagery and text to guide viewers through the poster effortlessly.',
      },
    ],
    tools: ['Figma', 'Illustrator', 'Print Design'],
    status: null,
    externalUrl: 'https://autotok.net',
    imageFit: 'contain',
    thumbnail: '/assets/images/optimized/posterAutotok.webp',
    processTitle: 'A clear message at event scale',
    processCaption: 'Typography, color and information hierarchy, up close.',
    processImages: [],
    displayImage: '/assets/images/optimized/posterAutotok-large.webp',
    titleEs: 'AutoTok · Diseño editorial',
    shortTitleEs: 'AutoTok / Cartel',
  },
  {
    slug: 'autotok-web',
    title: 'AutoTok Landing Page',
    shortTitle: 'AutoTok — Web',
    category: 'Product Design · Team Leadership',
    image: '/assets/images/landing.png',
    color: '#d5cdf8',
    description:
      'Currently under construction with my team of fellow UPV students as part of Start Inf. Leading the project from design conception to implementation while managing a collaborative development team.',
    sections: [
      {
        title: 'Challenge',
        body: 'Create a compelling landing page for AutoTok, an AI-powered platform for TikTok video automation, while coordinating a multidisciplinary student team and balancing design vision with technical constraints.',
      },
      {
        title: 'Approach',
        body: "As both designer and team lead, I'm overseeing the complete product development cycle—from user research and wireframing to frontend implementation and deployment. The project involves mentoring teammates, conducting design reviews, and ensuring code quality while maintaining design consistency.",
      },
    ],
    tools: ['Angular', 'TypeScript', 'Team Leadership', 'Figma'],
    status: 'In progress',
    externalUrl: 'https://autotok.net',
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/landing.webp',
    processTitle: 'From wireframe to landing page',
    processCaption: 'Early layouts, visual hierarchy and responsive decisions.',
    processImages: [],
    repositoryUrl: 'https://github.com/autotok',
    displayImage: '/assets/images/optimized/landing-large.webp',
    titleEs: 'AutoTok · Sitio web',
    shortTitleEs: 'AutoTok / Web',
  },
  {
    slug: 'autotok-dashboard',
    title: 'AutoTok Analytics Dashboard',
    shortTitle: 'AutoTok — Dashboard',
    category: 'Data Visualization · Dashboard Design',
    image: '/assets/images/dashboard.png',
    color: '#d8def1',
    description:
      'A comprehensive analytics dashboard that transforms complex video automation metrics into actionable insights.',
    sections: [
      {
        title: 'Challenge',
        body: 'Users needed to monitor multiple metrics simultaneously—video performance, automation status, and engagement trends—without feeling overwhelmed by data.',
      },
      {
        title: 'Approach',
        body: 'I designed a modular dashboard with clear visual hierarchy and customizable widgets. Charts and graphs use a consistent color language that makes patterns easy to spot. The interface adapts to different screen sizes while maintaining data clarity.',
      },
    ],
    tools: ['Angular', 'TypeScript', 'Symfony', 'API Platform', 'Chart.js'],
    status: null,
    externalUrl: 'https://dashboard.autotok.net',
    imageFit: 'cover',
    thumbnail: '/assets/images/optimized/dashboard.webp',
    processTitle: 'Making video metrics easier to read',
    processCaption:
      'Video performance, automation status and responsive widgets.',
    processImages: [],
    repositoryUrl: 'https://github.com/autotok',
    displayImage: '/assets/images/optimized/dashboard-large.webp',
    titleEs: 'AutoTok · Panel de control',
    shortTitleEs: 'AutoTok / Panel',
  },
];
