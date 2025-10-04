"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const zodiacData = [
  { name: "Aries", date: "Mar 21 - Apr 19" },
  { name: "Taurus", date: "Apr 20 - May 20" },
  { name: "Gemini", date: "May 21 - Jun 20" },
  { name: "Cancer", date: "Jun 21 - Jul 22" },
  { name: "Leo", date: "Jul 23 - Aug 22" },
  { name: "Virgo", date: "Aug 23 - Sep 22" },
  { name: "Libra", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", date: "Jan 20 - Feb 18" },
  { name: "Pisces", date: "Feb 19 - Mar 20" },
];

const SliderRow = ({ rowData }: { rowData: typeof zodiacData }) => {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const fullData = [...rowData, ...rowData, ...rowData]; // triple for smoother infinite effect

  // Measure first card width
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const firstCard = containerRef.current.querySelector(".card");
        if (firstCard) {
          const style = getComputedStyle(firstCard as HTMLElement);
          const gap = 24; // gap-6 = 1.5rem = 24px
          setCardWidth(
            (firstCard as HTMLElement).offsetWidth + parseInt(gap.toString())
          );
        }
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleNext = () => setIndex((prev) => prev + 1);
  const handlePrev = () => setIndex((prev) => prev - 1);

  // Infinite loop correction
  useEffect(() => {
    const total = rowData.length;
    if (index < 0) {
      setTimeout(() => setIndex(total - 1), 0);
    } else if (index >= total * 2) {
      setTimeout(() => setIndex(total), 0);
    }
  }, [index, rowData.length]);

  return (
    <div className="relative">
      {/* Controls */}
      <div className="absolute -top-10 right-3 z-30 flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="p-2 shadow rounded-full hover:bg-gray-100"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 shadow rounded-full hover:bg-gray-100"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        className="overflow-hidden w-full flex justify-start"
      >
        <motion.div
          className="flex gap-6"
          animate={{ x: -index * cardWidth }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
          style={{ width: "max-content" }}
        >
          {fullData.map((zodiac, i) => (
            <div
              key={i}
              className="card flex-shrink-0 rounded-2xl cursor-pointer transition-all p-4 text-left w-[250px]"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <div className="h-28 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg mb-3" />
              <div className="flex justify-between items-center">
                <h3
                  className="font-semibold text-gray-800 text-base"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {zodiac.name}
                </h3>
                <p
                  className="text-sm text-gray-600"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {zodiac.date}
                </p>
              </div>
              <button
                className="text-sm text-blue-600 mt-3 flex items-center justify-center hover:underline"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Read More →
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Catalogue = () => {
  const half = Math.ceil(zodiacData.length / 2);
  const firstRow = zodiacData.slice(0, half);
  const secondRow = zodiacData.slice(half);

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-10"
      style={{ fontFamily: "var(--font-montserrat)" }}
    >
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl pb-4 text-[#3D2E4F]"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Catalogue
        </h2>
        <p
          className="text-[#3D2E4F] text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Astrology merely guides us toward reality.
        </p>
        <p
          className="text-[#3D2E4F] text-base sm:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          Explore a range of personalized solutions crafted to inspire, guide,
          and help you achieve your goals.
        </p>
      </div>

      <div className="space-y-16">
        <SliderRow rowData={firstRow} />
        <SliderRow rowData={secondRow} />
      </div>
    </div>
  );
};

export default Catalogue;
