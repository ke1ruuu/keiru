import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DockNav } from "@/components/layout/dock-nav";
import { Footer } from "@/components/layout/footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Keiru",
  description: "Aspiring Engineer ",
  icons: {
    icon: "/keiru.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${jetbrains.variable} bg-[#0a0a0a] text-slate-300 font-display selection:bg-cyan-500/30 antialiased`}
      >
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-32">
          <div className="layout-container flex h-full grow flex-col">
            {children}
            <DockNav />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}