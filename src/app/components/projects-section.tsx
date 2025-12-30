import { Card, CardPanel } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    slug: 'nomoretutorials',
    image: '',
    title: 'NoMoreTutorials',
    description:
      'An AI-powered platform  that guides beginner and intermediate developers out of tutorial hell by providing personalized, mentor-style step-by-step instructions to build real, production-grade projects from scratch.',
  },
  {
    slug: 'nomoretutorials',
    image: '',
    title: '',
    description: '',
    link: '/projects/nomoretutorials',
  },
  {
    slug: 'nomoretutorials',
    image: '',
    title: '',
    description: '',
    link: '/projects/nomoretutorials',
  },
  {
    slug: 'nomoretutorials',
    image: '',
    title: '',
    description: '',
    link: '/projects/nomoretutorials',
  },
];

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-start space-y-4">
      <h1 className="text-[22px] font-bold tracking-tight">Projects _</h1>
      <div className="grid w-full sm:grid-cols-2 grid-cols-1 gap-3 ">
        {projects.map((item, index) => (
          <Card key={index} className="rounded-xl">
            <CardPanel>
              <Image
                src={'/'}
                alt="project-image"
                height={'800'}
                width={'800'}
                className=""
              />
            </CardPanel>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
