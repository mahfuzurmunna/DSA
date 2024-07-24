const newSet = new Set();
const newObj = {
  name: "munna",

  age: 27,
};
const newArr = ["munna", "goki", "mahfuz", "munna"];

const nameSet = new Set(newArr);

nameSet.add("rahman");
for (const value of nameSet) {
  console.log(value);
}
// console.log(nameSet.values());

nameSet.clear();
console.log(nameSet);
