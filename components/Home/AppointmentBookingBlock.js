import React from "react";
import Image from "next/image";

const AppointmentBookingBlock = () => {
  return (
    <section style={styles.section}>
      {/* Custom placeholder style + media queries */}
      <style>
        {`
          input::placeholder,
          textarea::placeholder {
            color: #d0d5df;
            opacity: 1;
          }
          input,
          textarea {
            color: #d0d5df;
          }

          /* Tablet adjustments */
          @media (max-width: 1024px) {
            .contact-container {
              flex-direction: column;
              align-items: center;
              gap: 30px !important;
            }
            .contact-image {
              width: 80% !important;
              height: 350px !important;
              border-radius: 30px !important;
            }
            .contact-form {
              width: 80% !important;
            }
            .contact-heading {
              font-size: 40px !important;
              text-align: center;
            }
            .contact-button-row {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }
          }

          /* Mobile adjustments */
          @media (max-width: 600px) {
            .contact-image {
              width: 100% !important;
              height: 300px !important;
            }
            .contact-form {
              width: 100% !important;
            }
            .contact-heading {
              font-size: 32px !important;
            }
            .contact-button {
              width: 100% !important;
            }
            .contact-privacy {
              max-width: 100% !important;
            }
          }
        `}
      </style>

      <div style={styles.container} className="contact-container">
        {/* Doctor Image */}
        <div style={styles.imageContainer} className="contact-image">
          <Image
            src="/assets/images/doctor.png"
            alt="Doctor"
            width={550}
            height={441}
            style={styles.image}
          />
        </div>

        {/* Contact Form */}
        <div style={styles.formContainer} className="contact-form">
          <h2 style={styles.heading} className="contact-heading">Contact Us</h2>

          <input type="text" placeholder="Your name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <textarea placeholder="Your message" style={styles.textarea}></textarea>

          <div style={styles.buttonRow} className="contact-button-row">
            <button style={styles.button} className="contact-button">Contact us</button>
            <p style={styles.privacyText} className="contact-privacy">
              By clicking the Contact us button you agree to our{" "}
              <span style={styles.link}>Privacy Policy</span> terms
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#223A66", 
    padding: "50px 0",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    maxWidth: "1100px",
    width: "100%",
    alignItems: "center",
    gap: "40px",
    padding: "0 20px",
  },
  imageContainer: {
    width: "50%",
    height: "441px",
    overflow: "hidden",
    borderRadius: "50px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  heading: {
    color: "#fff",
    fontSize: "48px",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    backgroundColor: "#43587d",
  },
  textarea: {
    padding: "12px 15px",
    borderRadius: "20px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    resize: "none",
    height: "120px",
    backgroundColor: "#43587d",
  },
  buttonRow: {
    display: "flex",
    alignItems: "center",
    gap: "45px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  privacyText: {
    fontSize: "12px",
    color: "#fff",
    maxWidth: "250px",
  },
  link: {
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default AppointmentBookingBlock;