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

function recursiveTABS(string) {}
