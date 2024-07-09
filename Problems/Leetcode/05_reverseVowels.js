function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;
  const char = s.split("");

  while (left < right) {
    if (!vowels.includes(char[left])) ++left;
    if (!vowels.includes(char[right])) --right;
    if (
      left < right &&
      vowels.includes(char[left]) &&
      vowels.includes(char[right])
    ) {
      let temp = char[left];
      char[left] = char[right];
      char[right] = temp;
      left++;
      right--;
    }
  }

  return char.join("");
}

let str = "perpendicular";

console.log(reverseVowels(str));
