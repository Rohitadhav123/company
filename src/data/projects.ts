export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  badge: string;
  tagline: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  stats: { label: string; value: string }[];
  accentColor: string;
  bgGradient: string;
  thumbnailPlaceholder: string;
  isConcept: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    slug: "orbit-athletics",
    title: "ORBIT ATHLETICS",
    category: "AI Advertising & Creative Studio",
    client: "Orbit High-Performance Wear (Concept)",
    year: "2025",
    badge: "Concept Project 01",
    tagline: "Synthetic AI photography and kinetic campaign posters for futuristic athletics.",
    description:
      "A fictional sports brand featuring AI advertising posters, biometric product visuals, and a high-velocity animated campaign designed to redefine sports imagery.",
    fullOverview:
      "Orbit Athletics was conceived to push the boundaries of generative AI in sports marketing. We developed a suite of high-fidelity synthetic athlete portraits and zero-gravity footwear simulations that defy standard studio constraints, creating a visceral cinematic narrative.",
    challenge:
      "Traditional athletic campaigns require massive location shoots and complex physical rigs to capture zero-gravity kinetic movement without CGI looking artificial.",
    solution:
      "Leveraging custom-trained generative diffusion models combined with procedural 3D motion passes, we achieved hyper-realistic light refraction on moisture-wicking fabrics and kinetic motion blur.",
    deliverables: [
      "AI Master Advertising Poster Series (12 Key Visuals)",
      "Dynamic 4K Promotional Reels & Social Cutdowns",
      "Interactive Digital Lookbook",
      "Spatial Typography System"
    ],
    techStack: ["Generative AI Models", "After Effects", "Cinema 4D", "WebGL", "Next.js"],
    stats: [
      { label: "Asset Iteration Speed", value: "8x Faster" },
      { label: "Key Visuals Created", value: "48+" },
      { label: "Rendering Efficiency", value: "94%" }
    ],
    accentColor: "#FF5A1F",
    bgGradient: "linear-gradient(135deg, #1f0b00 0%, #0d0d0d 100%)",
    thumbnailPlaceholder: "orbit",
    isConcept: true,
  },
  {
    id: "02",
    slug: "pulse-digital",
    title: "PULSE DIGITAL",
    category: "Web & Mobile SaaS Experience",
    client: "Pulse Cloud Infrastructure (Concept)",
    year: "2025",
    badge: "Concept Project 02",
    tagline: "Next-gen telemetry dashboard and cross-platform native experience for distributed systems.",
    description:
      "A fictional SaaS product with a high-conversion modern marketing website, dark-mode real-time dashboard, and responsive mobile app UI for iOS and Android.",
    fullOverview:
      "Pulse Digital required a unified design language connecting web-scale cloud telemetry with consumer-grade mobile ergonomics. We created a high-density, low-latency interface that transforms complex cluster metrics into intuitive visual heatmaps.",
    challenge:
      "Enterprise infrastructure tools are notoriously cluttered and difficult to parse on mobile viewports during on-call emergencies.",
    solution:
      "Engineered an adaptable modular design system with responsive micro-charts, tactile haptic cues, and a glassmorphic dark interface optimized for OLED screens.",
    deliverables: [
      "Marketing Website with Scroll-Driven Feature Demos",
      "Dark-Mode Telemetry & Monitoring Dashboard",
      "Native iOS & Android App Systems",
      "Design System with 120+ Tokenized Components"
    ],
    techStack: ["Next.js App Router", "React 19", "Tailwind CSS", "TypeScript", "GSAP"],
    stats: [
      { label: "Time-to-Insight Target", value: "< 1.2s" },
      { label: "Dashboard Density", value: "Modular" },
      { label: "Accessibility Score", value: "100/100" }
    ],
    accentColor: "#00F0FF",
    bgGradient: "linear-gradient(135deg, #001f26 0%, #0d0d0d 100%)",
    thumbnailPlaceholder: "pulse",
    isConcept: true,
  },
  {
    id: "03",
    slug: "noir-coffee",
    title: "NOIR COFFEE",
    category: "Brand Identity & E-Commerce",
    client: "Noir Roastery Atelier (Concept)",
    year: "2024",
    badge: "Concept Project 03",
    tagline: "Tactile monochromatic luxury branding and bespoke headless e-commerce.",
    description:
      "A fictional coffee brand featuring an uncompromising visual identity, tactile packaging renders, advertising reels, and a lightning-fast headless e-commerce website.",
    fullOverview:
      "Noir Coffee embodies the quiet precision of single-origin roasting. From embossed minimalist packaging to liquid micro-animations on product pages, the digital storefront evokes the sensory aroma of high-elevation beans.",
    challenge:
      "Elevate online coffee purchasing from a commoditized cart checkout into a sensory artisanal experience with high basket conversion.",
    solution:
      "Created an editorial web layout featuring horizontal scroll storytelling, roast profile audio-visualizers, and frictionless subscription purchasing flows.",
    deliverables: [
      "Complete Brand Identity & Typography Guidelines",
      "3D Packaging & Foil Emboss Renders",
      "Bespoke Headless E-Commerce Web Experience",
      "Micro-animation Suite & Video Reels"
    ],
    techStack: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "Three.js", "GSAP"],
    stats: [
      { label: "Lighthouse Performance", value: "99" },
      { label: "Mobile Checkout Friction", value: "-45%" },
      { label: "Visual Asset Fidelity", value: "Cinematic" }
    ],
    accentColor: "#E5A93C",
    bgGradient: "linear-gradient(135deg, #261a05 0%, #0d0d0d 100%)",
    thumbnailPlaceholder: "noir",
    isConcept: true,
  },
  {
    id: "04",
    slug: "tekzo-motion-lab",
    title: "TEKZO MOTION LAB",
    category: "3D R&D & Generative WebGL",
    client: "Tekzo Internal Research & Development",
    year: "2025",
    badge: "Concept Project 04",
    tagline: "Exploration in physics-driven shaders, interactive typography, and spatial web graphics.",
    description:
      "An experimental R&D playground celebrating abstract 3D animation, GPU-accelerated motion graphics, and interactive scroll mechanics pushed to the bleeding edge.",
    fullOverview:
      "Tekzo Motion Lab is our creative engineering sandbox where design rules are tested and broken. We build real-time GLSL fragment shaders, spring-physics typography, and volumetric particle fields that translate user input into tactile digital art.",
    challenge:
      "Achieving fluid 60-120fps complex physics and particle animations in standard web browsers across mobile and desktop without heating up devices.",
    solution:
      "Utilized custom WebGL shaders, compute instances, and adaptive level-of-detail (LOD) pipelines with strict memory garbage collection.",
    deliverables: [
      "GPU-Accelerated Interactive Canvas Experiments",
      "Custom Kinetic Physics Engine & Math Helpers",
      "Curated 3D Motion Asset Library",
      "Open-Source Shader Snippets"
    ],
    techStack: ["Three.js", "GLSL Shaders", "GSAP ScrollTrigger", "Web Audio API", "TypeScript"],
    stats: [
      { label: "Frame Rate Target", value: "60 FPS" },
      { label: "Realtime Particles", value: "25,000" },
      { label: "Bundle Overhead", value: "Zero-Lag" }
    ],
    accentColor: "#A855F7",
    bgGradient: "linear-gradient(135deg, #1b0028 0%, #0d0d0d 100%)",
    thumbnailPlaceholder: "motion",
    isConcept: true,
  },
];
