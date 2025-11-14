
import Banner from "@/components/common/banner";
import BlogCard from "@/components/common/blog-card";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import "@/styles/layout/blog.scss"
const Blog = () => {
    return (
        <div className="blog-page">
            <Banner description="Welcome to the Travel Loop blog. Get expert tips, in-depth destination guides, and the latest travel news to help you plan your next perfect adventure." title="Travel Inspiration & Expert Advice" />

            <section className="featured-blog section-gap-top-bottom ">
                <div className="container">

                    <h3 className="fw-semibold">
                        Featured Post
                    </h3>
                    <div className="row mobile-card-gap  ">

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <BlogCard image={"/blog/blog-1.png"} description={"From the neon lights of Shinjuku to the serene temples of Kyoto, here's the perfect 10-day itinerary for your first trip to Japan."} title={"First-Timer's Guide to Japan: Tokyo, Kyoto & Osaka"} />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 ">
                            <BlogCard image={"/blog/blog-2.png"} description={" Beyond Khachapuri. We explore the 10 must-try dishes and the best local restaurants in Georgia's vibrant capital."} title={"A Food-Lover's Guide to Tbilisi, Georgia"} />
                        </div>


                    </div>
                </div>

            </section>

            <section className="recent-posts section-gap-top-bottom pt-0">
                <div className="container">


                    <h3 className="text-center ">
                        Recent Posts
                    </h3>
                    <div className="recent-posts-grid section-body-gap">
                        <BlogCard image={"/blog/blog-3.png"} description={"Everyone knows the Maasai Mara, but discover the stunning white-sand beaches of Diani and Malindi for the perfect safari-and-sea holiday."} title={"Beyond the Safari: Kenya's Hidden Coastal Gems"} />



                        <BlogCard image={"/blog/blog-4.png"} description={"Short on time? Here’s how to see all the iconic sights, eat the best pastries, and explore charming neighborhoods in just three days."} title={"How to See Paris in 72 Hours: The Perfect Itinerary"} />



                        <BlogCard image={"/blog/blog-5.png"} description={"Travel lighter and smarter. Here's exactly what to pack for a week-long getaway, all while avoiding checked bag fees."} title={"The Ultimate Carry-On Packing List for a 7-Day Trip"} />


                        <BlogCard image={"/blog/blog-6.png"} description={"Discover the hidden gems of the Caucasus region, from the ancient churches of Georgia to the stunning landscapes of Armenia."} title={"Maximizing Savings: 5 Tips for Booking Group Fares"} />


                        <BlogCard image={"/blog/blog-7.png"} description={"From offline maps to instant currency conversion, these are the apps our expert travelers swear by for a seamless journey."} title={"10 Essential Travel Apps You Need Before You Fly"} />


                        <BlogCard image={"/blog/blog-8.png"} description={"Increase your chances of a first-time approval. We break down the simple, common errors that lead to visa rejection."} title={"5 Common Mistakes to Avoid on Your Schengen Visa ..."} />
                    </div>
                </div>
            </section>
            <BottomCTA />
            <Footer />
        </div>
    );
};

export default Blog