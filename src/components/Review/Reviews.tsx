"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import hero1 from "@/assets/images/hero1.jpeg";
import hero2 from "@/assets/images/hero2.jpeg";
import hero3 from "@/assets/images/hero3.jpeg";
import { Autoplay, Navigation } from "swiper/modules";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      role: "Professional Rider",
      image: hero1,
      review:
        "The Royal Enfield helmet comfort and safety. The build quality is outstanding and the ventilation system works perfectly.",
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
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Customer Testimonials
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Navigation]}
          navigation
          className="review-swiper pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full flex flex-col transform transition-transform duration-300 hover:scale-105">
                <div className="flex items-start mb-2 gap-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover "
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px] text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-indigo-600 font-medium text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-56 mb-2 rounded-xl overflow-hidden">
                  <Image
                    src={review.image}
                    alt="Review Image"
                    fill
                    className="object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <p className="text-gray-700 text-[16px] mb-2 flex-grow leading-relaxed">
                  {review.review}
                </p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-3 text-gray-700 font-semibold">
                    {review.rating}/5
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewSection;
