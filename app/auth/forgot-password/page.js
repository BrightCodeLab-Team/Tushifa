import Link from "next/link";
import Image from "next/image";
import React from "react";

const ForgotPassword = () => {
  return (
    <main className="auth">
      <div id="main-wrapper" className="show">
        <div className="login-tabib">
          <div>
            <div className="text-center">
                <Image className="img-fluid" src="/assets/images/logo.png" alt="login page" width={200} height={60} />
            </div>
            <div className="login-main">
              <form className="theme-form">
                <h4>Recover my password </h4>
                <div className="form-group m-b-10">
                  <p>
                    Please enter your email address below to receive instructions for resetting
                    password.
                  </p>
                  <div className="form-input position-relative">
                    <input className="form-control" type="email" placeholder="Enter your email" />
                    <div className="show-hide">
                      <span className="show"></span>
                    </div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="mt-3">
                    <Link href="#" className="btn btn-primary w-100">
                      Reset password
                    </Link>
                  </div>
                </div>
                <p className="mt-4 mb-0">
                  Know your password?{" "}
                  <Link className="ms-2 text-primary text-center" href="/auth/login">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
