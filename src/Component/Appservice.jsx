import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Appservice = () => {
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
              src="../assats/images/logo-6.png"
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
                <span style={{ color: "#d64806", fontSize: "45px" }}>
                  Web App Development:
                </span>
                <br />
                <span>
                  Unleashing Operational Efficiency through Innovative Web
                  Applications
                </span>
              </h1>
              <p>
                Feature-rich, intuitive web applications tailored to business
                needs, ensuring seamless user experiences across devices.
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
      {/* <!-- Tech For Service--> */}
      <div className="container-fluid" style={{ marginTop: "5%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 gtco-feature">
              <h2>
                Technologie We Use
                <br />
              </h2>
              <ul style={{ fontWeight: "bolder", fontSize: "20px" }}>
                <li>REACT</li>
                <li>LARAVEL</li>
                <li>NODE</li>
                <li>EXPRESS JS</li>
                <li>MONGODB</li>
                <li>PHP</li>
                <li>MYSQL</li>
              </ul>
            </div>
            <div
              className="col-lg-4"
              style={{ marginTop: "5%", padding: "20px" }}
            >
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assats/images/php.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assats/images/wordpress.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assats/images/REACT_LOGO.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="../assats/images/mongo.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Service --> */}
      <div className="container-fluid gtco-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>About The Service We Provide</h2>
              <p>
                Unlock the power of web applications with our expert web app
                development solutions. Our team specializes in creating
                feature-rich, intuitive, and high-performance web applications
                tailored to your unique business requirements, ensuring seamless
                user experiences across devices.
              </p>
              {/* <p>
                <small>Single Service About</small>
              </p> */}
            </div>
            <div className="col-md-7">
              <div className="cover">
                <div className="card">
                  <svg width="100%" viewBox="0 0 700 500">
                    <image
                      xlinkHref="../assats/images/devlop.svg"
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
      {/* <!-- How we work --> */}
      <div className="container-fluid gtco-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="cover">
                <div className="card">
                  <svg
                    className="back-bg"
                    width="100%"
                    viewBox="0 0 900 700"
                    style={{ position: "absolute", zIndex: "-1" }}
                  >
                    <defs>
                      <linearGradient
                        id="PSgrad_01"
                        x1="64.279%"
                        x2="0%"
                        y1="76.604%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="rgb(252, 186, 3)"
                          stopOpacity="1"
                        />
                        <stop
                          offset="100%"
                          stopColor="rgb(252, 111, 3)"
                          stopOpacity="1"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fillRule="evenodd"
                      opacity="0.102"
                      fill="url(#PSgrad_01)"
                      d="M616.656,2.494 L89.351,98.948 C19.867,111.658 -16.508,176.639 7.408,240.130 L122.755,546.348 C141.761,596.806 203.597,623.407 259.843,609.597 L697.535,502.126 C748.221,489.680 783.967,441.432 777.751,392.742 L739.837,95.775 C732.096,35.145 677.715,-8.675 616.656,2.494 Z"
                    />
                  </svg>
                  {/* <!-- *************--> */}

                  <svg width="100%" viewBox="0 0 700 500">
                    <clipPath id="clip-path">
                      <path d="M89.479,0.180 L512.635,25.932 C568.395,29.326 603.115,76.927 590.357,129.078 L528.827,380.603 C518.688,422.048 472.661,448.814 427.190,443.300 L73.350,400.391 C32.374,395.422 -0.267,360.907 -0.002,322.064 L1.609,85.154 C1.938,36.786 40.481,-2.801 89.479,0.180 Z"></path>
                    </clipPath>
                    <image
                      clipPath="url(#clip-path)"
                      xlinkHref="../assats/images/learn-img.jpg"
                      width="100%"
                      height="465"
                      className="svg__image"
                    ></image>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h2>The Proficient Team Behind Our Enormous Achievement</h2>
              <p>
                The proficient team behind Pour Technologies is our greatest
                asset. Their expertise, dedication, and passion drive our
                success and enable us to deliver exceptional IT solutions. We
                are proud of our team and their contributions to our enormous
                achievements in the industry. As we continue to grow and evolve,
                we remain committed to fostering a culture of excellence and
                innovation, ensuring that we stay at the cutting edge of
                technology.
              </p>
              {/* <Link to="/about">
                Learn More{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plans --> */}
      <div className="container-fluid gtco-testimonials">
        <div className="container">
          <h2>Effecting Pricing We Offer For You</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    {/* <span>
                    {" "}
                    ₹49 <small>/ m</small>{" "}
                  </span> */}
                  </span>
                  <p className="title">Basic Plan</p>
                  <p className="info">plan for Small business.</p>
                  <ul className="features">
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Single-page responsive website</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Basic SEO</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Contact form</strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>-------</strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>-------</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <a href="#" className="button">
                      {" "}
                      Choose plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    {/* <span>
                    {" "}
                    ₹49 <small>/ m</small>{" "}
                  </span> */}
                  </span>
                  <p className="title">Standard Plan</p>
                  <p className="info">plan for Medium Size business.</p>
                  <ul className="features">
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Multi-page responsive website</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Advanced SEO</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <strong>Blog integration</strong>
                    </li>
                    <li>
                      <span>
                        <strong>Social media links</strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>Basic Plan</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <a href="#" className="button">
                      {" "}
                      Choose plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span> {/* ₹49 <small>/ m</small>{" "} */}</span>
                  </span>
                  <p className="title">Advanced Plan</p>
                  <p className="info">plan for Large business.</p>
                  <ul className="features">
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>E-commerce functionality</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <span>
                        <strong>Custom design</strong>
                      </span>
                    </li>
                    <li>
                      {/* <span className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          fill="currentColor"
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                        ></path>
                      </svg>
                    </span> */}
                      <strong>Content management system</strong>
                    </li>
                    <li>
                      <span>
                        <strong>website analytics</strong>
                      </span>
                    </li>
                    <li>
                      <span>
                        <strong>Standard Plan</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <a href="#" className="button">
                      {" "}
                      Choose plan{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                  src="../assats/images/quality-results.png"
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
                  src="../assats/images/analytics.png"
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
                  src="../assats/images/affordable-pricing.png"
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
                  src="../assats/images/easy-to-use.png"
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
                  src="../assats/images/free-support.png"
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
                  src="../assats/images/effectively-increase.png"
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
      {/* <!-- faq --> */}
      {/* <div className="container-fluid gtco-testimonials">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <input id="faq-a" type="checkbox" />
          <label htmlFor="faq-a">
            <p className="faq-heading">
              How do I purchase Brainitz You can purchase an individual?
            </p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              You can purchase an individual account or a site license by
              emailing us at welcome@brainitz.com One of our staff will be in
              touch shortly to set-up your account. We accept credit card,
              purchase order, or check. Learn more on our pricing page.
              <br />
              <br />
              We also offer professional development trainings that include
              the opportunity to pursue credit while also receiving a
              discounted license. If you have more questions, please feel free
              to submit a request!
            </p>
          </label>
          <input id="faq-b" type="checkbox" />
          <label htmlFor="faq-b">
            <p className="faq-heading">
              Do you have professional development trainings available?
            </p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              Yes, we have professional development trainings available almost
              every month. Teachers can take our online course that will train
              you on the theory and practice of putting lessons online, often
              called flipped or blended learning. These trainings also include
              in depth instruction on how to use Brainitz.
              <br />
              <br />
              Online training start at $45, include a 1 year subscription
              Brainitz, and come with 1 hour of advancement credit available
              through Adams State University or $55. For dates on upcoming
              trainings, email us at welcome@brainitz.com. If you have more
              questions, please feel free to submit a request!
            </p>
          </label>
          <input id="faq-c" type="checkbox" />
          <label htmlFor="faq-c">
            <p className="faq-heading">
              Does Brainitz accept purchase orders?
            </p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              Yes, Brainitz accepts purchase order for site licenses. Please
              set the PO, including a description of the order to
              welcome@brainitz.com and we will invoice you for the amount.
              Once we send the invoice, someone will be in touch to set up
              your Brainitz account.
              <br />
              <br />
              You can learn more about our licensing structure on our pricing
              page. If you have more questions, please feel free to submit a
              request!
            </p>
          </label>
          <input id="faq-d" type="checkbox" />
          <label htmlFor="faq-d">
            <p className="faq-heading">
              What are the technical requirements for Brainitz?
            </p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              To get setup with Brainitz, instructors will need a computer
              with working Internet connection and a web browser.
              <br />
              <br />
              Students will need any device with a web browser, ranging from
              smartphones to tablets and personal computer, as well as an
              Internet or cellular connection. <br />
              <br />
              For the be st experience, we recommend using the latest version
              of Google Chrome, but it should work on a recent version of any
              major browser. If you have any more questions, please feel free
              to submit a request!
            </p>
          </label>
          <input id="faq-e" type="checkbox" />
          <label htmlFor="faq-e">
            <p className="faq-heading">Can I add a PowerPoint to Brainitz</p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              Yes, you can add a PowerPoint to Brainitz. The easiest way is to
              record your PowerPoint presentation using a screen capture
              program like www.screencast-o-matic.com You can view our
              tutorial on how to do this here. <br />
              <br />
              This will allow you to record your PowerPoint as a video with
              your voice describing the slides. You will then be able to
              upload the video on Brainitz and create an interactive video
              lesson. If you have any more questions, please feel free to
              submit a request!
            </p>
          </label>
          <input id="settings" type="checkbox" />
          <input id="faq-f" type="checkbox" />
          <label htmlFor="faq-f">
            <p className="faq-heading">
              Did my student really get logged out and lose their progress?
            </p>
            <div className="faq-arrow"></div>
            <p className="faq-text">
              If a student does not answer a question in 5 minutes after it
              pops up the student will be ‘timed out’ and they will lose their
              progress from the last previously answered question
              <br />
              <br />
              This feature is built in to discourage students from playing a
              video lesson and walking away. Students must stay engaged with
              the video lesson to avoid being timed out. If you have more
              questions, please feel free to submit a request!
            </p>
          </label>
        </div>
      </div>
    </div> */}
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
                      <Link
                        className="nav-link pl-0"
                        to="https://www.facebook.com/Pourtechnologies/"
                        target="blank"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="https://x.com/pourtech98"
                        target="blank"
                      >
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
                      <Link
                        className="nav-link"
                        to="https://www.linkedin.com/in/pour-technologies-814671287/"
                        target="blank"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="https://www.instagram.com/pourtechnologies/"
                        target="blank"
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
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

export default Appservice;
