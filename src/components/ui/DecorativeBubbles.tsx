import React from "react";

export function DecorativeBubbles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Top Left Bubble */}
      <div className="absolute -top-4 left-[12%] h-12 w-12 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-14 md:w-14" />

      {/* Top Right Bubble */}
      <div className="absolute top-1 right-[22%] h-8 w-8 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-10 md:w-10" />

      {/* Bottom Left Bubble */}
      <div className="absolute bottom-2 left-[5%] h-16 w-16 rounded-full bg-gradient-to-br from-[#44327d] to-[#1a1238] opacity-75 blur-[2px] md:h-20 md:w-20" />

      {/* Bottom Right Bubble */}
      <div className="absolute bottom-1 right-[10%] h-14 w-14 rounded-full bg-gradient-to-br from-[#3b2d6b] to-[#1e153d] opacity-80 blur-[1px] md:h-16 md:w-16" />
    </div>
  );
}
