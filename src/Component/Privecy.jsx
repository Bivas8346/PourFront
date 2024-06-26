import React from "react";
import { Link } from "react-router-dom";

const Privecy = () => {
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
                <Link className="nav-link" to="/career">
                  Carrer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
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
            <div className="col-md-6">
              <h1> Company Privecy Policy </h1>
              <p>
                {" "}
                At Pour Technologies, we are committed to protecting your
                privacy and safeguarding your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard the
                information you provide to us through our website and services..{" "}
              </p>
            </div>
            <div className="col-md-6">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/privecy.png"
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Privecy Start --> */}
      <div className="container-xxl py-5">
        <div className="py-5 px-lg-5 container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-dark">
                Information Collection and Use:<span></span>
              </p>
              <p className="mb-4">
                We may collect personal information such as your name, email
                address, phone number, and company information when you interact
                with our website, request information, or use our services. We
                use this information to respond to your inquiries, provide you
                with requested services, and improve our offerings. <br /> We
                may also collect non-personal information, such as your IP
                address, browser type, and usage data, for analytical purposes
                and to enhance your browsing experience.
              </p>
              <br />
              <p className="section-title text-dark">
                Data Sharing and Disclosure:<span></span>
              </p>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with
                trusted third-party service providers who assist us in operating
                our website, conducting business, or servicing you. These
                providers are bound by confidentiality agreements and are not
                permitted to use your information for any other purpose. <br />
                We may also disclose your information when required by law, to
                protect our rights and property, or in response to legal
                processes such as court orders or subpoenas.
              </p>
              <br />
              <p className="section-title text-dark">
                Data Security:<span></span>
              </p>
              <p className="mb-4">
                We implement reasonable administrative, technical, and physical
                safeguards to protect your personal information from
                unauthorized access, use, or disclosure. However, no method of
                transmission over the internet or electronic storage is entirely
                secure, and we cannot guarantee absolute security.
              </p>
              <br />
              <p className="section-title text-dark">
                Cookies and Tracking Technologies:<span></span>
              </p>
              <p className="mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience and collect usage data. You can
                control and manage cookie settings through your browser
                preferences.
              </p>
              <br />
              <p className="section-title text-dark">
                Third-Party Links and Services:<span></span>
              </p>
              <p className="mb-4">
                Our website may contain links to third-party websites or
                services that are not operated by Pour Technologies. We have no
                control over the privacy practices of these third parties, and
                we encourage you to review their respective privacy policies.
              </p>
              <br />
              <p className="section-title text-dark">
                Children's Privacy:<span></span>
              </p>
              <p className="mb-4">
                Our website and services are not intended for children under the
                age of 18. We do not knowingly collect personal information from
                children without parental consent.
              </p>
              <br />
              <p className="section-title text-dark">
                Changes to this Privacy Policy:<span></span>
              </p>
              <p className="mb-4">
                We reserve the right to update or modify this Privacy Policy at
                any time. Any changes will be effective immediately upon posting
                the revised policy on our website.
              </p>
              <br />
              <p className="section-title text-dark">
                Contact Us:<span></span>
              </p>
              <p className="mb-4">
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at{" "}
                <a href="mailto:info@pourtechnologies.com">
                  info@pourtechnologies.com
                </a>
                . <br />
                <br />
                By using our website and services, you acknowledge and agree to
                the terms of this Privacy Policy.
              </p>
            </div>
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

export default Privecy;
