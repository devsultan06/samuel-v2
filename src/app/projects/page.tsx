import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { CTASection } from "@/components/layout/CTASection";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Ademola Samuel",
  description:
    "A showcase of web and mobile interfaces designed for seamless user experiences by Ademola Samuel.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Light Navbar for white top header */}
      <Navbar theme="light" />

      {/* Header Section with White Background & Decorative Bubbles */}
      <section className="relative w-full bg-white pt-10 pb-16 px-6 text-center md:pt-16 md:pb-24 md:px-8 overflow-hidden">
        <DecorativeBubbles />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-neutral-950">
            My Projects
          </h1>

          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            A showcase of web and mobile interfaces designed for seamless user experiences.
          </p>
        </div>
      </section>

      {/* Down Part: Dark Container with Top Curve & bg2.png Background */}
      <div className="relative w-full overflow-hidden bg-[#111112] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[64px]">
        {/* Background Layer: bg2.png from public folder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/bg2.png"
            alt="Projects background"
            fill
            className="object-cover object-top select-none"
            sizes="100vw"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Projects Grid Section */}
          <section className="relative w-full pt-12 pb-16 px-6 sm:pt-16 md:pt-20 md:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2D2D38] bg-[#18181E] p-4 transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-950/30 sm:p-6"
                  >
                    {/* Mockup Image */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-neutral-950">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-6 flex flex-1 flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-white sm:text-2xl">
                          {project.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                          {project.summary}
                        </p>
                      </div>

                      {/* Metadata & Action */}
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
                  </div>
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
