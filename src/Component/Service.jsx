import React from "react";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Service = () => {
  const [formData, setFormData] = useState({
    Date: "",
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const today = new Date();
    const date = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setFormData((prevState) => ({ ...prevState, Date: date }));
  }, []);

  let handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited:", formData);
    let add = {
      Date: formData.Date,
      Name: formData.Name,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber,
      Message: formData.Message,
    };
    axios
      .post("https://sheetdb.io/api/v1/nqny5i66t10gh", add)
      .then((res) => {
        console.log(res);
        navigate("/thank");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img
              src="./assats/images/logo-6.png"
              className="nav-logo"
              alt="weblogo"
            />
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
            style={{
              paddingLeft: "20%",
              paddingRight: "10%",
              backgroundColor: "#fffeeb",
            }}
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
            <form
              className="gtco-from"
              style={{ marginTop: "0.5%" }}
              onSubmit={handleSubmit}
            >
              <div className="contact">
                <h3 style={{ marginTop: "2%" }}>Consult With Our Team</h3>
                <input type="hidden" name="Date" value={formData.Date} />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  pattern="[^ @]*@[^ @]*"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="phone"
                  className="form-control"
                  placeholder="Phone Number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                />
                <textarea
                  className="form-control"
                  placeholder="Message"
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                ></textarea>
                {/* <a type="submit" className="submit-button">
                  Submit
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </a> */}
                <button
                  type="submit"
                  id="form-submit"
                  className="submit-button"
                >
                  Submit
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </div>
            </form>
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
                    <div className="name">
                      Crafting responsive, user-friendly websites tailored to
                      your business needs.
                    </div>
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
                    <div className="name">
                      {" "}
                      Building innovative mobile and web applications to
                      streamline operations and enhance customer experiences.
                    </div>
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
                    <div className="name">
                      Leveraging the power of online channels to boost brand
                      visibility, engage audiences, and drive conversions.
                    </div>
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
                    <div className="name">
                      Developing robust, scalable, and customized software
                      applications to drive operational efficiency and
                      productivity.
                    </div>
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
                    <div className="name">
                      {" "}
                      Captivating storytelling through engaging video content to
                      promote your brand and products.
                    </div>
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
            <div className="col-lg-8">
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
                  <h4>Services</h4>
                  <ul className="nav flex-column services-nav">
                    <li className="nav-item">
                      <Link className="nav-link" to="/webservice">
                        Web Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/webservice">
                        Web Devlopment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/seoservice">
                        App Devlopment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/marketingservice">
                        SEO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/marketingservice">
                        Marketing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/videoservice">
                        Advertisement
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-12"></div>
              </div>
            </div>
            <div className="footer-logo col-lg-4 col-sm-6">
              <div className="row">
                <div className="col-10">
                  <img
                    src="./assats/images/logo-6.png"
                    width={120}
                    alt="weblogo"
                  />
                  <p style={{ color: "white" }}>Kolkata, Dumdum</p>

                  <h4 className="mt-5">Follow Us</h4>
                  <ul className="nav follow-us-nav">
                    <li className="nav-item">
                      <Link className="nav-link pl-0" to="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright col-12">
            <p>
              &copy; 2024. All Rights Reserved. Designed by Pour Technologies.
            </p>
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
