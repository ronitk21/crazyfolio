import { Button } from '@/components/ui/button';
import Image from 'next/image';

const skills = [
  {
    src: '/skills/bun.png',
    label: 'Bun',
  },
  {
    src: '/skills/javascript.png',
    label: 'javascript',
  },
  {
    src: '/skills/mongodb.png',
    label: 'mongodb',
  },
  {
    src: '/skills/nextjs.png',
    label: 'nextjs',
  },
  {
    src: '/skills/node.png',
    label: 'node',
  },
  {
    src: '/skills/postgresql.png',
    label: 'postgresql',
  },
  {
    src: '/skills/prisma.png',
    label: 'prisma',
  },
  {
    src: '/skills/react.png',
    label: 'react',
  },
  {
    src: '/skills/typescript.png',
    label: 'typescript',
  },
];

const SkillsSection = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 border align-middle">
      {skills.map((item, index) => {
        return (
          <Button size={"sm"} key={index} variant={'outline'} className='capitalize'>
            <Image src={item.src} alt={item.label} height={10} width={10} className='size-6'/>
            {item.label}
          </Button>
        );
      })}
    </div>
  );
};

export default SkillsSection;
