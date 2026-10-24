import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Payal Kapse — Creative Technologist & Portfolio",
  description:
    "2nd-year Computer Science student exploring scalable code, synthetic AI video, and high-impact digital design.",
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
    >
      <head>
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
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed relative min-h-screen flex flex-col">
        {/* Ambient Radial Glow Blooms from Stitch HTML */}
        <div
          className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-secondary-container/15 blur-[120px]" />
          <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-primary-fixed/25 blur-[140px]" />
        </div>

        {children}
      </body>
    </html>
  );
}
