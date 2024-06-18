//power of a given number with base and exponent

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return power(base, exponent - 1);
}
