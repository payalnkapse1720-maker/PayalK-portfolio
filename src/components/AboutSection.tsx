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
            background: "rgba(255, 255, 255, 0.82)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid #F3D3DF",
            boxShadow: "0 20px 54px -12px rgba(244, 114, 168, 0.16)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Circular Photo with 4px #F472A8 Ring */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 shrink-0"
                style={{
                  background: "linear-gradient(135deg, #F472A8, #E0558F)",
                  boxShadow: "0 16px 40px -8px rgba(224, 85, 143, 0.32)",
                }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden bg-blush-tint ring-4 ring-[#F472A8] ring-offset-2 ring-offset-white">
                  {!imageFailed ? (
                    <Image
                      src={aboutContent.image.src}
                      alt={aboutContent.image.alt}
                      width={aboutContent.image.width}
                      height={aboutContent.image.height}
                      priority
                      className="w-full h-full object-cover"
                      onError={() => setImageFailed(true)}
                    />
                  ) : (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-4 text-center"
                      style={{
                        background: "linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 50%, #F48FB1 100%)",
                      }}
                    >
                      <span className="material-symbols-outlined text-[48px] text-action-accent mb-1">
                        account_circle
                      </span>
                      <span className="font-headline-sm text-[18px] text-[#1C1C28] font-semibold">
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
              <span className="font-label-sm text-[13px] uppercase tracking-wider text-action-accent font-semibold block mb-3">
                {aboutContent.badge}
              </span>

              {/* Newsreader Heading with Italic #E0558F Word */}
              <h2 className="font-headline-lg text-[30px] sm:text-[36px] lg:text-[42px] leading-[1.18] font-semibold text-[#1C1C28] mb-6">
                {aboutContent.heading.start}
                <span className="italic font-normal text-[#E0558F]">
                  {aboutContent.heading.accent}
                </span>
                {aboutContent.heading.end}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 mb-8 text-[#55556A] font-body-md text-[15px] sm:text-[16px] leading-[1.65]">
                {aboutContent.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Stat Chips */}
              <div className="flex flex-wrap gap-2.5 pt-4" style={{ borderTop: "1px dashed #F3D3DF" }}>
                {aboutContent.statChips.map((chip, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full font-label-sm text-[13px] text-[#1C1C28] font-medium transition-all hover:border-action-accent"
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
