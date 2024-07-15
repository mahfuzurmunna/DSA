let pivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, num) => acc + num);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum - nums[i];
    if (rightSum === leftSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

let nums = [1, 2, 3];
console.log(pivotIndex(nums));
