'use client';

import React, { useState, useRef, ChangeEvent } from 'react';
import { Mortgage } from '@/calculators/Mortgage';

import Photo from '../utils/Photo';

const MortgagePage = () => {
  const mortgageFormRef: FormRef = useRef(null);

  const [mortgageAmount, setMortgageAmount] = useState(0.0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0.0);
  const [termInMonths, setTermInMonths] = useState(0);
  const [mortgage, setMortgage] = useState(new Mortgage());
  const [displayResults, setDisplayResults] = useState(false);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setDisplayResults(false);
    switch (evt?.target?.id) {
      case 'beginningBalance':
        setMortgageAmount(parseFloat(evt.target?.value));
        break;
      case 'annualRate':
        setAnnualInterestRate(parseFloat(evt.target?.value) / 100);
        break;
      case 'loanTerm':
        setTermInMonths(parseInt(evt.target?.value) * 12);
        break;
      default:
        break;
    }
  };

  const calculatePaymentAmount = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    let mortgage = new Mortgage();
    mortgage.principalAmount = mortgageAmount;
    mortgage.annualInterestRate = annualInterestRate;
    mortgage.termInMonths = termInMonths;
    let pmt = mortgage.getPaymentAmount();
    let amort = mortgage.getAmortizationTable();
    setMortgage(mortgage);
    setDisplayResults(true);
    mortgageFormRef.current.reset();
  };

  const toCurrency = (num: number) => {
    return (1 * num).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  return (
    <div className="container calculator post post-text pb-5">
      <div className="feature-image-holder">
        <h2>Mortgage Payment</h2>
        <h5>with amortization table</h5>
        <Photo
          src="images/financial/mortgage.jpg"
          className="img-fluid"
          alt="feature"
        />
      </div>
      <p>
        The mortgage calculator takes three items as input; (1) the principal
        amount of the mortgage, (2) the annual interest rate, and (3) the term
        of the loan in years. The program outputs the monthly payments,
        detailing the amount paid for interest and principal each month. The
        monthly amortization will also be displayed at the user&apos;s request.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h4>Enter your details and press calculate</h4>
          <form
            id="mortgage-form"
            ref={mortgageFormRef}
            onSubmit={(evt) => calculatePaymentAmount(evt)}
          >
            <div className="form-group">
              <label htmlFor="beginningBalance">Mortgage Amount</label>
              <input
                type="number"
                className="form-control"
                id="beginningBalance"
                aria-describedby="beginBalHelp"
                placeholder="0.00"
                min="0.0"
                step="0.01"
                required
                onChange={(evt) => onInputChange(evt)}
              />
              <small id="beginBalHelp" className="form-text text-muted">
                Enter beginning principal balance of the mortgage
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="annualRate">Annual Interest Rate</label>
              <input
                type="number"
                step="0.001"
                min="0.0"
                className="form-control"
                id="annualRate"
                aria-describedby="annualRateHelp"
                placeholder="0.00"
                required
                onChange={(evt) => onInputChange(evt)}
              />
              <small id="annualRateHelp" className="form-text text-muted">
                Enter the annual interest rate, e.g. for 3.2% enter 3.2
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="loanTerm">Term of Loan</label>
              <input
                type="number"
                className="form-control"
                id="loanTerm"
                aria-describedby="loanTermHelp"
                placeholder="30"
                required
                min="0"
                onChange={(evt) => onInputChange(evt)}
              />
              <small id="loanTermHelp" className="form-text text-muted">
                Enter term of loan in years
              </small>
            </div>
            <button
              id="mortgage-submit"
              type="submit"
              className="btn btn-primary"
            >
              Calculate
            </button>
          </form>
        </div>
        <div className="col-md-6">
          {displayResults ? (
            <>
              <h4>Your mortgage details</h4>
              <table className="table" id="mortgage-table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style={{
                        background: 'transparent',
                        borderBottom: '2px solid black',
                      }}
                    ></th>
                    <th
                      scope="col"
                      style={{
                        background: 'transparent',
                        borderBottom: '2px solid black',
                      }}
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Mortgage Amount</th>
                    <td>
                      {displayResults
                        ? toCurrency(mortgage.principalAmount)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Annual Interest Rate</th>
                    <td>
                      {displayResults ? annualInterestRate * 100 + '%' : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Term in months</th>
                    <td>{displayResults ? termInMonths : null}</td>
                  </tr>
                  <tr>
                    <th scope="row">Payment Amount</th>
                    <td>
                      {displayResults
                        ? toCurrency(mortgage.paymentAmount)
                        : null}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total Interest Paid</th>
                    <td>
                      {displayResults
                        ? toCurrency(mortgage.totalInterest)
                        : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
      {displayResults ? (
        <div className="row" id="mortgage-amortization">
          <h3>Monthly Amortization</h3>
          <p
            style={{
              maxWidth: '800px',
              width: '75%',
              margin: '2rem auto',
              fontSize: '1rem',
            }}
          >
            Monthly amortization of interest and principal is based on a 30/360
            basis as opposed to actual/365. As a result, the ending balance will
            usually have a small amount remaining. On trials with a $240,000
            mortgage, 5.821% interest, 30 years, there is $1.50 at the end of 30
            years.
          </p>
          <table className="table" id="amortization-table">
            <thead>
              <tr>
                <th scope="col" className="text-end">
                  Month
                </th>
                <th scope="col" className="text-end">
                  Payment
                </th>
                <th scope="col" className="text-end">
                  Principal
                </th>
                <th scope="col" className="text-end">
                  Interest
                </th>
                <th scope="col" className="text-end">
                  Balance
                </th>
                <th scope="col" className="text-end">
                  Total Interest
                </th>
              </tr>
            </thead>
            <tbody>
              {mortgage.amortization.map((month) => {
                return (
                  <tr key={month.month}>
                    <th className="text-end">{month.month}</th>
                    <td className="text-end">
                      {toCurrency(mortgage.paymentAmount)}
                    </td>
                    <td className="text-end">{toCurrency(month.principal)}</td>
                    <td className="text-end">{toCurrency(month.interest)}</td>
                    <td className="text-end">{toCurrency(month.balance)}</td>
                    <td className="text-end">
                      {toCurrency(month.totalInterest)}
                    </td>
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

export default MortgagePage;
