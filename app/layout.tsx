import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ToastProvider from "@/provider/toast-provider";

const font = localFont({ src: "/fonts/GeneralSans-Variable.woff2" });

export const metadata: Metadata = {
  title: "Arun Kumar | Full Stack Developer",
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
        <ToastProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
