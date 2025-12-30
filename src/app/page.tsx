'use client';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { ModeToggle } from '@/components/mode-toggle';
import { Separator } from '@/components/ui/separator';
import AboutSection from './components/about-section';
import ProjectsSection from './components/projects-section';
import SocialSection from './components/social-section';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header Background - full width */}
      <div className="absolute top-0 right-0 left-0 z-0 h-32 bg-linear-to-r from-stone-200 via-stone-100 to-stone-200 sm:h-44 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800"></div>

      <MaxWidthWrapper>
        <ModeToggle />
        <AboutSection />
        <div className='block sm:hidden'>        <Separator />
<SocialSection /></div>

        {/* Additional content sections can go here */}
        <div className="pb-12 sm:pb-20">
          <Separator className="my-6 sm:my-8" />
          <ProjectsSection />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
