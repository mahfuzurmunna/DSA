//reursive approach
function recursiveReverseString(string) {
  //base case
  if (string === "") return "";

  return recursiveReverseString(string.slice(1)) + string[0];
}

console.log(recursiveReverseString("galo"));

//iterative appraoch
function reverseString(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}

// console.log(reverseString("munna"));
