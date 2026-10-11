export interface ProcessStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    subtitle: "Understand project goals and requirements.",
    description:
      "Every extraordinary project begins with deep listening. We dissect your brand aspirations, dissect the competitive landscape, identify user motivations, and establish strict technical parameters.",
    bulletPoints: [
      "Stakeholder interviews & creative discovery session",
      "Market differentiation & benchmark audit",
      "Technical architecture & platform feasibility review",
      "Scope alignment, timelines & milestone roadmap"
    ],
    deliverable: "Project Architecture Blueprint & Creative Brief",
  },
  {
    step: "02",
    name: "Design",
    subtitle: "Create the visual direction and user experience.",
    description:
      "We sculpt the aesthetic soul of the project. Through moodboards, 3D explorations, typography studies, and interactive wireframes, we create a distinct digital identity that commands attention.",
    bulletPoints: [
      "Aesthetic concept boards & art direction",
      "High-fidelity design system & UI components",
      "Interactive desktop & mobile prototypes",
      "Motion design studies & transition choreography"
    ],
    deliverable: "Design System & Interactive Motion Prototypes",
  },
  {
    step: "03",
    name: "Develop",
    subtitle: "Build the website, app, or creative deliverables.",
    description:
      "We bring the designs into vibrant, interactive reality. Writing clean, modular TypeScript, fine-tuning GSAP scroll-triggers, optimizing 3D canvases, and wiring high-performance APIs.",
    bulletPoints: [
      "Next.js App Router & component-driven architecture",
      "Fluid GSAP & WebGL motion engineering",
      "API microservices, CMS & automated workflows",
      "Rigorous cross-device & cross-browser testing"
    ],
    deliverable: "Staging Preview Environment & Code Repository",
  },
  {
    step: "04",
    name: "Deliver",
    subtitle: "Test, optimize, launch, and hand over the completed project.",
    description:
      "We verify every millisecond of performance, audit SEO compliance, run security checks, and execute a flawless production release followed by comprehensive training and handoff.",
    bulletPoints: [
      "Lighthouse performance & accessibility audit (95+ target)",
      "Production deployment to global edge CDN",
      "Domain DNS routing & SSL certification",
      "Handoff walkthrough, asset package & ongoing support"
    ],
    deliverable: "Live Production Release & Complete Asset Package",
  },
];
