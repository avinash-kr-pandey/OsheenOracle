import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaStar,
  FaRegCompass,
  FaMoon,
  FaRegStar,
} from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FBB5E7] to-[#c6e400] animate-pulse"></div>

      {/* Floating animated elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 10}s`,
            }}
          >
            {i % 3 === 0 ? (
              <FaRegStar className="text-[#FBB5E7] text-xs" />
            ) : i % 3 === 1 ? (
              <FaStar className="text-[#c6e400] text-xs" />
            ) : (
              <FaMoon className="text-white text-xs" />
            )}
          </div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute -left-10 -top-10 w-32 h-32 bg-gradient-to-r from-[#FBB5E7] to-pink-300 rounded-full blur-2xl opacity-20 animate-glow"></div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-r from-[#c6e400] to-yellow-300 rounded-full blur-2xl opacity-20 animate-glow delay-1000"></div>

      <div className="relative z-10 py-14 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-14">
            {/* LOGO + Socials - Enhanced with mixed colors */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Celestial Logo"
                    width={150}
                    height={150}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute -inset-1 rounded-full blur-sm opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                </div>
              
              </div>

              <p className="text-gray-300 leading-relaxed text-sm hover:text-white transition-colors duration-300">
                Discover your celestial destiny and explore the cosmic path
                written in the stars with our expert astrological guidance.
              </p>

              <div className="flex items-center space-x-3">
                {[
                  { icon: FaFacebookF, hover: "hover:text-blue-400" },
                  { icon: FaInstagram, hover: "hover:text-pink-300" },
                  { icon: FaXTwitter, hover: "hover:text-gray-300" },
                ].map(({ icon: Icon, hover }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-full text-white transition-all duration-500 transform hover:scale-110 hover:bg-gradient-to-br hover:from-[#FBB5E7] hover:to-[#c6e400] ${hover} group shadow-lg hover:shadow-xl`}
                  >
                    <Icon className="text-lg group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <div className="bg-pink-200 p-2 rounded-lg">
                  <FaRegCompass className="text-white text-sm" />
                </div>
                <span className="bg-gradient-to-r from-[#FBB5E7] to-[#c6e400] bg-clip-text text-transparent">
                  Company
                </span>
              </h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Readers",
                  "Services",
                  "Horoscope",
                  "Testimonials",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-500 flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#FBB5E7] to-[#c6e400] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-3 transition-transform duration-500 group-hover:font-medium">
                        {item}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <div className="bg-[#FBB5E7] p-2 rounded-lg">
                  <FaStar className="text-white text-sm" />
                </div>
                <span className="bg-gradient-to-r from-[#c6e400] to-[#FBB5E7] bg-clip-text text-transparent">
                  Services
                </span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Natal Chart Readings",
                  "Compatibility Analysis",
                  "Future Progression",
                  "Specialty Readings",
                  "Career Guidance",
                  "Relationship Insights",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-500 flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-[#c6e400] to-[#FBB5E7] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-3 transition-transform duration-500 text-sm group-hover:font-medium">
                        {service}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact - Enhanced */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">
                <span className="bg-gradient-to-r from-[#FBB5E7] via-[#c6e400] to-[#FBB5E7] bg-clip-text text-transparent animate-gradient">
                  Contact Us
                </span>
              </h3>
              <div className="space-y-4">
                {[
                  { icon: "✉️", text: "booking@celestial.com" },
                  { icon: "📞", text: "(+62) 1234 5678" },
                  { icon: "📍", text: "Oak Building 19, North City" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 group cursor-pointer transform hover:translate-x-2 transition-transform duration-500"
                  >
                    <div className="w-7 h-7 bg-[#FBB5E7] to-[#c6e400] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <span className="text-black text-xs font-bold">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-500 group-hover:font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className=" transition-all duration-500 w-full">
                <p className="text-gray-300 text-sm mb-3">
                  Get cosmic insights delivered
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#FBB5E7] transition-all duration-500 focus:bg-gray-700"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-[#FBB5E7] to-[#c6e400] text-black rounded-lg font-medium hover:from-[#c6e400] hover:to-[#FBB5E7] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section with enhanced styling */}
          <div className="border-t border-gray-800 pt-8 relative">
            {/* Animated divider */}
            <div className="absolute -top-px left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#FBB5E7] to-transparent"></div>

            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm hover:text-white transition-colors duration-500">
                © {new Date().getFullYear()} Osheen Oracle. All rights reserved.
              </div>

              <div className="flex items-center space-x-6 text-sm">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                  (item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-white transition-all duration-500 hover:font-medium transform hover:translate-y-1"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Cosmic tagline */}
            <div className="text-center mt-6">
              <p className="text-gray-500 text-xs italic hover:text-[#FBB5E7] transition-colors duration-500 transform hover:scale-105">
                ✨ Your cosmic journey begins here ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
