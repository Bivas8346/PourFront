import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Planning.css";

const Plannning = () => {
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
      {/* <!-- Plan Start --> */}
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <div className="wow fadeInUp" data-wow-delay="0.1s">
            <p className="section-title text-secondary justify-content-center">
              <span></span>Our Team<span></span>
            </p>
            <h1 className="text-center mb-5">Our Team Members</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Book</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              classNameName="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Book</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              classNameName="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="flip-card-container" style={{ hue: "220" }}>
                <div className="flip-card">
                  <div className="card-front">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        className="card_img"
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                      <figcaption className="figcaption_text">
                        <h2>Stander pack</h2>
                        For Small business
                      </figcaption>
                    </figure>

                    <ul className="flipcard_ul">
                      <li className="flipcard_li">Detail 1</li>
                      <li className="flipcard_li">Detail 2</li>
                      <li className="flipcard_li">Detail 3</li>
                      <li className="flipcard_li">Detail 4</li>
                      <li className="flipcard_li">Detail 5</li>
                    </ul>
                  </div>

                  <div className="card-back">
                    <figure className="figure_card">
                      <div className="img-bg"></div>
                      <img
                        src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Brohm Lake"
                      />
                    </figure>

                    <button className="flipcard_button">Book</button>

                    <div className="design-container">
                      <span className="design design--1"></span>
                      <span className="design design--2"></span>
                      <span className="design design--3"></span>
                      <span className="design design--4"></span>
                      <span className="design design--5"></span>
                      <span className="design design--6"></span>
                      <span className="design design--7"></span>
                      <span className="design design--8"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plan End --> */}
    </>
  );
};

export default Plannning;
