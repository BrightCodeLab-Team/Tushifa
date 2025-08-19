"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import API from "@/utils/api";
import WebsiteLayout from "@/components/layouts/website";
import Image from "next/image";
import Snap from "@/components/patients/Snap";
import LifelineSection from "@/components/patients/LifeLineSection";

export default function StoryDetailPage() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    if (!id) return;
    API.get(`/patient-stories/${id}`)
      .then((res) => setPatient(res.data?.story || null))
      .catch(() => setPatient(null));
  }, [id]);

  if (!patient) return <div>Loading...</div>;
  if (!patient.fullStory) return <div>No story found for this patient.</div>;

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
        }}
      >
        <div style={{ display: "flex", width: "100%", gap: "2rem", flexWrap: "wrap" }}>
          {/* Left column: Image + Full Story under the image */}
          <div style={{ flex: "0 0 580px", maxWidth: "100%" }}>
            <Image
              src={patient.image || "/assets/images/patient.png"}
              alt={patient.name}
              width={580}
              height={620}
              style={{
                borderRadius: "45px",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            />
            <div style={{ marginTop: "1.25rem" }}>
              <p style={{ fontSize: "1rem", lineHeight: "1.8", whiteSpace: "pre-line" }}>
                {patient.fullStory}
              </p>
            </div>
          </div>

          {/* Right column: Title, diagnosis, location, short story */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h1 style={{ color: "#002568", fontSize: "3rem", marginBottom: "1rem" }}>
              {patient.name}
            </h1>
            {patient.diagnosis && (
              <p style={{ color: "#e91e63", fontSize: "1.2rem", fontWeight: "bold" }}>
                {patient.diagnosis}
              </p>
            )}
            {patient.location && (
              <p style={{ color: "#555", fontSize: "1rem", marginTop: "0.5rem" }}>
                {patient.location}
              </p>
            )}
            {patient.story && (
              <blockquote
                style={{
                  marginTop: "1.25rem",
                  fontStyle: "italic",
                  color: "#333",
                  borderLeft: "4px solid #e91e63",
                  paddingLeft: "12px",
                }}
              >
                “{patient.story}”
              </blockquote>
            )}
          </div>
        </div>

        {patient.description && (
          <div style={{ marginTop: "2rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: "1.8" }}>{patient.description}</p>
          </div>
        )}
      </div>
      <Snap />
      <LifelineSection />
    </WebsiteLayout>
  );
}