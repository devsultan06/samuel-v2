"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FigmaIcon, ArrowRightIcon } from "@/components/ui/Icons";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFEFE] text-neutral-900">
      {/* Background Central Portrait Image (Big, filling the hero canvas like Figma) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 top-0 z-0 flex items-end justify-center pointer-events-none overflow-hidden"
      >
        <div className="relative h-full w-[520px] sm:w-[640px] md:w-[880px] lg:w-[1000px] xl:w-[1100px] max-w-none flex items-end justify-center translate-y-6 sm:translate-y-4 md:translate-y-7 lg:translate-y-8 xl:translate-y-9">
          <Image
            src="/Rectangle 2.png"
            alt="Ademola Samuel"
            fill
            priority
            className="object-contain object-bottom select-none"
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 950px, 1100px"
          />
        </div>
      </motion.div>

      {/* Bottom fade to seamlessly eliminate any bottom shadow/edge before the stats bar */}
      <div className="absolute inset-x-0 bottom-0 h-8 sm:h-10 bg-gradient-to-t from-[#FFFEFE] to-transparent z-[1] pointer-events-none" />

      {/* Foreground Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[460px] sm:min-h-[560px] md:min-h-[700px] lg:min-h-[750px] xl:min-h-[780px] max-w-6xl flex-col justify-between md:flex-row md:items-end md:justify-between px-4 sm:px-6 md:px-8 pb-2 sm:pb-6 md:pb-8 pt-6 sm:pt-10 md:pt-16 lg:pb-10">

        {/* Top-Left: Badge & Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Available For Work Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-neutral-200/90 bg-white/95 px-3 py-1.5 sm:px-4 sm:py-1.5 shadow-sm backdrop-blur-sm"
          >
            <div className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0">
              <Image
                src="/Vector.png"
                alt="Available for work icon"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-semibold text-neutral-800 whitespace-nowrap">
              Available For Work
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xl leading-tight sm:text-2xl sm:leading-tight md:text-[40px] md:leading-[1.12] lg:text-[46px] lg:leading-[1.1] font-extrabold tracking-tight text-neutral-950"
          >
            UI/UX Designer &amp;
            <br />
            <span className="inline-flex items-center gap-1 sm:gap-1.5">
              <span className="relative inline-block h-5 w-3.5 sm:h-6 sm:w-4 md:h-8 md:w-5.5 lg:h-9 lg:w-6 flex-shrink-0">
                <Image
                  src="/Vector1.png"
                  alt="F"
                  fill
                  className="object-contain"
                />
              </span>
              <span>ramer Developer</span>
            </span>
            <br />
            Based in Lagos
          </motion.h1>
        </motion.div>

        {/* Bottom-Right: Bio & See My Works CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col items-end self-end md:self-auto md:items-start"
        >
          {/* Full bio for desktop */}
          <p className="hidden md:block max-w-sm text-[15px] leading-relaxed text-neutral-800 text-left">
            Hello ! I&apos;m <strong className="font-semibold text-neutral-950">Ademola Samuel</strong>, a passionate UI/UX designer obsessed with breathing life into ideas through{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-neutral-950">
              <FigmaIcon className="inline-block h-3.5 w-3.5 align-middle" />
              <span>Figma</span>
            </span>
            . I craft sleek, user-first apps and websites engineered to feel as intuitive as they look striking.
          </p>

          {/* See My Works Button */}
          <motion.div
            className="sm:mt-6"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#2D17BB] pl-2.5 pr-5 py-2 sm:pl-3 sm:pr-6 sm:py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2D17BB]/30 transition-all duration-300 hover:bg-[#381FD1] hover:shadow-[#2D17BB]/50 whitespace-nowrap"
            >
              <span className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white text-[#2D17BB] shadow-sm transition-transform group-hover:translate-x-0.5">
                <ArrowRightIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <span>See my works</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
