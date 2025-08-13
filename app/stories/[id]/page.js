"use client";
import React from "react";
import Snap from "@/components/patients/Snap";
import LifelineSection from "@/components/patients/LifeLineSection";
import WebsiteLayout from "@/components/layouts/website";

const stories = [
  {
    id: 1,
    name: "Ilyas",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 2,
    name: "Abubakkar",
    age: "10-year-old",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Abubakkar's story is a testament to the power of community. At just 10 years old, he faced a life-altering diagnosis, but the kindness of strangers has made all the difference. He now looks forward to a future filled with possibility, all thanks to the unwavering support from Tushifa’s donors. Every contribution helps him and other children like him receive the necessary treatments and care, giving them a chance to live a normal life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 3,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 4,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 5,
    name: "Ilyas",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 6,
    name: "Abubakkar",
    age: "10-year-old",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 7,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 8,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 9,
    name: "Ilyas",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 10,
    name: "Abubakkar",
    age: "10-year-old",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 11,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
  {
    id: 12,
    name: "Patient Name",
    diagnosis: "Thalassemia",
    location: "Peshawar, Pakistan",
    quote: "Tushifa gave me hope when I had none.",
    image: "/assets/images/patient.png",
    fullStory:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
    discription:
      "Ilyas, a courageous young boy from Peshawar, Pakistan, was diagnosed with Thalassemia at a young age. The journey has been challenging, but thanks to the support of Tushifa and generous donors, he has received the care he needs. His story is one of hope and resilience, proving that with the right help, every child can have a chance at a brighter future. Your support is crucial for children like Ilyas to continue their treatment and live a full life.",
  },
];

const StoryDetailPage = ({ params }) => {
  const storyId = parseInt(params.id);
  const story = stories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "24px",
          color: "red",
        }}
      >
        Story not found.
      </div>
    );
  }

  return (
    <WebsiteLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          maxWidth: "1200px",
          margin: "auto",
          gap: "2rem",
          "@media (min-width: 768px)": {
            flexDirection: "row",
            padding: "4rem",
          },
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <img
            src={story.image}
            alt={story.name}
            style={{
              width: "580px",
              height: "620px",
              borderRadius: "45px",
              objectFit: "cover",
            }}
          />
          <div style={{ flex: 1, padding: "1rem" }}>
            <h1
              style={{
                color: "#002568",
                fontSize: "3.5rem",
                marginBottom: "1rem",
              }}
            >
              {story.name}
            </h1>
            <p
              style={{
                color: "#e91e63",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              {story.diagnosis}
            </p>
            <p style={{ color: "#555", fontSize: "1rem", marginTop: "0.5rem" }}>
              {story.location}
            </p>
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
                {story.fullStory}
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>
            {story.discription}
          </p>
        </div>
      </div>
      <Snap />
      <LifelineSection />
    </WebsiteLayout>
  );
};

export default StoryDetailPage;