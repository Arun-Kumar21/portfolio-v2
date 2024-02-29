"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Button from "../button";
import Link from "next/link";
import Image from "next/image";
import { letterAnimation, opacity, textUp } from "./anim";

const LandingPage = () => {
  const getChars = (word: string) => {
    let chars: ReactNode[] = [];
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={[i * 0.08, (word.length - i) * 0.03]}
          key={char + i}
          variants={letterAnimation}
          initial="initial"
          animate="animate"
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-2 lg:px-16 md:px-4 relative">
      <div className="h-3/4 w-full md:px-8 flex flex-col-reverse sm:flex-row justify-center">
        <div className="w-full h-full flex flex-col justify-end ">
          <motion.h1
            className="text-[3rem] md:text-[3.5rem] lg:text-[8vw] font-medium overflow-hidden leading-[1] my-2 flex whitespace-break-spaces"
            initial="initial"
            animate="animate"
          >
            {getChars("Arun Kumar")}
          </motion.h1>
          <motion.p
            className="text-[1.5rem] md:text-[1.5rem] lg:text-[3rem] overflow-hidden"
            variants={textUp}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Passionate learner : Full-Stack Developer venturing into the realm
            of AI
          </motion.p>
        </div>

        <div className="w-full h-full relative p-8 flex items-end justify-end sm:justify-center">
          <motion.div
            className="w-[225px] h-[350px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px]"
            variants={textUp}
            initial="initial"
            animate="animate"
          >
            <Image
              src={"/images/pic.jpeg"}
              alt=""
              width={400}
              height={500}
              quality={100}
              className="object-cover relative w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="h-[25%] flex items-center justify-between md:px-8 w-full relative overflow-hidden"
        variants={opacity}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <p className="text-sm sm:text-[1.25rem] font-medium">
          Passionate about crafting unforgettable experiences.
        </p>
        <Link href={"/"}>
          <Button>
            <p className="font-medium text-xl">Contact</p>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default LandingPage;
