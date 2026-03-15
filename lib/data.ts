export const siteMetadata = {
  name: "Keiru",
  role: "Software Engineer",
  bio: "Specializing in building impactful and user-centric digital systems",
  socials: {
    github: "https://github.com/ke1ruuu",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "hello@example.com",
  }
};

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  isCurrent: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  note: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export const CATEGORIES = ["All", "Web", "Mobile", "Desktop", "Terminal"] as const;
export type Category = (typeof CATEGORIES)[number];

export interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  tech: string[];
  media: string;
  thumbnail: string;
}

export const experience: ExperienceItem[] = [
//   {
//     id: "nexus",
//     title: "Lead Fullstack Engineer",
//     company: "Nexus Digital Systems",
//     period: "2022 — Present",
//     isCurrent: true,
//     bullets: [
//       "Architected and deployed a microservices ecosystem serving 5M+ requests daily with 99.9% uptime.",
//       "Spearheaded the migration from legacy infrastructure to a headless architecture using Next.js and Go.",
//       "Implemented automated CI/CD pipelines reducing deployment friction by 60%.",
//     ],
//   },
//   {
//     id: "quantum",
//     title: "Software Developer",
//     company: "Quantum Innovations",
//     period: "2019 — 2022",
//     isCurrent: false,
//     bullets: [
//       "Developed core features for a React Native financial application featured in the App Store 'Daily List'.",
//       "Optimized database queries in PostgreSQL, improving dashboard load times by 2 seconds.",
//     ],
//   },
];

export const education: EducationItem[] = [
  {
    id: "gtu",
    degree: "B.Sc. Information Technology",
    institution: "Cavite State University - Main",
    period: "2021 — 2027",
    note: "",
  },
];

export const skills = [
  "Javascript",
  "Typescript",
  "Go",
  "Node.js",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Vercel"
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "aifil",
    title: "Aifil",
    category: "Web",
    description: "",
    tech: ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"],
    media: "/projects/project1.mov",
    thumbnail: "/projects/project1.png",
  },
//   {
//     id: "delta",
//     title: "Project Delta",
//     category: "Terminal",
//     description: "Cloud-native infrastructure management tool focused on security and automated compliance.",
//     tech: ["Node.js", "PostgreSQL", "Docker"],
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2670&auto=format&fit=crop",
//   },
//   {
//     id: "sigma",
//     title: "Project Sigma",
//     category: "Mobile",
//     description: "Intelligent data pipeline that leverages machine learning to automate complex ETL workflows.",
//     tech: ["Python", "AWS", "Kubernetes"],
//     image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2670&auto=format&fit=crop",
//   },
];

export const stats: StatItem[] = [
  { id: "exp", label: "Experience", value: "3 Years", iconName: "history" },
  { id: "proj", label: "Projects", value: `${PROJECTS.length} Shipped`, iconName: "code" },
  // { id: "cert", label: "Certifications", value: "0 Professional", iconName: "award" },
];

export const navItems = [
  { href: "/", label: "Home", iconName: "home" },
  { href: "/experience", label: "Experience", iconName: "timeline" },
  { href: "/projects", label: "Projects", iconName: "code" },
  { href: "/about", label: "About", iconName: "user" },
  { href: "/blog", label: "Blog", iconName: "notebook" },
];