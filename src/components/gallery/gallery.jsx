"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import '@/styles/components/gallery.scss';

const VideoGallery = () => {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', label: 'All', variant: 'all', },
        { id: 'georgia', label: 'Georgia', active: false },
        { id: 'maldives', label: 'Maldives', active: false },
        { id: 'kenya', label: 'Kenya', active: false },
        { id: 'japan', label: 'Japan', active: false },
        { id: 'europe', label: 'Europe', active: false },
        { id: 'uae', label: 'UAE' },
    ];

    const videos = [
        {
            id: 1,
            title: 'Mountain Adventure',
            type: 'video',
            src: '/video/0_Woman_Girl_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 2,
            title: 'Safari Experience',
            type: 'video',
            src: '/video/0_Rhino_Wildlife_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 3,
            title: 'Hiking Trail',
            type: 'video',
            src: '/video/0_Stone_Steps_Cliff_Path_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 4,
            title: 'City Explorer',
            type: 'video',
            src: '/video/0_Hiker_Sunset_720x1280.mp4',
            category: 'europe',
        },
        {
            id: 5,
            title: 'Beach Paradise',
            type: 'image',
            src: '/bento/adventure videos (7).png',
            category: 'adventure videos',
        },
        {
            id: 6,
            title: 'Temple Discovery',
            type: 'image',
            src: '/bento/four.png',
            category: 'japan',
        },
        {
            id: 7,
            title: 'Sunset Views',
            type: 'image',
            src: '/bento/six.png',
            category: 'adventure videos',
        },
        {
            id: 8,
            title: 'Couple Travel',
            type: 'image',
            src: '/bento/seven.png',
            category: 'europe',
        },
        {
            id: 9,
            title: 'Adventure Duo',
            type: 'video',
            src: '/video/0_Stone_Steps_Cliff_Path_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 10,
            title: 'Mountain Hiker',
            type: 'video',
            src: '/video/0_Rhino_Wildlife_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 11,
            title: 'Happy Traveler',
            type: 'video',
            src: '/video/0_Woman_Girl_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 12,
            title: 'Nature Trail',
            type: 'video',
            src: '/video/0_Hiker_Sunset_720x1280.mp4',
            category: 'adventure videos',
        },
        {
            id: 13,
            title: 'Beach Vibes',
            type: 'image',
            src: '/bento/eight.png',
            category: 'adventure videos',
        },
        {
            id: 14,
            title: 'Travel Together',
            type: 'image',
            src: '/bento/four.png',
            category: 'europe',
        },
        {
            id: 15,
            title: 'Ancient Temples',
            type: 'image',
            src: '/bento/eight.png',
            category: 'japan',
        },
        {
            id: 16,
            title: 'City Lights',
            type: 'image',
            src: '/bento/five.png',
            category: 'uae',
        },
    ];

    const filteredItems =
        activeTab === 'all'
            ? videos
            : videos.filter((item) => item.category === activeTab);

    const handleVideoClick = (item) => {
        console.log('Play video/image:', item.title);
        // Add your video play logic here
    };

    return (
        <div className="video-gallery  section-gap-top-bottom pt-0">

            <div className='container'>

                <div className="video-gallery__header">
                    <div className="video-gallery__tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`video-gallery__tab ${activeTab === tab.id ? 'video-gallery__tab--active' : ''
                                    } `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="video-gallery__grid section-body-gap">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleVideoClick(item)}
                            className={`video-gallery__card video-gallery__card--${item.type}`}
                        >
                            {item.type === 'video' ? (
                                <video
                                    className="video-gallery__video"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            ) : (
                                <Image
                                width={500}
                                height={500}
                                    src={item.src}
                                    alt={item.title}
                                    className="video-gallery__image"
                                />
                            )}
                            <div className="video-gallery__overlay">
                                {/* <div className="video-gallery__play-button" /> */}
                            </div>
                            {/* <div className="video-gallery__title">{item.title}</div> */}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default VideoGallery;