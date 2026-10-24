"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  XIcon,
  LinkedInIcon,
  TikTokIcon,
  InstagramIcon,
} from "@/components/ui/Icons";

interface NavbarProps {
  theme?: "light" | "dark";
}

export function Navbar({ theme = "light" }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isLight = theme === "light" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#111112]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
          : isLight
            ? "bg-[#FFFEFE] py-3.5 sm:py-4 md:py-5"
            : "bg-[#111112] py-3.5 sm:py-4 md:py-5"
      }`}
    >
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
        {/* Mobile: Hamburger on left */}
        <div className="z-10 flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className={`p-1.5 focus:outline-none ${
              isLight ? "text-neutral-900" : "text-white"
            }`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Brand Logo - Exactly centralized on phone screens, normal flex on desktop */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center md:static md:left-auto md:top-auto md:translate-x-0 md:translate-y-0">
          <Link href="/" className="group flex items-center">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 md:h-12 md:w-12 transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Samuel's Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-[15px] font-medium transition-colors ${
                  active
                    ? isLight
                      ? "text-neutral-950 font-semibold"
                      : "text-white font-semibold"
                    : isLight
                      ? "text-neutral-700 hover:text-neutral-950"
                      : "text-neutral-300 hover:text-white"
                }`}
              >
                <span>{link.label}</span>
                {/* Line starts from the left edge and spans to the middle */}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2.5px] w-6 rounded-full bg-[#2D17BB]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hire Me CTA Button - Compact on phone screen */}
        <div className="z-10 flex items-center">
          <Link
            href="/hire-me"
            className={`rounded-full px-4 py-1.5 text-xs sm:px-7 sm:py-2.5 sm:text-sm font-medium transition-all duration-200 ${
              isLight
                ? "border border-[#2D17BB]/30 text-[#2D17BB] hover:bg-[#2D17BB]/5 hover:border-[#2D17BB]"
                : "border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400"
            }`}
          >
            Hire me
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#111112] text-white">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="relative h-10 w-10">
              <Image
                src="/logo.png"
                alt="Samuel's Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-8 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-bold transition-colors ${
                  isLinkActive(link.href)
                    ? "text-[#5848C3]"
                    : "text-neutral-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/hire-me"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-[#2D17BB] px-8 py-3 text-base font-semibold text-white shadow-lg shadow-[#2D17BB]/30"
            >
              Hire me
            </Link>
          </div>

          <div className="border-t border-white/10 p-8">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Connect with me
            </p>
            <div className="mt-4 flex items-center gap-6">
              <a
                href="https://x.com/sam_d_artist?s=11&t=OypTPkmp9VXkaPhnhYMeNg"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="text-neutral-400 hover:text-white"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/samuel-ademola-a532272bb?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@samuels_art7?_r=1&_t=ZS-9Am3iBjjpua"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="text-neutral-400 hover:text-white"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/samuels_art7?exln=anpkdmdjYno4Zzl2&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
