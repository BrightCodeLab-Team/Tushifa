"use client";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import API from "@/utils/api";

const fetcher = (url) => API.get(url).then((r) => r.data?.data || []);

export default function PatientStories() {
  const { data: stories = [], isLoading } = useSWR("/patient-stories", fetcher);

  if (isLoading)
    return <section style={{ padding: "2rem" }}>Loading...</section>;

  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          marginLeft: "30px",
        }}
      >
        <div>
          <h2>Patient&apos;s Stories</h2>
          <p>
            Real voices from those whose lives were touched by your support.
          </p>
        </div>
      </div>

      {(() => {
        const useSlider = stories.length > 6;

        const Card = ({ story }) => (
          <div
            key={story._id}
            style={{
              width: 380,
              height: 500,
              backgroundColor: "white",
              borderRadius: "24px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              marginLeft: "30px",
            }}
          >
            <div style={{ height: 260 }}>
              <Image
                src={story.image || "/assets/images/patient.png"}
                alt={story.name}
                width={800}
                height={600}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "1rem", height: 180, overflow: "hidden" }}>
              <h3 style={{ margin: 0, marginBottom: ".5rem" }}>{story.name}</h3>
              {story.story && (
                <p style={{ margin: "0 0 .5rem 0" }}>{story.story}</p>
              )}
              {story.diagnosis && (
                <p style={{ margin: "0 0 .5rem 0" }}>{story.diagnosis}</p>
              )}
              {story.location && (
                <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
                  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: 8 }} />
                  {story.location}
                </p>
              )}
            </div>
            <div style={{ padding: "1rem", textAlign: "start" }}>
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
                }}
              >
                Read Full Story
              </Link>
            </div>
          </div>
        );

        if (!useSlider) {
          return (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 300px)",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {stories.map((p) => (
                <Card key={p._id} story={p} />
              ))}
            </div>
          );
        }

        const settings = {
          infinite: false,
          rows: 2,
          slidesPerRow: 3,
          slidesToShow: 1,
          slidesToScroll: 1 ,
          arrows: false,
          dots: true,
          adaptiveHeight: true,
          responsive: [
            { breakpoint: 1024, settings: { rows: 3, slidesPerRow: 2, slidesToShow: 1 } },
            { breakpoint: 768, settings: { rows: 3, slidesPerRow: 1, slidesToShow: 1 } },
          ],
        };

        return (
          <div style={{ margin: "0 -10px" }}>
            <Slider {...settings}>
              {stories.map((p) => (
                <div key={p._id} style={{ padding: 10, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Card story={p} />
                </div>
              ))}
            </Slider>
          </div>
        );
      })()}
    </section>
  );
}
