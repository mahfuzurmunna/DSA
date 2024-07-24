function maxSubarraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;
  let i;
  for (i = 0; i < k; i++) {
    currentSum += arr[i];
    maxSum = currentSum;
  }
  for (let j = k; j < arr.length; j++) {
    currentSum = currentSum - arr[j - i] + arr[j];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;

console.log(maxSubarraySum(arr1, k1));
