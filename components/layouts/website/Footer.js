"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const footerStyles = {
    backgroundColor: "#f8f8f8",
    padding: isMobile ? "20px" : "40px 60px 20px",
    borderTop: "1px solid #e6e6e6",
    fontFamily: "'Arial', sans-serif",
  };

  const gridContainerStyles = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1.5fr",
    gap: isMobile ? "30px" : "40px",
    alignItems: "start",
  };

  const sectionHeadingStyles = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "20px",
    color: "#000",
  };

  const socialIconLinkStyles = {
    display: "inline-block",
    width: "40px",
    height: "40px",
    background: "#E6EAF0",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "40px",
    fontSize: "18px",
    color: "#1746A2",
  };

  const copyrightStyles = {
    borderTop: "1px solid #ccc",
    marginTop: "30px",
    paddingTop: "10px",
    textAlign: "start",
    fontSize: "14px",
    color: "black",
  };

  return (
    <footer style={footerStyles}>
      <div style={gridContainerStyles}>
        {/* Logo & Description */}
        <div>
          <Image
            src="/assets/images/logo.png"
            alt="Tushifa Logo"
            width={60}
            height={60}
            style={{ height: "auto", marginBottom: "10px" }}
          />
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.5",
              color: "#000",
              marginBottom: "20px",
              maxWidth: isMobile ? "none" : "320px",
            }}
          >
            Tushifa is a pioneering healthcare platform dedicated to
            revolutionizing patient care and management. We strive to empower
            individuals and healthcare providers alike, ensuring optimal health
            outcomes and well-being for all
          </p>
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
                style={socialIconLinkStyles}
              >
                <i className="icofont-facebook"></i>
              </a>
            </li>
            <li style={{ marginRight: "10px" }}>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconLinkStyles}
              >
                <i className="icofont-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconLinkStyles}
              >
                <i className="icofont-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 style={sectionHeadingStyles}>Links</h4>
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
          <h4 style={sectionHeadingStyles}>Support</h4>
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
              )
            )}
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 style={sectionHeadingStyles}>Get In Touch</h4>
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
                  +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div style={copyrightStyles}>
        © Copyright Tushifa. All Rights Reserved
      </div>
    </footer>
  );
}