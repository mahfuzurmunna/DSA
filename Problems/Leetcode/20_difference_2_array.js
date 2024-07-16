var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let result = [];

  const uniqueSet1 = [...set1].filter((num) => !set2.has(num));

  const uniqueSet2 = [...set2].filter((num) => !set1.has(num));

  result.push(uniqueSet1);
  result.push(uniqueSet2);
  return result;
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

console.log(findDifference(nums1, nums2));
