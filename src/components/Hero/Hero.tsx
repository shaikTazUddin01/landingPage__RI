"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import hero1 from "@/assets/images/hero1.jpeg";
import hero2 from "@/assets/images/hero2.jpeg";
import hero3 from "@/assets/images/hero3.jpeg";
import hero4 from "@/assets/images/hero4.jpeg";

import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <picture>
          <source srcSet={hero1.src} type="image/webp" />
          <Image
            src={hero1}
            alt="Hero Image 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source srcSet={hero2.src} type="image/webp" />
          <Image
            src={hero2}
            alt="Hero Image 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source srcSet={hero3.src} type="image/webp" />
          <Image
            src={hero3}
            alt="Hero Image 3"
            className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source srcSet={hero4.src} type="image/webp" />
          <Image
            src={hero4}
            alt="Hero Image 4"
            className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[450px] xl:h-[500px] object-cover"
          />
        </picture>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSection;
