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
  role: "FULL-STACK DEVELOPER",
  title: "Payal Kapse — Full-Stack Web Developer & Portfolio",
  description:
    "TYBSc Computer Science student and full-stack web developer who also designs, markets and creates AI video.",
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
