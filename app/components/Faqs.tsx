 "use client";
import { useState } from "react";
import { faqs } from "../data/assets";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="py-10 my-10 px-5 bg-temp-color-8 text-white grid
      grid-cols-1 gap-3"
      id="faq"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl text-color-2 font-semibold">
          Got Questions? We&apos;ve Got Answers!
        </h2>
        <p className="text-color-3">
          Find quick answers to help you get started with Trexpenser.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 py-5 md:grid-cols-2">
        {faqs.map((data, index) => (
          <FaqItem
            key={data.question}
            faqIndex={index}
            faqData={data}
            isOpen={openIndex === index}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

interface FaqItemProps {
  faqData: { question: string; answer: string };
  isOpen: boolean;
  onToggle: (index: number) => void;
  faqIndex: number;
}

const FaqItem = ({ faqIndex, faqData, onToggle, isOpen }: FaqItemProps) => {
  return (
    <div className="grid grid-cols-1 rounded-md bg-temp-color-7">
      
       
      <div
        className={`flex gap-3 justify-between items-center p-4 rounded-t-md 
          ${!isOpen && "rounded-b-md"}`}
      >
        <p className="font-bold text-color-3">{faqData.question}</p>
        <button
          onClick={() => onToggle(faqIndex)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
          className="p-2 bg-temp-color-8 text-color-3 rounded-full 
                     text-2xl font-bold w-8 h-8 flex items-center 
                     justify-center flex-shrink-0 hover:opacity-80 
                     transition-opacity cursor-pointer"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>
 
      <div
        className={`bg-temp-color-2 rounded-b-md overflow-hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 p-4" : "max-h-0"}`}
      >
        <p className="text-temp-color-8">{faqData.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;