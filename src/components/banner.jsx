import Image from "next/image"
import "@/styles/components/banner.scss"
import SearchBar from "./searchBar"
import SearchCard from "./mobile-search"

const Banner = () => {
    return (
        <section className="banner">
            <div className="banner__image">
                {/* Use fill prop for responsive full-screen images */}
                <Image
                    src="/home/banner/banner.jpg"
                    alt="Banner"
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </div>

            <div className="banner__content">
                <h1>Your Complete Journey, All in One Place</h1>
                <p>We bring together global flights, easy visa applications, and unforgettable holidays, so you can plan your entire trip with confidence.</p>
                <div className="d-none d-lg-block">
                    <SearchBar />
                </div>

                <div className="d-lg-none mt-5">
                    <SearchCard />
                </div>

            </div>
        </section>
    )
}

export default Banner