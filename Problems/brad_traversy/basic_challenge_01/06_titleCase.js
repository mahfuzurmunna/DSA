function titleCase(str) {
  let strArray = str.toLowerCase().split("");
  strArray[0] = strArray[0].toUpperCase();

  for (let i = 1; i < strArray.length; i++) {
    if (strArray[i] === " ") {
      strArray[i + 1] = strArray[i + 1].toUpperCase();
    }
  }

  return strArray.join("");
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
