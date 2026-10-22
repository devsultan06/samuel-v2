import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { CTASection } from "@/components/layout/CTASection";
import { Footer } from "@/components/layout/Footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Project Overview | Ademola Samuel`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Light Navbar for white top header */}
      <Navbar theme="light" />

      {/* Header Section with White Background & Decorative Bubbles */}
      <section className="relative w-full bg-white pt-10 pb-16 px-6 text-center md:pt-16 md:pb-24 md:px-8 overflow-hidden">
        <DecorativeBubbles />

        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-neutral-950">
            {project.title}
          </h1>

          <p className="mt-3 text-sm font-semibold tracking-wide text-neutral-500 sm:text-base">
            Project overview
          </p>
        </div>
      </section>

      {/* Down Part: Dark Container with Top Curve & bg5.png Background */}
      <div className="relative w-full overflow-hidden bg-[#111112] rounded-t-[36px] sm:rounded-t-[48px] md:rounded-t-[56px] lg:rounded-t-[64px]">
        {/* Background Layer: bg5.png from public folder */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/bg5.png"
            alt="Project overview background"
            fill
            className="object-cover object-top select-none"
            sizes="100vw"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* Showcase Card Section */}
          <section className="relative w-full pt-12 pb-16 px-6 sm:pt-16 md:pt-20 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="overflow-hidden rounded-3xl border border-[#2D2D38]/80 bg-[#16161D]/90 shadow-2xl backdrop-blur-sm">
                {/* Device Mockup */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 sm:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={`${project.title} mockup`}
                    fill
                    priority
                    className="object-cover"
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
              </div>

              {/* Project Switcher Navigation */}
              <div className="mt-12 flex items-center justify-center gap-6">
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
                  {projects.map((p, idx) => (
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
