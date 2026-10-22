import React from "react";
import Image from "next/image";
import { processSteps } from "@/data/process";

export function DesignProcess() {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 text-white md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* About Me Section Header */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 sm:text-lg">
            I’m Ademola Samuel, a UI/UX Designer and Framer Developer with 3+ years of experience crafting intuitive digital products. I specialize in turning complex ideas into sleek, high-performing websites and user-focused interfaces, having designed over six complete digital projects and custom-built two Framer websites from scratch.
          </p>
        </div>

        {/* My Design Process Subtitle */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            My design process
          </h3>

          {/* Process Cards List */}
          <div className="mt-8 flex flex-col gap-5">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="group flex flex-col items-start gap-5 rounded-2xl border border-[#2E2E3A] bg-[#18181E] p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-[#1D1D26] sm:flex-row sm:items-center sm:rounded-full sm:px-8 sm:py-5"
              >
                {/* Circular Double-Ring Icon Container */}
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-[#121216] text-white shadow-inner transition-transform group-hover:scale-105">
                      <div className="relative h-8 w-8">
                        <Image
                          src={step.iconImage}
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white sm:text-xl">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400 sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
