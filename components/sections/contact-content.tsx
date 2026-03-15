"use client";

import { siteMetadata } from "@/lib/data";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactProps {
  compact?: boolean;
}

export default function ContactContent({ compact = false }: ContactProps) {
  return (
    <div className={`flex flex-col justify-center items-center gap-${compact ? "4" : "8"} py-${compact ? "4" : "16"}`}>
        <div className="flex flex-wrap gap-3">
          <Button size="icon" variant="ghost" asChild>
            <a href={siteMetadata.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
              <Github size={18} />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href={siteMetadata.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
              <Twitter size={18} />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white">
              <MessageCircle size={18} />
            </a>
          </Button>
        </div>
    </div>
  );
}