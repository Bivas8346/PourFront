import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import Home from "./Component/Home";
// import Navber from "./Common/Navber";
// import Footer from "./Common/Footer";
// import About from "./Component/About";
// import Service from "./Component/Service";
// import Project from "./Component/Project";
// import Contact from "./Component/Contact";
import NotFound from "./Common/NotFound";
// import Career from "./Component/Career";
import Testimonial from "./Component/Testimonial";
// import Plannning from "./Component/Plannning";
// import ApplyForm from "./Component/ApplyForm";
// import SingleBlog from "./Component/SingleBlog";
import { Suspense } from "react";
import Thanks from "./Component/Thanks";
import Privecy from "./Component/Privecy";
import Terms from "./Component/Terms";
import SingleService from "./Component/SingleService";

let Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Home")), 2000);
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

let ApplyForm = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/ApplyForm")), 1000);
  });
});

let SingleBlog = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
  });
});

const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loader"></div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="/singleservice/:id" element={<SingleService />} />
          <Route path="blog" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="review" element={<Testimonial />} />
          {/* <Route path="plan" element={<Plannning />} /> */}
          <Route path="form" element={<ApplyForm />} />
          <Route path="/oneblog/:id" element={<SingleBlog />} />
          <Route path="thank" element={<Thanks />} />
          <Route path="privecy" element={<Privecy />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
