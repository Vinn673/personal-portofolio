import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Background } from "@/components/Background";
import { RevealOnScroll, SignalCardEffect } from "./interactive";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
  
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Marvin Adriano Rusdianto | AI & Frontend Development",
    template: "%s | Marvin Adriano Rusdianto",
  },
  description:
    "Portfolio of Marvin Adriano Rusdianto, a Computer Science student exploring AI Engineering and frontend development.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Background />
        <div className="site-shell">
          <RevealOnScroll />
          <SignalCardEffect />
          <Navbar />
          <main id="top">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
