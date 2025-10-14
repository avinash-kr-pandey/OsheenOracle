"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogData = [
  {
    img: "/images/blog/blogimg-1.jpg",
    date: "November 2023",
    title: "The Astrology of Success",
  },
  {
    img: "/images/blog/blogimg-2.jpg",
    date: "November 2023",
    title: "A Celestial Guide to Mana",
  },
  {
    img: "/images/blog/blogimg-1.jpg",
    date: "December 2023",
    title: "Stars and Life Lessons",
  },
];

const Blog: React.FC = () => {
  // explicitly type the ref as HTMLDivElement
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "next" | "prev") => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="px-8 py-12 relative"
      style={{
        fontFamily: "var(--font-montserrat)",
      }}
    >
      <p className="md:text-lg text-md mb-2 text-[#3D2E4F]">BLOG</p>
      <h2
        className="md:text-5xl text-2xl mb-8 text-[#3D2E4F] py-3"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        Cosmic <span className="italic">Stories</span> from Celestial
      </h2>

      <div className="relative">
        {/* Buttons */}
        <button
          onClick={() => scroll("prev")}
          className="absolute top-1/2 -left-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transform -translate-y-1/2"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("next")}
          className="absolute top-1/2 -right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transform -translate-y-1/2"
        >
          <ChevronRight />
        </button>

        <motion.div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar"
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
        >
          {blogData.map((blog, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0"
              style={{ width: "70%" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={blog.img}
                alt={blog.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="py-6">
                <p className="text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-serif mb-4">{blog.title}</h3>
                <button className="bg-yellow-400 px-4 py-2 rounded font-semibold">
                  Read Article
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
