import React from "react";

export function StatsBar() {
  const stats = [
    { value: "3+", label: "Years of Experience" },
    { value: "6+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ];

  return (
    <section className="w-full bg-[#EDEDF2] py-8 border-y border-neutral-200/80">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-3 gap-4 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl font-extrabold tracking-tight text-[#2D17BB] sm:text-4xl md:text-5xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-neutral-600 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
