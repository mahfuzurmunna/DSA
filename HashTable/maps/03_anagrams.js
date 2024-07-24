function anagramGrouping(arr) {
  const anagramGroup = new Map();

  for (const word of arr) {
    const sortedWord = word.split("").sort().join("");
    if (anagramGroup.has(sortedWord)) {
      anagramGroup.get(sortedWord).push(word);
    } else {
      anagramGroup.set(sortedWord, [word]);
    }
  }
  return Array.from(anagramGroup.values());
}
const anagram = ["cat", "act", "dog", "god", "tac"];

console.log(anagramGrouping(anagram));
