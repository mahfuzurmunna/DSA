const myString = " m  unnna ";

//iterative approach
function removeSpaceTabs(string) {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char !== " " && char !== "\t") {
      result += char;
    }
  }

  return result;
}

console.log(removeSpaceTabs(myString));

function recursiveTABS(string) {
  // Base case: if the string is empty, return the empty string
  if (string === "") return string;

  // If the first character is not a space or a tab, include it in the result
  if (string[0] !== " " && string[0] !== "\t") {
    return string[0] + recursiveTABS(string.slice(1));
  } else {
    // If the first character is a space or a tab, exclude it and recurse on the rest of the string
    return recursiveTABS(string.slice(1));
  }
}

const yString = " hello";
console.log(`Result:${recursiveTABS(yString)}`);
