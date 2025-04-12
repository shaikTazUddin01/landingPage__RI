export default function About() {
  const reasons = [
    "৫ মিনিটেই চুল ন্যাচারাল কালো করে।",
    "চুল এবং দাড়িতে ব্যবহার করতে পারবেন।",
    "স্কিনে বা চামড়ায় কোনো প্রকার দাগ লাগে না।",
    "কলপের মত চামড়ায় কোন আবরণ পড়ে না। তাই অ্যালার্জি সমস্যা হবে না।",
    "কোন প্রকার সাইড ইফেক্ট নেই।",
    "সম্পূর্ণ হালাল এবং হারবাল পণ্য",
    "চুলের খুশকি দূর করে এবং চুলের গোড়া মজবুত করে"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mt-6 sm:mt-10">
      <div className="bg-green-600 text-white rounded-lg py-4 px-4 sm:px-5 text-center text-lg sm:text-xl font-bold border-2 border-white shadow-lg">
        কেন <span className="text-yellow-400">DEXE BLACK HAIR SHAMPOO</span> কিনবেন
      </div>

      <ul className="mt-5 divide-y divide-gray-300 bg-white rounded-lg px-3 sm:px-5">
        {reasons.map((reason, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 py-3 px-2 sm:px-4 text-sm sm:text-base"
          >
            <span className="text-orange-500 text-lg sm:text-xl">🍂</span>
            <span className="text-gray-800">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
