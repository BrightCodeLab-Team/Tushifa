"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AuthActionButtons from "@/components/common/AuthActionButtons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMouseEnter = (menu) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <>
      <header className="bg-light shadow-sm">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* Logo */}
            <Link
              href="/"
              className="navbar-brand d-flex align-items-center text-decoration-none"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Taroeq-U-Shifa"
                width={50}
                height={68}
              />
            </Link>

            {/* Mobile toggle */}
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="toggler-line"></span>
              <span className="toggler-line"></span>
              <span className="toggler-line"></span>
            </button>

            {/* Menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav mx-auto">
                <Link href="/" className="nav-link text-dark fw-medium px-3">
                  Home
                </Link>

                {/* Our Projects dropdown */}
                <div
                  className="nav-item dropdown-custom"
                  onMouseEnter={() => handleMouseEnter("projects")}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`nav-link text-dark fw-medium px-3 d-flex align-items-center ${
                      openMenu === "projects" ? "open" : ""
                    }`}
                    role="button"
                  >
                    Our Projects{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`dropdown-arrow ${
                        openMenu === "projects" ? "open" : ""
                      }`}
                    />
                  </span>
                  {openMenu === "projects" && (
                    <div className="custom-dropdown">
                      <Link
                        href="/health"
                        className="dropdown-link active"
                      >
                        Health
                      </Link>
                      <Link
                        href="/projects/education"
                        className="dropdown-link"
                      >
                        Education
                      </Link>
                      <Link href="/projects/water" className="dropdown-link">
                        Water
                      </Link>
                    </div>
                  )}
                </div>

                {/* Patients regular link */}
                <Link
                  href="/patients"
                  className="nav-link text-dark fw-medium px-3"
                >
                  Patients
                </Link>

                {/* About Us dropdown */}
                <div
                  className="nav-item dropdown-custom"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    className={`nav-link text-dark fw-medium px-3 d-flex align-items-center ${
                      openMenu === "about" ? "open" : ""
                    }`}
                    role="button"
                  >
                    About Us{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`dropdown-arrow ${
                        openMenu === "about" ? "open" : ""
                      }`}
                    />
                  </span>
                  {openMenu === "about" && (
                    <div className="custom-dropdown">
                      <Link href="/about" className="dropdown-link active">
                        Who We Are
                      </Link>
                      <Link
                        href="/complience"
                        className="dropdown-link"
                      >
                        Complience
                      </Link>
                      <Link
                        href="/reports"
                        className="dropdown-link"
                      >
                        Report 
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/contact"
                  className="nav-link text-dark fw-medium px-3"
                >
                  Contact Us
                </Link>
              </div>

              <AuthActionButtons />
            </div>
          </div>
        </nav>
      </header>

      {/* Internal CSS */}
      <style jsx>{`
        .toggler-line {
          display: block;
          width: 25px;
          height: 2px;
          background: #000;
          margin: 5px 0;
        }

        .dropdown-custom {
          position: relative;
        }

        .custom-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border-radius: 12px;
          padding: 8px 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          min-width: 140px;
          z-index: 1000;
          animation: fadeIn 0.2s ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 16px;
        }

        .dropdown-link {
          display: block;
          width: 100%;
          text-align: center;
          padding: 6px 10px;
          font-size: 15px;
          font-weight: 700;
          color: #555;
          text-decoration: none;
          transition: all 0.2s ease;
          border-radius: 6px;
        }

        .dropdown-link:hover {
          background: #f7f7f7;
          color: #e91e63;
        }

        .dropdown-link.active {
          color: #e91e63;
          font-weight: 600;
        }

        .dropdown-arrow {
          font-size: 10px;
          margin-left: 6px;
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
