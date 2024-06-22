function gcd(num1, num2) {
  if (num1 === num2) {
    return num1;
  }
  if (num1 > num2) {
    return gcd(num1 - num2, num2);
  }
  if (num1 < num2) {
    return gcd(num1, num2 - num1);
  }
}
// 12,24 -> 2,4,6,12

function greatestCommonDivisor(num1, num2) {
  let gcdArr = [];
  for (let i = 1; i <= num2; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcdArr.push(i);
    }
  }
  return gcdArr[gcdArr.length - 1];
}
console.log(Math.min(24, 48));
// console.log(commonDivisor(12, 24));

// console.log(gcdNormal(12, 24));
//reminder approach
const gcdEuclidean = (a, b) => {
  if (b === 0) return a;
  return gcdEuclidean(b, a % b);
};

// console.log(gcdEuclidean(42, 56));
function greatestCommonDivisor(num1, num2) {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
}

console.log(greatestCommonDivisor(24, 48));
