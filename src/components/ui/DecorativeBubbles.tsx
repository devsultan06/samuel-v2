"use client";

import React from "react";
import { motion } from "framer-motion";

export function DecorativeBubbles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Left Bubble */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-4 left-[12%] h-12 w-12 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-14 md:w-14"
      />

      {/* Top Right Bubble */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, -8, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1 right-[22%] h-8 w-8 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-10 md:w-10"
      />

      {/* Bottom Left Bubble */}
      <motion.div
        animate={{
          y: [0, -16, 0],
          x: [0, -6, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-2 left-[5%] h-16 w-16 rounded-full bg-gradient-to-br from-[#44327d] to-[#1a1238] opacity-75 blur-[2px] md:h-20 md:w-20"
      />

      {/* Bottom Right Bubble */}
      <motion.div
        animate={{
          y: [0, 14, 0],
          x: [0, 8, 0],
          scale: [1, 0.96, 1],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1 right-[10%] h-14 w-14 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-16 md:w-16"
      />
    </div>
  );
}
