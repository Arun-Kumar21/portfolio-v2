"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import Loader from "@/components/loader";
import LandingPage from "@/components/landing-page";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);

    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 3000);
  }, []);

  if (!isMounted) {
    return null;
  }

  const lenis = new Lenis();
  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main>
      <AnimatePresence mode="wait" >
        {isLoading && <Loader />}
      </AnimatePresence>

    <LandingPage />
    </main>
  );
}
