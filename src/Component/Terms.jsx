import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img src="./assats/images/logo-6.png" className="nav-logo" alt="weblogo" />
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
            <div className="col-md-5">
              <h1> Terms & Condition </h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                rhoncus turpis nisl.{" "}
              </p>
            </div>
            <div className="col-md-7">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/terms.png"
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Terms Start --> */}
      <div className="container-xxl py-5">
        <div className="py-5 px-lg-5 container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title text-dark">Terms and Conditions</h5>
              <p className="mb-4">
                Welcome to Pour Technologies! These Terms and Conditions outline
                the rules and regulations for the use of our website and
                services. By accessing or using our website, you agree to be
                bound by these Terms and Conditions. Please read them carefully.
              </p>
              <h5 className="section-title text-dark">Acceptance of Terms</h5>
              <p className="mb-4">
                By using our website or services, you acknowledge that you have
                read, understood, and agreed to be bound by these Terms and
                Conditions, as well as our Privacy Policy. If you do not agree
                with any part of these terms, you must not use our website or
                services.
              </p>
              <h5 className="section-title text-dark">
                Use of Website and Services
              </h5>
              <p className="mb-4">
                Our website and services are provided for lawful purposes only.
                You agree not to use our website or services for any unlawful or
                prohibited purposes, including but not limited to:
              </p>
              <ul className="mb-4">
                <li>
                  Engaging in any illegal activities or violating any applicable
                  laws or regulations
                </li>
                <li>
                  Transmitting or distributing any harmful, abusive, defamatory,
                  or obscene content
                </li>
                <li>
                  Infringing on intellectual property rights, including
                  copyrights, trademarks, and patents
                </li>
                <li>
                  Attempting to gain unauthorized access to our systems or
                  interfering with their proper operation
                </li>
              </ul>
              <h5 className="section-title text-dark">Intellectual Property</h5>
              <p className="mb-4">
                The content and materials on our website, including but not
                limited to text, graphics, logos, images, and software, are the
                property of Pour Technologies or its licensors and are protected
                by intellectual property laws. You may not use, reproduce,
                distribute, modify, or create derivative works from our content
                without our prior written consent.
              </p>
              <h5 className="section-title text-dark">
                User Accounts and Responsibilities
              </h5>
              <p className="mb-4">
                To access certain features or services, you may be required to
                create an account. You are responsible for maintaining the
                confidentiality of your account information and for all
                activities that occur under your account. You agree to provide
                accurate and complete information when creating an account and
                to keep your account information up-to-date.
              </p>
              <h5 className="section-title text-dark">
                Third-Party Links and Services
              </h5>
              <p className="mb-4">
                Our website may contain links to third-party websites or
                services that are not owned or controlled by Pour Technologies.
                We have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party
                websites or services.
              </p>
              <h5 className="section-title text-dark">
                Limitation of Liability
              </h5>
              <p className="mb-4">
                In no event shall Pour Technologies, its affiliates, or its
                employees be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or in
                connection with the use of our website or services.
              </p>
              <h5 className="section-title text-dark">Indemnification</h5>
              <p className="mb-4">
                You agree to indemnify, defend, and hold harmless Pour
                Technologies and its affiliates, officers, directors, employees,
                and agents from and against any claims, liabilities, damages,
                losses, and expenses arising out of your use of our website or
                services, your violation of these Terms and Conditions, or your
                breach of any rights of third parties.
              </p>
              <h5 className="section-title text-dark">Termination</h5>
              <p className="mb-4">
                We reserve the right to terminate or suspend your access to our
                website or services at any time, without prior notice or
                liability, for any reason whatsoever, including but not limited
                to a breach of these Terms and Conditions.
              </p>
              <h5 className="section-title text-dark">
                Governing Law and Jurisdiction
              </h5>
              <p className="mb-4">
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of [insert jurisdiction]. Any disputes
                arising out of or relating to these Terms and Conditions shall
                be subject to the exclusive jurisdiction of the courts in
                [insert jurisdiction].
              </p>
              <h5 className="section-title text-dark">
                Changes to Terms and Conditions
              </h5>
              <p className="mb-4">
                We reserve the right to modify or update these Terms and
                Conditions at any time. Any changes will be effective
                immediately upon posting the revised Terms and Conditions on our
                website. Your continued use of our website or services after any
                changes constitutes your acceptance of the new Terms and
                Conditions.
              </p>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact us at{" "}
              <a href="mailto:info@pourtechnologies.com">
                info@pourtechnologies.com
              </a>
              .
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
                        <i className="fa fa-twitter" aria-hidden="true"></i>
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

export default Terms;
