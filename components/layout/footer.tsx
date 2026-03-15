import { Globe, Youtube, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center px-6 md:px-20 lg:px-32 py-8 text-slate-500 max-w-6xl mx-auto w-full gap-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono text-center sm:text-left">
        Built with love by Keiru
      </p>
      {/* <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-slate-500 hover:text-primary transition-colors"
          aria-label="Globe"
        >
          <Globe size={16} strokeWidth={1.5} />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-primary transition-colors"
          aria-label="YouTube"
        >
          <Youtube size={16} strokeWidth={1.5} />
        </a>
        <a
          href="#"
          className="text-slate-500 hover:text-primary transition-colors"
          aria-label="Sparkles"
        >
          <Sparkles size={16} strokeWidth={1.5} />
        </a>
      </div> */}
    </footer>
  );
}
