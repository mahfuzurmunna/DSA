function rollDice() {
  let min = 1;
  let max = 7;
  return Math.floor(Math.random() * (max - min) + min);
}
function diceGameSimulation(numSimulations) {
  let result = new Array(numSimulations);
  let diceObject = {};
  for (let i = 0; i < numSimulations; i++) {
    diceObject.dice1 = rollDice();
    diceObject.dice2 = rollDice();
    diceObject.sum = diceObject.dice1 + diceObject.dice2;
    if (diceObject.sum === 7 || diceObject.sum === 11) {
      diceObject.result = "win";
    } else if (
      diceObject.sum === 2 ||
      diceObject.sum === 3 ||
      diceObject.sum === 12
    ) {
      diceObject.result = "lose";
    } else {
      diceObject.result = "roll again";
    }
    result.push(diceObject);
    diceObject = {};
  }
  //   for (const diceGame of result) {
  //     return diceGame;
  //   }

  return result;
}

console.log(diceGameSimulation(3));
