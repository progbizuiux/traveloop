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
                                <h3>Reach Us Directly</h3>
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
        <h4><a href="tel:14158557708">14158557708</a></h4>
    </div>

    {/* Email */}
    <div className="contact-item d-flex flex-column gap-4">
        <div className="d-flex align-items-center">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" fill="white" stroke="#D97706" strokeWidth="1.5" stroke-linejoin="round"/>
  <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" fill="white"/>
  <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round"/>
</svg>
            </div>
            <div className="contact-content">
                <h6>Email</h6>
            </div>
        </div>
        <h4><a href="mailto:Info@Example.Com">Info@Example.Com</a></h4>
    </div>
</div>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-sm-0 mt-5">
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