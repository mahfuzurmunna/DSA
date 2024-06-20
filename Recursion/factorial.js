function factorial(n) {
  //base case
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(6));

function fact(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(fact(6));
