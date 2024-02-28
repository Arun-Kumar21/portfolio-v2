import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const font = localFont({src : "/fonts/GeneralSans-Variable.woff2"})

export const metadata: Metadata = {
  title: "Arun Kumar | Creative Designer & Full Stack Developer",
  description: "Portfolio website for showcasing my projects and creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
