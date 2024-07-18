function countOccurrences(str, char) {
  let count = 0;
  for (const letter of str) {
    if (char === letter) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences("hello", "z"));
