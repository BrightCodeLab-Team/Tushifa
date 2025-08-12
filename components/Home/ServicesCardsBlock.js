"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const services = [
  {
    title: "Laboratory services",
    desc: "Precision diagnostics for informed healthcare decisions.",
    icon: "/assets/images/svg/lab.png",
  },
  {
    title: "Heart Disease",
    desc: "Comprehensive care for heart health and vitality.",
    icon: "/assets/images/svg/heart.png",
  },
  {
    title: "Dental Care",
    desc: "Transforming smiles with expert dental solutions.",
    icon: "/assets/images/svg/dental.png",
  },
  {
    title: "Body Surgery",
    desc: "Enhancing lives through advanced surgical interventions.",
    icon: "/assets/images/svg/body.png",
  },
];

export default function ServicesCardsBlock() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots-custom"> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className=" bg-light" style={{ padding: "100px 20px" }}>
      <div className=" text-center">
        <h6 className="text-uppercase text-[#223A66] mb-2">Our Services</h6>
        <h2 className="fw-bold mb-5 text-[#223A66]">
          Expert Care, Tailored to You
        </h2>

        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-3">
              <div className="service-card text-center p-4 h-100">
                <div className="icon-wrapper mb-3 ">
                  <Image
                    className="icon-img"
                    src={service.icon}
                    alt={service.title}
                    width={60}
                    height={60}
                  />
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="mb-4">{service.desc}</p>
                <button className="btn view-more-btn rounded-pill px-4 py-2">
                  View More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .icon-wrapper {
          display: flex;
          justify-content: center;
        }
        .service-card {
          background: #fff;
          border-radius: 20px;
          transition: all 0.3s ease-in-out;
          height: 282px;
          width: 283px;
        }
        .service-card:hover {
          background: #223a66;
          color: #fff;
        }
        .service-card:hover h5,
        .service-card:hover p {
          color: #fff;
        }
        .view-more-btn {
          border: 1px solid #e91e63;
          color: #e91e63;
          font-weight: 500;
          transition: all 0.3s ease-in-out;
        }
        .service-card:hover .view-more-btn {
          border-color: #fff;
          color: #fff;
        }
        .slick-dots-custom {
          display: flex !important;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .slick-dots-custom li button:before {
          font-size: 0;
        }
        .slick-dots-custom li button {
          width: 20px;
          height: 6px;
          background: #e91e63;
          border-radius: 10px;
          transition: all 0.3s;
        }
        .slick-dots-custom li.slick-active button {
          width: 35px;
          background: #223a66;
        }
      `}</style>
    </section>
  );
}
