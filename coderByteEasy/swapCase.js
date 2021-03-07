// Swap Case
// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
// Examples
// Input: "Hello-LOL"
// Output: hELLO-lol
// Input: "Sup DUDE!!?"
// Output: sUP dude!!?
// Tags
// string manipulation

function SwapCase(str) {
  // use for loop
  // check if it's str
  // if it is, swap case
  let i = 1;
  let character = "";
  while (i <= str.length) {
    character = str.charAt(i - 1);
    if (character.match(/[a-zA-Z]/g)) {
      if (character == character.toUpperCase()) {
        str = str.slice(0, i - 1) + character.toLowerCase(i) + str.slice(i);
      }
      if (character == character.toLowerCase()) {
        str = str.slice(0, i - 1) + character.toUpperCase(i) + str.slice(i);
      }
    }
    i++;
  }
  return str;
}

console.log(SwapCase(readline()));

// top rated answer
function SwapCase(str) {
  var swappedCase = "";
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (/[a-z]/.test(char)) {
      swappedCase += char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      swappedCase += char.toLowerCase();
    } else {
      swappedCase += char;
    }
  }
  return swappedCase;
}

console.log(SwapCase(readline()));
