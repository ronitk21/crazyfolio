import { GithubIcon } from '@/components/GithubIcon';
import { TwitterIcon } from '@/components/TwitterIcon';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from 'lucide-react';
import Image from 'next/image';

const SocialSection = () => {
  return (
    <div className="flex w-full max-w-full flex-col items-start gap-4 py-2.5 pt-4 sm:p-0">
      <h1 className="block text-[22px] font-bold tracking-tight sm:hidden">Socials _</h1>
      <div className="scrollbar-none flex w-full max-w-full items-center gap-2 overflow-x-auto pb-2 whitespace-nowrap [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:gap-1.5 [&::-webkit-scrollbar]:hidden">
        <Button
          className="border-border shrink-0 gap-2 rounded-full border p-3"
          size={'sm'}
          variant={'secondary'}
        >
          <GithubIcon />
          <a href="https://github.com/ronitk21">Github</a>
        </Button>
        <Button
          className="border-border shrink-0 gap-2 rounded-full border p-3"
          size={'sm'}
          variant={'secondary'}
        >
          <LinkedinIcon />
          <a href="https://linkedin.com/in/ronitk21">Linkedin</a>
        </Button>

        <Button
          className="border-border shrink-0 gap-2 rounded-full border p-3"
          size={'sm'}
          variant={'secondary'}
        >
          <TwitterIcon />
          <a href="https://x.com/ronitk21">X/Twitter</a>
        </Button>
        <Button
          className="border-border shrink-0 gap-2 rounded-full border p-3"
          size={'sm'}
          variant={'secondary'}
        >
          <Image
            src={'/social/peerlist.svg'}
            alt="peerlist-icon"
            height={'15'}
            width={'15'}
            className="dark:invert"
          ></Image>
          <a href="https://peerlist.io/ronitk21">Peerlist</a>
        </Button>
      </div>
    </div>
  );
};

export default SocialSection;
