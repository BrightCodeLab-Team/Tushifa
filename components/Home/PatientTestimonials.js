"use client";
import testimonials from "@/utils/testimonials";
import React from "react";
import Slider from "react-slick";

const PatientTestimonials = () => {
  var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
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

  const styles = {
    headingWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
      marginBottom: "10px",
    },
    line: {
      flex: "1",
      maxWidth: "50px",
      height: "1px",
      backgroundColor: "#1e3a5f",
    },
    subHeading: {
      color: "#223a66",
      fontWeight: "600",
      fontSize: "20px",
      letterSpacing: "1px",
      whiteSpace: "nowrap",
    },
    mainHeading: {
      color: "#223a66",
      fontSize: "32px",
      fontWeight: "700",
      marginTop: "10px",
    },
  };
  return (
    <section className="section testimonial-2 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <div style={styles.headingWrapper}>
                  <span style={styles.line}></span>
                  <span style={styles.subHeading}>Testimonial</span>
                  <span style={styles.line}></span>
                </div>
                <h2 style={styles.mainHeading}>
                What Client & Patient Say
                </h2>
              </div>
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
                    <div className="client-info">
                      <div className="testimonial-thumb">
                        <img src={test.img} alt="" className="img-fluid" />
                      </div>
                      <h4>{test.title}</h4>
                      <p>{test.review}</p>
                      <span style={{fontSize:'20px',color:'black'}}>{test.reviewer}</span>
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
