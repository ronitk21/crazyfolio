import { GithubIcon } from "@/components/GithubIcon";
import { TwitterIcon } from "@/components/TwitterIcon";
import { Button } from "@/components/ui/button";
import { socials } from "@/data/socials";
import { LinkedinIcon } from "lucide-react";
import Image from "next/image";

const SocialSection = () => {
  return (
    <div className="flex w-full max-w-full flex-col items-start gap-4 py-2.5 pt-4 sm:p-0">
      <h1 className="block text-[22px] font-bold tracking-tight sm:hidden">
        Socials _
      </h1>
      <div className="scrollbar-none flex w-full max-w-full items-center gap-2 overflow-x-auto pb-2 whitespace-nowrap [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:gap-1.5 [&::-webkit-scrollbar]:hidden">
        {socials.map((social) => (
          <Button
            key={social.name}
            className="border-border shrink-0 gap-2 rounded-full border p-3"
            size={"sm"}
            variant={"secondary"}
          >
            <social.icon />
            <a href={social.url}>{social.name}</a>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
