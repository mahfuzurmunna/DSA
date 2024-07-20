function findMissingLetter(arr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const firstLetter = alphabets.indexOf(arr[0]);
  const lastLetter = alphabets.indexOf(arr[arr.length - 1]);
  for (let i = firstLetter; i <= lastLetter + 1; i++) {
    if (alphabets[i] !== arr[i]) {
      return alphabets[i];
    }
  }
}

let arr = ["a", "c", "d", "e", "f"];

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(findMissingLetter(arr));

// console.log(firstLetter);
