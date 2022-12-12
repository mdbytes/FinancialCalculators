import React, { useState, useRef } from "react";

const PresentValue = () => {
  const presentValueFormRef = useRef();
  const inflationPresentValueRef = useRef();
  const investmentPresentValueRef = useRef();

  // Set up state values
  const [futureValue, setFutureValue] = useState(0.0);
  const [yearReceived, setYearReceived] = useState(0);
  const [inflationRate, setInflationRate] = useState(0.0);
  const [investmentReturn, setInvestmentReturn] = useState(0.0);
  const [displayResults, setDisplayResults] = useState(false);
  const [inflationPresentValue, setInflationPresentValue] = useState(0.0);
  const [investmentPresentValue, setInvestmentPresentValue] = useState(0.0);

  const toCurrency = (num) => {
    return (1 * num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const calculatePresentValues = (evt) => {
    evt.preventDefault();
    let yearsFuture = yearReceived - new Date().getFullYear();
    let inflationPV = futureValue * (1 / Math.pow(1 + inflationRate / 100, yearsFuture));
    let investmentPV = futureValue * (1 / Math.pow(1 + investmentReturn / 100, yearsFuture));
    setInflationPresentValue(inflationPV);
    setInvestmentPresentValue(investmentPV);
    setDisplayResults(true);
    presentValueFormRef.current.reset();
    setTimeout(function () {
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
      case "futureValue":
        setFutureValue(parseFloat(evt.target.value));
        break;
      case "yearReceived":
        setYearReceived(parseInt(evt.target.value));
        break;
      case "inflationRate":
        setInflationRate(parseFloat(evt.target.value));
        break;
      case "investmentReturn":
        setInvestmentReturn(parseFloat(evt.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Calculating Present Value</h3>
        <form id="present-value-form" onSubmit={(evt) => calculatePresentValues(evt)} ref={presentValueFormRef}>
          <div className="form-group">
            <label htmlFor="futureValue">Future Value Received</label>
            <input
              type="number"
              step="0.01"
              min="1.00"
              className="form-control"
              id="futureValue"
              aria-describedby="futureValueHelp"
              placeholder="Enter future value, e.g. 100,000"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="futureValueHelp" className="form-text text-muted">
              The amount of money, in US dollars, you will receive in the future
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="yearReceived">Year funds will be received</label>
            <input
              type="number"
              className="form-control"
              min="2022"
              max="2070"
              id="yearReceived"
              aria-describedby="yearReceivedHelp"
              placeholder="Enter a year prior to 2071"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="yearReceivedHelp" className="form-text text-muted">
              The year the funds will be received
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="inflationRate">Estimated Inflation Rate</label>
            <input
              type="number"
              step="0.001"
              min="0.001"
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
            <label htmlFor="investmentReturn">Estimated Investment Return</label>
            <input
              type="number"
              step="0.001"
              min="0.001"
              className="form-control"
              id="investmentReturn"
              placeholder="Enter investment return, e.g. for 10% enter 10"
              ariadescribedby="investmentReturnHelp"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="investmentReturnHelp" className="form-text text-muted">
              Stock market returns are 6.88% per year since 2000. Since 1980, 11.73%.
            </small>
          </div>
          <button type="submit" className="rounded-pill btn-rounded btn-primary">
            Calculate Present Value
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h3 id="pv-results-heading">Results</h3>
        <div id="pv-results">
          {displayResults ? (
            <div id="pv-computed-results">
              <p>
                Present value of {toCurrency(futureValue)} to be received in the year {yearReceived}.
              </p>

              <p style={{ display: "inline-block" }}>Based on inflation only: &nbsp;&nbsp;</p>

              <h4
                ref={inflationPresentValueRef}
                style={{
                  display: "inline-block",
                  textAlign: "right",
                }}
              >
                {toCurrency(inflationPresentValue)}
              </h4>

              <p style={{ display: "inline-block" }}>Based on expected investment return:&nbsp;&nbsp;</p>

              <h4
                ref={investmentPresentValueRef}
                style={{
                  display: "inline-block",
                  textAlign: "right",
                }}
              >
                {toCurrency(investmentPresentValue)}
              </h4>

              <p>
                Aggressive investors, used to earning more than the inflation rate, would almost always prefer to have
                the money today as opposed to some future date certain.
              </p>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: "center" }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PresentValue;
