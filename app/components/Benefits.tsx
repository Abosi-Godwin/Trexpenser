 "use client";

import { motion } from "motion/react";
import { benefits } from "../data/assets";
import CardItem from "./Card";

const Benefits = () => {
  return (
    <section
      id="benefits"
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
            The Trexpenser Advantage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose Trexpenser?
          </h2>
          <p className="text-brand-300 max-w-xl md:mx-0 mx-auto leading-relaxed">
            Designed to make your financial journey smoother and more efficient.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <BenefitCard data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

// Separate card variant for dark background context
interface BenefitCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}

const BenefitCard = ({ data }: BenefitCardProps) => {
  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex gap-5 p-5 rounded-xl bg-brand-800 border 
        border-brand-600 hover:border-brand-500 hover:shadow-lg
        hover:shadow-brand-900/50 transition-shadow duration-300 group"
    >
      {/* Icon container */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-600 
        group-hover:bg-brand-500 flex items-center justify-center 
        transition-colors duration-300">
        <Icon className="text-xl text-white" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <p className="font-bold text-white">{data.title}</p>
        <p className="text-sm text-brand-300 leading-relaxed">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
};