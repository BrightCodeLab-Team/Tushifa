import React from "react";

const PerformanceSnapshot = () => {
  return (
    <section style={styles.section}>
      {/* Internal media queries */}
      <style>
        {`
          @media (max-width: 1024px) {
            .valuesRow {
              gap: 150px !important;
            }
            .labelsRow {
              gap: 180px !important;
            }
            .statValue {
              font-size: 56px !important;
            }
            .statLabel {
              font-size: 20px !important;
            }
          }

          @media (max-width: 768px) {
            .valuesRow {
              gap: 80px !important;
            }
            .labelsRow {
              gap: 90px !important;
            }
            .statValue {
              font-size: 42px !important;
            }
            .statLabel {
              font-size: 18px !important;
            }
          }

          @media (max-width: 480px) {
            .valuesRow {
              flex-direction: column;
              gap: 20px !important;
              align-items: center;
            }
            .labelsRow {
              flex-direction: column;
              gap: 10px !important;
              align-items: center;
            }
            .statValue {
              font-size: 36px !important;
            }
            .statLabel {
              font-size: 16px !important;
            }
          }
        `}
      </style>

      <div style={styles.wrapper}>
        <h4 style={styles.heading}>Our Ongoing Impact</h4>
        <h5>
          Every number represents a life touched, a story shared, and a step
          closer to health and hope.
        </h5>
        {/* Values Row */}
        <div style={{ ...styles.valuesRow }} className="valuesRow">
          <div style={{ ...styles.statValue }} className="statValue">
            2500k +
          </div>
          <div style={{ ...styles.statValue }} className="statValue">
            98%
          </div>
          <div style={{ ...styles.statValue }} className="statValue">
            40 +
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Labels Row */}
        <div style={{ ...styles.labelsRow }} className="labelsRow">
          <div style={{ ...styles.statLabel }} className="statLabel">
            Investments
          </div>
          <div style={{ ...styles.statLabel }} className="statLabel">
            Satisfied Users
          </div>
          <div style={{ ...styles.statLabel }} className="statLabel">
            Projects
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
  },
  wrapper: {
    maxWidth: "100%",
    margin: "0 auto",
    padding: "70px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#223a66",
    marginBottom: "10px",
    textAlign: "left",
    lineHeight: "1.4",
  },
  valuesRow: {
    display: "flex",
    justifyContent: "center",
    gap: "320px",
    marginBottom: "10px",
    marginTop:"40px"
  },
  statValue: {
    fontSize: "52px",
    fontWeight: "700",
    color: "#223a66",
  },
  divider: {
    height: "1px",
    backgroundColor: "#ccc",
    width: "100%",
    margin: "20px 0",
  },
  labelsRow: {
    display: "flex",
    justifyContent: "center",
    gap: "350px",
  },
  statLabel: {
    fontSize: "20px",
    color: "#223a66",
    textAlign: "center",
    fontWeight: "500",
  },
};

export default PerformanceSnapshot;