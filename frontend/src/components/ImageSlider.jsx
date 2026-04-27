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
    <div className="relative w-full h-[650px]">
      {/* 🔥 Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2500 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="slide" className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome To
        </h1>
        <h1 className="text-yellow-400 text-4xl md:text-6xl font-bold">
          Shawarma Burst
        </h1>

        <p className="text-red-600 mt-3 text-lg md:text-xl">
          Flavor Explosion in Every Bite
        </p>

        <button className="mt-5 bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
          Order Now
        </button>
      </div>

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
    </div>
  );
}

export default ImageSlider;
