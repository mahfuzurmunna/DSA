function reverseString(str) {
  //base case
  if (str === "") return "";

  //recursive case
  return reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("hello"));
