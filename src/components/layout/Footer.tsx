"use client";

import React from "react";
import Image from "next/image";
import {
  XIcon,
  LinkedInIcon,
  TikTokIcon,
  InstagramIcon,
  ChevronUpIcon,
} from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-transparent pt-16 pb-10 text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Prominent Email */}
        <div className="flex justify-center text-center">
          <a
            href="mailto:ademolasamuel280@gmail.com"
            className="text-lg font-medium text-neutral-200 transition-colors hover:text-[#5848C3] sm:text-xl md:text-2xl"
          >
            ademolasamuel280@gmail.com
          </a>
        </div>

        {/* Social Icons & Brand Row */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 sm:flex-row">
          {/* Logo & Brand text - uses /logo.png */}
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9">
              <Image
                src="/logo.png"
                alt="Samuel's Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-neutral-300">
              Sam’s Art and Tech
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://x.com/sam_d_artist?s=11&t=OypTPkmp9VXkaPhnhYMeNg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-neutral-400 transition-colors hover:text-white"
            >
              <XIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-ademola-a532272bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 transition-colors hover:text-[#0A66C2]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@samuels_art7?_r=1&_t=ZS-9Am3iBjjpua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-neutral-400 transition-colors hover:text-[#FE2C55]"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/samuels_art7?exln=anpkdmdjYno4Zzl2&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-neutral-400 transition-colors hover:text-[#E4405F]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all hover:border-neutral-500 hover:bg-white/5 hover:text-white"
            >
              <ChevronUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Ademola-Samuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
