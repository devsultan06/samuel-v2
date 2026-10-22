"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { CTASection } from "@/components/layout/CTASection";
import { Footer } from "@/components/layout/Footer";
import { experiences } from "@/data/experience";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Light Navbar for white top header */}
      <Navbar theme="light" />

      {/* Header Section with White Background & Decorative Bubbles */}
      <section className="relative w-full bg-white pt-10 pb-16 px-6 text-center md:pt-16 md:pb-24 md:px-8 overflow-hidden">
        <DecorativeBubbles />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-950">
            About me
          </h1>

          <p className="mt-8 text-base leading-relaxed text-neutral-600 sm:text-lg">
            I’m <strong className="font-bold text-neutral-950">Ademola Samuel</strong>, a UI/UX Designer and Framer Developer with 3+ years of experience crafting intuitive digital products. I specialize in turning complex ideas into sleek, high-performing websites and user-focused interfaces, having designed over six complete digital projects and custom-built two Framer websites from scratch.
          </p>
        </motion.div>
      </section>

      {/* Down Part: Dark Container with Top Curve & bg3.png Background */}
      <div className="relative w-full overflow-hidden bg-[#111112] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[64px]">
        {/* Background Layer: bg3.png from public folder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/bg3.png"
            alt="About background"
            fill
            className="object-cover object-top select-none"
            sizes="100vw"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* My Experience Section */}
          <section className="relative w-full pt-12 pb-16 px-6 sm:pt-16 md:pt-20 md:px-8">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  My Experience
                </h2>
                <p className="mt-2 text-sm text-neutral-400 sm:text-base">
                  The cards below highlight key UI/UX projects, spanning both web and mobile application design.
                </p>
              </motion.div>

              {/* Experience Cards Stack */}
              <div className="mt-10 flex flex-col gap-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="grid grid-cols-1 gap-6 rounded-2xl border border-[#2D2D38] bg-[#18181E] p-6 transition-colors duration-300 hover:border-purple-500/40 hover:bg-[#1D1D26] md:grid-cols-12 md:p-8"
                  >
                    {/* Left Column: Role, Company, Year */}
                    <div className="md:col-span-4">
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-base font-semibold text-neutral-300">
                        {exp.company}
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-500">
                        {exp.year}
                      </p>
                    </div>

                    {/* Right Column: Description */}
                    <div className="md:col-span-8">
                      <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Shared CTA & Footer */}
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
