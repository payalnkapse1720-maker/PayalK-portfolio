export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  title: string;
  description: string;
  resumeUrl: string;
  navLinks: NavItem[];
  footer: {
    copyright: string;
    links: SocialLink[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Payal Kapse",
  role: "Creative Technologist",
  title: "Payal Kapse — Creative Technologist & Portfolio",
  description:
    "2nd-year Computer Science student exploring scalable code, synthetic AI video, and high-impact digital design.",
  resumeUrl: "/resume/Payal-Kapse-Resume.pdf",
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Creative", href: "#creative" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  footer: {
    copyright: "© 2026 Payal Kapse. Crafted with care & code.",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com/in/[username]" },
      { label: "GitHub", href: "https://github.com/[username]" },
      { label: "Email", href: "mailto:hello@payalkapse.dev" },
      { label: "X", href: "https://x.com/[username]" },
    ],
  },
};
