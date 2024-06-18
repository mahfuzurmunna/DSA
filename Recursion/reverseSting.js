//iterative approach

// function iterativeReverseString(string) {}

// const normal = "hello";
// console.log(reverseString(normal));

//recursive approach
function recursiveReverseString(string, stringLength) {
  console.log(`Current String ${string} `);
  if (string.length === 0) return string;

  let reversePart = recursiveReverseString(
    string.substring(0, string.length - 1)
  );
  // console.log(reversePart);
  let result = string[string.length - 1] + reversePart;
  console.log(
    `reversing last char ${
      string[string.length - 1]
    } added in front of ${reversePart} to form a result ${result}`
  );
  return result;
}

console.log(recursiveReverseString("munna"));
