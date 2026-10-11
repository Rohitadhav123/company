export interface ServiceOffering {
  title: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  summary: string;
  description: string;
  offerings: string[];
  deliverables: string[];
  processSummary: string;
  accent: string;
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-poster",
    number: "01",
    title: "AI Poster Design",
    tagline: "High-impact advertising key visuals, commercial posters, and surreal brand campaigns.",
    category: "Generative Art & Key Visuals",
    summary:
      "We fuse precision prompt modeling with senior art direction to engineer commercial advertising posters, multi-composition campaign visuals, and photorealistic product staging.",
    description:
      "Eliminating the physical constraints of traditional studio shoots, our AI Poster Design practice creates high-resolution visual spectacles. From luxury fragrance campaigns to futuristic consumer hardware, we deliver prompt-engineered, precision-upscaled assets ready for print and digital billboards.",
    offerings: [
      "Commercial Product Posters & Key Visuals",
      "Multi-Composition Campaign Variations",
      "Haute Editorial & Conceptual Art Direction",
      "Synthetic Product Staging & 3D Stills",
      "Multi-Format Campaign Adapters (Billboard, Social, Print)",
      "High-Resolution Upscaling & Color Grading"
    ],
    deliverables: [
      "8K Ultra-Res Master Visuals (300 DPI)",
      "Print-Ready CMYK & Digital RGB Files",
      "Layered Typography & Composition Stacks",
      "Prompt Blueprints & Style Guides"
    ],
    processSummary:
      "Creative brief -> Aesthetic moodboarding -> Generative exploration -> Retouching & typography layout.",
    accent: "#FF5A1F",
    technologies: ["Midjourney v6.2", "Flux Pro", "ComfyUI", "Photoshop", "Topaz Gigapixel"],
  },
  {
    id: "ai-video",
    number: "02",
    title: "AI Animation Videos",
    tagline: "Cinematic camera movement, volumetric lighting, and particle simulations.",
    category: "Cinematic Motion & Particle FX",
    summary:
      "We transform static product visuals into fluid cinematic motion scenes, product reveal teasers, and high-energy advertising films with dynamic 3D camera choreography.",
    description:
      "Moving beyond static imagery, our AI Animation pipeline breathes life into brands. Using neural video synthesis and 3D camera mapping, we choreograph camera sweeps, volumetric light leaks, and kinetic particle physics to deliver thumb-stopping video content.",
    offerings: [
      "Cinematic Product Reveal Animations",
      "Dynamic 3D Camera Choreography & Dolly Pans",
      "Volumetric Particle & Lighting Simulation",
      "Promotional Hype Reels & Teasers",
      "Kinetic Typography & Sound Design",
      "Multi-Aspect Video Renders (9:16, 16:9, 1:1)"
    ],
    deliverables: [
      "4K 60FPS Master Reels (ProRes 422)",
      "Multi-Platform Formats (Reels, TikTok, YouTube)",
      "Bespoke Kinetic Audio & Sound FX Stems",
      "Seamless Looping Video Displays"
    ],
    processSummary:
      "Storyboard & styleframes -> Neural video synthesis -> 3D camera stabilization -> Sound design & 4K master export.",
    accent: "#FF7844",
    technologies: ["Runway Gen-3", "Luma Dream Machine", "After Effects", "Cinema 4D", "Premiere Pro"],
  },
  {
    id: "web-development",
    number: "03",
    title: "Website Development",
    tagline: "Wireframe to finished production flagships with responsive desktop-to-mobile transitions.",
    category: "Creative Engineering",
    summary:
      "We engineer lightning-fast digital flagship websites, dynamic SaaS portals, and interactive web applications built with Next.js, modern CSS, and hardware-accelerated animations.",
    description:
      "Your website is your primary digital headquarters. We translate wireframe blueprints into pixel-perfect, responsive flagship experiences. Engineered with Next.js 15, GSAP motion, and fluid typography, our sites load instantaneously and achieve flawless Core Web Vitals.",
    offerings: [
      "Cinematic Business & Flagship Websites",
      "Fluid Responsive Transitions (Desktop to Mobile)",
      "High-Conversion Campaign Landing Pages",
      "Interactive 3D WebGL & Canvas Experiences",
      "Headless CMS Architecture & Dynamic Portals",
      "100/100 Core Web Vitals Optimization"
    ],
    deliverables: [
      "Production-Ready Next.js & React Codebase",
      "Responsive Design Token System",
      "Accessible, SEO-Ready Semantic Markup",
      "Global Edge CDN Deployment"
    ],
    processSummary:
      "Information architecture -> Wireframing -> Next.js engineering -> Performance audit & global launch.",
    accent: "#00F0FF",
    technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
  },
  {
    id: "app-development",
    number: "04",
    title: "Mobile App Development",
    tagline: "Tactile smartphone interfaces with fluid screen transitions and native performance.",
    category: "Mobile Architecture",
    summary:
      "We design and build high-performance mobile applications with tactile gesture controls, seamless multi-screen flows, biometric security, and rock-solid state management.",
    description:
      "From initial touch gesture prototyping to App Store & Google Play deployment, our mobile engineering ensures 60fps animations, intuitive ergonomics, offline-first reliability, and clean scalable API architectures across iOS and Android.",
    offerings: [
      "Cross-Platform iOS & Android Applications",
      "Tactile Micro-Interactions & Gestures",
      "Dynamic Island & Widget Integration",
      "Biometric Auth & Real-Time Sync Pipelines",
      "Rapid MVP Prototypes for Early Investors",
      "Offline-First Data Architecture"
    ],
    deliverables: [
      "Production-Signed iOS & Android App Bundles",
      "Comprehensive UI/UX Component Design System",
      "Documented API Middleware & Endpoints",
      "TestFlight & Google Play Console Submission"
    ],
    processSummary:
      "User journey mapping -> Touch prototype testing -> Cross-platform development -> Store approval.",
    accent: "#38BDF8",
    technologies: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "Supabase"],
  },
  {
    id: "business-planning",
    number: "05",
    title: "Business Development Planning",
    tagline: "Stage-gated roadmaps, connected workflow nodes, and business telemetry dashboards.",
    category: "Strategy & Growth",
    summary:
      "We architect actionable business growth roadmaps, unit economics models, and connected execution milestones backed by interactive real-time telemetry dashboards.",
    description:
      "Creative ambition requires disciplined commercial architecture. We analyze market opportunity, model acquisition funnels and unit economics, and structure milestone roadmaps that guide founders and leadership teams from initial validation to enterprise scale.",
    offerings: [
      "Stage-Gated Business Execution Roadmaps",
      "Unit Economics & LTV/CAC Funnel Modeling",
      "Omnichannel Go-To-Market Architecture",
      "Executive Growth Dashboards & Telemetry",
      "Digital Product Viability & Tech Audits",
      "Pricing Strategy & Monetization Blueprints"
    ],
    deliverables: [
      "Executive Growth Master Blueprint (PDF/Deck)",
      "Financial Forecast & Unit Economics Ledger",
      "Milestone Roadmap & Connected Node Plan",
      "KPI Telemetry Tracking System"
    ],
    processSummary:
      "Market opportunity audit -> Financial modeling -> Milestone roadmap architecture -> Telemetry rollout.",
    accent: "#E5A93C",
    technologies: ["Financial Modeling", "GTM Frameworks", "Notion Systems", "Mixpanel", "Stripe Data"],
  },
  {
    id: "business-solutions",
    number: "06",
    title: "Digital Business Solutions",
    tagline: "Synchronized ecosystems connecting websites, apps, dashboards, and automated workflows.",
    category: "Ecosystem & Automation",
    summary:
      "We orchestrate interconnected digital ecosystems that unify your web flagships, mobile applications, executive dashboards, and autonomous AI workflow pipelines into one machine.",
    description:
      "Siloed tools stall growth. We engineer unified operational infrastructure where every customer touchpoint automatically updates your CRM, triggers intelligent AI workflows, and populates executive business intelligence in real time.",
    offerings: [
      "Unified Multi-Platform Cloud Ecosystems",
      "Automated Webhook & CRM Sync Pipelines",
      "Custom AI Agents & Workflow Automation",
      "Centralized Business Intelligence Dashboards",
      "Payment Gateway & Subscription Engines",
      "Continuous System Health & Uptime Telemetry"
    ],
    deliverables: [
      "Interconnected Ecosystem Architecture",
      "Automated Webhook & Event Handlers",
      "Real-Time Health Monitoring Dashboard",
      "Technical Documentation & Team Training"
    ],
    processSummary:
      "Ecosystem mapping -> API integration -> Workflow automation scripting -> Telemetry & QA sign-off.",
    accent: "#A855F7",
    technologies: ["Node.js", "Webhooks", "Zapier / Make", "PostgreSQL", "OpenAI API", "AWS"],
  },
];
