function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let element of arr) {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  }
  //return uniqueArr;
  return Array.from(new Set(arr));
}

console.log(
  removeDuplicates([1, 2, 3, 4, 5, true, 1, "hello", 2, 3, "hello", true])
);
