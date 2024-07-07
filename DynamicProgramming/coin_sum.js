function coinSumProblem(amount, numbers, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;

  for (const num of numbers) {
    if (coinSumProblem(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }

  memo[amount] = false;
  return false;
}

let arrNum = [6, 11, 15];
let result = coinSumProblem(21, arrNum);
console.log(result);
