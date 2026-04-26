"use client";

import { useState } from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaInstagram,
    FaEnvelope
} from "react-icons/fa6";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" }
];

const socialLinks = [
    { icon: <FaFacebookF />, label: "Facebook", href: "#" },
    { icon: <FaXTwitter />, label: "X (Twitter)", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    {
        icon: <FaEnvelope />,
        label: "Email",
        href: "mailto:hello@trexpenser.com"
    }
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [sendTips, setSendTips] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, sendTips })
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error);
            return;
        }

        setSubscribed(true);
        setEmail("");
    };

    return (
        <footer className="bg-light-primaryCTA px-5 py-10 text-white">
            <div className="mx-auto max-w-6xl space-y-10">
                {/* Brand blurb */}
                <div>
                    <h2 className="text-2xl font-bold">
                        TrExpenser: Smart Savings for a Brighter Future.
                    </h2>
                    <p className="mt-3 text-white/80">
                        Manage your expenses, set savings goals, and track your
                        financial progress with ease.
                    </p>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="mb-3 text-xl font-bold">
                        Join Our Newsletter
                    </h3>

                    {subscribed ? (
                        <p className="font-semibold text-green-300">
                            ✓ You&apos;re subscribed! Welcome aboard.
                        </p>
                    ) : (
                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto]">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email address..."
                                    aria-label="Email address"
                                    className="rounded-md p-3 text-gray-900 outline-none 
                             placeholder:text-gray-400 focus:ring-2 
                             focus:ring-white/50"
                                />

                                {error && (
                                    <p className="text-red-400 text-sm">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-md bg-light-iconColor px-6 py-3 
                             font-extrabold uppercase tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60"
                                >
                                    {loading ? "Subscribing..." : "Subscribe"}
                                </button>
                            </div>

                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    checked={sendTips}
                                    onChange={e =>
                                        setSendTips(e.target.checked)
                                    }
                                    className="mt-1 accent-light-iconColor"
                                />
                                <span className="text-sm text-white/80">
                                    Also send me motivations, tips and tricks on
                                    how to save and manage my budgets.
                                </span>
                            </label>
                        </form>
                    )}
                </div>

                {/* Quick Links + Social */}
                <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                    {/* Quick Links */}
                    <nav aria-label="Footer navigation">
                        <h3 className="mb-3 text-xl font-bold text-color-3">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-white/80 transition-colors hover:text-white"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social */}
                    <div>
                        <h3 className="mb-3 text-xl font-bold">Follow Us</h3>
                        <ul className="flex gap-3 md:flex-col">
                            {socialLinks.map(({ icon, label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        aria-label={label}
                                        target={
                                            href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            href.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className="flex h-9 w-9 items-center justify-center 
                               rounded bg-color-4 text-white/90 
                               transition-opacity hover:opacity-80"
                                    >
                                        {icon}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <p className="border-t border-white/20 pt-5 text-center text-sm text-white/70">
                    &copy; {currentYear} TrExpenser. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
