"use client";

import Image from "next/image";
import React, { useState } from "react";

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

  return (
    <header className="w-full min-h-screen bg-gradient-to-b from-pink-200 to-blue-200">
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            width={60}
            height={60}
            src="/logo.png"
            alt="Logo"
            className="rounded-full"
          />
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 text-sm lg:text-base font-medium hover:text-purple-600 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Reservation Button (Desktop) */}
        <a
          href="/reservation"
          className="hidden md:inline-block bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-3 py-2 lg:px-5 lg:py-2.5 rounded-lg transition text-sm lg:text-base"
        >
          Reservation
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-800 font-medium hover:text-purple-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/reservation"
            className="block mt-2 bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg transition"
            onClick={() => setMenuOpen(false)}
          >
            Reservation
          </a>
        </nav>
      )}

      {/* Hero Section */}
      <div className="relative flex items-center justify-center text-center mt-12 md:mt-16 px-4">
        {/* Background Image */}
        <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
          <Image
            src="/images/roundimage.png"
            alt="zodiac circle"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          {/* Main Heading */}
          <h1 className="font-heading font-bold text-[180px] sm:text-[200px] md:text-[250px] lg:text-[280px] text-[#89308A] leading-[1.1] drop-shadow-md">
            Osheen Oracle
          </h1>

          {/* Subheading */}
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-subheading text-purple-700">
            Let The Healing Begin
          </p>

          {/* Button */}
          <a
            href="/book-session"
            className="mt-4 sm:mt-6 md:mt-8 font-body bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition text-sm md:text-base"
          >
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
}
