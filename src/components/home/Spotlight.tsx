"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TikTokIcon } from "@/components/ui/Icons";

export function Spotlight() {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Spotlight
          </h2>
          <p className="mt-2 text-sm text-neutral-400 sm:text-base">
            A collection of vibrant cartoon illustrations designed and crafted using Figma’s vector tools.
          </p>
        </motion.div>

        {/* 2 Cartoon Illustration Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Illustration 1 - Blue Beaver (Rectangle 11.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6, rotate: -0.5, transition: { duration: 0.25 } }}
            className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-[#388C8F] shadow-xl transition-shadow duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
          >
            <Image
              src="/assets/spotlight/Rectangle 11.png"
              alt="Vector illustration - Blue Beaver by Sam Art"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </motion.div>

          {/* Illustration 2 - Red Parrot (Rectangle 10.png) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6, rotate: 0.5, transition: { duration: 0.25 } }}
            className="group relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-[#3A606C] shadow-xl transition-shadow duration-300 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/10 cursor-pointer"
          >
            <Image
              src="/assets/spotlight/Rectangle 10.png"
              alt="Vector illustration - Parrot character by Sam Art"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 600px"
            />
          </motion.div>
        </div>

        {/* Bottom Banner Row with TikTok Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/5 bg-[#16161C] p-6 sm:flex-row sm:items-center"
        >
          <p className="text-sm text-neutral-300 sm:text-base">
            Head over to my TikTok to watch the step-by-step process behind these vector illustrations.
          </p>

          <a
            href="https://www.tiktok.com/@samuels_art7?_r=1&_t=ZS-9Am3iBjjpua"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-neutral-700 bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:border-neutral-500 hover:bg-neutral-800 hover:scale-105"
          >
            <span>click here</span>
            <TikTokIcon className="h-4 w-4 text-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
