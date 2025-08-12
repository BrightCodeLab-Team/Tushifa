import React from "react";

const HomeHeroicBlock = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xl-7">
            <div className="block">
              <div className="divider mb-3"></div>
              <span
                className="text-uppercase  text-white font-weight-bold"
                style={{ fontSize: "20px" }}
              >
                Total Health care solution
              </span>
              <h1 className="mb-3 mt-3 text-white">
                Good health isn’t a goal — it’s a journey we take together
              </h1>

              <h5 className="mb-4 pr-5 text-white">
              Start yours today with trusted doctors, personalized care, and
              support that never stops
              </h5>
              <div className="btn-container">
                <a
                  href="contact.html"
                  target="_blank"
                  className="btn btn-main-2 btn-icon btn-round-full"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroicBlock;
