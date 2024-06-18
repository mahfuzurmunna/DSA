function removeAdjDup(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1 || string[i] !== string[i + 1]) {
      result += string[i];
    }
  }
  return result;
}

function recursiveRAD(string) {
  if (string.length <= 1) {
    return string;
  }

  if (string[0] === string[1]) {
    return recursiveRAD(string.substring(1));
  }
  return recursiveRAD(string[0] + recursiveRAD(string.substring(1)));
}

console.log(removeAdjDup("munna"));
