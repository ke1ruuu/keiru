"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";
import { Home, Timer, Code2, User, Notebook } from "lucide-react";
import ContactModal from "@/components/modals/contact-modal";

const ICON_MAP = { home: Home, timeline: Timer, code: Code2, user: User, notebook: Notebook } as const;

const NAV_ITEMS = navItems.map(item => ({
  ...item,
  Icon: ICON_MAP[item.iconName as keyof typeof ICON_MAP] || Notebook
}));

export function DockNav() {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);
  const [first, ...rest] = NAV_ITEMS;
  const last = rest[rest.length - 1];
  const middle = rest.slice(0, rest.length - 1);

  function NavItem({ href, label, Icon, onClick }: { href?: string; label: string; Icon: React.ElementType; onClick?: () => void }) {
    const isActive = pathname === href;
    return href ? (
      <a
        href={href}
        className={cn(
          "group relative flex items-center justify-center p-3 rounded-xl transition-all",
          isActive ? "bg-white/10 text-primary shadow-[0_0_10px_rgba(6,182,212,0.2)]" : "text-slate-400 hover:bg-white/10 hover:text-primary"
        )}
      >
        <Icon size={20} strokeWidth={1.5} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold whitespace-nowrap pointer-events-none">
          {label}
        </span>
      </a>
    ) : (
      <button
        onClick={onClick}
        className="group relative flex items-center justify-center p-3 rounded-xl text-slate-400 hover:bg-white/10 hover:text-primary transition-all"
      >
        <Icon size={20} strokeWidth={1.5} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-slate-800 text-white text-[10px] px-2 py-1 rounded-md uppercase tracking-wider font-bold whitespace-nowrap pointer-events-none">
          {label}
        </span>
      </button>
    );
  }

  return (
    <>
      <div className="fixed bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-[100] w-auto px-4 sm:px-0">
        <nav className="px-3 sm:px-4 py-2 sm:py-3 rounded-2xl flex items-center gap-1 sm:gap-2 shadow-2xl" style={{ background: "rgba(20, 20, 20, 0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <NavItem key={first.href} {...first} />
          <div className="w-px h-6 bg-white/10 mx-1" />
          {middle.map((item, index) => index === middle.length - 1 ? <NavItem key={item.label} label={item.label} Icon={item.Icon} onClick={() => setModalOpen(true)} /> : <NavItem key={item.href} {...item} />)}
          <div className="w-px h-6 bg-white/10 mx-1" />
          <NavItem key={last.href} {...last} />
        </nav>
      </div>

      <ContactModal isOpen={isModalOpen} setIsOpen={setModalOpen} />
    </>
  );
}