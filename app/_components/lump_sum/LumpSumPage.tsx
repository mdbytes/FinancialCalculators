'use client';

import React, { useEffect, useRef } from 'react';
import PresentValue from './PresentValue';
import FutureValue from './FutureValue';
import PastValue from './PastValue';
import Photo from '../utils/Photo';

const LumpSumPage = () => {
  // Set up document refs
  const presentBtnRef: ButtonRef = useRef(null);
  const futureBtnRef: ButtonRef = useRef(null);
  const pastBtnRef: ButtonRef = useRef(null);
  const presentContentRef: DivRef = useRef(null);
  const futureContentRef: DivRef = useRef(null);
  const pastContentRef: DivRef = useRef(null);

  // Set up event listeners when elements are loaded
  useEffect(() => {
    if (presentBtnRef && presentBtnRef.current) {
      presentBtnRef.current.addEventListener('click', () => {
        presentBtnRef.current.classList.add('active');
        futureBtnRef.current.classList.remove('active');
        pastBtnRef.current.classList.remove('active');
        presentContentRef.current.style.display = 'block';
        futureContentRef.current.style.display = 'none';
        pastContentRef.current.style.display = 'none';
      });
    }
    if (futureBtnRef && futureBtnRef.current) {
      futureBtnRef.current.addEventListener('click', () => {
        presentBtnRef.current.classList.remove('active');
        futureBtnRef.current.classList.add('active');
        pastBtnRef.current.classList.remove('active');
        presentContentRef.current.style.display = 'none';
        futureContentRef.current.style.display = 'block';
        pastContentRef.current.style.display = 'none';
      });
    }
    if (pastBtnRef && pastBtnRef.current) {
      pastBtnRef.current.addEventListener('click', () => {
        presentBtnRef.current.classList.remove('active');
        futureBtnRef.current.classList.remove('active');
        pastBtnRef.current.classList.add('active');
        presentContentRef.current.style.display = 'none';
        futureContentRef.current.style.display = 'none';
        pastContentRef.current.style.display = 'block';
      });
    }
  }, [presentBtnRef]);

  return (
    <div className="container calculator post post-text">
      <div className="feature-image-holder">
        <Photo
          src="images/financial/pastPresentFuture.jpg"
          className="img-fluid"
          alt="feature"
        />
      </div>
      <p>
        This financial calculator will help you calculate the past, present and
        future values of a lump sum payment. How much would it mean, for
        example, if a highly reliable source like a pension company or
        government were to promise to give you $1 million in 20 years? Could you
        sell that promise? How much would you sell it for?
      </p>
      <p>
        Note that results vary widely depending on expected investment returns.
        Be sure to carefully assess your{' '}
        <a href="https://finmasters.com/risk-profile-test/#:~:text=What%20Is%20a%20Risk%20Profile,invest%20in%2C%20i.e.%20stocks%20vs.">
          risk profile
        </a>{' '}
        and carefully determine an appropriate{' '}
        <a href="https://www.fool.com/investing/how-to-invest/stocks/good-return-on-investment/">
          rate of return
        </a>{' '}
        for you.
      </p>
      <p>
        The answer might surprise you, so go ahead and try a few scenarios in
        the calculators below.
      </p>
      <nav className="nav" id="past-present-future-nav">
        <button className="nav-link active" id="present" ref={presentBtnRef}>
          Present
        </button>
        <button className="nav-link" id="future" ref={futureBtnRef}>
          Future
        </button>
        <button className="nav-link" id="past" ref={pastBtnRef}>
          Past
        </button>
      </nav>
      <div id="ppf-content">
        <div id="present" ref={presentContentRef}>
          <PresentValue />
        </div>
        <div id="future" ref={futureContentRef}>
          <FutureValue />
        </div>
        <div id="past" ref={pastContentRef}>
          <PastValue />
        </div>
      </div>
    </div>
  );
};

export default LumpSumPage;
