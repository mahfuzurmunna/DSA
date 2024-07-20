function highestScoringWord(string) {
  let alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let word = "";
  let score = 0;
  let highestScore = 0;
  let highestWord = "";

  let strArr = string.split("");
  console.log(strArr[0].charCodeAt(0) - 96);

  strArr.map((char) => {
    if (char !== " ") {
      word += char;
      score += alphabet[char];
    } else {
      if (score > highestScore) {
        highestWord = word;
        highestScore = score;
      }
      word = "";
      score = 0;
    }
  });

  if (score > highestScore) {
    highestWord = word;
    highestScore = score;
  }

  return highestWord;
}

function HSW(str) {
  const words = str.split(" ");
  const scores = words.map((word) =>
    Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    )
  );

  let highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

console.log(HSW("what time are we climbing up the volcano"));
