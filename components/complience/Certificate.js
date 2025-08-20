"use client";
import Image from "next/image";

export default function Certificate() {
  const certificates = [
    { src: "/assets/images/Complience/Certificate (1).png", alt: "Certificate 1" },
    { src: "/assets/images/Complience/Certificate (2).png", alt: "Certificate 2" },
    { src: "/assets/images/Complience/Certificate (2).png", alt: "Certificate 3" },
    { src: "/assets/images/Complience/Certificate (1).png", alt: "Certificate 4" },
  ];

  return (
    <div className="container">
      <h1 className="title" style={{marginTop:"70px"}}>Certificates</h1>
      <div className="row" style={{ justifyContent: "center" , gap: "50px"}}>
        {certificates.map((cert, index) => (
          <div key={index} className="cardsss">
            <Image src={cert.src} alt={cert.alt} width={420} height={500} />
            <p className="caption">Certificates</p>
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
          flex-wrap: wrap;
        }

        .cardsss {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0; /* remove gaps */
          padding: 0;
        }

        .cardsss img {
          width: 250px; /* half of container width if 2 images per row */
          height: 400px;
          object-fit: cover;
          border-radius: 40px; /* remove round edges between images */
        }

        .caption {
          margin-top: 18px;
          font-size: 22px;
          font-weight: bold;
          color: #000;
        }
      `}</style>
    </div>
  );
}
