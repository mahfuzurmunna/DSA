//iterative approach

// function iterativeReverseString(string) {}

// const normal = "hello";
// console.log(reverseString(normal));

//recursive approach
function recursiveReverseString(string) {
  if (string === "") return string;

  let reversePart = recursiveReverseString(
    string.substring(0, string.length - 1)
  );
  // console.log(reversePart);
  let result = string[string.length - 1] + reversePart;
  console.log(result);
  return result;
}

console.log(recursiveReverseString("12345"));
