function increasingTriplet(nums) {
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < first) {
      first = nums[i];
    } else if (nums[i] < second) {
      second = nums[i];
      if (nums[i + 1] > second) {
        return true;
      }
    }
  }
  return false;
}

let nums = [2, 1, 5, 0, 4];
console.log(increasingTriplet(nums));
