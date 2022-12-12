import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Photo from "../utilities/Photo";

import logoImage from "../images/navbar/triquetra.png";
import logoImageWebp from "../images/navbar/triquetra.webp";

const NavBar = () => {
  const { pathname } = useRouter();
  const homeLinkRef = useRef();
  const aboutLinkRef = useRef();
  const servicesLinkRef = useRef();
  const privacyLinkRef = useRef();
  const contactLinkRef = useRef();
  const togglerButtonRef = useRef();

  const [cookiesApproved, setCookiesApproved] = useState(false);

  const cookiesApproval = () => {
    if (window != null) {
      document.querySelector("#cookie-disclosure").style.display = "none";
      setCookiesApproved(true);
    }
  };

  useEffect(() => {
    // Track the approval of cookies and privacy settings
    if (document && !cookiesApproved) {
      setTimeout(() => {
        document.querySelector("#cookie-disclosure").style.display = "flex";
      }, 2000);
    }

    if (document && homeLinkRef && homeLinkRef.current) {
      homeLinkRef.current.addEventListener("click", () => {
        togglerButtonRef.current.click();
      });
      aboutLinkRef.current.addEventListener("click", () => {
        togglerButtonRef.current.click();
      });
      servicesLinkRef.current.addEventListener("click", () => {
        togglerButtonRef.current.click();
      });
      privacyLinkRef.current.addEventListener("click", () => {
        togglerButtonRef.current.click();
      });
      contactLinkRef.current.addEventListener("click", () => {
        togglerButtonRef.current.click();
      });
    }

    if (pathname.includes("about")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.add("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
    } else if (pathname.includes("services")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.add("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
    } else if (pathname.includes("privacy")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.add("active");
      contactLinkRef.current.classList.remove("active");
    } else if (pathname.includes("contact")) {
      homeLinkRef.current.classList.remove("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.add("active");
    } else {
      homeLinkRef.current.classList.add("active");
      aboutLinkRef.current.classList.remove("active");
      servicesLinkRef.current.classList.remove("active");
      privacyLinkRef.current.classList.remove("active");
      contactLinkRef.current.classList.remove("active");
    }

    // Make drop down menu collapse after link successfully clicked.
  }, [cookiesApproved, pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          {/* Logo button will redirect to home page */}
          <Link href="/">
            <a className="navbar-brand">
              <Photo
                src={logoImageWebp}
                fallback={logoImage}
                alt="logo"
                height="35"
                width="35"
              />
            </a>
          </Link>

          {/* Toggler button for mobile menu */}
          <button
            ref={togglerButtonRef}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-burger"></i>
          </button>
          <div
            className="collapse navbar-collapse bg-dark"
            id="navbarSupportedContent"
          >
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
              <li className="nav-item">
                <Link href="/about">
                  <a
                    ref={aboutLinkRef}
                    className="nav-link"
                    aria-current="page"
                  >
                    About
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/services">
                  <a
                    ref={servicesLinkRef}
                    className="nav-link"
                    aria-current="page"
                  >
                    Services
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/privacy">
                  <a className="nav-link" ref={privacyLinkRef}>
                    Privacy
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link" ref={contactLinkRef}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="cookie-disclosure"
          className="animate__animated animate__zoomInDown"
        >
          <p>
            We use cookies to ensure you have the best browsing experience on
            our website. By using our site, you acknowledge that you have read
            and understood our
            <Link href="/privacy" className="cookie-link">
              Privacy Policy
            </Link>{" "}
            and
            <Link href="/terms" className="cookie-link">
              Universal Terms of Service.
            </Link>
          </p>
          {!cookiesApproved ? (
            <button onClick={() => cookiesApproval()}>Proceed to Site</button>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
