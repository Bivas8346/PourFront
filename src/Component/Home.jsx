import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {


  const [aboutData, setAllabout] = useState([]);
    const [reviewData, setAllreview] = useState([]);
    const [LimitserviceData, setAlllimitservice] = useState([]);
    const [LimitprovidereData, setAlllimitprovider] = useState([]);
    const [homeData, setAllhome] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4225/api/about')
            .then((res) => {
                setAllabout(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/review')
            .then((res) => {
                setAllreview(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get('http://localhost:4225/api/limitservice')
            .then((res) => {
                setAlllimitservice(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/limitprovider')
            .then((res) => {
                setAlllimitprovider(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        axios
            .get('http://localhost:4225/api/home')
            .then((res) => {
                setAllhome(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

  return (
    <>
      <div className="bg-white">
        {/* <!-- Navbar & Hero Start --> */}
        <div className="position-relative">
          <div className="bg-warning hero-header">
            <div className="container px-lg-5">
              <div className="row g-5 align-items-end">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">
                    A Digital Agency Of Inteligents & Creative People
                  </h1>
                  <p className="text-white pb-3 animated slideInDown">
                    Tempor rebum no at dolore lorem clita rebum rebum ipsum
                    rebum stet dolor sed justo kasd. Ut dolor sed magna dolor
                    sea diam. Sit diam sit justo amet ipsum vero ipsum clita
                    lorem
                  </p>
                  <a
                    href=""
                    className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                  >
                    Read More
                  </a>
                  <a
                    href=""
                    className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                  <img
                    className="img-fluid animated zoomIn"
                    src="assats/img/hero.png"
                    alt="Banner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Feature Start --> */}
        <div className="container py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-mail-bulk text-warning mb-4"></i>
                  <h5 className="mb-3">Digital Marketing</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-search text-warning mb-4"></i>
                  <h5 className="mb-3">SEO & Backlinks</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-laptop-code text-warning mb-4"></i>
                  <h5 className="mb-3">Design & Development</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End --> */}

        {/* <!-- About Start --> */}
        <div className="container py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary">
                  About Us<span></span>
                </p>
                <h1 className="mb-5">
                  #1 Digital solution with 10 years of experience
                </h1>
                <p className="mb-4">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit, sed stet no
                  labore lorem sit clita duo justo eirmod magna dolore erat amet
                </p>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Digital Marketing</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      ariaValuenow="85"
                      ariaValuemin="0"
                      ariaValuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">SEO & Backlinks</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Design & Development</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-dark"
                      role="progressbar"
                      aria-valuenow="95"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <a
                  href=""
                  className="btn btn-danger py-sm-3 px-sm-5 rounded-pill mt-3"
                >
                  Read More
                </a>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.5s"
                  src="assats/img/about.png"
                  alt='about-img'
                />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Facts Start --> */}
        <div className="bg-warning fact py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">Years Experience</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">Team Members</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">Satisfied Clients</p>
              </div>
              <div
                className="col-md-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.7s"
              >
                <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  1234
                </h1>
                <p className="text-white mb-0">Compleate Projects</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}

        {/* <!-- Service Start --> */}
        <div className="container py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span></span>Our Services<span></span>
              </p>
              <h1 className="text-center mb-5">What Solutions We Provide</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-search fa-2x"></i>
                  </div>
                  <h5 className="mb-3">SEO Optimization</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-laptop-code fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Web Design</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Social Media Marketing</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-mail-bulk fa-2x"></i>
                  </div>
                  <h5 className="mb-3">Email Marketing</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fa fa-thumbs-up fa-2x"></i>
                  </div>
                  <h5 className="mb-3">PPC Advertising</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className="fab fa-android fa-2x"></i>
                  </div>
                  <h5 className="mb-3">App Development</h5>
                  <p className="m-0">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <a className="btn btn-square" href="">
                    <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

       {/* <!-- Plan Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Most Populer Service<span></span>
            </p>
            <h1 className="text-center mb-5">Best Pricing For Our Clients</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1595757816291-ab4c1cba0fc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Contact Us</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1506792006437-256b665541e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1506792006437-256b665541e2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Book</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Book</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plan End --> */}

        {/* <!-- Newsletter Start --> */}
        <div
          className="containe bg-warning newsletter py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5 px-lg-5">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <p className="section-title text-white justify-content-center">
                  <span></span>Newsletter<span></span>
                </p>
                <h1 className="text-center text-white mb-4">
                  Stay Always In Touch
                </h1>
                <p className="text-white mb-4">
                  Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et
                  eos labore. Clita erat ipsum et lorem et sit sed stet lorem
                  sit clita duo justo
                </p>
                <div className="position-relative w-100 mt-3">
                  <input
                    className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                    type="text"
                    placeholder="Enter Your Email"
                    style={{ height: "48px" }}
                  />
                  <button
                    type="button"
                    className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
                  >
                    <i className="fa fa-paper-plane text-warning fs-4"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Newsletter End --> */}

        {/* <!-- Projects Start --> */}
        <div className="container py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span></span>Our Projects<span></span>
              </p>
              <h1 className="text-center mb-5">Recently Completed Projects</h1>
            </div>
            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
              <div className="col-12 text-center">
                <ul className="list-inline mb-5" id="portfolio-flters">
                  <li className="mx-2 active" data-filter="*">
                    All
                  </li>
                  <li className="mx-2" data-filter=".first">
                    Web Design
                  </li>
                  <li className="mx-2" data-filter=".second">
                    Graphic Design
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 portfolio-container">
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-1.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-1.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-2.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-2.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-3.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-3.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-4.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-4.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-5.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-5.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100"
                      src="assats/img/portfolio-6.jpg"
                      alt="work-img"
                    />
                    <div className="portfolio-overlay">
                      <a
                        className="btn btn-square btn-outline-light mx-1"
                        href="assats/img/portfolio-6.jpg"
                        data-lightbox="portfolio"
                      >
                        <i className="fa fa-eye"></i>
                      </a>
                      <Link to={"/project"} className="btn btn-square btn-outline-light mx-1">
                        <i className="fa fa-link"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-light p-4">
                    <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                    <h5 className="lh-base mb-0">
                      Digital Agency Website Design And Development
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Projects End --> */}

        {/* <!-- Testimonial Start --> */}
        <div className="py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Testimonial<span></span>
            </p>
            <h1 className="text-center mb-5">What Say Our Clients!</h1>
            <Carousel className="py-5 wow fadeInUp" data-wow-delay="0.1s">
          <Carousel.Item interval={1000}>
            <div className="container py-5 px-lg-5">
              <div className="testimonial-carousel">
                <div className="testimonial-item bg-light rounded my-4">
                  <p className="fs-5">
                    <i className="fa fa-quote-left fa-4x text-danger mt-n4 me-3"></i>
                    Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit sed stet lorem sit clita
                    duo justo.
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="assats/img/testimonial-1.jpg"
                      style={{ width: "65px", height: "65px" }}
                      alt="clint-img"
                    />
                    <div className="ps-4">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <div className="container py-5 px-lg-5">
              <div className="testimonial-carousel">
                <div className="testimonial-item bg-light rounded my-4">
                  <p className="fs-5">
                    <i className="fa fa-quote-left fa-4x text-danger mt-n4 me-3"></i>
                    Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit sed stet lorem sit clita
                    duo justo.
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="assats/img/testimonial-1.jpg"
                      style={{ width: "65px", height: "65px" }}
                      alt="clint-img"
                    />
                    <div className="ps-4">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container py-5 px-lg-5">
              <div className="testimonial-carousel">
                <div className="testimonial-item bg-light rounded my-4">
                  <p className="fs-5">
                    <i className="fa fa-quote-left fa-4x text-danger mt-n4 me-3"></i>
                    Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
                    Clita erat ipsum et lorem et sit sed stet lorem sit clita
                    duo justo.
                  </p>
                  <div className="d-flex align-items-center">
                    <img
                      className="img-fluid flex-shrink-0 rounded-circle"
                      src="assats/img/testimonial-1.jpg"
                      style={{ width: "65px", height: "65px" }}
                      alt="clint-img"
                    />
                    <div className="ps-4">
                      <h5 className="mb-1">Client Name</h5>
                      <span>Profession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
          </div>
        </div>
        {/* <!-- Testimonial End --> */}

        {/* <!-- Team Start --> */}
        {/* <div className="container- py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span></span>Our Team<span></span>
              </p>
              <h1 className="text-center mb-5">Our Team Members</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="assats/img/team-1.jpg"
                      alt="team-img"
                    />
                    <h5>John Doe</h5>
                    <span>CEO & Founder</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="assats/img/team-2.jpg"
                      alt="team-img"
                    />
                    <h5>Jessica Brown</h5>
                    <span>Web Designer</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="team-item bg-light rounded">
                  <div className="text-center border-bottom p-4">
                    <img
                      className="img-fluid rounded-circle mb-4"
                      src="assats/img/team-3.jpg"
                      alt="team-img"
                    />
                    <h5>Tony Johnson</h5>
                    <span>SEO Expert</span>
                  </div>
                  <div className="d-flex justify-content-center p-4">
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-square mx-1" href="">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Team End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Home;
