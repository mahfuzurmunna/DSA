//power of a given number with base and exponent
// power of sum = number , exponent

function powerOfSum(number, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return number * powerOfSum(number, exponent - 1);
}

console.log(powerOfSum(5, 1));

function normalPowerOfSum(num, exponent) {
  let total = num;

  for (let i = 1; i < exponent; i++) {
    if (exponent === 1) {
      return num;
    } else {
      total = total * num;
    }
  }
  return total;
}

console.log(normalPowerOfSum(5, 1));
