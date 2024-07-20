function findFirstNonRepeatingCharacter(str) {
  const strMap = new Map();
  for (const char of str) {
    strMap.set(char, (strMap.get(char) || 0) + 1);
  }
  //   console.log(strMap);
  //   const strArr = Array.from(strMap.keys());
  //   const strValue = Array.from(strMap.values());

  //   for (let i = 0; i < strValue.length; i++) {
  //     if (strValue[i] === 1) {
  //       return strArr[i];
  //     }
  //   }
  for (const char of str) {
    if (strMap.get(char) === 1) {
      return char;
    }
  }
  return null;
}

console.log(findFirstNonRepeatingCharacter("abcdef"));
