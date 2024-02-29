import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "@/components/magnetic-button";

interface ButtonProps {
  children: React.ReactElement;
}

export default function Button({ children }: ButtonProps) {

  const circle = useRef(null);
  let timeline = useRef<any>(null);
  let timeoutId: any = null;


  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={"py-2 px-8 sm:py-[15px] sm:px-[60px] rounded-[3em] border cursor-pointer flex items-center justify-center relative  group"}
        style={{ overflow: "hidden" }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
      >
        <div className="group-hover:text-white z-10 transition-colors duration-500 ease-in-out delay-200 relative">
          {children}
        </div>
        <div
          ref={circle}
          style={{ backgroundColor : "#455CE9"}}
          className="w-[100%] h-[150%] rounded-[50%] top-[100%] absolute"
        ></div>
      </div>
    </Magnetic>
  );
}
