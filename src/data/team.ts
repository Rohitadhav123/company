export interface TeamMember {
  id: string;
  role: string;
  roleShort: string;
  placeholderName: string;
  focus: string;
  bioPlaceholder: string;
  avatarSeed: string;
  skills: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "creative-director",
    role: "Creative Director",
    roleShort: "Art & Motion Direction",
    placeholderName: "[Team Member: Creative Director]",
    focus: "Visual identity, brand cinema, concept art, and high-impact creative storytelling.",
    bioPlaceholder:
      "Guides the aesthetic vision across all client projects, ensuring every campaign resonates with cinematic elegance and cohesive visual identity.",
    avatarSeed: "CD",
    skills: ["Art Direction", "Brand Identity", "Motion Concept", "Visual Narrative"],
  },
  {
    id: "fullstack-developer",
    role: "Full-Stack Developer",
    roleShort: "Web & Systems Engineering",
    placeholderName: "[Team Member: Full-Stack Developer]",
    focus: "Next.js architecture, interactive WebGL, high-throughput APIs, and cloud infrastructure.",
    bioPlaceholder:
      "Bridges technical engineering and fluid user interaction, architecting scalable web applications and zero-latency backend integrations.",
    avatarSeed: "FS",
    skills: ["Next.js / React", "TypeScript", "Node.js / APIs", "Performance & Cloud"],
  },
  {
    id: "uiux-designer",
    role: "UI/UX Designer",
    roleShort: "Product & Interaction Design",
    placeholderName: "[Team Member: UI/UX Designer]",
    focus: "Design systems, ergonomic mobile interfaces, user research, and tactile micro-interactions.",
    bioPlaceholder:
      "Crafts intuitive digital journeys, balancing pixel-perfect aesthetics with frictionless user usability across desktop and mobile devices.",
    avatarSeed: "UX",
    skills: ["Figma Design Systems", "User Research", "Interaction Prototyping", "Design Tokens"],
  },
  {
    id: "ai-motion-designer",
    role: "AI and Motion Designer",
    roleShort: "Generative AI & Kinetic Animation",
    placeholderName: "[Team Member: AI & Motion Designer]",
    focus: "Generative diffusion models, dynamic 3D simulation, promotional reels, and kinetic typography.",
    bioPlaceholder:
      "Harnesses advanced generative AI workflows and procedural 3D motion to create hypnotic promotional videos and dynamic visual assets.",
    avatarSeed: "AI",
    skills: ["Generative AI Pipelines", "Cinema 4D / Blender", "After Effects", "Kinetic Typography"],
  },
  {
    id: "digital-strategy-specialist",
    role: "Digital Strategy Specialist",
    roleShort: "Business Solutions & Growth",
    placeholderName: "[Team Member: Strategy Specialist]",
    focus: "Operational automation, digital market strategy, commercial growth, and client alignment.",
    bioPlaceholder:
      "Translates business objectives into actionable technical and marketing roadmaps, integrating intelligent automation tools for maximum impact.",
    avatarSeed: "DS",
    skills: ["Business Planning", "Workflow Automation", "Analytics & Conversion", "Strategic Roadmaps"],
  },
];
