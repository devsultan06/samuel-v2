"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";

interface ProjectShowcaseProps {
  project: Project;
  prevProject: Project;
  nextProject: Project;
  allProjects: Project[];
  projectIndex: number;
}

export function ProjectShowcase({
  project,
  prevProject,
  nextProject,
  allProjects,
  projectIndex,
}: ProjectShowcaseProps) {
  return (
    <section className="relative w-full pt-12 pb-16 px-6 sm:pt-16 md:pt-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-[#2D2D38]/80 bg-[#16161D]/90 shadow-2xl backdrop-blur-sm"
        >
          {/* Device Mockup */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 sm:aspect-[16/9]">
            <Image
              src={project.image}
              alt={`${project.title} mockup`}
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Project Details Panel */}
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {project.title} ({project.year})
            </h2>

            <p className="mt-3 text-base leading-relaxed text-neutral-300">
              {project.summary}
            </p>

            {/* Problem Statement */}
            <div className="mt-8 border-t border-white/5 pt-6">
              <p className="text-base leading-relaxed text-neutral-300">
                <strong className="font-bold text-white">Problem:</strong>{" "}
                {project.problem}
              </p>
            </div>

            {/* Solution Statement */}
            <div className="mt-6 border-t border-white/5 pt-6">
              <p className="text-base leading-relaxed text-neutral-300">
                <strong className="font-bold text-white">Solution:</strong>{" "}
                {project.solution}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Project Switcher Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {/* Previous Project Link */}
          <Link
            href={`/projects/${prevProject.slug}`}
            aria-label={`Go to previous project: ${prevProject.title}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-[#1A1A22] text-neutral-300 transition-all hover:border-neutral-500 hover:bg-[#252530] hover:text-white"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </Link>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2.5">
            {allProjects.map((p, idx) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                aria-label={`View ${p.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === projectIndex
                    ? "w-8 bg-[#2D17BB] shadow-sm shadow-[#2D17BB]"
                    : "w-2.5 bg-neutral-600 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          {/* Next Project Link */}
          <Link
            href={`/projects/${nextProject.slug}`}
            aria-label={`Go to next project: ${nextProject.title}`}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-[#1A1A22] text-neutral-300 transition-all hover:border-neutral-500 hover:bg-[#252530] hover:text-white"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
