//power of a given number with base and exponent
// power of sum = number , exponent

//iterative appracoh
function powerSumIterative(number, exponent) {
  let result = number;
  for (let i = 1; i < exponent; i++) {
    result = result * number;
  }
  return result;
}

//recursive approach
function powerSumRecursive(number, exponent) {
  if (exponent === 0) return 1;

  return number * powerSumRecursive(number, exponent - 1);
}

console.log(powerSumRecursive(2, 4));
console.log(powerSumIterative(2, 4));
