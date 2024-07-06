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
  //base case
  if (string === "") return "";

  let result = "";

  if (string[0] === " " || string[0] === "\t") {
    return recursiveTABS(string.slice(1));
  } else {
    return string[0] + recursiveTABS(string.slice(1));
  }
}

const yString = " hello";
console.log(`Result:${recursiveTABS(yString)}`);
