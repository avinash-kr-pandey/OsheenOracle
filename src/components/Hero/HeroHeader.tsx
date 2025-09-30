"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Readers", href: "/readers" },
  { name: "Services", href: "/services" },
  { name: "Horoscope", href: "/horoscope" },
  { name: "Blog", href: "/blog" },
];

export default function HeroHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="w-full min-h-screen bg-gradient-to-b from-pink-200 to-blue-200 relative overflow-hidden">
      {/* Navbar */}
      <div
        className={`max-w-7xl mx-auto px-4 py-4 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "py-3 "
            : "py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={scrolled ? 80 : 100} // increased size
            height={scrolled ? 80 : 100} // increased size
            src="/logo.png"
            alt="Logo"
            className="rounded-full transition-all duration-300"
          />
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-sm lg:text-base font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Reservation Button (Desktop) */}
        <a
          href="/reservation"
          className="hidden md:inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-3 py-2 lg:px-5 lg:py-2.5 rounded-lg transition-all duration-300 text-sm lg:text-base hover:scale-105 hover:shadow-lg transform"
        >
          Reservation
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2 bg-white" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen
            ? "bg-black/50 backdrop-blur-sm opacity-100"
            : "bg-transparent backdrop-blur-0 opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Mobile Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-purple-900 to-pink-800 shadow-2xl transition-transform duration-500 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col p-8 pt-20 space-y-6">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-xl font-medium py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/reservation"
              className="mt-6 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Reservation
            </a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center px-4 mt-8 md:mt-16 lg:mt-20">
        {/* Background Circle Image */}
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
          {/* Heading */}
          <h1 className="font-heading font-bold text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[120px] text-[#89308A] leading-tight drop-shadow-lg animate-fade-in-up">
            Osheen Oracle
          </h1>

          {/* Subheading */}
          <p className="mt-4 xs:mt-5 sm:mt-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-subheading text-[#9C2F50] leading-relaxed animate-fade-in-up animation-delay-200">
            Let The Healing Begin
          </p>

          {/* Button */}
          <Link
            href="/book-session"
            className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 bg-yellow-300 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg sm:text-xl md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg animate-fade-in-up animation-delay-400"
          >
            Book a Session
          </Link>
        </div>
      </div>

      {/* Custom CSS for animations */}
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

        /* Extra small devices */
        @media (max-width: 475px) {
          .xs\\:text-6xl {
            font-size: 3.75rem;
          }
          .xs\\:text-2xl {
            font-size: 1.5rem;
          }
          .xs\\:mt-5 {
            margin-top: 1.25rem;
          }
          .xs\\:mt-7 {
            margin-top: 1.75rem;
          }
        }
      `}</style>
    </header>
  );
}
