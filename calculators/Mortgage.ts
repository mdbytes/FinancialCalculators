class AmortMonth {
  month: number = 0;
  interest: number = 0;
  principal: number = 0;
  balance: number = 0;
  totalInterest: number = 0;

  constructor() {}
}

export class Mortgage {
  principalAmount: number = 0;
  termInMonths: number = 0;
  annualInterestRate: number = 0.0;
  paymentAmount: number = 0.0;
  totalInterest: number = 0.0;
  amortization: AmortMonth[] = [new AmortMonth()];

  constructor() {}

  getPaymentAmount(): number {
    let P = this.principalAmount;
    let i = this.annualInterestRate / 12;
    let n = this.termInMonths;
    let pmt = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);

    this.paymentAmount = pmt;
    return pmt;
  }

  getAmortizationTable(): AmortMonth[] {
    let balance = 1 * this.principalAmount;
    let interestTotal = 0;
    let monthlyRate = this.annualInterestRate / 12;
    let interest, principal;
    this.amortization.pop();
    for (let i = 1; i <= this.termInMonths; i++) {
      let newMonth = new AmortMonth();
      interest = monthlyRate * balance;
      principal = this.paymentAmount - interest;
      balance = balance - principal;
      interestTotal += interest;
      newMonth.month = i;
      newMonth.interest = interest;
      newMonth.principal = principal;
      newMonth.balance = balance;
      newMonth.totalInterest = interestTotal;
      this.amortization.push(newMonth);
    }
    this.totalInterest = interestTotal;

    return this.amortization;
  }
}
