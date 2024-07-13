var moveZeros = function (nums) {
  let inputNonzero = 0;
  if (inputNonzero === nums.length) return nums;
  for (let num of nums) {
    if (num !== 0) {
      nums[inputNonzero] = num;
      inputNonzero++;
    }
  }

  while (inputNonzero < nums.length) {
    nums[inputNonzero] = 0;
    inputNonzero++;
  }
  return nums;
};

let nums = [0, 1, 0, 3, 12];
console.log(moveZeros(nums));
