"use client";

import React from "react";
import Image from "next/image";
import {
  XIcon,
  LinkedInIcon,
  TikTokIcon,
  InstagramIcon,
} from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="w-full bg-transparent pt-14 pb-10 text-neutral-400">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Main Footer Row: 2 balanced items centered on the page */}
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row px-4">
          {/* Left: Brand Logo & Title */}
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

          {/* Right: Email & Centralized Social Icons */}
          <div className="flex flex-col items-center gap-4 text-center md:items-end md:text-right">
            <a
              href="mailto:ademolasamuel280@gmail.com"
              className="text-base font-medium text-neutral-200 transition-colors hover:text-white sm:text-lg md:text-xl"
            >
              ademolasamuel280@gmail.com
            </a>

            {/* Bigger Social Links */}
            <div className="flex items-center gap-6 sm:gap-7">
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
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-neutral-500">
          <p>© 2026 Ademola-Samuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
