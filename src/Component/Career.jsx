import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Career = () => {

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
                            <h1 className="text-white animated slideInDown">Career</h1>
                            <hr className="bg-white mx-auto mt-0" style={{width: "90px"}}/>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Career</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}


        {/* <!-- Career Start --> */}
        <div className="py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <p className="section-title text-secondary justify-content-center"><span></span>Job Listing<span></span></p>
                <h1 className="text-center mb-5">Recently Posted job</h1>
                <div className="testimonial-carousel">
                    <div className="testimonial-item bg-light rounded my-4">
                        <br/>                     
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assats/img/testimonial-1.jpg" style={{width: "65px", height: "65px"}} alt='job-img'/>
                            <div className="ps-4">
                                <h5 className="mb-1">We are hiring React JS Developers</h5>
                                <p><i className="fa fa-map-marker-alt me-3"></i>Kolkata,India   |   <i className="fa fa-clock me-3"></i>Full Time</p>
                            </div>
                            <div className="ps-4"  style={{marginLeft:"40%"}}>
                                <br/>
                                <Link to="/form" className="btn btn-warning rounded-pill py-2 px-4 ms-3">Apply Now</Link>
                                <br/><br/>
                                <p><i className="fa fa-calendar-check me-3"></i>Publish Day : 29, July 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <br/>                     
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assats/img/testimonial-2.jpg" style={{width: "65px", height: "65px"}} alt='job-img'/>
                            <div className="ps-4">
                                <h5 className="mb-1">We are hiring React JS Developers</h5>
                                <p><i className="fa fa-map-marker-alt me-3"></i>Kolkata,India   |   <i className="fa fa-clock me-3"></i>Full Time</p>
                            </div>
                            <div className="ps-4"  style={{marginLeft:"40%"}}>
                                <br/>
                                <Link to="/form" className="btn btn-warning rounded-pill py-2 px-4 ms-3">Apply Now</Link>
                                <br/><br/>
                                <p><i className="fa fa-calendar-check me-3"></i>Publish Day : 29, July 2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded my-4">
                        <br/>                     
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="assats/img/testimonial-3.jpg" style={{width: "65px", height: "65px"}} alt='job-img'/>
                            <div className="ps-4">
                                <h5 className="mb-1">We are hiring React JS Developers</h5>
                                <p><i className="fa fa-map-marker-alt me-3"></i>Kolkata,India   |   <i className="fa fa-clock me-3"></i>Full Time</p>
                            </div>
                            <div className="ps-4"  style={{marginLeft:"40%"}}>
                                <br/>
                                <Link to="/form" className="btn btn-warning rounded-pill py-2 px-4 ms-3">Apply Now</Link>
                                <br/><br/>
                                <p><i className="fa fa-calendar-check me-3"></i>Publish Day : 29, July 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Career End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </>
  )
}

export default Career