//   1 + x/1 + x^2/2! + x^3/3! + x^4/4!...+n terms

function pow(m, n) {
  if (n === 1) return m;
  return pow(m, n - 1) * m;
}

// console.log(pow(3,3))

function sum(n) {
  if (n === 1) return 1;
  return sum(n - 1) * n;
}

// console.log(sum(7));

function e(x, n) {
  let s = 1,
    i,
    num = 1,
    den = 1;

  for (i = 1; i <= n; i++) {
    num *= x;
    den *= i;
    s += num / den;
  }
  return s;
}

console.log(e(2, 10));

function fibo(num) {
  if (num <= 1) return num;
  let memo = {};
  if (num in memo) {
    return memo[num];
  }
  memo[num] = num;
  return fibo(num - 2) + fibo(num - 1);
}

console.log(fibo(40));



