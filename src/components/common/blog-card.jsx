import Image from "next/image";
import "@/styles/components/blog-card.scss"
import Link from "next/link";

const BlogCard = ({image, title, description, date}) => {
    return (

        <div className="blog-card">
            <div className="card" >
                <Image width={500} height={500} src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title} </h4>
                    <p className="card-text">{description}</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

                    <p className="date mt-4">12-12-2025 <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                        <circle cx="2" cy="2" r="2" fill="#6C6C6C" />
                    </svg> 2 min read </p>


                    <Link href={"/blog/details"}>
                    
                    
                    <div className="card-action mt-5">

                        <p>
                            Read Article
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18.5 12H5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 18C13 18 19 13.5811 19 12C19 10.4188 13 6 13 6" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default BlogCard