function recursiveLengthString(string) {
  if (string === "") return 0;

  return 1 + recursiveLengthString(string.substring(1));
}

function iterativeStringLength(string) {
  let count = 0;
  while (string.length > 0) {
    count++;
    string = string.slice(1);
  }
  return count;
}

console.log(iterativeStringLength("munna"));
