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
            <img
              src="./assats/images/logo-6.png"
              className="nav-logo"
              alt="weblogo"
            />
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
              src="https://cdn.pixabay.com/photo/2022/03/26/01/52/seo-7092116_1280.png"
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
                  The Art of Effective Advertising: Strategies for Capturing
                  Attention and Driving Results
                </Link>
              </h2>
            </header>
            <p>
              In today's crowded and competitive marketplace, advertising has
              become an essential tool for businesses to stand out, connect with
              their target audiences, and ultimately drive sales and growth.
            </p>
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
              src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg"
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
                  Crafting Digital Excellence: The Importance of Website and
                  Application Development
                </Link>
              </h2>
            </header>
            <p>
              In the digital age, having a robust online presence and innovative
              applications has become paramount for businesses to thrive and
              stay competitive. A well-designed website serves as the digital
              storefront, showcasing a company's products, services, and brand
              identity to the world.
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
              src="https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg"
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
                  Unlocking Growth in the Digital Age: The Power of Digital
                  Marketing
                </Link>
              </h2>
            </header>
            <p>
              Digital marketing has revolutionized the way businesses connect
              with their target audiences in the modern era. With the advent of
              the internet and the ubiquitous presence of digital devices,
              companies now have unprecedented opportunities to reach and engage
              with customers through a multitude of online channels.
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
              src="https://cdn.pixabay.com/photo/2021/02/26/10/47/freelance-6051357_960_720.jpg"
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
                <Link to={`/5thblog`} className="blog-a">
                  Amplify Your Digital Reach with Google Ads
                </Link>
              </h2>
            </header>
            <p>
              In today's digital age, businesses of all sizes are vying for
              online visibility and customer attention. One powerful tool that
              can propel your brand to the forefront of your target audience is
              Google Ads, the advertising platform offered by the world's
              leading search engine.
            </p>
            <footer>
              <Link to={`/5thblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>
        <div className="blog-post">
          <div className="feat-img">
            <img
              className="blog-img"
              src="https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg"
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
                  Unlocking the Power of SEO: A Guide to Boosting Your Online
                  Visibility
                </Link>
              </h2>
            </header>
            <p>
              In today's digital landscape, having a strong online presence is
              crucial for businesses of all sizes. One of the most effective
              ways to increase your online visibility and drive targeted traffic
              to your website is through Search Engine Optimization (SEO). SEO
              is the practice of optimizing your website and its content to rank
              higher in search engine results pages (SERPs) for relevant
              keywords and phrases.
            </p>
            <footer>
              <Link to={`/4thblog`} className="more-link blog-a">
                Read More
              </Link>
            </footer>
          </article>
        </div>

        {/* <div className="blog-post">
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
        </div> */}
      </div>
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
            <div className="footer-logo col-lg-4 col-sm-6">
              <div className="row">
                <div className="col-10">
                  <img
                    src="./assats/images/logo-6.png"
                    width={120}
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                        </svg>
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
          <div className="copyright col-12">
            <p>
              &copy; 2024. All Rights Reserved. Designed by Pour Technologies.
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

export default Project;
