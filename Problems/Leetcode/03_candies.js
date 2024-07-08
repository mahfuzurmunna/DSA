var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = 0;
  let sumCandies = [];
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    let candy = candies[i];
    if (candy > maxCandies) {
      maxCandies = candy;
    }
  }

  for (let candy of candies) {
    if (candy + extraCandies >= maxCandies) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

//javascript function method
function kidWithCandy(candies, extraCandies) {
  const maxCandy = Math.max(...candies);
  const resultArr = candies.map((candy) =>
    candy + extraCandies >= maxCandy ? true : false
  );
  return resultArr;
}
