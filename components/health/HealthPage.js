"use client";

import Image from "next/image";

export default function HealthPage() {
  return (
    <div className="container">
      <h1 className="title">Health</h1>
      <section>
        <h2 className="subtitle">Health</h2>

        <ul>
          <li style={{ marginBottom: "30px" }}>
            At Tareeq Ul Shifa, our health initiative is dedicated to supporting
            children and families affected by Blood disorders such as thalassemia,
            leukemia and lymphoma. These chronic conditions not only bring serious
            health challenges but also cause emotional and financial hardship
            especially for families with limited income.
          </li>

          <li style={{ marginBottom: "30px" }}>
            To make sure our support reaches those who need it most, we use a
            transparent and carefully designed system called the{" "}
            <strong>Tushifa Eligibility Algorithm</strong>. This data-based process
            helps us assess applicants fairly by looking at medical needs, financial
            background and other social factors. It also helps us confirm Zakat
            eligibility so your donations go to people who truly deserve it.
          </li>

          <li style={{ marginBottom: "30px" }}>
            After a complete evaluation, eligible patients receive support in the
            form of essential medications. While we aim to eventually assist with
            other healthcare needs, our present focus is on ensuring consistent
            access to life-saving medicines. <br />
            Our goal remains the same: to give every patient a chance at a
            healthier, more hopeful life.
          </li>

          <li style={{ marginBottom: "30px" }}>
            Currently, we are focused on supporting patients with blood disorders
            such as thalassemia and leukemia. In the future, we plan to expand our
            health services to include individuals suffering from other
            life-threatening conditions as well so that more individuals regardless
            of their background can access the treatment.
          </li>

          <li style={{ marginBottom: "30px" }}>
            We believe that access to healthcare should not be a privilege but a
            right especially for those who are most vulnerable.
          </li>

          <li style={{ marginBottom: "30px" }}>
            Our health initiative started on November 13, 2023, and since then, we
            have been working hard to support as many vulnerable patients as
            possible. To date, a total of 221 patients have visited us, of which
            109 are currently under active care, 27 have sadly passed away, and 85
            were found ineligible based on our Zakat assessment criteria through
            the <strong>Tushifa Eligibility Algorithm</strong>. Overall, we have
            recorded 1,536 patient visits during this period, showing our strong
            commitment to ongoing care and close follow-up for each patient.
          </li>
        </ul>
         <Image
          src="/assets/images/health/HealthRelated.png" // change to your image path
          alt="Health"
          width={1100}
          height={550}
          style={{ marginTop: "30px" }}
        />
      </section>

      <style jsx>{`
        .container {
          width: 100%;
          margin: 0 auto;
          padding: 40px;
          background-color: #f8f8f8;
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #000;
        }

        .title {
          text-align: center;
          font-size: 48px;
          font-weight: bold;
          color: #223A66;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
          color: #000;
        }

        ul {
          padding-left: 10px;
          margin: 0;
        }

        li {
          margin-bottom: 18px;
          position: relative;
        }

        li::marker {
          color: #666;
        }

        strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
