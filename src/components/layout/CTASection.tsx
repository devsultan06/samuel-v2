import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative w-full bg-transparent py-20 px-6 text-center">

      <div className="relative mx-auto max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          let’s create something great
          <br />
          together.
        </h2>

        <p className="mt-5 text-sm text-neutral-400 sm:text-base">
          Open for freelance and full-time opportunities.
          <br className="hidden sm:inline" />
          {" "}Let’s build something extraordinary together.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/hire-me"
            className="group relative inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-[#161228] px-8 py-3 text-sm font-semibold text-purple-200 shadow-lg shadow-purple-950/50 transition-all duration-300 hover:border-purple-400 hover:bg-[#20173e] hover:text-white hover:shadow-purple-700/30"
          >
            Hire me
          </Link>
        </div>
      </div>
    </section>
  );
}
