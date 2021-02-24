const { englishChardic } = require("../helper.js");

// Alphabet Searching
// Have the function AlphabetSearching(str) take the str parameter being passed and return the string true if every single letter of the English alphabet exists in the string, otherwise return the string false. For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the string true because every character in the alphabet exists in this string even though some characters appear more than once.
// Examples
// Input: "abcdefghijklmnopqrstuvwxyyyy"
// Output: false
// Input: "abc123456kmo"
// Output: false
// Tags
// string manipulationsearching

function AlphabetSearching(str) {
  for (let i = 0; i < str.length; i++) {
    englishChardic[str[i]] = true;
  }

  for (let key in englishChardic) {
    if (!englishChardic[key]) return "false";
  }

  // code goes here
  return "true";
}

// keep this function call here
console.log(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pnsowtuv"));

function AlphabetSearching(str) {
  const hash = {};

  let res = str.replace(/[^a-zA-Z]/g, "");

  for (var c of res) {
    if (hash[c] == undefined) {
      hash[c] = 1;
    } else {
      hash[c] += 1;
    }
  }
  // console.log(hash)
  return Object.keys(hash).length >= 26;
}

// keep this function call here
AlphabetSearching(readline());
