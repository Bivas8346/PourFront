import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleService = ({ id }) => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [combinedData, setCombinedData] = useState(null);

  useEffect(() => {
    // Define your API URLs
    const apiUrl1 = `https://pour-tech.onrender.com/api/getPlans/${id}`;
    const apiUrl2 = `https://pour-tech.onrender.com/api/single-service-details/${id}`;

    // Fetch data from the first API
    fetch(apiUrl1)
      .then((response) => response.json())
      .then((data) => {
        setData1(data);
      })
      .catch((error) =>
        console.error("Error fetching data from API 1:", error)
      );

    // Fetch data from the second API
    fetch(apiUrl2)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
      })
      .catch((error) =>
        console.error("Error fetching data from API 2:", error)
      );
  }, [id]);

  useEffect(() => {
    if (data1 && data2) {
      // Combine data from both APIs
      const combined = {
        ...data1,
        ...data2,
        // Combine or map fields as needed
      };
      setCombinedData(combined);
    }
  }, [data1, data2]);

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img src="../assats/images/logo-6.png" width={180} alt="weblogo" />
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
            <div className="col-md-6">
              <h1>
                We promise to bring the best <span>solution</span> for your
                business.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                rhoncus turpis nisl.
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
      {/* <!-- Tech For Service--> */}
      <div className="container-fluid" style={{ marginTop: "5%" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 gtco-feature">
              <h2>
                Technologie We Use
                <br />
              </h2>
              <p>
                Nunc sodales lobortis arcu, sit amet venenatis erat placerat a.
                Donec lacinia magna nulla, cursus impediet augue egestas id.
                Suspendisse dolor lectus, pellentesque quis tincidunt ac, dictum
                id neque.
              </p>
            </div>
            <div className="col-lg-4">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/png;base64,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"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="data:image/png;base64,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"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
              {/* <div className="row">
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                        alt="innovphoto"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                        alt="innovphoto"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png"
                        alt="innovphoto"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About Service --> */}
      <div className="container-fluid gtco-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>About The Service We provide</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                rhoncus turpis nisl, vitae dictum mi semper convallis. Ut sapien
                leo, varius ac dapibus a, cursus quis ante.
              </p>
              <p>
                <small>
                  Nunc sodales lobortis arcu, sit amet venenatis erat placerat
                  a. Donec lacinia magna nulla, cursus impediet augue egestas
                  id. Suspendisse dolor lectus, pellentesque quis tincidunt ac,
                  dictum id neque.
                </small>
              </p>
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
              <Link to="/about">
                Learn More{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
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
                        <strong>Facebook</strong> ads
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
                        <strong>Instagram</strong> ads
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
                      <span>Banner & Poster</span>
                    </li>
                    <li>
                      <span>
                        Proper<strong>Lead</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <Link to={`/contact`} className="button">
                      {" "}
                      Choose plan{" "}
                    </Link>
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
                        <strong>Besic</strong> plans
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
                        <strong>GMB</strong>
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
                      <span>Web Site</span>
                    </li>
                    <li>
                      <span>
                        More<strong>Leads</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <Link to={"/contact"} className="button">
                      {" "}
                      Choose plan{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan">
                <div className="inner">
                  <span className="pricing">
                    <span>
                      {" "}
                      ₹49 <small>/ m</small>{" "}
                    </span>
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
                        <strong>Standeard</strong> plans
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
                        Huge <strong>Leads</strong>
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
                      <span>Website/Hybrid App</span>
                    </li>
                    <li>
                      <span>
                        <strong>6 Months</strong>Free  Maintainance
                      </span>
                    </li>
                  </ul>
                  <div className="action">
                    <Link to={"/contact"} className="button">
                      {" "}
                      Choose plan{" "}
                    </Link>
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

      {combinedData ? (
        <pre>{JSON.stringify(combinedData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}

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

export default SingleService;
