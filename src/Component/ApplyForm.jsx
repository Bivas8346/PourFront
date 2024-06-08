import React, { useRef } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyForm = () => {
  const recaptchaRef = useRef(null);
  const [careerData, setAllcareer] = useState([]);

  useEffect(() => {
    axios
      .get("https://pour-tech.onrender.com/api/getCareer")
      .then((res) => {
        setAllcareer(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [cont, setCont] = useState({
    name: "",
    email: "",
    phone: "",
    job_role: "",
    address: "",
    zip: "",
    experience: "",
    cv: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === "file") {
      const file = files[0];
      convertToBase64(file).then((base64) => {
        setCont({ ...cont, [name]: base64 });
      });
    } else {
      setCont({ ...cont, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", cont);
    const add = {
      name: cont.name,
      email: cont.email,
      phone: cont.phone,
      job_role: cont.job_role,
      address: cont.address,
      zip: cont.zip,
      experience: cont.experience,
      cv: cont.cv,
    };
    axios
      .post("https://pour-tech.onrender.com/api/postCV", add)
      .then((res) => {
        console.log(res);
        navigate("/thank");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
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
                  Carrier
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
                      name="name"
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
                      name="email"
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
                      name="phone"
                      placeholder="Your Phone Number..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    {/* <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Position"
                      placeholder="Apply..."
                      onChange={handleChange}
                    /> */}
                    <select
                      placeholder="Apply..."
                      name="job_role"
                      style={{ fontSize: "120%" }}
                      onChange={handleChange}
                    >
                      <option selected>Apply...</option>
                      {careerData.map((serv) => (
                        <option key={serv._id}>{serv.jobRole}</option>
                      ))}
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="address"
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
                      name="zip"
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
                      name="experience"
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
                      name="cv"
                      onChange={handleChange}
                      // required
                    />
                  </fieldset>
                </div>
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_SITE_KEY"
                  size="normal" // or "invisible"
                  onChange={onChange}
                />
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
    </>
  );
};

export default ApplyForm;
