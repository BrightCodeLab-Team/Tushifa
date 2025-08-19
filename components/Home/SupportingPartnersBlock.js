import React from "react";
import Image from "next/image";

const SupportingPartnersBlock = () => {
  return (
    <section className="section clients">
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <div style={styles.headingWrapper}>
          <span style={styles.line}></span>
          <span style={styles.subHeading}>Our Trusted Partners</span>
          <span style={styles.line}></span>
        </div>
        <h2 style={styles.mainHeading}>
          Together, we’re building better health solutions
        </h2>
      </div>

      <div className="container">
        <div className="row clients-logo">
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/1.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/2.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/3.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/4.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/5.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="client-thumb">
              <Image src="/assets/images/about/6.png" alt="" className="img-fluid" width={120} height={60} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
};

export default SupportingPartnersBlock;