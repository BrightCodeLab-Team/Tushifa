import React from "react";

const ContactDetailsBlock = () => {
  return (
    <section className="section contact-info pb-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="contact-block mb-4 mb-lg-0">
              <i className="icofont-live-support"></i>
              <h5>Call Us</h5>
              +92 314 0918860
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="contact-block mb-4 mb-lg-0">
              <i className="icofont-support-faq"></i>
              <h5>Email Us</h5>
              official@tushifa.org
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-md-6 ">
            <div className="contact-block mb-4 mb-lg-0">
              <i className="icofont-location-pin"></i>
              <h5>Location</h5>
              Unversity Town Peshawar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsBlock;
