import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyForm = () => {
  const recaptchaRef = useRef(null);

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  
  const [formData, setFormData] = useState({
    Date: "",
    Name: "",
    Email: "",
    PhoneNumber: "",
    Job_Role: "",
    Address: "",
    Zip: "",
    Experience: "",
    CV: "",
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
      Job_Role: formData.Job_Role,
      Address: formData.Address,
      Zip: formData.Zip,
      Experience: formData.Experience,
      CV: formData.CV,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/75ae80df-a940-4421-9b4f-9bd5553a22ee",
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
            style={{ paddingLeft: "20%", paddingRight: "10%",backgroundColor:"#fffeeb" }}
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
            <div className="col-md-8">
              <h1>
                Join Our <span>Team</span> be a part of our journey.
              </h1>
              <p>
                Ready to take the next step in your career? Join Us and submit
                your application. We look forward to learning more about you and
                how you can contribute to our success.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/work-time.svg"
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Apply From --> */}
      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="contact-us-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>
                      Apply & For Your Dream <span>Job</span>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Name"
                      placeholder="Your Name..."
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
                      id="Email"
                      name="Email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your E-mail..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="tel"
                      name="PhoneNumber"
                      placeholder="Your Phone Number..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <select
                      placeholder="Apply..."
                      name="Job_Role"
                      style={{ fontSize: "120%" }}
                      onChange={handleChange}
                    >
                      <option value>Apply...</option>
                      <option>Web Devloper</option>
                      <option>Digital Marketer</option>
                      <option>SEO Executive</option>
                      <option>Hybrid App Devloper</option>
                      <option>Tele Service Executive</option>
                      <option>Field Sales Executive</option>
                      <option>HR</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Address"
                      placeholder="Your Address..."
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
                      name="Zip"
                      placeholder="Your Zip Code..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="number"
                      name="Experience"
                      placeholder="Have You Any Experience..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                {/* <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="number"
                      name="Exyear"
                      placeholder="How Many Year..."
                      onChange={handleChange}
                    />
                  </fieldset>
                </div> */}
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="file"
                      name="CV"
                      onChange={handleChange}
                      // required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Leg4_cpAAAAACu1ON_TXEYMYnZJ_hiGnKZ3k_kN"
                    size="small" // or "invisible"
                    onChange={onChange}
                  />
                  <br />
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                  <fieldset>
                    <button
                      type="submit"
                      className="orange-button"
                      style={{ fontSize: "120%" }}
                    >
                      Apply Now
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
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
    </>
  );
};

export default ApplyForm;
