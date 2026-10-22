"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { Footer } from "@/components/layout/Footer";

export default function HireMePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mgaawqor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            "Unable to send message right now. Please try again."
        );
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please check your internet and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Light Navbar for white top header */}
      <Navbar theme="light" />

      {/* Header Section with White Background & Decorative Bubbles */}
      <section className="relative w-full bg-white pt-10 pb-16 px-6 text-center md:pt-16 md:pb-24 md:px-8 overflow-hidden">
        <DecorativeBubbles />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto max-w-2xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-950">
            Hire me
          </h1>

          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            Have a project or collaboration in mind? Drop me a message. I’d love to learn about your goals and discuss how we can bring your vision to life.
          </p>
        </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-2xl"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl border border-white/10 bg-[#16161D]/80 p-8 py-12 text-center backdrop-blur-sm"
                >
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
                    className="mt-6 inline-flex rounded-full bg-[#2D17BB] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#3922D6]"
                  >
                    Send another message
                  </button>
                </motion.div>
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
                      name="name"
                      required
                      placeholder="Jon doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 transition-all focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
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
                      name="email"
                      required
                      placeholder="@jondoe"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 transition-all focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
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
                      name="message"
                      required
                      rows={5}
                      placeholder="Write a message....."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-neutral-700/80 bg-[#0E0E14]/90 px-4 py-3.5 text-sm text-white placeholder-neutral-500 transition-all focus:border-[#5848C3] focus:outline-none focus:ring-1 focus:ring-[#5848C3]"
                    />
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-xs font-medium text-red-300"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {/* Submit Action */}
                  <div className="flex justify-end pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#2D17BB] px-10 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2D17BB]/30 transition-all duration-300 hover:bg-[#3922D6] hover:shadow-[#2D17BB]/50 focus:outline-none focus:ring-2 focus:ring-[#5848C3] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin text-white"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send</span>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </section>

          {/* Global Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
