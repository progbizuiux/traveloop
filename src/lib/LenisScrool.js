// components/SmoothScroll.js

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const LenisSmoothScroll = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness (0.1 for smooth scrolling, adjust as necessary)
      smoothMobile: true, // Enable smooth scrolling on mobile
    });

    function animate(time) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }

    // Start the animation frame loop
    requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main data-scroll-container>
      {children} {/* Render child components inside the smooth scroll container */}
    </main>
  );
};

export default LenisSmoothScroll;
