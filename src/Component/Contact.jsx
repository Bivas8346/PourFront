import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const recaptchaRef = useRef(null);
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const [formData, setFormData] = useState({
    Date: "",
    Name: "",
    Email: "",
    PhoneNumber: "",
    Service: "",
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
      Service: formData.Service,
      Message: formData.Message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/a8f6a41a-16f3-431c-9711-821664f35f7a",
        add
      )
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
            <img src="./assats/images/logo-6.png" className="nav-logo" alt="weblogo" />
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
                <Link className="nav-link link-active" to="/service">
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
                <Link className="nav-link active" to="/contact">
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
                We’re Here to Help You <span>Achieve</span> Your Goals
              </h1>
              <p>
                The digital landscape is constantly evolving, brimming with
                possibilities. But navigating this ever-changing terrain can be
                a challenge. That's where collaboration comes in. By working
                together, we can unlock the true potential of the digital realm
                and transform your business.
              </p>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/contact-banner.png "
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Contact us --> */}
      <div className="contact-us section contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-us-content">
                <div className="row">
                  <div className="col-lg-12">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-heading">
                            <h2>
                              Contact Us &amp; Get In <span>Touch</span>
                            </h2>
                          </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <input
                            type="hidden"
                            name="Date"
                            value={formData.Date}
                          />
                          <fieldset>
                            <input
                              style={{ fontSize: "120%" }}
                              type="name"
                              name="Name"
                              placeholder="Your Name..."
                              autoComplete="on"
                              value={formData.Name}
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <fieldset>
                            <input
                              style={{ fontSize: "120%" }}
                              type="text"
                              name="Email"
                              pattern="[^ @]*@[^ @]*"
                              placeholder="Your E-mail..."
                              value={formData.Email}
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <fieldset>
                            <input
                              style={{ fontSize: "120%" }}
                              type="phone"
                              name="PhoneNumber"
                              placeholder="Your Phone Number..."
                              autoComplete="on"
                              value={formData.PhoneNumber}
                              onChange={handleChange}
                              required
                            />
                          </fieldset>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <fieldset>
                            <select
                              placeholder="Service..."
                              name="Service"
                              autoComplete="on"
                              style={{ fontSize: "120%" }}
                              value={formData.Service}
                              onChange={handleChange}
                            >
                              <option value>service</option>
                              <option>Web Devlopment</option>
                              <option>App Devlopment</option>
                              <option>Degital marketing</option>
                              <option>SEO Service</option>
                              <option>Hybride App Devlopment</option>
                              <option>Ad Service</option>
                              <option>Vide Ad-service</option>
                            </select>
                          </fieldset>
                        </div>
                        <div className="col-lg-12 col-sm12 col-12">
                          <fieldset>
                            <textarea
                              style={{ fontSize: "120%" }}
                              name="Message"
                              placeholder="Your Message"
                              value={formData.Message}
                              onChange={handleChange}
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LcR4_cpAAAAAAdojavXP83MWYGhbw5QC8PDmcDb"
                            size="normal"
                            onChange={onChange}
                            // 6LcVV_UpAAAAAMcDR_FpYS1HmUwIPd_1Ijd4j3zm
                          />
                          <br />
                        </div>
                        <div className="col-lg-12 col-sm-12 col-12">
                          <fieldset>
                            <button
                              type="submit"
                              id="form-submit"
                              className="orange-button"
                              style={{ fontSize: "120%" }}
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </form>
                    <div className="more-info" style={{ marginTop: "3%" }}>
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-phone"></i>
                            <h4>
                              <Link to=" ">+91 8584858693</Link>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-envelope"></i>
                            <h4>
                              <Link to=" ">info@pourtechnologies.com</Link>
                            </h4>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-item">
                            <i className="fa fa-map-marker"></i>
                            <h4>
                              <Link to=" ">Motijeel, Dumdum, Kolkata-74</Link>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Map Container --> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d230.18113307385264!2d88.410151!3d22.620279!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDM3JzEyLjkiTiA4OMKwMjQnMzYuNyJF!5e0!3m2!1sen!2sin!4v1717841374105!5m2!1sen!2sin"
                    width="100%"
                    height="370px"
                    frameBorder="0"
                    style={{ border: "0", borderRadius: "23px" }}
                    allowFullScreen=""
                  ></iframe>
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
                        <i className="fa fa-twitter" aria-hidden="true"></i>
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

export default Contact;
