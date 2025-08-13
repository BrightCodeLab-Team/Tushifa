"use client";

export default function AboutPage() {
  return (
    <div className="about-container">
      <h2 className="title">Who We Are</h2>
      <ul className="bullet-list">
        <li>
          Tareeq Ul Shifa is a non-profit startup initiated in Peshawar, Pakistan
          centered around the core belief of healthcare as a basic human right.
          Through the allocation of zakat donations, we aim to provide avenues
          and options to those who struggle to afford the treatments they need.
        </li>
        <li>
          We prioritize transparency at every step, internally and externally,
          to build trust among donors and patients. Our goal is to embody the
          trust and awareness expected by all stakeholders involved while
          maintaining the highest standards of confidentiality, ensuring that
          patient details are treated with utmost privacy and security.
        </li>
        <li>
          Tareeq Ul Shifa prioritizes hassle-free outpatient healthcare by
          streamlining the donation process through the use of technology. Our
          framework restructures the patient experience, fostering efficient
          exchanges between patients and dispensaries for maximum convenience.
        </li>
        <li>
          In order to provide a hassle-free process for our primary
          stakeholders, our team implements modern solutions for established
          problems. Through the implementation of technological responses, we
          seek to establish a system that is both lightweight and easily
          replicated in other environments.
        </li>
      </ul>

      <style jsx>{`
        .about-container {
          padding: 40px 60px;
        }


    .title {
          text-align: center;
          color: #1e3a8a; 
          font-size: 48px; 
          font-weight: 700;
          margin-bottom: 20px; 
        }

   
        .bullet-list {
          max-width: 1200px; 
          margin: 0 auto; 
          padding-left: 40px; 
          list-style-type: disc; 
        }


        .bullet-list li {
          margin-bottom: 15px; 
          line-height: 1.6; 
          text-align: justify;
          color: #000000; 
          font-size: 22px; 
          font-weight: 400; 
        }
      `}</style>
    </div>
  );
}
