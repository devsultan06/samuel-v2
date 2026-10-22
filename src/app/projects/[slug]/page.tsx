import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { DecorativeBubbles } from "@/components/ui/DecorativeBubbles";
import { CTASection } from "@/components/layout/CTASection";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";

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
          <ProjectShowcase
            project={project}
            prevProject={prevProject}
            nextProject={nextProject}
            allProjects={projects}
            projectIndex={projectIndex}
          />

          {/* Shared CTA & Footer */}
          <CTASection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
