import Banner from "@/components/common/banner";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import PackageCard from "@/components/common/PackageCard";
import "@/styles/layout/package.scss"
// import 

const Package = () => {
    return (
        <div className="package_page">

            <Banner description="The adventure of a lifetime is just a click away. Browse our 5-star rated packages, filter by your travel style, and find your next unforgettable journey." title="Explore Our Curated Tour Packages" />



            <section className="container ">

                <div className="package_wrapper section-gap-top-bottom pt-0">

                    <PackageCard />
                    <PackageCard />
                    <PackageCard />
                    <PackageCard />
                    <PackageCard />

                    <PackageCard />

                    <PackageCard />




                </div>
            </section>
            <BottomCTA />
            <Footer />
        </div>
    );
};
export default Package;
