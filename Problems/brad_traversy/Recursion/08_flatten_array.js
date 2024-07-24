function flattenArray(arr) {
  let result = [];

  for (const char of arr) {
    if (Array.isArray(char)) {
      result = result.concat(flattenArray(char));
    } else {
      result.push(char);
    }
  }
  return result;
}

const arr = [
  [1, 2],
  [3, [4, 5]],
  [6, [7]],
];

console.log(flattenArray(arr));
