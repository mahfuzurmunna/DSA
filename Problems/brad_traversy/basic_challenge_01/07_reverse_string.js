function reverseString(str) {
  let rS = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rS += str[i];
  }

  return rS;
}

console.log(reverseString("hello"));
