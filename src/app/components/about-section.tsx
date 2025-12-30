import { Clock } from '@/components/animate-ui/icons/clock';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Send } from '@/components/animate-ui/icons/send';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import SocialSection from './social-section';

const AboutSection = () => {
  return (
    <div className="relative pt-40 sm:pt-48">
      {/* Avatar positioned relative to this container */}
      <div className="absolute top-18 left-0 z-10 flex w-full justify-between sm:top-30">
        <Avatar className="h-28 w-28 border-4 border-white shadow-sm sm:h-32 sm:w-32">
          <AvatarImage src="/profile.jpg" />
          <AvatarFallback>RT</AvatarFallback>
        </Avatar>
        <div className='pt-11 hidden sm:block'>
          <SocialSection />
        </div>
      </div>

      <div className="my-4 space-y-3 pt-12 sm:my-5 sm:space-y-4 sm:pt-16">
        <div className=''>
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
            <div className="flex items-center gap-2.5">
              <h1 className="font-bold text-3xl">Ronit Kedia</h1>
              {/* <NameWithPronunciation /> */}
            </div>
            <div className="hidden sm:block">
              <LayoutTextFlip />
            </div>
          </div>
          <span className="text-muted-foreground mt-1 block tracking-wide sm:mt-0 text-sm">
            Computer Science Student | Full Stack Developer
          </span>
        </div>

        <p className="text-muted-foreground my-5 text-sm leading-relaxed font-medium sm:mt-5 sm:text-base dark:text-zinc-300">
          Im a full stack developer who loves building clean, modern websites and apps where
          design, functionality. and performance meet. Currently pursuing a degree in Computer Science,
        </p>

        <div className="flex items-center gap-2 sm:gap-3">
          <AnimateIcon animateOnHover>
            <Button className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Hire Me
            </Button>
          </AnimateIcon>
          <AnimateIcon animateOnHover>
            <Button
              variant="outline"
              className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm"
            >
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Send an Email
            </Button>
          </AnimateIcon>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
