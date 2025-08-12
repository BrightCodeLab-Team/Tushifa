"use client";

import testimonials from "@/utils/testimonials";
import React from "react";
import Slider from "react-slick";

const AboutTestimonialsBlock = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="section-title">
              <h2 className="mb-4">What they say about us</h2>
              <div className="divider my-4"></div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 testimonial-wrap offset-lg-6">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div className="testimonial-block" key={index}>
                  <div className="client-info">
                    <h4>{item.title}</h4>
                    <span>{item.reviewer}</span>
                  </div>
                  <p className="bg-transparent">{item.review}</p>
                  <i className="icofont-quote-right"></i>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialsBlock;
