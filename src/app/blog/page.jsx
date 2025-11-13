
import Banner from "@/components/common/banner";
import BlogCard from "@/components/common/blog-card";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import "@/styles/layout/blog.scss"
const Blog = () => {
    return (
        <div className="blog-page">
            <Banner description="Welcome to the Travel Loop blog. Get expert tips, in-depth destination guides, and the latest travel news to help you plan your next perfect adventure." title="Travel Inspiration & Expert Advice" />

            <section className="featured-blog section-gap-top-bottom pt-0">
                <div className="container">

                    <h3 className="fw-semibold">
                        Featured Post
                    </h3>
                    <div className="row section-body-gap">

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <BlogCard />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <BlogCard />
                        </div>


                    </div>
                </div>

            </section>

            <section className="recent-posts section-gap-top-bottom pt-0">
                <div className="container">


                    <h3 className="text-center fw-medium">
                        Recent Posts
                    </h3>
                    <div className="recent-posts-grid section-body-gap">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
            <BottomCTA />
            <Footer />
        </div>
    );
};

export default Blog