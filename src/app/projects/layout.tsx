import { ArrowLeft } from "@/components/animate-ui/icons/arrow-left";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Footer from "../_components/footer";

const ProjectPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <MaxWidthWrapper>
        <main className="my-5 flex w-full flex-col items-start space-y-5 sm:my-5">
          <Link href={"/"}>
            <Button
              variant={"secondary"}
              className="border-border text-primary/80 hover:text-primary border transition-colors"
              size={"sm"}
            >
              <AnimateIcon animateOnHover>
                <ArrowLeft />
              </AnimateIcon>
              Back to Projects _
            </Button>
          </Link>
          {children}
        </main>
        <Separator className="my-4" />
        <Footer />
      </MaxWidthWrapper>
    </div>
  );
};

export default ProjectPageLayout;
