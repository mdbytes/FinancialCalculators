import React, { useState, useRef } from 'react';
import { Annuity } from '@/calculators/Annuity';

const InvestmentAnnuity = () => {
  const futureValueFormRef: FormRef = useRef(null);
  const inflationFutureValueRef: DivRef = useRef(null);
  const investmentFutureValueRef: DivRef = useRef(null);

  // Set up state values
  const [annuity, setAnnuity] = useState(new Annuity());
  const [displayResults, setDisplayResults] = useState(false);
  const [inflationFutureValue, setInflationFutureValue] = useState(0);
  const [investmentFutureValue, setInvestmentFutureValue] = useState(0);

  const toCurrency = (num: number) => {
    return (1 * num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const calculateFutureValues = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log('annuity', annuity);
    setInflationFutureValue(annuity.getInflationFutureInvestmentValue());
    setInvestmentFutureValue(annuity.getInvestmentFutureInvestmentValue());
    setDisplayResults(true);
    futureValueFormRef.current.reset();
    setTimeout(() => {
      grandEntrance();
    }, 100);
  };

  const grandEntrance = () => {
    inflationFutureValueRef.current.classList.add('animate__animated');
    inflationFutureValueRef.current.classList.add('animate__rubberBand');
    inflationFutureValueRef.current.style.setProperty('color', '#009900');

    investmentFutureValueRef.current.classList.add('animate__animated');
    investmentFutureValueRef.current.classList.add('animate__rubberBand');
    investmentFutureValueRef.current.style.setProperty('color', '#009900');

    setTimeout(function () {
      inflationFutureValueRef.current.classList.remove('animate__rubberBand');
      investmentFutureValueRef.current.classList.remove('animate__rubberBand');
    }, 2000);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDisplayResults(false);
    switch (evt.target.id) {
      case 'paymentAmount':
        annuity.paymentAmount = parseFloat(evt.target.value);
        setAnnuity(annuity);
        break;
      case 'valuationYear':
        annuity.endingYear = parseInt(evt.target.value);
        annuity.beginningYear = new Date().getFullYear();
        setAnnuity(annuity);
        break;
      case 'inflationRate':
        annuity.inflationRate = parseFloat(evt.target.value);
        setAnnuity(annuity);
        break;
      case 'investmentReturn':
        annuity.investmentReturn = parseFloat(evt.target.value);
        setAnnuity(annuity);
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
              aria-describedby="inflationRateHelp"
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
              aria-describedby="investmentReturnHelp"
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
                The future value of {toCurrency(annuity.paymentAmount)}{' '}
                investments to be deposited annually into an investment fund
                until {annuity.endingYear}.
              </p>

              <p style={{ display: 'inline-block' }}>
                Based on inflation returns of {annuity.inflationRate}%:
                &nbsp;&nbsp;
              </p>

              <h4
                style={{
                  display: 'inline-block',
                  textAlign: 'right',
                }}
                className="numeric-result"
                ref={inflationFutureValueRef}
              >
                {toCurrency(inflationFutureValue)}
              </h4>

              <p style={{ display: 'inline-block' }}>
                Based on investment returns of {annuity.investmentReturn}
                %:&nbsp;&nbsp;
              </p>

              <h4
                style={{
                  display: 'inline-block',
                  textAlign: 'right',
                }}
                className="numeric-result"
                ref={investmentFutureValueRef}
              >
                {toCurrency(investmentFutureValue)}
              </h4>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: 'center' }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
          {displayResults ? (
            <div className="methodology">
              <p>
                For details on how this was calculated, see{' '}
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
