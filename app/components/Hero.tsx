"use client"

import Image from "next/image";
import HeroCtas from "./HeroCtas";
import { motion } from "motion/react";
//import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-28 pb-16 md:pt-32 md:pb-28">
            {/* Background glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-light-primaryCTA/10 blur-[120px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
                {/* Left — Text + CTAs */}
                <div className="flex flex-col gap-8 items-center md:items-start md:w-1/2">
                    <motion.div
                        className="flex flex-col gap-4"
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-light-primaryCTA">
                            Personal Finance, Simplified
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left text-light-text">
                            Take Control of{" "}
                            <span className="text-light-primaryCTA">
                                Your Money.
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-light-text/60 text-center md:text-left max-w-md leading-relaxed">
                            Track expenses, hit savings goals, and stay on
                            budget — all in one place. No spreadsheets. No
                            stress.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.2,
                            ease: "easeOut"
                        }}
                        className="w-full"
                    >
                        <HeroCtas />
                    </motion.div>

                    {/* Social proof line */}
                    <motion.p
                        className="text-xs text-light-text/40 text-center md:text-left"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        ⭐ Trusted by 500+ users · No credit card required
                    </motion.p>
                </div>

                {/* Right — Image */}
                <motion.div
                    className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Image
                            width={500}
                            height={500}
                            src="/saving_img.svg"
                            className="w-full max-w-sm md:max-w-md h-auto"
                            alt="TrExpenser — financial management illustration"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
