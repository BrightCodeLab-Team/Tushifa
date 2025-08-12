import React from "react";

const PatientCareBlock = () => {
  return (
    <section className="section service gray-bg" id="services">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className="section-title">
              <h2>Award winning patient care</h2>
              <div className="divider mx-auto my-4"></div>
              <p>
                we are dedicated to simplifying healthcare processes, promoting
                accessibility, and enhancing patient-provider interactions for
                improved health outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-laboratory text-lg"></i>
                <h4 className="mt-3 mb-3">Laboratory services</h4>
              </div>

              <div className="content">
                <p className="mb-4">
                  Precision diagnostics for informed healthcare decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-heart-beat-alt text-lg"></i>
                <h4 className="mt-3 mb-3">Heart Disease</h4>
              </div>
              <div className="content">
                <p className="mb-4">
                  Comprehensive care for heart health and vitality.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-tooth text-lg"></i>
                <h4 className="mt-3 mb-3">Dental Care</h4>
              </div>
              <div className="content">
                <p className="mb-4">
                  Transforming smiles with expert dental solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-crutch text-lg"></i>
                <h4 className="mt-3 mb-3">Body Surgery</h4>
              </div>

              <div className="content">
                <p className="mb-4">
                  Enhancing lives through advanced surgical interventions
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-brain-alt text-lg"></i>
                <h4 className="mt-3 mb-3">Neurology Sargery</h4>
              </div>
              <div className="content">
                <p className="mb-4">
                  Innovative neurosurgical expertise for optimal outcomes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="service-item mb-4">
              <div className="icon d-flex align-items-center">
                <i className="icofont-dna-alt-1 text-lg"></i>
                <h4 className="mt-3 mb-3">Gynecology</h4>
              </div>
              <div className="content">
                <p className="mb-4">
                  Compassionate care for {"women's"} health and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientCareBlock;
