"use client";
import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import "@/styles/components/package-card.scss";
import Link from "next/link";

const PackageCard = ({image, price, title, description  }) => {
  const cardActionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const svgRef = useRef(null);
  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    // Animate text sliding slightly
    tl.to(textRef.current, {
      x: 3,
      fontWeight: 600,

      duration: 0.1,
      ease: "power2.out"
    });

    // Animate button - fill background
    tl.to(buttonRef.current, {
      backgroundColor: "#D97706",
      duration: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    // Animate SVG arrow - change color, move, and rotate to point right
    tl.to(svgRef.current.querySelectorAll('path'), {
      stroke: "#FFFFFF",
      duration: 0.1,
      ease: "power2.out"
    }, "-=0.2");

    tl.to(svgRef.current, {
      x: 0,
      rotation: 40,
      duration: 0.1,
      ease: "power2.out"
    }, "-=0.2");
  };
  const handleMouseLeave = () => {
    const tl = gsap.timeline();

    // Reset text
    tl.to(textRef.current, {
      x: 0,
      fontWeight: 400,
      duration: 0.1,
      ease: "power2.in"
    });

    // Reset button
    tl.to(buttonRef.current, {
      backgroundColor: "transparent",
      duration: 0.1,
      ease: "power2.in"
    }, "-=0.2");

    // Reset SVG arrow
    tl.to(svgRef.current.querySelectorAll('path'), {
      stroke: "#D97706",
      duration: 0.1,
      ease: "power2.in"
    }, "-=0.2");

    tl.to(svgRef.current, {
      x: 0,
      rotation: 0,
      duration: 0.1,
      ease: "power2.in"
    }, "-=0.2");
  };

  return (
    <div className="card package-card">
      <div className="card-img-wrapper">
        <Image
          src={image}
          className="card-img-top"
          alt="European Capitals"
          width={500}
          height={500}
          quality={90}
        />
        <span className="badge">899 AED / Person </span>
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">
          {description}
        </p>

        <div
          className="card-action"
          ref={cardActionRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p ref={textRef}>View Europe Tours</p>

          <Link href="/packages/details">
          <button className="action-btn" ref={buttonRef}>
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <g transform="rotate(-10 13.5 13.5)">
                <path
                  d="M18.2969 10.9849L8.33179 16.2061"
                  stroke="#D97706"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5575 17.5414C16.5575 17.5414 19.2774 11.9591 18.6659 10.792C18.0544 9.62483 11.9165 8.68359 11.9165 8.68359"
                  stroke="#D97706"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>

          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageCard; <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
  <path d="M18.2969 10.9849L8.33179 16.2061" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16.5575 17.5414C16.5575 17.5414 19.2774 11.9591 18.6659 10.792C18.0544 9.62483 11.9165 8.68359 11.9165 8.68359" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
</svg>