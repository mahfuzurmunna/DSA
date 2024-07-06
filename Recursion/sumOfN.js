function sumOfN(value) {
  let sum = 0;
  for (let i = 1; i <= value; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfN(6));

function recursiveSumOfN(n) {
  if (n === 1) return n;

  let number = 1;

  return n + recursiveSumOfN(n - 1);
}
console.log(recursiveSumOfN(5));
