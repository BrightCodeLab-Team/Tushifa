"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { faLocationDot, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "@/utils/api";
import { useRef } from "react";

const fetcher = (url) => API.get(url).then((r) => r.data?.data || []);

// Custom navigation arrows for the slider
const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        right: "-25px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "white",
        border: "1px solid #e91e63",
        color: "#e91e63",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        zIndex: 10,
      }}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        left: "-25px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "white",
        border: "1px solid #e91e63",
        color: "#e91e63",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        zIndex: 10,
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

export default function PatientStories() {
  const { data: stories = [], isLoading } = useSWR("/patient-stories", fetcher);
  const sliderRef = useRef(null);

  if (isLoading)
    return <section style={{ padding: "2rem", textAlign: "center" }}>Loading patient stories...</section>;

  const Card = ({ story }) => (
    <div
      key={story._id}
      style={{
        width: "100%",
        maxWidth: 400,
        height: 500,
        backgroundColor: "white",
        borderRadius: "24px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
      }}
    >
      {/* Image */}
      <div style={{ height: 260, position: "relative" }}>
        <Image
          src={story.image || "/assets/images/patient.png"}
          alt={story.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1rem", height: 180, overflow: "hidden" }}>
        <h3 style={{ margin: 0, marginBottom: ".5rem", fontSize: "1.2rem" }}>{story.name}</h3>
        {story.story && (
          <p style={{ margin: "0 0 .5rem 0", color: "#555", fontSize: "0.9rem" }}>
            {story.story.length > 100 ? `${story.story.substring(0, 100)}...` : story.story}
          </p>
        )}
        {story.diagnosis && (
          <p style={{ margin: "0 0 .5rem 0", fontWeight: "bold", color: "#333" }}>
            {story.diagnosis}
          </p>
        )}
        {story.location && (
          <p style={{ margin: 0, display: "flex", alignItems: "center", color: "#777" }}>
            <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 8, color: "#e91e63" }} />
            {story.location}
          </p>
        )}
      </div>

      {/* Button */}
      <div style={{ padding: "1rem", textAlign: "start", marginTop: "auto" }}>
        <Link
          href={`/stories/${story._id}`}
          style={{
            color: "#e91e63",
            textDecoration: "none",
            fontWeight: "bold",
            border: "1px solid #e91e63",
            borderRadius: "30px",
            padding: "10px 20px",
            backgroundColor: "white",
            display: "inline-block",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#e91e63";
            e.target.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#e91e63";
          }}
        >
          Read Full Story
        </Link>
      </div>
    </div>
  );

  // Use grid if ≤ 6, else slider
  const useSlider = stories.length > 6;

  if (!useSlider) {
    return (
      <section style={{ padding: "2rem 1rem", backgroundColor: "#f9f9f9" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#333" }}>Patient&apos;s Stories</h2>
          <p style={{ color: "#666", maxWidth: 600 }}>
            Real voices from those whose lives were touched by your support.
          </p>
        </div>

        {/* Grid layout (≤ 6) */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            justifyItems: "center",
          }}
        >
          {stories.map((p) => (
            <Card key={p._id} story={p} />
          ))}
        </div>
      </section>
    );
  }

  // Group stories into slides of 6 (2 rows of 3)
  const groupedStories = [];
  for (let i = 0; i < stories.length; i += 6) {
    groupedStories.push(stories.slice(i, i + 6));
  }

  // Slider settings when > 6
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    appendDots: dots => (
      <div style={{ position: "relative", bottom: "-10px" }}>
        <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center", gap: "10px" }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div style={{
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "#ccc",
        cursor: "pointer"
      }} />
    )
  };

  return (
    <section style={{ padding: "2rem 1rem 3rem", backgroundColor: "#f9f9f9", position: "relative" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem", color: "#333" }}>Patient&apos;s Stories</h2>
        <p style={{ color: "#666", maxWidth: 600 }}>
          Real voices from those whose lives were touched by your support.
        </p>
      </div>

      {/* Slider layout (> 6) */}
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {groupedStories.map((slideStories, slideIndex) => (
            <div key={slideIndex}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "30px",
                  justifyItems: "center",
                }}
              >
                {slideStories.map((story) => (
                  <Card key={story._id} story={story} />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        /* Fix for slider dots */
        .slick-dots li {
          margin: 0;
        }
        
        .slick-dots li.slick-active div {
          background-color: #e91e63 !important;
        }
        
        .slick-dots li div:hover {
          background-color: #e91e63 !important;
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}