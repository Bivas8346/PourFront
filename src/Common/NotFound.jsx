import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <div className="bg-white p-0">

        {/* <!-- Navbar & Hero Start --> */}
        <div className="position-relative p-0">
            <div className="py-5 bg-warning hero-header">
                <div className="container my-5 py-5 px-lg-5">
                </div>
            </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
        
        {/* <!-- 404 Start --> */}
        <div className="py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-warning"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link to="/" className="btn btn-warning rounded-pill py-3 px-5">Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- 404 End --> */}
    </div>
    </>
  )
}

export default NotFound