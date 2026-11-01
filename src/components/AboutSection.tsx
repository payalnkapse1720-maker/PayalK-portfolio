"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutContent } from "@/content/about";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id={aboutContent.sectionId}
      className="w-full py-20 lg:py-28 relative scroll-mt-24"
    >
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1140px] mx-auto px-margin-mobile md:px-margin"
      >
        {/* Glass Card Container */}
        <div
          className="rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            background: "rgba(38, 20, 27, 0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid var(--border)",
            boxShadow: "0 16px 40px -8px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Circular Photo with Accent Ring */}
            <div className="md:col-span-5 flex justify-center">
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 shrink-0"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--button))",
                  boxShadow: "0 16px 40px -8px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    backgroundColor: "var(--tint)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {!imageFailed ? (
                    <Image
                      src={aboutContent.image.src}
                      alt={aboutContent.image.alt}
                      width={aboutContent.image.width}
                      height={aboutContent.image.height}
                      priority
                      className="w-full h-full object-cover rounded-full"
                      style={{ border: "1px solid var(--border)" }}
                      onError={() => setImageFailed(true)}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-4 text-center rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #3A1A24 0%, #26141B 100%)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <span
                        className="material-symbols-outlined text-[48px] mb-1"
                        style={{ color: "var(--accent)" }}
                      >
                        account_circle
                      </span>
                      <span
                        className="font-headline-sm text-[18px] font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Payal Kapse
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Stats */}
            <div className="md:col-span-7 flex flex-col justify-center text-left">
              {/* Mono Label */}
              <span
                className="font-label-sm text-[13px] uppercase tracking-wider font-semibold block mb-3"
                style={{ color: "var(--accent)" }}
              >
                {aboutContent.badge}
              </span>

              {/* Newsreader Heading with Italic Accent Word */}
              <h2
                className="font-headline-lg text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] font-semibold mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {aboutContent.heading.start}
                <span className="italic font-normal" style={{ color: "var(--accent)" }}>
                  {aboutContent.heading.accent}
                </span>
                {aboutContent.heading.end}
              </h2>

              {/* Paragraphs */}
              <div
                className="space-y-4 mb-8 font-body-md text-[15px] sm:text-[16px] leading-[1.65]"
                style={{ color: "var(--text-muted)" }}
              >
                {aboutContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Stat Chips */}
              <div className="flex flex-wrap gap-2.5 pt-4" style={{ borderTop: "1px dashed var(--border)" }}>
                {aboutContent.statChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full font-label-sm text-[13px] font-medium transition-all"
                    style={{
                      backgroundColor: "var(--tint)",
                      border: "1px solid var(--border)",
                      color: "var(--chip-text)",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
