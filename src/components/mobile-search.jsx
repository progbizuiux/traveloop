"use client"
import { useState } from "react";
import Image from "next/image";
import "../styles/components/mobile-search.scss"
import Button from "./ui/Button/Button";

const SearchCard = () => {
    const [activeTab, setActiveTab] = useState("tours");

    return (
        <section className="search-card-section">
            <div className="search-card">
                {/* Tab Navigation */}
                <div className="tab-navigation">
                    <button 
                        className={`tab-btn ${activeTab === "tours" ? "active" : ""}`}
                        onClick={() => setActiveTab("tours")}
                    >
                        Tours
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "flights" ? "active" : ""}`}
                        onClick={() => setActiveTab("flights")}
                    >
                        Flights
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "visas" ? "active" : ""}`}
                        onClick={() => setActiveTab("visas")}
                    >
                        Visas
                    </button>
                </div>

                {/* Search Form */}
                <div className="search-form">
                    {/* Destination Input */}
                    <div className="input-group">
                        <div className="input-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
  <path d="M18.72 19.44C18.72 21.8035 14.0112 23.04 9.36 23.04C4.7088 23.04 0 21.8035 0 19.44C0 17.9698 1.82304 16.9363 4.32 16.3646V17.8426C2.43768 18.3233 1.44 19.0037 1.44 19.44C1.44 20.173 4.23552 21.6 9.36 21.6C14.4845 21.6 17.28 20.173 17.28 19.44C17.28 18.707 14.4845 17.28 9.36 17.28C9.11304 17.28 8.87616 17.286 8.64 17.2925V15.852C8.87976 15.8455 9.12 15.84 9.36 15.84C14.0112 15.84 18.72 17.0765 18.72 19.44ZM7.2 19.44V10.08H18C18.2791 10.08 18.5338 9.91824 18.6518 9.66552C18.7706 9.41232 18.732 9.11352 18.5534 8.8992L15.3372 5.04L18.5532 1.1808C18.7318 0.96624 18.7704 0.66744 18.6516 0.41448C18.5338 0.16176 18.2791 0 18 0H6.48C6.08208 0 5.76 0.32232 5.76 0.72V19.44C5.76 19.8377 6.08208 20.16 6.48 20.16C6.87792 20.16 7.2 19.8377 7.2 19.44ZM7.2 1.44H16.463L13.8466 4.5792C13.6243 4.84608 13.6243 5.23416 13.8466 5.50104L16.463 8.64H7.2V1.44Z" fill="#1F2937"/>
</svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="I'm dreaming of..."
                            className="search-input"
                        />
                        <div className="dropdown-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 7.5L10 12.5L15 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    {/* Date Input */}
                    <div className="input-group">
                        <div className="input-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM7 12H12V17H7V12Z" fill="#1A1A1A"/>
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            placeholder="I'm free to travel..."
                            className="search-input"
                        />
                    </div>

                    {/* Search Button */}

                    <div className="w-100 mt-2">
                        <Button text="Search for" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SearchCard;