
import Banner from "@/components/common/banner";
import BottomCTA from "@/components/common/bottom-cta";
import Footer from "@/components/common/footer";
import VideoGallery from "@/components/gallery/gallery";
const Gallery = () => {
    return (
       <section className="gallery">
        <Banner title="Real Adventures, Real Travelers." description="Get inspired by the real, unfiltered moments our travelers have captured. Browse photos and videos from the Travel Loop community, and start dreaming of your next great story." />

        <VideoGallery/>
        <BottomCTA/>
        <Footer/>

       </section>
    );
};

export default Gallery;