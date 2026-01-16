import { GithubIcon } from "@/components/GithubIcon";
import { LinkedInIcon } from "@/components/LinkedinIcon";
import { TwitterIcon } from "@/components/TwitterIcon";
import Image from "next/image";
import type { ComponentType } from "react";

type Social = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
};

export const socials: Social[] = [
  {
    name: "Github",
    url: "https://github.com/ronitk21",
    icon: GithubIcon,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/ronitk21",
    icon: LinkedInIcon,
  },
  {
    name: "X/Twitter",
    url: "https://x.com/ronitk21",
    icon: TwitterIcon,
  },
  {
    name: "Peerlist",
    url: "https://peerlist.io/ronitk21",
    icon: (props) => (
      <Image
        src="/social/peerlist.svg"
        alt="peerlist-icon"
        height={15}
        width={15}
        className={`dark:invert ${props.className ?? ""}`}
      />
    ),
  },
];
