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

  
      <main>
        {children}
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}
