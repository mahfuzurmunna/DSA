function removeAdjIterative(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i === string.length - 1 || string[i] !== string[i + 1]) {
      result += string[i];
    }
  }
  return result;
}
console.log(removeAdjIterative("munna"));

//remove adjacency using recursion
function removeAdjRecursion(string) {
  if (string === "") return "";

  if (string[0] === string[1]) {
    return removeAdjRecursion(string.substring(1));
  }
  return string[0] + removeAdjRecursion(string.substring(1));
}

console.log(removeAdjRecursion("eeeemmmmmmmmm1000"));

// console.log();

//using js functions to remove all the duplicates
let str = "aabbccaade";
let words = str.toLowerCase().split("");
// console.log(words);

const remDuplicate = words.filter((data, index, src) => {
  // console.log(`src:${src}, index${index}, data:${data}`);
  return src.indexOf(data) === index;
});
const result = remDuplicate.join("");
// console.log(result);

// console.log(typeof result);
