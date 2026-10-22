"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { Footer } from "@/components/layout/Footer";

export default function HireMePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Light Navbar for white top header */}
      <Navbar theme="light" />

      {/* Header Section with White Background & Decorative Bubbles */}
      <section className="relative w-full bg-white pt-10 pb-16 px-6 text-center md:pt-16 md:pb-24 md:px-8 overflow-hidden">
        <DecorativeBubbles />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-950">
            Hire me
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Have a project or collaboration in mind? Drop me a message. I’d love to learn about your goals and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Down Part: Dark Container with Top Curve & bg4.png Background */}
      <div className="relative w-full overflow-hidden bg-[#111112] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[64px]">
        {/* Background Layer: bg4.png from public folder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/bg4.png"
            alt="Hire me background"
            fill
            className="object-cover object-top select-none"
            sizes="100vw"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Contact Form Section */}
          <section className="relative w-full pt-12 pb-20 px-6 sm:pt-16 md:pt-20 md:px-8">
            <div className="mx-auto max-w-2xl">
              {submitted ? (
                <div className="relative rounded-2xl border border-white/10 bg-[#16161D]/80 p-8 py-12 text-center backdrop-blur-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2D17BB]/20 text-[#5848C3]">
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Thank you for reaching out. I’ll get back to you shortly at {formData.email || "your email"}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", message: "" });
                    }}
                    className="mt-6 inline-flex rounded-full bg-[#2D17BB] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#3922D6]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex flex-col gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-neutral-200"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Jon doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-neutral-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="@jondoe"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neutral-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Write a message....."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="rounded-xl bg-[#2D17BB] px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2D17BB]/30 transition-all duration-300 hover:bg-[#3922D6] hover:shadow-[#2D17BB]/50 focus:outline-none focus:ring-2 focus:ring-[#5848C3]"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>
          </section>

          {/* Global Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
