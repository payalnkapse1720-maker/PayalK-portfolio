export interface SkillCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  isCore?: boolean;
  chips: string[];
}

export interface SkillsContent {
  sectionId: string;
  badge: string;
  heading: string;
  description: string;
  categories: SkillCategory[];
}

export const skillsContent: SkillsContent = {
  sectionId: "skills",
  badge: "SKILLS / FANNED STACK",
  heading: "Disciplines & Focus Areas",
  description:
    "A disciplined cross-section bridging technical software engineering with high-touch aesthetic direction.",
  categories: [
    {
      id: "development",
      category: "ENGINEERING",
      title: "Development",
      description:
        "Building responsive, accessible web systems, full-stack microservices, and reactive user interfaces.",
      icon: "terminal",
      isCore: true,
      chips: ["HTML", "CSS", "JavaScript", "Next.js"],
    },
    {
      id: "digital-marketing",
      category: "STRATEGY",
      title: "Digital Marketing",
      description:
        "Data-backed acquisition funnels, behavioral audience segmentation, and organic search engineering.",
      icon: "trending_up",
      chips: ["Social media", "Content creation", "Instagram", "YouTube"],
    },
    {
      id: "ai-video",
      category: "GENERATIVE",
      title: "AI Video Creation",
      description:
        "Pioneering narrative workflows using state-of-the-art diffusion motion models and post-production craft.",
      icon: "movie_filter",
      chips: ["AI tools", "CapCut", "VN", "Canva AI"],
    },
    {
      id: "graphic-design",
      category: "AESTHETICS",
      title: "Graphic Design",
      description:
        "Editorial typography, modular design systems, brand guidelines, and high-conversion graphic collateral.",
      icon: "draw",
      chips: ["Canva", "Graphic design"],
    },
  ],
};
