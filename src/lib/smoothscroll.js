'use client'; // Ensure this is a Client Component

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "locomotive-scroll/dist/locomotive-scroll.css";
export default function SmoothScroll({ children, lerp = 0.05, smooth = true, smoothMobile = true, resetNativeScroll = false }) {
  const scrollContainerRef = useRef(null);
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth,
      smoothMobile,
      resetNativeScroll,
      lerp, // Use the lerp prop
      tablet: {
        smooth: true,
        breakpoint: 768,
      },
    });

    // Cleanup on unmount
    return () => {
      scroll.destroy();
    };
  }, [lerp, smooth, smoothMobile, resetNativeScroll]);


  return (
    <div data-scroll-container ref={scrollContainerRef} className='smooth'>
      {children}
    </div>
  );
}
