// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.
function isVowel(c) {
  return ["a", "e", "i", "o", "u"].indexOf(c.toLowerCase()) !== -1;
}
function VowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count++;
    }
  }
  // code goes here
  return count;
}

// keep this function call here
console.log(VowelCount(readline()));

// function VowelCount(str) {
//   vowels = str.match(/[aeiou]/ig);
//   return vowels.length;
// }

// // keep this function call here
// VowelCount(readline());
