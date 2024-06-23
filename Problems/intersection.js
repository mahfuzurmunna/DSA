const strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];

function FindIntersection(strArr) {
  // code goes here

  const firstArray = strArr[0].split(", ");
  const secondArray = strArr[1].split(", ");
  const intersectCheck = firstArray.filter((value) =>
    secondArray.includes(value)
  );

  return intersectCheck.length > 0 ? intersectCheck.join(",") : "false";
}

console.log(FindIntersection(strArr));
const arr = [1, 2, 42, 32, 22];

const maxHeight = Math.max(...arr);
console.log(...arr);
console.log(maxHeight);
