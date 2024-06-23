function isVowel(char) {
  let lowerChar = char.toLowerCase();
  const vowels = "aeiou";
  return vowels.includes(lowerChar) ? 1 : 0;
}

function VowelCount(str) {
  // console.log(str);
  if (str.length === 0) return 0;
  strLength = str.length - 1;

  const recursiveCall = VowelCount(str.substring(0, strLength));
  const result = isVowel(str[str.length - 1]) + recursiveCall;
  return result;
}
const myString = "oaelooo";
// console.log(VowelCount(myString));

console.log(SwapCase("muNna"));
