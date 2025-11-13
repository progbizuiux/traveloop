
"use client"
import "@/styles/components/bottomCta.scss";

import Image from "next/image";
import Button from "../ui/Button/Button";
const BottomCTA = () => {


    return (
        <section className="bottom-cta">

            {/* <div className="container"> */}
            <div className="cta-image">
                <Image src="/home/bottom-cta.png" alt="cta" fill />
            </div>
            <div className="bottom-cta-content">
                <h2>Your Adventure Awaits.</h2>
                <p>You've seen the destinations and read the reviews. Now it's your turn. Let our team <br />handle all the details—from flights and visas to the perfect itinerary.</p>
                <Button text="Pack Your Bags" />
            </div>
        </section>
    );
};

export default BottomCTA