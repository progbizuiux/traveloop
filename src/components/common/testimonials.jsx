"use client";
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "@/styles/components/testimonial.scss";
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    title: '"All-In-One" Seamless Experience!!',
    text: 'Booking My Entire European Tour Through Travel Loops Was The Best Decision We Made. They Handled Our Flights, The Complex Schengen Visas, And Every Single Hotel. We Didn\'t Have To Worry About A Thing Except Enjoying The Trip. Truly A Seamless, All-In-One Service!',
    author: 'Sarah & Mark T.',
    location: 'Toronto, Canada',
    avatar: '/avatars/sarah.jpg'
  },
  {
    id: 2,
    title: 'Loved Kenya For A Reason',
    text: '"Our Kenya Safari Was The Trip Of A Lifetime. Travel Loops Itinerary Was Perfect, And Our Local Guide Was Incredible—So Knowledgeable And Friendly! Seeing The Big 5 In The Maasai Mara Is Something We Will Never Forget. 10/10 Would Recommend!"',
    author: 'James P.',
    location: 'Dubai, UAE',
    avatar: '/avatars/james.jpg'
  },
  {
    id: 3,
    title: 'They Completed Me !!',
    text: '"My Honeymoon In Maldives Was Magical! Thanks By Airline At 2 AM, I Frantically Called The Travel Loops Support Number, And Someone Actually Answered! They Had Us Re-Booked On A Red-Eye Within An Hour. That 24/7 Support Is No Joke. I\'ll Never Trust Another Agency Again."',
    author: 'Aisha K.',
    location: 'London, UK',
    avatar: '/avatars/aisha.jpg'
  },
  {
    id: 4,
    title: 'Amazing Experience!',
    text: '"The attention to detail was incredible. Every aspect of our trip was perfectly planned and executed. The local guides were knowledgeable and friendly. We can\'t wait to book our next adventure!"',
    author: 'Michael R.',
    location: 'New York, USA',
    avatar: '/avatars/michael.jpg'
  },
  {
    id: 5,
    title: 'Best Trip Ever!',
    text: '"From start to finish, everything was handled professionally. The accommodations were excellent, and the itinerary was perfectly paced. Highly recommended for anyone looking for a stress-free travel experience."',
    author: 'Emma L.',
    location: 'Sydney, Australia',
    avatar: '/avatars/emma.jpg'
  },
  {
    id: 6,
    title: 'Unforgettable Journey',
    text: '"The team went above and beyond to make our anniversary trip special. Every detail was thoughtfully arranged, and we felt taken care of throughout. This is how travel should be!"',
    author: 'David & Lisa M.',
    location: 'Paris, France',
    avatar: '/avatars/david.jpg'
  }
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="testimonials-section container-fluid">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Stories From Our Travelers</h2>
        <div className="embla__buttons">
          <button
            className="embla__button"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            aria-label="Previous testimonial"
          >
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path
    d="M8 14.9998H22"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M13.5 21.25C13.5 21.25 7.25003 16.647 7.25 15C7.24999 13.353 13.5 8.75 13.5 8.75"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

          </button>
          <button
            className="embla__button"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            aria-label="Next testimonial"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path
    d="M22 15.0002L8 15.0002"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M16.5 8.75C16.5 8.75 22.75 13.353 22.75 15C22.75 16.647 16.5 21.25 16.5 21.25"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

          </button>
        </div>
      </div>

      <div className="testimonials-embla">
        <div className="testimonials-embla__viewport" ref={emblaRef}>
          <div className="testimonials-embla__container">
            {testimonials.map((testimonial) => (
              <div className="testimonials-embla__slide" key={testimonial.id}>
                <div className="testimonial-card">
                  <h3 className="testimonial-card__title">
                    {testimonial.title}
                  </h3>
                  <p className="testimonial-card__text">
                    {testimonial.text}
                  </p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      <Image
                        width={500}
                        height={500}
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = testimonial.author.charAt(0);
                        }}
                      />
                    </div>
                    <div className="testimonial-card__author-info">
                      <div className="testimonial-card__author-name">
                        {testimonial.author}
                      </div>
                      <div className="testimonial-card__author-location">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="testimonials-embla__dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonials-embla__dot ${
              index === selectedIndex ? 'testimonials-embla__dot--selected' : ''
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};