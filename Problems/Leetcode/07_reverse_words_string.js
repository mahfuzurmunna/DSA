function reverseWords(s) {
  let result = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word.length > 0) {
      result.unshift(word);
      word = "";
    }
    if (word.length > 0) result.unshift(word);
  }
  return result.join(" ");
}
