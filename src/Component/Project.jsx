import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Project = () => {
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
            <div className="py-5 bg-warning hero-header">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-12 text-center">
                            <h1 className="text-white animated slideInDown">Project</h1>
                            <hr className="bg-white mx-auto mt-0" style={{width: "90px"}}/>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Project</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}


        {/* <!-- Projects Start --> */}
        <div className="py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
                    <h1 className="text-center mb-5">Recently Completed Projects</h1>
                </div>
                <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="col-12 text-center">
                        <ul className="list-inline mb-5" id="portfolio-flters">
                            <li className="mx-2 active" data-filter="*">All</li>
                            <li className="mx-2" data-filter=".first">Web Design</li>
                            <li className="mx-2" data-filter=".second">Graphic Design</li>
                        </ul>
                    </div>
                </div>
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-1.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <Link to={"/single"} className="btn btn-square btn-outline-light mx-1"><i className="fa fa-link"></i></Link>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-2.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-3.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-4.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-5.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
                        <div className="rounded overflow-hidden">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="assats/img/portfolio-6.jpg" alt="work-img"/>
                                <div className="portfolio-overlay">
                                    <a className="btn btn-square btn-outline-light mx-1" href="assats/img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                                    <a className="btn btn-square btn-outline-light mx-1" href=""><i className="fa fa-link"></i></a>
                                </div>
                            </div>
                            <div className="bg-light p-4">
                                <p className="text-primary fw-medium mb-2">UI / UX Design</p>
                                <h5 className="lh-base mb-0">Digital Agency Website Design And Development</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Projects End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    </>
  )
}

export default Project