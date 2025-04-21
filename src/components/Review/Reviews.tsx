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
      name: "Rafiq Hossain",
      role: "Urban Commuter",
      image: hero1,
      review:
        "Daily use-এর জন্য পারফেক্ট! হালকা, আরামদায়ক, আর ট্রাফিকে কনফিডেন্টলি রাইড করতে পারি।",
      rating: 8.5,
    },
    {
      id: 2,
      name: "Tania Akter",
      role: "College Biker",
      image: hero2,
      review:
        "ডিজাইন আর কালার কম্বিনেশন অসাধারণ! আমি অনেক খোঁজার পর Blackstrom নিয়েছি – একদম সঠিক ডিসিশন।",
      rating: 9,
    },
    {
      id: 3,
      name: "Farhan Zayed",
      role: "Touring Enthusiast",
      image: hero3,
      review:
        "Highway তে ৬০+ স্পিডেও কোনো অসুবিধা হয়নি। ভিসর ক্লিয়ার আর হেলমেট টা একদম ফিটিং।",
      rating: 8.8,
    },
    {
      id: 4,
      name: "Nishat Jahan",
      role: "Delivery Rider",
      image: hero1,
      review:
        "দিনে ৮-১০ ঘণ্টা বাইক চালাই – এটা মাথায় দিয়ে টেরও পাই না। এক কথায় ‘কমফোর্ট কিং’।",
      rating: 9.2,
    },
    {
      id: 5,
      name: "Mehedi Rahman",
      role: "Tech Vlogger",
      image: hero1,
      review:
        "Vlog করতে গিয়ে যেটা দরকার – Noise reduction আর GoPro-মাউন্ট সাপোর্ট, দুইটাই পেলাম। Highly recommend!",
      rating: 9.1,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="bg-green-500 border-2 border-white shadow-md rounded-2xl mb-6">
          <h1 className="text-center text-3xl py-4 font-medium text-white">
            আমাদের সম্মানিত{" "}
            <span className="text-yellow-300">কাস্টমারদের রিভিউ💥💥</span>
          </h1>
        </div>
        <div>
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
              <SwiperSlide key={review.id} className="h-full ">
                <div className="bg-white p-8 border border-gray-200 shadow rounded-2xl h-full flex flex-col transform transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-start mb-2 gap-2">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-green-500">
                      <Image
                        src={review.image}
                        alt={review.name}
                        layout="fill"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[16px] sm:text-lg text-gray-900">
                        {review.name}
                      </h3>
                      <p className="text-green-600 font-medium text-sm">
                        {review.role}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-[16px] sm:text-base mb-2 flex-grow leading-relaxed">
                    {review.review}
                  </p>
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {Array.from(
                        { length: Math.floor(review.rating / 2) },
                        (_, i) => (
                          <span key={i} className="text-2xl">
                            ★
                          </span>
                        )
                      )}
                      {review.rating % 2 >0 ? (
                        <span className="text-2xl">☆</span>
                      ) : null}
                    </div>
                    <span className="ml-3 text-gray-700 font-semibold">
                      {review.rating}/10
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
