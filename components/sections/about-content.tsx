"use client";

import { Zap, Award } from "lucide-react";
import { SkillsList } from "@/components/sections/compact-modules";

interface AboutProps {
  compact?: boolean;
}

export default function AboutContent({ compact = false }: AboutProps) {
  return (
    <div className={`flex flex-col gap-${compact ? "8" : "20"} py-${compact ? "4" : "16"}`}>
      <h2 className={`text-white text-center font-black text-3xl sm:text-4xl ${compact ? "tracking-normal" : "tracking-tighter"} font-display`}>
        Being an Engineer<span className="text-glow-cyan">.</span>
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 ${compact ? "border-t border-white/5" : "pt-12 border-t border-white/5"}`}>
        <div className="flex items-start gap-4 group">
          <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/10 transition-colors">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Philosophy</h3>
            <p className="text-slate-500 leading-relaxed italic">
              "Always at the verge in between of being fast and right."
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 group">
          <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary/10 transition-colors">
            <Award size={20} />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Quality First</h3>
            <p className="text-slate-500 leading-relaxed italic">
              "Modularity. Maintainability. Scalability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}