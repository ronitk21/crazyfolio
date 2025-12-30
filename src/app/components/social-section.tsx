import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { PhoneCall } from '@/components/animate-ui/icons/phone-call';
import { GithubIcon } from '@/components/GithubIcon';
import { TwitterIcon } from '@/components/TwitterIcon';
import { Button } from '@/components/ui/button';
import { LinkedinIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

const SocialSection = () => {
  useEffect(() => {
    console.log('Rendered');
  }, []);
  return (
    <div className="flex flex-col items-start gap-4 py-2.5 pt-4 sm:p-0 w-full max-w-full">
      <h1 className="block sm:hidden text-[22px] font-bold tracking-tight">Socials _</h1>
      <div className="flex items-center gap-2 sm:gap-1.5 overflow-x-auto whitespace-nowrap w-full max-w-full pb-2 scrollbar-none [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Button
          className="border-border gap-2 rounded-full border p-3 shrink-0"
          size={'sm'}
          variant={'secondary'}
        >
          <GithubIcon />
          <a href="https://github.com/ronitk21">Github</a>
        </Button>
        <Button
          className="border-border gap-2 rounded-full border p-3 shrink-0"
          size={'sm'}
          variant={'secondary'}
        >
          <LinkedinIcon />
          <a href="https://linkedin.com/in/ronitk21">Linkedin</a>
        </Button>

        <Button
          className="border-border gap-2 rounded-full border p-3 shrink-0"
          size={'sm'}
          variant={'secondary'}
        >
          <TwitterIcon />
          <a href="https://x.com/ronitk21">X/Twitter</a>
        </Button>
        <Button
          className="border-border gap-2 rounded-full border p-3 shrink-0"
          size={'sm'}
          variant={'secondary'}
        >
          <AnimateIcon animateOnHover>
            <PhoneCall />
          </AnimateIcon>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
    </div>
  );
};

export default SocialSection;
