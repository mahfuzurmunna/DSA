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

//recursive
function recursiveFibonacci(value) {
  if (value <= 1) {
    return value;
  }
  return recursiveFibonacci(value - 2) + recursiveFibonacci(value - 1);
}

console.log(fibonacci(4));
