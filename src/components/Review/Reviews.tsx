"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import hero1 from "@/assets/images/hero1.jpeg";
import hero2 from "@/assets/images/hero2.jpeg";
import hero3 from "@/assets/images/hero3.jpeg";
import { Autoplay } from "swiper/modules";
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith", 
      role: "Professional Rider",
      image: hero1,
      review:
        "The Royal Enfield helmet provides exceptional comfort and safety. The build quality is outstanding and the ventilation system works perfectly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Motorcycle Enthusiast", 
      image: hero2,
      review:
        "I'm impressed with the attention to detail and premium feel. The helmet fits perfectly and the visibility is excellent.",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Mike Anderson",
      role: "Daily Commuter",
      image: hero3,
      review:
        "Best helmet I've owned so far. The noise reduction is great and the pin-lock visor system is a game-changer.",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "Adventure Rider",
      image: hero1,
      review: 
        "Extremely durable and reliable helmet. Perfect for long rides and varying weather conditions. The comfort level is outstanding.",
      rating: 4.7,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="review-swiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={review.image}
                    alt="Review Image"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-2 text-gray-600">{review.rating}/5</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
