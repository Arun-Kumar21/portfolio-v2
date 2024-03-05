import useMouse from "@react-hook/mouse-position";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

interface CustomCursorProps {
  children: React.ReactNode;
}

const CustomCursor = ({ children }: CustomCursorProps) => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(()=>{
    window.addEventListener("mousemove" , (e)=> {
      const {clientX , clientY} = e;
      setPosition({x : clientX , y : clientY})
    })
  },[])

  const ref = React.useRef<any>(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  const [position , setPosition] = useState({x : 0 , y : 0});

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
      left: position.x,
      top : position.y,
      transition: {
        type: "spring",
        mass: 0.1,
        duration: 0.3
      },
    },
    project: {
      opacity: 1,
      color: "#000",
      height: 120,
      width: 120,
      fontSize: "18px",
      left : position.x - 50,
      top : position.y - 50,
      transition : {
        duration : 0.3
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      width: 0,
      fontSize: "16px",
      left: position.x,
      top: position.y,
      transition: {
        duration: 0.3
      },
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
    setCursorVariant("exit");
  }

  return (
    <div className="w-full h-full relative" ref={ref}>
      <motion.div
        variants={variants}
        className="z-50 fixed top-0 left-0 pointer-events-none rounded-full bg-[#81B29A] flex items-center justify-center"
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
