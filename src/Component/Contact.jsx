import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {

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
                            <h1 className="text-white animated slideInDown">Contact</h1>
                            <hr className="bg-white mx-auto mt-0" style={{width: "90px"}}/>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Contact</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}


        
        <div className="py-5">
            <div className="container py-5 px-lg-5">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
                    <h1 className="text-center mb-5">Contact For Any Query</h1>
                </div>
                <div className="row justify-content-center">
                    {/* <!-- Contact Start --> */}
                    <div className="col-lg-6">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="#">Download Now</a>.</p>
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
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Phone Number"/>
                                            <label htmlFor="name">Your Phone</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Service"/>
                                            <label htmlFor="email">Select Service</label>
                                        </div>
                                    </div>
                                    {/* <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div> */}
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-warning w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                     {/* <!-- Contact End --> */}
                     {/* <!-- Map End --> */}
                    <div className="col-lg-6">
                        <div className="wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="#">Download Now</a>.</p>
                            <iframe className="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9000608074384!2d88.40759857507916!3d22.620206879457868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027149d161b015%3A0x5efc63748090fb53!2sWebgoogly%20Think%20Private%20Limited!5e0!3m2!1sen!2sin!4v1711712974804!5m2!1sen!2sin"
                        frameBorder="0" style={{minHeight: "350px", border:"0"}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    {/* <!-- Map End --> */}
                </div>
            </div>
        </div>
       


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </>
  )
}

export default Contact