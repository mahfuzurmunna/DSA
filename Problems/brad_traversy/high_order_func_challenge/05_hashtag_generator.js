function generateHashtag(str) {
  const words = str
    .trim()
    .split(" ")
    .reduce((hash, word) => {
      return hash + word.charAt(0).toUpperCase() + word.slice(1);
    }, "#");

  return words.length === 0 || words.length > 140 ? false : words;
}
let str = "hello world";
let trimmed = str.trim().split(" ");
// console.log(trimmed);

console.log(generateHashtag(str));
