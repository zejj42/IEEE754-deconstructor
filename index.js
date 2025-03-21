const MIN_EXPONENT = -1074;
const SIGNIFICAND_BITS = 53;
const INITIAL_EXPONENT = MIN_EXPONENT - SIGNIFICAND_BITS - 1;

function computeExponent(coefficient) {
  let exponent = INITIAL_EXPONENT;
  let temp = coefficient;
  while (temp !== 0) {
    exponent++;
    temp /= 2;
  }
  return exponent;
}

function rescaleCoefficient(coefficient, powerCount) {
  while (powerCount > 0) {
    coefficient /= 2;
    powerCount--;
  }
  while (powerCount < 0) {
    coefficient *= 2;
    powerCount++;
  }
  return coefficient;
}

function deconstruct(number) {
  let sign = 1;
  let coefficient = number;
  let exponent = 0;

  if (coefficient < 0) {
    coefficient = -coefficient;
    sign = -1;
  }

  if (Number.isFinite(number) && number !== 0) {
    exponent = computeExponent(coefficient);
    coefficient = rescaleCoefficient(coefficient, exponent);
  }
  return {
    sign,
    coefficient,
    exponent,
    number,
  };
}
