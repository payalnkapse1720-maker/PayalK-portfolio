export interface ProjectItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  status: "Live" | "In progress";
  type: string;
}

export interface ProjectsContent {
  sectionId: string;
  badge: string;
  heading: string;
  subheading: string;
  projects: ProjectItem[];
}

export const projectsContent: ProjectsContent = {
  sectionId: "projects",
  badge: "SELECTED WORK",
  heading: "Functional systems built with precision.",
  subheading: "5 Client & Production Builds",
  projects: [
    {
      id: "nirva-cottage",
      number: "01 / HOSPITALITY",
      category: "RESORT PLATFORM",
      title: "Nirva The Cottage & Resort",
      description:
        "Resort website with room categories and pricing, food packages, a gallery and a booking enquiry form that sends details to WhatsApp.",
      tags: ["Next.js", "WhatsApp booking", "Gallery", "SEO"],
      image: "/projects/project-1.png",
      liveUrl: "https://nirva-cottage-resort.vercel.app",
      status: "Live",
      type: "Client project",
    },
    {
      id: "itran-perfumes",
      number: "02 / COMMERCE",
      category: "E-COMMERCE STORE",
      title: "Itran",
      description:
        "E-commerce storefront for handcrafted perfume oils with collections, best sellers, cart and order tracking.",
      tags: ["E-commerce", "Cart", "Collections", "Responsive"],
      image: "/projects/project-2.png",
      liveUrl: "https://www.itran.in",
      status: "Live",
      type: "Client project",
    },
    {
      id: "shop-o-holics",
      number: "03 / COMMERCE",
      category: "ELECTRONICS STORE",
      title: "Shop-O-Holics",
      description:
        "Electronics store with brand browsing, product compare, wishlist, cart and account pages.",
      tags: ["E-commerce", "Compare", "Wishlist", "Accounts"],
      image: "/projects/project-3.png",
      liveUrl: "https://www.shopoholics.in",
      status: "Live",
      type: "Client project",
    },
    {
      id: "wenturex-india",
      number: "04 / ENTERPRISE",
      category: "VENTURE PLATFORM",
      title: "Wenturex India International",
      description:
        "Landing page for an upcoming platform connecting entrepreneurs and investors, with enquiry and WhatsApp contact.",
      tags: ["Landing page", "SEO", "WhatsApp", "Responsive"],
      image: "/projects/project-4.png",
      liveUrl: "https://www.wentureindia.com",
      status: "Live",
      type: "Client project",
    },
    {
      id: "dadas-it",
      number: "05 / INFRASTRUCTURE",
      category: "CORPORATE PORTAL",
      title: "Dada's IT",
      description:
        "Multi-page corporate website for an IT infrastructure and security company, with services, products, case studies and an admin login. Currently in development.",
      tags: ["Next.js", "Admin portal", "Multi-page", "SEO"],
      image: "/projects/project-5.png",
      liveUrl: "https://dada-s-it.vercel.app",
      status: "In progress",
      type: "Client project",
    },
  ],
};
