"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { ChevronLeftIcon, ChevronRightIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="relative w-full bg-transparent py-20 px-6 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              My Projects
            </h2>
            <p className="mt-2 text-sm text-neutral-400 sm:text-base">
              A showcase of web and mobile interfaces designed for seamless user experiences.
            </p>
          </div>

          {/* View All Projects Button - Mobile top right / Desktop visible */}
          <div className="sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-semibold text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800"
            >
              <span>View all projects</span>
              <ExternalLinkIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>

        {/* Carousel Viewport */}
        <div className="mt-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
            >
              {[0, 1].map((offset) => {
                const projectIndex = (currentIndex + offset) % projects.length;
                const project = projects[projectIndex];
                return (
                  <motion.div
                    key={`${project.id}-${offset}`}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2D2D38] bg-[#18181E] p-4 transition-colors duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/30 sm:p-6"
                  >
                    {/* Mockup Image Container */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-neutral-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="mt-6 flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white sm:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                          {project.summary}
                        </p>
                      </div>

                      {/* Bottom Metadata & CTA */}
                      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                        <span className="text-xs font-medium text-neutral-400">
                          {project.category}
                        </span>
                        <Link
                          href={`/projects/${project.slug}`}
                          className="rounded-full border border-neutral-700 bg-[#22222B] px-5 py-2 text-xs font-semibold text-white transition-all hover:border-purple-400 hover:bg-[#2D17BB]"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls Row */}
        <div className="mt-10 flex items-center justify-center sm:justify-between">
          {/* Arrow Buttons & Pagination Dots */}
          <div className="flex items-center gap-4">
            {/* Prev Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={prevSlide}
              aria-label="Previous project slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-[#1A1A22] text-neutral-300 transition-all hover:border-neutral-500 hover:bg-[#252530] hover:text-white"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-[#2D17BB] shadow-sm shadow-[#2D17BB]"
                      : "w-2.5 bg-neutral-600 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={nextSlide}
              aria-label="Next project slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-700 bg-[#1A1A22] text-neutral-300 transition-all hover:border-neutral-500 hover:bg-[#252530] hover:text-white"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </motion.button>
          </div>

          {/* View All Projects Link on Desktop */}
          <div className="hidden sm:block">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-300 transition-colors hover:text-white"
            >
              <span>View all projects</span>
              <span className="transition-transform group-hover:translate-x-1">
                <ExternalLinkIcon className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
