function WordCount(str) {
  // code goes here
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  return count;
}

// keep this function call here
console.log(WordCount("hello world"));
