function fibonacci(n) {
  // dp

  //base case
  if (n <= 1) return n;
  //recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibMemorization(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibMemorization(n - 1, memo) + fibMemorization(n - 2, memo);

  return memo[n];
}

function fiboBtmUp(n) {
  const arr = new Array(n + 1);
  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

console.log("normal: " + fibonacci(35));
console.log("memo: " + fibMemorization(35));
console.log("btmUp: " + fiboBtmUp(35));
