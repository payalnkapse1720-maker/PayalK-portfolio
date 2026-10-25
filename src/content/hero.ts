export interface HeroCardData {
  id: string;
  index: number;
  badge: string;
  title: string;
  description: string;
  icon: string;
  isHighlight?: boolean;
  chips: string[];
}

export interface SecondarySkill {
  id: string;
  name: string;
  icon: string;
}

export interface HeroContent {
  badge: string;
  headline: {
    start: string;
    accent: string;
    end: string;
  };
  subtext: string;
  ctaPrimary: {
    text: string;
    href: string;
  };
  ctaSecondary: {
    text: string;
    href: string;
    downloadFilename: string;
  };
  secondarySkillsLabel: string;
  secondarySkills: SecondarySkill[];
  cards: HeroCardData[];
}

export const heroContent: HeroContent = {
  badge: "TYBSc COMPUTER SCIENCE",
  headline: {
    start: "Full-stack ",
    accent: "web developer",
    end: " who also designs, markets and creates AI video.",
  },
  subtext:
    "TYBSc Computer Science student building complete web apps, from the interface to the database. I also create AI video, run digital marketing and design in Canva.",
  ctaPrimary: {
    text: "View Projects",
    href: "#projects",
  },
  ctaSecondary: {
    text: "Download Resume",
    href: "/resume/Payal-Kapse-Resume.pdf",
    downloadFilename: "Payal-Kapse-Resume.pdf",
  },
  secondarySkillsLabel: "ALSO SKILLED IN",
  secondarySkills: [
    {
      id: "digital-marketing",
      name: "Digital Marketing",
      icon: "trending_up",
    },
    {
      id: "ai-video",
      name: "AI Video",
      icon: "movie_filter",
    },
    {
      id: "graphic-design",
      name: "Graphic Design (Canva)",
      icon: "draw",
    },
  ],
  cards: [
    {
      id: "frontend",
      index: 0,
      badge: "CLIENT LAYER",
      title: "Frontend",
      description: "Interactive, fluid responsive interfaces with polished micro-interactions and state flow.",
      icon: "code",
      chips: ["[Stack 1]", "[Stack 2]", "[Stack 3]", "[Stack 4]"],
    },
    {
      id: "fullstack",
      index: 1,
      badge: "CORE FOCUS",
      title: "Full-Stack Web Development",
      description: "Frontend to backend: I design, build and ship complete web apps.",
      icon: "layers",
      isHighlight: true,
      chips: ["[Stack 1]", "[Stack 2]", "[Stack 3]", "[Stack 4]"],
    },
    {
      id: "backend",
      index: 2,
      badge: "SERVER & DATA",
      title: "Backend",
      description: "Reliable APIs, asynchronous server workflows, structured schemas and data pipelines.",
      icon: "database",
      chips: ["[Stack 1]", "[Stack 2]", "[Stack 3]", "[Stack 4]"],
    },
  ],
};
