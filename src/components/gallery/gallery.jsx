"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import '@/styles/components/gallery.scss';

const VideoGallery = () => {
    const [activeTab, setActiveTab] = useState('adventure videos');

    const tabs = [
        { id: 'all', label: 'All', variant: 'all' },
        { id: 'google', label: 'Google' },
        { id: 'facebook', label: 'Facebook' },
        { id: 'adventure videos', label: 'adventure videos', variant: 'active' },
        { id: 'japan', label: 'Japan' },
        { id: 'europe', label: 'Europe' },
        { id: 'uae', label: 'UAE' },
    ];

    const videos = [
        {
            id: 1,
            title: 'Mountain Adventure',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 2,
            title: 'Safari Experience',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/4089693/4089693-hd_1920_1080_30fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 3,
            title: 'Hiking Trail',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/2499611/2499611-hd_1920_1080_24fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 4,
            title: 'City Explorer',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/2758217/2758217-hd_1920_1080_24fps.mp4',
            category: 'europe',
        },
        {
            id: 5,
            title: 'Beach Paradise',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            category: 'adventure videos',
        },
        {
            id: 6,
            title: 'Temple Discovery',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
            category: 'japan',
        },
        {
            id: 7,
            title: 'Sunset Views',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
            category: 'adventure videos',
        },
        {
            id: 8,
            title: 'Couple Travel',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1543489822-c49534f3271f?w=800',
            category: 'europe',
        },
        {
            id: 9,
            title: 'Adventure Duo',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 10,
            title: 'Mountain Hiker',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/2670636/2670636-hd_1920_1080_25fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 11,
            title: 'Happy Traveler',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/5532782/5532782-hd_1920_1080_25fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 12,
            title: 'Nature Trail',
            type: 'video',
            src: 'https://videos.pexels.com/video-files/3044191/3044191-hd_1920_1080_25fps.mp4',
            category: 'adventure videos',
        },
        {
            id: 13,
            title: 'Beach Vibes',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
            category: 'adventure videos',
        },
        {
            id: 14,
            title: 'Travel Together',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1543489822-c49534f3271f?w=800',
            category: 'europe',
        },
        {
            id: 15,
            title: 'Ancient Temples',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800',
            category: 'japan',
        },
        {
            id: 16,
            title: 'City Lights',
            type: 'image',
            src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800',
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