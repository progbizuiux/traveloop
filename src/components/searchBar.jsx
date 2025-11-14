"use client"
import React, { useState } from 'react';
import "@/styles/components/searchBar.scss";
import Button from './ui/Button/Button';

// Separate Tab Component
const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="tabs-section">
            <div className="tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => onTabChange(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Separate Search Form Component
const SearchForm = ({ destination, dateRange, onDestinationChange, onDateRangeChange }) => {
    return (
        <div className="search-form">
            {/* Destination Input */}
            <div className="input-group">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                        <path d="M18.72 19.44C18.72 21.8035 14.0112 23.04 9.36 23.04C4.7088 23.04 0 21.8035 0 19.44C0 17.9698 1.82304 16.9363 4.32 16.3646V17.8426C2.43768 18.3233 1.44 19.0037 1.44 19.44C1.44 20.173 4.23552 21.6 9.36 21.6C14.4845 21.6 17.28 20.173 17.28 19.44C17.28 18.707 14.4845 17.28 9.36 17.28C9.11304 17.28 8.87616 17.286 8.64 17.2925V15.852C8.87976 15.8455 9.12 15.84 9.36 15.84C14.0112 15.84 18.72 17.0765 18.72 19.44ZM7.2 19.44V10.08H18C18.2791 10.08 18.5338 9.91824 18.6518 9.66552C18.7706 9.41232 18.732 9.11352 18.5534 8.8992L15.3372 5.04L18.5532 1.1808C18.7318 0.96624 18.7704 0.66744 18.6516 0.41448C18.5338 0.16176 18.2791 0 18 0H6.48C6.08208 0 5.76 0.32232 5.76 0.72V19.44C5.76 19.8377 6.08208 20.16 6.48 20.16C6.87792 20.16 7.2 19.8377 7.2 19.44ZM7.2 1.44H16.463L13.8466 4.5792C13.6243 4.84608 13.6243 5.23416 13.8466 5.50104L16.463 8.64H7.2V1.44Z" fill="#1F2937" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="I'm dreaming of..."
                    value={destination}
                    onChange={(e) => onDestinationChange(e.target.value)}
                    className="input-field"
                />
                <div className="dropdown-icon">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </div>

            {/* Divider */}
            <div className="divider"></div>

            {/* Date Range Input */}
            <div className="input-group">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M16 2V6M8 2V6" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 10H21" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.9955 14H12.0045M11.9955 18H12.0045M15.991 14H16M8 14H8.00897M8 18H8.00897" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <input
                    type="date"
                    placeholder="I'm Free To Travel..."
                    value={dateRange}
                    onChange={(e) => onDateRangeChange(e.target.value)}
                    className="input-field"
                />
            </div>

            {/* Search Button */}
            {/* <button className="search-button">
                <span>Search for</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            </button> */}
            <Button   text='Search for' margin={false}/>
        </div>
    );
};

// Main SearchBar Component
const SearchBar = () => {
    const [activeTab, setActiveTab] = useState('Tours');
    const [destination, setDestination] = useState('');
    const [dateRange, setDateRange] = useState('');

    const tabs = ['Tours', 'Flights', 'Visas'];

    return (
        <div className="search-bar-wrapper">
            <TabNavigation
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
            <div className="search-bar-container">
                <SearchForm
                    destination={destination}
                    dateRange={dateRange}
                    onDestinationChange={setDestination}
                    onDateRangeChange={setDateRange}
                />
            </div>
        </div>
    );
};

export default SearchBar;