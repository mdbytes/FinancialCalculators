import { inflationAdjustedValue } from '@/calculators/InflationAdjustedValue';
import React, { useState, useRef } from 'react';

const PastValue = () => {
  const pastValueFormRef: FormRef = useRef(null);
  const pastValueRef: DivRef = useRef(null);
  const breadCostRef: DivRef = useRef(null);

  // Set up state values
  const [currentValue, setCurrentValue] = useState(0.0);
  const [pastValue, setPastValue] = useState(0.0);
  const [breadCost, setBreadCost] = useState(0.0);
  const [priorYear, setPriorYear] = useState(0);
  const [displayResults, setDisplayResults] = useState(false);

  const toCurrency = (num: number) => {
    return (1 * num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const calculatePastValue = (evt: React.FormEvent) => {
    evt.preventDefault();

    let result = inflationAdjustedValue(priorYear, currentValue);

    setPastValue(result.pv);
    setBreadCost(result.bc);
    setDisplayResults(true);
    pastValueFormRef?.current?.reset();
    setTimeout(() => {
      grandEntrance();
    }, 500);
  };

  const grandEntrance = () => {
    pastValueRef.current.classList.add('animate__animated');
    pastValueRef.current.classList.add('animate__rubberBand');
    pastValueRef.current.style.setProperty('color', '#009900');

    breadCostRef.current.classList.add('animate__animated');
    breadCostRef.current.classList.add('animate__rubberBand');
    breadCostRef.current.style.setProperty('color', '#009900');

    setTimeout(function () {
      pastValueRef.current.classList.remove('animate__rubberBand');
      breadCostRef.current.classList.remove('animate__rubberBand');
    }, 2000);
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setDisplayResults(false);
    switch (evt.target.id) {
      case 'currentValue':
        setCurrentValue(parseFloat(evt.target.value));
        break;
      case 'priorYear':
        setPriorYear(parseInt(evt.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Calculating Past Value</h3>
        <p>
          Using historical inflation adjustments, this form allows the user to
          enter a dollar value today. The output will report how much money that
          would have equated to in a prior year.
        </p>
        <form
          id="past-value-form"
          onSubmit={(evt) => calculatePastValue(evt)}
          ref={pastValueFormRef}
        >
          <div className="form-group">
            <label htmlFor="currentValue">Current Value </label>
            <input
              type="number"
              step="0.01"
              min="1.00"
              className="form-control"
              id="currentValue"
              aria-describedby="currentValueHelp"
              placeholder="Enter current value, e.g. 100,000"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="currentValueHelp" className="form-text text-muted">
              The amount of money, in US dollars.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="yearReceived">Prior year to evaluate funds</label>
            <input
              type="number"
              className="form-control"
              min="1920"
              max="2020"
              id="priorYear"
              aria-describedby="priorYearHelp"
              placeholder="Enter a year between 1920 and 2020"
              required
              onChange={(evt) => onInputChange(evt)}
            />
            <small id="yearReceivedHelp" className="form-text text-muted">
              The year the funds will be received
            </small>
          </div>

          <button
            type="submit"
            className="rounded-pill btn-rounded btn-primary"
          >
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
                Well, this looks kind of rough! The value of{' '}
                {toCurrency(currentValue)} today would have been the same as
                having only &nbsp;
                <p
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#009900',
                    textAlign: 'center',
                    marginTop: '1rem',
                  }}
                  ref={pastValueRef}
                >
                  {toCurrency(pastValue)}
                  &nbsp; in {priorYear}
                </p>{' '}
                .
              </p>

              <h4>But bread was cheap in {priorYear}!</h4>

              <p>
                Today&apos;s $3.00&nbsp;{' '}
                <span
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#009900',
                  }}
                >
                  price of a loaf of bread
                </span>{' '}
                would have only cost{' '}
                <p
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#009900',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                  }}
                  ref={breadCostRef}
                >
                  {toCurrency(breadCost)} in {priorYear}
                </p>
                .
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

export default PastValue;
