import { Button } from "@/components/ui/button";
import React from "react";
import { socials } from "@/data/socials";
import { Calendar, Mail, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ContactPage = () => {
  return (
    <div className="my-10 flex flex-col text-pretty space-y-6">
      {/* Hero Section */}
      <div className="">
        <h1 className="text-4xl md:text-5xl tracking-tight font-instrument font-bold dark:font-normal leading-tight">
          Let&apos;s connect and create _
        </h1>
        <p className="text-muted-foreground font-medium  text-base sm:text-lg text-pretty leading-relaxed">
          Always happy to chat with fellow developers, collaborate on
          interesting projects, or just talk tech.
        </p>
      </div>
      {/* Socials */}
      <div className="space-y-4 mt-2">
        <div>
          <h3 className="text-xl font-medium">Follow me on socials</h3>
          <p className="text-muted-foreground font-medium max-w-xl">
            Follow along to see what I&apos;m working on, share your projects.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
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
      <Separator className="my-2" />
      <div className="space-y-4 mt-4">
        <h2 className="text-xl font-medium">Reach out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:hey@ronitkedia.com"
            className="group border-border relative rounded-xl border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-primary/10 text-primary rounded-lg p-2.5 transition-transform duration-300 group-hover:scale-110">
                <Mail size={20} />
              </div>
              <ArrowUpRight
                className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold">Email me</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Perfect for project inquiries, collaboration opportunities, or
                detailed discussions. I read every email personally.
              </p>
              <p className="text-primary text-sm font-bold pt-1">
                hey@ronitkedia.com
              </p>
            </div>
          </a>

          <a
            href="https://cal.com/ronitkedia21/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-border relative rounded-xl border p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="bg-primary/10 text-primary rounded-lg p-2.5 transition-transform duration-300 group-hover:scale-110">
                <Calendar size={20} />
              </div>
              <ArrowUpRight
                className="text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold">Book a meeting</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Let&apos;s have a conversation! Schedule a 30-minute Google Meet
                to discuss your project, get technical advice, or explore
                collaboration.
              </p>
              <p className="text-primary text-sm font-bold pt-1">
                Choose your time slot →
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
