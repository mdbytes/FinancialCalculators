export const inflationAdjustedValue = (
  priorYear: number,
  currentValue: number
): { pv: number; bc: number } => {
  let inflation = 0;
  let years = new Date().getFullYear() - priorYear;
  if (priorYear >= 2010) {
    inflation = 0.0238;
  } else if (priorYear >= 2000) {
    inflation = 0.0238;
  } else if (priorYear >= 1990) {
    inflation = 0.0236;
  } else if (priorYear >= 1980) {
    inflation = 0.0295;
  } else if (priorYear >= 1970) {
    inflation = 0.04;
  } else if (priorYear >= 1960) {
    inflation = 0.036;
  } else if (priorYear >= 1950) {
    inflation = 0.0351;
  } else if (priorYear >= 1940) {
    inflation = 0.0376;
  } else if (priorYear >= 1930) {
    inflation = 0.0315;
  } else if (priorYear >= 1920) {
    inflation = 0.0259;
  }
  let interestFactor = 1 + inflation;
  let denominator = Math.pow(interestFactor, years);
  let pv = currentValue / denominator;
  let bc = 3.0 / denominator;

  return { pv, bc };
};
