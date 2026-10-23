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
    <footer className="w-full bg-transparent pt-14 pb-10 text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Main Footer Row: 3 columns to guarantee dead-center alignment */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
          {/* Left Column: Brand Logo & Title */}
          <div className="flex flex-col items-center gap-1.5 md:items-start">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Sam’s Logo"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <span className="text-sm font-medium text-neutral-300">
              Sam’s Art and Tech
            </span>
          </div>

          {/* Center Column: Prominent Email & BIG Centralized Social Icons */}
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <a
              href="mailto:ademolasamuel280@gmail.com"
              className="text-base font-medium text-neutral-200 transition-colors hover:text-white sm:text-lg md:text-xl"
            >
              ademolasamuel280@gmail.com
            </a>

            {/* Bigger, Centralized Social Links */}
            <div className="flex items-center justify-center gap-6 sm:gap-7">
              <a
                href="https://x.com/sam_d_artist?s=11&t=OypTPkmp9VXkaPhnhYMeNg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white transition-all duration-200 hover:scale-110 hover:text-neutral-300"
              >
                <XIcon className="h-8 w-8 sm:h-9 sm:w-9" />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-ademola-a532272bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-transform duration-200 hover:scale-110"
              >
                <LinkedInIcon className="h-8 w-8 sm:h-9 sm:w-9" />
              </a>
              <a
                href="https://www.tiktok.com/@samuels_art7?_r=1&_t=ZS-9Am3iBjjpua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="transition-transform duration-200 hover:scale-110"
              >
                <TikTokIcon className="h-8 w-8 sm:h-9 sm:w-9" />
              </a>
              <a
                href="https://www.instagram.com/samuels_art7?exln=anpkdmdjYno4Zzl2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-transform duration-200 hover:scale-110"
              >
                <InstagramIcon className="h-8 w-8 sm:h-9 sm:w-9" />
              </a>
            </div>
          </div>

          {/* Right Column: Scroll to Top */}
          <div className="flex items-center justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/50 text-neutral-300 transition-all hover:border-neutral-500 hover:bg-white/5 hover:text-white"
            >
              <ChevronUpIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Ademola-Samuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
