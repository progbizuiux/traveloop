import Banner from "@/components/common/banner";
import BottomCTA from "@/components/common/bottom-cta";
import ContactForm from "@/components/common/contactForm";
import Footer from "@/components/common/footer";
import "@/styles/layout/contact.scss"
const Contact = () => {
    return (
        <div className="contact-page">

            <Banner title="Get in touch" description="We're here to help! Whether you have a question about a specific tour, need help with a visa, or want a free consultation, our team of travel experts is ready to assist you." />


            <section className="contact-section section-gap-top-bottom pt-0">

                <div className="container">

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="contact-info">
                                <h2>Reach Us Directly</h2>
                                <p>
                                    Feel free to get in touch with us using the details<br />
                                    below. Our team is based in Dubai and ready to help<br />
                                    you plan your journey.
                                </p>

<div className="contact-details">
    {/* Phone */}
    <div className="contact-item d-flex flex-column gap-4">
        <div className="d-flex align-items-center">
            <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.15825 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.1638 3.69101C7.91707 3.40694 7.59547 3.19794 7.23567 3.08785C6.94858 3 6.62446 3 5.97621 3C5.02791 3 4.55375 3 4.15573 3.18229C3.68687 3.39702 3.26343 3.86328 3.09473 4.3506C2.95151 4.76429 2.99253 5.18943 3.07458 6.0397C3.94791 15.0902 8.90981 20.0521 17.9603 20.9254C18.8106 21.0075 19.2357 21.0485 19.6494 20.9053C20.1367 20.7366 20.603 20.3131 20.8177 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0823 15.6393 19.7861 15.5077 19.1937 15.2444L18.2878 14.8417C17.6462 14.5566 17.3255 14.4141 16.9995 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5063 14.8544 14.967 15.3038C14.4301 15.7512 14.1617 15.9749 13.8337 16.0947C13.543 16.2009 13.1586 16.2403 12.8523 16.1951C12.5069 16.1442 12.2423 16.0029 11.7133 15.7201C10.0672 14.8405 9.15953 13.9328 8.27986 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64661 7.3124 9.61694 7.00048C9.58594 6.67452 9.44338 6.35376 9.15825 5.71223Z" fill="white" />
                </svg>
            </div>
            <div className="contact-content">
                <h6>Phone</h6>
            </div>
        </div>
        <p><a href="tel:14158557708">14158557708</a></p>
    </div>

    {/* Email */}
    <div className="contact-item d-flex flex-column gap-4">
        <div className="d-flex align-items-center">
            <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
                    <path d="M0.76577 10.7256C0.83114 13.7912 0.86383 15.3239 1.99496 16.4594C3.12608 17.5948 4.70033 17.6343 7.84883 17.7134C9.7893 17.7622 11.7107 17.7622 13.6512 17.7134C16.7997 17.6343 18.3739 17.5948 19.5051 16.4594C20.6362 15.3239 20.6689 13.7912 20.7342 10.7256C20.7553 9.7399 20.7553 8.7601 20.7342 7.7744C20.6689 4.70886 20.6362 3.17609 19.5051 2.04066C18.3739 0.905231 16.7997 0.865681 13.6512 0.786571C11.7107 0.737811 9.7893 0.737811 7.84882 0.786561C4.70033 0.865661 3.12608 0.905211 1.99495 2.04065C0.86382 3.17608 0.83114 4.70885 0.76576 7.7744C0.74474 8.7601 0.74475 9.7399 0.76577 10.7256Z" fill="white" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="contact-content">
                <h6>Email</h6>
            </div>
        </div>
        <p><a href="mailto:Info@Example.Com">Info@Example.Com</a></p>
    </div>
</div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* <div className="contact-form">
                                <h3>Get Your Free Consultation</h3>
                            </div> */}

                            <ContactForm />
                        </div>
                    </div>

                </div>



            </section>
            <BottomCTA/>
            <Footer/>
        </div>
    );
};

export default Contact