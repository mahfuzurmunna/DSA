function symmetricDifference(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

function symmetricDifference2(arr1, arr2) {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);
  let result = new Array();

  for (const number of arr1Set) {
    if (!arr2Set.has(number)) {
      result.push(number);
    }
  }
  for (const number of arr2Set) {
    if (!arr1Set.has(number)) {
      result.push(number);
    }
  }
  return result;
}

const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
console.log(symmetricDifference2(arr1, arr2));
