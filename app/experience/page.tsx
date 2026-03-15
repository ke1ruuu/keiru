import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { QuickStats } from "@/components/sections/compact-modules";

export default function ExperiencePage() {
  return (
    <>
      <main className="flex-1 flex flex-col py-16 px-6 md:px-20 lg:px-32 max-w-5xl mx-auto w-full">
        <div className="mb-20 text-center lg:text-left">
          <h1 className="text-white font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter mb-6 font-display leading-none text-premium">
            Experience
            <span className="text-glow-cyan">.</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
            Professional journey and technical background focused on digital 
            craftsmanship and scalable systems.
          </p>
        </div>

        <QuickStats />
        <div className="py-20 lg:py-24">
          <ExperienceTimeline />
        </div>
      </main>
    </>
  );
}
