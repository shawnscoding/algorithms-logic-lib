// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

function removeWhiteSpace(str) {
  return str.replace(/ /g, "");
}

function Palindrome(str) {
  let trimmed = removeWhiteSpace(str);
  let reversed = reverseString(trimmed);

  return trimmed === reversed;
}

// keep this function call here
console.log(Palindrome("eye eye"));
