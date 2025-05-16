import bg from "@/assets/images/bg1.jpeg";
import Image from "next/image";
import OrderButton from "../template/orderButton";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-[#000000b4] min-h-screen flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2  md:px-10 gap-10 justify-center items-center w-full max-w-7xl">
          <div className="text-center space-y-[20px] lg:px-4 ">
            <h1 className="text-center text-green-500 text-4xl lg:text-[32px] font-bold lg:leading-[40px] px-2">
              SKT DW-809 BlackStorm Helmet
            </h1>
            <p className="text-center text-white text-2xl md:text-2xl tracking-wide font-medium leading-[38px] md:leading-[32px]">
            SKT DW-809 BlackStorm: গ্লসি ব্ল্যাক লুক, মডুলার লক, ডুয়াল ভিসর, DOT সার্টিফিকেশন, কুল এয়ার ইনলেট, অ্যান্টি-ব্যাকটেরিয়াল প্যাডিং, ও ফ্রি অ্যান্টি-ফগ ভিসর পেপার। সেফটি, স্টাইল, আরাম—সব একসাথে!
            </p>
            <OrderButton />
          </div>
          <div className="flex justify-center">
            <Image
              src={bg}
              alt="product"
              className="min-h-[300px] min-w-[300px] md:h-[550px] md:w-[550px] rounded-2xl border-r-[6px] border-b-[6px] border-green-700 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
