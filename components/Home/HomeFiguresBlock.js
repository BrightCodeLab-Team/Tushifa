import React from "react";

const HomeFiguresBlock = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta position-relative">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-doctor"></i>
                <span className="h3">2500</span>k<p>Investments</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-doctor"></i>
                <span className="h3">100</span>+<p>Happy Patients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-flag"></i>
                <span className="h3">200</span>+<p>Prescription Fullfilments</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="counter-stat">
                <i className="icofont-badge"></i>
                <span className="h3">40</span>+<p>Pharmacies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFiguresBlock;
