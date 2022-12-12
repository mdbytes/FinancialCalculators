import React, { useState, useRef } from "react";

const Retirement = () => {
  const recapRef = useRef();
  const computedRef = useRef();
  const retirementFormRef = useRef();

  // Set up state values
  const [currentAssets, setCurrentAssets] = useState(0.0);
  const [retirementDate, setRetirementDate] = useState();
  const [brokeDate, setBrokeDate] = useState();
  const [retirementAssets, setRetirementAssets] = useState(0.0);
  const [investmentReturn, setInvestmentReturn] = useState(0.0);
  const [retirementYear, setRetirementYear] = useState(0);
  const [desiredIncome, setDesiredIncome] = useState(0.0);
  const [expectedSSI, setExpectedSSI] = useState(0.0);
  const [displayResults, setDisplayResults] = useState(false);
  const [currentSurplus, setCurrentSurplus] = useState(0.0);
  const [retirementForecast, setRetirementForecast] = useState([]);

  const toCurrency = (num) => {
    return (1 * num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const processRetirementPlanner = (evt) => {
    evt.preventDefault();

    //  Set retirement date
    let retirement = new Date();
    retirement.setFullYear(retirementYear);
    setRetirementDate(retirement);

    // Calculate and set retirement assets
    let yearsToRetirement = retirementYear - new Date().getFullYear();
    let earningsRate = investmentReturn / 100;
    let retireAssets =
      currentAssets * Math.pow(1 + earningsRate, yearsToRetirement);
    let surplus = retireAssets;
    setRetirementAssets(retireAssets);

    // Initialize variables needed for retirement forecast
    let rate = investmentReturn / 100 / 12;
    let month = {};
    let retirementPlan = [];

    // Compute retirement schedule by month
    for (let k = 1; k <= 360; k++) {
      month = {};
      month.number = k;
      month.startingAssets = surplus;
      month.desiredIncome = -1.0 * desiredIncome;
      month.SSI = 1.0 * expectedSSI;
      month.investmentEarnings = 1.0 * surplus * rate;
      surplus = surplus - desiredIncome + expectedSSI + surplus * rate;
      month.endingAssets = surplus;
      retirementPlan.push(month);

      // Stop if expected income cannot be supported by assets
      if (surplus < 0) {
        // Calculate and set date funds were depleted
        let broke = new Date();
        broke.setFullYear(retirementYear + Math.floor(k / 12));
        broke.setMonth(k % 12);
        setBrokeDate(broke);

        // Leave the schedule calculator
        break;
      }
    }

    // Set calculated retirement forecast
    setRetirementForecast(retirementPlan);

    // Set ending retirement surplus (deficit)
    setCurrentSurplus(surplus);

    // Reset form
    retirementFormRef.current.reset();

    // Display results
    setDisplayResults(true);

    // Pause and animate results
    setTimeout(function () {
      grandEntrance();
    }, 200);
  };

  const grandEntrance = () => {
    recapRef.current.classList.add("animate__animated");
    recapRef.current.classList.add("animate__zoomInDown");
    recapRef.current.style.setProperty("color", "#009900");

    computedRef.current.classList.add("animate__animated");
    computedRef.current.classList.add("animate__zoomInDown");
    computedRef.current.style.setProperty("color", "#009900");

    setTimeout(function () {
      recapRef.current.classList.remove("animate__zoomInDown");
      computedRef.current.classList.remove("animate__zoomInDown");
    }, 2000);
  };

  const onInputChange = (evt) => {
    evt.preventDefault();
    setDisplayResults(false);
    switch (evt.target.id) {
      case "currentAssets":
        setCurrentAssets(parseFloat(evt.target.value));
        break;
      case "retirementYear":
        setRetirementYear(parseInt(evt.target.value));
        break;
      case "desiredIncome":
        setDesiredIncome(parseFloat(evt.target.value));
        break;
      case "expectedSSI":
        setExpectedSSI(parseFloat(evt.target.value));
        break;
      case "investmentReturn":
        setInvestmentReturn(parseFloat(evt.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="row" id="retirement-planner">
      <div className="col-md-6">
        <h3>Retirement Planner</h3>
        <form
          id="retirement-form"
          onSubmit={(evt) => processRetirementPlanner(evt)}
          ref={retirementFormRef}
        >
          <div className="form-group">
            <label htmlFor="currentAssets">Current Assets</label>
            <input
              type="number"
              step="0.01"
              min="0.00"
              className="form-control"
              id="currentAssets"
              aria-describedby="currentAssetsHelp"
              placeholder="The current amount of your assets"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="futureValueHelp" className="form-text text-muted">
              The amount, in US dollars, of your assets
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="retirementYear">Year you plan to retire</label>
            <input
              type="number"
              className="form-control"
              min="2022"
              max="2070"
              id="retirementYear"
              aria-describedby="retirementYearHelp"
              placeholder="Enter a year prior to 2071"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="retirementYearHelp" className="form-text text-muted">
              The year of your desired retirement
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="desiredIncome">
              Your desired monthly total income
            </label>
            <input
              type="number"
              step="0.01"
              min="0.01"
              className="form-control"
              id="desiredIncome"
              aria-describedby="desiredIncomeHelp"
              placeholder="Desired monthly income"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="desiredIncomeHelp" className="form-text text-muted">
              Income desired
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="expectedSSI">
              Expected monthly social security
            </label>
            <input
              type="number"
              className="form-control"
              id="expectedSSI"
              step="0.01"
              min="0.00"
              aria-describedby="expectedSSIHelp"
              placeholder="Estimate of monthly SSI support"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="expectedSSIHelp" className="form-text text-muted">
              Available from Social Security Administration
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="investmentReturn">
              Estimated Investment Return
            </label>
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
              Stock market returns are 6.88% per year since 2000. Since 1980,
              11.73%.
            </small>
          </div>
          <button
            type="submit"
            className="rounded-pill btn-rounded btn-primary"
          >
            Calculate Retirement Plan
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h3 id="pv-results-heading">Results</h3>
        <div id="pv-results">
          {displayResults ? (
            <div id="pv-computed-results">
              <h4 ref={recapRef}>Retirement Recap</h4>

              <p>
                Based on your input, your will retire on{" "}
                {retirementDate.toLocaleDateString()}
              </p>

              <p>
                Your retirement assets at that time will be{" "}
                {toCurrency(retirementAssets)}
              </p>

              <p>Your monthly income will be {toCurrency(desiredIncome)}</p>

              <p>
                Your monthly social security support will be{" "}
                {toCurrency(expectedSSI)}
              </p>

              <h4 ref={computedRef}>Computed Results</h4>

              {currentSurplus > 0 ? (
                <div>
                  <p>After 30 years in retirement:</p>
                  <p>Expected surplus: {toCurrency(currentSurplus)}</p>
                  <p>
                    You have sufficient funds for beyond 30 years of retirement.
                  </p>
                </div>
              ) : (
                <div>
                  <p>Expected surplus: $0.00</p>
                  <p>
                    You will run out of available funds during the year{" "}
                    {brokeDate.getFullYear()}
                  </p>
                </div>
              )}

              <div id="retirement-addendum">
                <p>Review the entire monthly retirement schedule below.</p>
                <a href="#retirement-schedule">
                  <i
                    className="fa-solid fa-square-caret-down"
                    style={{
                      color: "#009900",
                      fontSize: "3rem",
                    }}
                  ></i>
                </a>
              </div>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: "center" }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
        </div>
      </div>
      {displayResults ? (
        <div
          className="row"
          id="retirement-schedule"
          style={{ paddingTop: "5rem" }}
        >
          <h3>Retirement Schedule</h3>

          <div className="for-small-screens">
            <h5>Available on desktop screen size only.</h5>
          </div>

          <table className="table" id="amortization-table">
            <thead>
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Starting Assets</th>
                <th scope="col">Income</th>
                <th scope="col">SSI Support</th>
                <th scope="col">Investment Earnings</th>
                <th scope="col">Ending Assets</th>
              </tr>
            </thead>
            <tbody>
              {retirementForecast.map((month) => {
                return (
                  <tr key={month.number}>
                    <th>{month.number}</th>
                    <td>{toCurrency(month.startingAssets)}</td>
                    <td>{toCurrency(month.desiredIncome)}</td>
                    <td>{toCurrency(month.SSI)}</td>
                    <td>{toCurrency(month.investmentEarnings)}</td>
                    <td>{toCurrency(month.endingAssets)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};

export default Retirement;
