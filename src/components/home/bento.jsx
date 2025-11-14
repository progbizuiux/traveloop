"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/components/bento.scss";
import Image from 'next/image';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);


const TravelersAdventuresCreative = () => {
  const bentoSection = useRef(null);
  const bentoItemsRef = useRef([]);

useEffect(() => {
  bentoItemsRef.current = bentoItemsRef.current.filter(Boolean);

  // Initial states
  gsap.set(bentoItemsRef.current, {
    opacity: 0,
    y: 40,
    scale: 0.95
  });

  // Animate on scroll
  const anim = gsap.to(bentoItemsRef.current, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 1,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: bentoSection.current,
      start: "top 85%",        // animation starts when section is 80% from top
      end: "bottom 15%",
      toggleActions: "play reverse play reverse",
    }
  });

  return () => {
    if (anim) anim.kill();
    ScrollTrigger.getAll().forEach(t => t.kill());
  };
}, []);

  return (
    <section ref={bentoSection} className="travelers-section py-5 ">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">See Our Travelers' Adventures</h2>
          <p className="section-subtitle">
            Get inspired by these real, unfiltered moments captured by the Travel Loop community on their journeys
            <br />
            around the world. Your next great memory is waiting to be made.
          </p>
        </div>

        {/* Bento Grid */}
        <div  className="bento-grid section-body-gap">
          <div className="row g-3 g-md-4">
            {/* Column 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                {/* Large tall image - Hiker */}
                <div className="col-12">
                  <div className="bento-item bento-tall" ref={el => bentoItemsRef.current[0] = el}>
                    <Image
                      src="/bento/adventure-videos.png" 
                      alt="Hiker on mountain trail"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                {/* Medium image - Beach traveler */}
                <div className="col-12">
                  <div className="bento-item bento-medium" ref={el => bentoItemsRef.current[1] = el}>
                    <Image
                      src="/bento/three.png" 
                      alt="Traveler at tropical beach"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="row g-3 g-md-4">
                {/* Medium image - Temple */}
                <div className="col-12">
                  <div className="bento-item bento-medium" ref={el => bentoItemsRef.current[2] = el}>
                    <Image 
                      src="/bento/two.png" 
                      alt="Ancient temple"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                {/* Large tall image - Safari */}
                <div className="col-12">
                  <div className="bento-item bento-tall" ref={el => bentoItemsRef.current[3] = el}>
                    <Image 
                      src="/bento/four.png" 
                      alt="Safari adventure"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                {/* Extra large tall image - Mountain stairs */}
                 <div className="col-12">
                  <div className="bento-item bento-medium" ref={el => bentoItemsRef.current[4] = el}>
                    <Image 
                      src="/bento/five.png" 
                      alt="City skyline at sunset"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="bento-item bento-tall" ref={el => bentoItemsRef.current[5] = el}>
                    <Image 
                      src="/bento/six.png" 
                      alt="Mountain hiking trail"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                {/* Medium image - City sunset */}
               
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                {/* Medium image - Couple with map */}
               
                {/* Large tall image - City street */}
                   <div className="col-12">
                  <div className="bento-item bento-medium" ref={el => bentoItemsRef.current[6] = el}>
                    <Image 
                      src="/bento/seven.png" 
                      alt="Couple exploring with map"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="bento-item bento-tall" ref={el => bentoItemsRef.current[7] = el}>
                    <Image 
                      src="/bento/eight.png" 
                      alt="City street exploration"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelersAdventuresCreative;