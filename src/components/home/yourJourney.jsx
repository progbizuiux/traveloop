import Image from "next/image";
import Button from "../ui/Button/Button";

const YourJourney = () => {
    return (
        <section className="your-journey section-gap-top-bottom">


            <div className="container">
                <div className="heading w-100 d-flex justify-content-center align-items-center flex-column">
                    <h2>
                        Your Journey, Simplified.
                    </h2>
                    <p className="text-center">
                        We offer an integrated suite of travel solutions to make planning effortless.
                    </p>
                </div>
                <div className="journey-cards-wrapper  section-body-gap">
                    <div className="journey-card">
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

                    <div className="journey-card">
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

                    <div className="journey-card">
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
                            <h5>Cuarted Tour Packages</h5>
                            <p>hassle-free, reliable, global reach</p>
                        </div>
                    </div>

                    <div className="journey-card">
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
                            <p>Instant tickets to Dubai’s must-see spots</p>
                        </div>
                    </div>

                    <div className="journey-card">
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

                    <div className="journey-card">
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


                </div>
            </div>
        </section>
    );
}

export default YourJourney;