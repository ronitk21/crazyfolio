import { socials } from "@/data/socials";
import Image from "next/image";

const SocialSection = () => {
  return (
    <section
      aria-labelledby="socials-heading"
      className="flex w-full max-w-full flex-col items-start gap-4 py-2.5 pt-4 sm:p-0"
    >
      <h1
        id="socials-heading"
        className="block text-[22px] font-bold tracking-tight sm:hidden"
      >
        Socials _
      </h1>
      <nav
        aria-label="Social media links"
        className="scrollbar-none flex w-full max-w-full items-center gap-2 overflow-x-auto pb-2 whitespace-nowrap [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] sm:gap-1.5 [&::-webkit-scrollbar]:hidden"
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className="border-border shrink-0 gap-2 rounded-full border p-3 inline-flex items-center justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90 h-8"
            style={{ textDecoration: "none" }}
          >
            {social.previewImage ? (
              <Image
                src={social.previewImage}
                alt={social.name + " preview"}
                width={24}
                height={24}
                className="rounded-full"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <social.icon />
            )}
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default SocialSection;
