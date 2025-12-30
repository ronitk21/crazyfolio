'use client';

import MaxWidthWrapper from '@/components/max-width-wrapper';
import { ModeToggle } from '@/components/mode-toggle';
import { Separator } from '@/components/ui/separator';
import AboutSection from './components/about-section';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header Background - full width */}
      <div className="absolute top-0 right-0 left-0 z-0 h-32 bg-linear-to-r from-stone-200 via-stone-100 to-stone-200 sm:h-44 dark:from-stone-800 dark:via-stone-900 dark:to-stone-800"></div>

      <MaxWidthWrapper>
        <ModeToggle />
        <AboutSection />

        {/* Additional content sections can go here */}
        <div className="pb-12 sm:pb-20">
          <Separator className="my-6 sm:my-8" />
          <div>
            <h1 className="text-[22px] font-bold tracking-tight">Projects _</h1>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
