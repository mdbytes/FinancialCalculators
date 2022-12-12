import React, { useState, useRef } from "react";
import featuredImage from "./images/mortgage.jpg";
import Excerpt from "./Excerpt";
import Photo from "../../../utilities/Photo";

const MortgageAmortization = ({ excerpt = false, seo = false }) => {
  const mortgageFormRef = useRef();

  const [paymentAmount, setPaymentAmount] = useState(0.0);
  const [mortgageAmount, setMortgageAmount] = useState(0.0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0.0);
  const [termInMonths, setTermInMonths] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0.0);
  const [amortization, setAmortization] = useState(null);
  const [displayResults, setDisplayResults] = useState(false);

  const onInputChange = (evt) => {
    setDisplayResults(false);
    switch (evt.target.id) {
      case "beginningBalance":
        setMortgageAmount(parseFloat(evt.target.value));
        break;
      case "annualRate":
        setAnnualInterestRate(parseFloat(evt.target.value / 100));
        break;
      case "loanTerm":
        setTermInMonths(parseInt(evt.target.value * 12));
        break;
      default:
        break;
    }
  };

  const calculatePaymentAmount = (evt) => {
    evt.preventDefault();

    let P = mortgageAmount;
    let i = annualInterestRate / 12;
    let n = termInMonths;
    let pmt = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
    constructAmortization(pmt);
  };

  const constructAmortization = (pmt) => {
    let amort = [];
    let balance = (1 * mortgageAmount).toFixed(2);
    let interestTotal = 0;
    let monthlyRate = annualInterestRate / 12;
    let newMonth, interest, principal;

    for (let i = 1; i <= termInMonths; i++) {
      newMonth = {};
      interest = (monthlyRate * balance).toFixed(2);
      principal = (pmt - interest).toFixed(2);
      balance = (balance - principal).toFixed(2);
      interestTotal += parseFloat(interest);
      newMonth.month = i;
      newMonth.interest = interest;
      newMonth.principal = principal;
      newMonth.balance = balance;
      newMonth.totalInterest = interestTotal.toFixed(2);
      amort.push(newMonth);
    }

    setAmortization(amort);
    setTotalInterest(interestTotal);
    setPaymentAmount(pmt.toFixed(2));
    mortgageFormRef.current.reset();
    setDisplayResults(true);
    setTimeout(function () {
      grandEntrance();
    }, 200);
  };

  const grandEntrance = () => {
    if (
      document &&
      document.querySelectorAll("#mortgage-table tbody td") &&
      document.querySelector("#mortgage-amortization h3")
    ) {
      var mortgageTableTD = document.querySelectorAll(
        "#mortgage-table tbody td"
      );
      var mortgageAmortHeading = document.querySelector(
        "#mortgage-amortization h3"
      );

      for (let td of mortgageTableTD) {
        td.classList.add("animate__animated");
        td.classList.add("animate__rubberBand");
        td.style.setProperty("--animation-duration", "2s");
      }

      mortgageAmortHeading.classList.add("animate__animated");
      mortgageAmortHeading.classList.add("animate__flipInY");
      mortgageAmortHeading.style.setProperty("color", "#009900");
      mortgageAmortHeading.style.setProperty("font-weight", "800");

      setTimeout(function () {
        for (let td of mortgageTableTD) {
          td.classList.remove("animate__animated");
          td.classList.remove("animate__rubberBand");
          mortgageAmortHeading.classList.remove("animate__animated");
          mortgageAmortHeading.classList.remove("animate__flipInY");
        }
      }, 2000);
    }
  };

  const toCurrency = (num) => {
    return (1 * num).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  if (seo) {
    return (
      <>
        Today’s post offers a program offered which takes three items as input;
        (1) the principal amount of the mortgage, (2) the annual interest rate,
        and (3) the term of the loan in years. The program outputs the monthly
        payments, detailing the amount paid for interest and principal each …
      </>
    );
  }
  if (excerpt) {
    let excerpt = (
      <p>
        Today’s post offers a program offered which takes three items as input;
        (1) the principal amount of the mortgage, (2) the annual interest rate,
        and (3) the term of the loan in years. The program outputs the monthly
        payments, detailing the amount paid for interest and principal each …
      </p>
    );
    let title = "Mortgage Amortization";
    let categories = [7];
    let slug = "mortgage-amortization";
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
    <div className="container">
      <div className="feature-image-holder">
        <Photo src={featuredImage} alt="feature" />
      </div>
      <p>
        Today&apos;s post offers a program offered which takes three items as
        input; (1) the principal amount of the mortgage, (2) the annual interest
        rate, and (3) the term of the loan in years. The program outputs the
        monthly payments, detailing the amount paid for interest and principal
        each month. The monthly amortization will also be displayed at the
        user&apos;s request.
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
          <h4>Your mortgage details</h4>
          <table className="table" id="mortgage-table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Mortgage Amount</th>
                <td>{displayResults ? toCurrency(mortgageAmount) : null}</td>
              </tr>
              <tr>
                <th scope="row">Annual Interest Rate</th>
                <td>
                  {displayResults ? annualInterestRate * 100 + "%" : null}
                </td>
              </tr>
              <tr>
                <th scope="row">Term in months</th>
                <td>{displayResults ? termInMonths : null}</td>
              </tr>
              <tr>
                <th scope="row">Payment Amount</th>
                <td>{displayResults ? toCurrency(paymentAmount) : null}</td>
              </tr>
              <tr>
                <th scope="row">Total Interest Paid</th>
                <td>{displayResults ? toCurrency(totalInterest) : null}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {displayResults ? (
        <div className="row" id="mortgage-amortization">
          <h3>Monthly Amortization</h3>
          <p
            style={{
              maxWidth: "800px",
              width: "75%",
              margin: "2rem auto",
              fontSize: "1rem",
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
                <th scope="col">Month</th>
                <th scope="col">Payment</th>
                <th scope="col">Principal</th>
                <th scope="col">Interest</th>
                <th scope="col">Balance</th>
                <th scope="col">Total Interest</th>
              </tr>
            </thead>
            <tbody>
              {amortization.map((month) => {
                return (
                  <tr key={month.month}>
                    <th>{month.month}</th>
                    <td>{toCurrency(paymentAmount)}</td>
                    <td>{toCurrency(month.principal)}</td>
                    <td>{toCurrency(month.interest)}</td>
                    <td>{toCurrency(month.balance)}</td>
                    <td>{toCurrency(month.totalInterest)}</td>
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

export default MortgageAmortization;
