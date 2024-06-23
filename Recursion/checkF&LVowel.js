function checkVowel(char) {
  let lowChar = char.toLowerCase();
  const vowels = "aeiou";

  for (let i = 0; i < vowels.length; i++) {
    if (lowChar === vowels[i]) {
      return lowChar;
    }
  }
  return false;
}

function checkFLVowel(string) {
  let firstChar = string[0];
  let lastChar = string[string.length - 1];
  console.log(firstChar, lastChar);
  if (checkVowel(firstChar) === checkVowel(lastChar)) {
    return true;
  } else {
    return false;
  }
  console.log(checkVowel(firstChar), checkVowel(lastChar));
}

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = /^([aeiou]).*\1$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

console.log(checkFLVowel("abba"));
