import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
           {/* Logo Section */}
         <Link className="navbar-brand d-flex align-items-center text-decoration-none" href="/">
            <img src="assets/images/logo.png" alt="Taroeq-U-Shifa" style={{width: '48px',}}  />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Navigation */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav mx-auto">
              <Link className="nav-link text-dark fw-medium px-3 position-relative" href="/">
                Home
                <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{ width: '20px', height: '2px', backgroundColor: '#dc3545' }}></div>
              </Link>
              <Link className="nav-link text-dark fw-medium px-3 d-flex align-items-center" href="/projects">
                Our Projects
                <i className="fas fa-chevron-down ms-1" style={{ fontSize: '12px' }}>          {/* Login Button */}
</i>
              </Link>
              <Link className="nav-link text-dark fw-medium px-3 d-flex align-items-center" href="/patients">
                Patients
                <i className="fas fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i>
              </Link>
              <Link className="nav-link text-dark fw-medium px-3" href="/about">
                About Us
              </Link>
              <Link className="nav-link text-dark fw-medium px-3" href="/contact">
                Contact Us
              </Link>
            </div>

            {/* Login Button */}
            <Link
              href="/auth/login"
              className="btn text-white fw-medium px-4 py-2 rounded-pill"
              style={{ backgroundColor: '#e91e63' }}
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
