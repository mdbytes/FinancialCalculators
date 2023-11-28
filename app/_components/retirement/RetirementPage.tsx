import React from 'react';
import featuredImage from '../../../assets/images/financial/retirement.jpg';
import Retirement from './Retirement';
import Photo from '../utils/Photo';

const RetirementPage = () => {
  return (
    <div className="container calculator post post-text pb-5">
      <div className="feature-image-holder">
        <h2>Retirement Planner</h2>
        <h5>with monthly forecast</h5>
        <Photo
          src="images/financial/retirement.jpg"
          className="img-fluid"
          alt="feature"
        />
      </div>
      <p>
        One of the major concerns of life is how one will survive and thrive
        into and throughout retirement. This calculator provides a basis for
        mapping resources, asset growth and income both up to a retirement date
        and beyond.
      </p>
      <p>
        The process starts with an estimate of your assets at this time. Once
        your assets have been determined, it is essential to determine what rate
        of return those assets will earn. With your retirement date and desired
        retirement spending in hand, this model will determine; 1) whether your
        income and assets are sufficient for your retirement goals, and 2) the
        level of surplus or shortfall you can expect.
      </p>
      <p>
        Note that results of this exercise vary widely depending on expected
        investment returns. Be sure to carefully assess your{' '}
        <a href="https://finmasters.com/risk-profile-test/#:~:text=What%20Is%20a%20Risk%20Profile,invest%20in%2C%20i.e.%20stocks%20vs.">
          risk profile
        </a>{' '}
        and carefully determine an appropriate{' '}
        <a href="https://www.fool.com/investing/how-to-invest/stocks/good-return-on-investment/">
          rate of return
        </a>{' '}
        for you.
      </p>

      <Retirement />
    </div>
  );
};

export default RetirementPage;
