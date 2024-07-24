function factorial(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1) return n;

  memo[n] = factorial(n - 1, memo) * n;
  return memo[n];
}

console.log(factorial(17));
