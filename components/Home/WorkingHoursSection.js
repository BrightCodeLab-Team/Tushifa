"use client"
import Image from "next/image";

export default function WorkingHoursSection() {
  const hours = [
    { day: "Monday", time: "08 AM - 06 PM" },
    { day: "Tuesday", time: "08 AM - 06 PM" },
    { day: "Wednesday", time: "08 AM - 06 PM" },
    { day: "Thursday", time: "08 AM - 06 PM" },
    { day: "Friday", time: "08 AM - 12 PM" },
    { day: "Saturday", time: "08 AM - 06 PM" },
    { day: "Sunday", time: "08 AM - 06 PM" },
  ];

  return (
    <section className="working-hours-section container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="doctor-image">
            <Image
              src="/assets/images/doctor.png"
              alt="Doctor"
              width={600}
              height={400}
              className="img-fluid rounded-bottom rounded-top"
            />
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="section-title">Here When You Need Us</h2>
          <p className="section-description">
            We’re available throughout the week to support your health needs.
            Check our hours before planning your visit.
          </p>

          <div className="hours-card">
            <h5 className="hours-title">Working Hours</h5>
            <ul className="hours-list">
              {hours.map((item, index) => (
                <li key={index} className="hours-item">
                  <span className="fw-bold">{item.day}</span>
                  <span className="fw-bold">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
      <style jsx>{`
        .working-hours-section {
          padding: 50px 0;
        }
        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a3760;
          margin-bottom: 15px;
        }

        .section-description {
          font-size: 16px;
          color: #4a5a78;
          margin-bottom: 25px;
        }


        .hours-card {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .hours-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a3760;
          margin-bottom: 15px;
        }

        .hours-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hours-item {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          font-size: 15px;
          color: #000;
        }

        .hours-item span:last-child {
          color: #6c757d;
        }
      `}</style>
    </section>
  );
}
