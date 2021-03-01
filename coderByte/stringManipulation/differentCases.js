// Different Cases
// Have the function DifferentCases(str) take the str parameter being passed and return it in upper camel case format where the first letter of each word is capitalized. The string will only contain letters and some combination of delimiter punctuation characters separating each word.

// For example: if str is "Daniel LikeS-coding" then your program should return the string DanielLikesCoding.
// Examples
// Input: "cats AND*Dogs-are Awesome"
// Output: CatsAndDogsAreAwesome
// Input: "a b c d-e-f%g"
// Output: ABCDEFG
// Tags
// string manipulationregular expression

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function DifferentCases(str) {
  let arr = str.split(/\W/g);

  arr = arr.map((item) => capitalize(item.toLowerCase()));

  // code goes here
  return arr.join("");
}

// keep this function call here
console.log(DifferentCases(readline()));
