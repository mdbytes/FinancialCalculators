import React, { useState, useRef } from "react";

const FutureValue = () => {
  const presentValueFormRef = useRef(null);
  const inflationPresentValueRef = useRef(null);
  const investmentPresentValueRef = useRef(null);

  // Set up state values
  const [paymentAmount, setPaymentAmount] = useState();
  const [valuationYear, setValuationYear] = useState();
  const [inflationRate, setInflationRate] = useState();
  const [investmentReturn, setInvestmentReturn] = useState();
  const [displayResults, setDisplayResults] = useState(false);
  const [inflationPresentValue, setInflationPresentValue] = useState();
  const [investmentPresentValue, setInvestmentPresentValue] = useState();
  const toCurrency = (num) => {
    return (1 * num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const interestFactor = (rate, years) => {
    let numerator = 1 - Math.pow(1 + rate, -1 * years);
    return numerator / rate;
  };

  const calculateFutureValues = (evt) => {
    evt.preventDefault();
    let yearsFuture = valuationYear - new Date().getFullYear();
    console.log(
      paymentAmount,
      inflationRate / 100,
      investmentReturn / 100,
      valuationYear,
      yearsFuture
    );

    let inflationInterestFactor = interestFactor(
      inflationRate / 100,
      yearsFuture
    );
    console.log(inflationInterestFactor);
    let inflationPV = paymentAmount * inflationInterestFactor;
    let investmentInterestFactor = interestFactor(
      investmentReturn / 100,
      yearsFuture
    );
    let investmentPV = paymentAmount * investmentInterestFactor;
    setInflationPresentValue(inflationPV);
    setInvestmentPresentValue(investmentPV);
    setDisplayResults(true);
    presentValueFormRef.current.reset();
    setTimeout(() => {
      grandEntrance();
    }, 100);
  };

  const grandEntrance = () => {
    inflationPresentValueRef.current.classList.add("animate__animated");
    inflationPresentValueRef.current.classList.add("animate__rubberBand");
    inflationPresentValueRef.current.style.setProperty("color", "#009900");

    investmentPresentValueRef.current.classList.add("animate__animated");
    investmentPresentValueRef.current.classList.add("animate__rubberBand");
    investmentPresentValueRef.current.style.setProperty("color", "#009900");

    setTimeout(function () {
      inflationPresentValueRef.current.classList.remove("animate__rubberBand");
      investmentPresentValueRef.current.classList.remove("animate__rubberBand");
    }, 2000);
  };

  const onInputChange = (evt) => {
    evt.preventDefault();
    setDisplayResults(false);
    switch (evt.target.id) {
      case "paymentAmount":
        setPaymentAmount(evt.target.value);
        break;
      case "valuationYear":
        setValuationYear(evt.target.value);
        break;
      case "inflationRate":
        setInflationRate(evt.target.value);
        break;
      case "investmentReturn":
        setInvestmentReturn(evt.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Present Value of Annual Income Stream</h3>
        <form
          id="income-annuity-form"
          onSubmit={(evt) => calculateFutureValues(evt)}
          ref={presentValueFormRef}
        >
          <div className="form-group">
            <label htmlFor="paymentAmount">Annual Income (dollars)</label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="paymentAmount"
              aria-describedby="paymentAmountHelp"
              placeholder="Enter amount of income annually, e.g. 1000"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="paymentAmountHelp" className="form-text text-muted">
              The amount of money, in US dollars, you will receive every year
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="valuationYear">Year of last annual payment</label>
            <input
              type="number"
              className="form-control"
              min="2022"
              max="2070"
              id="valuationYear"
              aria-describedby="valuationYearHelp"
              placeholder="Enter a year prior to 2071"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="valuationYearHelp" className="form-text text-muted">
              The year of your last payment from the annuity.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inflationRate">Estimated Inflation Rate</label>
            <input
              type="number"
              step="0.001"
              className="form-control"
              id="inflationRate"
              placeholder="Enter inflation, e.g. for 3% enter 3"
              ariadescribedby="inflationRateHelp"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="inflationRateHelp" className="form-text text-muted">
              The average inflation rate since 2000 is 2.38%. Since 1980, 2.95%.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="investmentReturn">
              Estimated Investment Return
            </label>
            <input
              type="number"
              step="0.001"
              className="form-control"
              id="investmentReturn"
              placeholder="Enter investment return, e.g. for 10% enter 10"
              ariadescribedby="investmentReturnHelp"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="investmentReturnHelp" className="form-text text-muted">
              Stock market returns are 6.88% per year since 2000. Since 1980,
              11.73%.
            </small>
          </div>
          <button
            type="submit"
            className="rounded-pill btn-rounded btn-primary"
          >
            Calculate Present Value of Annuity
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h3 id="pv-results-heading">Results</h3>
        <div id="pv-results">
          {displayResults ? (
            <div id="pv-computed-results">
              <p>
                The present value of {toCurrency(paymentAmount)} payments to be
                received annually until {valuationYear}.
              </p>

              <p style={{ display: "inline-block" }}>
                Based on inflation returns of {inflationRate}%: &nbsp;&nbsp;
              </p>

              <h4
                style={{
                  display: "inline-block",
                  textAlign: "right",
                }}
                className="numeric-result"
                ref={inflationPresentValueRef}
              >
                {toCurrency(inflationPresentValue)}
              </h4>

              <p style={{ display: "inline-block" }}>
                Based on investment returns of {investmentReturn}%:&nbsp;&nbsp;
              </p>

              <h4
                style={{
                  display: "inline-block",
                  textAlign: "right",
                }}
                className="numeric-result"
                ref={investmentPresentValueRef}
              >
                {toCurrency(investmentPresentValue)}
              </h4>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: "center" }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
          {displayResults ? (
            <div className="methodology">
              <p>
                For details on how this was calculated, see{" "}
                <a href="https://financeformulas.net/Annuity_Payment_Formula.html">
                  Finance Formulas
                </a>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FutureValue;
