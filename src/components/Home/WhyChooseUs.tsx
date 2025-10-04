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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef<HTMLDivElement>(null);

  // Calculate cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1280) {
        // xl screens
        setCardsPerView(3);
      } else if (window.innerWidth >= 1024) {
        // lg screens
        setCardsPerView(2.5);
      } else if (window.innerWidth >= 768) {
        // md screens
        setCardsPerView(2);
      } else {
        // sm screens
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Extend cards for infinite loop
  const extendedCards = [
    ...cards.slice(-Math.ceil(cardsPerView)),
    ...cards,
    ...cards.slice(0, Math.ceil(cardsPerView)),
  ];

  const totalCards = cards.length;

  const handleSlide = (direction: "left" | "right") => {
    setIsTransitioning(true);

    if (direction === "left") {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Reset when reaching clones for infinite loop
  useEffect(() => {
    if (currentIndex < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalCards - 1);
      }, 700);
    } else if (currentIndex >= totalCards) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700);
    }
  }, [currentIndex, totalCards]);

  // Calculate card width based on cards per view
  const getCardWidth = () => {
    if (cardsPerView === 1) return "100%";
    if (cardsPerView === 2) return "50%";
    if (cardsPerView === 2.5) return "40%"; // 2.5 cards = 40% each (100%/2.5)
    if (cardsPerView === 3) return "33.333%";
    return "100%";
  };

  const cardWidth = getCardWidth();
  const gap = "1rem"; // 16px gap between cards

  return (
    <div
      className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="absolute inset-0 opacity-40 bg-[url('/assets/Shape.png')] bg-no-repeat bg-left-top bg-contain pointer-events-none"></div>

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-10 lg:mb-12">
        <div className="mb-6 sm:mb-0">
          <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-5xl text-purple-900 mt-2 max-w-lg whitespace-nowrap">
            Discover Your Path in the Stars with Us
          </h2>
        </div>

        {/* Arrows */}
        <div className="flex gap-3 self-end sm:self-auto">
          <button
            onClick={() => handleSlide("left")}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-yellow-500" />
          </button>
          <button
            onClick={() => handleSlide("right")}
            className="w-10 h-10 flex items-center justify-center rounded-full border bg-white shadow hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-yellow-500" />
          </button>
        </div>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div
          ref={transitionRef}
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${
              currentIndex * 1
            }rem))`,
            gap: gap,
          }}
        >
          {extendedCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `calc(${cardWidth} - ${gap})`,
                minWidth: `calc(${cardWidth} - ${gap})`,
              }}
            >
              <div className="p-4 sm:p-6 border rounded-xl shadow-sm bg-white hover:shadow-lg transition-all duration-300 h-full hover:scale-105 group">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-green-200 rounded-full group-hover:from-blue-300 group-hover:to-green-300 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors">
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
