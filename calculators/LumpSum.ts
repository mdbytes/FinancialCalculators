export class LumpSum {
  beginningYear: number = new Date().getFullYear();
  endingYear: number = 0;
  presentValue: number = 0;
  futureValue: number = 0;
  inflationRate: number = 0;
  investmentReturn: number = 0;
  numberOfYears: number = this.endingYear - this.beginningYear;

  constructor() {}

  getFutureValueInflation() {
    return (
      this.presentValue * (1 + this.inflationRate / 100) ** this.numberOfYears
    );
  }

  getFutureValueInvestment() {
    return (
      this.presentValue *
      (1 + this.investmentReturn / 100) ** this.numberOfYears
    );
  }

  getPresentValueInflation() {
    return (
      this.futureValue / (1 + this.inflationRate / 100) ** this.numberOfYears
    );
  }

  getPresentValueInvestment() {
    return (
      this.futureValue / (1 + this.investmentReturn / 100) ** this.numberOfYears
    );
  }
}
