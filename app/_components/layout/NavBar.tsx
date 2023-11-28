'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef } from 'react';

export const Navbar = () => {
  let pathname = usePathname();

  let searchTermRef: InputRef = useRef(null);
  let navTogglerRef: ButtonRef = useRef(null);
  let homeRef: NavLinkRef = useRef(null);
  let mortgageRef: NavLinkRef = useRef(null);
  let futureSum: NavLinkRef = useRef(null);
  let annuityRef: NavLinkRef = useRef(null);
  let retirementRef: NavLinkRef = useRef(null);
  let contactRef: NavLinkRef = useRef(null);
  let privacyRef: NavLinkRef = useRef(null);

  useEffect(() => {
    require('../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');

    let linkRefs: NavLinkRef[] = [
      homeRef,
      contactRef,
      mortgageRef,
      futureSum,
      annuityRef,
      retirementRef,
      privacyRef,
    ];

    // Close the mobile nav display when a link is clicked
    if (navTogglerRef) {
      for (let link of linkRefs) {
        link?.current?.addEventListener('click', () => {
          navTogglerRef.current?.click();
        });
      }
    }
    let destination = pathname.slice(
      pathname.lastIndexOf('/') + 1,
      pathname.length
    );

    for (let link of linkRefs) {
      link.current?.classList.remove('active');
    }

    if (pathname === '/') {
      homeRef?.current?.classList.add('active');
    } else {
      for (let link of linkRefs) {
        if (link.current?.href.includes(destination)) {
          link.current?.classList.add('active');
        }
      }
    }
  }, [pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ marginLeft: '2rem' }}>
            <Image
              src="/images/navbar/triquetra.png"
              width={15}
              height={45}
              className="img-fluid"
              alt="site logo in navbar"
            />
          </a>
          <button
            ref={navTogglerRef}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  ref={homeRef}
                  id="home-link"
                  className="nav-link"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <span className="text-success d-flex align-items-center justify-content-center">
                |
              </span>
              <li className="nav-item">
                <Link
                  ref={mortgageRef}
                  className="nav-link"
                  aria-current="page"
                  href="/mortgage"
                >
                  Mortgage
                </Link>
              </li>
              <span className="text-success d-flex align-items-center justify-content-center">
                |
              </span>
              <li className="nav-item">
                <Link
                  ref={retirementRef}
                  className="nav-link"
                  aria-current="page"
                  href="/retirement"
                >
                  Retirement
                </Link>
              </li>
              <span className="text-success d-flex align-items-center justify-content-center">
                |
              </span>
              <li className="nav-item">
                <Link
                  ref={futureSum}
                  className="nav-link"
                  aria-current="page"
                  href="/lump_sum"
                >
                  Lump Sum
                </Link>
              </li>
              <span className="text-success d-flex align-items-center justify-content-center">
                |
              </span>
              <li className="nav-item">
                <Link
                  ref={annuityRef}
                  className="nav-link"
                  aria-current="page"
                  href="/annuity"
                >
                  Annuity
                </Link>
              </li>
              <span className="text-success d-flex align-items-center justify-content-center">
                |
              </span>

              <li className="nav-item">
                <Link
                  ref={privacyRef}
                  className="nav-link"
                  aria-current="page"
                  href="/terms"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
