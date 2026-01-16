"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import AboutSection from "./_components/about-section";
import BlogSection from "./_components/blog-section";
import Footer from "./_components/footer";
import ProjectsSection from "./_components/projects-section";
import SkillsSection from "./_components/skills-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="absolute top-0 right-0 left-0 z-0 h-36 overflow-hidden sm:h-48">
        {/* Light mode mesh gradient */}
        <div className="absolute inset-0 dark:hidden">
          <div className="animate-blob-1 absolute -top-10 -left-10 h-40 w-40 rounded-full bg-pink-400/80 blur-3xl lg:-left-[5%] lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="animate-blob-2 absolute -top-5 left-1/4 h-36 w-36 rounded-full bg-violet-400/70 blur-3xl lg:left-[15%] lg:h-72 lg:w-72 lg:blur-[120px]"></div>
          <div className="animate-blob-3 absolute top-0 left-1/2 h-44 w-44 rounded-full bg-sky-400/80 blur-3xl lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="animate-blob-4 absolute -top-5 right-1/4 h-36 w-36 rounded-full bg-amber-400/70 blur-3xl lg:right-[15%] lg:h-72 lg:w-72 lg:blur-[120px]"></div>
          <div className="animate-blob-5 absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/80 blur-3xl lg:-right-[5%] lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>
        {/* Dark mode mesh gradient */}
        <div className="absolute inset-0 hidden dark:block">
          <div className="animate-blob-1 absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fuchsia-600/40 blur-3xl lg:-left-[5%] lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="animate-blob-2 absolute -top-5 left-1/4 h-36 w-36 rounded-full bg-indigo-600/50 blur-3xl lg:left-[15%] lg:h-72 lg:w-72 lg:blur-[120px]"></div>
          <div className="animate-blob-3 absolute top-0 left-1/2 h-44 w-44 rounded-full bg-cyan-500/40 blur-3xl lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="animate-blob-4 absolute -top-5 right-1/4 h-36 w-36 rounded-full bg-orange-500/40 blur-3xl lg:right-[15%] lg:h-72 lg:w-72 lg:blur-[120px]"></div>
          <div className="animate-blob-5 absolute -top-10 -right-10 h-40 w-40 rounded-full bg-teal-500/50 blur-3xl lg:-right-[5%] lg:h-80 lg:w-80 lg:blur-[120px]"></div>
          <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-sm"></div>
        </div>
        {/* Bottom fade to background */}
        <div className="from-background absolute right-0 bottom-0 left-0 block h-16 bg-linear-to-t to-transparent lg:hidden"></div>
      </div>

      <MaxWidthWrapper>
        <AboutSection />
        {/* Additional content sections can go here */}
        <div className="pb-12 sm:pb-20">
          <Separator className="my-6 sm:my-8" />
          <SkillsSection />
          <Separator className="my-6 sm:my-8" />
          <ProjectsSection />
          <Separator className="my-6 sm:my-8" />
          <BlogSection />
        </div>
        <Footer />
      </MaxWidthWrapper>
    </div>
  );
}
