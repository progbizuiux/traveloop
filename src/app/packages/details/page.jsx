
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
                                            <span>Includes</span>
                                        </div>

                                        <p>
                                            4 Cities
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clip-path="url(#clip0_274_253)">
                                                    <path d="M28.724 2.18379L22.9213 0.24112C21.9972 -0.068075 20.9994 -0.0801974 20.068 0.206453L11.9493 2.64379L6.464 0.362453C5.755 0.0665615 4.98392 -0.0497116 4.2192 0.0239547C3.45447 0.0976209 2.71976 0.358948 2.08028 0.784739C1.44081 1.21053 0.916342 1.78761 0.553443 2.46476C0.190545 3.14192 0.00043882 3.89819 0 4.66645L0 28.8411L11.3333 32.0798L20.732 29.4011L32.0253 32.1518V6.64379C32.0267 5.64448 31.7065 4.67127 31.1119 3.86807C30.5174 3.06487 29.6801 2.47433 28.724 2.18379ZM18.6907 4.83045V25.8238L13.3333 27.3505V6.49712C13.38 6.48379 13.4267 6.47979 13.4667 6.46645L18.6907 4.83045ZM4 4.66645C3.99996 4.55648 4.02713 4.4482 4.07909 4.35126C4.13105 4.25433 4.20618 4.17176 4.29779 4.11091C4.3894 4.05006 4.49464 4.01281 4.60413 4.0025C4.71363 3.99218 4.82397 4.00912 4.92533 4.05179L9.33333 5.88779V27.3545L4 25.8251V4.66645ZM28.024 27.0665L22.6907 25.7678V4.38112L27.54 5.99979C27.6792 6.03945 27.8018 6.12335 27.8891 6.23882C27.9764 6.35428 28.0238 6.49503 28.024 6.63979V27.0665Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_253">
                                                        <rect width="32" height="32" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span>Style</span>
                                        </div>

                                        <p>
                                            Cultural
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M24 8C24 3.588 20.412 0 16 0C11.588 0 8 3.588 8 8C8 11.7213 10.5533 14.8573 14 15.7467V30C14 31.1053 14.8947 32 16 32C17.1053 32 18 31.1053 18 30V15.7467C21.4467 14.856 24 11.7213 24 8ZM16 12C13.7947 12 12 10.2053 12 8C12 5.79467 13.7947 4 16 4C18.2053 4 20 5.79467 20 8C20 10.2053 18.2053 12 16 12Z" fill="#2E4042" />
                                            </svg>
                                            <span>From</span>
                                        </div>

                                        <p>
                                            1299 AED
                                        </p>


                                    </div>
                                    <div className="icon-wrapper">

                                        <div className="d-flex flex-column align-items-center text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <g clip-path="url(#clip0_274_273)">
                                                    <path d="M29.7476 15.2107L19.8596 5.29334C18.1876 3.632 15.7889 2.82534 13.4009 3.14267L7.00626 4.176L3.41693 0.585336C2.6356 -0.194664 1.37026 -0.194664 0.58893 0.585336C-0.192404 1.36534 -0.192404 2.63334 0.58893 3.41467L4.09026 6.916L3.13026 13.8093C2.94893 16.0613 3.7676 18.2667 5.36493 19.8493L15.2796 29.7773C16.7249 31.212 18.6396 32 20.6743 32H20.7063C22.7529 31.992 24.6743 31.1867 26.1156 29.732L29.7836 26.0307C32.7543 23.0347 32.7356 18.176 29.7489 15.212L29.7476 15.2107ZM26.9423 23.2147L23.2743 26.916C22.5849 27.6107 21.6676 27.996 20.6903 27.9987H20.6743C19.7023 27.9987 18.7876 27.6227 18.1036 26.944L8.1876 17.0147C7.42226 16.256 7.0316 15.2027 7.10493 14.244L7.63426 10.4573L9.3836 12.2067C9.36226 12.3587 9.33693 12.5093 9.33693 12.6667C9.33693 14.508 10.8289 16 12.6703 16C14.5116 16 16.0036 14.508 16.0036 12.6667C16.0036 10.8253 14.5116 9.33333 12.6703 9.33333C12.5129 9.33333 12.3636 9.35867 12.2116 9.38L10.4943 7.66267L13.9823 7.09867C15.1156 6.948 16.2329 7.32667 17.0343 8.124L26.9223 18.0413C28.3516 19.4613 28.3609 21.7827 26.9423 23.2147ZM23.4169 17.9187C24.1983 18.7 24.1983 19.9653 23.4169 20.7467L20.7503 23.4133C20.3596 23.804 19.8476 23.9987 19.3356 23.9987C18.8236 23.9987 18.3116 23.804 17.9209 23.4133C17.1396 22.632 17.1396 21.3667 17.9209 20.5853L20.5876 17.9187C21.3689 17.1373 22.6356 17.1373 23.4169 17.9187Z" fill="#2E4042" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_274_273">
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