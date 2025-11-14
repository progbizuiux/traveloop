'use client';

import { useState, useEffect, useRef } from 'react';
import "@/styles/components/scrollTop.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const isScrollingRef = useRef(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (isScrollingRef.current) return;
    
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrollingRef.current) return; // Prevent double clicks
    
    isScrollingRef.current = true;
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Detect when scrolling finishes
    const checkScrollEnd = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        toggleVisibility();
      }, 150);
    };

    // Listen for scroll end
    window.addEventListener('scroll', checkScrollEnd);
    
    // Cleanup after max expected scroll time
    setTimeout(() => {
      window.removeEventListener('scroll', checkScrollEnd);
      isScrollingRef.current = false;
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="scroll-to-top__button"
          aria-label="Scroll to top"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}