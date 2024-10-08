import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Random Activity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Playwrite+DE+Grund:wght@100..400&display=swap" />
      </head>
      <body className="bg-[#F0F0F0] text-black">{children}</body>
    </html>
  );
}
