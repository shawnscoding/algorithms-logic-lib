// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces.

function LetterCountI(str) {
  let wordArr = str.split(" ");
  let lookup = {};
  let resultWord = { count: 0, word: null };
  for (let i = 0; i < wordArr.length; i++) {
    lookup[wordArr[i]] = {};
    let word = wordArr[i];
    for (let j = 0; j < word.length; j++) {
      let wordObj = lookup[word];
      if (!wordObj[word[j]]) {
        wordObj[word[j]] = 1;
      } else {
        wordObj[word[j]]++;
      }

      if (wordObj[word[j]] > 1 && resultWord.count < wordObj[word[j]]) {
        resultWord = { count: wordObj[word[j]], word };
      }
    }
  }
  if (!resultWord.word) return -1;
  return resultWord.word;
}

// keep this function call here
console.log(LetterCountI(readline()));
