import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Numbercount from "./Extra/Numbercount";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
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
      <nav className="navbar navbar-expand-lg navbar-light  gtco-main-nav">
        <div className="container sticky">
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
            style={{
              paddingLeft: "20%",
              paddingRight: "10%",
              backgroundColor: "#fffeeb",
            }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
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
            <div className="col-md-6 col-12">
              <h1>
                Unleash Your Digital Potential with <br />{" "}
                <span>Pour Technologies</span>
              </h1>
              <p>
                We promise to bring the best solution for your business.
                Innovative Software Solutions for Your Business Growth
              </p>
              <br />
              <br />
              <br />
              <Link to="/contact">
                Contact Us{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-md-6 col-12">
              <div className="logobn">
                <div className="logocontainer">
                  <div className="logorotation">
                    <img
                      className="topics seo"
                      src="./assats/images/seo.svg"
                      alt="anime"
                    />
                    <img
                      className="topics css3"
                      src="./assats/images/css3.svg"
                      alt="anime"
                    />
                    <img
                      className="topics html5"
                      src="./assats/images/html5.svg"
                      alt="anime"
                    />
                    <img
                      className="topics sass"
                      src="./assats/images/sass.svg"
                      alt="anime"
                    />
                    <img
                      className="topics js"
                      src="./assats/images/js.svg"
                      alt="anime"
                    />
                    <img
                      className="topics php"
                      src="./assats/images/php.svg"
                      alt="anime"
                    />
                    <img
                      className="topics swift"
                      src="./assats/images/swift.svg"
                      alt="anime"
                    />
                  </div>
                  <svg
                    className="retina"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 500 500"
                    style={{ enableBackground: "new 0 0 500 500" }}
                    xmlSpace="preserve"
                  >
                    <path
                      className="st9 Retina2"
                      d="M222,186.3l-5.1,4.9l2.1-6.7c-0.7-0.2-1.3-0.3-2.1-0.3c-3.9,0-7.1,3.2-7.1,7.1
                        c0,3.9,3.2,7.1,7.1,7.1c3.9,0,7.1-3.2,7.1-7.1C224,189.2,223.3,187.5,222,186.3z"
                    />
                    <path
                      className="st9 Retina1"
                      d="M281.6,186.3l-5.1,4.9l2.1-6.7c-0.7-0.2-1.3-0.3-2.1-0.3c-3.9,0-7.1,3.2-7.1,7.1
                        c0,3.9,3.2,7.1,7.1,7.1c3.9,0,7.1-3.2,7.1-7.1C283.5,189.2,282.8,187.5,281.6,186.3z"
                    />
                  </svg>
                  <img
                    className="sanky"
                    src="./assats/images/sanky.svg"
                    alt="anime"
                  />
                </div>
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
      {/* <!-- Why Choose Us --> */}
      <div className="container-fluid gtco-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h2>Why Choose Us</h2>
              <p>
                Our dedication to excellence sets us apart. Here’s why Pour
                Technologies is the right choice for you:
              </p>
              <p>
                <small>
                  We deliver top-notch services that exceed your expectations,
                  ensuring the highest standards in every project. Our skilled
                  professionals are experts in their fields, providing you with
                  the best solutions and innovative approaches. Your success is
                  our priority. We tailor our services to meet your unique needs
                  and goals, ensuring a personalized experience.
                </small>
              </p>
              <Link to="/about">
                Learn More{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-md-7">
              <div className="cover">
                <div className="card">
                  <svg width="100%" viewBox="0 0 700 500">
                    <image
                      xlinkHref="./assats/images/problem.jpg"
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
      {/* <!-- Innovation --> */}
      <div className="container-fluid gtco-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>
                Explore The Services
                <br />
                Best Innovation <br />
                For Your Business
              </h2>
              <p>
                Explore a range of cutting-edge solutions crafted to propel your
                business forward. From web development to digital marketing, we
                deliver excellence tailored to your needs.
              </p>
              <Link to="/service">
                All Services{" "}
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
            <div className="col-lg-8">
              <svg id="bg-services" width="100%" viewBox="0 0 1000 800">
                <defs>
                  <linearGradient
                    id="PSgrad_02"
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
                  fill="url(#PSgrad_02)"
                  d="M801.878,3.146 L116.381,128.537 C26.052,145.060 -21.235,229.535 9.856,312.073 L159.806,710.157 C184.515,775.753 264.901,810.334 338.020,792.380 L907.021,652.668 C972.912,636.489 1019.383,573.766 1011.301,510.470 L962.013,124.412 C951.950,45.594 881.254,-11.373 801.878,3.146 Z"
                />
              </svg>
              <div className="row">
                <div className="col">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="./assats/images/web-design.png"
                        alt="innovphoto"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Web Design</h3>
                      <p className="card-text">
                        Web design is a dynamic and multifaceted field that
                        plays a crucial role in the success of any online
                        presence.
                      </p>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="./assats/images/marketing.png"
                        alt="innovphoto"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">Marketing</h3>
                      <p className="card-text">
                        Marketing is a multifaceted discipline that involves
                        promoting and selling products or services to consumers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="./assats/images/seo.png"
                        alt="innovphoto"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">SEO</h3>
                      <p className="card-text">
                        SEO is a critical aspect of digital marketing that
                        focuses on enhancing a website’s visibility in search
                        engine results pages.
                      </p>
                    </div>
                  </div>
                  <div className="card text-center">
                    <div className="oval">
                      <img
                        className="card-img-top"
                        src="./assats/images/graphics-design.png"
                        alt="innovphoto"
                      />
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">App Development</h3>
                      <p className="card-text">
                        The goal is to develop functional, user-friendly, and
                        reliable applications that meet the needs of users and
                        businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  cloud-based applications that help streamline your operations,
                  reduce costs, and enhance productivity. Whether you need a
                  custom CRM, project management tool, or any other cloud-based
                  solution, our team is ready to turn your vision into reality.
                </small>
              </p>
              <Link to="/about">
                Learn More
                <i className="fa fa-angle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Number Block --> */}
      <div className="container-fluid gtco-numbers-block" style={{marginBottom:"5%"}}>
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
      {/* <!-- Discover our project --> */}
      {/* <div className="projects section gtco-testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>
                  Discover Our Work &amp; <span>Projects</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div>
              <div className="row">
                <div className="item-discover col-lg-3 col-md-6 col-sm-6 col-12">
                  <img
                    className="item-pic"
                    src="./assats/images/projects-01.jpg"
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Digital Agency HTML Templates</h4>
                    <a href="#">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="item-discover col-lg-3 col-md-6 col-sm-6 col-12">
                  <img
                    className="item-pic"
                    src="./assats/images/projects-02.jpg"
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Dashboard CSS Templates</h4>
                    <a href="#">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="item-discover col-lg-3 col-md-6 col-sm-6 col-12">
                  <img
                    className="item-pic"
                    src="./assats/images/projects-03.jpg"
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Best Responsive Website Layouts</h4>
                    <a href="#">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="item-discover col-lg-3 col-md-6 col-sm-6 col-12">
                  <img
                    className="item-pic"
                    src="./assats/images/projects-04.jpg"
                    alt=""
                  />
                  <div className="down-content">
                    <h4>Layouts for your websites</h4>
                    <a href="#">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Testimonials --> */}
      {/* <div className="container-fluid gtco-testimonials">
        <div className="container">
          <h2>What our customers say about us.</h2>
          <Slider {...settings}>
            <div>
              <div>
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
            </div>
            <div>
              <div>
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
            </div>
            <div>
              <div>
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
            </div>
          </Slider>
        </div>
      </div> */}

      {/* <div className="container-fluid gtco-features">
        <a href="/review" style={{ marginLeft: "45%" }}>
          View More <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div> */}
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
      {/* <!-- Work With --> */}

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
            <div className="col-lg-4">
              <div className="row">
                <div className="col-10">
                  <img
                    src="./assats/images/logo-6.png"
                    width={170}
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
              </div>
            </div>
          </div>
          <div className="col-12">
            <p style={{ marginLeft:"10%"}}>
              &copy; 2024. All Rights Reserved . Design by Pour Technologies .
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

export default Home;
