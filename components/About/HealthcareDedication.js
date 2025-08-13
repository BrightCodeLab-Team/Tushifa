"use client";
import Image from "next/image";

export default function HealthcareDedication() {
  return (
    <div className="container">
      <div className="textSection">
        <h2 className="heading">
          Dedicated to Your <br />
          Healthcare, Driven <br />
          by Purpose
        </h2>
        <p className="paragraph">
          "Providing compassionate, patient-centered care through transparent
          systems and innovative, tech-enabled solutions — ensuring dignity,
          accessibility, and trust at every step of the healthcare journey."
          Let me know if you’d like it to sound more formal, emotional, or
          faith-aligned.
        </p>
      </div>

      <div className="imageSection">
        <Image
          src="/assets/images/about/DedicatedHealthCare.png"
          alt="Dedicated Healthcare"
          width={500}
          height={580}
          className="image"
        />
      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 80px;
          margin-top: 50px;
          padding: 40px 20px; /* reduced left/right padding */
          background-color: #f8f9fa;
        }
        .textSection {
          flex: 1;
        }
        .heading {
          font-size: 48px;
          font-weight: 700;
          color: #223a66;
          line-height: 1.3;
          margin-bottom: 20px;
          margin-top: -100px;
        }
        .paragraph {
          font-size: 22px;
          color: #000000;
          font-weight: 400;
          line-height: 1.6;
          max-width: 600px;
        }
        .imageSection {
          flex-shrink: 0;
        }
        .image {
          width: 500px !important;
          height: 520px !important;
          border-radius: 16px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}
