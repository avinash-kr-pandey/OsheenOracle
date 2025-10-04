"use client";

import { usePathname } from "next/navigation";
import HeroHeader from "@/components/Hero/HeroHeader";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/login" || pathname === "/register";

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <HeroHeader />}
      <main
        className={`flex-1 container ${
          !hideHeaderFooter ? "pt-[96px] md:pt-[110px]" : "pt-0"
        }`}
      >
        {children}
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
