import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  return (
    <>
        <div className="bg-white p-0">


        {/* <!-- Navbar & Hero Start --> */}
        <div className="position-relative">
          <div className="bg-warning hero-header">
            <div className="container px-lg-5">
              <div className="row g-5 align-items-end">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">
                    Apply For Your Dream Job To Boost Your Career For Feuture & Show Your Creativity 
                  </h1>
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


        
        <div className="py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Apply Now<span></span></p>
                </div>
                <div className="row justify-content-center">
                    {/* <!-- Contact Start --> */}
                    <div className="col-lg-6">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Your Phone Number"/>
                                            <label htmlFor="subject">Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Select Yor Role"/>
                                            <label htmlFor="name">Apply For</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Expriance"/>
                                            <label htmlFor="email">Expriance(if you have)</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Your Address"/>
                                            <label htmlFor="subject">Address</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your State"/>
                                            <label htmlFor="name">State</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Pin Code"/>
                                            <label htmlFor="email">Zip</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="file" className="form-control" id="email" placeholder="Uplode Your CV here"/>
                                            <label htmlFor="message">Uplode Your CV</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-warning w-100 py-3" type="submit">Apply</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Contact End --> */}
                </div>
            </div>
        </div>
       


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </>
  )
}

export default ApplyForm