var kidsWithCandies = function (candies, extraCandies) {
  let maxCandies = 0;
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
  return candies.map((candy) => candy + extraCandies >= maxCandy);
}

let candies = [2, 3, 5, 1, 3];
let extraCandies = 3;

console.log(kidWithCandy(candies,extraCandies));
