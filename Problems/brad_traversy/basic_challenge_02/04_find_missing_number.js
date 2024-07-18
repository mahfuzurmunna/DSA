function findMissingNumber(arr) {
  let sum = 0;
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  for (let num of arr) {
    sum += num;
  }
  return expectedSum - sum;
}

console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
