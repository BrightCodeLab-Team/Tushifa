import React from "react";

const AboutPersonalCareBlock = () => {
  return (
    <>
      <section className="section about-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="title-color">
                Personal care for your healthy living
              </h2>
            </div>
            <div className="col-lg-8">
              <p style={{ fontSize: 15 }}>
                With a focus on patient-centric care, we pioneer advanced
                prescription management systems, empowering healthcare providers
                with the tools needed to enhance patient outcomes and
                experiences. <br /> Our mission is to revolutionize patient
                prescription management, leveraging cutting-edge technology and
                industry expertise to optimize healthcare delivery and patient
                satisfaction.
              </p>
              <img
                src="/assets/images/about/sign.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="fetaure-page">
        <div className="container">
          <div className="row">
            {[
              "Healthcare for Kids",
              "Medical Counseling",
              "Modern Equipments",
              "ualified Doctors",
            ].map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="about-block-item mb-5 mb-lg-0">
                  <img
                    src="/assets/images/about/about-1.jpg"
                    alt=""
                    className="img-fluid w-100"
                  />
                  <h4 className="mt-3">{service}</h4>
                  <p>
                    Voluptate aperiam esse possimus maxime repellendus, nihil
                    quod accusantium .
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPersonalCareBlock;
