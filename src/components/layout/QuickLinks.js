import React, { Component } from "react";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <div>
      <h5>Quick Links</h5>
      <ul className="list-unstyled text-small">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about/process">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/services/catalog">Services Catalog</Link>
        </li>
        <li style={{ marginLeft: ".2rem" }}>
          Galleries
          <ul style={{ marginTop: ".25rem" }}>
            <li>
              <Link href="/gallery/websites">Websites</Link>
            </li>
            <li>
              <Link href="/gallery/web-apps">Web Applications</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li>
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
