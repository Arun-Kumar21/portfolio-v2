"use client";

import React, { useEffect, useState } from "react";
import localfont from "next/font/local";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { opacity, slideUp } from "./anim";
const font = localfont({
  src: "../../app/fonts/CabinetGrotesk-Variable.woff2",
});

const Loader = () => {
  const greetings = [
    "Namaste",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hello",
    "Guten Tag",
    "Konnichiwa",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === greetings.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1200 : 300
    );
  }, [index]);

  return (
    <motion.main
      className={styles.main}
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <div className={font.className}>
        <motion.h1
          variants={opacity}
          initial="initial"
          animate="animate"
          className={styles.greetings}
        >
          {greetings[index]}
        </motion.h1>
      </div>
    </motion.main>
  );
};

export default Loader;
