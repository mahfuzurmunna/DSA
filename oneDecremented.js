function OneDecremented(str) {
  let result = 0;

  // let i = 0;
  for (let i = 0; i < str.length; i++) {
    let firstChar = parseInt(str[i]);
    let secChar = parseInt(str[i + 1]);
    if (firstChar - 1 === secChar) {
      result++;
    }
  }
  // code goes here
  return result;
}
