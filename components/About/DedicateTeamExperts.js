"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamExperts() {
  const doctors = [
    {
      name: "Dr. Ayesha",
      specialty: "Pediatric Oncologist",
      description:
        "Dedicated to treating childhood cancers with a compassionate, patient-first approach.",
      image: "/assets/images/about/DrAyesh.png",
    },
    {
      name: "Dr. Ahmad Raza",
      specialty: "Hematologist",
      description:
        "Expert in diagnosing and managing blood disorders such as thalassemia and leukemia.",
      image: "/assets/images/about/DrAhmad.png",
    },
    {
      name: "Dr. Usman Farooq",
      specialty: "Internal Medicine Specialist",
      description:
        "Focused on chronic illness care and supporting long-term outpatient treatments.",
      image: "/assets/images/about/DrUmar.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#E0E0E0",
          borderRadius: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="team-container">
      <div className="header">
        <h2>Meet Our Dedicated Team Experts</h2>
        <p>
          Our passionate team of medical and tech experts works together to
          deliver ethical, efficient, and compassionate care to those who need
          it most.
        </p>
        <button className="view-btn">View All Doctors</button>
      </div>

      <Slider {...settings} className="slider">
        {doctors.map((doc, index) => (
          <div key={index} className="card">
            <Image
              src={doc.image}
              alt={doc.name}
              width={350}
              height={400}
              className="doctor-img"
            />
            <div className="card-text">
              <h3>{doc.name}</h3>
              <h4>{doc.specialty}</h4>
              <p>{doc.description}</p>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .team-container {
          max-width: 1100px;
          margin: auto;
          padding: 40px 20px;
          text-align: center;
        }

        .header {
          position: relative;
          margin-bottom: 30px;
        }

        h2 {
          font-size: 28px;
          font-weight: 700;
          color: #1a2b49;
        }

        p {
          max-width: 700px;
          margin: 10px auto 20px;
          color: #555;
          font-size: 16px;
        }

        .view-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: #e3064b;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 14px;
          cursor: pointer;
        }

        .slider {
          margin-top: 20px;
        }

        .card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          text-align: left;
          max-width: 350px;
          margin: auto;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
        }

        .doctor-img {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
          object-fit: cover;
        }

        .card-text {
          padding: 15px;
        }

        .card-text h3 {
          font-size: 16px;
          margin: 0;
        }

        .card-text h4 {
          font-size: 14px;
          color: #777;
          margin: 5px 0;
        }

        .card-text p {
          font-size: 14px;
          color: #555;
          margin-top: 10px;
        }

        :global(.slick-dots li button:before) {
          font-size: 0px;
        }

        :global(.slick-dots li.slick-active div) {
          background-color: #e3064b !important;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
