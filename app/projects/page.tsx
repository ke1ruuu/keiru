import { ProjectGrid } from "@/components/sections/projects";
import { Footer } from "@/components/layout/footer";
import { InlineCta } from "@/components/sections/compact-modules";

export default function ProjectsPage() {
  return (
    <>
      <main className="flex-1 flex flex-col py-16 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-white font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter mb-4 font-display text-premium">
            Selected Work<span className="text-glow-cyan">.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Showcasing a curated collection of high-performance web applications and technical experiments.
          </p>
        </div>
        <section className="grow py-12">
          <ProjectGrid />
        </section>
      </main>
    </>
  );
}
