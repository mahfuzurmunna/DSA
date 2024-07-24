function fibMemorization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibMemorization(n - 1, memo) + fibMemorization(n - 2, memo);

  return memo[n];
}
