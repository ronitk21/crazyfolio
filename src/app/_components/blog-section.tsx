import { ExternalLink } from "@/components/animate-ui/icons/external-link";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import { glass } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";

const BlogSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const avatars = useMemo(() => {
    return blogs.map((post) =>
      createAvatar(glass, {
        size: 128,
        seed: post.id,
      }).toDataUri()
    );
  }, []);

  const handleToggle = (postId: string) => {
    setOpenId((prev) => (prev === postId ? null : postId));
  };

  const handleMouseEnter = (postId: string) => {
    if (!isMobile) {
      setOpenId(postId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setOpenId(null);
    }
  };

  return (
    <div className="flex flex-col items-start space-y-5">
      <div>
        <h1 className="font-instrument w-full text-2xl tracking-wide font-bold dark:font-normal">
          Blogs _
        </h1>
        <p className="text-muted-foreground text-[15px] font-medium">
          Sharing what I learn, build, and think about tech and life.
        </p>
      </div>
      <Accordion
        value={openId ? [openId] : openId === null ? [] : []}
        className="w-full space-y-3"
      >
        {blogs.map((post, index) => (
          <AccordionItem
            key={post.id}
            value={post.id}
            onMouseEnter={() => handleMouseEnter(post.id)}
            onMouseLeave={handleMouseLeave}
            className="group border py-1 transition-colors duration-200 bg-accent/50 border-accent rounded-md"
          >
            <AccordionTrigger
              className="hover:no-underline px-4 py-3"
              onClick={() => handleToggle(post.id)}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-5">
                  <Image
                    src={avatars[index]}
                    height={50}
                    width={50}
                    alt="avatar"
                    className="sm:size-15 size-16 rounded-md transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="font-instrument flex flex-col items-start space-y-1">
                    <Link
                      className="text-xl leading-5 transition-colors duration-200 group-hover:text-foreground/80"
                      href={`/blogs/${post.link}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {post.title}
                    </Link>
                    <span className="text-muted-foreground text-sm">
                      {post.postDate}
                    </span>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionPanel>
              <p className="px-5 pt-2 sm:pt-0 text-sm sm:pl-[96px]  text-pretty">
                {post.description}
              </p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="self-end">
        <Button variant={"outline"}>
          <Link href={"/blogs"} className="shrink-0 flex items-center gap-2">
            <AnimateIcon animateOnHover>
              <ExternalLink size={13} />
            </AnimateIcon>
            <span>All Blogs</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogSection;
