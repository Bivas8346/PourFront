import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
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
            style={{ paddingLeft: "20%", paddingRight: "10%" }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-active" to="/service">
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
                <Link className="nav-link active" to="/blog">
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
            <div className="col-md-5">
              <h1>
                Insights and <span>Inspiration</span> from the Tech Realm
              </h1>
              <p>
                Stay Ahead of the Curve with Our Expert Blogs to Insights and
                Updates from the World of Technology
              </p>
            </div>
            <div className="col-md-7">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/blog-banner.png "
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--Start Blog --> */}
      <div className="blog-wrap">
        <div className="blog-post">
          <div className="feat-img">
            <img
              className="blog-img"
              src="../assats/images/seo.png"
              alt="blog-img"
            />
          </div>
          <article className="blog-article">
            <header className="blog-header">
              <ul className="blog-cat">
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Articles
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    News
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Breaking
                  </a>
                </li>
              </ul>
              <h2 className="blog-h">
                <Link to={`/oneblog`} className="blog-a">
                  Blog Title
                </Link>
              </h2>
            </header>
            <p>Blog Sub HEading</p>
            <footer>
              <Link to={`/oneblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>
        <div className="blog-post">
          <div className="feat-img">
            <img
              className="blog-img"
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="blog-img"
            />
          </div>
          <article className="blog-article">
            <header className="blog-header">
              <ul className="blog-cat">
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Articles
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    News
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Breaking
                  </a>
                </li>
              </ul>
              <h2 className="blog-h">
                <Link to={`/2ndblog`} className="blog-a">
                  Blog Title
                </Link>
              </h2>
            </header>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <footer>
              <Link to={`/2ndblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>

        <div className="blog-post">
          <div className="feat-img">
            <img
              className="blog-img"
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="blog-img"
            />
          </div>
          <article className="blog-article">
            <header className="blog-header">
              <ul className="blog-cat">
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Articles
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    News
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Breaking
                  </a>
                </li>
              </ul>
              <h2 className="blog-h">
                <Link to={`/3rdblog`} className="blog-a">
                  Blog Title
                </Link>
              </h2>
            </header>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <footer>
              <Link to={`/3rdblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>

        <div className="blog-post">
          <div className="feat-img">
            <img
              className="blog-img"
              src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJsb2d8ZW58MHx8MHx8fDA%3D"
              alt="blog-img"
            />
          </div>
          <article className="blog-article">
            <header className="blog-header">
              <ul className="blog-cat">
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Articles
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    News
                  </a>
                </li>
                <li className="blog-li">
                  <a className="blog-a" href="#">
                    Breaking
                  </a>
                </li>
              </ul>
              <h2 className="blog-h">
                <Link to={`/4thblog`} className="blog-a">
                  Blog Title
                </Link>
              </h2>
            </header>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
            <footer>
              <Link to={`/4thblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>
      </div>
      {/* <!-- Footer --> */}
      <footer className="container-fluid gtco-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <h4>Company</h4>
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
                        Privecy Policy
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
            <div className="col-lg-6">
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
                        Privecy Policy
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
                  <img
                    src="./assats/images/logo-4.png"
                    width={170}
                    alt="weblogo"
                  />
                  <p style={{ color: "white" }}>Kolkata, Dumdum</p>

                  <h4 className="mt-5">Fllow Us</h4>
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
                <div className="col-12">
                  <p style={{ marginLeft: "-50%" }}>
                    &copy; 2024. All Rights Reserved . Design by Pour
                    Technologies .
                  </p>
                </div>
              </div>
            </div>
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

export default Project;
