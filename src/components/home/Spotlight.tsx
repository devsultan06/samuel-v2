"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TikTokIcon } from "@/components/ui/Icons";

const spotlightArtworks = [
  {
    id: "spotlight-1",
    title: "Blue Beaver Character",
    src: "/assets/spotlight/Rectangle 11.png",
    bg: "#388C8F",
    alt: "Vector illustration - Blue Beaver by Sam Art",
  },
  {
    id: "spotlight-2",
    title: "Parrot Character",
    src: "/assets/spotlight/Rectangle 10.png",
    bg: "#3A606C",
    alt: "Vector illustration - Parrot character by Sam Art",
  },
  {
    id: "spotlight-3",
    title: "Tom Character",
    src: "/assets/spotlight/spot1.jpeg",
    bg: "#3B1B47",
    alt: "Vector illustration - Tom character by Sam Art",
  },
  {
    id: "spotlight-4",
    title: "Sam Art Mouse",
    src: "/assets/spotlight/spot2.jpeg",
    bg: "#F9E493",
    alt: "Vector illustration - Sam Art Mouse character",
  },
];

export function Spotlight() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless infinite horizontal loop
  const marqueeItems = [...spotlightArtworks, ...spotlightArtworks];

  return (
    <section className="relative w-full bg-transparent py-20 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
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
      </div>

      {/* Horizontal Scrolling Artworks Carousel in Motion */}
      <div
        className="relative mt-10 w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Subtle left & right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-r from-[#111112] to-transparent sm:w-16 md:w-24" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-gradient-to-l from-[#111112] to-transparent sm:w-16 md:w-24" />

        {/* Marquee Track in Horizontal Motion */}
        <motion.div
          className="flex w-max gap-6 px-6 sm:gap-8"
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            },
          }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-white/30 cursor-pointer"
              style={{ backgroundColor: item.bg }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 360px"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Banner Row with TikTok Link */}
      <div className="mx-auto max-w-6xl px-6 md:px-8 mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/5 bg-[#16161C] p-6 sm:flex-row sm:items-center"
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
