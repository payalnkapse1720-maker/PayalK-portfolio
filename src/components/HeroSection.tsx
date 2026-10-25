"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { heroContent, HeroCardData } from "@/content/hero";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);
  const [focusedCardIdx, setFocusedCardIdx] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(1200);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      // Account for at least 24px margin on both sides (min 48px margins)
      const available = Math.min(w - 48, 1240);
      setContainerWidth(available);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Center card is ~460px on desktop (>=1200px), side cards ~380px
  // Adaptively scaled down slightly if containerWidth is tight on 1024px
  const centerCardWidth = containerWidth >= 1200 ? 460 : Math.round(containerWidth * 0.38);
  const sideCardWidth = containerWidth >= 1200 ? 380 : Math.round(containerWidth * 0.32);

  // Deck spread: Card 0 (Frontend, left), Card 1 (Full-Stack, center), Card 2 (Backend, right)
  // Ensure left card outer edge and right card outer edge stay >= 24px from viewport edge
  const maxSpreadX = Math.max(160, Math.min(340, (containerWidth - sideCardWidth) / 2 - 24));

  const getCardTransform = (idx: number) => {
    const isCenter = idx === 1;
    const isElevated = hoveredCardIdx === idx || focusedCardIdx === idx;

    // Relative offset: idx 0 -> -1 (left), idx 1 -> 0 (center), idx 2 -> +1 (right)
    const offsetDir = idx === 0 ? -1 : idx === 2 ? 1 : 0;
    const baseX = offsetDir * maxSpreadX;
    const baseRotY = offsetDir * 8; // ~8 degrees rotated toward center
    const baseRotZ = offsetDir * 3.5; // slight fan tilt
    const baseY = isCenter ? 0 : 12; // slight vertical arc
    const baseZ = isCenter ? 40 : 10; // center card stepped in front
    const baseZIndex = isCenter ? 30 : 20;

    if (shouldReduceMotion) {
      return {
        x: baseX,
        y: isElevated ? -8 : baseY,
        rotateY: 0,
        rotateZ: 0,
        z: 0,
        scale: isElevated ? 1.02 : 1,
        zIndex: isElevated ? 50 : baseZIndex,
      };
    }

    return {
      x: baseX,
      y: isElevated ? baseY - 16 : baseY,
      rotateY: isElevated ? 0 : baseRotY,
      rotateZ: isElevated ? 0 : baseRotZ,
      z: isElevated ? baseZ + 40 : baseZ,
      scale: isElevated ? 1.04 : 1,
      zIndex: isElevated ? 50 : baseZIndex,
    };
  };

  // Re-order for mobile carousel: Full-Stack (index 1) first, then Frontend (0), Backend (2)
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
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full font-label-sm text-[13px] uppercase tracking-wider text-action-accent shadow-xs"
            style={{
              backgroundColor: "rgb(252, 228, 236)",
              border: "1px solid rgb(243, 211, 223)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-action-accent animate-pulse" />
            {heroContent.badge}
          </span>
        </div>

        {/* Hero Headline & Subtext */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline-lg text-[42px] md:text-[62px] lg:text-[72px] leading-[1.08] tracking-[-0.02em] font-semibold text-[#1C1C28] mb-6">
            {heroContent.headline.start}
            <span className="italic font-normal text-[#E0558F]">
              {heroContent.headline.accent}
            </span>
            {heroContent.headline.end}
          </h1>
          <p className="font-body-lg text-[16px] md:text-[18px] leading-[1.6] text-[#55556A] max-w-2xl mx-auto mb-10">
            {heroContent.subtext}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={heroContent.ctaPrimary.href}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              style={{
                backgroundColor: "rgb(224, 85, 143)",
                boxShadow: "rgba(224, 85, 143, 0.35) 0px 8px 24px -4px",
              }}
            >
              {heroContent.ctaPrimary.text}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              download={heroContent.ctaSecondary.downloadFilename}
              className="inline-flex items-center justify-center px-7 py-3 rounded-full font-body-md font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px]"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                color: "rgb(224, 85, 143)",
                border: "1px solid rgb(224, 85, 143)",
                boxShadow: "rgba(244, 114, 168, 0.1) 0px 4px 16px",
              }}
            >
              <span className="material-symbols-outlined text-[18px] mr-1.5">
                download
              </span>
              {heroContent.ctaSecondary.text}
            </a>
          </div>
        </div>

        {/* 3D Always-Fanned Frosted Glass Deck Showcase Canvas (Desktop >= 1024px) */}
        <div className="relative mt-4 lg:mt-8 w-full flex flex-col items-center overflow-visible">
          <div
            className="hidden lg:flex relative w-full h-[580px] lg:h-[620px] py-6 px-6 items-center justify-center overflow-visible"
            style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
          >
            {heroContent.cards.map((card: HeroCardData) => {
              const isCenter = card.isHighlight;
              const cardWidth = isCenter ? centerCardWidth : sideCardWidth;
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
                    rotateZ: transform.rotateZ,
                    z: transform.z,
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
                    minHeight: isCenter ? "450px" : "410px",
                    transformStyle: "preserve-3d",
                    zIndex: transform.zIndex,
                    background: isCenter
                      ? "rgba(255, 255, 255, 0.94)"
                      : "rgba(255, 255, 255, 0.82)",
                    backdropFilter: isCenter ? "blur(20px)" : "blur(16px)",
                    WebkitBackdropFilter: isCenter ? "blur(20px)" : "blur(16px)",
                    border: isElevated
                      ? "2px solid #E0558F"
                      : isCenter
                      ? "1.5px solid #F472A8"
                      : "1px solid #F3D3DF",
                    boxShadow: isElevated
                      ? "0 28px 60px -8px rgba(224, 85, 143, 0.38), 0 0 0 1px #E0558F"
                      : isCenter
                      ? "0 24px 54px -6px rgba(224, 85, 143, 0.28)"
                      : "0 16px 40px -8px rgba(244, 114, 168, 0.16)",
                  }}
                >
                  {/* Subtle Idle Float animation applied inside to isolate transforms */}
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? { y: 0 }
                        : {
                            y: [0, -3.5, 0],
                            transition: {
                              duration: 4.5,
                              repeat: Infinity,
                              repeatType: "mirror",
                              ease: "easeInOut",
                              delay: card.index * 0.7,
                            },
                          }
                    }
                    className="flex flex-col justify-between h-full w-full"
                  >
                    <div>
                      {/* Card Header: Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs ${
                            isCenter
                              ? "bg-action-accent text-white"
                              : "bg-blush-tint text-action-accent"
                          }`}
                          style={{
                            backgroundColor: isCenter
                              ? "rgb(224, 85, 143)"
                              : "rgb(252, 228, 236)",
                          }}
                        >
                          <span className="material-symbols-outlined text-[28px]">
                            {card.icon}
                          </span>
                        </span>

                        <span
                          className={`font-label-sm text-[13px] uppercase tracking-wider px-3 py-1 rounded-full ${
                            isCenter
                              ? "text-action-accent font-semibold shadow-xs"
                              : "text-action-accent font-medium"
                          }`}
                          style={{
                            backgroundColor: "rgb(252, 228, 236)",
                            border: isCenter ? "1px solid #F472A8" : "1px solid #F3D3DF",
                          }}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Card Title & Description */}
                      <h3
                        className={`font-headline-sm font-semibold text-[#1C1C28] mb-3 ${
                          isCenter ? "text-[26px] lg:text-[28px]" : "text-[24px] lg:text-[25px]"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p className="font-body-sm text-[15px] leading-relaxed text-[#55556A] mb-6">
                        {card.description}
                      </p>
                    </div>

                    {/* Card Tech Chips (up to 4 placeholders) */}
                    <div
                      className="pt-4 flex flex-wrap gap-2 items-center"
                      style={{ borderTop: "1px dashed #F3D3DF" }}
                    >
                      {card.chips.map((chip, chipIdx) => (
                        <span
                          key={chipIdx}
                          className="px-2.5 py-1 rounded-md font-label-sm text-[13px] text-[#1C1C28] font-medium"
                          style={{
                            backgroundColor: "rgb(252, 228, 236)",
                            border: "1px solid rgb(243, 211, 223)",
                          }}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </motion.div>
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
                  className="w-[85vw] max-w-[360px] shrink-0 snap-center rounded-3xl p-6 flex flex-col justify-between"
                  style={{
                    background: isCenter
                      ? "rgba(255, 255, 255, 0.94)"
                      : "rgba(255, 255, 255, 0.82)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    border: isCenter
                      ? "1.5px solid #F472A8"
                      : "1px solid #F3D3DF",
                    boxShadow: isCenter
                      ? "0 20px 48px -6px rgba(224, 85, 143, 0.28)"
                      : "0 12px 32px -8px rgba(244, 114, 168, 0.15)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                          isCenter
                            ? "bg-action-accent text-white"
                            : "bg-blush-tint text-action-accent"
                        }`}
                        style={{
                          backgroundColor: isCenter
                            ? "rgb(224, 85, 143)"
                            : "rgb(252, 228, 236)",
                        }}
                      >
                        <span className="material-symbols-outlined text-[24px]">
                          {card.icon}
                        </span>
                      </span>

                      <span
                        className="font-label-sm text-[12px] uppercase tracking-wider px-2.5 py-0.5 rounded-full text-action-accent font-semibold"
                        style={{
                          backgroundColor: "rgb(252, 228, 236)",
                          border: isCenter ? "1px solid #F472A8" : "1px solid #F3D3DF",
                        }}
                      >
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="font-headline-sm text-[23px] font-semibold text-[#1C1C28] mb-2">
                      {card.title}
                    </h3>
                    <p className="font-body-sm text-[14px] leading-relaxed text-[#55556A] mb-5">
                      {card.description}
                    </p>
                  </div>

                  <div
                    className="pt-3 flex flex-wrap gap-2 items-center"
                    style={{ borderTop: "1px dashed #F3D3DF" }}
                  >
                    {card.chips.map((chip, chipIdx) => (
                      <span
                        key={chipIdx}
                        className="px-2 py-0.5 rounded-md font-label-sm text-[12px] text-[#1C1C28] font-medium"
                        style={{
                          backgroundColor: "rgb(252, 228, 236)",
                          border: "1px solid rgb(243, 211, 223)",
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
            <span className="font-label-sm text-[13px] uppercase tracking-wider text-[#55556A] font-semibold">
              {heroContent.secondarySkillsLabel}:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {heroContent.secondarySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs"
                  style={{
                    border: "1px solid #F3D3DF",
                  }}
                >
                  <span className="material-symbols-outlined text-[16px] text-action-accent">
                    {skill.icon}
                  </span>
                  <span className="font-label-sm text-[13px] font-medium text-[#1C1C28]">
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
