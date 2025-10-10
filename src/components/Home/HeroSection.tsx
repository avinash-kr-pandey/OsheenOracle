"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center px-4 md:mt-0 mt-5">
      {/* Circle Background */}
      <div className="relative w-72 h-72 xs:w-80 xs:h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] animate-float">
        <Image
          src="/images/roundimage.png"
          alt="circle background"
          width={600}
          height={600}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="font-heading font-bold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px] text-[#89308A] leading-tight drop-shadow-lg animate-fade-in-up">
          Osheen Oracle
        </h1>
        <p className="mt-4 xs:mt-5 sm:mt-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-subheading text-[#9C2F50] leading-relaxed animate-fade-in-up animation-delay-200">
          Let The Healing Begin
        </p>
        <Link
          href="/book-session"
          className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg sm:text-xl md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-fade-in-up animation-delay-400"
        >
          Book a Session
        </Link>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}
