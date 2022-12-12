import React, { useEffect, useRef } from "react";
import featuredImage from "../../../assets/images/financial/pastPresentFuture.jpg";
import Excerpt from "../utils/Excerpt";
import PresentValue from "../calculators/PresentValue";
import FutureValue from "../calculators/FutureValue";
import PastValue from "../calculators/PastValue";
import Photo from "../../utilities/Photo";

const PastPresentFuture = ({ excerpt = false, seo = false }) => {
  // Set up document refs
  const presentBtnRef = useRef(null);
  const futureBtnRef = useRef(null);
  const pastBtnRef = useRef(null);
  const presentContentRef = useRef(null);
  const futureContentRef = useRef(null);
  const pastContentRef = useRef(null);

  // Set up event listeners when elements are loaded
  useEffect(() => {
    if (presentBtnRef && presentBtnRef.current) {
      presentBtnRef.current.addEventListener("click", () => {
        presentBtnRef.current.classList.add("active");
        futureBtnRef.current.classList.remove("active");
        pastBtnRef.current.classList.remove("active");
        presentContentRef.current.style.display = "block";
        futureContentRef.current.style.display = "none";
        pastContentRef.current.style.display = "none";
      });
    }
    if (futureBtnRef && futureBtnRef.current) {
      futureBtnRef.current.addEventListener("click", () => {
        presentBtnRef.current.classList.remove("active");
        futureBtnRef.current.classList.add("active");
        pastBtnRef.current.classList.remove("active");
        presentContentRef.current.style.display = "none";
        futureContentRef.current.style.display = "block";
        pastContentRef.current.style.display = "none";
      });
    }
    if (pastBtnRef && pastBtnRef.current) {
      document.querySelector("#past").addEventListener("click", () => {
        presentBtnRef.current.classList.remove("active");
        futureBtnRef.current.classList.remove("active");
        pastBtnRef.current.classList.add("active");
        presentContentRef.current.style.display = "none";
        futureContentRef.current.style.display = "none";
        pastContentRef.current.style.display = "block";
      });
    }
  }, [presentBtnRef]);

  if (seo) {
    return (
      <>
        This financial calculator will help you calculate the past, present and
        future values of a lump sum payment. How much would it mean, for
        example, if a highly reliable source like a pension company or
        government were to promise to give you $1 million in 20 years? Could you
        sell that promise? How much would you sell it for?
      </>
    );
  }
  if (excerpt) {
    let excerpt = (
      <p>
        This financial calculator will help you calculate the past, present and
        future values of a lump sum payment. How much would it mean, for
        example, if a highly reliable source like a pension company or
        government were to promise to give you $1 million in 20 years? Could you
        sell that promise? How much would you sell it for?
      </p>
    );
    let title = "Past, Present and Future Values";
    let categories = [7];
    let slug = "past-present-future";
    return (
      <Excerpt
        excerpt={excerpt}
        image={featuredImage}
        postCategories={categories}
        title={title}
        slug={slug}
      />
    );
  }
  return (
    <div className="container">
      <div className="feature-image-holder">
        <Photo src={featuredImage} className="img-fluid" alt="feature" />
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
        Be sure to carefully assess your{" "}
        <a href="https://finmasters.com/risk-profile-test/#:~:text=What%20Is%20a%20Risk%20Profile,invest%20in%2C%20i.e.%20stocks%20vs.">
          risk profile
        </a>{" "}
        and carefully determine an appropriate{" "}
        <a href="https://www.fool.com/investing/how-to-invest/stocks/good-return-on-investment/">
          rate of return
        </a>{" "}
        for you.
      </p>
      <p>
        The answer might surprise you, so go ahead and try a few scenarios in
        the calculators below.
      </p>
      <nav className="nav" id="past-present-future-nav">
        <button
          className="nav-link active"
          href="#"
          id="present"
          ref={presentBtnRef}
        >
          Present
        </button>
        <button className="nav-link" href="#" id="future" ref={futureBtnRef}>
          Future
        </button>
        <button className="nav-link" href="#" id="past" ref={pastBtnRef}>
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

export default PastPresentFuture;
