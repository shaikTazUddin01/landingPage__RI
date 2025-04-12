import bg from "@/assets/images/product.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-[#000000ea] min-h-screen flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 gap-10 justify-center items-center w-full max-w-7xl">
          <div className="text-center space-y-[30px] px-4 ">
            <h1 className="text-center text-green-500 text-4xl font-bold">
              DEXE BLACK HAIR SHAMPOO
            </h1>
            <p className="text-center text-white text-2xl md:text-3xl tracking-wide font-medium leading-[38px] md:leading-[42px]">
              পাকা চুল কলপ করার দিন শেষ একবার শ্যাম্পু ব্যবহার করলেই চুল হবে ন্যাচারাল কালো মাত্র ৫ মিনিটেই
            </p>
            <button
              className="bg-gradient-to-tr from-yellow-500 to-green-500 px-5 py-2 rounded-xl text-white text-lg font-semibold"
            >
              অর্ডার করুন
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src={bg}
              alt="product"
              className="h-[300px] w-[300px] md:h-[550px] md:w-[550px] rounded-2xl border-r-[6px] border-b-[6px] border-green-700 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
