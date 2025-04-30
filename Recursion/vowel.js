//recursive solution
function recursiveCountVowel(string) {
  if (string.length === 0) return 0;
  const vowel = "aeiouAEIOU";
  const isVowel = vowel.includes(string[0]) ? 1 : 0;
  return recursiveCountVowel(string.slice(1)) + isVowel;
}

//iterative solution
function isVowel(char) {
  const lowerChar = char.toLowerCase();
  const vowels = "aeiou";
  return vowels.includes(char) ? 1 : 0;
}

function countVowel(string) {
  let count = 0;
  for (let char of string) {
    if (isVowel(char) === 1) {
      count++;
    }
  }
  return count;
}
const myString = "munnaaa";

console.log(recursiveCountVowel(myString));
