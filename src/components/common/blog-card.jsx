import Image from "next/image";
import "@/styles/components/blog-card.scss"

const BlogCard = () => {
    return (

        <div className="blog-card">
            <div className="card" >
                <Image width={500} height={500} src="/about/image-2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">First-Timer's Guide to Japan: Tokyo, Kyoto & Osaka</h2>
                    <p className="card-text">From the neon lights of Shinjuku to the serene temples of Kyoto, here's the perfect 10-day itinerary for your first trip to Japan.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

                    <p className="date">12-12-2025 <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#6C6C6C" />
                    </svg> 2 min read </p>
                    <div className="card-action">

                        <p>
                            Read Article
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.5 12H5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BlogCard