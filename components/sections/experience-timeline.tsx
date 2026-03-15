import { Terminal, Layers, GraduationCap } from "lucide-react";
import { experience, education } from "@/lib/data";
import { cn } from "@/lib/utils";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="uppercase tracking-[0.2em] text-[15px] mb-12 font-mono font-black">
      {children}
    </h3>
  );
}

interface TimelineIconProps {
  isCurrent: boolean;
  Icon: React.ElementType;
}

function TimelineIcon({ isCurrent, Icon }: TimelineIconProps) {
  return (
    <div
      className={cn(
        "size-12 rounded-full flex items-center justify-center shrink-0",
        isCurrent
          ? "bg-[#0d1a1f] border border-primary/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          : "bg-[#111118] border border-white/10",
      )}
    >
      <Icon
        size={18}
        strokeWidth={1.5}
        className={isCurrent ? "text-primary" : "text-slate-600"}
      />
    </div>
  );
}

function TimelineConnector() {
  return (
    <div
      className="w-px grow my-3 opacity-30"
      style={{
        background:
          "linear-gradient(to bottom, transparent, #06b6d4, #06b6d4, transparent)",
      }}
    />
  );
}

export function ExperienceTimeline() {
  const hasWorkExperience = experience.length > 0;

  return (
    <div className="flex flex-col">
      <SectionLabel>Professional Journey</SectionLabel>

      {!hasWorkExperience && (
        <div className="pb-16 px-4">
          <p className="text-slate-500 text-sm italic">
            Building my professional history... check back soon!
          </p>
        </div>
      )}

      {experience.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-x-4 sm:gap-x-6"
        >
          <div className="flex flex-col items-center">
            <TimelineIcon
              isCurrent={item.isCurrent}
              Icon={index === 0 ? Terminal : Layers}
            />
            {index < experience.length - 1 && <TimelineConnector />}
          </div>

          <div className="pb-12 md:pb-16">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1 sm:gap-4">
              <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-tight">
                {item.title}
              </h4>
              <span className="text-slate-500 text-xs sm:text-sm font-medium font-mono whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p
              className={cn(
                "font-bold mb-5 text-[11px] sm:text-xs uppercase tracking-widest",
                item.isCurrent ? "text-primary" : "text-slate-500",
              )}
            >
              {item.company}
            </p>
            <ul className="space-y-3.5 sm:space-y-4">
              {item.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 sm:gap-4 text-slate-400 leading-relaxed text-[13px] sm:text-sm"
                >
                  <span
                    className={cn(
                      "mt-1.5 size-1.5 rounded-full flex-shrink-0",
                      item.isCurrent
                        ? "bg-primary shadow-[0_0_8px_rgba(6,182,212,0.4)]"
                        : "bg-slate-700",
                    )}
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <SectionLabel>Academic Background</SectionLabel>
      </div>

      {education.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[48px_1fr] sm:grid-cols-[56px_1fr] gap-x-4 sm:gap-x-6"
        >
          <div className="flex flex-col items-center">
            <TimelineIcon isCurrent={false} Icon={GraduationCap} />
          </div>
          <div className="pb-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1 sm:gap-4">
              <h4 className="text-white text-lg sm:text-xl font-bold tracking-tight leading-tight">
                {item.degree}
              </h4>
              <span className="text-slate-500 text-xs sm:text-sm font-medium font-mono whitespace-nowrap">
                {item.period}
              </span>
            </div>
            <p className="text-slate-400 font-bold mb-2 text-[11px] sm:text-xs uppercase tracking-widest">
              {item.institution}
            </p>
            {item.note && (
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed italic border-l border-white/5 pl-4 mt-3">
                {item.note}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
