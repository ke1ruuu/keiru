import { Hero } from "@/components/sections/hero";
import { Footer } from "@/components/layout/footer";
import { QuickStats, SkillsList } from "@/components/sections/compact-modules";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto w-full">
      <main className="grow">
        <Hero />
      </main>
    </div>
  );
}