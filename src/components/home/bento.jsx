"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "@/styles/components/bento.scss";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const TravelersAdventuresCreative = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bentoGridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      headerTl
        .from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })
        .from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        }, "-=0.5");

      // Simple fade-in for all images
      const allImages = bentoGridRef.current.querySelectorAll('.bento-img');
      
      allImages.forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // Add hover animations
      const bentoItems = bentoGridRef.current.querySelectorAll('.bento-item');
      bentoItems.forEach((item) => {
        const img = item.querySelector('.bento-img');
        
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.03,
            duration: 0.4,
            ease: "power2.out"
          });
          
          gsap.to(img, {
            scale: 1.1,
            duration: 0.4,
            ease: "power2.out"
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
          
          gsap.to(img, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="travelers-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" ref={headerRef}>
          <h2 className="section-title mb-3" ref={titleRef}>See Our Travelers' Adventures</h2>
          <p className="section-subtitle" ref={subtitleRef}>
            Get inspired by these real, unfiltered moments captured by the Travel Loop community on their journeys
            <br />
            around the world. Your next great memory is waiting to be made.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid section-body-gap" ref={bentoGridRef}>
          <div className="row g-3 g-md-4">
            {/* Column 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                {/* Large tall image - Hiker */}
                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <img 
                      src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" 
                      alt="Hiker on mountain trail"
                      className="bento-img"
                    />
                  </div>
                </div>
                {/* Medium image - Beach traveler */}
                <div className="col-12">
                  <div className="bento-item bento-medium">
                    <img 
                      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80" 
                      alt="Traveler at tropical beach"
                      className="bento-img"
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
                  <div className="bento-item bento-medium">
                    <img 
                      src="https://images.unsplash.com/photo-1563967243-1bbb8e7e6e00?w=800&q=80" 
                      alt="Ancient temple"
                      className="bento-img"
                    />
                  </div>
                </div>
                {/* Large tall image - Safari */}
                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <img 
                      src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" 
                      alt="Safari adventure"
                      className="bento-img"
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
                  <div className="bento-item bento-medium">
                    <img 
                      src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80" 
                      alt="City skyline at sunset"
                      className="bento-img"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <img 
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" 
                      alt="Mountain hiking trail"
                      className="bento-img"
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
                  <div className="bento-item bento-tall">
                    <img 
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80" 
                      alt="City street exploration"
                      className="bento-img"
                    />
                  </div>
                </div>
                 <div className="col-12">
                  <div className="bento-item bento-medium">
                    <img 
                      src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80" 
                      alt="Couple exploring with map"
                      className="bento-img"
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