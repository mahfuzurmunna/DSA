function longestConsecutiveSequence(arr) {
  const lcsSet = new Set(arr);
  let maxSequence = 0;

  const minValue = Math.min(...arr);
  // return minValue;
  for (let num of lcsSet) {
    if (num === minValue) {
      let currentSequence = 1;
      while (lcsSet.has(num + 1)) {
        num++;
        currentSequence++;
        maxSequence = Math.max(maxSequence, currentSequence);
      }
    }
  }
  return maxSequence;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
