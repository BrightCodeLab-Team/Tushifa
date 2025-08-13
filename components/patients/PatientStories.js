"use client";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link"; // Import the Link component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

const PatientStories = () => {
  const stories = [
    {
      id: 1,
      name: "Ilyas",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 2,
      name: "Abubakkar",
      age: "10-year-old",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 3,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 4,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 5,
      name: "Ilyas",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 6,
      name: "Abubakkar",
      age: "10-year-old",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 7,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 8,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 9,
      name: "Ilyas",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 10,
      name: "Abubakkar",
      age: "10-year-old",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 11,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
    {
      id: 12,
      name: "Patient Name",
      diagnosis: "Thalassemia",
      location: "Peshawar, Pakistan",
      quote: "Tushifa gave me hope when I had none.",
      image: "/assets/images/patient.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
          slidesPerRow: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{
        padding: "2rem",
        paddingTop: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h2>Patient's Stories</h2>
          <p>
            Real voices from those whose lives were touched by your support.
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#e91e63",
            color: "white",
            border: "none",
            padding: "0.75rem 1.5rem",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          View All Doctors
        </button>
      </div>
      <div style={{ margin: "0 -10px" }}>
        <Slider {...settings}>
          {stories.map((story) => (
            <div key={story.id} style={{ padding: "0 10px" }}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "48px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  marginBottom: "20px",
                  marginLeft: "20px ",
                }}
              >
                <div style={{ height: "296px" }}>
                  <img
                    src={story.image}
                    alt={story.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ margin: "0 0 0.5rem 0" }}>
                    {story.name}{" "}
                    {story.age && (
                      <span style={{ fontWeight: "normal" }}>{story.age}</span>
                    )}
                  </h3>
                  <p style={{ margin: "0 0 0.5rem 0" }}>{story.quote}</p>
                  <p style={{ margin: "0 0 0.5rem 0" }}>{story.diagnosis}</p>
                  <p
                    style={{
                      margin: "0 0 0.5rem 0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      style={{ marginRight: "8px" }}
                    />
                    {story.location}
                  </p>
                </div>
                <div style={{ padding: "1rem", textAlign: "start" }}>
                  <Link
                    href={`/stories/${story.id}`}
                    style={{
                      color: "#e91e63",
                      textDecoration: "none",
                      fontWeight: "bold",
                      border: "1px solid #e91e63",
                      borderRadius: "30px",
                      padding: "10px 20px",
                      backgroundColor: "white",
                      display: "inline-block",
                    }}
                  >
                    Read Full Story
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PatientStories;