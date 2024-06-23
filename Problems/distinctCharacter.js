function checkLength(str) {
  // code goes here
  if (str === "") return "";
  const firstChar = str[0];
  const restPart = checkLength(str.substring(1));
  let newStr = "";
  if (firstChar === restPart[0]) {
    newStr += restPart;
  } else {
    newStr += firstChar + restPart;
  }
  return newStr;
}

function DistinctCharacters(str) {
  // code goes here
  let length = checkLength(str).length;

  if (length >= 10) {
    return true;
  }
  return false;
}
let str = "eeeemmmmmmmmm1000";

console.log(DistinctCharacters(str));
