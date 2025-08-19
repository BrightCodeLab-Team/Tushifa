"use client";
import WebsiteLayout from "@/components/layouts/website";
import Image from "next/image";

export default function ReportHeader() {
  return (
    <WebsiteLayout>
      <div style={styles.hero}>
        <Image
          src="/assets/images/health/Doctorheader.png"
          alt="Doctor checkup"
          style={styles.image}
          width={1920}
          height={320}
        />
        <div style={styles.overlay}>
          <h1 style={styles.heading}>Will Start Soon</h1>
        </div>
      </div>
    </WebsiteLayout>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "320px", // adjust as needed
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  heading: {
    color: "#fff",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "1.3",
  },
};