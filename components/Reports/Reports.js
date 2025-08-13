"use client";

export default function Reports() {
  const certificates = [
    { src: "/assets/images/Reports/Frame 10.png", alt: "Certificate 1" ,  title: "View Donor Reports" },
    { src: "/assets/images/Reports/Frame 11.png", alt: "Certificate 2" , title: "View annual Reports" },

  ];

  return (
    <div className="container">
      <h1 className="title" style={{marginTop:"70px"}}>Certificates</h1>
      <div className="row" style={{ justifyContent: "center" , gap: "50px"}}>
        {certificates.map((cert, index) => (
          <div key={index} className="cardsss">
            <img src={cert.src} alt={cert.alt} />
            <p className="caption">{cert.title}</p>
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
          width: 550px; /* half of container width if 2 images per row */
          height: 600px;
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
