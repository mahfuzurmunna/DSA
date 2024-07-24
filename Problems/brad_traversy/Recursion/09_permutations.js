function permutations(str) {
  const result = [];
  if (str.length === 0) {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    let firstChar = str[i];
    let restOfStr = str.slice(0, i) + str.slice(i + 1);
    let subPermutation = permutations(restOfStr);

    for (let j = 0; j < subPermutation.length; j++) {
      result.push(firstChar + subPermutation[j]);
    }
  }
  return result;
}

console.log(permutations("abc"));
