var compress = function (chars) {
  let count = 0;
  let j = 0;
  let currChar = chars[0];
  for (let i = 0; i < chars.length; i++) {
    if (char[i] === currChar) {
      count++;
    } else {
      char[j] = currChar;

      //if an element is multiple then we will change it
      if (count > 1) {
        for (const str of count.toString()) {
          char[++j] = str;
        }
      }
      j++;
      currChar = char[i];
      counter = 1;
    }
  }
  return j;
};
