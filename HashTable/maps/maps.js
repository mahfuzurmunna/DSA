const nameMap = new Map([
  [1, "jhon"],
  [2, "jack"],
  [3, "Jill"],
]);

const myFunction = () => {};
const myObj = {};

const map2 = new Map([
  ["name", "Jhon"],
  [1, "number one"],
  [true, "really true"],
  [null, "null"],
  [myFunction, "my function"],
  [myObj, "my Object"],
]);

console.log(map2);

console.log(nameMap.get(1));
console.log(map2.get(myFunction));

//set values
nameMap.set(4, "Mike");
nameMap.set(5, "Sara");

// console.log(nameMap);

// console.log(nameMap.has(1));
// console.log(nameMap.has(10));

nameMap.delete(1);
console.log(nameMap.has(1));
// console.log(nameMap.size);

//iterating over a map
for (let [key, value] of nameMap) {
  console.log(key, value);
}

// printing each keys and values using forEach
nameMap.forEach((value, key) => console.log(key, value));

console.log(nameMap.keys());
console.log(nameMap.values());

nameMap.clear();

console.log(nameMap.size);
