"use client";

export default function HealBeyondMedicine() {
  return (
    <div style={styles.hero}>
      <img
        src="/assets/images/health/Doctorheader.png" // change to your image path
        alt="Doctor checkup"
        style={styles.image}
      />
      <div style={styles.overlay}>
        <h1 style={styles.heading}>
          Health That Heals Beyond <br /> Medicine
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
