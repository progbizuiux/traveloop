"use client";
import React, { useRef } from "react";
import "@/styles/components/bento.scss";
import Image from "next/image";

const TravelersAdventuresCreative = () => {
  const sectionRef = useRef(null);

  return (
    <section className="travelers-section py-5" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="section-title mb-3">See Our Travelers&apos; Adventures</h2>
          <p className="section-subtitle">
            Get inspired by these real, unfiltered moments captured by the Travel Loop community on their journeys
            <br />
            around the world. Your next great memory is waiting to be made.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid section-body-gap">
          <div className="row g-3 g-md-4">

            {/* Column 1 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <Image
                      src="/bento/adventure-videos.png"
                      alt="Hiker on mountain trail"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="bento-item bento-medium">
                    <Image
                      src="/bento/three.png"
                      alt="Traveler at tropical beach"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="row g-3 g-md-4">
                <div className="col-12">
                  <div className="bento-item bento-medium">
                    <Image
                      src="/bento/two.png"
                      alt="Ancient temple"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <Image
                      src="/bento/four.png"
                      alt="Safari adventure"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                <div className="col-12">
                  <div className="bento-item bento-medium">
                    <Image
                      src="/bento/five.png"
                      alt="City skyline at sunset"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <Image
                      src="/bento/six.png"
                      alt="Mountain hiking trail"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="row g-3 g-md-4">
                
                <div className="col-12">
                  <div className="bento-item bento-tall">
                    <Image
                      src="/bento/eight.png"
                      alt="City street exploration"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="bento-item bento-medium">
                    <Image
                      src="/bento/seven.png"
                      alt="Couple exploring with map"
                      className="bento-img"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelersAdventuresCreative;
