import { ExternalLink } from '@/components/animate-ui/icons/external-link';
import { GithubIcon } from '@/components/GithubIcon';
import { ImageSlider } from '@/components/image-slider';
import { projects } from '@/data/projects';

const ProjectPage = () => {
  const project = projects[0];
  return (
    <div className="my-10 flex flex-col items-start space-y-6">
      <div className="min-w-full space-y-8">
        <div className="">
          <h1 className="text-3xl font-bold">{project.title} _</h1>
          <p className="text-muted-foreground font-bold">{project.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-start gap-3 rounded-full border-2 border-dashed border-emerald-300 bg-emerald-50 px-6 py-0.5 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/50">
            {/* Text */}
            <div className="space-x-1 text-xs font-bold text-emerald-700 sm:text-sm dark:text-emerald-400">
              <span className="font-light text-emerald-300">Current Status:</span>
              <span>Building</span>
            </div>
          </div>
          <div className="inline-flex items-start gap-3 rounded-full border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 py-0.5 shadow-sm dark:border-neutral-900/75 dark:bg-neutral-700">
            {/* Text */}
            <div className="w-full space-x-1 text-xs font-bold text-emerald-700 sm:text-sm dark:text-emerald-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-light text-neutral-300">
                  <GithubIcon size={14} />
                  <span className="text-sm font-medium">Github Link</span>
                </div>
                <p className="text-neutral-300">|</p>
                <div className="flex items-center gap-1.5 font-light text-neutral-300">
                  <ExternalLink size={13} />
                  <span className="text-sm font-medium">Live Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-border group relative flex cursor-pointer rounded-xl border p-1 transition-transform duration-200 ease-out hover:-translate-y-1">
        <ImageSlider images={project.images} title={project.title} index={1} />
      </div>{' '}
    </div>
  );
};

export default ProjectPage;
