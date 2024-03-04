import React, {ReactNode} from "react";
import {motion} from "framer-motion";
import {letterAnimation} from "@/components/landing-page/anim";

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
        whileInView="animate"
        viewport={{once : true}}
      >
        {char}
      </motion.span>
    );
  });

  return chars;
};

export default getChars;