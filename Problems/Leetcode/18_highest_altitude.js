var largestAltitude = function (gain) {
  let sum = 0;
  let result = 0;

  for (const aplitude of gain) {
    sum += aplitude;

    result = Math.max(result, sum);
  }

  return result;
};
