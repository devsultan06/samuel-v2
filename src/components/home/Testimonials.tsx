import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import { StarIcon } from "@/components/ui/Icons";

export function Testimonials() {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Testimonials
          </h2>
          <p className="mt-2 text-sm text-neutral-400 sm:text-base">
            Feedback and testimonials from recent client projects.
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-[#2D2D38] bg-[#18181E] p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-[#1D1D26]"
            >
              {/* Stars & Feedback */}
              <div>
                {/* 5 Purple Stars */}
                <div className="flex items-center gap-1 text-[#2D17BB]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-current text-[#4318FF]" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-neutral-200 sm:text-base">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              {/* Bottom Row: Badge & Client Info */}
              <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                {/* Great Service Badge */}
                <span className="rounded-md bg-[#2D17BB] px-3 py-1 text-xs font-semibold text-white">
                  {t.badge}
                </span>

                {/* Client Avatar & Name */}
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-neutral-700 bg-neutral-800">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
