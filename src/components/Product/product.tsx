import Image from "next/image";
import bg from "@/assets/images/bg1.jpeg";

const product = () => {
  return (
    <div className="max-w-6xl mx-auto w-full">
      <div className=" flex justify-center items-center">
        <Image src={bg} alt="product Image" className="w-full rounded-2xl h-[600px] lg:h-[1000px] px-2 lg:px-0" />
      </div>
    </div>
  );
};

export default product;
