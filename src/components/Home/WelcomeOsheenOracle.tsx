"use client";
import Image from "next/image";
import React from "react";

const WelcomeOsheenOracle = () => {
  return (
    <div className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24">
      {/* Background Zodiac Style */}
      <div className="absolute inset-0 opacity-40 bg-[url('/assets/Group.png')] bg-no-repeat bg-left-top bg-contain pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* <h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-snug text-purple-900"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Welcome to <br className="hidden md:block" /> Osheen Oracle
          </h1> */}

          <p
            className="text-base sm:text-lg md:text-xl mb-6 text-gray-700"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Discover More About The Path That Shapes Your Future
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
            <button
              className="px-6 py-2 rounded-lg bg-[#3D2E4F] text-white font-semibold shadow-md hover:bg-[#3D2E4F] transition"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Osheen Oracle
            </button>
            <button
              className="px-6 py-2 rounded-lg border border-[#00000085] text-[#3D2E4F] font-semibold shadow-md hover:bg-purple-100 transition"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Osheen MAA
            </button>
          </div>

          {/* About Section */}
          <h2
            className="text-2xl sm:text-3xl md:text-[32px] text-[#3C3C3C] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            About
          </h2>
          <h2
            className="text-2xl sm:text-3xl md:text-3xl font-bold text-[#3C3C3C] mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Osheen Oracle
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-[#3C3C3C] leading-relaxed text-justify md:text-left"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            We are highly delighted to see you here at Osheen Oracle, which is 4
            time consecutively awarded as No.1 tarot reading platform in India.
            Osheen Oracle is one stop solution for a comprehensive healing
            journey where you will find guidance to heal your life in all
            aspects of love, relationship, mental well-being, career success,
            business success and for every issue you must be facing today alone
            as we are here to help.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center relative pt-12 md:pt-32">
          {/* Image container */}
          <div className="group relative w-60 h-80 sm:w-72 sm:h-96 md:w-[350px] md:h-[520px] lg:w-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-all duration-700 ease-out">
            {/* Main Image */}
            <Image
              src="/assets/youaremagic.jpg"
              alt="Osheen Oracle"
              fill
              className="object-cover scale-100 group-hover:scale-110 brightness-75 group-hover:brightness-100 transition-all duration-700 ease-in-out"
              priority
            />

            {/* Optional subtle overlay gradient (for depth) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-all duration-700"></div>
          </div>

          {/* Overlay logo */}
          <div className="absolute bottom-[-30px] right-[20px] sm:bottom-[-35px] sm:right-[35px] md:bottom-[-40px] md:right-[45px] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 z-20">
            <Image
              src="/logo.png"
              alt="Overlay Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOsheenOracle;
