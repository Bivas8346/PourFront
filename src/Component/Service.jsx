import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link } from "react-router-dom";

const Service = () => {
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
            style={{ paddingLeft: "20%", paddingRight: "10%",backgroundColor:"#fffeeb" }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/career">
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
                Tailored <span>Solutions</span> for Your Digital Transformation
              </h1>
              <p>
                Comprehensive Solutions for Your Digital Needs that propel your
                business forward.
              </p>
            </div>
            <br />
            <div className="gtco-from">
              <div className="contact">
                <h3 style={{ marginTop: "2%" }}>Consult With Our Team</h3>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="Name"
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="Email"
                />
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  name="Phone"
                />
                <textarea
                  className="form-control"
                  placeholder="Message"
                  name="Message"
                ></textarea>
                <a href="#" className="submit-button">
                  Submit{" "}
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service --> */}
      <div className="container-fluid gtco-testimonials">
        <div className="container">
          <h2>Explore Our Services We Offer For You</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/webservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/web.png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Web Development
                    <br />
                    <div className="name">Crafting responsive, user-friendly websites tailored to your business needs.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/appservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/webapp.png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Web Application Development
                    <br />
                    <div className="name"> Building innovative mobile and web applications to streamline operations and enhance customer experiences.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/marketingservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/digital.png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Digital Marketing
                    <br />
                    <div className="name">Leveraging the power of online channels to boost brand visibility, engage audiences, and drive conversions.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/seoservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/seo (2).png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Application Development 
                    <br />
                    <div className="name">Developing robust, scalable, and customized software applications to drive operational efficiency and productivity.</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/videoservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/video.png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Video Advertisement
                    <br />
                    <div className="name"> Captivating storytelling through engaging video content to promote your brand and products.</div>
                  </div>
                </div>
              </Link>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/adservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/adv.png"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    Online Advertisement
                    <br />
                    <div className="name">Targeted, data-driven online advertising campaigns to reach your ideal customers across various platforms.
                    </div>
                  </div>
                </div>
              </Link>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <Link to={`/videoservice`}>
                <div className="e-card playing">
                  <div className="image"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="infotop">
                    <img
                      src="../assats/images/seo.svg"
                      alt="service image"
                      width={150}
                    />
                    <br />
                    webdev
                    <br />
                    <div className="name">webdev</div>
                  </div>
                </div>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
      {/* <!-- Feature --> */}
      <div className="container-fluid gtco-features-list">
        <h2 style={{ textAlign: "center", marginBottom: "5%" }}>
          Our Work Process.
        </h2>
        <div className="container">
          <div className="row">
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/quality-results.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Quality Results</h5>
                We pride ourselves on our ability to turn your vision into
                reality, delivering high-quality results that drive your
                business forward.
              </div>
            </div>
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/analytics.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Analytics</h5>
                We understand that every business is different, which is why we
                offer analytics solutions that align with your objectives and
                drive growth.
              </div>
            </div>
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/affordable-pricing.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Affordable Pricing</h5>
                We offer market-leading prices that make our products and
                services accessible to businesses and ensuring you get the best
                value for your investment.
              </div>
            </div>
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/easy-to-use.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Easy To Use</h5>
                we are dedicated to creating intuitive and user-friendly
                solutions that simplify your everyday tasks with a user-first
                approach, making them easy to understand and operate.
              </div>
            </div>
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/free-support.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Free Support</h5>
                Our mission is to provide comprehensive, reliable support
                solutions that help businesses and individuals overcome their
                technical challenges with ease and confidence.
              </div>
            </div>
            <div className="media col-md-6 col-lg-4">
              <div className="oval mr-4">
                <img
                  className="align-self-start"
                  src="./assats/images/effectively-increase.png"
                  alt="featurephoto"
                />
              </div>
              <div className="media-body">
                <h5 className="mb-0">Effectively Increase</h5>
                We take pride in transforming your vision into reality,
                delivering high-quality results that propel your business
                forward.
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
                        Privacy Policy
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
                        Privacy Policy
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
                    src="./assats/images/logo-6.png"
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

export default Service;
