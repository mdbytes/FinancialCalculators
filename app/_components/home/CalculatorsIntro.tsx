import React, { Component } from 'react';
import Link from 'next/link';
import annuityImage from '../../assets/images/financial/annuity.jpg';
import retirementImage from '../../assets/images/financial/retirement.jpg';

import Photo from '../utils/Photo';

const CalculatorsIntro = () => {
  return (
    <React.Fragment>
      <div className="calculator-intro">
        <div className="row home-content">
          <div className="col-lg-7">
            <h1 className="animate__animated animate__zoomInDown">
              Money Matters&nbsp;
              <i className="fa-solid fa-money-bill-wave"></i>
            </h1>
            <h2 className="animate__animated animate__zoomInDown">
              Financial Calculators
            </h2>

            <ul className="fa-ul">
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-house"></i>
                </span>
                Mortgage payment amount and amortization.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-sack-dollar"></i>
                </span>
                Present value of a future sum.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-money-bill-transfer"></i>
                </span>
                Value of payments over time.
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa-solid fa-money-bill-trend-up"></i>
                </span>
                Retirement planning.
              </li>
            </ul>
          </div>
          <div className="col-lg-5 stool-holder">
            <Photo
              src="images/financial/annuity.jpg"
              className=""
              alt="responsive services"
            />
            <Photo
              src="images/financial/retirement.jpg"
              className=""
              alt="responsive services"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalculatorsIntro;
