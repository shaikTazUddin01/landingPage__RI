"use client";

import { useState, FC } from "react";
import bg from "@/assets/images/product.jpg";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "DEXE শ্যাম্পু কত দিনে রেজাল্ট দেয়?",
    answer:
      "মাত্র ৫ মিনিটেই চুল কালো করে তোলে। একাধিক ব্যবহারে স্থায়ী কালো ভাব আসে।",
  },
  {
    question: "পুরুষ এবং মহিলা উভয়েই কি এটি ব্যবহার করতে পারবেন?",
    answer: "হ্যাঁ, এই শ্যাম্পু পুরুষ ও মহিলা উভয়ের জন্যই উপযোগী।",
  },
  {
    question: "এটা কি সাইড ইফেক্ট ফ্রি?",
    answer: "জি, এটি সম্পূর্ণ হারবাল এবং কোনো সাইড ইফেক্ট নেই।",
  },
  {
    question: "চুল পড়া বন্ধ হবে কি?",
    answer: "হ্যাঁ, এটি চুলের গোড়া শক্ত করে এবং চুল পড়া বন্ধ করে।",
  },
  {
    question: "এক প্যাকেট কতদিন ব্যবহার করা যাবে?",
    answer: "ব্যবহার ভেদে এক প্যাকেট ৩-৫ বার পর্যন্ত ব্যবহার করা যায়।",
  },
];

interface QuestionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const QuestionItem: FC<QuestionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div
    className="border-b border-gray-300 py-3 cursor-pointer transition-all"
    onClick={onClick}
  >
    <div className="flex justify-between items-center text-lg font-medium text-gray-800">
      <span>{question}</span>
      <span className="text-green-600 transform transition-transform duration-300">
        {isOpen ? "▲" : "▼"}
      </span>
    </div>
    <div
      className={`overflow-hidden transition-all duration-500 text-gray-600 text-sm ${
        isOpen ? "max-h-40 mt-2" : "max-h-0"
      }`}
    >
      {isOpen && <p>{answer}</p>}
    </div>
  </div>
);

const QuestionsAnswer: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="min-h-[600px] w-full bg-fixed bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-[#000000ea] min-h-screen flex justify-center items-center px-5 md:px-10 lg:px-20 py-10">
        <div className="max-w-6xl p-6 sm:p-10 md:p-12 bg-white mx-auto w-full rounded-xl shadow-xl">
          <div className="bg-green-500 border-2 border-white shadow-md rounded-2xl mb-6">
            <h1 className="text-center text-2xl sm:text-3xl py-4 font-medium text-white">
              কিছু প্রশ্ন ও <span className="text-yellow-300">উত্তর :</span>
            </h1>
          </div>

          <div className="space-y-3">
            {questions.map((item, index) => (
              <QuestionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => toggle(index)}
              />
            ))}
          </div>

          <div className="text-center w-full pt-10">
            <button
              className="bg-linear-to-tr from-yellow-500 to-green-500 px-5 py-2 rounded-xl text-white text-lg font-semibold"
            >
              অর্ডার করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsAnswer;
