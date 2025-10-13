"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const mediaData = [
  {
    id: "01",
    name: "ZEE NEWS",
    logo: "/media/zeenews.png",
    image: "/media/img-1.png",
  },
  {
    id: "02",
    name: "ABP न्यूज़",
    logo: "/media/abp.png",
    image: "/media/img-2.png",
  },
  {
    id: "03",
    name: "FEMINA",
    logo: "/media/femina.png",
    image: "/media/img-3.jpg",
  },
  {
    id: "04",
    name: "TEDx",
    logo: "/media/tde.png",
    image: "/media/img-4.png",
  },
];

const MediaSpotlight = () => {
  return (
    <div
      className="py-12 px-6 flex flex-col items-center"
      style={{
        backgroundImage: "url('/images/roundimage.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
        fontFamily: "var(--font-montserrat)",
      }}
    >
      <h2 className="text-4xl sm:text-4xl md:text-5xl text-[#3D2E4F] mb-2">
        Media Spotlight
      </h2>
      <p className="mb-8 text-center text-sm text-[#3D2E4F] max-w-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {mediaData.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer transform perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="flex items-center mb-4">
              <span className="text-5xl font-bold text-gray-400 mr-2">
                {item.id}
              </span>
              <Image
                src={item.logo}
                alt={item.name}
                className="h-12 object-contain"
                width={300}
                height={300}
              />
            </div>
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-md object-cover w-full"
              width={300}
              height={300}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MediaSpotlight;
