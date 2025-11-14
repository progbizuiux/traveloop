"use client"
import { useRef } from "react"
import { gsap } from "gsap"
import "@/styles/basic/_button.scss"

const Button = ({ text = "Button", onClick,margin=true }) => {
  const buttonRef = useRef(null)
  const arrowRef = useRef(null)

  const handleMouseEnter = () => {
    // Animate arrow in
    gsap.to(arrowRef.current, {
      opacity: 1,
      width: 19,
      marginLeft: 10,
      duration: 0.2,
      ease: "power2.out"
    })
    
    // Scale button slightly
    gsap.to(buttonRef.current, {
      scale: 1.02,
      duration: 0.2,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = () => {
    // Animate arrow out
    gsap.to(arrowRef.current, {
      opacity: 0,
      width: 0,
      marginLeft: 0,
      duration: 0.2,
      ease: "power2.in"
    })
    
    // Scale button back
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    })
  }

  return (
    <button 
      ref={buttonRef}
      className={margin ? "custom-button mt-5" : "custom-button"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <span className="button-content">
        <span className="button-text">{text}</span>
        <svg 
          ref={arrowRef}
          className="button-arrow" 
          xmlns="http://www.w3.org/2000/svg" 
          width="19" 
          height="19" 
          viewBox="0 0 19 19" 
          fill="none"
        >
          <path d="M2.375 6.04497C3.65809 3.40389 6.36642 1.58333 9.49995 1.58333C13.8722 1.58333 17.4166 5.12774 17.4166 9.5C17.4166 13.8722 13.8722 17.4167 9.49995 17.4167C6.36642 17.4167 3.65809 15.5961 2.375 12.955" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.70825 6.33333C8.70825 6.33333 11.8749 8.66558 11.8749 9.5C11.8749 10.3345 8.70825 12.6667 8.70825 12.6667M11.4791 9.5H1.58325" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

export default Button