function generateHashtag(str) {
  if (str.length > 140 || str === "") {
    return false;
  }
  let newStr = str.trim();
  console.log(newStr);
}

console.log(generateHashtag("hello world!"));
