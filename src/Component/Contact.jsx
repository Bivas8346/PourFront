import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [contactData, setAllcontact] = useState([]);
  const recaptchaRef = useRef(null);

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Service: "",
    Message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      Service: formData.Service,
      Message: formData.Message,
    };

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbwZh_5t20YZch7A0eX04ZTR32IpSz4CdgncYC14nYYfGAPqk01EqIwsQAWdJzuvshrF/exec",
        payload
      )
      .then((response) => {
        if (response.data.result === "success") {
          navigate("/thank");
        } else {
          alert("Error submitting application: " + response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting application.");
      });
  };

  useEffect(() => {
    axios
      .get("https://pour-tech.onrender.com/api/getContact")
      .then((res) => {
        setAllcontact(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                  Carrier
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
                              type="text"
                              name="Phone"
                              placeholder="Your Phone Number..."
                              autoComplete="on"
                              value={formData.Phone}
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
                              name="Service"
                              placeholder="Service..."
                              autoComplete="on"
                              value={formData.Service}
                              onChange={handleChange}
                            />
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
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey="YOUR_SITE_KEY"
                          size="normal"
                          onChange={onChange}
                        />
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
                      {contactData.map((contact) => (
                        <div className="row" key={contact._id}>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-phone"></i>
                              <h4>
                                <Link to="#">{contact.phoneNumber}</Link>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-envelope"></i>
                              <h4>
                                <Link to="#">{contact.email}</Link>
                              </h4>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="info-item">
                              <i className="fa fa-map-marker"></i>
                              <h4>
                                <Link to="#">{contact.address}</Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                      ))}
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
              {contactData.map((cmap) => (
                <div className="col-lg-12" key={cmap._id}>
                  <div id="map">
                    <iframe
                      src={cmap.mapLink}
                      width="100%"
                      height="370px"
                      frameBorder="0"
                      style={{ border: "0", borderRadius: "23px" }}
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              ))}
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

export default Contact;
