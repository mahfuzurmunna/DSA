function palindromeCheck(string) {
  if (string.length <= 1) return true;

  if (string[0] === string[string.length - 1]) {
    return palindromeCheck(string.slice(1, string.length - 1));
  }

  return false;
}

function reverse(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }

  return reversedString;
}

let myString = "munna";
let palindromeString = "madam";

console.log(palindromeCheck(palindromeString));

if (myString === reverse(myString)) {
  console.log(true);
} else {
  console.log(false);
}
