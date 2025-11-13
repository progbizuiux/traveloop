import PackageCard from "../common/PackageCard";
import Button from "../ui/Button/Button";
import "@/styles/components/journey.scss";


const Journeys = () => {
  return (
    <section className="journeys your-journey section-gap-top-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Expertly Crafted Journeys</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <p>
              These all-inclusive packages are hand-picked by our travel specialists. 
              We've handled all the details—from perfect itineraries to top-rated guides—so 
              you can just show up and explore.
            </p>
            <Button text="Explore All Packages" />
          </div>
        </div>

        <div className="journeys-cards-wrapper section-body-gap">
          <PackageCard 
            image="/packages/package-1.png"
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

      
      </div>
    </section>
  );
};

export default Journeys;