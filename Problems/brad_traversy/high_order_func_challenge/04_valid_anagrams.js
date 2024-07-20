function validAnagrams(str1, str2) {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  let result = [];

  str1Arr.forEach((char) => result.push(str2Arr.includes(char)));

  return result.includes(false) ? false : true;
}
console.log(validAnagrams("listen", "silent"));

let str2 = "silent";
const freqCount2 = str2.split("").reduce((acc, char) => {
  acc[char] = (acc[char] || 0) + 1;
  return acc;
}, {});

console.log(freqCount2);

function vA(str1, str2) {
  const frequencyStr1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const frequencyStr2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  Object.keys(frequencyStr1).every((char) => console.log("char: " + char));
}

vA("hello", "world");
