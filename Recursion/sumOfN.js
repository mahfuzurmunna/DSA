function sumOfN(value) {
  let sum = 0;
  for (let i = 1; i <= value; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfN(6));
