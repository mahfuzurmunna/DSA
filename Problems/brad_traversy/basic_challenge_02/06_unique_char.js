function areAllCharactersUnique(str) {
  const strMap = new Map();

  for (let char of str) {
    strMap.set(char, (strMap.get(char) || 0) + 1);
  }
  let strArr = Array.from(strMap.values());

  if (strArr.includes(2)) {
    return false;
  } else {
    return true;
  }
}

console.log(areAllCharactersUnique("programming"));
