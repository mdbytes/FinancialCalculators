import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Photo from "../utilities/Photo";
import BackToTop from "./BackToTop";

import logo from "../images/navbar/triquetra.png";
import logoWebp from "../images/navbar/triquetra.webp";
import CookiesApproval from "./CookiesApproval";

const Navbar = () => {
  const { pathname } = useRouter();

  const navbarTogglerRef = useRef();

  const homeLinkRef = useRef();
  const aboutLinkRef = useRef();
  const servicesLinkRef = useRef();
  const privacyLinkRef = useRef();
  const contactLinkRef = useRef();
  const galleryLinkRef = useRef();
  const termsLinkRef = useRef();

  const aboutProcessRef = useRef();
  const aboutToolsRef = useRef();
  const aboutLeaderRef = useRef();

  const servicesOverviewRef = useRef();
  const servicesStandardsRef = useRef();
  const servicesCatalogRef = useRef();

  const galleryWebsitesRef = useRef();
  const galleryWebAppsRef = useRef();

  const navLinks = [
    homeLinkRef,
    privacyLinkRef,
    contactLinkRef,
    termsLinkRef,
    aboutProcessRef,
    aboutToolsRef,
    aboutLeaderRef,
    servicesOverviewRef,
    servicesStandardsRef,
    servicesCatalogRef,
    galleryWebsitesRef,
    galleryWebAppsRef,
  ];

  useEffect(() => {
    if (document && homeLinkRef.current) {
      for (let link of navLinks) {
        link.current.addEventListener("click", () => {
          let screenWidth = document.querySelector("#__next").clientWidth;

          if (screenWidth < 992) {
            navbarTogglerRef.current.click();
          }
        });
      }
    }

    if (pathname.includes("about")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.add("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.remove("active");
    } else if (pathname.includes("services")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.add("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.remove("active");
    } else if (pathname.includes("privacy")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.add("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.remove("active");
    } else if (pathname.includes("contact")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.add("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.remove("active");
    } else if (pathname.includes("gallery")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.add("active");
      termsLinkRef.current.classList.remove("active");
    } else if (pathname.includes("terms")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.add("active");
    } else {
      homeLinkRef.current.classList.add("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
      galleryLinkRef.current.classList.remove("active");
      termsLinkRef.current.classList.remove("active");
    }
  }, [pathname, navLinks, navbarTogglerRef]);

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Photo src={logoWebp} fallback={logo} height="35" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={navbarTogglerRef}
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-burger"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <a
                  ref={homeLinkRef}
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link href="/about">
                <a
                  ref={aboutLinkRef}
                  className="nav-link dropdown-toggle"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li>
                  <Link href="/about/process">
                    <a ref={aboutProcessRef} className="dropdown-item">
                      Development Process
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/technologies">
                    <a ref={aboutToolsRef} className="dropdown-item">
                      Software Tools
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about/leadership">
                    <a ref={aboutLeaderRef} className="dropdown-item">
                      Leadership
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link href="/services">
                <a
                  ref={servicesLinkRef}
                  className="nav-link dropdown-toggle"
                  id="servicesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <Link href="/services">
                    <a ref={servicesOverviewRef} className="dropdown-item">
                      Overview
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/standards">
                    <a ref={servicesStandardsRef} className="dropdown-item">
                      Standards
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services/catalog">
                    <a ref={servicesCatalogRef} className="dropdown-item">
                      Catalog
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link href="/">
                <a
                  ref={galleryLinkRef}
                  className="nav-link dropdown-toggle"
                  id="galleryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="galleryDropdown">
                <li>
                  <Link href="/gallery/websites">
                    <a ref={galleryWebsitesRef} className="dropdown-item">
                      Websites
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/web-apps">
                    <a ref={galleryWebAppsRef} className="dropdown-item">
                      Web Applications
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a ref={contactLinkRef} className="nav-link">
                  Contact
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/privacy">
                <a ref={privacyLinkRef} className="nav-link">
                  Privacy
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/terms">
                <a ref={termsLinkRef} className="nav-link">
                  Terms
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <BackToTop />
      <CookiesApproval />
    </nav>
  );
};

export default Navbar;
