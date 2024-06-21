//recursive approach
function recursiveReverseString(string) {
  console.log(string);
  if (string === "") return "";

  // console.log(string[stringLength - 1]);
  let recursiveFunc = recursiveReverseString(
    string.substring(1, string.length)
  );
  // console.log("recurvive function call:" + recursiveFunc);
  let result = recursiveFunc + string[0];
  console.log(
    `RecursiveFunc : ${recursiveFunc} and ${string[0]} = result: ${result}`
  );
  return result;
}
const myString = "hello";
console.log(`Result: ${recursiveReverseString(myString)}`);

function recursiveString(string, stringLength) {
  //base case
}
