"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Team() {
  const doctors = [
    {
      name: "Dr. Ayesha",
      title: "Pediatric Oncologist",
      desc: "Dedicated to treating childhood cancers with a compassionate, patient-first approach.",
      img: "/assets/images/about/Doctor (1).png",
    },
    {
      name: "Dr. Ahmad Raza",
      title: "Hematologist",
      desc: "Expert in diagnosing and managing blood disorders such as thalassemia and leukemia.",
      img: "/assets/images/about/Doctor (2).png",
    },
    {
      name: "Dr. Usman Farooq",
      title: "Internal Medicine Specialist",
      desc: "Focused on chronic illness care and supporting long-term outpatient treatments.",
      img: "/assets/images/about/Doctor (3).png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div style={{ bottom: "-30px" }}>
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "#e63946", // dot color
        }}
      ></div>
    ),
  };

  return (
    <div style={styles.container}>
      {/* Left-aligned heading section */}
      <div style={styles.headerSection}>
        <div>
          <h2 style={styles.heading}>Meet Our Dedicated Team Experts</h2>
        <p style={styles.subHeading}>
  <span style={{ whiteSpace: "nowrap" }}>
    Our passionate team of medical and tech experts works together to deliver ethical, efficient,
  </span>
  <br />
  and compassionate care to those who need it most.
</p>
        </div>
        <button style={styles.btn}>View All Doctors</button>
      </div>

      {/* Slider */}
      <Slider {...settings} style={styles.slider}>
        {doctors.map((doc, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.imageWrapper}>
              <Image
                src={doc.img}
                alt={doc.name}
                width={380}
                height={450}
                style={{ borderRadius: "40px", objectFit: "cover" }}
              />
              <div style={styles.overlay}>
                <h3 style={styles.name}>{doc.name}</h3>
                <p style={styles.title}>{doc.title}</p>
                <p style={styles.desc}>{doc.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 20px",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  heading: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#1d3557",
    margin: "0 0 10px 0",
  },
  subHeading: {
    fontSize: "18px",
    color: "#000000",
    maxWidth: "600px",
    margin: "0",
  },
  btn: {
    backgroundColor: "#e12454",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  slider: {
    padding: "20px 0",
  },
  card: {
    padding: "40px",
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    display: "inline-block",
    borderRadius: "28px",
  },
  overlay: {
    position: "absolute",
    bottom: "15px", // more gap from bottom
    left: "50%",
    width:"320px",
    transform: "translateX(-50%)",
    background: "#fff",
    padding: "14px 18px",
    borderRadius: "20px", // bigger radius
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    maxWidth: "85%",
    textAlign: "start",
  },
  name: {
    fontSize: "16px",
    fontWeight: "600",
    margin: "0",
  },
  title: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#000000",
    margin: "4px 0 6px",
  },
  desc: {
    fontSize: "12px",
    fontWeight: "400",
    color: "#000000",
    margin: "0",
    lineHeight: "1.4",
  },
};
