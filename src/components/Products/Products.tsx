"use client";
import Image from "next/image";
import hero1 from "@/assets/images/hero1.jpeg";
import hero2 from "@/assets/images/hero2.jpeg";
import hero3 from "@/assets/images/hero3.jpeg";
import hero4 from "@/assets/images/hero4.jpeg";

const Products = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <Image
              src={hero1}
              alt="Product 1"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src={hero2}
              alt="Product 2" 
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src={hero3}
              alt="Product 3"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <Image
              src={hero4}
              alt="Product 4"
              className="w-full h-[300px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Royal Enfield Helmet</h2>
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled safety and style with our premium Royal Enfield helmets. Engineered with advanced impact protection technology, premium moisture-wicking comfort liner, and multi-point ventilation system. Each helmet undergoes rigorous quality testing and meets international safety standards. Features include UV-resistant shell coating, quick-release chin strap, and anti-fog visor with pin-lock preparation.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center bg-gray-50 px-8 py-4 rounded-lg">
              <span className="text-3xl font-bold text-gray-900">₹3,999</span>
              <p className="text-sm text-gray-600 mt-1">Premium Collection</p>
            </div>
            <div className="text-center bg-gray-50 px-8 py-4 rounded-lg">
              <span className="text-3xl font-bold text-gray-900">4.8/5</span>
              <p className="text-sm text-gray-600 mt-1">Customer Satisfaction</p>
            </div>
            <div className="text-center bg-gray-50 px-8 py-4 rounded-lg">
              <span className="text-3xl font-bold text-gray-900">ISI</span>
              <p className="text-sm text-gray-600 mt-1">Safety Certified</p>
            </div>
            <div className="text-center bg-gray-50 px-8 py-4 rounded-lg">
              <span className="text-3xl font-bold text-gray-900">2 Years</span>
              <p className="text-sm text-gray-600 mt-1">Warranty Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
