"use client";

import { useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
 
import Logo from "./Logo";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-16 bg-brand-700 fixed z-40 text-white 
        top-0 left-0 flex items-center justify-between py-2 px-5
        border-b border-brand-600">

        <Logo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-semibold text-white/80 
                  hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://trexpenser-dashboard.vercel.app/login"
            className="text-sm font-bold text-white/80 hover:text-white 
              transition-colors"
          >
            Sign In
          </a>
          <a
            href="https://trexpenser-dashboard.vercel.app/signup"
            className="text-sm font-bold bg-white text-brand-700 
              px-4 py-2 rounded-full hover:bg-brand-100 
              transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden text-2xl text-white p-1"
        >
          {menuOpen ? <FaXmark /> : <FaBarsStaggered />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-30 bg-brand-800 
              border-b border-brand-600 px-5 py-6 flex flex-col gap-5
              md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold text-white/80 
                      hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-2 border-t 
              border-brand-600">
              <a
                href="https://trexpenser-dashboard.vercel.app/login"
                onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-bold text-white/80 
                  hover:text-white transition-colors py-2"
              >
                Sign In
              </a>
              <a
                href="https://trexpenser-dashboard.vercel.app/signup"
                onClick={() => setMenuOpen(false)}
                className="text-center text-sm font-bold bg-white 
                  text-brand-700 px-4 py-3 rounded-full 
                  hover:bg-brand-100 transition-colors duration-200"
              >
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;