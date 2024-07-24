function wordFrequencyCounter(str) {
  const frequency = new Map();

  //removes space and if any punctuations are there(, . : etc)
  const strArr = str.toLowerCase().split(/\W+/);
  for (let char of strArr) {
    if (char === "") continue;
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  console.log(frequency);
}
const str = "The quick brown fox jumps over the lazy dog.";
wordFrequencyCounter(str);
