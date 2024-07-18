function arrayIntersection(arr1, arr2) {
  let result = [];

  for (const num of arr1) {
    if (arr2.includes(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
