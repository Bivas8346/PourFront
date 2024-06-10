import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Career = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img src="./assats/images/logo-6.png" width={180} alt="weblogo" />
          </Link>
          <button
            className="navbar-toggler"
            data-target="#my-nav"
            data-toggle="collapse"
          >
            <span className="bar1"></span> <span className="bar2"></span>
            <span className="bar3"></span>
          </button>
          <div
            id="my-nav"
            className="collapse navbar-collapse"
            style={{ paddingLeft: "20%", paddingRight: "10%" }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/career">
                  Carrer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Banner --> */}
      <div className="container-fluid gtco-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                Join the <br /> <span>Pour Technologies</span> Family
              </h1>
              <p>
                Unlock Your Potential in a Dynamic and Innovative Environment &
                Empower Your Career with Pour Technologies
              </p>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/carrier.png "
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Career --> */}
      <div className="carrier-part">
        <div className="container">
          <h1 className="text-center mb-5">Recently Posted job</h1>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/Webdev-carrier.png"
                  style={{ width: "75px", height: "75px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">Web Devloper</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/digimarketer-carrier.png"
                  style={{ width: "75px", height: "75px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">Digital Marketer</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/seo-carrier.png"
                  style={{ width: "75px", height: "75px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">SEO Executive</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/app-carrier.png"
                  style={{ width: "75px", height: "75px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">Hybrid App Devloper</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/caller-carrier.png"
                  style={{ width: "65px", height: "65px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">Tele Service Executive</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/caller-carrier.png"
                  style={{ width: "75px", height: "75px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">Field Sales Executive</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carrier-carousel">
            <div className="Carrier-item bg-light rounded my-4">
              <br />
              <div className="d-flex align-items-center job-cont">
                <img
                  className="flex-shrink-0 rounded-circle"
                  src="../assats/images/seo.png"
                  style={{ width: "65px", height: "65px", margin: "20px" }}
                  alt="job-img"
                />
                <div className="ps-4">
                  <h5 className="mb-1">HR</h5>
                  <p>
                    <i className="fa fa-map-marker me-3"></i> KOLKATA |
                    <i className="fa fa-clock-o me-3"></i> FULL TIME
                  </p>
                </div>
                <div className="ps-4 applybtn">
                  <br />
                  <Link
                    to="/form"
                    className="btn btn-warning rounded-pill py-2 px-4 ms-3"
                  >
                    Apply Now
                  </Link>
                  <br />
                  <br />
                  <p>
                    <i className="fa fa-check me-3"></i> Publish At : 29, July
                    2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Carrier With Us --> */}
      <div className="container-fluid gtco-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Happy employees keep happy clients</h2>
              <p>
                We promote a collaborative work environment where teamwork,
                mutual respect, and shared goals drive us towards delivering
                excellence in every project ,we firmly believe that happy
                employees are the cornerstone of exceptional client experiences.
                Here's how we ensure a positive work environment that translates
                into satisfied clients.
              </p>
              <p>
                <small>
                  By prioritizing the happiness and satisfaction of our
                  employees, we cultivate a positive company culture that
                  directly translates into happy clients who trust us to deliver
                  results, foster long-term partnerships, and contribute to
                  mutual success.
                </small>
              </p>
            </div>
            <div className="col-md-6">
              <div className="cover">
                <div className="card">
                  <svg width="100%" viewBox="0 0 700 500">
                    <image
                      xlinkHref="./assats/images/Banner-3.svg"
                      width="100%"
                      height="100%"
                      className="svg__image"
                    ></image>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer className="container-fluid gtco-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <h4>Company</h4>
                  <ul className="nav flex-column company-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/privecy">
                        Privecy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/terms">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h4>Services</h4>
                  <ul className="nav flex-column services-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Web Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Graphics Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        App Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        SEO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Marketing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Analytic
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <h4>Support</h4>
                  <ul className="nav flex-column company-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/service">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/privecy">
                        Privecy Policy
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/terms">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <img
                    src="./assats/images/logo-4.png"
                    width={170}
                    alt="weblogo"
                  />
                  <p style={{ color: "white" }}>Kolkata, Dumdum</p>

                  <h4 className="mt-5">Fllow Us</h4>
                  <ul className="nav follow-us-nav">
                    <li className="nav-item">
                      <Link className="nav-link pl-0" to="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-google" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12">
                  <p style={{ marginLeft: "-50%" }}>
                    &copy; 2024. All Rights Reserved . Design by Pour
                    Technologies .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-lg-square back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Career;
