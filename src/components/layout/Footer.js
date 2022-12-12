import React, { Component } from "react";

import Photo from "../utilities/Photo";
import QuickLinks from "./QuickLinks";

import mapPic from "../images/contact/map.jpeg";
import mapPicWebp from "../images/contact/map.webp";

class Footer extends Component {
  render() {
    return (
      <div id="footer" className="pt-5 pt-md-5 border-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <h5>On Social Media</h5>
              <div id="social-media">
                <a
                  href="https://twitter.com/MDBytes"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/mdbytes"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mdbytes/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4" id="location">
              <h5>Location</h5>

              <p>Click map for directions</p>
              <div id="location-map">
                <a
                  href="https://bit.ly/3QF3rKU"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Photo
                    src={mapPicWebp}
                    fallback={mapPic}
                    alt="location"
                    className="img-fluid location-map"
                  />

                  <p className="map-hover">
                    Czech Village
                    <br />
                    Cedar Rapids, Iowa
                  </p>
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <QuickLinks />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <h5>&copy; 2022 &nbsp;MD Web Technologies</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
