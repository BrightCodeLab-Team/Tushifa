import Image from "next/image";

export default function WorkingHoursSection() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="rounded-4 overflow-hidden">
            <Image
              src="/assets/images/doctor.png" // Place your image in /public folder
              alt="Doctor"
              className="img-fluid"
              width={600}
              height={400}
              style={{ objectFit: "cover", borderRadius: "10px,10px,10px,100px" }}
            />
          </div>
        </div>

        {/* Right Side: Text + Hours */}
        <div className="col-md-6">
          <h3 className="fw-bold text-primary mb-3">Here When You Need Us</h3>
          <p className="text-secondary">
            We’re available throughout the week to support your health needs.
            Check our hours before planning your visit.
          </p>

          <div
            className="p-3 rounded-4 shadow-sm mt-4"
            style={{ backgroundColor: "#fff" }}
          >
            <h6 className="fw-bold text-primary mb-3">Working Hours</h6>
            <ul className="list-unstyled mb-0">
              {[
                { day: "Monday", time: "08 AM - 06 PM" },
                { day: "Tuesday", time: "08 AM - 06 PM" },
                { day: "Wednesday", time: "08 AM - 06 PM" },
                { day: "Thursday", time: "08 AM - 06 PM" },
                { day: "Friday", time: "08 AM - 12 PM" },
                { day: "Saturday", time: "08 AM - 06 PM" },
                { day: "Sunday", time: "08 AM - 06 PM" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="d-flex justify-content-between  py-2"
                >
                  <span className="fw-bold">{item.day}</span>
                  <span className="text-secondary fw-bold">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
