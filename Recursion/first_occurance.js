const myArr = [3, 4, 1, 8, 1, 7];

function firstOccurance(arr, number) {
  const findMe = number;
  let output;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === findMe) {
      output = i;
    } else {
      return -1;
    }
  }
  return output;
}

function recursiveFirstOcc(arr, findMe, currIndex) {
  if (arr.length === currIndex) {
    return -1;
  }
  if (arr[currIndex] === findMe) {
    return currIndex;
  }
  return recursiveFirstOcc(arr, findMe, currIndex + 1);
}
console.log(firstOccurance(myArr, 9));
