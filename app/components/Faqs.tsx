 "use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "../data/assets";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="py-16 pt-24 px-5 bg-brand-700"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-3 text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest 
            text-brand-300">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Got Questions? We&apos;ve Got Answers!
          </h2>
          <p className="text-brand-300 max-w-xl md:mx-0 mx-auto leading-relaxed">
            Find quick answers to help you get started with Trexpenser.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((data, index) => (
            <motion.div
              key={data.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <FaqItem
                faqIndex={index}
                faqData={data}
                isOpen={openIndex === index}
                onToggle={handleToggle}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <div className={`rounded-xl border transition-colors duration-300
      ${isOpen
        ? "bg-brand-600 border-brand-500"
        : "bg-brand-800 border-brand-600 hover:border-brand-500"
      }`}
    >
      {/* Question row */}
      <button
        onClick={() => onToggle(faqIndex)}
        aria-expanded={isOpen}
        className="w-full flex gap-3 justify-between items-center 
          p-4 text-left"
      >
        <p className="font-bold text-white text-sm leading-relaxed">
          {faqData.question}
        </p>
        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-700 
          flex items-center justify-center text-white font-bold text-lg
          transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-sm text-brand-200 leading-relaxed">
              {faqData.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faqs;