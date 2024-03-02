"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef } from "react";

interface SectionProps {
  theme: string;
  toggleTheme: (value: string) => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, theme, toggleTheme }) => {
  const container = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 20%", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      toggleTheme(theme);
    }
  });

  return (
    <section ref={container} className="h-full w-full">
      {children}
    </section>
  );
};

export default Section;
