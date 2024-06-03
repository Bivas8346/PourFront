import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from "react-bootstrap/Carousel";

const Testimonial = () => {

  const [aboutData, setAllabout] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4225/api/about")
      .then((res) => {
        setAllabout(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="bg-white p-0">
        {/* <!-- Navbar & Hero Start --> */}
        <div className="position-relative p-0">
          <div className="py-5 bg-info hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">
                  <h1 className="text-white animated slideInDown">
                    Testimonial
                  </h1>
                  <hr
                    className="bg-white mx-auto mt-0"
                    style={{ width: "90px" }}
                  />
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Pages
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        Testimonial
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

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

        {/* <!-- Back to Top --> */}
        <a
          href="#"
          className="btn btn-lg btn-secondary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Testimonial;
