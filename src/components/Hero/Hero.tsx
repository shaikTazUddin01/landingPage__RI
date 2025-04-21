import bg from "@/assets/images/product.jpg";
import Image from "next/image";
import OrderButton from "../template/orderButton";

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-[#000000da] min-h-screen flex justify-center items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 gap-10 justify-center items-center w-full max-w-7xl">
          <div className="text-center space-y-[30px] px-4 ">
            <h1 className="text-center text-green-500 text-[32px] font-bold">
              SKT DW-809 BlackStorm | Modular Lock Masterpiece Helmet
            </h1>
            <p className="text-center text-white text-2xl md:text-2xl tracking-wide font-medium leading-[38px] md:leading-[32px]">
              SKT DW-809 BlackStorm — গ্লসি ব্ল্যাক লুকে প্রিমিয়াম মডুলার
              হেলমেট, যেটিতে আছে SS মডুলার লক, ডুয়াল ভিসর, স্মুথ সুইচ, ও DOT
              সার্টিফিকেশন। থাকছে ঠোঁট ও মাথার জন্য কুল এয়ার ইনলেট, পেছনে হট
              এয়ার আউটলেট, এবং অ্যান্টি-ব্যাকটেরিয়াল সফট প্যাডিং যা সাধারণত
              হাই-এন্ড হেলমেটে ব্যবহৃত হয়। সাথে ফ্রি গিফট: অ্যান্টি-ফগ ভিসর
              পেপার। সেফটি, স্টাইল আর কমফোর্ট — সব একসাথে SKT BlackStorm এ।
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
