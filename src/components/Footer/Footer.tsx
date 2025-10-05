import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Imgae from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
        {/* LOGO + Socials */}
        <div>
          <Imgae src="/logo.png" alt="Logo" width={100} height={100} />
          <p className="text-gray-300 mb-4">
            We help you exploring your cosmic path
          </p>
          <div className="flex items-center space-x-4 text-2xl text-white">
            <a href="#" className="hover:text-[#c6e400] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#c6e400] transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#c6e400] transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[#c6e400] text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/readers" className="hover:text-white transition">
                Readers
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/horoscope" className="hover:text-white transition">
                Horoscope
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[#c6e400] text-lg font-semibold mb-3">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-white transition">
                Natal Chart Readings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Compatibility Readings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Progression Readings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Specialty Readings
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#c6e400] text-lg font-semibold mb-3">
            Contact Us
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>booking@celestial.com</li>
            <li>(+62) 1234 5678</li>
            <li>Oak Building 19, North City</li>
          </ul>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Osheen Oracle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
