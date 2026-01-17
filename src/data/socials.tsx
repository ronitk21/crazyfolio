import { GithubIcon } from "@/components/GithubIcon";
import { LinkedInIcon } from "@/components/LinkedinIcon";
import { TwitterIcon } from "@/components/TwitterIcon";
import Image from "next/image";
import type { ComponentType } from "react";

type Social = {
  name: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  previewImage?: string; // For SEO/preview images
};

export const socials: Social[] = [
  {
    name: "Github",
    url: "https://github.com/ronitk21",
    icon: GithubIcon,
    previewImage: "/profile.webp",
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/in/ronitk21",
    icon: LinkedInIcon,
    previewImage: "/profile.webp",
  },
  {
    name: "X/Twitter",
    url: "https://x.com/ronitk21",
    icon: TwitterIcon,
    previewImage: "/twitter-card.png",
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
    previewImage: "/profile.webp",
  },
];
