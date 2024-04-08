import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {

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
        {/* <!-- Hero Start --> */}
        <div className="position-relative p-0">
            <div className="py-5 bg-warning hero-header">
                <div className="my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 text-center">
                            <h1 className="text-white animated slideInDown">About Us</h1>
                            <hr className="bg-white mx-auto mt-0" style={{width: "100px"}}/>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Hero End --> */}


        {/* <!-- Feature Start --> */}
        <div className="py-5">
            <div className="py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-mail-bulk text-warning mb-4"></i>
                            <h5 className="mb-3">Digital Marketing</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-search text-warning mb-4"></i>
                            <h5 className="mb-3">SEO & Backlinks</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="feature-item bg-light rounded text-center p-4">
                            <i className="fa fa-3x fa-laptop-code text-warning mb-4"></i>
                            <h5 className="mb-3">Design & Development</h5>
                            <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Feature End --> */}


        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
            <div className="py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p className="section-title text-secondary">About Us<span></span></p>
                        <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                        <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Digital Marketing</p>
                                <p className="mb-2">85%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">SEO & Backlinks</p>
                                <p className="mb-2">90%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <p className="mb-2">Design & Development</p>
                                <p className="mb-2">95%</p>
                            </div>
                            <div className="progress">
                                <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <a href="" className="btn btn-danger py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="assats/img/about.png" alt='about-img'/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About End --> */}


        {/* <!-- Facts Start --> */}
        <div className="bg-warning fact py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Years Experience</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                        <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Team Members</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                        <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Satisfied Clients</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                        <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                        <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                        <p className="text-white mb-0">Compleate Projects</p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Facts End --> */}
        

        {/* <!-- About us Start --> */}
        <div className="py-5">
        <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center">
                <span></span>Why choose Us?<span></span>
              </p>
              <h1 className="text-center mb-5">We Are The best in this Feld</h1>
            </div>
            <div className="py-5 px-lg-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp bg-warning" data-wow-delay="0.1s">
                        <br/>
                        <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                        <p className="mb-4 text-light">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <br/>
                    </div>
                    <div className="col-lg-6 wow fadeInUp bg-danger" data-wow-delay="0.1s">
                        <br/>
                        <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                        <p className="mb-4 text-light">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- About us End --> */}
        

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </>
  )
}

export default About