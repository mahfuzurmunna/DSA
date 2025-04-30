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

// console.log(SwapCase("muNna"));

function countVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (char of str) {
    if (vowels.includes(char)) count++;
  }

  return count;
}

console.log(countVowels("munna"));

function isVowelRepeat(char) {
  let lowerChar = char.toLowerCase();
  let vowels = "aeiou";

  if (vowels.indexOf(lowerChar) !== -1) {
    return true;
  } else {
    return false;
  }
}

function countVowelsAgain(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (isVowelRepeat(string[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowelsAgain("aeioue"));

function recursiveCountVowelsRepeat(string, stringLength) {
  if (stringLength === 1) {
    return Number(isVowel(string[0]));
  }
  return (
    recursiveCountVowelsRepeat(string, stringLength - 1) +
    isVowel(string[stringLength - 1])
  );
}

let myStr = "hello";

console.log(recursiveCountVowelsRepeat(myStr, myStr.length));
