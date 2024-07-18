function findMaxNumber(arr) {
  let largestValue = 0;

  for (const number of arr) {
    if (number > largestValue) {
      largestValue = number;
    }
  }
  return largestValue;
}

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
