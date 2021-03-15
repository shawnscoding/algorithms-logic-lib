// String Scramble
// Have the function StringScramble(str1,str2) take both parameters being passed and return the string true if a portion of str1 characters can be rearranged to match str2, otherwise return the string false. For example: if str1 is "rkqodlw" and str2 is "world" the output should return true. Punctuation and symbols will not be entered with the parameters.
// Examples
// Input: "cdore" & str2= "coder"
// Output: true
// Input: "h3llko" & str2 = "hello"
// Output: false
// Tags
// string manipulationsearching
function StringScramble(str1, str2) {
  // make str2 ojt with for loop
  // substract 1 everytime there is corresponding char
  let dics = {};
  for (let i = 0; i < str1.length; i++) {
    // O(N)
    if (dics[str1[i]]) dics[str1[i]] = dics[str1[i]] + 1;
    else dics[str1[i]] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    // O(logN)
    if (!dics[str2[i]]) return "false";
    if (dics[str2[i]] < 0) return "false";
    dics[str2[i]] -= 1;
  }

  return "true";
}

// keep this function call here
console.log(StringScramble(readline()));
