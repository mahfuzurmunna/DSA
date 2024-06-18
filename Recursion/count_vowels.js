function isVowel(char) {
  let lowerChar = char.toLowerCase();
  const vowels = "aeiou";
  return vowels.includes(lowerChar) ? 1 : 0;
}

function recursive_count_vowels(string, stringLength) {
  if (stringLength === 0) {
    return 0;
  }

  const decreaseString = recursive_count_vowels(string, stringLength - 1);

  let result = isVowel(string[stringLength]) + decreaseString;
  return result;
}
const myString = "munna";
console.log(recursive_count_vowels(myString, myString.length - 1));
