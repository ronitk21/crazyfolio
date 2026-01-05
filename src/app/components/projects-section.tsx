import { ExternalLink } from '@/components/animate-ui/icons/external-link';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    page: '/projects/nomoretutorials',
    images: ['/nomoretutorials-1.webp'],
    title: 'NoMoreTutorials',
    description:
      'An AI-powered platform that guides beginner and intermediate developers out of tutorial hell by providing personalized, mentor-style step-by-step instructions to build real, production-grade projects from scratch.',
    link: 'https://nomoretutorials.com',
    techStack: [
      { name: 'NextJS', icon: '/technologies/nextjs.svg' },
      { name: 'TypeScript', icon: '/technologies/typescript.svg' },
      { name: 'PostgreSQL', icon: '/technologies/postgresql.svg' },
      { name: 'Prisma', icon: '/technologies/prisma.svg' },
      { name: 'Redis', icon: '/technologies/redis.svg' },
      { name: 'Tailwind CSS', icon: '/technologies/tailwind.svg' },
    ],
  },
  {
    page: '/',
    images: ['/portfolio-1.webp'],
    title: 'Crazyfolio',
    description:
      'An AI-powered platform that guides beginner and intermediate developers out of tutorial hell by providing personalized, mentor-style step-by-step instructions to build real, production-grade projects from scratch.',
    link: 'https://www.ronitkedia.com',
    techStack: [
      { name: 'NextJS', icon: '/technologies/nextjs.svg' },
      { name: 'React', icon: '/technologies/react.svg' },
      { name: 'TypeScript', icon: '/technologies/typescript.svg' },
      { name: 'TailwindCSS', icon: '/technologies/tailwind.svg' },
    ],
  },
  {
    page: '/projects/dailytick',
    images: ['/dailytick1.webp'],
    title: 'DailyTick',
    description:
      'A lightweight Chrome extension that replaces the new tab with a clean daily checklist, helping users plan tasks, track goals, and stay focused through a simple, distraction-free interface with automatic daily resets and local data storage.',
    techStack: [
      { name: 'JavaScript', icon: '/technologies/javascript.svg' },
      { name: 'HTML', icon: '/technologies/html.svg' },
      { name: 'CSS', icon: '/technologies/css.svg' },
      { name: 'Browser Extension API', icon: '/technologies/chromium.svg' },
    ],
  },
  {
    page: '/projects/tailwind-toolkit',
    images: ['/tailwind-toolkit-1.webp'],
    title: 'Tailwind Toolkit',
    description:
      'A lightweight Chrome extension that replaces the new tab with a clean daily checklist, helping users plantasks, track goals, and stay focused through a simple, distraction-free interface with automatic daily resets and local data storage',

    techStack: [
      { name: 'Javascript', icon: '/technologies/javascript.svg' },
      { name: 'VS Code API', icon: '/technologies/vscode.svg' },
    ],
  },
  {
    page: '/projects/family-vault',
    images: ['/family-vault-1.webp'],
    title: 'Family Vault',
    description: 'A secure app to manage sensitive information for your entire family',
    techStack: [
      { name: 'React Native', icon: '/technologies/react.svg' },
      { name: 'Expo', icon: '/technologies/expo.svg' },
      { name: 'TypeScript', icon: '/technologies/typescript.svg' },
      { name: 'SQLite', icon: '/technologies/sqlite.svg' },
    ],
  },
];

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-start space-y-6 ">
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
              <Link href={item.page}>
                {item.images && (
                  <Image
                    src={item.images[0]}
                    alt={`${item.title} project screenshot`}
                    height={800}
                    width={800}
                    className="rounded-lg ring-[6px]"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    sizes={
                      index === 0
                        ? '(max-width: 640px) 100vw, 800px'
                        : '(max-width: 640px) 100vw, 400px'
                    }
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 600))}`}
                    quality={80}
                  />
                )}
              </Link>
            </div>
            <div className="space-y-1 px-3 py-3">
              <div className="flex flex-col items-start justify-between gap-1">
                <div className="flex w-full items-center justify-between">
                  <h2 className="text-lg font-bold sm:text-base">{item.title}</h2>
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
                </div>
                <p className="text-muted-foreground line-clamp-2 w-full text-sm font-medium sm:text-xs">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-1.5">
                {item.techStack.map((tech, index) => (
                  <Button
                    key={index}
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
