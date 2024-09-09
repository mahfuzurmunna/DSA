function missingLetter(arr) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const fIndex = alphabets.indexOf(arr[0]);
  const lIndex = alphabets.indexOf(arr[arr.length - 1]);
  let result = "";

  for (let i = fIndex; i <= lIndex; i++) {
    if (!arr.includes(alphabets[i])) {
      result += alphabets[i];
    }
  }
  return result;
}

const arr = ["O", "Q", "R", "S"];

console.log(missingLetter(arr));
