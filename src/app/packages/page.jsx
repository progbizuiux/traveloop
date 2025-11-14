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

                    <PackageCard
            image="/package/pkg.png"
            price="1499"
            title="European Capitals Premium"
            description="A curated journey through the art of Paris, the ancient history of Rome, and the charming canals of Amsterdam."
          />
                           <PackageCard 
                             image="/package/wonders.png"
                             price="899"
                             title="Wonders of Georgia"
                             description="Explore historic Old Tbilisi, the stunning Ananuri Castle, and the breathtaking mountain views of Kazbegi."
                           />
                           <PackageCard 
                             image="/savings/savvings-1.png"
                             price="699"
                             title="Maldives Paradise Escape"
                             description="Experience your own private overwater bungalow, snorkel vibrant coral atolls, and enjoy pristine white sand beaches."
                           />
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
            </section>
            <BottomCTA />
            <Footer />
        </div>
    );
};
export default Package;
