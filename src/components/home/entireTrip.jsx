import Image from "next/image";
import Button from "../ui/Button/Button";

const EntireTrip = () => {
    return (
        <section className="bg-white section-gap-top-bottom">

            <div className="container ">

                <div className="row gap-4 gap-md-0">

                    <div className="col-12 col-md-6 col-lg-6 order-1 order-md-1">
                        <h2>Your Entire Trip, Handled</h2>
                        <p>Planning an international trip can be overwhelming—juggling flight schedules, hotels, visas, and tours across endless tabs and spreadsheets. Instead of battling conflicting info, hidden fees, and visa worries, you should be able to plan everything easily in one place.</p>
                        <p>
                            At Travel Loop, we believe your travel planning should be as exciting as the trip itself. We've built our entire service to solve this problem, acting as your single, trusted partner for the entire journey.
                        </p>
                        <p>
                            From finding the best flight deals and handling complex visa applications to uncovering unique tour packages, we’ve streamlined every step of your journey into one seamless experience.
                        </p>
                        <Button text="Browse All Tours"/>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-2 sm-mt-5">
                        <Image src="/home/entire-trip/image.png" className="w-100 img-fluid" alt="entireTrip" width={500} height={500} />

                    </div>

                </div>

            </div>

        </section>
    );
};
export default EntireTrip;
