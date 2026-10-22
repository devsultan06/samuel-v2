import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { DesignProcess } from "@/components/home/DesignProcess";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { Testimonials } from "@/components/home/Testimonials";
import { Spotlight } from "@/components/home/Spotlight";
import { CTASection } from "@/components/layout/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#111112]">
      {/* Navbar with light hero theme */}
      <Navbar theme="light" />

      {/* Hero Section */}
      <HeroSection />

      {/* Metrics / Stats Strip */}
      <StatsBar />

      {/* Dark Content Area with Figma Background (bg.png from StatsBar to Footer) */}
      <div className="relative w-full overflow-hidden bg-[#111112]">
        {/* Background Image layer matching Figma selected region */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/bg.png"
            alt="Section background"
            fill
            className="object-cover object-top select-none"
            sizes="100vw"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10">
          {/* About Me & Design Process */}
          <DesignProcess />

          {/* My Projects Showcase */}
          <ProjectsCarousel />

          {/* Testimonials */}
          <Testimonials />

          {/* Vector Artwork Spotlight */}
          <Spotlight />

          {/* Call to Action */}
          <CTASection />

          {/* Global Footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
