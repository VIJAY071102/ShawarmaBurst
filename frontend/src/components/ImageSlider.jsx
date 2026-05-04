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
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px]">
      
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

      {/* Strong Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        
        <div className=" px-6 py-4 rounded-xl text-center">
          
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
            Welcome To
          </h1>

          <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide">
            Shawarma Burst
          </h1>

          <p className="text-gray-100 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mx-auto">
            Flavor Explosion in Every Bite
          </p>

          <button className="mt-4 sm:mt-6 bg-yellow-400 text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-300 transition shadow-lg hover:scale-105 text-sm sm:text-base">
            Order Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default ImageSlider;