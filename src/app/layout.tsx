import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ademola Samuel | UI/UX Designer & Framer Developer",
  description:
    "Portfolio of Ademola Samuel, a passionate UI/UX Designer and Framer Developer based in Lagos crafting intuitive digital products, websites, and mobile applications.",
  keywords: [
    "Ademola Samuel",
    "UI/UX Designer",
    "Framer Developer",
    "Lagos",
    "Web Design",
    "Portfolio",
  ],
  authors: [{ name: "Ademola Samuel" }],
  openGraph: {
    title: "Ademola Samuel | UI/UX Designer & Framer Developer",
    description:
      "Crafting intuitive digital products, sleek websites, and user-focused interfaces.",
    url: "https://ademolasamuel.com",
    siteName: "Ademola Samuel Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[#111112] text-white antialiased selection:bg-[#2D17BB] selection:text-white">
        {children}
      </body>
    </html>
  );
}
