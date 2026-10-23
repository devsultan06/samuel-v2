"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function DecorativeBubbles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Top Left Circle (/tl.png) */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2 left-[14%] sm:left-[18%] md:left-[20%] w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      >
        <Image
          src="/tl.png"
          alt="Top left decorative circle"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Top Right Circle (/tr.png) */}
      <motion.div
        animate={{
          y: [0, 8, 0],
          x: [0, -6, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-4 right-[16%] sm:right-[20%] md:right-[24%] w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
      >
        <Image
          src="/tr.png"
          alt="Top right decorative circle"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bottom Left Circle (/bl.png) */}
      <motion.div
        animate={{
          y: [0, -14, 0],
          x: [0, -6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-6 left-[4%] sm:left-[6%] md:left-[8%] w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36"
      >
        <Image
          src="/bl.png"
          alt="Bottom left decorative circle"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bottom Right Circle (/br.png) */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          x: [0, 6, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute -bottom-4 right-[6%] sm:right-[8%] md:right-[10%] w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28"
      >
        <Image
          src="/br.png"
          alt="Bottom right decorative circle"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
