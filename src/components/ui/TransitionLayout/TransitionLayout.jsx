'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

const TransitionLayout = ({ children }) => {
  const container = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    // Page enter animation
    gsap.fromTo(
      container.current,
      { 
        scale: 0.9, 
        opacity: 0, 
        y: 50, // Slight upward movement
        duration: 0.7, 
        ease: "power3.out" 
      },
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transformOrigin: 'center center',
        duration: 0.7, 
        ease: "power3.out" 
      }
    );
  }, [pathname]);

  return (
    <div ref={container}>
      {children}
    </div>
  );
};

export default TransitionLayout;
