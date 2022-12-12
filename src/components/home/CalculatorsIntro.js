import React, { Component } from "react";
import annuityImage from "../../assets/images/financial/annuity.jpg";
import retirementImage from "../../assets/images/financial/retirement.jpg";

import Photo from "../utilities/Photo";

class CalculatorsIntro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="calculator-intro">
          <div className="row titles">
            <div className="col-lg-7">
              <h1 className="animate__animated animate__zoomInDown">
                Money Matters&nbsp;
                <i className="fa-solid fa-money-bill-wave"></i>
              </h1>
            </div>
            <div className="col-lg-5">
              <h2 className="animate__animated animate__zoomInDown">
                Financial Calculators
              </h2>
            </div>
          </div>
          <div className="row home-content">
            <div className="col-lg-7">
              <ul className="fa-ul">
                <li>
                  <span className="fa-li">
                    <i className="fa-solid fa-house"></i>
                  </span>
                  Mortgage payment amount and amortization schedule.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa-solid fa-sack-dollar"></i>
                  </span>
                  Present of future value of a lump sum of money.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa-solid fa-money-bill-transfer"></i>
                  </span>
                  Payment of a certain sum of money over a period of time.
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fa-solid fa-money-bill-trend-up"></i>
                  </span>
                  Retirement planning based on current and expected assets.
                </li>
              </ul>
            </div>
            <div className="col-lg-5 stool-holder">
              <Photo
                src={annuityImage}
                className="img-fluid animate__animated animate__zoomIn"
                alt="responsive services"
              />
              <Photo
                src={retirementImage}
                className="img-fluid animate__animated animate__zoomIn"
                alt="responsive services"
              />
            </div>
          </div>
          <div class="row home-button">
            <a href="#calculators-content" className="btn btn-rounded">
              Learn More
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CalculatorsIntro;
