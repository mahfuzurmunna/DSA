function twoSumNormal(arr, target) {
  let temp = new Set(arr);
  let newArr = Array.from(temp);
  arr.sort((a, b) => a - b);

  let i = 0;
  let j = arr.length - 1;
  let result = [];

  while (i < j) {
    if (arr[i] + arr[j] === target) {
      result.push(newArr.indexOf(arr[i]));
      result.push(newArr.indexOf(arr[j]));
      break;
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else if (arr[i] + arr[j] < target) {
      i++;
    }
  }

  return result;
}

function twoSum(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }
    numSet.add(nums[i]);
  }

  return [];
}

console.log(twoSum([3, 2, 4], 6));
