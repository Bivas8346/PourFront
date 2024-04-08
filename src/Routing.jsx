import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Home from "./Component/Home";
import Navber from "./Common/Navber";
import Footer from "./Common/Footer";
// import About from "./Component/About";
// import Service from "./Component/Service";
// import Project from "./Component/Project";
// import Contact from "./Component/Contact";
import NotFound from "./Common/NotFound";
// import Career from "./Component/Career";
import Testimonial from "./Component/Testimonial";
import Plannning from "./Component/Plannning";
// import ApplyForm from "./Component/ApplyForm";
// import SingleBlog from "./Component/SingleBlog";
import { Suspense } from "react";

let Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Home")), 3000);
  });
});

let About = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/About")), 1000);
  });
});

let Service = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Service")), 1000);
  });
});

let Project = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Project")), 1000);
  });
});

let Contact = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Contact")), 1000);
  });
});

let Career = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Career")), 1000);
  });
});

let ApplyForm  = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/ApplyForm")), 1000);
  });
});

let SingleBlog  = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
  });
});

const Routing = () => {
  return (
    <BrowserRouter>
      <Navber />
      <Suspense
      fallback={
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-danger" style={{width: "3rem", height: "3rem"}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="review" element={<Testimonial />} />
          <Route path="plan" element={<Plannning />} />
          <Route path="form" element={<ApplyForm />} />
          <Route path="single" element={<SingleBlog />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
