import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Numbercount from "./Extra/Numbercount";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                <Link className="nav-link" to="/service">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
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
                Pioneers of <span>Digital Transformation</span> <br />
              </h1>
              <p>
                Meet the Exceptional Team Driving Innovation at Pour
                Technologies. Explore the collective expertise and passion that
                fuel our commitment to delivering cutting-edge solutions.
                Discover the minds behind our success, shaping the future of
                digital experiences.
              </p>
            </div>

            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/banner-img.png"
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- welcome section --> */}
      <section className="welcome_section layout_padding">
        <div className="container">
          <div className="custom_heading-container">
            <h2>Welcome To Our Company</h2>
          </div>
          <div className="layout_padding2">
            <div className="img-box">
              <img src="./assats/images/welcome.png" alt="welcomephoto" />
            </div>
            <div className="detail-box">
              <p>
                At Pour Technologies, we're dedicated to revolutionizing the way
                you do business in the digital age. With a team of passionate
                experts, cutting-edge technology, and a commitment to
                excellence, we strive to deliver solutions that not only meet
                but exceed your expectations. From web development to
                application development, video advertisement to digital
                marketing strategies, we're here to empower your success.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About --> */}
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
                      xlinkHref="./assats/images/learn-img.jpg"
                      width="100%"
                      height="465"
                      className="svg__image"
                    ></image>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <h2>We are a Creative Digital Agency & Marketing Experts</h2>
              <p>
                In the era of cloud computing, cloud-based solutions are at the
                forefront of business efficiency. We tailor our services to meet
                your unique needs and goals, ensuring a personalized experience.
              </p>
              <p>
                <small>
                  At Pour Technologies, we specialize in developing cutting-edge
                  user friendly applications that help streamline your
                  operations, reduce costs, and enhance productivity. Whether
                  you need a custom CRM, project management tool, or any other
                  cloud-based solution, our team is ready to turn your vision
                  into reality.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Number Block --> */}
      <div className="container-fluid gtco-numbers-block">
        <div className="container">
          <svg width="95%" viewBox="0 0 1600 400">
            <defs>
              <linearGradient id="PSgrad_03" x1="80.279%" x2="0%" y2="0%">
                <stop
                  offset="0%"
                  stopColor="rgb(252, 186, 3 )"
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
              fill="url(#PSgrad_03)"
              d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"
            ></path>

            <clipPath id="ctm" fill="none">
              <path d="M98.891,386.002 L1527.942,380.805 C1581.806,380.610 1599.093,335.367 1570.005,284.353 L1480.254,126.948 C1458.704,89.153 1408.314,59.820 1366.025,57.550 L298.504,0.261 C238.784,-2.944 166.619,25.419 138.312,70.265 L16.944,262.546 C-24.214,327.750 12.103,386.317 98.891,386.002 Z"></path>
            </clipPath>
            <image
              clipPath="url(#ctm)"
              xlinkHref="./assats/images/word-map.png"
              height="800px"
              width="100%"
              className="svg__image"
            ></image>
          </svg>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Numbercount start={0} end={125} duration={8} />
                  </h5>
                  <p className="card-text">Active Projects</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Numbercount start={0} end={200} duration={8} />
                  </h5>
                  {/* <h5 className="card-title">200</h5> */}
                  <p className="card-text">Business Growth</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Numbercount start={0} end={530} duration={8} />
                  </h5>
                  <p className="card-text">Completed Projects</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <Numbercount start={0} end={941} duration={8} />
                  </h5>
                  <p className="card-text">Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Feature Service --> */}
      <div className="services-about section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>
                      We Provide <span>Different Services</span> &amp;
                      <span>Features</span> For Your Agency
                    </h2>
                    <div className="line-dec"></div>
                    <p>
                      we go above and beyond to deliver innovative solutions
                      that align with your unique business needs. Partner with
                      us and experience the difference in your digital journey!
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="./assats/images/services-01.png"
                        alt="discover SEO"
                        className="templatemo-feature"
                      />
                    </div>
                    <h4>Discover More on Latest SEO Trends</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="./assats/images/services-02.png"
                        alt="data analysis"
                        className="templatemo-feature"
                      />
                    </div>
                    <h4>Real-Time Big Data Analysis</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="./assats/images/services-03.png"
                        alt="precise data"
                        className="templatemo-feature"
                      />
                    </div>
                    <h4>Precise Data Analysis &amp; Prediction</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="service-item">
                    <div className="icon">
                      <img
                        src="./assats/images/services-04.png"
                        alt="SEO marketing"
                        className="templatemo-feature"
                      />
                    </div>
                    <h4>SEO Marketing &amp; Social Media</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonials --> */}
      <div className="container-fluid gtco-testimonials">
        <div className="container">
          {/* <h2>What our customers say about us.</h2> */}
          {/* <div className="row">
            <div className="col-12 col-lg-4" style={{ marginTop: "3%" }}>
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="./assats/images/customer1.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5>
                    Lisa Gally <br />
                    <span> Project Manager </span>
                  </h5>
                  <p className="card-text">
                    “ Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat ”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4" style={{ marginTop: "3%" }}>
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="./assats/images/customer2.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5>
                    Missy Limana
                    <br />
                    <span> Project Manager </span>
                  </h5>
                  <p className="card-text">
                    “ Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat ”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4" style={{ marginTop: "3%" }}>
              <div className="card text-center">
                <img
                  className="card-img-top"
                  src="./assats/images/customer3.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5>
                    Aana Brown
                    <br />
                    <span> Project Manager </span>
                  </h5>
                  <p className="card-text">
                    “ Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat ”
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <Slider {...settings}>
            <div>
              <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="./assats/images/customer1.jpg"
                    alt="clientphoto"
                  />
                  <div className="card-body">
                    <h5>
                      Lisa Gally <br />
                      <span> Project Manager </span>
                    </h5>
                    <p className="card-text">
                      “ Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="./assats/images/customer2.jpg"
                    alt="clientphoto"
                  />
                  <div className="card-body">
                    <h5>
                      Missy Limana
                      <br />
                      <span> Project Manager </span>
                    </h5>
                    <p className="card-text">
                      “ Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="./assats/images/customer3.jpg"
                    alt="clientphoto"
                  />
                  <div className="card-body">
                    <h5>
                      Aana Brown
                      <br />
                      <span> Project Manager </span>
                    </h5>
                    <p className="card-text">
                      “ Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat ”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider> */}
        </div>
      </div>
      {/* <div className="container-fluid gtco-features">
        <a href="/review" style={{ marginLeft: "35%" }}>
          View More <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
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

export default About;
