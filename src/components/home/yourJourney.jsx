"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const YourJourney = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Filter out null refs
        cardsRef.current = cardsRef.current.filter(Boolean);

        const timer = setTimeout(() => {
          

            // Set initial state for cards
            gsap.set(cardsRef.current, {
                opacity: 0,
                y: 40,
                scale: 0.95
            });

            // Animate cards with stagger
            gsap.to(cardsRef.current, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                }
            });

            // Animate button
            gsap.fromTo(
                buttonRef.current,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                }
            );
        }, 500);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="your-journey section-gap-top-bottom" ref={sectionRef}>
            <div className="container">
                <div 
                    className="heading w-100 d-flex justify-content-center align-items-center flex-column"
               
                >
                    <h2>
                        Your Journey, Simplified.
                    </h2>
                    <p className="text-center">
                        We offer an integrated suite of travel solutions to make planning effortless.
                    </p>
                </div>
                <div className="journey-cards-wrapper section-body-gap">
                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[0] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/flights.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>Flights Worldwide</h5>
                            <p>Global sector, group fares, best deals</p>
                        </div>
                    </div>

                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[1] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/global-visa.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>Global Visa Services</h5>
                            <p>hassle-free, reliable, global reach</p>
                        </div>
                    </div>

                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[2] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/tour-package.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>Curated Tour Packages</h5>
                            <p>hassle-free, reliable, global reach</p>
                        </div>
                    </div>

                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[3] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/uae-attraction.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>UAE Attractions</h5>
                            <p>Instant tickets to Dubai's must-see spots</p>
                        </div>
                    </div>

                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[4] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/travel-insurence.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>Travel Insurance</h5>
                            <p>protection for unexpected travel hiccups</p>
                        </div>
                    </div>

                    <div 
                        className="journey-card"
                        ref={(el) => (cardsRef.current[5] = el)}
                    >
                        <div className="card-image">
                            <Image
                                src="/home/your-journery/visa-change.png"
                                className="w-100 img-fluid"
                                alt="entireTrip"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="card-content">
                            <h5>UAE Visa Change</h5>
                            <p>seamless changes without leaving the UAE</p>
                        </div>
                    </div>  

                    <div 
                        className="d-flex justify-content-center w-100"
                        ref={buttonRef}
                    >
                        <Button text="Start Planning" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YourJourney;