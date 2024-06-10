import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const ApplyForm = () => {
  const recaptchaRef = useRef(null);
<<<<<<< HEAD

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };
  
  const [formData, setFormData] = useState({
    Date: "",
    Name: "",
    Email: "",
    PhoneNumber: "",
    Job_Role: "",
    Address: "",
    Zip: "",
    Experience: "",
    CV: "",
  });

  const navigate = useNavigate();
=======
  const [careerData, setAllcareer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('YOUR_GET_API_URL_HERE')
      .then(response => response.json())
      .then(data => {
        setAllcareer(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [cont, setCont] = useState({
    name: "",
    email: "",
    phone: "",
    job_role: "",
    address: "",
    zip: "",
    experience: "",
    cv: "",
  });
>>>>>>> 384977f63e5c4e5a1459366f54602c01de8f39b0

  useEffect(() => {
    const today = new Date();
    const date = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
    setFormData((prevState) => ({ ...prevState, Date: date }));
  }, []);

  let handleChange = (event) => {
    let { name, value } = event.target;
    console.log(name, value);
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited:", formData);
    let add = {
      Date: formData.Date,
      Name: formData.Name,
      Email: formData.Email,
      PhoneNumber: formData.PhoneNumber,
      Job_Role: formData.Job_Role,
      Address: formData.Address,
      Zip: formData.Zip,
      Experience: formData.Experience,
      CV: formData.CV,
    };
<<<<<<< HEAD
    axios
      .post(
        "https://sheet.best/api/sheets/75ae80df-a940-4421-9b4f-9bd5553a22ee",
        add
      )
      .then((res) => {
        console.log(res);
=======
    fetch('YOUR_POST_API_URL_HERE', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(add),
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.result === 'success') {
>>>>>>> 384977f63e5c4e5a1459366f54602c01de8f39b0
        navigate("/thank");
      } else {
        console.error("Submission error:", res.error);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };

<<<<<<< HEAD
=======
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const closeNavbar = () => {
    const navbar = document.getElementById('my-nav');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

>>>>>>> 384977f63e5c4e5a1459366f54602c01de8f39b0
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light gtco-main-nav">
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ paddingRight: "10%" }}>
            <img src="./assats/images/logo-6.png" width={180} alt="weblogo" />
          </Link>
          <button
            className="navbar-toggler"
            data-target="#my-nav"
            data-toggle="collapse"
            onClick={() => {
              const navbar = document.getElementById('my-nav');
              navbar.classList.toggle('show');
            }}
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
                <Link className="nav-link" to="/" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service" onClick={closeNavbar}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={closeNavbar}>
                  About
                </Link>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <Link className="nav-link active" to="/career">
                  Carrer
=======
                <Link className="nav-link active" to="/career" onClick={closeNavbar}>
                  Career
>>>>>>> 384977f63e5c4e5a1459366f54602c01de8f39b0
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={closeNavbar}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid gtco-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>
                Join Our <span>Team</span> be a part of our journey.
              </h1>
              <p>
                Ready to take the next step in your career? Join Us and submit
                your application. We look forward to learning more about you and
                how you can contribute to our success.
              </p>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="./assats/images/work-time.svg"
                  alt="bannerphoto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us section" id="contact">
        <div className="container">
          <div className="contact-us-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-heading">
                    <h2>
                      Apply & For Your Dream <span>Job</span>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Name"
                      placeholder="Your Name..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      id="Email"
                      name="Email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Your E-mail..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="tel"
                      name="PhoneNumber"
                      placeholder="Your Phone Number..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <select
                      placeholder="Apply..."
                      name="Job_Role"
                      style={{ fontSize: "120%" }}
                      onChange={handleChange}
                    >
                      <option value>Apply...</option>
                      <option>Web Devloper</option>
                      <option>Digital Marketer</option>
                      <option>Hybrid App Devloper</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Address"
                      placeholder="Your Address..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="text"
                      name="Zip"
                      placeholder="Your Zip Code..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="number"
                      name="Experience"
                      placeholder="Have You Any Experience..."
                      onChange={handleChange}
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6 col-12">
                  <fieldset>
                    <input
                      style={{ fontSize: "120%" }}
                      type="file"
                      name="CV"
                      onChange={handleChange}
                    />
                  </fieldset>
                </div>
<<<<<<< HEAD
                <div className="col-lg-6 col-sm-6 col-12">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="YOUR_SITE_KEY"
                    size="normal" // or "invisible"
                    onChange={onChange}
                  />
                  <br />
                </div>
=======
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="YOUR_SITE_KEY"
                  size="normal"
                  onChange={onChange}
                />
>>>>>>> 384977f63e5c4e5a1459366f54602c01de8f39b0
                <div className="col-lg-12 col-sm-12 col-12">
                  <fieldset>
                    <button type="submit">Submit Application</button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
