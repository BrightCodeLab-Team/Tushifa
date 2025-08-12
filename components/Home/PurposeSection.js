import React from "react";

export default function PurposeSection() {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "60px 20px" }}>
      {/* Responsive Styles */}
      <style>
        {`
          @media (max-width: 992px) {
            .purpose-main-heading {
              font-size: 28px !important;
            }
            .purpose-sub-heading {
              font-size: 18px !important;
            }
            .purpose-card {
              width: 320px !important;
              height: auto !important;
              padding: 25px !important;
            }
          }
          @media (max-width: 768px) {
            .purpose-main-heading {
              font-size: 24px !important;
              text-align: center;
            }
            .purpose-sub-heading {
              font-size: 16px !important;
              text-align: center;
            }
            .purpose-card {
              width: 100% !important;
              max-width: 350px !important;
              margin: 0 auto;
            }
          }
          @media (max-width: 480px) {
            .purpose-main-heading {
              font-size: 20px !important;
            }
            .purpose-sub-heading {
              font-size: 14px !important;
            }
            .purpose-card {
              padding: 20px !important;
            }
            .purpose-card-title {
              font-size: 20px !important;
            }
            .purpose-card-text {
              font-size: 14px !important;
            }
            .purpose-button {
              width: 100% !important;
              font-size: 13px !important;
            }
          }
        `}
      </style>

      {/* Heading Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={styles.headingWrapper}>
          <span style={styles.line}></span>
          <span style={{ ...styles.subHeading }} className="purpose-sub-heading">
            OUR PURPOSE, OUR PROMISE
          </span>
          <span style={styles.line}></span>
        </div>
        <h2
          style={{ ...styles.mainHeading }}
          className="purpose-main-heading"
        >
          Clear goals. True care. Real values.
        </h2>
      </div>

      {/* Cards Section */}
      <div style={styles.cardsWrapper}>
        {/* Vision Card */}
        <div style={{ ...styles.card }} className="purpose-card">
          <div style={styles.dot}></div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle} className="purpose-card-title">Vision</h3>
            <p style={styles.cardText} className="purpose-card-text">
              A healthier future begins with a clear vision — one that puts people first.
            </p>
          </div>
          <button style={styles.button} className="purpose-button">See Our Vision</button>
        </div>

        {/* Mission Card */}
        <div style={{ ...styles.card }} className="purpose-card">
          <div style={styles.dot}></div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle} className="purpose-card-title">Mission</h3>
            <p style={styles.cardText} className="purpose-card-text">
              Driven by care, guided by innovation — our mission is your well-being.
            </p>
          </div>
          <button style={styles.button} className="purpose-button">Explore Our Mission</button>
        </div>

        {/* Core Value Card */}
        <div style={{ ...styles.card }} className="purpose-card">
          <div style={styles.dot}></div>
          <div style={styles.cardContent}>
            <h3 style={styles.cardTitle} className="purpose-card-title">Core Value</h3>
            <p style={styles.cardText} className="purpose-card-text">
              What we believe shapes how we care. Discover the values that define us.
            </p>
          </div>
          <button style={styles.button} className="purpose-button">View Our Values</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  headingWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  line: {
    flex: "1",
    maxWidth: "50px",
    height: "1px",
    backgroundColor: "#1e3a5f",
  },
  subHeading: {
    color: "#223a66",
    fontWeight: "600",
    fontSize: "20px",
    letterSpacing: "1px",
    whiteSpace: "nowrap",
  },
  mainHeading: {
    color: "#223a66",
    fontSize: "32px",
    fontWeight: "700",
    marginTop: "10px",
  },
  cardsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    width: "380px",
    height: "282px",
    borderRadius: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    position: "relative",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dot: {
    width: "16px",
    height: "16px",
    backgroundColor: "#e12454",
    borderRadius: "50%",
    position: "absolute",
    top: "20px",
    left: "20px",
  },
  cardContent: {
    marginTop: "40px",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#333",
    lineHeight: "1.6",
    marginBottom: "0",
  },
  button: {
    border: "1px solid #e12454",
    backgroundColor: "transparent",
    color: "#e12454",
    height: "48px",
    width: "180px",
    borderRadius: "20px",
    fontSize: "14px",
    cursor: "pointer",
    fontWeight: "500",
    alignSelf: "flex-end",
  },
};