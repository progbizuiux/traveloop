import Image from "next/image";
import Banner from "@/components/common/banner";
import "@/styles/layout/about.scss";
import TimelineComponent from "@/components/common/timeLine";
import CTA from "@/components/home/cta";
import TravelersAdventures from "@/components/home/bento";
import Journeys from "@/components/home/journeys";
import { TestimonialsCarousel } from "@/components/common/testimonials";
import LatestTravel from "@/components/common/latestTravel";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import Button from "@/components/ui/Button/Button";

// import Image from "next/image";
const About = () => {
    return (

        <div className="about-page">
            <Banner title="Our Story: From Frustration to Adventure" description="We didn't just build a travel company. We built the solution we always wished we had." />

            <section className="image-section section-gap-top-bottom  pb-0">

                <div className="container">

                    <div className="row">
                        <div className="col-md-6 col-lg-6 ">
                            <div className="image-container-1">
                                <Image src="/about/image-1.png" alt="about" width={500} height={500} />
                            </div>

                        </div>

                        <div className="col-md-6 col-lg-6 mt-5">
                            <div className="image-container-2">
                                <Image src="/about/image-2.png" alt="about" width={500} height={500} />
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="section-gap-top-bottom">

            <div className="container">

                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <h2>Founded by Travelers, For Travelers</h2>

                        <p>
                            "As passionate travelers, we founded Travel Loop because we were tired of the stress and chaos of modern trip planning—juggling 15 tabs and confusing visa forms. We knew there had to be a better way. Our mission is simple: to be your single, trusted travel ally. We combine our global expertise with deep, local knowledge to handle all the hard parts, from flights and visas to curated tours. We make your journey seamless so you can focus on what matters: the adventure."
                        </p>
                    <div className="mb-5 mb-sm-0">
    <Button text="Browse All Tours"/>
</div>
                    </div>

                    <div className="col-md-6 col-lg-6 ">
                        <Image src="/about/about-image.png" alt="about" width={500} height={500}  className="w-100 object-fit-cover  img-fluid" />
                        
                    </div>
                </div>

            </div>

            </section>

            <TimelineComponent  />
            {/* <CTA/> */}
            <TravelersAdventures/>
            {/* <Journeys/>
            <TestimonialsCarousel/> */}
            <LatestTravel/>
            <BottomCTA/>

            <Footer/>

        </div>

    );
};
export default About;