"use client";

import { useState } from "react";
import { siteConfig } from "@/content/siteConfig";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-outline-variant/40 transition-all duration-300">
      <div className="h-20 max-w-[1240px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Brand & Discipline Badge */}
        <div className="flex items-center gap-space-sm">
          <a
            className="flex items-center gap-2 group min-h-[44px]"
            data-path="about"
            href="#"
            onClick={closeMobileMenu}
          >
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              {siteConfig.name}
            </span>
          </a>
          <span
            className="hidden sm:inline-flex items-center font-label-sm text-label-sm uppercase px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-container"
            style={{
              backgroundColor: "rgb(252, 228, 236)",
              color: "rgb(224, 85, 143)",
            }}
          >
            {siteConfig.role}
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          data-active-classes="text-primary font-semibold"
        >
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.label}
              className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors py-2"
              data-path={item.label.toLowerCase()}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Download Resume Button */}
          <a
            className="hidden sm:inline-flex items-center justify-center font-body-sm text-body-sm text-on-primary bg-primary hover:bg-primary-container px-5 py-2.5 rounded-full shadow-[0_2px_10px_-2px_rgba(168,39,99,0.3)] hover:shadow-[0_4px_16px_rgba(168,39,99,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            href={siteConfig.resumeUrl}
            style={{
              backgroundColor: "rgb(224, 85, 143)",
              color: "rgb(255, 255, 255)",
            }}
          >
            <span>Download Resume</span>
          </a>

          {/* Mode Toggle / Profile Avatar Button */}
          <button
            type="button"
            aria-label="User Profile and Mode Toggle"
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: "rgb(224, 85, 143)" }}
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-xl border-b border-outline-variant/40 px-6 py-6 flex flex-col gap-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="min-h-[44px] flex items-center font-body-md text-[16px] text-on-surface-variant hover:text-primary hover:bg-secondary-fixed/30 px-4 py-2.5 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-outline-variant/30 sm:hidden">
            <a
              href={siteConfig.resumeUrl}
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center font-body-sm text-body-sm text-on-primary bg-primary hover:bg-primary-container px-5 py-3 rounded-full shadow-md transition-all active:translate-y-0 min-h-[44px]"
              style={{
                backgroundColor: "rgb(224, 85, 143)",
                color: "rgb(255, 255, 255)",
              }}
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
