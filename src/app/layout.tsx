import type { Metadata } from "next";
import { Charm, Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import HeroHeader from "@/components/Hero/HeroHeader";
import Footer from "@/components/Footer/Footer";

// Heading (Main)
const charm = Charm({
  variable: "--font-charm",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Subheading
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Body / Buttons
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Osheen Oracle",
  description: "Let The Healing Begin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${charm.variable} ${cormorant.variable} ${montserrat.variable} antialiased `}
      >
        <div className="min-h-screen flex flex-col ">
          <HeroHeader  />
          <main className="flex-1 container">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
