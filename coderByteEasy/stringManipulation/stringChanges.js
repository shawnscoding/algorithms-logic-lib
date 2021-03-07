// String Changes
// Have the function StringChanges(str) take the str parameter being passed, which will be a string containing letters from the alphabet, and return a new string based on the following rules. Whenever a capital M is encountered, duplicate the previous character (then remove the M), and whenever a capital N is encountered remove the next character from the string (then remove the N). All other characters in the string will be lowercase letters. For example: "abcNdgM" should return "abcgg". The final string will never be empty.
// Examples
// Input: "MrtyNNgMM"
// Output: rtyggg
// Input: "oMoMkkNrrN"
// Output: ooookkr
// Tags
// string manipulationregular expression

function StringChanges(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "M") {
      if (i === 0) {
        str = str.replace(str[i], "");
        i--;
      } else {
        str = str.replace(str[i], str[i - 1]);
        i--;
      }
    } else if (str[i] === "N") {
      str = str.replace(str[i], "");
      str = str.replace(str[i], "");
      i -= 2;
    }
  }

  // code goes here
  return str;
}

// keep this function call here
console.log(StringChanges(readline()));
