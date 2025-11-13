"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "@/styles/components/timeline.scss";

import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const TimelineComponent = () => {
  const containerRef = useRef(null);
  const timelineProgressRef = useRef(null);
  const startDotRef = useRef(null);
  const endDotRef = useRef(null);
  const itemsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Kill existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger && containerRef.current?.contains(trigger.vars.trigger)) {
          trigger.kill();
        }
      });

      if (!isMobile) {
        // Start dot - simple fade in
        gsap.fromTo(
          startDotRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Timeline progress
        gsap.fromTo(
          timelineProgressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 60%',
              end: 'bottom center',
              scrub: 0.5,
            },
          }
        );

        // End dot - simple fade in
        gsap.fromTo(
          endDotRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Timeline item animations - fade + subtle scale
      itemsRef.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { 
            opacity: 0,
            scale: 0.95
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const timelineData = [
    {
      title: 'Your Entire Trip, In One Place',
      description:
        "Forget the stress and wasted hours of juggling a dozen different websites. We simplify your entire journey by handling everything—from booking the best flight deals and navigating complex visa applications to securing your spot on the ground tours. It's complete, end-to-end travel, all under one roof.",
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=85',
      alt: 'Beautiful landscape at sunset',
    },
    {
      title: 'True Global Expertise',
      description:
        "Our team isn't just booking tickets: they're seasoned travel experts. We have the global knowledge and local insight to help you build the perfect trip, whether it's a popular package to Japan or a custom, multi-country itinerary through Europe. We've been there, and we can guide you.",
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=85',
      alt: 'Travel planning essentials',
    },
    {
      title: '24/7 Dedicated Support',
      description:
        "Travel plans can change, and the unexpected can happen. That's why our friendly support team is available around the clock. Whether you have a last-minute question before you depart or need assistance while you're exploring across the world in real-time, we're always here to help you, 24/7.",
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&auto=format&fit=crop&q=85',
      alt: 'Ancient temple architecture',
    },
  ];

  return (
    <div className='timeline-component section-gap-top-bottom pt-0'>
      <div className="container">
        <div className='header d-flex flex-column align-items-center justify-content-center'>
          <h2 className='text-center'>Why travelloop</h2>
          <p className='text-center'>
            Planning a global trip can be complex. We're more than just a booking site—we're your travel partner
            <br className="d-none d-md-block" />
            from the first idea to your flight home, making every step seamless and stress-free.
          </p>
        </div>

        <div className='section-body-gap'>
          <div ref={containerRef} className='timeline-container'>
            {/* Timeline elements - desktop only */}
            <div className='timeline-line' />
            <div ref={timelineProgressRef} className='timeline-progress' />
            <div ref={startDotRef} className='timeline-dot timeline-dot--start' />
            <div ref={endDotRef} className='timeline-dot timeline-dot--end' />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className='timeline-item'
              >
                <div
                  className={`timeline-item__content ${
                    index % 2 !== 0 ? 'timeline-item__content--reverse' : ''
                  }`}
                >
                  <div className="image-wrapper">
                    <Image
                      width={500}
                      height={500}
                      src={item.image} 
                      alt={item.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="text-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;