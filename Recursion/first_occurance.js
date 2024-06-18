const myArr = [3, 4, 1, 8, 1, 7];
myArr.filter((value) => {
  if (value === 1) {
    // console.log(`index of 1 : ${myArr.indexOf(value)}`);
  }
});

function firstOccurance(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(firstOccurance(myArr, 1));

// console.log(first);

// function firstOccurance(arr, element) {
//   myArr.filter((element) => {

//   });
// }

function recursiveFirstOccurance(arr, value, currIndex) {
  if (arr.length === currIndex) return -1;

  if (arr[currIndex] === value) return currIndex;
  return recursiveFirstOccurance(arr, value, currIndex + 1);
}

console.log(recursiveFirstOccurance(myArr, 8, 0));
