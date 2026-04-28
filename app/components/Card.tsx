
"use client";

import { motion } from "motion/react";

interface CardItemProps {
  data: {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
  };
}

const CardItem = ({ data }: CardItemProps) => {
  const Icon = data.icon;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex gap-5 p-5 rounded-xl bg-ui-background border 
        border-brand-200 hover:border-brand-300 hover:shadow-md 
        hover:shadow-brand-100 transition-shadow duration-300 group"
    >
      {/* Icon container */}
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 
        group-hover:bg-brand-200 flex items-center justify-center 
        transition-colors duration-300">
        <Icon className="text-xl text-ui-icon" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <p className="font-bold text-ui-text">{data.title}</p>
        <p className="text-sm text-ui-subtext leading-relaxed">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
};

export default CardItem;