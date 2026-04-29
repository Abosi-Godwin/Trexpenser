import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

const nunito = Nunito({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    variable: "--font-nunito",
    display: "swap"
});

export const metadata: Metadata = {
    title: {
        default: "Trexpenser — Smart Expense & Budget Tracker",
        template: "%s | Trexpenser"
    },
    description:
        "Trexpenser helps you track expenses, manage income, set savings goals, and stay on budget — powered by Gemini AI. Take full control of your finances in one place.",
    keywords: [
        "expense tracker",
        "budget app",
        "personal finance",
        "income tracker",
        "savings goals",
        "AI finance app",
        "money management",
        "financial dashboard",
        "Trexpenser"
    ],
    authors: [{ name: "Abosi Godwin", url: "https://abosi.vercel.app" }],
    creator: "Abosi Godwin",
    metadataBase: new URL("https://trexpenser.vercel.app"),
    alternates: {
        canonical: "/"
    },
    openGraph: {
        title: "Trexpenser — Smart Expense & Budget Tracker",
        description:
            "Track expenses, income, savings, and budgets with AI-powered insights. Built for people who want clarity over their money.",
        url: "https://trexpenser.vercel.app",
        siteName: "Trexpenser",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "TrExpenser — Smart Expense & Budget Tracker"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Trexpenser — Smart Expense & Budget Tracker",
        description:
            "Track expenses, income, savings, and budgets with AI-powered insights.",
        images: ["/og-image.png"],
        creator: "@abosigodwin"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    verification: {
        google: "8wKxFBoxKbThGGJsFMXBoid6P9uWONt00GcfrWKw0BU"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
