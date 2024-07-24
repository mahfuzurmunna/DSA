const HashTable = require("./HashTable");

function wordInstanceCount(str, word) {
  const words = str.toLowerCase().split(/\W+/);

  const wordFrequence = new HashTable();

  const targetWord = word.toLowerCase();

  let count = 0;

  for (const currentWord of words) {
    if (currentWord === "") continue;

    if (wordFrequence.has(currentWord)) {
      wordFrequence.set(currentWord, wordFrequence.get(currentWord) + 1);
    } else {
      wordFrequence.set(currentWord, 1);
    }
    if (currentWord === targetWord) {
      count = wordFrequence.get(currentWord);
    }
  }
  console.log(count);
}

wordInstanceCount("The quick fox jumps from the kitchen", "the");
