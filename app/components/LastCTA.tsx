"use client";

import {
    FaCheck,
    FaShieldHalved,
    FaScaleBalanced,
    FaGlobe
} from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const checklistItems = [
    "Automate your savings effortlessly.",
    "Track expenses with ease.",
    "Achieve financial goals faster.",
    "Secure & private — your data is safe."
];

const trustItems = [
    { icon: FaCheck, label: "Secured Payment" },
    { icon: FaShieldHalved, label: "SSL Certified" },
    { icon: FaScaleBalanced, label: "GDPR Compliant" },
    { icon: FaGlobe, label: "Trusted by 50,000+ users" }
];

const LastCTA = () => {
    return (
        <section className="py-16 px-5 bg-ui-background text-ui-text">
            <div className="max-w-6xl mx-auto flex flex-col gap-16">
                {/* Header */}
                <motion.div
                    className="text-center flex flex-col gap-3"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <span
                        className="text-xs font-semibold uppercase tracking-widest 
            text-ui-cta"
                    >
                        Get Started Today
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-ui-text">
                        Your Financial Freedom Starts Today!
                    </h2>
                    <p className="text-ui-subtext">
                        Join <strong className="text-ui-text">50,000+</strong>{" "}
                        users transforming their savings with Trexpenser.
                    </p>
                </motion.div>

                {/* Main content row */}
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Image */}
                    <motion.div
                        className="md:w-1/3 flex justify-center"
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="relative">
                            <div
                                className="absolute inset-0 bg-brand-100 rounded-full 
                blur-3xl opacity-60 scale-110"
                            />
                            <Image
                                src="/savings_done.svg"
                                alt="Savings achieved with Trexpenser"
                                width={280}
                                height={280}
                                className="relative w-full max-w-xs h-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Checklist */}
                    <motion.div
                        className="md:w-1/3 flex flex-col gap-5"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <ul className="flex flex-col gap-3">
                            {checklistItems.map(item => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-sm 
                  font-semibold text-ui-text"
                                >
                                    <span
                                        className="flex-shrink-0 w-6 h-6 rounded-full 
                    bg-brand-100 flex items-center justify-center"
                                    >
                                        <FaCheck className="text-ui-cta text-xs" />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-ui-subtext leading-relaxed">
                            Trexpenser empowers you to take control of your
                            finances with smart tools designed for success. Save
                            smarter, not harder.
                        </p>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        className="md:w-1/3 flex flex-col items-center gap-4"
                        initial={{ opacity: 0, x: 32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            className="w-full"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20
                            }}
                        >
                            <Link
                                href="https://trexpenser-dashboard.vercel.app/signup"
                                className="relative overflow-hidden flex items-center 
                  justify-center w-full bg-ui-cta hover:bg-ui-ctaHover 
                  text-white font-bold px-8 py-4 rounded-full 
                  transition-colors duration-300 group"
                            >
                                <span
                                    className="absolute inset-0 translate-x-[-100%] 
                  group-hover:translate-x-[100%] transition-transform 
                  duration-700 bg-gradient-to-r from-transparent 
                  via-white/20 to-transparent skew-x-12"
                                />
                                Get Started for Free
                            </Link>
                        </motion.div>

                        <Link
                            href="https://trexpenser-dashboard.vercel.app/login"
                            className="text-sm font-bold text-ui-cta uppercase underline 
                underline-offset-4 hover:text-ui-ctaHover transition-colors"
                        >
                            Already have an account? Sign in
                        </Link>

                        <p className="text-xs text-center text-ui-subtext">
                            🔥 Over{" "}
                            <strong className="text-ui-text">2,000</strong> new
                            users joined last week alone.
                        </p>
                    </motion.div>
                </div>

                {/* Trust bar */}
                <motion.div
                    className="rounded-2xl bg-ui-section border border-brand-200 
            p-8 flex flex-col md:flex-row justify-between gap-8 items-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Stat + trust icons */}
                    <div className="flex flex-col gap-5">
                        <p
                            className="font-extrabold text-ui-text text-xl text-center 
              md:text-left"
                        >
                            80% of users achieve their savings goals within 3
                            months.
                        </p>
                        <ul className="grid grid-cols-2 gap-3">
                            {trustItems.map(({ icon: Icon, label }) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-2 text-sm 
                  font-semibold text-ui-text"
                                >
                                    <Icon className="text-ui-cta flex-shrink-0" />
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quote */}
                    <div
                        className="md:w-2/5 bg-ui-background rounded-xl p-6 
            border border-brand-200 flex flex-col gap-3"
                    >
                        <span className="text-brand-300 text-2xl">&ldquo;</span>
                        <p className="italic text-ui-text text-sm leading-relaxed text-center">
                            Trexpenser is a game-changer for anyone serious
                            about saving!
                        </p>
                        <span className="text-brand-300 text-2xl self-end">
                            &rdquo;
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LastCTA;
