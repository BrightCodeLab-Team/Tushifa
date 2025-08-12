"use client";
import testimonials from "@/utils/testimonials";
import React from "react";
import Slider from "react-slick";

const PatientTestimonials = () => {
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2>We served over 500+ Patients</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                Having attended to the needs of 500+ patients, we continue to
                uphold our promise of excellence and personalized care in every
                interaction
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 testimonial-wrap-2">
            <Slider {...settings}>
              {testimonials.map((test, index) => (
                <div className="px-2" key={index}>
                  <div
                    className="testimonial-block style-2 gray-bg"
                    key={index}
                  >
                    <div className="testimonial-thumb">
                      <img src={test.img} alt="" className="img-fluid" />
                    </div>

                    <div className="client-info">
                      <h4>{test.title}</h4>
                      <span>{test.reviewer}</span>
                      <p>{test.review}</p>
                    </div>
                    <i className="icofont-quote-right"></i>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
