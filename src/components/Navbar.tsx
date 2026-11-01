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
    <header
      className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: "rgba(26, 13, 18, 0.55)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="h-20 max-w-[1240px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Brand & Discipline Badge */}
        <div className="flex items-center gap-space-sm">
          <a
            className="flex items-center gap-2 group min-h-[44px]"
            data-path="about"
            href="#"
            onClick={closeMobileMenu}
          >
            <span
              className="font-headline-sm text-headline-sm tracking-tight transition-colors group-hover:text-accent"
              style={{ color: "var(--text-primary)" }}
            >
              {siteConfig.name}
            </span>
          </a>
          <span
            className="hidden sm:inline-flex items-center font-label-sm text-label-sm uppercase px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: "var(--tint)",
              color: "var(--chip-text)",
              border: "1px solid var(--border)",
            }}
          >
            {siteConfig.role}
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.label}
              className="font-body-md text-body-md transition-colors py-2 hover:text-accent"
              style={{ color: "var(--text-muted)" }}
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
            download
            className="hidden sm:inline-flex items-center justify-center font-body-sm text-body-sm px-5 py-2.5 rounded-full transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
            href={siteConfig.resumeUrl}
            style={{
              backgroundColor: "var(--button)",
              color: "var(--button-text)",
              boxShadow: "var(--shadow-button)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button)")}
          >
            <span>Download Resume</span>
          </a>

          {/* Profile Avatar Link */}
          <a
            href="#contact"
            aria-label="Contact"
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95"
            style={{ backgroundColor: "var(--button)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button)")}
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ color: "var(--button-text)" }}
            >
              person
            </span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full transition-colors focus-visible:ring-2 focus-visible:outline-none"
            style={{
              color: "var(--text-primary)",
            }}
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
        <div
          className="lg:hidden w-full px-6 py-6 flex flex-col gap-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            backgroundColor: "rgba(26, 13, 18, 0.85)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <nav className="flex flex-col gap-1">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="min-h-[44px] flex items-center font-body-md text-[16px] px-4 py-2.5 rounded-xl transition-all hover:text-accent"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div
            className="pt-3 sm:hidden"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <a
              href={siteConfig.resumeUrl}
              download
              onClick={closeMobileMenu}
              className="w-full inline-flex items-center justify-center font-body-sm text-body-sm px-5 py-3 rounded-full transition-all active:translate-y-0 min-h-[44px]"
              style={{
                backgroundColor: "var(--button)",
                color: "var(--button-text)",
                boxShadow: "var(--shadow-button)",
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
