import { Button } from '@/components/ui/button';
import Image from 'next/image';

const skills = [
  {
    src: '/technologies/bun.svg',
    label: 'Bun',
  },
  {
    src: '/technologies/javascript.svg',
    label: 'javascript',
  },
  {
    src: '/technologies/mongodb.svg',
    label: 'mongodb',
  },
  {
    src: '/technologies/nextjs.svg',
    label: 'nextjs',
  },
  {
    src: '/technologies/nodejs.svg',
    label: 'node',
  },
  {
    src: '/technologies/postgresql.svg',
    label: 'postgresql',
  },
  {
    src: '/technologies/prisma.svg',
    label: 'prisma',
  },
  {
    src: '/technologies/react.svg',
    label: 'react',
  },
  {
    src: '/technologies/typescript.svg',
    label: 'typescript',
  },
  {
    src: '/technologies/git.svg',
    label: 'git',
  },
  {
    src: '/technologies/github.svg',
    label: 'github',
  },
  {
    src: '/technologies/aws.svg',
    label: 'AWS',
  },
  {
    src: '/technologies/express.svg',
    label: 'express',
  },
];

const SkillsSection = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 overflow-hidden py-3">
      <div className="flex flex-col items-start">
        <h1 className="text-[22px] font-bold tracking-tight">Technologies _</h1>
        <p className="text-muted-foreground text-[15px] font-medium">
          These are the tech stacks and tools I have worked with. But Tech stack doesn&apos;t really
          matter, I can adapt to any tech stack quickly.
        </p>
      </div>
      <div className="-mx-4 w-[calc(100%+2rem)] overflow-x-auto px-4 pb-2 sm:mx-0 sm:w-full sm:overflow-visible sm:px-0 sm:pb-0">
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <div className="flex gap-2 sm:contents">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((item, index) => (
              <Button size={'xs'} key={index} variant={'outline'} className="shrink-0 gap-2 whitespace-nowrap capitalize">
                <Image
                  src={item.src}
                  alt={item.label}
                  height={15}
                  width={15}
                  className={
                    /nextjs|github|express|expo|prisma/.test(item.label) ? 'dark:invert' : ''
                  }
                />
                {item.label}
              </Button>
            ))}
          </div>
          <div className="flex gap-2 sm:contents">
            {skills.slice(Math.ceil(skills.length / 2)).map((item, index) => (
              <Button size={'xs'} key={index + Math.ceil(skills.length / 2)} variant={'outline'} className="shrink-0 whitespace-nowrap capitalize gap-2">
                <Image
                  src={item.src}
                  alt={item.label}
                  height={15}
                  width={15}
                  className={
                    /nextjs|github|express|expo|prisma/.test(item.label) ? 'dark:invert' : ''
                  }
                />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
