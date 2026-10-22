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
        <div className="relative h-full w-[650px] sm:w-[800px] md:w-[920px] lg:w-[1050px] xl:w-[1150px] max-w-none flex items-end justify-center">
          <Image
            src="/Rectangle 2.png"
            alt="Ademola Samuel"
            fill
            priority
            className="object-contain object-bottom select-none"
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 950px, 1150px"
          />
        </div>
      </motion.div>

      {/* Foreground Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[620px] sm:min-h-[700px] md:min-h-[780px] lg:min-h-[840px] xl:min-h-[880px] max-w-6xl flex-col justify-end px-6 pb-8 pt-10 md:px-8 lg:pb-10">
        {/* Two-column layout: Left headline & badge, Right bio & CTA */}
        <div className="grid grid-cols-1 items-end justify-between gap-8 md:grid-cols-12">
          {/* Left Column: Badge & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-6 lg:col-span-7"
          >
            {/* Available For Work Badge - uses /Vector.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/90 bg-white/95 px-4 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <div className="relative h-4 w-4 flex-shrink-0">
                <Image
                  src="/Vector.png"
                  alt="Available for work icon"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                Available For Work
              </span>
            </motion.div>

            {/* Main Headline with Framer icon from /Vector1.png */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl md:text-[40px] md:leading-[1.12] lg:text-[46px] lg:leading-[1.1]"
            >
              UI/UX Designer &amp;
              <br />
              <span className="inline-flex items-center gap-2">
                <span className="relative inline-block h-6 w-5 sm:h-7 sm:w-6 lg:h-8 lg:w-6 flex-shrink-0">
                  <Image
                    src="/Vector1.png"
                    alt="Framer"
                    fill
                    className="object-contain"
                  />
                </span>
                <span>Framer Developer</span>
              </span>
              <br />
              Based in Lagos
            </motion.h1>
          </motion.div>

          {/* Right Column: Bio & See My Works CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-start md:col-span-6 md:items-end md:text-left lg:col-span-5"
          >
            <p className="max-w-sm text-sm leading-relaxed text-neutral-800 sm:text-[15px] sm:leading-relaxed bg-white/50 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none p-2 md:p-0 rounded-lg">
              Hello ! I’m <strong className="font-semibold text-neutral-950">Ademola Samuel</strong>, a passionate UI/UX designer obsessed with breathing life into ideas through{" "}
              <span className="inline-flex items-center gap-1 font-semibold text-neutral-950">
                <FigmaIcon className="inline-block h-3.5 w-3.5 align-middle" />
                <span>Figma</span>
              </span>
              . I craft sleek, user-first apps and websites engineered to feel as intuitive as they look striking.
            </p>

            {/* See My Works Button - purple pill with white circle arrow on left */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2D17BB] pl-3 pr-6 py-2.5 text-sm font-semibold text-white shadow-xl shadow-[#2D17BB]/35 transition-all duration-300 hover:bg-[#381FD1] hover:shadow-[#2D17BB]/50"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2D17BB] shadow-sm transition-transform group-hover:translate-x-0.5">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span>See my works</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
