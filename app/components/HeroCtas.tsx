 "use client";

import { motion } from "motion/react";

const HeroCtas = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">

      {/* Primary CTA */}
      <motion.a
        href="https://trexpenser-dashboard.vercel.app/signup"
        className="relative w-full sm:w-auto flex items-center justify-center 
          gap-2 bg-ui-cta hover:bg-ui-ctaHover text-white font-bold text-base
          px-8 py-4 rounded-full overflow-hidden group transition-colors 
          duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {/* Shimmer */}
        <span className="absolute inset-0 translate-x-[-100%] 
          group-hover:translate-x-[100%] transition-transform duration-700 
          bg-gradient-to-r from-transparent via-white/20 to-transparent 
          skew-x-12" />

        Get Started Free

        {/* Ping dot */}
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping 
            rounded-full bg-white opacity-60" />
          <span className="relative inline-flex size-2.5 rounded-full bg-white" />
        </span>
      </motion.a>

      {/* Secondary CTA */}
      <motion.a
        href="https://trexpenser-dashboard.vercel.app/login"
        className="w-full sm:w-auto flex items-center justify-center
          border border-brand-200 hover:border-ui-cta
          text-ui-text hover:text-ui-cta
          font-semibold text-base px-8 py-4 rounded-full
          transition-colors duration-300"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        Sign In
      </motion.a>
    </div>
  );
};

export default HeroCtas;