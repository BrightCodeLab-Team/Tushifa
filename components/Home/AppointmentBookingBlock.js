import React from "react";

const AppointmentBookingBlock = () => {
  return (
    <section className="section appoinment">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="appoinment-content">
              <img
                src="assets/images/about/contact-us.jpg"
                alt=""
                className="img-fluid"
              />
              <div className="emergency">
                <h2 className="text-lg">
                  <i className="icofont-phone-circle text-lg"></i>0314 0918860
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="appoinment-wrap mt-5 mt-lg-0">
              <h2 className="mb-2 title-color">Contact Us</h2>
              <p className="mb-4">
                Connect with us today for personalized assistance and expert
                guidance. Our team is here to address your inquiries and support
                your needs with care and efficiency.
              </p>
              <form id="#" className="appoinment-form" method="post" action="#">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="phone"
                        id="phone"
                        type="Number"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        name="address"
                        id="address"
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group-2 mb-4">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <a
                  className="btn btn-main btn-round-full"
                  href="appoinment.html"
                >
                  Contact <i className="icofont-simple-right ml-2"></i>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBookingBlock;
