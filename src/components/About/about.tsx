import { IoIosSettings } from "react-icons/io";

export default function About() {
  const reasons = [
    "গ্লসি ব্ল্যাক প্রিমিয়াম লুক, একদম নজরকাড়া।",
    "ডুয়াল ভিসর সিস্টেম – রোদ হোক বা রাত, সব সময় প্রস্তুত।",
    "মডুলার লক সিস্টেম – খুলুন বা বন্ধ রাখুন, যেভাবে আরাম লাগে।",
    "SS ফিটিং ক্লিপ ও লক – এক্সট্রা নিরাপত্তা এবং টেকসই।",
    "ঠোঁট ও মাথায় কুল এয়ার ঢোকার সিস্টেম, আর পেছনে হট এয়ার বের হয়।",
    "হাই-কোয়ালিটি অ্যান্টি-ব্যাকটেরিয়াল প্যাডিং – ১০ হাজার টাকার হেলমেটেও এমনটা মেলে না!",
    "DOT সার্টিফায়েড – ইন্টারন্যাশনাল সেফটি গ্যারান্টি।",
    "রাইডে স্টাইল, সেফটি আর কমফোর্ট—সব একসাথে!",
    "ফ্রি গিফট – অ্যান্টি-ফগ ভিসর পেপার!"
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 lg:px-0 py-6 sm:py-10 mt-6 sm:mt-10">
      <div className="bg-green-600 text-white rounded-lg py-4 px-4 sm:px-5 text-center text-lg sm:text-xl font-bold border-2 border-white shadow-lg">
        কেন <span className="text-yellow-400">SKT DW-809 BlackStorm </span>হেলমেট কিনবেন
      </div>

      <ul className="mt-5 divide-y divide-gray-300 bg-white rounded-lg px-3 sm:px-5">
        {reasons.map((reason, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 py-3 px-2 sm:px-4 text-sm sm:text-base"
          >
            <span className="text-orange-500 text-lg sm:text-xl">
              <span className="hover:rotate-180 duration-300 transition-all hover:cursor-pointer">
              <IoIosSettings/>
              </span>
              </span>
            <span className="text-gray-800 font-semibold">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
