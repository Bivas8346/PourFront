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
// import Testimonial from "./Component/Testimonial";
// import Plannning from "./Component/Plannning";
// import ApplyForm from "./Component/ApplyForm";
// import SingleBlog from "./Component/SingleBlog";
import { Suspense } from "react";
import Thanks from "./Component/Thanks";
// import Privecy from "./Component/Privecy";
// import Terms from "./Component/Terms";
import SingleService from "./Component/SingleService";
// import Webservice from "./Component/Webservice";
// import Marketinkservice from "./Component/Marketinkservice";
// import Seoservice from "./Component/Seoservice";
import Adservice from "./Component/Adservice";
// import Appservice from "./Component/Appservice";
// import Videservice from "./Component/Videservice";
import Moreservice from "./Component/Moreservice";
import Singlebol1 from "./Component/Singlebol1";
import Singleblog2 from "./Component/Singleblog2";
import Singleblog3 from "./Component/Singleblog3";
import Singleblog4 from "./Component/Singleblog4";

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


let Webservice = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Webservice")), 1000);
  });
});


let Marketinkservice = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Marketinkservice")), 1000);
  });
});

let Seoservice = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Seoservice")), 1000);
  });
});

let Appservice = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Appservice")), 1000);
  });
});

let Videservice = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Videservice")), 1000);
  });
});


// let SingleBlog = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
//   });
// });


// let SingleBlog = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
//   });
// });


// let SingleBlog = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
//   });
// });

// let SingleBlog = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
//   });
// });


// let SingleBlog = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./Component/SingleBlog")), 1000);
//   });
// });


let Privecy = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Privecy")), 1000);
  });
});

let Terms = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Component/Terms")), 1000);
  });
});


const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loader"></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />

          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />

          <Route path="/singleservice" element={<SingleService />} />
          <Route path="/webservice" element={<Webservice />} />
          <Route path="/marketingservice" element={<Marketinkservice />} />
          <Route path="/seoservice" element={<Seoservice />} />
          <Route path="/adservice" element={<Adservice />} />
          <Route path="/appservice" element={<Appservice />} />
          <Route path="/videoservice" element={<Videservice />} />
          <Route path="/moreservice" element={<Moreservice />} />

          <Route path="blog" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="form" element={<ApplyForm />} />

          <Route path="/oneblog" element={<SingleBlog />} />
          <Route path="/2ndblog" element={<Singlebol1 />} />
          <Route path="/3rdblog" element={<Singleblog2 />} />
          <Route path="/4thblog" element={<Singleblog3 />} />
          <Route path="/5rdblog" element={<Singleblog4 />} />

          <Route path="thank" element={<Thanks />} />
          <Route path="privecy" element={<Privecy />} />
          <Route path="terms" element={<Terms />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
