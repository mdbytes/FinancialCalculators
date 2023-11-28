class RetirementMonth {
  number: number = 0;
  startingAssets: number = 0;
  desiredIncome: number = 0;
  SSI: number = 0.0;
  investmentEarnings: number = 0.0;
  surplus: number = 0.0;
  endingAssets: number = 0.0;

  constructor() {}
}

export class RetirementPlan {
  currentAssets: number = 0;
  retirementDate: Date = new Date();
  brokeDate: Date = new Date();
  retirementAssets: number = 0;
  investmentReturn: number = 0.0;
  retirementYear: number = 0;
  desiredIncome: number = 0.0;
  expectedSSI: number = 0;
  currentSurplus: number = 0.0;
  retirementForecast: RetirementMonth[] = [new RetirementMonth()];

  constructor() {}

  setRetirementForecast() {
    // Calculate and set retirement assets
    let yearsToRetirement = this.retirementYear - new Date().getFullYear();
    let earningsRate = this.investmentReturn / 100;
    let retireAssets =
      this.currentAssets * Math.pow(1 + earningsRate, yearsToRetirement);
    let surplus = retireAssets;
    this.retirementAssets = retireAssets;
    this.retirementDate.setFullYear(
      this.retirementDate.getFullYear() + yearsToRetirement
    );

    // Initialize variables needed for retirement forecast
    let rate = this.investmentReturn / 100 / 12;

    // Compute retirement schedule by month
    this.retirementForecast.pop();
    for (let k = 1; k <= 360; k++) {
      let month: RetirementMonth = new RetirementMonth();
      month.number = k;
      month.startingAssets = surplus;
      month.desiredIncome = -1.0 * this.desiredIncome;
      month.SSI = 1.0 * this.expectedSSI;
      month.investmentEarnings = 1.0 * surplus * rate;
      surplus =
        surplus - this.desiredIncome + this.expectedSSI + surplus * rate;
      month.endingAssets = surplus;
      this.currentSurplus = surplus;
      this.retirementForecast.push(month);

      // Stop if expected income cannot be supported by assets
      if (this.currentSurplus < 0) {
        // Calculate and set date funds were depleted
        let broke = new Date();
        broke.setFullYear(this.retirementYear + Math.floor(k / 12));
        broke.setMonth(k % 12);
        this.brokeDate = broke;

        // Leave the schedule calculator
        break;
      }
    }
  }
}
