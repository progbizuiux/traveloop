import Button from "../ui/Button/Button";
import Image from "next/image";
import "@/styles/components/latestTravel.scss"
const LatestTravel = () => {
    return (
        <section className="latest-travel section-gap-top-bottom">
            <div className="container">

                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h2>
                        Latest Travel Inspiration & Tips
                    </h2>
                    <p>
                    Stay updated with our expert guides, destination spotlights, and exclusive travel advice.
                </p>
                <Button text="View All Articles" />
                </div>
                <div className="card-wrapper section-body-gap">
                    <div className="main-card">
                        <div className="image-card">
                            <Image src="/home/image-1.png" alt="" width={500} height={500} />
                        </div>
                        <div className="card-content">
                            <h4>5 Reasons the Maldives Should Be Your Next Escape</h4>
                            <p>Discover why this tropical paradise is perfect for honeymoons, family trips, or solo adventures.</p>
                            <p className="read-more">
                                Read More
                            </p>
                        </div>
                    </div>
                    <div className="main-card">
                        <div className="image-card">
                            <Image src="/savings.png" alt="" width={500} height={500} />
                        </div>
                        <div className="card-content">
                            <h4>Maximizing Savings: Tips for Booking Group Fares</h4>
                            <p>Discover why this tropical paradise is perfect for honeymoons, family trips, or solo adventures.</p>
                            <p className="read-more">
                                Read More
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestTravel;