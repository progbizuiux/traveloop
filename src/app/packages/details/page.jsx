
import BottomCTA from "@/components/common/bottom-cta"
import Footer from "@/components/common/footer"
import PackageCard from "@/components/common/PackageCard"
import "@/styles/layout/package-detail.scss"

import Image from "next/image"
const Page = () => {

    return (
        <div className="package_details_page ">

            <section className="header_section  ">

                <div className="container">


                    <div className="row">

                        <div className="col-lg-6 col-md-8 col-sm-12 ">

                            <div className="position-sticky z-n1 sticky-md-top" style={{ top: '120px' }}>


                                <h2>
                                    Wonders Of Georgia
                                </h2>

                                <p>
                                    Where ancient history, legendary hospitality, and breathtaking mountain landscapes meet. Explore historic Old Tbilisi, the stunning Ananuri Castle, and the breathtaking mountain views of Kazbegi.
                                </p>


                                <div className="header-icons">

                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clipPath="url(#clip0_274_242)">
                                                    <path d="M12.016 19.052L12.7707 19.652C14.404 20.9507 16.2827 22.892 17.0173 25.3333H6.98533C7.72267 22.896 9.60933 20.9573 11.248 19.66L12.016 19.052ZM32 16C32 20.4187 28.4187 24 24 24C19.5813 24 16 20.4187 16 16C16 11.5813 19.5813 8.00001 24 8.00001C28.4187 8.00001 32 11.5813 32 16ZM28.276 18.3907L25.3333 15.448V10.6667H22.6667V16.552L26.3907 20.276L28.276 18.3907ZM19.8667 25.832C19.9533 26.3547 20 26.896 20 27.4547V28H4V27.4547C4 22.9413 7.04133 19.588 9.59333 17.5693L11.576 16.0013L9.59333 14.4333C7.04133 12.4147 4 9.06001 4 4.54668C4 4.24534 4.24533 4.00134 4.54533 4.00134H19.4547C19.756 4.00134 20 4.24534 20 4.54668C20 5.10534 19.952 5.64534 19.8667 6.16934C21.124 5.63868 22.504 5.34401 23.9493 5.33734C23.964 5.07334 24 4.81868 24 4.54668C24 2.04001 21.9613 0.00134343 19.4547 0.00134343H4.54533C2.03867 1.00933e-05 0 2.04001 0 4.54668C0 9.55201 2.59333 13.372 5.31467 16.0013C2.59333 18.6293 0 22.448 0 27.4547V32H24V27.4547C24 27.1827 23.964 26.9293 23.9493 26.664C22.5027 26.6573 21.1227 26.3627 19.8667 25.832Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_242">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Duration</span>
                                        </div>

                                        <p>
                                            8 Days
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clipPath="url(#clip0_274_242)">
                                                    <path d="M12.016 19.052L12.7707 19.652C14.404 20.9507 16.2827 22.892 17.0173 25.3333H6.98533C7.72267 22.896 9.60933 20.9573 11.248 19.66L12.016 19.052ZM32 16C32 20.4187 28.4187 24 24 24C19.5813 24 16 20.4187 16 16C16 11.5813 19.5813 8.00001 24 8.00001C28.4187 8.00001 32 11.5813 32 16ZM28.276 18.3907L25.3333 15.448V10.6667H22.6667V16.552L26.3907 20.276L28.276 18.3907ZM19.8667 25.832C19.9533 26.3547 20 26.896 20 27.4547V28H4V27.4547C4 22.9413 7.04133 19.588 9.59333 17.5693L11.576 16.0013L9.59333 14.4333C7.04133 12.4147 4 9.06001 4 4.54668C4 4.24534 4.24533 4.00134 4.54533 4.00134H19.4547C19.756 4.00134 20 4.24534 20 4.54668C20 5.10534 19.952 5.64534 19.8667 6.16934C21.124 5.63868 22.504 5.34401 23.9493 5.33734C23.964 5.07334 24 4.81868 24 4.54668C24 2.04001 21.9613 0.00134343 19.4547 0.00134343H4.54533C2.03867 1.00933e-05 0 2.04001 0 4.54668C0 9.55201 2.59333 13.372 5.31467 16.0013C2.59333 18.6293 0 22.448 0 27.4547V32H24V27.4547C24 27.1827 23.964 26.9293 23.9493 26.664C22.5027 26.6573 21.1227 26.3627 19.8667 25.832Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_242">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Duration</span>
                                        </div>

                                        <p>
                                            8 Days
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clipPath="url(#clip0_274_242)">
                                                    <path d="M12.016 19.052L12.7707 19.652C14.404 20.9507 16.2827 22.892 17.0173 25.3333H6.98533C7.72267 22.896 9.60933 20.9573 11.248 19.66L12.016 19.052ZM32 16C32 20.4187 28.4187 24 24 24C19.5813 24 16 20.4187 16 16C16 11.5813 19.5813 8.00001 24 8.00001C28.4187 8.00001 32 11.5813 32 16ZM28.276 18.3907L25.3333 15.448V10.6667H22.6667V16.552L26.3907 20.276L28.276 18.3907ZM19.8667 25.832C19.9533 26.3547 20 26.896 20 27.4547V28H4V27.4547C4 22.9413 7.04133 19.588 9.59333 17.5693L11.576 16.0013L9.59333 14.4333C7.04133 12.4147 4 9.06001 4 4.54668C4 4.24534 4.24533 4.00134 4.54533 4.00134H19.4547C19.756 4.00134 20 4.24534 20 4.54668C20 5.10534 19.952 5.64534 19.8667 6.16934C21.124 5.63868 22.504 5.34401 23.9493 5.33734C23.964 5.07334 24 4.81868 24 4.54668C24 2.04001 21.9613 0.00134343 19.4547 0.00134343H4.54533C2.03867 1.00933e-05 0 2.04001 0 4.54668C0 9.55201 2.59333 13.372 5.31467 16.0013C2.59333 18.6293 0 22.448 0 27.4547V32H24V27.4547C24 27.1827 23.964 26.9293 23.9493 26.664C22.5027 26.6573 21.1227 26.3627 19.8667 25.832Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_242">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Duration</span>
                                        </div>

                                        <p>
                                            8 Days
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clipPath="url(#clip0_274_242)">
                                                    <path d="M12.016 19.052L12.7707 19.652C14.404 20.9507 16.2827 22.892 17.0173 25.3333H6.98533C7.72267 22.896 9.60933 20.9573 11.248 19.66L12.016 19.052ZM32 16C32 20.4187 28.4187 24 24 24C19.5813 24 16 20.4187 16 16C16 11.5813 19.5813 8.00001 24 8.00001C28.4187 8.00001 32 11.5813 32 16ZM28.276 18.3907L25.3333 15.448V10.6667H22.6667V16.552L26.3907 20.276L28.276 18.3907ZM19.8667 25.832C19.9533 26.3547 20 26.896 20 27.4547V28H4V27.4547C4 22.9413 7.04133 19.588 9.59333 17.5693L11.576 16.0013L9.59333 14.4333C7.04133 12.4147 4 9.06001 4 4.54668C4 4.24534 4.24533 4.00134 4.54533 4.00134H19.4547C19.756 4.00134 20 4.24534 20 4.54668C20 5.10534 19.952 5.64534 19.8667 6.16934C21.124 5.63868 22.504 5.34401 23.9493 5.33734C23.964 5.07334 24 4.81868 24 4.54668C24 2.04001 21.9613 0.00134343 19.4547 0.00134343H4.54533C2.03867 1.00933e-05 0 2.04001 0 4.54668C0 9.55201 2.59333 13.372 5.31467 16.0013C2.59333 18.6293 0 22.448 0 27.4547V32H24V27.4547C24 27.1827 23.964 26.9293 23.9493 26.664C22.5027 26.6573 21.1227 26.3627 19.8667 25.832Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_242">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Duration</span>
                                        </div>

                                        <p>
                                            8 Days
                                        </p>


                                    </div>



                                </div>

                                <div className="header-action mt-5">
                                    <button>
                                        Inquire Now
                                    </button>

                                </div>

                                <div className="header-card mt-5">

                                    <h6>
                                        What’s Included
                                    </h6>


                                    <ul>
                                        <li>
                                            Accommodation in well-rated hotels (twin/double sharing)
                                        </li>
                                        <li>Daily breakfast and select dinners featuring local cuisine</li>
                                        <li >Private, air-conditioned transportation throughout the trip</li>
                                        <li>English-speaking local guide</li>
                                        <li>All entrance fees to attractions listed in the itinerary</li>
                                        <li>Airport transfers on arrival and departure days</li>
                                        <li>
                                            Guided sightseeing tours and cultural experiences
                                        </li>
                                    </ul>


                                    <h6>
                                        What’s Excluded
                                    </h6>

                                    <ul>
                                        <li>International airfare to and from Georgia</li>
                                        <li>Meals other than breakfast and dinners</li>
                                        <li>Visa fees (if applicable)</li>
                                        <li>Lunches and dinners not specified in the itinerary</li>
                                        <li>Personal expenses such as drinks, souvenirs, and tips</li>
                                        <li>Optional tours or activities not mentioned in the program</li>
                                    </ul>

                                    <div className="card-action">
                                        <button>
                                            Inquire Now
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 col-md-4 col-sm-12">

                            <div className="image_container">

                                <Image
                                    src="/package/package-1.png"
                                    alt="package_details"
                                    width={500}
                                    height={500}
                                />

                            </div>

                            <h4 className="mt-5">
                                About Georgia
                            </h4>

                            <p>
                                Tucked between Europe and Asia, Georgia is a land of dramatic mountains, ancient churches, and world-famous hospitality. It’s where centuries of history blend effortlessly with a vibrant modern spirit. From the cobbled lanes of Tbilisi to the towering peaks of Kazbegi and the vineyards of Kakheti, Georgia offers a mix of adventure, culture, and warmth you won’t find anywhere else.
                            </p>

                            <p>It’s not just a place to visit—it’s a place to feel.</p>

                            <div className="image_container">

                                <Image
                                    src="/package/package-2.png"
                                    alt="package_de tails"
                                    width={500}
                                    height={500}
                                />


                            </div>


                            <h5 className="mt-5">

                                Highlights You’ll Experience
                            </h5>

                            <p>
                                Old Tbilisi
                            </p>


                            <p>
                                Wander through winding streets, colorful balconies, and ancient sulfur baths. Feel the heartbeat of Georgia’s capital as old meets new in the most unexpected ways.
                            </p>

                            <p>
                                Ananuri Castle
                            </p>

                            <p>
                                Perched above the turquoise waters of the Aragvi River, this 17th-century fortress is a photographer’s dream and a glimpse into Georgia’s medieval past.
                            </p>

                            <p>
                                Kazbegi (Stepantsminda)
                            </p>
                            <p>
                                Travel along the iconic Georgian Military Highway to the foot of Mount Kazbek. Hike or drive up to the stunning Gergeti Trinity Church, one of the most breathtaking spots in the Caucasus.
                            </p>

                            <div className="image_container">

                                <Image
                                    src="/package/package-3.png"
                                    alt="package_details"
                                    width={500}
                                    height={500}
                                />

                            </div>

                            <h5 className="mt-5">
                                Why You’ll Love It
                            </h5>

                            <p>
                                It’s not just about sights—it’s about moments. Sipping local wine overlooking a mountain valley. Hearing the stories locals have passed down for generations. Watching the sunset reflect off the cobblestones of Tbilisi.
                            </p>



                            <p>
                                Georgia stays with you long after you’ve left.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            <section className="explore_other_packages section-gap-top-bottom ">

                <div className="container">

                    <h2>
                        Explore Other Packages
                    </h2>

                    <div className="package_wrapper ">
                      <PackageCard 
                             image="/package/package-4.png"
                             price="899"
                             title="Highlights of Japan"
                             description="Feel the energy of Shinjuku in Tokyo, discover the serene temples of Kyoto, and see the iconic Mt. Fuji."
                           />
                           <PackageCard 
                             image="/package/magical.png"
                             price="649"
                             title="Magical Bali Adventure"
                             description="Find peace in the rice terraces of Ubud, relax on the beaches of Seminyak, and visit the cliffside Uluwatu Temple."
                           />
                           <PackageCard 
                             image="/package/savings-2.png"
                             price="899"
                             title="The Great Kenya Safari"
                             description="Witness the Big 5 in the legendary Maasai Mara, see the flamingos of Lake Nakuru, and start your journey in Nairobi."
                           />   

                    </div>
                </div>

            </section>
            <BottomCTA />
            <Footer />

        </div>

    )

}

export default Page