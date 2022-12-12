import React, { useState, useRef } from "react";

const InvestmentAnnuity = () => {
  const futureValueFormRef = useRef(null);
  const inflationFutureValueRef = useRef(null);
  const investmentFutureValueRef = useRef(null);

  // Set up state values
  const [paymentAmount, setPaymentAmount] = useState();
  const [valuationYear, setValuationYear] = useState();
  const [inflationRate, setInflationRate] = useState();
  const [investmentReturn, setInvestmentReturn] = useState();
  const [displayResults, setDisplayResults] = useState(false);
  const [inflationFutureValue, setInflationFutureValue] = useState();
  const [investmentFutureValue, setInvestmentFutureValue] = useState();

  const toCurrency = (num) => {
    return (1 * num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const interestFactor = (rate, years) => {
    console.log(Math.pow(1 - parseFloat(rate), parseInt(years)));
    let numerator = Math.pow(1 + rate, years) - 1;
    console.log("numerator", numerator);
    console.log("factor", parseFloat(numerator) / parseFloat(rate));
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
    let inflationFV = paymentAmount * inflationInterestFactor;
    let investmentInterestFactor = interestFactor(
      investmentReturn / 100,
      yearsFuture
    );
    let investmentFV = paymentAmount * investmentInterestFactor;
    setInflationFutureValue(inflationFV);
    setInvestmentFutureValue(investmentFV);
    setDisplayResults(true);
    futureValueFormRef.current.reset();
    setTimeout(() => {
      grandEntrance();
    }, 100);
  };

  const grandEntrance = () => {
    inflationFutureValueRef.current.classList.add("animate__animated");
    inflationFutureValueRef.current.classList.add("animate__rubberBand");
    inflationFutureValueRef.current.style.setProperty("color", "#009900");

    investmentFutureValueRef.current.classList.add("animate__animated");
    investmentFutureValueRef.current.classList.add("animate__rubberBand");
    investmentFutureValueRef.current.style.setProperty("color", "#009900");

    setTimeout(function () {
      inflationFutureValueRef.current.classList.remove("animate__rubberBand");
      investmentFutureValueRef.current.classList.remove("animate__rubberBand");
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
        <h3>Future Value of Annual Investments</h3>
        <form
          id="investment-annuity-form"
          onSubmit={(evt) => calculateFutureValues(evt)}
          ref={futureValueFormRef}
        >
          <div className="form-group">
            <label htmlFor="paymentAmount">
              Your Annual Investment (dollars)
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="paymentAmount"
              aria-describedby="paymentAmountHelp"
              placeholder="Enter amount of annual deposits, e.g. 750"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="paymentAmountHelp" className="form-text text-muted">
              The amount of money, in US dollars, you will deposit every year
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="valuationYear">Year of last annual deposit</label>
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
              The year of your last deposit to the annuity.
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
            Calculate Future Value of Annuity
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h3 id="pv-results-heading">Results</h3>
        <div id="pv-results">
          {displayResults ? (
            <div id="pv-computed-results">
              <p>
                The future value of {toCurrency(paymentAmount)} investments to
                be deposited annually into an investment fund until{" "}
                {valuationYear}.
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
                ref={inflationFutureValueRef}
              >
                {toCurrency(inflationFutureValue)}
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
                ref={investmentFutureValueRef}
              >
                {toCurrency(investmentFutureValue)}
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
                <a href="https://financeformulas.net/Future_Value_of_Annuity.html">
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

export default InvestmentAnnuity;
