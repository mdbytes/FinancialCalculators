export class Annuity {
  paymentAmount: number = 0;
  beginningYear: number = 0;
  endingYear: number = 0;
  inflationRate: number = 0;
  investmentReturn: number = 0;
  presentValue: number = 0;

  constructor() {}

  getInvestmentInterestFactor(rate: number, years: number) {
    let numerator = Math.pow(1 + rate, years) - 1;
    return numerator / rate;
  }

  getIncomeInterestFactor(rate: number, years: number) {
    let numerator = 1 - Math.pow(1 + rate, -1 * years);
    return numerator / rate;
  }

  getInflationFutureInvestmentValue() {
    let iFactor = this.getInvestmentInterestFactor(
      this.inflationRate / 100,
      this.endingYear - this.beginningYear
    );
    return this.paymentAmount * iFactor;
  }

  getInvestmentFutureInvestmentValue() {
    let iFactor = this.getInvestmentInterestFactor(
      this.investmentReturn / 100,
      this.endingYear - this.beginningYear
    );
    return this.paymentAmount * iFactor;
  }

  getInflationPresentIncomeValue() {
    let iFactor = this.getIncomeInterestFactor(
      this.inflationRate / 100,
      this.endingYear - this.beginningYear
    );
    return this.paymentAmount * iFactor;
  }

  getInvestmentPresentIncomeValue() {
    let iFactor = this.getIncomeInterestFactor(
      this.investmentReturn / 100,
      this.endingYear - this.beginningYear
    );
    return this.paymentAmount * iFactor;
  }
}
