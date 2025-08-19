import Link from "next/link";
import Image from "next/image";
import React from "react";

const HealthCareBlock = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-6">
            <div className="about-img">
              <Image src="/assets/images/about/img-1.png" alt="" className="img-fluid" width={490} height={320} style={{borderRadius:'48px'}} />
              <Image src="/assets/images/about/img-3.png" alt="" className="img-fluid mt-4" width={490} height={320} style={{borderRadius:'48px'}} />
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="about-img mt-4 mt-lg-0">
              <Image src="/assets/images/about/img-2.png" alt="" className="img-fluid" width={490} height={680} style={{borderRadius:'48px'}} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about-content pl-4 mt-4 mt-lg-0">
              <h2 className="title-color">
                Personal care <br />& healthy living
              </h2>
              <p className="mt-4 mb-5">
                With a focus on patient-centric care, we pioneer advanced
                prescription management systems, empowering healthcare providers
                with the tools needed to enhance patient outcomes and
                experiences
              </p>

              <Link
                href="#services"
                className="btn btn-main-2 btn-round-full btn-icon"
              >
                Services<i className="icofont-simple-right ml-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCareBlock;
