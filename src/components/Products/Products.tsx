"use client";
import Image from "next/image";
import hero1 from "@/assets/images/hero1.jpeg";
import hero2 from "@/assets/images/hero2.jpeg";
import hero3 from "@/assets/images/hero3.jpeg";
import hero4 from "@/assets/images/hero4.jpeg";

const ProductSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={hero1}
              alt="Product 1"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={hero2}
              alt="Product 2"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={hero3}
              alt="Product 3"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src={hero4}
              alt="Product 4"
              className="w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Royal Enfield Helmet
          </h2>
          <p className="text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed text-lg">
            Experience unparalleled safety and style with our premium Royal
            Enfield helmets. Engineered with advanced impact protection
            technology, premium moisture-wicking comfort liner, and multi-point
            ventilation system. Each helmet undergoes rigorous quality testing
            and meets international safety standards. Features include
            UV-resistant shell coating, quick-release chin strap, and anti-fog
            visor with pin-lock preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="text-center bg-white px-10 py-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl font-bold text-gray-900 block">
                ₹3,999
              </span>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Premium Collection
              </p>
            </div>
            <div className="text-center bg-white px-10 py-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl font-bold text-gray-900 block">
                4.8/5
              </span>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Customer Satisfaction
              </p>
            </div>
            <div className="text-center bg-white px-10 py-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl font-bold text-gray-900 block">
                ISI
              </span>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Safety Certified
              </p>
            </div>
            <div className="text-center bg-white px-10 py-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <span className="text-4xl font-bold text-gray-900 block">
                2 Years
              </span>
              <p className="text-sm text-gray-600 mt-2 font-medium">
                Warranty Coverage
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
