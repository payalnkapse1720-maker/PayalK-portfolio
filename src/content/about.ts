export interface AboutContent {
  sectionId: string;
  badge: string;
  heading: {
    start: string;
    accent: string;
    end: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  paragraphs: string[];
  statChips: string[];
}

export const aboutContent: AboutContent = {
  sectionId: "about",
  badge: "ABOUT",
  heading: {
    start: "Building thoughtful web products with ",
    accent: "purpose",
    end: " and precision.",
  },
  image: {
    src: "/payal.jpg",
    alt: "Payal Kapse",
    width: 800,
    height: 800,
  },
  paragraphs: [
    "TYBSc Computer Science student who builds responsive websites and web apps from the interface to the database.",
    "I also create AI video, edit with Canva and CapCut or VN, and manage social media content.",
  ],
  statChips: [
    "4 client sites live",
    "Frontend + Backend",
    "AI video · Canva · Social media",
  ],
};
