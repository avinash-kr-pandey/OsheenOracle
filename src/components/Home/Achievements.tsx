import Image from "next/image";
import React from "react";

const Achievements = () => {
  const gradientBg = "bg-gradient-to-b from-[#F1C1EB] to-[#D8FBFF]";
  const titleColor = "text-[#3D2E4F]";

  return (
    <div
      className={`max-w-7xl mx-auto px-4 py-10 rounded-xl shadow-2xl mb-10 ${gradientBg}`}
      style={{ fontFamily: "var(--font-montserrat) " }}
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h1
            className={`text-4xl sm:text-4xl md:text-5xl  ${titleColor} mb-6`}
          >
            Achievements
          </h1>

          <p
            className="text-[#000000] text-base sm:text-lg"
            style={{ lineHeight: "1.9" }} 
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <Image
            src="/assets/Achievements.jpg"
            alt="Achievements Image"
            width={600}
            height={500}
            className=" w-full max-w-md md:max-w-lg object-fill "
          />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
