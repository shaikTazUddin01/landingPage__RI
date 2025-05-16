"use client";

import { useState, FC } from "react";
import bg from "@/assets/images/bg1.jpeg";
import OrderButton from "../template/orderButton";

interface Question {
  question: string;
  answer: string;
}

const questions: Question[] = [
  {
    question: "Blackstrom হেলমেট কতটা সেফটি দেয়?",
    answer:
      "SKT Blackstrom হেলমেটে রয়েছে মাল্টি-লেয়ার প্রোটেকশন, যা দুর্ঘটনার সময় মাথাকে সর্বোচ্চ সুরক্ষা দিতে সক্ষম।",
  },
  {
    question: "এটা কি DOT সার্টিফায়েড?",
    answer: "হ্যাঁ, এটি আন্তর্জাতিক মানের DOT সার্টিফায়েড।",
  },
  {
    question: "এই হেলমেট কি হেডফোন/ব্লুটুথ সাপোর্ট করে?",
    answer: "হ্যাঁ, নির্দিষ্ট কিছু মডেলে ব্লুটুথ স্লট এবং ইয়ারফোন ইনপুট সুবিধা রয়েছে।",
  },
  {
    question: "একটি হেলমেট কতদিন পর্যন্ত ব্যবহারযোগ্য?",
    answer: "ব্যবহার ও রক্ষণাবেক্ষণ অনুযায়ী সাধারণত ৩-৫ বছর পর্যন্ত নিরাপদে ব্যবহার করা যায়।",
  },
  {
    question: "এই হেলমেটের ভিসর কি সানপ্রটেকটিভ?",
    answer: "হ্যাঁ, Blackstrom হেলমেটের ভিসর UV রে প্রতিরোধ করে এবং চোখকে রোদের ক্ষতিকর প্রভাব থেকে সুরক্ষিত রাখে।",
  },
  {
    question: "ভিসর কি পরিবর্তনযোগ্য?",
    answer: "হ্যাঁ, হেলমেটের ভিসর সহজেই খুলে পরিবর্তন বা পরিস্কার করা যায়।",
  },
  {
    question: "হেলমেটের ভেতরের প্যাড কি ওয়াশেবল?",
    answer: "অবশ্যই, ভেতরের প্যাড রিমুভযোগ্য ও ওয়াশেবল — যা দীর্ঘদিন হেলমেটকে ফ্রেশ ও গন্ধমুক্ত রাখতে সাহায্য করে।",
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
      <span className="font-semibold">{question}</span>
      <span className="text-green-600 transform transition-transform duration-300">
        {isOpen ? "▲" : "▼"}
      </span>
    </div>
    <div
      className={`overflow-hidden transition-all duration-500 text-gray-600 text-sm font-semibold ${
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
      className="min-h-screen w-full bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="bg-[#000000b4] min-h-[600px] bg-center">
      <div className=" flex justify-center items-center px-2 md:px-10 lg:px-20 py-10">
        <div className="p-6 sm:p-10 md:p-12 bg-white  w-full rounded-xl shadow-xl max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-10 mt-6 sm:mt-10">
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
            <OrderButton/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default QuestionsAnswer;
