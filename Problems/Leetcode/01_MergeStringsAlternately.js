// var mergeAlternately = function (word1, word2) {
//   let mergedString = "";
//   let i = 0;
//   let j = 0;

//   // case 1: both words are equal or any of them bigger
//   while (i < word1.length && j < word2.length) {
//     mergedString += word1[i];
//     mergedString += word2[j];
//     i++;
//     j++;
//   }

//   //if word1 is bigger
//   while (i < word1.length) {
//     mergedString += word1[i];
//     i++;
//   }

//   //if word2 is bigger
//   while (j < word2.length) {
//     mergedString += word2[j];
//     j++;
//   }
//   return mergedString;
// };

//another solution
const mergeString = (word1, word2) => {
  let i = 0;
  let answer = "";

  while (i < Math.min(word1.length, word2.length)) {
    answer += word1[i];
    answer += word2[i];
    i++;
  }

  if (word1.length > word2.length) {
    answer += word1.slice(i);
  } else {
    answer += word2.slice(i);
  }

  return answer;
};



var mergeAlternately = function(word1, word2) {
  let i  = 0;
  let j  = 0;

  let result = "";

  while(i < word1.length && j < word2.length) {
      result += word1[i];
      result += word2[j];

      i++;
      j++;
  }

  while(i < word1.length) {
      result += word1[i];
      i++
  }

  while(j < word2.length) {
      result += word2[j];
      j++;
  }

  return result
};

console.log(mergeAlternately("abcde","pqr"));