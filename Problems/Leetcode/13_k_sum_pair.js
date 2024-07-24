//sorting method
var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let output = 0;

  while (left < right) {
    if (nums[left] + nums[right] === k) {
      left++;
      right--;
      output++;
    } else if (nums[left] + nums[right] > k) {
      right--;
    } else if (nums[left] + nums[right] < k) {
      left++;
    }
  }
  return output;
};

// map method
var maxOperationsMap = function (nums, k) {};

let nums = [3, 1, 3, 4, 2];

console.log(maxOperations(nums, 6));
