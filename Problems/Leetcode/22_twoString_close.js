/*
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
*/

/*
1: Check words length -> proceed || false ✔️
2: Create two Frequency map for both words ✔️
3: Create two Set(table) using FM keys for both words  ✔️
4: Check if both words contain equal unique keys -> proceed || false ✔️
5: Check if both words have same unique keys -> proceed || false ✔️
6: Create two Set using FM values for both words ✔️
7: Convert them into array ✔️
8: Sort the array & convert into string✔️
9: Compare both string if they are equal or not -> proceed || false  ✔️
10: return true; ✔️

*/

var closeStrings = function (word1, word2) {
  //length check
  if (word1.length !== word2.length) return false;

  let frequencyMap1 = new Map();
  let frequencyMap2 = new Map();

  //pushing keys and values in the map
  for (const character of word1) {
    frequencyMap1.set(character, (frequencyMap1.get(character) || 0) + 1);
  }

  for (const character of word2) {
    frequencyMap2.set(character, (frequencyMap2.get(character) || 0) + 1);
  }

  // keys are stored in set table
  const keysOfFM1 = new Set(frequencyMap1.keys());
  const keysOfFM2 = new Set(frequencyMap2.keys());

  //   console.log(keysOfFM1, keysOfFM2);

  //check if there are equal unique keys
  if (keysOfFM1.size !== keysOfFM2.size) return false;

  //check both words have same unique keys
  const hasSameChar = [...keysOfFM1].every((char) => keysOfFM2.has(char));
  if (!hasSameChar) return false;

  //taking the values in two different set and converting them into an array;

  const valuesOfFM1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b);

  const valuesOfFM2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b);

  //checking both vaalues have same unique values
  if (valuesOfFM1.join(",") !== valuesOfFM2.join(",")) return false;

  return true;
};

let word1 = "cabbbaa";
let word2 = "aabbssc";

console.log(closeStrings(word1, word2));
