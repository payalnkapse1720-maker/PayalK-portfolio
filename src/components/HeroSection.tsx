"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent, HeroCardData } from "@/content/hero";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const [focusedCardIdx, setFocusedCardIdx] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive desktop card width & spread calculation
  // Card base width: ~340px at 1024px to ~370px at >=1440px
  const isLargeScreen = windowWidth >= 1440;
  const isMidScreen = windowWidth >= 1200;
  const cardWidth = isLargeScreen ? 370 : isMidScreen ? 355 : 340;

  // Maximum spread keeping >= 24px margins on both sides
  // Available width between 24px margins = windowWidth - 48
  // Max half-span from center = (available - cardWidth) / 2
  // We want side cards at least 80% visible, so center overlap <= 20% of cardWidth
  // Desired spread = cardWidth * 0.88 to 0.92
  const maxPossibleSpread = Math.max(260, (windowWidth - 48 - cardWidth) / 2);
  const spreadX = Math.min(
    Math.round(cardWidth * 0.90),
    maxPossibleSpread
  );

  const getCardTransform = (idx: number) => {
    const isCenter = idx === 1;
    const isElevated = hoveredCardIdx === idx || focusedCardIdx === idx;

    // Relative offset: idx 0 -> -1 (left), idx 1 -> 0 (center), idx 2 -> +1 (right)
    const offsetDir = idx === 0 ? -1 : idx === 2 ? 1 : 0;
    const baseX = offsetDir * spreadX;
    const baseRotY = offsetDir * 4; // reduced side-card rotateY to ~4 degrees
    const baseY = 0; // consistent vertical baseline
    const baseScale = isCenter ? 1.05 : 1.0;
    const baseZIndex = isCenter ? 30 : 20;

    if (shouldReduceMotion) {
      return {
        x: baseX,
        y: isElevated ? -8 : baseY,
        rotateY: 0,
        scale: isElevated ? baseScale * 1.02 : baseScale,
        zIndex: isElevated ? 50 : baseZIndex,
      };
    }

    return {
      x: baseX,
      y: isElevated ? baseY - 12 : baseY,
      rotateY: isElevated ? 0 : baseRotY,
      scale: isElevated ? baseScale * 1.03 : baseScale,
      zIndex: isElevated ? 50 : baseZIndex,
    };
  };

  // Mobile carousel order: Full-Stack (index 1) first, then Frontend (0), Backend (2)
  const mobileCards = [
    heroContent.cards[1],
    heroContent.cards[0],
    heroContent.cards[2],
  ];

  return (
    <section className="relative w-full overflow-hidden pb-20 lg:pb-32">
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1240px] mx-auto px-6 md:px-8 pt-6 lg:pt-12"
      >
        {/* Top Meta Badge */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-label-sm text-[13px] uppercase tracking-wider shadow-xs glass"
            style={{
              color: "var(--chip-text)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            {heroContent.badge}
          </span>
        </div>

        {/* Hero Headline & Subtext */}
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="font-headline-lg text-[42px] md:text-[62px] lg:text-[72px] leading-[1.08] tracking-[-0.02em] font-semibold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {heroContent.headline.start}
            <span className="italic font-normal" style={{ color: "var(--accent)" }}>
              {heroContent.headline.accent}
            </span>
            {heroContent.headline.end}
          </h1>
          <p
            className="font-body-lg text-[16px] md:text-[18px] leading-[1.6] max-w-2xl mx-auto mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            {heroContent.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={heroContent.ctaPrimary.href}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              style={{
                backgroundColor: "var(--button)",
                color: "var(--button-text)",
                boxShadow: "0 16px 40px -8px rgba(0, 0, 0, 0.5)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--button-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--button)")}
            >
              {heroContent.ctaPrimary.text}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              download={heroContent.ctaSecondary.downloadFilename}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] glass"
              style={{
                color: "var(--accent)",
                borderColor: "var(--accent)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--glass-bg-strong)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--glass-bg)")}
            >
              <span className="material-symbols-outlined text-[18px] mr-1.5" style={{ color: "var(--accent)" }}>
                download
              </span>
              {heroContent.ctaSecondary.text}
            </a>
          </div>
        </div>

        {/* 3D Always-Fanned Glass Deck Showcase Canvas (Desktop >= 1024px) */}
        {/* Notice: Perspective is on parent only. No transform-style: preserve-3d, ensuring backdrop-filter functions cleanly */}
        <div className="relative mt-4 lg:mt-8 w-full flex flex-col items-center overflow-visible">
          <div
            className="hidden lg:flex relative w-full h-[470px] py-6 px-6 items-center justify-center overflow-visible"
            style={{ perspective: "1200px" }}
          >
            {heroContent.cards.map((card: HeroCardData) => {
              const isCenter = card.isHighlight;
              const transform = getCardTransform(card.index);
              const isElevated = hoveredCardIdx === card.index || focusedCardIdx === card.index;

              return (
                <motion.div
                  key={card.id}
                  tabIndex={0}
                  onMouseEnter={() => setHoveredCardIdx(card.index)}
                  onMouseLeave={() => setHoveredCardIdx(null)}
                  onFocus={() => setFocusedCardIdx(card.index)}
                  onBlur={() => setFocusedCardIdx(null)}
                  animate={{
                    x: transform.x,
                    y: transform.y,
                    rotateY: transform.rotateY,
                    scale: transform.scale,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 240,
                    damping: 24,
                  }}
                  className="absolute rounded-3xl p-7 lg:p-8 cursor-pointer select-none outline-none flex flex-col justify-between"
                  style={{
                    width: `${cardWidth}px`,
                    height: "390px",
                    zIndex: transform.zIndex,
                    backgroundColor: isCenter ? "rgba(58, 26, 38, 0.82)" : "rgba(38, 20, 27, 0.78)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    WebkitBackdropFilter: "blur(20px) saturate(150%)",
                    border: isElevated
                      ? "2px solid var(--accent)"
                      : isCenter
                      ? "1.5px solid #F08AA3"
                      : "1px solid var(--glass-border)",
                    boxShadow: isElevated
                      ? "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 24px 50px -8px rgba(0, 0, 0, 0.6), 0 0 28px rgba(240, 138, 163, 0.25)"
                      : isCenter
                      ? "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 16px 40px -8px rgba(0, 0, 0, 0.5), 0 0 40px rgba(240, 138, 163, 0.18)"
                      : "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 16px 40px -8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="flex flex-col justify-between h-full w-full">
                    <div>
                      {/* Card Header: Icon & Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <span
                          className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                          style={{
                            backgroundColor: isCenter ? "var(--button)" : "var(--glass-bg-strong)",
                            color: isCenter ? "var(--button-text)" : "var(--accent)",
                            border: isCenter ? "none" : "1px solid var(--glass-border)",
                          }}
                        >
                          <span className="material-symbols-outlined text-[28px]">
                            {card.icon}
                          </span>
                        </span>

                        <span
                          className="font-label-sm text-[12px] uppercase tracking-wider px-3 py-1 rounded-full font-medium"
                          style={{
                            backgroundColor: "var(--glass-bg)",
                            border: isCenter ? "1px solid var(--accent)" : "1px solid var(--glass-border)",
                            color: "var(--chip-text)",
                          }}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Card Title & Description */}
                      <h3
                        className="font-headline-sm font-semibold mb-2.5 text-[24px] lg:text-[25px]"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="font-body-sm text-[14px] leading-relaxed mb-4"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {card.description}
                      </p>
                    </div>

                    {/* Card Tech Chips */}
                    <div
                      className="pt-4 flex flex-wrap gap-2 items-center"
                      style={{ borderTop: "1px dashed var(--glass-border)" }}
                    >
                      {card.chips.map((chip, chipIdx) => (
                        <span
                          key={chipIdx}
                          className="px-2.5 py-1 rounded-md font-label-sm text-[12px] font-medium"
                          style={{
                            backgroundColor: "var(--glass-bg)",
                            border: "1px solid var(--glass-border)",
                            color: "var(--chip-text)",
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tablet & Mobile Swipeable Carousel (Below 1024px) */}
          <div className="lg:hidden w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-5 pt-4 pb-8 scrollbar-none">
            {mobileCards.map((card: HeroCardData) => {
              const isCenter = card.isHighlight;

              return (
                <div
                  key={card.id}
                  className="w-[85vw] max-w-[360px] h-[390px] shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between"
                  style={{
                    backgroundColor: isCenter ? "rgba(58, 26, 38, 0.82)" : "rgba(38, 20, 27, 0.78)",
                    backdropFilter: "blur(20px) saturate(150%)",
                    WebkitBackdropFilter: "blur(20px) saturate(150%)",
                    border: isCenter
                      ? "1.5px solid #F08AA3"
                      : "1px solid var(--glass-border)",
                    boxShadow: isCenter
                      ? "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 16px 40px -8px rgba(0, 0, 0, 0.5), 0 0 40px rgba(240, 138, 163, 0.18)"
                      : "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 16px 40px -8px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: isCenter ? "var(--button)" : "var(--glass-bg-strong)",
                          color: isCenter ? "var(--button-text)" : "var(--accent)",
                          border: isCenter ? "none" : "1px solid var(--glass-border)",
                        }}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {card.icon}
                        </span>
                      </span>

                      <span
                        className="font-label-sm text-[12px] uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          backgroundColor: "var(--glass-bg)",
                          border: isCenter ? "1px solid var(--accent)" : "1px solid var(--glass-border)",
                          color: "var(--chip-text)",
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3
                      className="font-headline-sm text-[23px] font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="font-body-sm text-[14px] leading-relaxed mb-4"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div
                    className="pt-3 flex flex-wrap gap-2 items-center"
                    style={{ borderTop: "1px dashed var(--glass-border)" }}
                  >
                    {card.chips.map((chip, chipIdx) => (
                      <span
                        key={chipIdx}
                        className="px-2 py-0.5 rounded-md font-label-sm text-[12px] font-medium"
                        style={{
                          backgroundColor: "var(--glass-bg)",
                          border: "1px solid var(--glass-border)",
                          color: "var(--chip-text)",
                        }}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Under the Deck: "ALSO SKILLED IN" Row of 3 Secondary Skill Pills */}
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-20">
            <span
              className="font-label-sm text-[13px] uppercase tracking-wider font-semibold"
              style={{ color: "var(--text-muted)" }}
            >
              {heroContent.secondarySkillsLabel}:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {heroContent.secondarySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-xs glass"
                >
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ color: "var(--accent)" }}
                  >
                    {skill.icon}
                  </span>
                  <span
                    className="font-label-sm text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
