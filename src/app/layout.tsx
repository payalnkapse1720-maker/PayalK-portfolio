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
      <body className="font-body-md text-text-primary antialiased selection:bg-[rgba(240,138,163,0.35)] selection:text-text-primary relative min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
