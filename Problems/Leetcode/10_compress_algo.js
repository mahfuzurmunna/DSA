var compress = function (chars) {
  if (!chars.length) return 0;
  let count = 0;
  let j = 0;
  let currChar = chars[0];
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === currChar) {
      count++;
    } else {
      char[j] = currChar;

      //if an element is multiple then we will change it
      if (count > 1) {
        for (const str of count.toString()) {
          chars[++j] = str;
        }
      }
      j++;
      currChar = chars[i];
      counter = 1;
    }
  }
  return j;
};
