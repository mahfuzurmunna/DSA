var decodeString = function (s) {
  let stack = [];
  let currentChar = "";
  let currentNumber = "";

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber += char;
    } else if (char === "[") {
      stack.push(Number(currentNumber));
      stack.push(currentChar);

      currentNumber = "";
      currentChar = "";
      console.log(stack);
    } else if (char === "]") {
      let prevChar = stack.pop();
      let prevNumber = stack.pop();

      currentChar = prevChar + currentChar.repeat(prevNumber);
    } else {
      currentChar += char;
      console.log(currentChar);
    }
  }
  console.log(currentChar);
};

let s = "3[a2[c]]";

decodeString(s);
