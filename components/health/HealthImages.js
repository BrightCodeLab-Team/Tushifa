"use client";
import Image from "next/image";

export default function HealthImages() {
  const certificates = [
    { src: "/assets/images/health/Frame 18.png", alt: "Certificate 1" },
    { src: "/assets/images/health/Frame 19.png", alt: "Certificate 2" },
    { src: "/assets/images/health/Frame 20.png", alt: "Certificate 3" },
    { src: "/assets/images/health/Frame 21.png", alt: "Certificate 4" },
    { src: "/assets/images/health/Frame 22.png", alt: "Certificate 5" },
    { src: "/assets/images/health/Frame 23.png", alt: "Certificate 6" },
  ];

  return (
    <div className="container">
      
      {/* First Row */}
      <div className="row">
        {certificates.slice(0, 4).map((cert, index) => (
          <div key={index} className="cardsss">
            <Image src={cert.src} alt={cert.alt} width={310} height={290} />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="row center">
        {certificates.slice(4).map((cert, index) => (
          <div key={index} className="cardsss">
            <Image src={cert.src} alt={cert.alt} width={310} height={290} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1300px;
          margin: 0 auto;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .title {
          font-size: 48px;
          font-weight: bold;
          color: #223a66;
          margin-bottom: 70px;
        }

        .row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 30px;
        }

        .row.center {
          justify-content: center;
          gap: 20px;
        }

        .cardsss img {
          width: 310px;
          height: 290px;
          object-fit: cover;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}
