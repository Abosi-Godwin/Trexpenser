// Features.tsx
"use client";

import { motion } from "motion/react";
import { features } from "../data/assets";
import CardItem from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-ui-section py-16 pt-24 px-5 text-ui-text"
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
            text-ui-cta">
            Why Trexpenser
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-ui-text">
            What Makes Trexpenser Unique?
          </h2>
          <p className="text-ui-subtext max-w-xl md:mx-0 mx-auto leading-relaxed">
            Explore how Trexpenser helps you achieve financial freedom with
            these powerful features.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {features.map((data, index) => (
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
              <CardItem data={data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;