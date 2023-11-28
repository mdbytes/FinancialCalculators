import React, { useState, useRef } from 'react';
import { LumpSum } from '@/calculators/LumpSum';

const FutureValue = () => {
  const futureValueFormRef: FormRef = useRef(null);
  const inflationFutureValueRef: DivRef = useRef(null);
  const investmentFutureValueRef: DivRef = useRef(null);

  // Set up state values
  const [lumpSum, setLumpSum] = useState(new LumpSum());
  const [displayResults, setDisplayResults] = useState(false);
  const [inflationFutureValue, setInflationFutureValue] = useState(0.0);
  const [investmentFutureValue, setInvestmentFutureValue] = useState(0.0);

  const toCurrency = (num: number) => {
    return (1 * num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const calculateFutureValues = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    lumpSum.getFutureValueInflation();
    lumpSum.getFutureValueInvestment();
    setLumpSum(lumpSum);
    setInflationFutureValue(lumpSum.getFutureValueInflation());
    setInvestmentFutureValue(lumpSum.getFutureValueInvestment());
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
      case 'presentValue':
        lumpSum.presentValue = parseFloat(evt.target.value);
        setLumpSum(lumpSum);
        break;
      case 'valuationYear':
        lumpSum.endingYear = parseInt(evt.target.value);
        lumpSum.numberOfYears = lumpSum.endingYear - new Date().getFullYear();
        setLumpSum(lumpSum);
        break;
      case 'inflationRate':
        lumpSum.inflationRate = parseFloat(evt.target.value);
        setLumpSum(lumpSum);
        break;
      case 'investmentReturn':
        lumpSum.investmentReturn = parseFloat(evt.target.value);
        setLumpSum(lumpSum);
        break;
      default:
        break;
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Calculating Future Value</h3>
        <form
          id="future-value-form"
          onSubmit={(evt) => calculateFutureValues(evt)}
          ref={futureValueFormRef}
        >
          <div className="form-group">
            <label htmlFor="presentValue">Present Value Received</label>
            <input
              type="number"
              step="0.01"
              min="1.00"
              className="form-control"
              id="presentValue"
              aria-describedby="presentValueHelp"
              placeholder="Enter current value, e.g. 100,000"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="presentValueHelp" className="form-text text-muted">
              The amount of money, in US dollars, you will receive in the future
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="valuationYear">Future year for valuation</label>
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
              The year in the future to evaluate growth of funds.
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
              min="0.001"
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
            Calculate Future Value
          </button>
        </form>
      </div>
      <div className="col-md-6">
        <h3 id="pv-results-heading">Results</h3>
        <div id="pv-results">
          {displayResults ? (
            <div id="pv-computed-results">
              <p>
                The future value of {toCurrency(lumpSum.presentValue)} to be
                received today and invested until the year {lumpSum.endingYear}.
              </p>

              <p style={{ display: 'inline-block' }}>
                Based on inflation returns only: &nbsp;&nbsp;
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
                Based on expected investment returns:&nbsp;&nbsp;
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

              <p>
                Aggressive investors, used to earning more than the inflation
                rate, would almost always prefer to have the money today as
                opposed to some future date certain.
              </p>
            </div>
          ) : (
            <div id="results-placeholder" style={{ textAlign: 'center' }}>
              <h5>Results will be shown once calculated.</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FutureValue;
