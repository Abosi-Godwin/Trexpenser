 "use client";

import Image from "next/image";
import HeroCtas from "./HeroCtas";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden 
      px-4 pt-28 pb-16 md:pt-32 md:pb-28 bg-ui-background">

      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[700px] h-[700px] rounded-full bg-brand-600/10 blur-[140px] 
        pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full 
        bg-brand-300/10 blur-[100px] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e7fb22_1px,transparent_1px),linear-gradient(to_bottom,#e4e7fb22_1px,transparent_1px)] 
        bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse 
        md:flex-row items-center gap-12 md:gap-16">

        {/* Left — Text + CTAs */}
        <div className="flex flex-col gap-8 items-center md:items-start md:w-1/2">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 
              rounded-full bg-brand-100 border border-brand-200
              text-xs font-semibold uppercase tracking-widest text-ui-cta">
              <span className="w-1.5 h-1.5 rounded-full bg-ui-cta animate-pulse" />
              Personal Finance, Simplified
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold 
              leading-tight text-center md:text-left text-ui-text">
              Take Control of{" "}
              <span className="relative inline-block">
                <span className="text-ui-cta">Your Money.</span>
                {/* Underline accent */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-brand-300 
                    rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                />
              </span>
            </h1>

            <p className="text-base md:text-lg text-ui-text/60 text-center 
              md:text-left max-w-md leading-relaxed">
              Track expenses, hit savings goals, and stay on budget — all in
              one place. No spreadsheets. No stress.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full"
          >
            <HeroCtas />
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex items-center gap-6 flex-wrap justify-center 
              md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { value: "500+", label: "Users" },
              { value: "Free", label: "To get started" },
              { value: "AI", label: "Powered insights" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center 
                md:items-start">
                <span className="text-lg font-bold text-ui-cta">
                  {stat.value}
                </span>
                <span className="text-xs text-ui-subtext">{stat.label}</span>
              </div>
            ))}

            <div className="hidden md:block h-8 w-px bg-brand-200 mx-2" />

            <p className="text-xs text-ui-subtext">
              No credit card required
            </p>
          </motion.div>
        </div>

        {/* Right — Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Decorative ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-100 
              blur-2xl scale-110 opacity-60" />

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Floating card decoration */}
              <motion.div
                className="absolute -top-4 -left-6 bg-white border 
                  border-brand-200 rounded-xl px-3 py-2 shadow-md 
                  flex items-center gap-2 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <span className="text-ui-success text-sm font-bold">↑ 24%</span>
                <span className="text-xs text-ui-subtext">Savings</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-6 bg-white border 
                  border-brand-200 rounded-xl px-3 py-2 shadow-md 
                  flex items-center gap-2 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <span className="text-ui-danger text-sm font-bold">↓ 12%</span>
                <span className="text-xs text-ui-subtext">Expenses</span>
              </motion.div>

              <Image
                width={500}
                height={500}
                src="/saving_img.svg"
                className="w-full max-w-sm md:max-w-md h-auto relative z-0"
                alt="Trexpenser — financial management illustration"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;