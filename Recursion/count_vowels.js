//count vowels in a string
function isVowel(character) {
  let lowerChar = character.toLowerCase();
  let vowels = "aeiou";
  //   console.log(lowerChar);
  if (vowels.indexOf(lowerChar) != -1) {
    return true;
  } else {
    return false;
  }
}

// isVowel("munna");
function countVowels(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (isVowel(string[i])) {
      count++;
    }
  }

  return count;
}

//recursive method
function recursiveCountVowels(string, stringLength) {
  if (stringLength === 1) {
    return Number(isVowel(string[0]));
  }
  return recursiveCountVowels(string, string.length - 1);
}
