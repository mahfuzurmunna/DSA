function isVowel(char) {
  let lowerChar = char.toLowerCase();
  const vowels = "aeiou";
  return vowels.includes(lowerChar) ? 1 : 0;
}

function recursive_count_vowels(string, stringLength) {
  //base case
  if (stringLength === 0) {
    return 0;
  }
  //recursive function call
  const decreaseString = recursive_count_vowels(string, stringLength - 1);

  //adding vowel count with recursive function
  let result = isVowel(string[stringLength - 1]) + decreaseString;
  return result;
}

const myString = "oaelooo";
console.log(recursive_count_vowels(myString, myString.length));
