import React, { useRef, useEffect } from "react";
import featuredImage from "./images/annuity.jpg";
import Excerpt from "./Excerpt";
import InvestmentAnnuity from "./calculators/InvestmentAnnuity";
import IncomeAnnuity from "./calculators/IncomeAnnuity";
import Photo from "../../../utilities/Photo";

const AnnuityValuation = ({ excerpt = false, seo = false }) => {
  const investmentBtnRef = useRef(null);
  const incomeBtnRef = useRef(null);
  const investmentContentRef = useRef(null);
  const incomeContentRef = useRef(null);

  useEffect(() => {
    if (investmentBtnRef && investmentBtnRef.current) {
      investmentBtnRef.current.addEventListener("click", () => {
        investmentBtnRef.current.classList.add("active");
        incomeBtnRef.current.classList.remove("active");
        investmentContentRef.current.style.display = "block";
        incomeContentRef.current.style.display = "none";
      });
    }
    if (incomeBtnRef && incomeBtnRef.current) {
      incomeBtnRef.current.addEventListener("click", () => {
        investmentBtnRef.current.classList.remove("active");
        incomeBtnRef.current.classList.add("active");
        investmentContentRef.current.style.display = "none";
        incomeContentRef.current.style.display = "block";
      });
    }
  }, [investmentBtnRef]);

  if (seo) {
    return (
      <>
        An annuity is a series of payments made at equal intervals over a
        determined period of time. The payments can be made monthly or annually
        into an investment vehicle for a period of time, or the payments can be
        received by a beneficiary for a period of time. Banks, insurance and
        investment companies all offer a wide range of annuities. Here we focus
        on valuation of two simple forms of annuities.
      </>
    );
  }
  if (excerpt) {
    let excerpt = (
      <p>
        An annuity is a series of payments made at equal intervals over a
        determined period of time. The payments can be made monthly or annually
        into an investment vehicle for a period of time, or the payments can be
        received by a beneficiary for a period of time. Banks, insurance and
        investment companies all offer a wide range of annuities. Here we focus
        on valuation of two simple forms of annuities.
      </p>
    );
    let title = "Annuity Valuation";
    let categories = [7];
    let slug = "annuity-valuation";
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
    <div className="container" id="annuity-intro">
      <div className="feature-image-holder">
        <Photo src={featuredImage} alt="feature" />
      </div>
      <p>
        An annuity is a series of payments made at equal intervals over a
        determined period of time. The payments can be made monthly or annually
        into an investment vehicle for a period of time, or the payments can be
        received by a beneficiary for a period of time. Banks, insurance and
        investment companies all offer a wide range of annuities. Annuities can
        also represent streams of income, such as payouts from an investment or
        reverse mortgage over time.{" "}
      </p>
      <p>
        Here we focus on valuation of two simple annuity forms which provide a
        foundation for evaluating all of the other types of annuities.
      </p>

      <ul>
        <li>
          <b>Annuity Investment:</b> You are the investor and your annuity
          investment is represented by a periodic investment of a fixed sum over
          a determined period of time, such as annual deposits to a savings
          account or money market fund. What will the value be at the end of the
          road?
        </li>
        <li>
          <b>Annuity Income:</b> You are the recipient of a fixed stream of
          payments over a period of time, which is becoming a more common
          scenario as our population ages. In a reverse mortgage, as a common
          example, what is a fair value for the promised stream of income?
        </li>
      </ul>
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
      <nav className="nav" id="annuity-nav">
        <button
          className="nav-link active"
          id="investmentBtn"
          ref={investmentBtnRef}
        >
          Investment
        </button>
        <button className="nav-link" id="incomeBtn" ref={incomeBtnRef}>
          Income
        </button>
      </nav>
      <div id="annuity-content">
        <div id="investment" ref={investmentContentRef}>
          <InvestmentAnnuity />
        </div>
        <div id="income" ref={incomeContentRef}>
          <IncomeAnnuity />
        </div>
      </div>
    </div>
  );
};

export default AnnuityValuation;
