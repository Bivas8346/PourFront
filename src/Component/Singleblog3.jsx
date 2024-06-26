import React from "react";
import { Link } from "react-router-dom";

const Singleblog3 = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img
              src="../assats/images/logo-6.png"
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
      {/* <!-- Every Single page for blog --> */}
      <div className="" style={{ marginTop: "10%" }}>
        <div className="col-md-8 mx-auto">
          <h1 style={{ fontWeight: "600" }}>
            Unlocking the Power of SEO: A Guide to Boosting Your Online
            Visibility
          </h1>
          <div className="py-3 text-dark flex items-center justify-center">
            <small className="mr-3 flex flex-row items-center">
              <svg
                fill="currentColor"
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
                 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
                 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                    />
                  </g>
                </g>
              </svg>
              <span className="ml-1">6 mins ago</span>
            </small>
            <small>
              <a href="#" className="flex flex-row items-center text-dark mr-3">
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                  ></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">Pour Technologies</span>
              </a>
            </small>
            <small>
              <a href="#" className="flex flex-row items-center text-dark">
                <svg
                  className="text-indigo-600"
                  fill="currentColor"
                  height="16px"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill=""
                    d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                  ></path>
                </svg>
                <span className="ml-1">Development</span>
              </a>
            </small>
          </div>
        </div>

        <div
          className="col-md-8 mx-auto"
          style={{
            height: "400px",
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2019/04/07/23/11/search-engine-optimization-4111000_1280.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="col-lg-8 p-2 p-sm-4 mx-auto">
          <div className="text-secondary">
            <p className="my-2" style={{ lineHeight: "2" }}>
              In today's digital landscape, having a strong online presence is
              crucial for businesses of all sizes. One of the most effective
              ways to increase your online visibility and drive targeted traffic
              to your website is through Search Engine Optimization (SEO). SEO
              is the practice of optimizing your website and its content to rank
              higher in search engine results pages (SERPs) for relevant
              keywords and phrases. <br /> At its core, SEO revolves around
              understanding how search engines work and tailoring your website
              accordingly. Search engines like Google use complex algorithms to
              crawl, index, and rank websites based on various factors,
              including content quality, user experience, and backlink profile.
              By implementing effective SEO strategies, you can improve your
              website's chances of appearing at the top of search results,
              making it more accessible to potential customers.
            </p>
            <br />
            {/* <br />
            <h3 className="font-weight-bold text-dark">
              #1. What is Lorem Ipsum?
            </h3> */}
            <p className="my-2" style={{ lineHeight: "2" }}>
              One of the key components of SEO is keyword research. Identifying
              the right keywords that your target audience is searching for is
              essential. Once you have a list of relevant keywords, you can
              optimize your website's content, meta tags, and other elements to
              incorporate them naturally and strategically. However, it's
              important to strike a balance and avoid keyword stuffing, which
              can harm your rankings. <br /> On-page optimization is another
              crucial aspect of SEO. This involves optimizing individual web
              pages by crafting compelling titles, meta descriptions, headings,
              and content that not only appeals to search engines but also
              provides value to your visitors. User experience plays a
              significant role in SEO, so ensuring your website is
              mobile-friendly, fast-loading, and easy to navigate can positively
              impact your rankings.
            </p>
            <br />
            <p className="my-2" style={{ lineHeight: "2" }}>
              Off-page optimization, such as link building and local SEO, should
              also be part of your overall SEO strategy. Building high-quality
              backlinks from reputable websites can improve your website's
              authority and credibility in the eyes of search engines.
              Additionally, optimizing your online presence for local searches
              can help you attract more relevant traffic from your target
              geographic area.
              <br /> SEO is an ongoing process that requires consistent effort
              and adaptation to the ever-changing search engine algorithms. By
              staying up-to-date with the latest SEO best practices, conducting
              regular audits, and continuously improving your website's content
              and user experience, you can increase your online visibility and
              drive more qualified traffic to your business. Remember, effective
              SEO is not about tricking search engines but rather about creating
              a valuable, user-friendly website that provides relevant and
              high-quality content to your target audience.
            </p>
          </div>
        </div>
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
                      <Link className="nav-link" to="/webservice">
                        Web Design
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/webservice">
                        Web Devlopment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/seoservice">
                        App Devlopment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/marketingservice">
                        SEO
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/marketingservice">
                        Marketing
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/videoservice">
                        Advertisement
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
                      <Link
                        className="nav-link pl-0"
                        to="https://www.facebook.com/Pourtechnologies/"
                        target="blank"
                      >
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="https://x.com/pourtech98"
                        target="blank"
                      >
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
                      <Link
                        className="nav-link"
                        to="https://www.linkedin.com/in/pour-technologies-814671287/"
                        target="blank"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="https://www.instagram.com/pourtechnologies/"
                        target="blank"
                      >
                        <i className="fa fa-instagram" aria-hidden="true"></i>
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

export default Singleblog3;
