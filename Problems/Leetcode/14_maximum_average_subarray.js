var findMaxAverage = function (nums, k) {
  let sum = 0;
  let result = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let temp = sum;

  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    temp = Math.max(temp, sum);
  }
  return temp / k;
};
