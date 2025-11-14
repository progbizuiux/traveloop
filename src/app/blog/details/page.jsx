"use client";
import { useRef } from "react";
import BlogCard from "@/components/common/blog-card";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import "@/styles/components/blog-details.scss"

import Image from "next/image";
import Link from "next/link";

const Page = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    return (
        <div className="blog_details_page ">

            <div className="container ">
                <div className="section-gap-top-bottom">


                        <Link href={"/blog"}>
                    <div className="back-button mt-5">

                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <p>Back</p>

                   

                    </div>
                        </Link>

                    <div className="blog_meta">

                        <p>
                            12-12-2025 <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#6C6C6C" />
                            </svg> 2 min read <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                                <circle cx="2" cy="2" r="2" fill="#6C6C6C" />
                            </svg> By Amna
                        </p>

                    </div>

                    <div className="blog_title">

                        <h1>
                            First-Timer's Guide to Japan: Tokyo,<br /> Kyoto & Osaka
                        </h1>

                    </div>

                    <div className="blog_content">

                        <p>
                            From the neon lights of Shinjuku to the serene temples of Kyoto, here's the perfect 10-day itinerary for your first trip to Japan.
                        </p>

                    </div>

                    <div className="blog_banner">

                        <Image src="/blog-details/blog-banner.png" alt="blog" width={500} height={500} />

                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="blog_content">
                            <h4 ref={section1Ref}>Before You Go: Essential Tips</h4>
                            <p>
                                A little preparation goes a long way in Japan. We recommend booking three key things before you land: a Japan Rail (JR) Pass (activate the 7-day pass on Day 4 for this itinerary, it's a huge money-saver), a Pocket Wi-Fi or eSIM (don't rely on public Wi-Fi, Google Maps is your best friend), and having cash (many smaller shops, temples, and restaurants are still cash-only).                            </p>


                            <h5 ref={section2Ref}>
                                Part 1: Tokyo (Days 1-4) - The Future
                            </h5>

                            <p>
                                Welcome to the largest metropolis on Earth! Tokyo is a dazzling blend of futuristic technology, ancient traditions, and boundless energy.
                            </p>

                            <h6>
                                Day 1: Arrival & Shinjuku Skyscraper Shock
                            </h6>

                            <p>
                                Arrive at Narita (NRT) or Haneda (HND) airport. Take the Narita Express or Limousine Bus to your hotel. Settle in and dive right into the deep end: Shinjuku. Head to the Tokyo Metropolitan Government Building (it's free!) for staggering views of the city. For dinner, explore the tiny, atmospheric alleys of Omoide Yokocho ("Piss Alley") for some incredible yakitori (grilled chicken skewers).
                            </p>


                            <h6>
                                Day 2: Tradition in Asakusa & Ueno
                            </h6>

                            <p>
                                Start your day with a dose of culture at Senso-ji Temple, Tokyo's oldest temple, in Asakusa. Walk down the bustling Nakamise-dori street leading to it for souvenirs and snacks. In the afternoon, head to Ueno Park, home to several world-class museums (like the Tokyo National Museum) and the Ueno Zoo. Finish your day exploring the lively Ameya Yokocho Market for everything from fresh fish to discount sneakers.
                            </p>

                            <h6>
                                Day 3: Pop Culture & City Views
                            </h6>

                            <p>
                                Morning: Walk across the iconic Shibuya Scramble Crossing, the world's busiest intersection. Say hello to the Hachiko statue. Afterward, explore the trendy, youthful fashion streets of Harajuku (Takeshita Street) and see the calm oasis of Meiji Jingu Shrine right next to it.
                                Evening: Head to Roppongi Hills for a more upscale vibe, great art at the Mori Art Museum, and arguably the best panoramic view of the city (including Tokyo Tower) from the "Tokyo City View" observation deck.
                            </p>

                            <div className="blog_image">
                                <Image src="/blog-details/detials-image.png" alt="blog" width={500} height={500} />
                            </div>

                            <h5 className="mt-5" ref={section3Ref}>
                                Part 2: Kyoto (Days 4-7) - The Heart
                            </h5>

                            <p>
                                Today, activate your 7-day JR Pass and take the Shinkansen (bullet train) to Kyoto. In under 3 hours, you'll be transported from a futuristic metropolis to the ancient, cultural capital of Japan.
                            </p>

                            <h6>
                                Day 1: Arrival & Shinjuku Skyscraper Shock
                            </h6>

                            <p>
                                Arrive at Narita (NRT) or Haneda (HND) airport. Take the Narita Express or Limousine Bus to your hotel. Settle in and dive right into the deep end: Shinjuku. Head to the Tokyo Metropolitan Government Building (it's free!) for staggering views of the city. For dinner, explore the tiny, atmospheric alleys of Omoide Yokocho ("Piss Alley") for some incredible yakitori (grilled chicken skewers).
                            </p>

                            <h6>
                                Day 2: Tradition in Asakusa & Ueno
                            </h6>

                            <p>
                                Start your day with a dose of culture at Senso-ji Temple, Tokyo's oldest temple, in Asakusa. Walk down the bustling Nakamise-dori street leading to it for souvenirs and snacks. In the afternoon, head to Ueno Park, home to several world-class museums (like the Tokyo National Museum) and the Ueno Zoo. Finish your day exploring the lively Ameya Yokocho Market for everything from fresh fish to discount sneakers.
                            </p>

                            <h6>
                                Day 3: Pop Culture & City Views
                            </h6>

                            <p>
                                Morning: Walk across the iconic Shibuya Scramble Crossing, the world's busiest intersection. Say hello to the Hachiko statue. Afterward, explore the trendy, youthful fashion streets of Harajuku (Takeshita Street) and see the calm oasis of Meiji Jingu Shrine right next to it.
                                Evening: Head to Roppongi Hills for a more upscale vibe, great art at the Mori Art Museum, and arguably the best panoramic view of the city (including Tokyo Tower) from the "Tokyo City View" observation deck.
                            </p>

                            {/* <h5 ref={section4Ref}>
                                Part 3: Osaka (Days 7-10) - The Future
                            </h5>
                            <p>Content for Osaka section...</p> */}
                        </div>
                    </div>

<div class="col-lg-4 col-md-4 col-sm-12 d-none d-sm-block">
                        <div className="blog_table_content">

                            <h6>
                                Table Of Contents
                            </h6>
                            <ul>
                                <li onClick={() => scrollToSection(section1Ref)} style={{ cursor: 'pointer' }}>
                                    Before you go : essential tips
                                </li>
                                <li onClick={() => scrollToSection(section2Ref)} style={{ cursor: 'pointer' }}>
                                    Part 1: Tokyo (Days 1-4) - The Future
                                </li>
                                <li onClick={() => scrollToSection(section3Ref)} style={{ cursor: 'pointer' }}>
                                    Part 2: Kyoto (Days 4-7) - The Heart
                                </li>
                                <li onClick={() => scrollToSection(section4Ref)} style={{ cursor: 'pointer' }}>
                                    Part 3: Osaka (Days 7-10) - The Future
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <section className="continue_reading section-gap-top-bottom">

                <div className="container">

                    <h2>
                        Continue Reading                </h2>


                    <div className="blog-card-wrapper">
                        <BlogCard image={"/blog/blog-1.png"} description={"From the neon lights of Shinjuku to the serene temples of Kyoto, here's the perfect 10-day itinerary for your first trip to Japan."} title={"First-Timer's Guide to Japan: Tokyo, Kyoto & Osaka"} />
                        <BlogCard image={"/blog/blog-2.png"} description={" Beyond Khachapuri. We explore the 10 must-try dishes and the best local restaurants in Georgia's vibrant capital."} title={"A Food-Lover's Guide to Tbilisi, Georgia"} />


                    </div>
                </div>

            </section>

            <BottomCTA />
            <Footer />



        </div>
    );
};

export default Page;