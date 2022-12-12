// Import React components first
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import EmailJs for initiation
import emailjs from "@emailjs/browser";
import { EMAILJS_USER } from "./config/keys";

// Import React Components
import HomePage from "./components/home/HomePage";
import NotFound from "./components/layout/NotFound";
import Layout from "./components/layout/Layout";
import Calculator from "./components/posts/pages/Calculator";
import Terms from "./components/terms/Terms";
import Privacy from "./components/terms/Privacy";
import Contact from "./components/contact/Contact";

// Import utility to scroll to top of page
import ScrollToTop from "./components/layout/ScrollToTop";

// Import bootstrap JS
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  emailjs.init(EMAILJS_USER);
  return (
    <div className="App">
      <Router>
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/calculator/mortgage-amortization"
              element={<Calculator slug="mortgage-amortization" />}
            />
            <Route
              exact
              path="/calculator/past-present-future"
              element={<Calculator slug="past-present-future" />}
            />
            <Route
              exact
              path="/calculator/annuity-valuation"
              element={<Calculator slug="annuity-valuation" />}
            />
            <Route
              exact
              path="/calculator/retirement-planner"
              element={<Calculator slug="retirement-planner" />}
            />
            <Route exact path="/calculator/terms" element={<Terms />} />
            <Route exact path="/calculator/privacy" element={<Privacy />} />
            <Route exact path="/calculator/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
