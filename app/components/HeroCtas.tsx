"use client";
import Link from "next/link";

import { motion } from "framer-motion";

//import { slideUpVariant } from "../services/animationVariants";

const HeroCtas = () => {
    return (
        <motion.div
            className="w-full flex flex-col items-center justify-center
                gap-2"
        >
            <a
                href="https://trexpenser-dashboard.vercel.app/dashboard"
                className="font-semibold text-2xl p-4 
            rounded-md text-center font-bold block w-4/5 flex justify-center
            relative bg-light-primaryCTA hover:bg-light-secondaryAccent dark:text-white"
            >
                Get Started
                <span className="absolute flex size-4 right-2 top-2">
                    <span
                        className="absolute inline-flex h-full w-full
                            animate-ping rounded-full bg-white opacity-75"
                    ></span>
                    <span
                        className="relative inline-flex size-4
                            rounded-full bg-white"
                    ></span>
                </span>
            </a>

            <a
                href="/subscribe"
                className="font-sm font-bold text-center
                        uppercase underline 
                        "
            >
                Start free trial
            </a>
        </motion.div>
    );
};

export default HeroCtas;
