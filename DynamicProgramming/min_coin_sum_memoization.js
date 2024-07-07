function minSum(amount, numbers, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCoinsSum = Infinity;

  for (const number of numbers) {
    let result = minSum(amount - number, numbers, memo);
    if (result !== -1) {
      result++;
      if (result < minCoinsSum) {
        minCoinsSum = result;
      }
    }
  }

  memo[amount] = minCoinsSum === Infinity ? -1 : minCoinsSum;

  return memo[amount];
}
