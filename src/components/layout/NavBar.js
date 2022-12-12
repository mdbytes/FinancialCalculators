import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Photo from "../utilities/Photo";
import siteLogo from "../../assets/images/home/triquetra.webp";
import siteLogoFallback from "../../assets/images/home/triquetra.png";
import CookiesApproval from "./CookiesApproval";
import BackToTop from "./BackToTop";

const NavBar = () => {
  let location = useLocation();
  let path = location.pathname;

  useEffect(() => {
    let homeLink = document.querySelector(".nav-link[href='/']");

    if (path.includes("calculator")) {
      homeLink.classList.remove("active");
    } else {
      homeLink.classList.add("active");
    }
  }, [path]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-link">
          <span className="navbar-brand" href="#">
            <Photo src={siteLogo} fallback={siteLogoFallback} height="40" />
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <button
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Calculators
              </button>
              <ul class="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link dropdown-item"
                    to="/calculator/mortgage-amortization"
                  >
                    Mortgage
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link dropdown-item"
                    to="/calculator/past-present-future"
                  >
                    Lump Sum
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link dropdown-item"
                    to="/calculator/annuity-valuation"
                  >
                    Annuity
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link dropdown-item"
                    to="/calculator/retirement-planner"
                  >
                    Retirement
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator/privacy">
                Privacy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator/terms">
                Terms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/calculator/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CookiesApproval />
      <BackToTop />
    </nav>
  );
};

export default NavBar;
