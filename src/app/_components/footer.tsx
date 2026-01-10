import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center mb-5">
      <div className="flex items-center gap-1">
        <Copyright className="text-muted-foreground size-4" />
        <span className="text-muted-foreground text-sm font-medium">
          2026 Designed and Developed by{" "}
          <a
            href="https://www.x.com/ronitk21"
            className="text-primary font-bold underline underline-offset-2"
          >
            Ronit
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
