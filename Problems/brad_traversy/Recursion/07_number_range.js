function numberRange(startNum, endNum) {
  if (endNum === startNum) return [endNum];

  const numbers = numberRange(startNum, endNum - 1);
  //   console.log(numbers);
  numbers.push(endNum);
  //   console.log(endNum);
  return numbers;
}

console.log(numberRange(1, 5));
