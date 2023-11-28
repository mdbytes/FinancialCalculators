'use client';

import React, { useState, useRef } from 'react';
import { RetirementPlan } from '@/calculators/RetirementPlan';

const Retirement = () => {
  const recapRef: DivRef = useRef();
  const computedRef: DivRef = useRef();
  const retirementFormRef: FormRef = useRef();

  // Set up state values
  const [retirementPlan, setRetirementPlan] = useState(new RetirementPlan());
  const [displayResults, setDisplayResults] = useState(false);

  const toCurrency = (num: number) => {
    return (1 * num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const processRetirementPlanner = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    retirementPlan.setRetirementForecast();
    setRetirementPlan(retirementPlan);
    console.log(retirementPlan);
    setDisplayResults(true);
    // Pause and animate results
    setTimeout(function () {
      grandEntrance();
    }, 200);
  };

  const grandEntrance = () => {
    recapRef.current.classList.add('animate__animated');
    recapRef.current.classList.add('animate__zoomInDown');
    recapRef.current.style.setProperty('color', '#009900');

    computedRef.current.classList.add('animate__animated');
    computedRef.current.classList.add('animate__zoomInDown');
    computedRef.current.style.setProperty('color', '#009900');

    setTimeout(function () {
      recapRef.current.classList.remove('animate__zoomInDown');
      computedRef.current.classList.remove('animate__zoomInDown');
    }, 2000);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDisplayResults(false);
    switch (evt.target.id) {
      case 'currentAssets':
        retirementPlan.currentAssets = parseFloat(evt.target.value);
        setRetirementPlan(retirementPlan);
        //setCurrentAssets(parseFloat(evt.target.value));
        break;
      case 'retirementYear':
        retirementPlan.retirementYear = parseInt(evt.target.value);
        setRetirementPlan(retirementPlan);
        //setRetirementYear(parseInt(evt.target.value));
        break;
      case 'desiredIncome':
        retirementPlan.desiredIncome = parseFloat(evt.target.value);
        setRetirementPlan(retirementPlan);
        //setDesiredIncome(parseFloat(evt.target.value));
        break;
      case 'expectedSSI':
        retirementPlan.expectedSSI = parseFloat(evt.target.value);
        setRetirementPlan(retirementPlan);
        //setExpectedSSI(parseFloat(evt.target.value));
        break;
      case 'investmentReturn':
        retirementPlan.investmentReturn = parseFloat(evt.target.value);
        setRetirementPlan(retirementPlan);
        //setInvestmentReturn(parseFloat(evt.target.value));
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
              aria-describedby="investmentReturnHelp"
              required={true}
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
                Based on your input, your will retire on{' '}
                {retirementPlan.retirementDate.toLocaleDateString()}
              </p>

              <p>
                Your retirement assets at that time will be{' '}
                {toCurrency(retirementPlan.retirementAssets)}
              </p>

              <p>
                Your monthly income will be{' '}
                {toCurrency(retirementPlan.desiredIncome)}
              </p>

              <p>
                Your monthly social security support will be{' '}
                {toCurrency(retirementPlan.expectedSSI)}
              </p>

              <h4 ref={computedRef}>Computed Results</h4>

              {retirementPlan.currentSurplus > 0 ? (
                <div>
                  <p>After 30 years in retirement:</p>
                  <p>
                    Expected surplus:{' '}
                    {toCurrency(retirementPlan.currentSurplus)}
                  </p>
                  <p>
                    You have sufficient funds for beyond 30 years of retirement.
                  </p>
                </div>
              ) : (
                <div>
                  <p>Expected surplus: $0.00</p>
                  <p>
                    You will run out of available funds during the year{' '}
                    {retirementPlan.brokeDate.getFullYear()}
                  </p>
                </div>
              )}

              <div id="retirement-addendum">
                <p>Review the entire monthly retirement schedule below.</p>
                <a href="#retirement-schedule">
                  <i
                    className="fa-solid fa-square-caret-down"
                    style={{
                      color: '#009900',
                      fontSize: '3rem',
                    }}
                  ></i>
                </a>
              </div>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: 'center' }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
        </div>
      </div>
      {displayResults ? (
        <div
          className="row"
          id="retirement-schedule"
          style={{ paddingTop: '5rem' }}
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
              {retirementPlan.retirementForecast.map((month) => {
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
