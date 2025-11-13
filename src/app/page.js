import Banner from "@/components/banner";
import DestinationCarousel from "@/components/carousel";
import BottomCTA from "@/components/common/bottom-cta";
import FAQAccordion from "@/components/common/faq";
import Footer from "@/components/common/footer";
import LatestTravel from "@/components/common/latestTravel";
import { TestimonialsCarousel } from "@/components/common/testimonials";
import TimelineComponent from "@/components/common/timeLine";
import TravelersAdventures from "@/components/home/bento";
import CTA from "@/components/home/cta";
import EntireTrip from "@/components/home/entireTrip";
import Journeys from "@/components/home/journeys";
import YourJourney from "@/components/home/yourJourney";
import "@/styles/layout/home.scss";

export const revalidate = 5;

// export async function generateMetadata() {
//   try {
//      const json = await apiService(clientConfig.homeSeo);
//      const metadataArray = json.data?.data || [];
//      if (metadataArray.length === 0 || !metadataArray[0]?.metadata) {
//       // Empty array or no metadata
//       return {
//         title: 'Default Title',
//         description: 'Default Description',
//       };
//     }
//      const metadata = metadataArray[0]; // Get first item
//     const metadataItem = metadata.metadata;

//     return {
//       title: metadataItem.metaTitle,
//       description: metadataItem.metaDescription,
//       openGraph: {
//         title: metadataItem.ogTitle,
//         description: metadataItem.ogDescription,
//         url: metadataItem.ogUrl,
//         siteName: metadataItem.ogSitename,
//         images: metadataItem.ogImage?.map(img => ({
//           url: img?.url?.startsWith("http") ? img.url : "/logo/Progbiz.jpg",
//           width: img?.width || 800,
//           height: img?.height || 600,
//           alt: img?.alternativeText || 'OpenGraph Image',
//           type: img?.mime || 'image/jpeg',
//         })) || [],
//         type: 'website',
//         locale: 'en_US',
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: metadataItem.twitterTitle,
//         description: metadataItem.twitterDescription,
//         images: metadataItem.twitterImage?.map(img => ({
//           url: img?.url?.startsWith("http") ? img.url : "/logo/Progbiz.jpg",
//           alt: img?.alternativeText || 'Twitter Image',
//         })) || [],
//       },
//       robots: {
//         index: metadataItem.robotIndex,
//         follow: metadataItem.robotFollow,
//       },
//       alternates: {
//         canonical: metadataItem.canonical,
//       },
//     };

//   } catch (error) {
//     console.error("Metadata API error:", error);

//     return {
//       title: 'Progbiz—Your digital transformation partner',
//       description: 'Progbiz offers software development, IoT solutions, digital marketing, and branding services that connect your business with customers and drive growth.',
//     };
//   }
// }

export default function Home() {
  return (
    <div className="landing">
    <Banner />
    <DestinationCarousel />
    <EntireTrip />
    <YourJourney />
    <TimelineComponent />
    <CTA />
    <Journeys />
    <TestimonialsCarousel />
    <LatestTravel />
    <TravelersAdventures />
    <FAQAccordion />
    <BottomCTA />
    <Footer />

      {/* <div className="section section1"></div>
      <div className="section section2"></div> */}
    </div>
  );
}
