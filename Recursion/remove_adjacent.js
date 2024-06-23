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

//using js functions to remove all the duplicates
let str = "22342";
let words = str.toLowerCase().split(" ");

const remDuplicate = words.filter((data, index, src) => {
  console.log(`src:${src}, index${index}, data:${data}`);
  return src.indexOf(data) === index;
});
const result = remDuplicate.join("");
console.log(typeof result);
