import Image from "next/image";
import React from "react";

const MEMBER = () => {
  return (
    <div className="relative w-full h-[50vh] md:h-[50vh] flex items-center justify-center text-center md:py-0 py-10">
      {/* Background Image */}
      <Image
        src="/assets/MEMBER.jpg" // Replace with your image
        alt="member"
        fill
        className="object-cover absolute inset-0 -z-10"
      />


      {/* Content */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          style={{ fontFamily: "Alegreya, serif", color: "#88308A" }}
        >
          BECOME A MEMBER
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
          style={{ fontFamily: "Alegreya, serif", color: "#88308A" }}
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
          tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl dui
          sed cras semper vitae. Tempor odio ullamcorper non sed dignissim eu.
        </p>

        <button className="bg-[#f4df4e] text-[#3d285a] font-semibold py-3 px-12 cursor-pointer rounded-lg hover:bg-[#e5cd42] transition-all duration-300">
          Get started
        </button>
      </div>
    </div>
  );
};

export default MEMBER;
