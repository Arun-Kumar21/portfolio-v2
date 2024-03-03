"use client"
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

import { motion } from "framer-motion";

const font = localFont({ src: "../app/fonts/CabinetGrotesk-Variable.woff2" });

const Navbar = () => {
  const opacity = {
    initial: {
      y: -200,
      opacity: 0,
    },
    enter : {
      y : 0,
      opacity: 1,
      transition : {
        duration : 1,
        ease : [0.76, 0, 0.24, 1],
        delay : 4
      }
    },
  };

  return (
    <nav className="w-full h-16 flex bg-[#E2E2DD] items-center justify-between p-2 sm:p-4 selection:bg-[#e78b71] overflow-hidden">
      <motion.div
        variants={opacity}
        initial="initial"
        animate="enter"
        className="text-sm sm:text-xl"
      >
        Portfolio V2
      </motion.div>
      <motion.div
        className={font.className}
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        <Link href="/" className="sm:text-2xl font-bold text-lg">
          AK
        </Link>
      </motion.div>
      <motion.div
        className="text-sm flex flex-col items-center justify-center"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        Open for <span className="hidden sm:flex">— collaborations</span>
        <span className="flex sm:hidden">— Work</span>
      </motion.div>
    </nav>
  );
};

export default Navbar;
