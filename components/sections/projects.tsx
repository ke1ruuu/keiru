"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { Link2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, CATEGORIES, type Category } from "@/lib/data";

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = React.useState<Category>("All");

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === "All" || p.category === activeFilter,
  );

  const videoRefs = React.useRef<Record<string, HTMLVideoElement | null>>({});

  const handleMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  };

  const handleMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={cn(
              "px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border",
              activeFilter === category
                ? "bg-primary border-primary text-white shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                : "border-white/5 bg-white/[0.02] text-slate-500 hover:text-slate-300 hover:border-white/10",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card
            key={project.id}
            variant="glow"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
            className="flex flex-col group overflow-hidden border-white/5 transition-all hover:translate-y-[-4px]"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0"
              />

              <video
                ref={(el) => {
                  videoRefs.current[project.id] = el;
                }}
                src={project.media}
                muted
                loop
                playsInline
                className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60 pointer-events-none" />

              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[8px] font-bold text-white uppercase tracking-widest font-mono">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 grow flex flex-col items-start gap-1">
              <h3 className="text-white text-xl font-black font-display tracking-tight leading-none group-hover:text-primary transition-colors text-premium group-hover:text-glow-cyan">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-2 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[9px] uppercase font-mono tracking-wider font-bold text-slate-500 border border-white/5 px-2 py-0.5 rounded bg-white/[0.02]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-slate-500 font-mono text-sm">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
