//iterative approach

function reverseString(string) {
  let stringLength = string.length - 1;
  let reversed = "";

  for (let i = stringLength; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

const normal = "hello";
console.log(reverseString(normal));

//recursive approach
function recursiveReverseString(string) {
  let stringLength = string.length - 1;
  let reversedString = "";
  if (string === "") {
    return;
  }

  return (
    string[string.length - 1] +
    recursiveReverseString(string.substring(0, stringLength))
  );
}
