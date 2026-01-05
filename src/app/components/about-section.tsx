import { Clock } from '@/components/animate-ui/icons/clock';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Send } from '@/components/animate-ui/icons/send';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import SocialSection from './social-section';

const AboutSection = () => {
  return (
    <div className="relative pt-38 sm:pt-52 py-4">
      {/* Avatar positioned relative to this container */}
      <div className="absolute top-18 left-0 z-10 flex w-full justify-between sm:top-30">
        <Avatar className="ring-muted h-36 w-36 shadow-sm ring-4 sm:h-32 sm:w-32">
          <AvatarImage src="/profile.jpg" />
          <AvatarFallback>RT</AvatarFallback>
        </Avatar>
        <div className="block pt-4 lg:hidden">
          <LayoutTextFlip />
        </div>
        <div className="hidden pt-11 sm:block">
          <SocialSection />
        </div>
      </div>

      <div className="my-4 space-y-3 pt-18 sm:my-5 sm:space-y-4 sm:pt-14">
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-2.5">
              <h1 className="text-[33px] font-bold sm:text-3xl">Ronit Kedia</h1>
              {/* <NameWithPronunciation /> */}
            </div>
            <div className="hidden sm:block">
              <LayoutTextFlip />
            </div>
          </div>

          <span className="-mt-2 text-muted-foreground block tracking-tight sm:mt-0">
            Computer Science Student | Full Stack Developer
          </span>
        </div>

        <div className="text-muted-foreground text my-5 flex flex-col items-start gap-4 leading-snug font-medium text-pretty sm:mt-5 sm:gap-2.5 sm:text-base">
          <p>
            Hey, I&apos;m Ronit, a full stack web developer with a
            <span className="text-foreground italic"> passion for computer science. </span>I love
            creating efficient and scalable web applications that
            <span className="text-foreground italic"> solve real-world problems</span>.
          </p>
          {/* <p>
            I&apos;m currently <span className="text-foreground">open for work</span>{' '}
            for any kind of <span className="text-foreground">collaboration</span>,{' '}
            <span className="text-foreground">freelance</span> or{' '}
            <span className="text-foreground">full-time</span> opportunities.
          </p> */}
        </div>

        <div className="mt-5 flex items-center gap-2 sm:gap-3">
          <AnimateIcon animateOnHover>
            <Button className="flex items-center gap-3 sm:gap-2 sm:text-sm" size={'lg'}>
              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Hire Me
            </Button>
          </AnimateIcon>
          <AnimateIcon animateOnHover>
            <Button
              variant="outline"
              className="flex items-center gap-3 sm:gap-2 sm:text-sm"
              size={'lg'}
            >
              <Send className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Get in touch
            </Button>
          </AnimateIcon>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
