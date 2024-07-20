function sumOfEvenSquares(numbers) {
  //   let sum = 0;
  const evenSquares = numbers
    .filter((number) => number % 2 === 0)
    .map((number) => number * number);

  let sum = evenSquares.reduce((total, number) => total + number, 0);

  return sum;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));
