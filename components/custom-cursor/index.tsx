import useMouse from "@react-hook/mouse-position";
import React, { useState } from "react";

import { motion } from "framer-motion";

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor = ({ children }: CustomCursorProps) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const position = {
    x: 0,
    y: 0,
  };

  if (mouse.x !== null) {
    //@ts-ignore
    position.x = mouse.clientX;
  }

  if (mouse.y !== null) {
    //@ts-ignore
    position.y = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 0,
      height: 0,
      width: 0,
      fontSize: "16px",
      x: position.x,
      y: position.y,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      color: "#000",
      height: 120,
      width: 120,
      fontSize: "18px",
      x: position.x - 150,
      y: position.y - 75,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event: any) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className="w-full h-full relative" ref={ref}>
      <motion.div
        variants={variants}
        className="z-50 absolute pointer-events-none rounded-full bg-[#81B29A] flex items-center justify-center"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="pointer-events-none text-white">{cursorText}</span>
      </motion.div>
      <div
        className="project"
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomCursor;
