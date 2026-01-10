
import { ExternalLink } from '@/components/animate-ui/icons/external-link';
import { AnimateIcon } from '@/components/animate-ui/icons/icon';
import { GithubIcon } from '@/components/GithubIcon';
import { ImageSlider } from '@/components/image-slider';
import { Card, CardPanel } from '@/components/ui/card';
import { projects } from '@/data/projects';


const ProjectPage = () => {
  const project = projects[0];

  return (
    <div className="my-10 flex flex-col items-start space-y-6">
      <div className="min-w-full space-y-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold font-instrument tracking-wider">
            {project.title} _
          </h1>
          <p className="text-muted-foreground font-medium">{project.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-start gap-3 rounded-full border-2 border-dashed border-emerald-300 bg-emerald-50 px-6 py-0.5 shadow-sm dark:border-emerald-900/50 dark:bg-emerald-950/50">
            <div className="space-x-1 text-base font-bold text-emerald-700 sm:text-sm dark:text-emerald-400">
              <span className="font-light dark:text-emerald-300 text-emerald-700">Current Status:</span>
              <span>Building</span>
            </div>
          </div>
          <div className=''>
            <a href='https://app.nomoretutorials.com'>
                <AnimateIcon
                        animateOnHover
                        className="group flex items-center gap-1 hover:underline hover:underline-offset-4"
                      >
                        <ExternalLink
                          size={13}
                          className="text-muted-foreground group-hover:text-primary"
                        />
                        <span className="underline underline-offset-2 mr-2 text-muted-foreground group-hover:text-primary sm:text-sm">
                          live link
                        </span>
                      </AnimateIcon>
                    </a>
          </div>
          <div className="hidden sm:inline-flex items-start gap-3 rounded-full border-2 border-dashed border-zinc-300 bg-zinc-50 px-6 py-0.5 shadow-sm dark:border-neutral-900/75 dark:bg-neutral-700">
            <div className="w-full space-x-1 text-xs font-bold text-emerald-700 sm:text-sm dark:text-emerald-400">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 font-light text-neutral-300">
                  <GithubIcon size={14} />
                  <a href='https://github.com/nomoretutorials/nomoretutorials' className="text-sm font-medium">Github Link</a>
                </div>
                <p className="text-neutral-300">|</p>
                <div className="flex items-center gap-1.5 font-light text-neutral-300">
                  <ExternalLink size={13} />
                  <a href='https://app.nomoretutorials.com' className="text-sm font-medium">Live Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-border group relative flex cursor-pointer rounded-xl border p-1 transition-transform duration-200 ease-out hover:-translate-y-1">
        <ImageSlider images={project.images} title={project.title} index={0} />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold mt-5">🔥 Motivation</h1>
        <Card className="p-3 rounded-md">
          <CardPanel className="text-sm space-y-3 text-muted-foreground">
            <p className="font-instrument text-lg text-primary">TL;DR</p>
            <div className="space-y-1.5">
              <p>
                <span className="font-medium text-primary/80">The Problem:</span> I spent months in &quot;Tutorial Hell&quot;—feeling like a pro while watching videos, but staring at a blank screen the moment I tried to build my own project.
              </p>
              <p>
                <span className="font-medium text-primary/80">The Spark:</span> I accidentally stumbled upon a guide that gave me steps and documentation links instead of code. No spoon-feeding. Just a roadmap. For the first time, I actually learned how to build.
              </p>
              <p>
                <span className="font-medium text-primary/80">The Mission:</span> NoMoreTutorials (NMT) is my attempt to scale that &quot;Aha!&quot; moment. We don&quot;t give you snippets; we give you the pre-AI discipline of figuring it out yourself.
              </p>
            </div>
          </CardPanel>
        </Card>
        <p className="text-pretty text-base text-primary/85 p-2">
          I started coding back in April, 2024. I have done a bunch of HTML/CSS in 10th standard but was never serious about it. I started officially on April. I never took any proper programming course except the one from Jonas Schmedtmann&apos;s JavaScript course, which I didn&apos;t even complete. (If you want to know more about me, check out the who-am-i section).
          <br />
          <br />
          I followed long tutorials on YouTube. While watching, I was getting tons of dopamine boosts; I thought I was learning. But then one day, I faced an issue that could be easily solved with code—a simple problem that just needed a website wired up with some React and an Express backend.
          <br />
          <br />
          As I had already watched a number of tutorials, I could scaffold a project and do the basic things. <strong>But I couldn&apos;t think.</strong> I couldn&apos;t turn a problem statement into a solution through code.
          <br />
          <br />
          That is when I realized that these things didn&apos;t work like this. I had to figure out something else for myself. I have been curious about this field from the start, so I found myself thinking about how software used to be made in the pre-AI era—before we were spoon-fed every line.
          <br />
          <br />
          <strong>The Accidental Breakthrough:</strong> I randomly stumbled upon a website that gave a brief hint on building an application. It didn&apos;t give solutions or code. It gave chronological steps, superficial hints, and links to documentation. It gave me exactly what I needed: a reason to start and the freedom to figure it out on the way.
          <br />
          <br />
          That is how <strong>NoMoreTutorials (NMT)</strong> was born. Try it out <a href="https://app.nomoretutorials.com" className='text-primary underline underline-offset-2'>here</a>.
        </p>
      </div>
    </div>
  );
};

export default ProjectPage;
