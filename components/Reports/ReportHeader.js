"use client";
import Image from "next/image";

export default function ReportHeader() {
  return (
    <div style={styles.hero}>
      <Image
        src="/assets/images/health/Doctorheader.png"
        alt="Doctor checkup"
        width={1920}
        height={320}
        style={styles.image}
      />
      <div style={styles.overlay}>
        <h1 style={styles.heading}>
         SAF Reports
        </h1>
      </div>
    </div>
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
