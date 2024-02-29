"use client";

import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

import { motion } from "framer-motion";

const font = localFont({ src: "../app/fonts/CabinetGrotesk-Variable.woff2" });

const Navbar = () => {
  const enterIn = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 4,
      },
    },
  };

  return (
    <motion.nav
      className="w-full h-16 flex items-center justify-between p-2 sm:p-4 selection:bg-[#e78b71]"
      variants={enterIn}
      initial="initial"
      animate="animate"
    >
      <div className="text-sm sm:text-xl">Portfolio V2</div>
      <div className={font.className}>
        <Link href="/" className="sm:text-2xl font-bold text-lg">
          AK
        </Link>
      </div>
      <div className="text-sm flex flex-col items-center justify-center">
        Open for <span className="hidden sm:flex">— collaborations</span>
        <span className="flex sm:hidden">— Work</span>
      </div>
    </motion.nav>
  );
};

export default Navbar;
