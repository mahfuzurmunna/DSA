function fibMemorization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return 1;

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

  return memo[n];
}
