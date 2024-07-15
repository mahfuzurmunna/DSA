let longestSubarray = function (nums) {
  let left = 0;
  let zeroCount = 0;
  let longest = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > 1) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    longest = Math.max(longest, right - left);
  }

  return longest;
};

let nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];

console.log(longestSubarray(nums));
