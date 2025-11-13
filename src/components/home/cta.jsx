"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from "../ui/Button/Button";
import "@/styles/components/cta.scss";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const CTA = () => {
    const ctaRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const leftDecorationRef = useRef(null);
    const rightDecorationRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate heading
            gsap.fromTo(
                headingRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );

            // Animate paragraph
            gsap.fromTo(
                paragraphRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );

            // Animate button
            gsap.fromTo(
                buttonRef.current,
                {
                    opacity: 0,
                    y: 30
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: 0.3,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 75%',
                        end: 'bottom 25%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );

            // Animate left decorative images with bounce
            if (leftDecorationRef.current) {
                const leftImages = leftDecorationRef.current.querySelectorAll('.decoration-img');
                gsap.fromTo(
                    leftImages,
                    {
                        opacity: 0,
                        scale: 0.5,
                        y: 30
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'back.out(1.4)',
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: 'top 70%',
                            end: 'bottom 25%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );
            }

            // Animate right decorative images with bounce
            if (rightDecorationRef.current) {
                const rightImages = rightDecorationRef.current.querySelectorAll('.decoration-img');
                gsap.fromTo(
                    rightImages,
                    {
                        opacity: 0,
                        scale: 0.5,
                        y: 30
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.15,
                        ease: 'back.out(1.4)',
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: 'top 70%',
                            end: 'bottom 25%',
                            toggleActions: 'play none none reverse',
                        }
                    }
                );
            }

        }, ctaRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="cta" ref={ctaRef}>
            <div className="container">
                <div className="cta-img">
                    <Image src="/home/CTA.png" className="w-100 img-fluid" alt="cta" width={500} height={500} />

                    {/* Left side decorative images */}
                    <div className="cta-decoration-left" ref={leftDecorationRef}>
                        <div className="decoration-img decoration-img-1">
                            <Image src="/cta/image-1.png" alt="" width={150} height={120} />
                        </div>
                        <div className="decoration-img decoration-img-2">
                            <Image src="/cta/image-2.png" alt="" width={220} height={180} />
                        </div>
                        <div className="decoration-img decoration-img-3">
                            <Image src="/cta/image-3.png" alt="" width={120} height={150} />
                        </div>
                    </div>

                    {/* Right side decorative images */}
                    <div className="cta-decoration-right" ref={rightDecorationRef}>
                        <div className="decoration-img decoration-img-1">
                            <Image src="/cta/image-4.png" alt="" width={180} height={140} />
                        </div>
                        <div className="decoration-img decoration-img-2">
                            <Image src="/cta/image-5.png" alt="" width={250} height={200} />
                        </div>
                        <div className="decoration-img decoration-img-3">
                            <Image src="/cta/image-6.png" alt="" width={200} height={180} />
                        </div>
                    </div>

                    <div className="cta-content">
                        <h2 ref={headingRef}>
                            Your Adventure Awaits.
                        </h2>
                        <p ref={paragraphRef}>
                            You&apos;ve seen the destinations and read the reviews. Now it&apos;s your turn. Let our team handle all the details—from flights and visas to the perfect itinerary.
                        </p>
                        <div className="cta-btn" ref={buttonRef}>
                            <Button text="Pack Your Bags" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;