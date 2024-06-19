function isVowel(stringChar) {
  let lowerChar = stringChar.toLowerCase();
  let vowels = "aeiou";
  return vowels.includes(lowerChar) ? true : false;
}

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    let stringChar = s[i];
    if (isVowel(stringChar)) {
      console.log(stringChar);
      continue;
    }
  }
  for (let i = 0; i < s.length; i++) {
    let stringChar = s[i];
    if (!isVowel(stringChar)) {
      console.log(stringChar);
    }
  }
}

vowelsAndConsonants("munna");
