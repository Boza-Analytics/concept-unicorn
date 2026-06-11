import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const display = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "uLab — Shaping unicorns side by side",
  description:
    "Pojďme společně nakopnout růst vaší firmy v Česku i v zahraničí. Škálujeme B2B/SaaS i ecommerce.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased grain">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
