//iterative
function fibonacci(value) {
  let n0 = 0;
  let n1 = 1;

  let temp = 0;

  for (let i = 0; i < value; i++) {
    temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}

//recursive with dp memoization
function recursiveFibonacci(value, memo = {}) {
  if (value in memo) return memo[value];
  if (value <= 1) {
    return value;
  }
  memo[value] =
    recursiveFibonacci(value - 2, memo) + recursiveFibonacci(value - 1, memo);
  return memo[value];
}

console.log(fibonacci(4));

//dp
