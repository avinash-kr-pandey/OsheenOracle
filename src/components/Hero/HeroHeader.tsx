"use client";

import Image from "next/image";
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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  
    ${scrolled ? "bg-white shadow-md py-2" : "bg-pink-200 py-4"}`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              width={scrolled ? 70 : 90}
              height={scrolled ? 70 : 90}
              src="/logo.png"
              alt="Logo"
              className="rounded-full transition-all duration-300"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 text-sm lg:text-base font-medium hover:text-purple-600 transition-all duration-300 hover:scale-105"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/reservation"
              className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg transition-all duration-300 text-sm lg:text-base hover:scale-105 hover:shadow-lg"
            >
              Reservation
            </a>
          </nav>

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
          <div
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-purple-900 to-pink-800 shadow-2xl transition-transform duration-500 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col p-8 pt-24 space-y-6">
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
      </header>
    </div>
  );
}
