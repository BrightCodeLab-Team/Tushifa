import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#fff",
        padding: "40px 60px 20px",
        borderTop: "1px solid #e6e6e6",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "40px",
          alignItems: "start",
        }}
      >
        {/* Logo & Description */}
        <div>
          <img
            src="/assets/images/logo.png"
            alt="Tushifa Logo"
            style={{ width: "60px", height: "auto", marginBottom: "10px" }}
          />
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#000",
              marginBottom: "20px",
              maxWidth: "320px",
            }}
          >
            Tushifa is a pioneering healthcare platform dedicated to
            revolutionizing patient care and management. We strive to empower
            individuals and healthcare providers alike, ensuring optimal health
            outcomes and well-being for all
          </p>

          {/* Social Icons */}
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              padding: 0,
              marginTop: "20px",
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  background: "#E6EAF0",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  fontSize: "18px",
                  color: "#1746A2",
                }}
              >
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  background: "#E6EAF0",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  fontSize: "18px",
                  color: "#1746A2",
                }}
              >
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  background: "#E6EAF0",
                  borderRadius: "50%",
                  textAlign: "center",
                  lineHeight: "40px",
                  fontSize: "18px",
                  color: "#1746A2",
                }}
              >
                <i className="icofont-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "20px",
              color: "#000",
            }}
          >
            Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {["Compliance", "Report", "Our Projects", "Education", "Water"].map(
              (link) => (
                <li
                  key={link}
                  style={{
                    marginBottom: "10px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "20px",
              color: "#000",
            }}
          >
            Support
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "About Us",
              "Contact Us",
              "Privacy Policy",
              "Terms & Condition",
              "Company License",
            ].map((link) => (
              <li
                key={link}
                style={{
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "black",
                }}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "20px",
              color: "#000",
            }}
          >
            Get In Touch
          </h4>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="icofont-envelope"
                style={{
                  fontSize: "20px",
                  color: "#1746A2",
                  marginRight: "10px",
                }}
              ></i>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "#1746A2",
                  }}
                >
                  Support Available for 24/7
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  offical@tushifa.org
                </p>
              </div>
            </div>
          </div>

          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="icofont-phone"
                style={{
                  fontSize: "20px",
                  color: "#1746A2",
                  marginRight: "10px",
                }}
              ></i>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "#1746A2",
                  }}
                >
                  Mon to Fri : <br /> 08:30 AM - 6:00 PM
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  offical@tushifa.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div
        style={{
          borderTop: "1px solid #ccc",
          marginTop: "30px",
          paddingTop: "10px",
          textAlign: "start",
          fontSize: "22px",
          color: "black",
        }}
      >
        © Copyright Tushifa. All Rights Reserved
      </div>
    </footer>
  );
}
