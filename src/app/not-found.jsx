"use client";

import { Navbar } from '@/components/Navbar/Navbar';
import Button from '@/components/ui/Button/Button';
import '@/styles/components/error.scss'
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import SplitType from 'split-type'; 

export default function NotFound() {
  const headingRef = useRef(null);

  useEffect(() => {
  const el = headingRef.current;
  if (!el) return;

  const text = el.textContent;
  const wrapped = text
    .split('')
    .map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
    .join('');

  el.innerHTML = wrapped;

  const chars = el.querySelectorAll('.char');

  gsap.from(chars, {
    opacity: 0,
    x: 60,
    duration: 1,
    stagger: 0.03,
    ease: "power3.out",
  });

  return () => {
    el.innerHTML = text; // revert back on cleanup
  };
}, []);


  return (
    <>
    <Navbar is404={true} />
      <section className="not-found">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <div className="content">
                {/* Hide heading until it's animated */}
                <h1 ref={headingRef}>
                 Oops! 
                </h1>

                <div className='error-status'>
                    <Image className='bg' src={'/404/404.png'} width={400} height={400} alt='404 status' />
                    {/* <Image className='overlay' src={'/icons/404-face.png'} width={400} height={400} alt='404 status' /> */}
                </div>
                <p>The page you're looking for isn’t available right now. Let’s <br /> get you back on track.</p>

                <Link href={'/'}>
                  <Button
                   text='Back to Home'
                  >
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
