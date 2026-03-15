import { BookOpen, Code2, Award } from "lucide-react";
import { stats, skills } from "@/lib/data";
import { Button } from "@/components/ui/button";

const STAT_ICONS = {
  history: BookOpen,
  code: Code2,
  award: Award,
} as const;

export function QuickStats() {
  return (
    <div className="flex justify-center items-center sm:grid-cols-3 gap-10 py-10 border-y border-white/5">
      {stats.map((stat) => {
        const Icon = STAT_ICONS[stat.iconName as keyof typeof STAT_ICONS] ?? Code2;
        return (
          <div key={stat.id} className="flex items-center gap-4 group">
            <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary border border-primary/20 shrink-0 group-hover:bg-primary/10 transition-colors">
              <Icon size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5 font-mono">
                {stat.label}
              </p>
              <p className="text-white text-lg font-black tracking-tight">{stat.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SkillsList() {
  return (
    <div className="flex flex-wrap gap-2 py-8">
      {skills.map((skill) => (
        <span
          key={skill}
          className="inline-flex items-center px-3 py-1 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 text-xs font-medium tracking-wide hover:bg-white/[0.05] transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

export function InlineCta() {
  return (
    <div className="bg-primary/[0.03] border border-primary/20 rounded-2xl p-8 sm:p-10 my-16 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
      <div className="space-y-2 max-w-lg">
        <h4 className="text-white font-black text-2xl tracking-tight text-premium">
          Ready for the <span className="text-glow-cyan">next challenge?</span>
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          Available for freelance projects or full-time opportunities that push boundaries.
        </p>
      </div>
      <Button
        variant="outline"
        className="shrink-0 border-primary text-primary font-bold uppercase tracking-widest text-xs h-12 px-8 hover:bg-primary hover:text-white transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)] text-glow-cyan"
      >
        Get In Touch
      </Button>
    </div>
  );
}
