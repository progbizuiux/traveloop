"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '@/styles/components/page-banner.scss';

const BannerSimple = ({title="Banner Title",description="Banner Description"}) => {
    const bannerRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate all elements with stagger
            gsap.from([titleRef.current, descriptionRef.current], {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.3
            });

            // Optional: Add background animation
            gsap.from(bannerRef.current, {
                opacity: 0,
                scale: 1.05,
                duration: 1.2,
                ease: "power2.out"
            });

        }, bannerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="container" ref={bannerRef}>
            <div className='page-banner'>


            <div className='page-banner-content'>

                <h1 className='fw-medium' ref={titleRef}>{title}</h1>

                <p ref={descriptionRef}>{description}</p>

            </div>
            </div>

        </section>
    );
};

export default BannerSimple;