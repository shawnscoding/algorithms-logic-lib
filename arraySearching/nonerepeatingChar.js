// Nonrepeating Character
// Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.
// Examples
// Input: "abcdef"
// Output: a
// Input: "hello world hi hey"
// Output: w
// Tags
// searchinghash tableAmazonMicrosoft
function NonrepeatingCharacter(str) {
  str = str.replace(/ /g, "");
  if (str.length === 1) return str;
  // use two for loops
  const lookup = {};
  for (let i = 0; i < str.length; i++) {
    lookup[str[i]] ? lookup[str[i]]++ : (lookup[str[i]] = 1);
  }
  for (key in lookup) {
    if (lookup[key] === 1) return key;
  }
}

// keep this function call here
console.log(NonrepeatingCharacter(readline()));
