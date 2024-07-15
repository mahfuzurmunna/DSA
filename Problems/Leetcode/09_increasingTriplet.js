function increasingTriplet(nums) {
  let i = Infinity;
  let j = Infinity;

  for (let num of nums) {
    if (num < i) {
      i = num;
    } else if (num < j) {
      j = num;
    } else {
      return true;
    }
  }
  return false;
}

let nums = [20, 100, 10, 12, 5, 13];
console.log(increasingTriplet(nums));
