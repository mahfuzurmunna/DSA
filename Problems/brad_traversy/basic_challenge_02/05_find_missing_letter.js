function findMissingLetter(arr) {
  let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let firstLetter = alphabets.indexOf(arr[0]);
  let lastLetter = alphabets.indexOf(arr[arr.length - 1]);
  let j = 0;
  for (let i = firstLetter; i <= lastLetter; i++) {
    if (arr[j] !== alphabets[i]) {
      return alphabets[i];
    }
    j++;
  }
  return alphabets[lastLetter + 1];
}

let arr = ["a", "c", "d", "e", "f"];

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(findMissingLetter(arr));

// console.log(firstLetter);
