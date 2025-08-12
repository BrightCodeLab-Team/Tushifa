import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-front section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img
                  src="/assets/images/logo-tagline.png"
                  alt=""
                  className="img-fluid"
                  style={{ width: 135 }}
                />
              </div>
              <p>
                Tushifa is a pioneering healthcare platform dedicated to
                revolutionizing patient care and management. We strive to
                empower individuals and healthcare providers alike, ensuring
                optimal health outcomes and well-being for all
              </p>

              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.facebook.com/">
                    <i className="icofont-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://twitter.com/">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.pinterest.com/">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Links</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4"></div>

              <ul className="list-unstyled footer-menu lh-35">
                <li>
                  <Link href="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                {/* <li>
                  <a href="#">Company Support </a>
                </li>
                <li>
                  <a href="#">FAQuestions</a>
                </li> */}
                <li>
                  <Link href="#">Company Licence</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4"></div>

              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3"></i>
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <a href="#">official@tushifa.org</a>
                </h4>
              </div>

              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3"></i>
                  <span className="h6 mb-0">
                    Mon to Fri : 08:30 AM - 6:00 PM
                  </span>
                </div>
                <h4 className="mt-2">
                  <a href="#">+92 314 0918860</a>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <div className="copyright">
                &copy; Copyright <span className="text-color">Tushifa</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <a className="backtop js-scroll-trigger" href="#top">
                <i className="icofont-long-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
