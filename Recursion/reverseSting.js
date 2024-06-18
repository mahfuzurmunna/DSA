//recursive approach
function recursiveReverseString(string, stringLength) {
  if (stringLength === 0) return "";
  console.log(string[stringLength - 1]);
  let recursiveFunc = recursiveReverseString(string, stringLength - 1);

  let result = string[stringLength - 1] + recursiveFunc;
  return result;
}
const myString = "mun";
console.log(recursiveReverseString(myString, myString.length));
