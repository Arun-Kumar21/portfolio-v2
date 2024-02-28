"use client"

import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react';
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(()=> {
    setIsMounted(true)
  },[]);

  if (!isMounted) {
    return null;
  };

  const lenis = new Lenis()
  function raf(time:any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

requestAnimationFrame(raf)

  return (
    <div>
      Hello world
    </div>
  );
}
