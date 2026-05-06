import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

function ImageSlider() {
  const images = [
    "/photo1.webp",
    "/photo2.webp",
    "/photo3.webp",
    "/photo4.webp",
  ];

  return (
    <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px]">

      {/* Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2500 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="slide"
              className="w-full h-full object-cover brightness-50"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Red Overlay (instead of plain black) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-red-900/70 to-black/80 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">

        <div className="px-6 py-4 rounded-xl text-center">

          {/* Bigger + White */}
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide drop-shadow-lg">
            Welcome To
          </h1>

          {/* 🔥 Red Brand Name */}
          <h1 className="text-red-500 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wider mt-2 ">
            Shawarma Burst
          </h1>

          <p className="text-gray-200 mt-3 text-base sm:text-lg md:text-xl max-w-md mx-auto">
            Flavor Explosion in Every Bite
          </p>

          {/* 🔴 Button upgraded */}
          <button className="mt-6 bg-red-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition shadow-lg hover:scale-105 text-base sm:text-lg">
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default ImageSlider;