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

function reverseAStringIterative(string) {
  let reverseStr = "";
  let length = string.length - 1;

  while (length >= 0) {
    reverseStr = reverseStr + string[length];
    length--;
  }
  return reverseStr;
}

// console.log(reverseAStringIterative("munna"));

function reverseStringRecursive(string) {
  // str -> munna, munn, mun, mu, m , ""
  if (string === "") {
    return string;
  }
  let reversePart = reverseStringRecursive(
    string.substring(0, string.length - 1)
  );

  let result = string[string.length - 1] + reversePart;
  console.log("reversing last char: ",result)
  return result
}
console.log(reverseStringRecursive("munna"));
