//power of a given number with base and exponent
// power of sum = number , exponent

function powerOfSum(number, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return number * powerOfSum(number, exponent - 1);
}

console.log(powerOfSum(5, 2));
