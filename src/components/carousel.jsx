"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/styles/components/carousel.scss";
import Link from "next/link";

const destinations = [
  {
    id: 1,
    title: "Georgia",
    description: "From soaring Caucasus mountains and ancient churches to lush vineyards and the Black Sea coastline, Georgia captivates with its diverse and historic landscapes.",
    image: "/blog-details/detials-image.png"
  },
  {
    id: 2,
    title: "Armenia",
    description: "Discover ancient monasteries, stunning mountain landscapes, and rich cultural heritage in the heart of the Caucasus.",
    image: "/package/package-2.png"
  },
  {
    id: 3,
    title: "Switzerland",
    description: "Experience breathtaking Alpine scenery, pristine lakes, and charming mountain villages in the heart of Europe.",
    image: "/blog-details/blog-banner.png"
  },
  {
    id: 4,
    title: "Maldives",
    description: "Relax on pristine white sand beaches, swim in crystal-clear turquoise waters, and enjoy luxury island resorts.",
    image: "/about/image-1.png"
  },
  {
    id: 5,
    title: "Iceland",
    description: "Explore dramatic volcanic landscapes, stunning waterfalls, and the magical Northern Lights.",
    image: "/blog-details/blog-banner.png"
  },
];

const DestinationSlider = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const [animatingCards, setAnimatingCards] = useState(new Set());
  const [contentAnimationState, setContentAnimationState] = useState('visible'); // 'visible', 'sliding-out', 'sliding-in'
  const [imageAnimationState, setImageAnimationState] = useState('visible'); // 'visible', 'sliding-out', 'sliding-in'
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Auto-play state
  
  const contentRefs = useRef({});
  const imageRefs = useRef({});
  const autoPlayTimerRef = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play effect - advances to next slide every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    // Clear any existing timer
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    // Set up auto-play interval
    autoPlayTimerRef.current = setInterval(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, 5000); // 5 seconds

    // Cleanup on unmount or when auto-play is disabled
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, isTransitioning, activeCardIndex]); // Re-run when these change

  // Pause auto-play on hover (desktop only)
  const handleSliderMouseEnter = () => {
    if (isMobileView || window.innerWidth <= 768) return;
    setIsAutoPlaying(false);
  };

  // Resume auto-play on mouse leave (desktop only)
  const handleSliderMouseLeaveResume = () => {
    if (isMobileView || window.innerWidth <= 768) return;
    setIsAutoPlaying(true);
  };

  // Get 4 visible cards starting from active index
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 4; i++) {
      const index = (activeCardIndex + i) % destinations.length;
      visibleCards.push({
        ...destinations[index],
        originalIndex: index,
        positionIndex: i
      });
    }
    return visibleCards;
  };

  // Animate content transition
  const animateContentTransition = (callback, direction = 'next') => {
    // Step 1: Start sliding out current content
    setContentAnimationState('sliding-out');
    
    // Step 2: Slide out image in the appropriate direction
    setTimeout(() => {
      if (direction === 'next') {
        setImageAnimationState('sliding-out-left'); // Current image exits left
      } else {
        setImageAnimationState('sliding-out-right'); // Current image exits right
      }
    }, 100);
    
    setTimeout(() => {
      // Step 3: Execute the callback (change active index)
      callback();
      
      // Step 4: Slide in new image from the appropriate direction
      if (direction === 'next') {
        setImageAnimationState('sliding-in-from-right'); // New image enters from right
      } else {
        setImageAnimationState('sliding-in-from-left'); // New image enters from left
      }
      setContentAnimationState('sliding-in');
      
      setTimeout(() => {
        // Step 5: Set back to visible state
        setContentAnimationState('visible');
        setImageAnimationState('visible');
      }, 500); // Match animation duration
    }, 250); // Reduced from 300ms for faster swap
  };

  // Handle next button click
  const handleNextSlide = () => {
    if (isTransitioning) return;

    setSlideDirection('next');
    setIsTransitioning(true);
    setHoveredCardIndex(null);
    
    // Mark cards as animating
    setAnimatingCards(new Set([activeCardIndex, (activeCardIndex + 4) % destinations.length]));
    
    animateContentTransition(() => {
      setActiveCardIndex((prev) => (prev + 1) % destinations.length);
    }, 'next'); // Pass 'next' direction

    setTimeout(() => {
      setIsTransitioning(false);
      setAnimatingCards(new Set());
    }, 850); // Reduced for faster, smoother transitions
  };

  // Manual next button click - pauses auto-play
  const handleManualNext = () => {
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    handleNextSlide();
  };

  // Handle previous button click
  const handlePrevSlide = () => {
    if (isTransitioning) return;

    setSlideDirection('prev');
    setIsTransitioning(true);
    setHoveredCardIndex(null);
    
    const newIndex = (activeCardIndex - 1 + destinations.length) % destinations.length;
    setAnimatingCards(new Set([activeCardIndex, newIndex]));
    
    animateContentTransition(() => {
      setActiveCardIndex(newIndex);
    }, 'prev'); // Pass 'prev' direction

    setTimeout(() => {
      setIsTransitioning(false);
      setAnimatingCards(new Set());
    }, 850); // Reduced for faster, smoother transitions
  };

  // Manual previous button click - pauses auto-play
  const handleManualPrev = () => {
    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    handlePrevSlide();
  };

  // Handle card click - navigate to that card
  const handleCardClick = (positionIndex) => {
    if (isMobileView || positionIndex === 0 || isTransitioning) return;

    setIsAutoPlaying(false); // Pause auto-play when user manually navigates
    setSlideDirection('next');
    setIsTransitioning(true);
    setHoveredCardIndex(null);
    
    const newIndex = (activeCardIndex + positionIndex) % destinations.length;
    setAnimatingCards(new Set([activeCardIndex, newIndex]));
    
    animateContentTransition(() => {
      setActiveCardIndex(newIndex);
    }, 'next'); // Pass 'next' direction for card clicks

    setTimeout(() => {
      setIsTransitioning(false);
      setAnimatingCards(new Set());
    }, 850);
  };

  // Handle mouse enter on card
  const handleCardMouseEnter = (positionIndex) => {
    if (isMobileView || window.innerWidth <= 768) return;
    setHoveredCardIndex(positionIndex);
  };

  // Handle mouse leave from slider
  const handleSliderMouseLeave = () => {
    if (isMobileView || window.innerWidth <= 768) return;
    setHoveredCardIndex(null);
  };

  // Touch swipe handlers for mobile
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setIsAutoPlaying(false); // Pause auto-play on manual swipe
      handleNextSlide();
    } else if (isRightSwipe) {
      setIsAutoPlaying(false); // Pause auto-play on manual swipe
      handlePrevSlide();
    }
  };

  const visibleCards = getVisibleCards();

  // Get content class based on animation state and card position
  const getContentClassName = (shouldExpandCard, isFirstPosition) => {
    if (isMobileView) {
      return 'card-text-content content-visible';
    }

    if (!isFirstPosition) {
      return `card-text-content ${shouldExpandCard ? 'content-visible' : 'content-hidden'}`;
    }

    // For first position card during navigation
    if (isTransitioning && isFirstPosition) {
      return `card-text-content content-${contentAnimationState}`;
    }

    return `card-text-content ${shouldExpandCard ? 'content-visible' : 'content-hidden'}`;
  };

  // Get image class based on animation state and card position
  const getImageClassName = (isFirstPosition) => {
    if (isMobileView) {
      if (isTransitioning) {
        return `card-background-image image-${imageAnimationState}`;
      }
      return 'card-background-image image-visible';
    }

    // For first position card during navigation
    if (isTransitioning && isFirstPosition) {
      return `card-background-image image-${imageAnimationState}`;
    }

    return 'card-background-image image-visible';
  };

  return (
    <section className="destination-slider-section">
      <div className="container">
        {/* Header */}
        <div className="slider-header-block">
          <h2 className="slider-main-title">Find Your Next Great Story</h2>
          <p className="slider-subtitle-text">
            We've hand-picked these trending destinations for their unique culture, stunning beauty, and{" "}
            <br className="d-none d-lg-block" />
            unforgettable experiences. Where will you go next?
          </p>
        </div>

        {/* Custom Slider */}
        <div className="destination-slider-wrapper section-body-gap">
          <div
            className="slider-track-container"
            onMouseEnter={handleSliderMouseEnter}
            onMouseLeave={handleSliderMouseLeaveResume}
            onTouchStart={isMobileView ? handleTouchStart : undefined}
            onTouchMove={isMobileView ? handleTouchMove : undefined}
            onTouchEnd={isMobileView ? handleTouchEnd : undefined}
          >
            {isMobileView ? (
              // Mobile: Single card view
              <div className={`slider-card-item mobile-card-active ${isTransitioning ? `swipe-${slideDirection}` : ''}`}>
                <div className="card-inner-wrapper">
                  <img
                    ref={el => imageRefs.current['mobile'] = el}
                    src={destinations[activeCardIndex].image}
                    alt={destinations[activeCardIndex].title}
                    className={getImageClassName(true)}
                  />
                  <div className="card-gradient-overlay"></div>
                  <div className={`card-text-content content-${contentAnimationState}`}>
                    <h3 className="card-destination-title">{destinations[activeCardIndex].title}</h3>
                    <p className="card-destination-desc">{destinations[activeCardIndex].description}</p>
                  </div>
                </div>
              </div>
            ) : (
              // Desktop: 4 cards visible
              visibleCards.map((card, index) => {
                const isFirstPosition = index === 0;
                const isHoveredCard = hoveredCardIndex === index;
                const isAnyCardHovered = hoveredCardIndex !== null;
                const isAnimating = animatingCards.has(card.originalIndex);

                // If any card is hovered, only the hovered one expands
                // If no card is hovered, the first position expands
                const shouldExpandCard = isAnyCardHovered ? isHoveredCard : isFirstPosition;

                return (
                  <div
                    key={`${card.id}-${index}`}
                    className={`slider-card-item ${isFirstPosition ? 'card-position-active' : ''
                      } ${isHoveredCard ? 'card-state-hovered' : ''
                      } ${shouldExpandCard ? 'card-size-expanded' : 'card-size-shrunk'
                      } ${isAnimating && isTransitioning ? `swipe-${slideDirection}` : ''
                      }`}
                    onClick={() => handleCardClick(index)}
                    onMouseEnter={() => handleCardMouseEnter(index)}
                    style={{
                      cursor: isFirstPosition && !isAnyCardHovered ? 'default' : 'pointer'
                    }}
                  >
                    <div className="card-inner-wrapper">
                      <img
                        ref={el => imageRefs.current[`${card.id}-${index}`] = el}
                        src={card.image}
                        alt={card.title}
                        className={getImageClassName(isFirstPosition)}
                      />
                      <div className="card-gradient-overlay"></div>
                      <div 
                        ref={el => contentRefs.current[`${card.id}-${index}`] = el}
                        className={getContentClassName(shouldExpandCard, isFirstPosition)}
                      >
                        <h3 className="card-destination-title">{card.title}</h3>
                        <p className="card-destination-desc">{card.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Navigation Controls */}
          <div className="slider-navigation-controls">
            <div className="d-flex gap-4">
              <button
                className="nav-button-item nav-button-prev"
                onClick={handleManualPrev}
                disabled={isTransitioning}
                aria-label="Previous destination"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M7.99988 15H21.9999" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.5 21.25C13.5 21.25 7.25003 16.647 7.25 15C7.24999 13.353 13.5 8.75 13.5 8.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="nav-button-item nav-button-next"
                onClick={handleManualNext}
                disabled={isTransitioning}
                aria-label="Next destination"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M22.0001 15L8.00012 15" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 8.75C16.5 8.75 22.75 13.353 22.75 15C22.75 16.647 16.5 21.25 16.5 21.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <Link href="/packages" className="view-all-destinations-link">
              <p>
                View All Destinations
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;