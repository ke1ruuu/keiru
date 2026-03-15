import { Button } from "@/components/ui/button";
import { ShinyButton } from "@/components/ui/shiny-button";
import Link from "next/link";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { siteMetadata } from "@/lib/data";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8 py-20 lg:py-32">
      <div className="space-y-6 max-w-5xl">
        <h1 className="text-white font-black text-4xl sm:text-7xl md:text-8xl tracking-tighter font-display leading-[0.9] text-premium">
          Building
          <br />
          Experience<span className="text-glow-cyan">.</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
          I'm{" "}
          <span className="text-white font-bold text-glow-cyan">
            {siteMetadata.name}
          </span>
          , a {siteMetadata.role.toLowerCase()} {siteMetadata.bio.toLowerCase()}
        </p>
      </div>

      <div className="flex flex-col items-center sm:flex-row gap-4 w-full sm:w-auto">
        <Link href="/projects">
          <ShinyButton>View Projects</ShinyButton>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            size="icon-lg"
            variant="outline"
            className="rounded-full border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
            asChild
          >
            <a
              href={siteMetadata.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
          </Button>
          <Button
            size="icon-lg"
            variant="outline"
            className="rounded-full border-white/5 bg-white/[0.03] hover:bg-white/[0.08]"
            asChild
          >
            <a
              href={siteMetadata.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
