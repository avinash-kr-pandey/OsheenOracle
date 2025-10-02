"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const WhyChooseUs = () => {
  const cards = [
    {
      title: "Expert Astrologers",
      desc: "We generate your natal chart and interpret the planets, signs, and houses to give you insights into your personality, strengths, weaknesses, and life path.",
    },
    {
      title: "Compatibility Readings",
      desc: "We analyze compatibility by comparing natal charts, helping people understand relationships with partners, friends, or family better.",
    },
    {
      title: "Progress Reports",
      desc: "We provide insights into transits and progressions, helping you navigate life events and understand timing significance.",
    },
    {
      title: "Career Guidance",
      desc: "Our astrologers can guide you on career choices by analyzing the 10th house, planets, and transits to support your professional journey.",
    },
    {
      title: "Health & Wellness",
      desc: "Astrology can reveal potential health patterns, giving you awareness and helping you maintain balance in life.",
    },
  ];

  // duplicate cards for infinite loop
  const visibleCards = 4;
  const extendedCards = [
    ...cards.slice(-visibleCards),
    ...cards,
    ...cards.slice(0, visibleCards),
  ];

  const [currentIndex, setCurrentIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef<HTMLDivElement>(null);

  const handleSlide = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
    setIsTransitioning(true);
  };

  // reset when reach clones
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(cards.length);
      }, 700);
    } else if (currentIndex === cards.length + visibleCards) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(visibleCards);
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, cards.length]);

  return (
    <div
      className="w-full py-16 max-w-7xl mx-auto  relative overflow-hidden"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="absolute inset-0 opacity-40 bg-[url('/assets/Shape.png')] bg-no-repeat bg-left-top bg-contain pointer-events-none"></div>
      {/* Background Gradient */}
      <div className="absolute inset-0 shadow-xl rounded-3xl -z-10" />

      {/* Header Section */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl md:text-3xl font-serif italic font-semibold text-gray-900 mt-2 max-w-lg">
            Discover Your Path in the Stars with Us
          </h2>
        </div>
        {/* Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => handleSlide("left")}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-yellow-500" />
          </button>
          <button
            onClick={() => handleSlide("right")}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 transition"
          >
            <FaArrowRight className="text-yellow-500" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          ref={transitionRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(extendedCards.length / visibleCards) * 100}%`,
          }}
        >
          {extendedCards.map((card, index) => (
            <div key={index} className="w-1/9 flex-shrink-0">
              <div className="p-6 w-[25vw] border rounded-xl shadow-sm bg-white hover:shadow-md transition h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-b from-blue-200 to-green-200 rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 text-center leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
