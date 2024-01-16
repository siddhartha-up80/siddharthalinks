import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siddhartha Singh Links | Links for Siddhartha Singh Inators",
  description:
    "I am Siddhartha Singh from Agra, Uttar Pradesh. A full-stack Next.js web developer, with a strong inclination towards challenging projects, designing and developing web applications. My Primary tech stack includes Next.js and ReactJs",

  keywords: [
    "Instagram",
    "Twitter",
    "Facebook",
    "Siddhartha Singh",
    "sid_up80",
    "siddhartha-up80",
    "siddhartha3093",
    "Inators UI",
    "Inators",
    "inatorsui",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
