"use client";

import Image from "next/image";
import { motion } from "motion/react";

const FirstCta = () => {
  return (
    <section className="py-20 px-5 bg-ui-background">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 
        gap-10 items-center">

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-100 rounded-full 
              blur-3xl opacity-60 scale-110" />
            <Image
              src="/saving_img1.svg"
              alt="Start saving with Trexpenser"
              width={500}
              height={300}
              className="relative w-full max-w-md h-auto"
            />
          </div>
        </motion.div>

        {/* Text + CTA */}
        <motion.div
          className="flex flex-col gap-6 items-start"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-xs font-semibold uppercase tracking-widest 
            text-ui-cta">
            Built for real people
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-ui-text 
            leading-tight">
            Simplify Your{" "}
            <span className="text-ui-cta">Savings Journey</span> Today.
          </h2>

          <p className="text-ui-subtext leading-relaxed">
            Trexpenser empowers you to track expenses, manage savings, and
            achieve financial freedom with ease. Our intuitive platform
            provides personalized insights and automated tools, ensuring your
            money works for you.
          </p>

          {/* Feature ticks */}
          <ul className="flex flex-col gap-2">
            {[
              "Track income and expenses in real time",
              "Set and monitor savings goals",
              "AI-powered financial insights",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm 
                text-ui-text">
                <span className="w-5 h-5 rounded-full bg-brand-100 
                  flex items-center justify-center text-ui-cta 
                  font-bold text-xs flex-shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <motion.a
            href="https://trexpenser-dashboard.vercel.app/signup"
            className="relative overflow-hidden flex items-center gap-2
              bg-ui-cta hover:bg-ui-ctaHover text-white font-bold 
              uppercase px-8 py-4 rounded-full transition-colors 
              duration-300 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span className="absolute inset-0 translate-x-[-100%] 
              group-hover:translate-x-[100%] transition-transform duration-700 
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              skew-x-12" />
            Start Saving Free Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstCta;