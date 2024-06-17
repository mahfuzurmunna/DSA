function printNumber(min, max) {
  if (min > max) return;
  let sum = 0;
  sum += sum + min;
  printNumber(min + 1, max);

  console.log(min);
}

printNumber(1, 5);
