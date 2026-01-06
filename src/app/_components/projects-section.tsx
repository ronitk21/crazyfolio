import { ExternalLink } from '@/components/animate-ui/icons/external-link';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { ImageSlider } from '@/components/image-slider';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="">
        <h1 className="text-[22px] font-bold tracking-tight">Projects _</h1>
        <p className="text-muted-foreground text-[15px] font-medium">
          A collection of projects I&apos;ve built to solve problems I&apos;ve faced. The goal was
          to learn production grade technologies and implementation of best practices.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-5">
        {projects.map((item, index) => (
          <div key={index} className={`flex flex-col ${index === 0 ? 'sm:col-span-2' : ''}`}>
            <div className="border-border group relative flex cursor-pointer rounded-xl border p-1 transition-transform duration-200 ease-out hover:-translate-y-1">
              {index === 0 && (
                <span className="bg-primary/70 text-primary-foreground absolute top-3 left-3 z-10 rounded-md px-3 py-1 text-xs font-bold">
                  Featured Project
                </span>
              )}
              <Link href={item.page} className="w-full">
                <ImageSlider images={item.images} title={item.title} index={index} />
              </Link>
            </div>
            <div className="space-y-1 px-3 py-3">
              <div className="flex flex-col items-start justify-between gap-1">
                <div className="flex w-full items-center justify-between">
                  <h2 className="text-lg font-bold sm:text-base">{item.title}</h2>
                  {item.link && (
                    <a href={item.link} className="shrink-0">
                      <AnimateIcon
                        animateOnHover
                        className="group flex items-center gap-1 hover:underline hover:underline-offset-4"
                      >
                        <ExternalLink
                          size={13}
                          className="text-muted-foreground group-hover:text-primary"
                        />
                        <span className="text-muted-foreground group-hover:text-primary sm:text-sm">
                          live link
                        </span>
                      </AnimateIcon>
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground line-clamp-2 w-full text-sm font-medium sm:text-xs">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {item.techStack.map((tech, techIndex) => (
                  <Button
                    key={techIndex}
                    variant={'secondary'}
                    size={'xs'}
                    className="border-border border capitalize"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      height={15}
                      width={15}
                      className={/nextjs|expo|prisma/.test(tech.icon) ? 'dark:invert' : ''}
                    />
                    <span className="font-bold">{tech.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
