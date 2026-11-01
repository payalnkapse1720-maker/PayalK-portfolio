import type { Metadata, Viewport } from "next";
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A0D12",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Payal Kapse — Full-Stack Web Developer & Portfolio",
  description:
    "TYBSc Computer Science student and full-stack web developer who also designs, markets and creates AI video.",
  other: {
    "theme-color": "#1A0D12",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <meta name="theme-color" content="#1A0D12" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="font-body-md text-text-primary antialiased selection:bg-[rgba(240,138,163,0.35)] selection:text-text-primary relative min-h-screen flex flex-col bg-page">
        {/* Backdrop Orbs Layer */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        >
          {/* Orb 1: Wine #5A1A30 (Top-left / behind Hero & Skills) */}
          <div
            className="orb-wine absolute w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] lg:w-[900px] lg:h-[900px] rounded-full top-[-100px] left-[-150px] lg:top-[-120px] lg:left-[-180px] blur-[80px] sm:blur-[110px] lg:blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, #5A1A30 0%, rgba(90, 26, 48, 0.7) 45%, transparent 75%)",
            }}
          />
          {/* Orb 2: Rose #E0708A at ~25% opacity (Top-right / behind Hero & Skills) */}
          <div
            className="orb-rose absolute w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] lg:w-[850px] lg:h-[850px] rounded-full top-[10%] right-[-120px] lg:top-[5%] lg:right-[-160px] blur-[80px] sm:blur-[110px] lg:blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(224, 112, 138, 0.25) 0%, rgba(224, 112, 138, 0.16) 45%, transparent 75%)",
            }}
          />
          {/* Orb 3: Deep Magenta #7A2146 (Mid/Bottom / behind Projects, Experience & Contact) */}
          <div
            className="orb-magenta absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] rounded-full bottom-[-100px] left-[15%] sm:left-[25%] blur-[90px] sm:blur-[120px] lg:blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, #7A2146 0%, rgba(122, 33, 70, 0.65) 45%, transparent 75%)",
            }}
          />
        </div>

        {/* Content Container (Layered above Orbs) */}
        <div className="relative z-10 min-h-screen flex flex-col flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
